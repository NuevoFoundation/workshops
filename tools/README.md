# tools/ — Workshop development utilities

Scripts to help contributors maintain the NuevoFoundation workshops repo. All scripts use Python 3.8+ with stdlib only (no external dependencies).

## update-dates.py

Keeps Hugo frontmatter `date:` fields current. When you commit a markdown
file, the date updates automatically so readers know when content last changed.

### Quick start (pre-commit hook)

Install once — all future commits auto-update dates:

```bash
# Linux / macOS / Git Bash
bash tools/install-hooks.sh

# Windows PowerShell
.\tools\install-hooks.ps1
```

Then just commit normally. Any staged `.md` file gets its `date:` field
updated to the current timestamp before the commit completes.

### Manual usage

```bash
# See what would change (staged files)
python tools/update-dates.py --dry-run

# Update all .md files under a path
python tools/update-dates.py --all content/english/python-basics/

# Verbose output
python tools/update-dates.py --verbose --dry-run
```

### How it works

1. Finds `.md` files (staged files by default, or `--all <path>` for batch)
2. Parses YAML frontmatter (the `---` block at the top of each file)
3. Updates the `date:` field to the current timestamp
4. If a file has frontmatter but no `date:` field, one is added
5. Files without frontmatter are skipped
6. In pre-commit mode, updated files are re-staged automatically

### Flags

| Flag | Description |
|------|-------------|
| `--all PATH` | Batch mode: update all `.md` files under PATH |
| `--dry-run` | Show what would change without writing |
| `--verbose` / `-v` | Print each file and its status |

### Date format

Matches the existing Hugo frontmatter format:

```yaml
date: 2026-04-26T21:23:39-07:00
```

### Requirements

- Python 3.8+
- No external dependencies (stdlib only)

## test-workshop-explorer.py

Runs browser regression tests against an existing Hugo build. Requires Python
and Playwright. The tests serve the build on a temporary localhost port and
check prerequisite options in all nine interactive catalogs (and preserve the
non-interactive Russian catalog), combined filtering, shared URLs, grouping,
missing metadata, reset, keyboard access, mobile layout, green accent-bar
contrast, and navigation from the Python Basics link in workshop metadata.

```powershell
py -m pip install playwright
py -m playwright install chromium
hugo --destination .\public
py tools\test-workshop-explorer.py .\public
# Or use an already installed Edge browser without downloading Chromium:
py tools\test-workshop-explorer.py .\public --browser-channel msedge
```

Prerequisite options use each visible workshop section's existing `prereq`
text verbatim, deduplicated within the current site language. They are not
derived from difficulty or translated from English. Missing values stay visible
when the filter is clear, do not match any prerequisite choice, and appear under
the localized `workshop-explorer-unspecified` label when grouping (English
fallback until that label is translated). Existing `pre-requisite` translations
supply the group label without its trailing colon.

On workshop pages, the exact prerequisite `Python Basics` links to the current
language's Python Basics workshop when that page exists. Other prerequisites
remain plain text. The catalog prerequisite buttons still filter rather than
navigate, and their values remain plain metadata rather than embedded links.

Prerequisite URL values are SHA-256 IDs of the complete text so commas and
other punctuation cannot split one prerequisite into multiple selections.
Changing prerequisite wording changes its ID; an old URL selecting that wording
will no longer match it. Content corrections can be merged independently of
the filter; it always reads the current metadata rather than a hardcoded list.
