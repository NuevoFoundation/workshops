# Contributing to NuevoFoundation Workshops

Thank you for helping us teach kids to code! 🎉 This guide will help you make contributions that are easy to review and merge.

## Quick start

1. Fork the repo and create a feature branch from `master`
2. Make your changes following the guidelines below
3. Test locally with Hugo: `hugo server`
4. Open a PR using the provided template

## Workshop folder structure

Every workshop lives under `content/{language}/{workshop-name}/`:

```
content/english/my-workshop/
├── _index.md          # Landing page (title, description, prereqs)
├── activity-1.md      # First activity
├── activity-2.md      # Second activity
├── ...
├── answer-key/        # Optional answer keys (hidden from nav)
│   └── _index.md
└── media/             # Images and assets for this workshop
    ├── screenshot.png
    └── diagram.png
```

### Frontmatter template

Every `_index.md` needs this YAML frontmatter:

```yaml
---
title: "Workshop Title"
description: "One sentence about what students will learn"
date: 2026-01-01T00:00:00-00:00
prereq: "Python Basics"           # or "None"
difficulty: "Beginner"            # Beginner, Intermediate, Advanced
draft: false
icon: "fab fa-python"             # Font Awesome icon
---
```

Activity pages need:

```yaml
---
title: "Activity 1: Getting Started"
draft: false
weight: 1                         # Controls ordering
---
```

### Table of contents pattern

Workshop landing pages should use a collapsible TOC:

```html
<details>
<summary>Table of Contents</summary>
{{% children /%}}
</details>
```

## Content guidelines

### Images

- **Lowercase extensions only**: `.png`, `.jpg`, `.gif` — never `.PNG` or `.JPG` (Linux servers are case-sensitive)
- **Descriptive filenames**: `replit-upload-dialog.png` not `image1.png`
- **Always include alt text**: `![Student typing code in Replit editor](media/replit-editor.png)`
- **Control image sizing**: `![Description](media/screenshot.png?width=60%)` or use HTML with `width` attribute
- **Keep images under 500 KB** — compress screenshots with tools like [TinyPNG](https://tinypng.com)

### HTML in markdown

If you use raw HTML tags in markdown files:

- Quote all attributes: `src="file.png"` not `src=file.png`
- Close all tags properly
- Include `alt` text on all `<img>` tags

### YAML frontmatter

- No duplicate keys (Hugo will silently use the last value)
- Keep keys in English — only translate values
- Use `draft: true` for work-in-progress content

### Code blocks

Use fenced code blocks with language hints:

````markdown
```python
print("Hello, world!")
```
````

## Translations

We love translations! Here's how to do them well:

### What to translate
- All user-visible text (titles, descriptions, instructions, button labels)
- YAML frontmatter values (`title`, `description`, `prereq`, `difficulty`)
- Alt text on images

### What NOT to translate
- YAML frontmatter keys (`title:`, `weight:`, `draft:`)
- Code inside code blocks
- Hugo shortcodes (`{{% notice %}}`, `{{% children /%}}`)
- File paths and image references
- Variable names and function names

### Translation checklist
1. Create your files under `content/{language}/{workshop-name}/`
2. Keep the same file structure as the English version
3. If the workshop uses images with English text, note which ones need localized versions
4. Test that Hugo builds successfully with your translation

### Supported languages

| Folder | Language |
|--------|----------|
| `english` | English |
| `espanol` | Spanish |
| `brazilian-portuguese` | Brazilian Portuguese |
| `korean` | Korean |
| `francais` | French |
| `german` | German |
| `simplified-chinese` | Simplified Chinese |
| `traditional-chinese` | Traditional Chinese |
| `kyrgyz` | Kyrgyz |

## Testing locally

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) (the extended version is required for SCSS)
- Git

### Run locally

```bash
git clone https://github.com/NuevoFoundation/workshops.git
cd workshops
git submodule update --init --recursive
hugo server
```

Visit `http://localhost:1313` to preview.

### Verify your changes

Before opening a PR:

```bash
# Build the site — should complete with zero errors
hugo --quiet

# Check for uppercase image extensions
grep -rn '\.\(PNG\|JPG\|GIF\|JPEG\)' content/ --include="*.md"

# Check for unquoted HTML attributes (common in img tags)
grep -rn 'src= [^"]' content/ --include="*.md"
```

## PR guidelines

- Keep PRs focused: one fix or one feature per PR
- Use the PR template checklist
- If your PR fixes an issue, reference it: "Closes #123"
- For translations: include all files for one complete workshop per PR

## Questions?

Open an issue or reach out to the maintainers. We're happy to help! 🚀
