---
title: "New Workshop Guidelines"
date: 2026-04-26
draft: false
weight: 3
---

This guide walks you through creating a new workshop using the scaffold script, from initial setup through PR submission. Follow all steps in order.

Before you begin, make sure you have completed the [Getting Started](../getting-started/) setup (Git, Hugo, fork) and have **Python 3.7 or later** installed. Verify with `python --version` (or `python3 --version` on macOS/Linux).

## Step 1: scaffold your workshop

Always use the scaffold script to generate the correct directory structure and template files. Do not create workshop files manually: the scaffold ensures correct Hugo frontmatter, file naming, and directory structure that would be error-prone to replicate by hand.

Run this from the root of the `workshops` repository:

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop"
```

If `python` is not found or points to Python 2, try `python3` instead.

Use `--dry-run` first to preview what would be created without writing any files:

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" --dry-run
```

Then run again without `--dry-run` to create the files. This generates the standard starter structure in one command:

```
content/english/my-workshop/
├── _index.md          ← Workshop landing page (intro, prerequisites, TOC)
├── activity-1.md      ← First activity
├── activity-2.md      ← Second activity
├── activity-3.md      ← Third activity
├── answer-key.md      ← Answer key (hidden from navigation by default)
└── media/
    └── .gitkeep       ← Folder for screenshots and images
```

### Scaffold options

| Option | Default | Description |
|--------|---------|-------------|
| `--name` | (required) | Directory name in kebab-case: must start with a letter, lowercase letters, numbers, and hyphens only (e.g. `python-web-scraping`) |
| `--title` | (required) | Display title (e.g. `"Python: Web Scraping"`) |
| `--activities` or `-n` | 3 | Number of activity files to generate (1 to 25) |
| `--difficulty` | Beginner | `Beginner`, `Intermediate`, or `Advanced` |
| `--description` | (empty) | Short description for the landing page |
| `--prereq` | `"None"` | Prerequisite workshop name, or `"None"` for no prerequisites |
| `--icon` | `fas fa-code` | Font Awesome icon class |
| `--language` or `-l` | english | Language folder (e.g. `espanol`, `korean`) |
| `--no-answer-key` | (off) | Skip generating the answer key file |
| `--dry-run` | (off) | Preview what would be created without writing files |
| `--verbose` or `-v` | (off) | Show detailed output |

### Example: intermediate workshop with 5 activities

```bash
python tools/new-workshop.py --name "python-web-scraping" --title "Python: Web Scraping" --activities 5 --difficulty Intermediate --prereq "Python Basics" --description "Learn to scrape data from websites using Python"
```

## Step 2: fill in your content

After scaffolding, open the generated files and replace the placeholder text:

1. **`_index.md`**: Write the introduction. Explain what students will learn and why it matters. Fill in the prerequisites section. The `{{% children /%}}` shortcode at the bottom automatically generates the table of contents from child pages; leave it in place.
2. **`activity-N.md`** files: Write the step-by-step instructions for each activity. Replace the placeholder `[Title]` with a descriptive name (e.g. change `"Activity 1: [Title]"` to `"Activity 1: Drawing shapes"`). Include a challenge at the end of each activity.
3. **`answer-key.md`** (if generated): Add solutions for each activity challenge. This file has `hidden: true` in its frontmatter, which prevents it from appearing in the site navigation. If you used `--no-answer-key`, you can add one later by creating the file manually.
4. **`media/`**: Add screenshots, diagrams, or images. Use `media/image-name.png` in `_index.md` and `../media/image-name.png` in activity pages and the answer key (activity pages render one level deeper in Hugo, so they need `../` to reach the media folder).

For markdown formatting and shortcodes, see the [Formatting](../formatting/) guide.

## Step 3: preview locally

From the `workshops` directory:

```bash
hugo server -D
```

Open **http://localhost:1313/** and navigate to your workshop in the left sidebar or homepage. Click through every activity to check that content renders correctly, images load, and navigation works.

## Step 4: open a pull request

When your workshop is ready:

```bash
git checkout -b workshop/my-workshop
git add content/english/my-workshop/
git commit -m "Add my-workshop workshop"
git push --set-upstream origin workshop/my-workshop
```

If you used `--language` to target a different language, replace `english` in the `git add` path with your language folder.

Then open a pull request from your fork to the main repo.

## Pre-PR checklist

Before submitting your pull request, verify:

- [ ] Used `python tools/new-workshop.py` to create the workshop structure
- [ ] Every activity has a descriptive title (not `"Activity 1: [Title]"`)
- [ ] All placeholder text (`[describe what students will learn]`, `[Step 1]`, etc.) is replaced
- [ ] Images are in the `media/` folder with correct paths (`media/` in `_index.md`, `../media/` in activities)
- [ ] Images have alt text for accessibility
- [ ] `hugo server -D` builds without errors
- [ ] You can navigate through every page of the workshop in the browser
- [ ] The answer key has solutions for all challenges (if generated)

## Resources

- [How the site is built](../site-architecture/): understand the Hugo directory structure
- [Formatting](../formatting/): markdown syntax and shortcodes
- [Getting Started](../getting-started/): initial setup and Git workflow
