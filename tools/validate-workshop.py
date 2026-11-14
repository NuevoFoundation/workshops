#!/usr/bin/env python3
"""Validate a Nuevo Foundation workshop before publication."""

from __future__ import annotations

import argparse
import ast
import re
import sys
from dataclasses import dataclass
from pathlib import Path

from workshop_taxonomy import load_taxonomy


FRONTMATTER_DELIMITER = "---"
TAXONOMY = load_taxonomy()
REQUIRED_PAGE_FIELDS = {"title", "date", "draft"}
REQUIRED_INDEX_FIELDS = {
    "title",
    "description",
    "date",
    "prereq",
    "language",
    "topics",
    "difficulties",
    "draft",
    "hidden",
    "alwaysopen",
    "icon",
    "weight",
}
SCAFFOLD_PLACEHOLDERS = (
    "[describe what students will learn]",
    "[Activity instructions go here]",
    "[Challenge description]",
    "[Solution code here]",
    "[Title]",
    "[Step 1]",
)
MARKDOWN_IMAGE_RE = re.compile(r"!\[(?P<alt>[^\]]*)\]\((?P<src>[^)\s]+)")
HTML_IMAGE_RE = re.compile(r"<img\b(?P<attrs>[^>]*)>", re.IGNORECASE)
HTML_ATTRIBUTE_RE = re.compile(
    r"""(?P<name>[A-Za-z_:][-A-Za-z0-9_:.]*)\s*=\s*["'](?P<value>[^"']*)["']"""
)
PYTHON_BLOCK_RE = re.compile(r"```python\s*\n(?P<code>.*?)```", re.DOTALL)
PLAYGROUND_RE = re.compile(
    r"\{\{<\s*python-playground\b[^>]*>\}\}\s*\n"
    r"(?P<code>.*?)"
    r"\{\{<\s*/python-playground\s*>\}\}",
    re.DOTALL,
)
DEPRECATED_IDE_RE = re.compile(r"trinket\.io", re.IGNORECASE)


@dataclass(frozen=True)
class Finding:
    path: Path
    message: str


def parse_frontmatter(path: Path) -> tuple[dict[str, str], list[Finding]]:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    findings: list[Finding] = []

    if not lines or lines[0].strip() != FRONTMATTER_DELIMITER:
        return {}, [Finding(path, "missing opening frontmatter delimiter")]

    try:
        end = next(
            index
            for index, line in enumerate(lines[1:], start=1)
            if line.strip() == FRONTMATTER_DELIMITER
        )
    except StopIteration:
        return {}, [Finding(path, "missing closing frontmatter delimiter")]

    values: dict[str, str] = {}
    for line_number, line in enumerate(lines[1:end], start=2):
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        if ":" not in line:
            findings.append(
                Finding(path, f"invalid frontmatter line {line_number}: {line.strip()}")
            )
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        if key in values:
            findings.append(Finding(path, f"duplicate frontmatter key: {key}"))
        values[key] = value.strip().strip("\"'")

    return values, findings


def find_markdown_files(workshop_dir: Path) -> list[Path]:
    return sorted(workshop_dir.glob("*.md"))


def validate_structure(workshop_dir: Path, files: list[Path]) -> list[Finding]:
    findings: list[Finding] = []
    names = {path.name for path in files}

    for required in ("_index.md", "answer-key.md"):
        if required not in names:
            findings.append(Finding(workshop_dir, f"missing required file: {required}"))

    activities = sorted(
        (
            path
            for path in files
            if re.fullmatch(r"activity-\d+\.md", path.name)
        ),
        key=lambda path: int(re.search(r"\d+", path.name).group()),
    )
    if not activities:
        findings.append(Finding(workshop_dir, "no activity-N.md files found"))
        return findings

    expected = [f"activity-{number}.md" for number in range(1, len(activities) + 1)]
    actual = [path.name for path in activities]
    if actual != expected:
        findings.append(
            Finding(workshop_dir, f"activity files must be contiguous: {expected}")
        )

    return findings


