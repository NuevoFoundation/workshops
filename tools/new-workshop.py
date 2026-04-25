#!/usr/bin/env python3
"""
Workshop Scaffold Generator for NuevoFoundation/workshops

Creates a new workshop directory structure with template files.
Designed for summer interns and new contributors.

Usage:
    python tools/new-workshop.py --name "my-workshop" --title "My Workshop"
    python tools/new-workshop.py --name "my-workshop" --title "My Workshop" --activities 5 --difficulty Intermediate
    python tools/new-workshop.py --name "my-workshop" --title "My Workshop" --dry-run

For more information, see CONTRIBUTING.md
"""

from __future__ import annotations

import argparse
import os
import re
import sys
from datetime import date


# ---------------------------------------------------------------------------
# Template strings
# ---------------------------------------------------------------------------

INDEX_TEMPLATE = """\
---
title: "{title}"
description: "{description}"
date: {date}
prereq: "{prereq}"
difficulty: "{difficulty}"
draft: false
icon: "{icon}"
---

## Introduction

Welcome to the {title} workshop! In this workshop, you will learn [describe what students will learn].

## Prerequisites

{prereq_section}

## Table of Contents

<details close>
<summary>Table of Contents</summary>
{{{{% children /%}}}}
</details>
"""

ACTIVITY_TEMPLATE = """\
---
title: "Activity {n}: [Title]"
date: {date}
draft: false
weight: {weight}
---

## Activity {n}

[Activity instructions go here]

### Steps

1. [Step 1]
2. [Step 2]
3. [Step 3]

### Challenge

[Challenge description]

{{{{% notice tip %}}}}
[Hint for students]
{{{{% /notice %}}}}
"""

ANSWER_KEY_TEMPLATE = """\
---
title: "{title} - Answer Key"
date: {date}
draft: false
weight: 15
hidden: true
---

{{{{% notice note %}}}}
These are sample solutions. There may be multiple valid approaches to each challenge.
{{{{% /notice %}}}}

{activity_sections}"""


def _answer_activity_block(n: int) -> str:
    """Return an answer-key section for a single activity."""
    return f"""\
### Activity {n}

**Challenge:**

```
[Solution code here]
```
"""


# ---------------------------------------------------------------------------
# Validation helpers
# ---------------------------------------------------------------------------

def _escape_yaml(value: str) -> str:
    """Escape double quotes for safe YAML string interpolation."""
    return value.replace('\\', '\\\\').replace('"', '\\"')


KEBAB_RE = re.compile(r"^[a-z][a-z0-9]*(-[a-z0-9]+)*$")


def validate_name(name: str) -> str:
    """Ensure the workshop name is valid kebab-case."""
    if not KEBAB_RE.match(name):
        raise argparse.ArgumentTypeError(
            f"'{name}' is not valid kebab-case. "
            "Use lowercase letters, numbers, and hyphens only "
            "(e.g. 'python-web-scraping')."
        )
    return name


def validate_activities(value: str) -> int:
    """Ensure activity count is between 1 and 25."""
    try:
        n = int(value)
    except ValueError:
        raise argparse.ArgumentTypeError(f"'{value}' is not a valid number.")
    if n < 1:
        raise argparse.ArgumentTypeError("Must have at least 1 activity.")
    if n > 25:
        raise argparse.ArgumentTypeError("Maximum 25 activities supported.")
    return n


# ---------------------------------------------------------------------------
# File generation
# ---------------------------------------------------------------------------

def build_file_plan(args, today: str):
    """Return a list of (relative_path, content) tuples to create."""
    workshop_dir = os.path.join("content", args.language, args.name)
    media_dir = os.path.join(workshop_dir, "media")

    prereq_section = (
        f"Before starting this workshop, make sure you have completed: **{args.prereq}**"
        if args.prereq and args.prereq.lower() != "none"
        else "No prior experience is required to complete this workshop."
    )

    files: list[tuple[str, str | None]] = []

    # _index.md
    index_content = INDEX_TEMPLATE.format(
        title=_escape_yaml(args.title),
        description=_escape_yaml(args.description),
        date=today,
        prereq=_escape_yaml(args.prereq),
        difficulty=args.difficulty,
        icon=args.icon,
        prereq_section=prereq_section,
    )
    files.append((os.path.join(workshop_dir, "_index.md"), index_content))

    # activity-N.md files
    for n in range(1, args.activities + 1):
        content = ACTIVITY_TEMPLATE.format(
            n=n,
            date=today,
            weight=n + 2,
        )
        files.append((os.path.join(workshop_dir, f"activity-{n}.md"), content))

    # answer-key.md
    if not args.no_answer_key:
        ak_weight = max(15, args.activities + 10)
        sections = "\n".join(
            _answer_activity_block(n) for n in range(1, args.activities + 1)
        )
        ak_content = ANSWER_KEY_TEMPLATE.format(
            title=_escape_yaml(args.title),
            date=today,
            activity_sections=sections,
        )
        # Inject dynamic weight
        ak_content = ak_content.replace("weight: 15", f"weight: {ak_weight}", 1)
        files.append((os.path.join(workshop_dir, "answer-key.md"), ak_content))

    # media/ directory with .gitkeep (empty dirs aren't tracked by git)
    files.append((os.path.join(media_dir, ".gitkeep"), ""))

    return files


