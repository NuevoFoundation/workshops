# tools/ — Workshop development utilities

Scripts to help contributors maintain the NuevoFoundation workshops repo. All scripts use Python 3.8+ with stdlib only (no external dependencies).

## new-workshop.py

Creates the standard directory and starter files for a new workshop.

```bash
python tools/new-workshop.py \
  --name "python-space-adventure" \
  --title "Python: Build a Space Adventure" \
  --activities 4 \
  --difficulty beginner \
  --coding-language python \
  --topics games programming-basics
```

Use `--dry-run` first to preview the files. See
`content/english/guidelines/new-workshops.md` for all options and the complete
authoring workflow.

## validate-workshop.py

Checks one workshop for publication-blocking problems:

- Missing files or required frontmatter
- Unsupported Workshops tab difficulty, coding-language, or topic tags
- Visible answer keys or invalid activity weights
- Unresolved scaffold placeholders
- Missing local images or image alt attributes
- Unbalanced code fences
- Invalid Python code blocks and Python playgrounds

Deprecated Trinket references are reported as non-blocking
`TODO-IDE-Replace` warnings so existing workshops can be migrated
incrementally without allowing new workshops to depend on Trinket.

```bash
python tools/validate-workshop.py content/english/my-workshop
```

The command exits with status `1` when it finds an issue, so it can also run in
continuous integration.

Run its unit tests with:

```bash
python -m unittest tools/test_validate_workshop.py
```

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

## translation-dashboard.py

Shows which workshops exist in which languages. Helps prioritize translation
work by surfacing gaps at a glance.

### Usage

```bash
# Full matrix (markdown table to stdout)
python tools/translation-dashboard.py

# Save to a file
python tools/translation-dashboard.py --output dashboard.md

# CSV for spreadsheets
python tools/translation-dashboard.py --format csv --output dashboard.csv

# Only workshops with translation gaps
python tools/translation-dashboard.py --gaps-only

# Focus on one language
python tools/translation-dashboard.py --language espanol
```

### Flags

| Flag | Description |
|------|-------------|
| `--content-dir PATH` | Path to content directory (default: `content`) |
| `--output FILE` / `-o` | Write to file instead of stdout |
| `--format markdown\|csv` / `-f` | Output format (default: markdown) |
| `--gaps-only` | Only show workshops missing translations |
| `--language LANG` / `-l` | Show only one language (plus English baseline) |

### What it shows

- **Workshop x language matrix** with file counts per workshop per language
- **Coverage summary** with percentage of English workshops translated
- **Double dash (`--`)** marks missing translations
- File counts serve as a rough completeness indicator (a workshop with 7 files
  in English but only 3 in Spanish may be partially translated)