def validate_frontmatter(path: Path, values: dict[str, str]) -> list[Finding]:
    findings: list[Finding] = []
    required = REQUIRED_INDEX_FIELDS if path.name == "_index.md" else REQUIRED_PAGE_FIELDS

    for field in sorted(required - values.keys()):
        findings.append(Finding(path, f"missing frontmatter field: {field}"))

    if values.get("draft", "").lower() != "false":
        findings.append(Finding(path, "draft must be false for publication"))

    if path.name == "_index.md":
        if values.get("hidden", "").lower() != "false":
            findings.append(
                Finding(path, "workshop landing page must set hidden: false")
            )
        findings.extend(validate_taxonomy(path, values))

    if path.name == "answer-key.md" and values.get("hidden", "").lower() != "true":
        findings.append(Finding(path, "answer key must set hidden: true"))

    if path.name.startswith("activity-"):
        weight = values.get("weight", "")
        if not weight.isdigit():
            findings.append(Finding(path, "activity weight must be a positive integer"))

    return findings


def parse_inline_list(value: str) -> list[str] | None:
    """Parse the inline string lists used by workshop taxonomy frontmatter."""
    try:
        parsed = ast.literal_eval(value)
    except (SyntaxError, ValueError):
        return None

    if not isinstance(parsed, list) or not all(
        isinstance(item, str) for item in parsed
    ):
        return None
    return parsed


def validate_taxonomy(path: Path, values: dict[str, str]) -> list[Finding]:
    findings: list[Finding] = []

    language = values.get("language")
    if language and language not in TAXONOMY["languages"]:
        findings.append(
            Finding(
                path,
                f"unsupported language tag '{language}'; choose from "
                f"{', '.join(TAXONOMY['languages'])}",
            )
        )

    for field in ("topics", "difficulties"):
        raw_value = values.get(field)
        if not raw_value:
            continue

        selected = parse_inline_list(raw_value)
        if not selected:
            findings.append(
                Finding(path, f"{field} must be a non-empty inline YAML list")
            )
            continue

        allowed = TAXONOMY[field]
        unsupported = [value for value in selected if value not in allowed]
        if unsupported:
            findings.append(
                Finding(
                    path,
                    f"unsupported {field} tag(s) {', '.join(unsupported)}; "
                    f"choose from {', '.join(allowed)}",
                )
            )

    return findings


def validate_content(path: Path, workshop_dir: Path) -> list[Finding]:
    text = path.read_text(encoding="utf-8")
    findings: list[Finding] = []

    for placeholder in SCAFFOLD_PLACEHOLDERS:
        if placeholder in text:
            findings.append(Finding(path, f"unresolved scaffold placeholder: {placeholder}"))

    if text.count("```") % 2:
        findings.append(Finding(path, "unbalanced fenced code block"))

    if path.name == "_index.md" and "{{% children /%}}" not in text:
        findings.append(Finding(path, "landing page is missing the children shortcode"))

    for match in PYTHON_BLOCK_RE.finditer(text):
        findings.extend(validate_python(path, match.group("code"), "Python code block"))

    for match in PLAYGROUND_RE.finditer(text):
        findings.extend(validate_python(path, match.group("code"), "Python playground"))

    for match in MARKDOWN_IMAGE_RE.finditer(text):
        findings.extend(
            validate_image(path, workshop_dir, match.group("src"), match.group("alt"))
        )

    for match in HTML_IMAGE_RE.finditer(text):
        attributes = {
            item.group("name").lower(): item.group("value")
            for item in HTML_ATTRIBUTE_RE.finditer(match.group("attrs"))
        }
        if "src" not in attributes:
            findings.append(Finding(path, "HTML image is missing src"))
            continue
        if "alt" not in attributes:
            findings.append(Finding(path, f"image is missing alt text: {attributes['src']}"))
        findings.extend(
            validate_image(
                path,
                workshop_dir,
                attributes["src"],
                attributes.get("alt"),
            )
        )

    return findings


