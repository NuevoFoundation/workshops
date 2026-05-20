# tools/ — Workshop development utilities

Scripts to help contributors maintain the NuevoFoundation workshops repo.

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
