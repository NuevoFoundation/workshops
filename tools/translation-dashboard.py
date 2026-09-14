#!/usr/bin/env python3
"""Translation health dashboard for NuevoFoundation workshops.

Scans the content/ directory to build a matrix of which workshops exist
in which languages, then reports coverage stats. Helps prioritize
translation work by showing gaps at a glance.

Usage:
    # Print markdown table to stdout
    python tools/translation-dashboard.py

    # Save to a file
    python tools/translation-dashboard.py --output dashboard.md

    # CSV output for spreadsheets
    python tools/translation-dashboard.py --format csv

    # Only show workshops missing translations
    python tools/translation-dashboard.py --gaps-only

    # Check a specific language
    python tools/translation-dashboard.py --language espanol
"""

from __future__ import annotations

import argparse
import csv
import io
import sys
from pathlib import Path

# Directories under content/ that are NOT languages
EXCLUDED_DIRS = {"example", "guidelines"}

# Short display names for languages (keeps table columns narrow)
LANG_SHORT: dict[str, str] = {
    "english": "EN",
    "espanol": "ES",
    "brazilian-portuguese": "PT-BR",
    "korean": "KO",
    "simplified-chinese": "ZH-CN",
    "traditional-chinese": "ZH-TW",
    "francais": "FR",
    "german": "DE",
    "kyrgyz": "KY",
}


def get_language_dirs(content_dir: Path) -> list[str]:
    """Return list of language directory names, English first, rest sorted."""
    langs = [
        d.name
        for d in content_dir.iterdir()
        if d.is_dir() and d.name not in EXCLUDED_DIRS
    ]
    # English is the baseline — always show it first
    rest = sorted(l for l in langs if l != "english")
    return (["english"] if "english" in langs else []) + rest


def get_workshops(content_dir: Path, language: str) -> set[str]:
    """Return set of workshop directory names for a language."""
    lang_dir = content_dir / language
    if not lang_dir.is_dir():
        return set()
    return {
        d.name
        for d in lang_dir.iterdir()
        if d.is_dir() and d.name not in EXCLUDED_DIRS
    }


def count_activities(content_dir: Path, language: str, workshop: str) -> int:
    """Count .md files in a workshop (rough proxy for completeness)."""
    ws_dir = content_dir / language / workshop
    if not ws_dir.is_dir():
        return 0
    return sum(1 for _ in ws_dir.rglob("*.md"))


def short_name(language: str) -> str:
    """Return short display name for a language."""
    return LANG_SHORT.get(language, language[:5].upper())


def build_matrix(
    content_dir: Path,
    languages: list[str],
) -> tuple[list[str], dict[str, dict[str, int]]]:
    """Build the workshop x language matrix.

    Returns:
        Tuple of (sorted workshop names, matrix dict of {workshop: {lang: activity_count}})
    """
    all_workshops: set[str] = set()
    lang_workshops: dict[str, set[str]] = {}

    for lang in languages:
        ws = get_workshops(content_dir, lang)
        lang_workshops[lang] = ws
        all_workshops.update(ws)

    workshops = sorted(all_workshops)
    matrix: dict[str, dict[str, int]] = {}

    for ws in workshops:
        matrix[ws] = {}
        for lang in languages:
            if ws in lang_workshops[lang]:
                matrix[ws][lang] = count_activities(content_dir, lang, ws)
            else:
                matrix[ws][lang] = 0

    return workshops, matrix