def validate_python(path: Path, source: str, label: str) -> list[Finding]:
    try:
        ast.parse(source)
    except SyntaxError as error:
        location = f"line {error.lineno}" if error.lineno else "unknown line"
        return [Finding(path, f"{label} has invalid syntax at {location}: {error.msg}")]
    return []


def validate_image(
    page: Path,
    workshop_dir: Path,
    source: str,
    alt: str | None,
) -> list[Finding]:
    findings: list[Finding] = []

    if alt is None:
        findings.append(Finding(page, f"image is missing alt text: {source}"))

    if source.startswith(("http://", "https://", "data:", "/")):
        return findings

    normalized = source.replace("\\", "/")
    if normalized.startswith("../media/"):
        target = workshop_dir / normalized.removeprefix("../")
    elif normalized.startswith("media/"):
        target = workshop_dir / normalized
    else:
        target = page.parent / normalized

    if not target.is_file():
        findings.append(Finding(page, f"image file does not exist: {source}"))

    return findings


def validate_weights(files: list[Path]) -> list[Finding]:
    weighted: list[tuple[int, Path]] = []
    for path in files:
        if not path.name.startswith("activity-"):
            continue
        values, _ = parse_frontmatter(path)
        weight = values.get("weight", "")
        if weight.isdigit():
            weighted.append((int(weight), path))

    weights = [weight for weight, _ in weighted]
    if len(weights) != len(set(weights)):
        return [Finding(weighted[0][1], "activity weights must be unique")]
    if weights != sorted(weights):
        return [Finding(weighted[0][1], "activity weights must increase in file order")]
    return []


def find_deprecated_ide_references(files: list[Path]) -> list[Finding]:
    findings: list[Finding] = []
    for path in files:
        for line_number, line in enumerate(
            path.read_text(encoding="utf-8").splitlines(),
            start=1,
        ):
            if DEPRECATED_IDE_RE.search(line):
                findings.append(
                    Finding(
                        path,
                        "TODO-IDE-Replace: deprecated Trinket reference "
                        f"on line {line_number}",
                    )
                )
    return findings


def validate_workshop(workshop_dir: Path) -> list[Finding]:
    files = find_markdown_files(workshop_dir)
    findings = validate_structure(workshop_dir, files)

    for path in files:
        values, frontmatter_findings = parse_frontmatter(path)
        findings.extend(frontmatter_findings)
        findings.extend(validate_frontmatter(path, values))
        findings.extend(validate_content(path, workshop_dir))

    findings.extend(validate_weights(files))
    return findings


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Validate the structure and content of one workshop."
    )
    parser.add_argument(
        "workshop",
        type=Path,
        help="Workshop directory, for example content/english/python-turtle",
    )
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    workshop_dir = args.workshop.resolve()

    if not workshop_dir.is_dir():
        print(f"Error: workshop directory does not exist: {workshop_dir}", file=sys.stderr)
        return 2

    findings = validate_workshop(workshop_dir)
    deprecated_ide_references = find_deprecated_ide_references(
        find_markdown_files(workshop_dir)
    )
    if findings:
        print(f"Workshop validation failed with {len(findings)} issue(s):")
        for finding in findings:
            try:
                display_path = finding.path.relative_to(Path.cwd())
            except ValueError:
                display_path = finding.path
            print(f"- {display_path}: {finding.message}")
        for finding in deprecated_ide_references:
            print(f"- WARNING {finding.path}: {finding.message}")
        return 1

    print(f"Workshop validation passed: {workshop_dir}")
    for finding in deprecated_ide_references:
        try:
            display_path = finding.path.relative_to(Path.cwd())
        except ValueError:
            display_path = finding.path
        print(f"- WARNING {display_path}: {finding.message}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
