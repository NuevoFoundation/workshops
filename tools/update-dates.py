#!/usr/bin/env python3
"""Update frontmatter date fields in Hugo markdown files.

Scans markdown files and updates (or adds) the `date:` field in YAML
frontmatter to the current timestamp. Designed to run as a git pre-commit
hook so every committed .md file gets a fresh date automatically.

Usage:
    # Pre-commit hook mode (default): updates staged .md files
    python tools/update-dates.py

    # Batch mode: update all .md files under a path
    python tools/update-dates.py --all content/

    # Dry run: show what would change without writing
    python tools/update-dates.py --dry-run

    # Verbose: print each file and old -> new date
    python tools/update-dates.py --verbose
"""

from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

# Match the date line in YAML frontmatter
DATE_PATTERN = re.compile(r"^(date:\s*)(.+)$", re.MULTILINE)

# Match YAML frontmatter block (opening --- through closing ---)
# Allows closing --- to be followed by newline or EOF
FRONTMATTER_PATTERN = re.compile(
    r"^---\s*\n(.*?\n)---\s*(?:\n|$)",
    re.DOTALL,
)


def current_iso_date() -> str:
    """Return the current local time in ISO 8601 format with UTC offset.

    Matches the existing Hugo frontmatter format:
    2026-04-26T21:23:39-07:00
    """
    now = datetime.now(timezone.utc).astimezone()
    # Format offset as -07:00 (with colon)
    offset = now.strftime("%z")  # e.g. -0700
    offset_formatted = f"{offset[:3]}:{offset[3:]}"  # e.g. -07:00
    return now.strftime(f"%Y-%m-%dT%H:%M:%S{offset_formatted}")


def update_date_in_content(content: str, new_date: str) -> tuple[str, str]:
    """Update or add the date field in frontmatter.

    Returns:
        Tuple of (updated_content, status) where status is one of:
        - "updated" if an existing date was changed
        - "added" if a date field was inserted
        - "no_frontmatter" if the file has no YAML frontmatter
        - "unchanged" if the timestamp is already identical
    """
    fm_match = FRONTMATTER_PATTERN.match(content)
    if not fm_match:
        return content, "no_frontmatter"

    frontmatter = fm_match.group(1)
    date_match = DATE_PATTERN.search(frontmatter)

    if date_match:
        old_date = date_match.group(2).strip().strip("\"'")
        if old_date == new_date:
            return content, "unchanged"

        new_frontmatter = DATE_PATTERN.sub(
            f"date: {new_date}", frontmatter, count=1
        )
        updated = content[: fm_match.start(1)] + new_frontmatter + content[fm_match.end(1) :]
        return updated, f"updated ({old_date})"
    else:
        # No date field — add one after the first line of frontmatter
        lines = frontmatter.split("\n")
        # Insert date after the first key (usually title)
        insert_idx = 1 if len(lines) > 1 else 0
        lines.insert(insert_idx, f"date: {new_date}")
        new_frontmatter = "\n".join(lines)
        updated = content[: fm_match.start(1)] + new_frontmatter + content[fm_match.end(1) :]
        return updated, "added"


def get_staged_md_files() -> list[str]:
    """Return list of staged .md files from git."""
    try:
        result = subprocess.run(
            ["git", "diff", "--cached", "--name-only", "--diff-filter=ACM"],
            capture_output=True,
            text=True,
            check=True,
        )
    except (subprocess.CalledProcessError, FileNotFoundError) as exc:
        print(f"Warning: could not get staged files: {exc}", file=sys.stderr)
        return []

    return [
        f for f in result.stdout.strip().split("\n")
        if f.strip() and f.endswith(".md")
    ]


def get_all_md_files(root: str) -> list[str]:
    """Return all .md files under the given root directory."""
    files: list[str] = []
    for dirpath, _dirnames, filenames in os.walk(root):
        for fname in filenames:
            if fname.endswith(".md"):
                files.append(os.path.join(dirpath, fname))
    return sorted(files)