def write_files(files, *, dry_run: bool = False, verbose: bool = False):
    """Write (or preview) the planned files to disk."""
    created_dirs: list[str] = []
    created_files: list[str] = []

    for path, content in files:
        if content is None:
            # Directory
            if dry_run:
                print(f"  [DIR]  {path}/")
            else:
                os.makedirs(path, exist_ok=True)
                if verbose:
                    print(f"  Created directory: {path}/")
            created_dirs.append(path)
        else:
            # File
            if dry_run:
                print(f"  [FILE] {path}")
                if verbose:
                    print("  ── content ──")
                    for line in content.splitlines():
                        print(f"  │ {line}")
                    print("  ──────────────")
            else:
                os.makedirs(os.path.dirname(path), exist_ok=True)
                with open(path, "w", encoding="utf-8", newline="\n") as fh:
                    fh.write(content)
                if verbose:
                    print(f"  Wrote {path}  ({len(content)} bytes)")
            created_files.append(path)

    return created_dirs, created_files


# ---------------------------------------------------------------------------
# CLI entry point
# ---------------------------------------------------------------------------

def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="new-workshop.py",
        description="Generate a new workshop directory with template files.",
        epilog="""\
Examples:
  %(prog)s --name "python-web-scraping" --title "Python: Web Scraping"
  %(prog)s --name "my-workshop" --title "My Workshop" --activities 5 --difficulty Intermediate
  %(prog)s --name "my-workshop" --title "My Workshop" --dry-run
  %(prog)s --name "my-workshop" --title "My Workshop" -l espanol
""",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )

    # Required
    parser.add_argument(
        "--name",
        required=True,
        type=validate_name,
        help="Workshop directory name in kebab-case (e.g. python-web-scraping)",
    )
    parser.add_argument(
        "--title",
        required=True,
        help='Display title for the workshop (e.g. "Python: Web Scraping")',
    )

    # Optional with defaults
    parser.add_argument(
        "--description",
        default="",
        help="Short description of the workshop (default: empty)",
    )
    parser.add_argument(
        "--difficulty",
        default="Beginner",
        choices=["Beginner", "Intermediate", "Advanced"],
        help="Difficulty level (default: Beginner)",
    )
    parser.add_argument(
        "--prereq",
        default="None",
        help='Prerequisites (default: "None")',
    )
    parser.add_argument(
        "--icon",
        default="fas fa-code",
        help='Font Awesome icon class (default: "fas fa-code")',
    )
    parser.add_argument(
        "--activities", "-n",
        default=3,
        type=validate_activities,
        help="Number of activity files to generate (default: 3)",
    )
    parser.add_argument(
        "--language", "-l",
        default="english",
        help='Content language folder (default: "english")',
    )

    # Flags
    parser.add_argument(
        "--no-answer-key",
        action="store_true",
        help="Skip generating the answer-key.md file",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Preview what would be created without writing files",
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Show file contents as they are written",
    )

    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    today = date.today().isoformat()

    # --- Pre-flight checks ------------------------------------------------
    # Ensure we're running from the repo root (content/ must exist)
    if not os.path.isdir("content"):
        script_dir = os.path.dirname(os.path.abspath(__file__))
        repo_root = os.path.dirname(script_dir)
        if os.path.isdir(os.path.join(repo_root, "content")):
            os.chdir(repo_root)
        else:
            print(
                "Error: 'content/' directory not found.\n"
                "Please run this script from the repository root:\n"
                "  python tools/new-workshop.py --name ... --title ...",
                file=sys.stderr,
            )
            return 1

    lang_dir = os.path.join("content", args.language)
    if not os.path.isdir(lang_dir):
        available = sorted(
            d for d in os.listdir("content")
            if os.path.isdir(os.path.join("content", d))
        )
        print(
            f"Error: Language directory '{lang_dir}' does not exist.\n"
            f"Available languages: {', '.join(available)}",
            file=sys.stderr,
        )
        return 1

    workshop_dir = os.path.join(lang_dir, args.name)
    if os.path.exists(workshop_dir) and not args.dry_run:
        print(
            f"Error: Workshop directory '{workshop_dir}' already exists.\n"
            "Choose a different --name or remove the existing directory.",
            file=sys.stderr,
        )
        return 1

    # --- Plan & execute ---------------------------------------------------
    files = build_file_plan(args, today)

    if args.dry_run:
        print(f"Dry run — the following would be created for '{args.name}':\n")
        write_files(files, dry_run=True, verbose=args.verbose)
        print(f"\nTotal: {sum(1 for _, c in files if c is not None)} files, "
              f"{sum(1 for _, c in files if c is None)} directories")
        return 0

    print(f"Creating workshop '{args.title}' ({args.name})...\n")
    created_dirs, created_files = write_files(
        files, dry_run=False, verbose=args.verbose
    )

    # --- Summary ----------------------------------------------------------
    print(f"\n{'=' * 60}")
    print(f"  Workshop created: {args.title}")
    print(f"  Location:         {workshop_dir}/")
    print(f"  Files:            {len(created_files)}")
    print(f"  Activities:       {args.activities}")
    answer_key_status = "yes" if not args.no_answer_key else "skipped"
    print(f"  Answer key:       {answer_key_status}")
    print(f"{'=' * 60}")

    print("\nNext steps:")
    print(f"  1. Edit {os.path.join(workshop_dir, '_index.md')}")
    print("     - Fill in the Introduction section")
    print(f"  2. Edit each activity-N.md in {workshop_dir}/")
    print("     - Write instructions, steps, and challenges")
    if not args.no_answer_key:
        print(f"  3. Edit {os.path.join(workshop_dir, 'answer-key.md')}")
        print("     - Add solutions for each activity challenge")
    print(f"  4. Add images to {os.path.join(workshop_dir, 'media')}/")
    print("  5. Run 'hugo server' to preview your workshop locally")
    print("  6. Open a pull request when you're ready for review\n")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
