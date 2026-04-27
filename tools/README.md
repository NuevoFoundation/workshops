# tools/ — Workshop development utilities

Scripts to help contributors maintain the NuevoFoundation workshops repo.
All scripts use Python 3.8+ with stdlib only (no external dependencies).

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