def format_markdown(
    workshops: list[str],
    matrix: dict[str, dict[str, int]],
    languages: list[str],
    *,
    gaps_only: bool = False,
) -> str:
    """Format the matrix as a markdown table."""
    lines: list[str] = []

    # Header
    lang_headers = [short_name(l) for l in languages]
    lines.append(f"| Workshop | {' | '.join(lang_headers)} |")
    lines.append(f"| {' | '.join(['---'] * (len(languages) + 1))} |")

    # Rows
    shown = 0
    for ws in workshops:
        row_data = matrix[ws]
        has_gap = any(row_data.get(l, 0) == 0 for l in languages if l != "english")

        if gaps_only and not has_gap:
            continue

        cells = []
        for lang in languages:
            count = row_data.get(lang, 0)
            if count > 0:
                cells.append(f"{count}")
            else:
                cells.append("--")

        lines.append(f"| {ws} | {' | '.join(cells)} |")
        shown += 1

    lines.append("")

    # Summary stats
    lines.append("## Coverage summary")
    lines.append("")
    en_count = sum(1 for ws in workshops if matrix[ws].get("english", 0) > 0)
    lines.append("| Language | Workshops | Coverage |")
    lines.append("|----------|-----------|----------|")
    for lang in languages:
        count = sum(1 for ws in workshops if matrix[ws].get(lang, 0) > 0)
        pct = (count / en_count * 100) if en_count > 0 else 0
        lines.append(f"| {short_name(lang)} ({lang}) | {count}/{en_count} | {pct:.0f}% |")

    lines.append("")
    lines.append(f"Total workshops: {en_count} (English baseline)")
    lines.append(f"Total languages: {len(languages)}")

    if gaps_only:
        lines.append(f"Showing: {shown} workshops with translation gaps")

    return "\n".join(lines)


def format_csv(
    workshops: list[str],
    matrix: dict[str, dict[str, int]],
    languages: list[str],
    *,
    gaps_only: bool = False,
) -> str:
    """Format the matrix as CSV."""
    output = io.StringIO()
    writer = csv.writer(output)

    # Header
    writer.writerow(["workshop"] + [short_name(l) for l in languages])

    # Rows
    for ws in workshops:
        if gaps_only:
            has_gap = any(matrix[ws].get(l, 0) == 0 for l in languages if l != "english")
            if not has_gap:
                continue
        row = [ws]
        for lang in languages:
            count = matrix[ws].get(lang, 0)
            row.append(str(count) if count > 0 else "")
        writer.writerow(row)

    return output.getvalue()


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Translation health dashboard for NuevoFoundation workshops.",
        epilog="Scans content/ to show which workshops exist in which languages.",
    )
    parser.add_argument(
        "--content-dir",
        default="content",
        help="Path to the content directory (default: content)",
    )
    parser.add_argument(
        "--output", "-o",
        help="Write output to a file instead of stdout",
    )
    parser.add_argument(
        "--format", "-f",
        choices=["markdown", "csv"],
        default="markdown",
        help="Output format (default: markdown)",
    )
    parser.add_argument(
        "--gaps-only",
        action="store_true",
        help="Only show workshops that are missing translations",
    )
    parser.add_argument(
        "--language", "-l",
        help="Filter to show only a specific language column (plus English)",
    )
    args = parser.parse_args()

    content_dir = Path(args.content_dir)
    if not content_dir.is_dir():
        print(f"Error: {content_dir} is not a directory", file=sys.stderr)
        return 1

    languages = get_language_dirs(content_dir)
    if not languages:
        print(f"Error: no language directories found in {content_dir}", file=sys.stderr)
        return 1

    if args.language:
        if args.language not in languages:
            print(
                f"Error: language '{args.language}' not found. "
                f"Available: {', '.join(languages)}",
                file=sys.stderr,
            )
            return 1
        # Always include English as the baseline
        if args.language == "english":
            print(
                "Note: --language english shows only the baseline. "
                "Omit --language to see all translations.",
                file=sys.stderr,
            )
            languages = ["english"]
        else:
            languages = ["english", args.language]

    workshops, matrix = build_matrix(content_dir, languages)

    if args.format == "csv":
        result = format_csv(
            workshops, matrix, languages, gaps_only=args.gaps_only,
        )
    else:
        result = format_markdown(
            workshops, matrix, languages, gaps_only=args.gaps_only,
        )

    if args.output:
        Path(args.output).write_text(result, encoding="utf-8")
        print(f"Dashboard written to {args.output}")
    else:
        print(result)

    return 0


if __name__ == "__main__":
    sys.exit(main())
