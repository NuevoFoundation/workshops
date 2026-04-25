---
title: "Translation volunteer guide"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 6
---

Thank you for helping make workshops accessible to more kids around the world! This guide explains how to translate an existing workshop into a new language.

## Before you start

1. Check if the workshop already exists in your target language. Browse the `content/` directory for language folders:

| Folder | Language |
|--------|----------|
| `content/english/` | English |
| `content/espanol/` | Spanish |
| `content/brazilian-portuguese/` | Brazilian Portuguese |
| `content/korean/` | Korean |
| `content/francais/` | French |
| `content/german/` | German |
| `content/simplified-chinese/` | Simplified Chinese |
| `content/traditional-chinese/` | Traditional Chinese |
| `content/kyrgyz/` | Kyrgyz |

2. Open a [Translation Request issue](https://github.com/NuevoFoundation/workshops/issues/new) on GitHub so others know you're working on it.

## How translations work

Each language has its own directory under `content/`. The folder structure inside each language mirrors the English version:

```
content/
  english/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
  espanol/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
```

## Step by step

### 1. Copy the English workshop

Copy the entire English workshop folder to your target language directory:

```bash
cp -r content/english/python-basics content/espanol/python-basics
```

### 2. Translate the content

For each `.md` file:

- **Translate** all visible text (titles, paragraphs, instructions, hints)
- **Keep** all Hugo frontmatter keys in English (`title`, `date`, `draft`, `weight`, etc.)
- **Translate** frontmatter values (`title: "Python: Conceptos basicos"`)
- **Keep** all code examples in English (code is universal)
- **Translate** code comments if they exist
- **Keep** all file paths, image references, and Hugo shortcodes unchanged
- **Translate** image alt text into the target language

### 3. Handle images

- **Shared images** (screenshots of code, diagrams): Copy the English `img/` or `media/` folder to your translation. Image files are the same across languages.
- **Text-heavy images** (images containing English text): If possible, create localized versions. If not, keep the English version and note it in your PR.
- **Alt text**: Always translate alt text to the target language. Screen readers use the page language setting.

### 4. Test locally

```bash
hugo server -D
```

Navigate to your translated workshop and verify:
- All pages load without errors
- Images display correctly
- Navigation works (TOC, next/previous)
- Code examples are intact

### 5. Submit your PR

- Title: `Translation: [workshop-name] to [language]`
- Description: List all files translated and any images that still contain English text
- Make sure you translate the **entire workshop**, not just the landing page

## Tips

- Work through the workshop as a student would. If something doesn't make sense in translation, rephrase it.
- Keep sentences short and clear. These workshops are for kids aged 8-18.
- When in doubt about a technical term, keep the English term and add a brief explanation in the target language.
- Don't translate workshop names in URLs or folder names — they must stay in English for Hugo routing.