def restage_file(filepath: str) -> None:
    """Re-add a file to the git staging area after modification."""
    try:
        subprocess.run(
            ["git", "add", filepath],
            capture_output=True,
            check=True,
        )
    except (subprocess.CalledProcessError, FileNotFoundError) as exc:
        print(f"  Warning: could not re-stage {filepath}: {exc}", file=sys.stderr)


def detect_line_ending(raw: bytes) -> str:
    """Detect whether a file uses CRLF or LF line endings."""
    if b"\r\n" in raw:
        return "\r\n"
    return "\n"


def process_files(
    files: list[str],
    *,
    dry_run: bool = False,
    verbose: bool = False,
    restage: bool = False,
) -> dict[str, int]:
    """Process a list of markdown files, updating their dates.

    Returns:
        Dict with counts: updated, added, unchanged, no_frontmatter, errors
    """
    new_date = current_iso_date()
    counts: dict[str, int] = {
        "updated": 0,
        "added": 0,
        "unchanged": 0,
        "no_frontmatter": 0,
        "errors": 0,
    }

    for filepath in files:
        try:
            raw = Path(filepath).read_bytes()
            line_ending = detect_line_ending(raw)
            content = raw.decode("utf-8-sig").replace("\r\n", "\n")
        except (OSError, UnicodeDecodeError) as exc:
            if verbose:
                print(f"  SKIP {filepath}: {exc}")
            counts["errors"] += 1
            continue

        updated_content, status = update_date_in_content(content, new_date)

        if status == "no_frontmatter":
            counts["no_frontmatter"] += 1
            if verbose:
                print(f"  SKIP {filepath}: no frontmatter")
            continue

        if status == "unchanged":
            counts["unchanged"] += 1
            if verbose:
                print(f"  OK   {filepath}: already up to date")
            continue

        if status.startswith("updated"):
            counts["updated"] += 1
        elif status == "added":
            counts["added"] += 1

        if dry_run:
            print(f"  WOULD {status.split(' ')[0].upper():7s} {filepath}")
            if "updated" in status:
                old = status.split("(")[1].rstrip(")")
                print(f"         old: {old}")
                print(f"         new: {new_date}")
        else:
            # Restore original line endings before writing
            if line_ending == "\r\n":
                updated_content = updated_content.replace("\n", "\r\n")
            Path(filepath).write_bytes(updated_content.encode("utf-8"))
            if verbose:
                print(f"  {status.split(' ')[0].upper():7s} {filepath}")
            if restage:
                restage_file(filepath)

    return counts


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Update frontmatter date fields in Hugo markdown files.",
        epilog="Default: updates staged .md files (pre-commit hook mode).",
    )
    parser.add_argument(
        "--all",
        metavar="PATH",
        help="Batch mode: update all .md files under PATH",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would change without writing files",
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Print each file and its status",
    )
    args = parser.parse_args()

    if args.all:
        root = args.all
        if not os.path.isdir(root):
            print(f"Error: {root} is not a directory", file=sys.stderr)
            return 1
        files = get_all_md_files(root)
        mode = "batch"
        restage = False
    else:
        files = get_staged_md_files()
        mode = "pre-commit"
        restage = not args.dry_run

    if not files:
        if args.verbose:
            print(f"No .md files found ({mode} mode)")
        return 0

    if args.dry_run:
        print(f"Dry run ({mode} mode) — {len(files)} .md file(s):")
    elif args.verbose:
        print(f"Updating dates ({mode} mode) — {len(files)} .md file(s):")

    counts = process_files(
        files,
        dry_run=args.dry_run,
        verbose=args.verbose or args.dry_run,
        restage=restage,
    )

    total_changed = counts["updated"] + counts["added"]
    if args.verbose or args.dry_run:
        print()
        print(f"Summary: {total_changed} changed, "
              f"{counts['unchanged']} already current, "
              f"{counts['no_frontmatter']} no frontmatter, "
              f"{counts['errors']} errors")

    return 0


if __name__ == "__main__":
    sys.exit(main())
