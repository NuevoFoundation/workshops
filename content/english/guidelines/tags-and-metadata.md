---
title: "Tags and metadata"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 10
---

Every workshop page uses YAML frontmatter to control how it appears on the site. This guide explains each field and when to use it.

## Required frontmatter

Every markdown file needs at minimum:

```yaml
---
title: "Page Title"
date: 2026-04-25T00:00:00-07:00
draft: false
---
```

| Field | Purpose | Example |
|-------|---------|---------|
| `title` | Display title in nav and page header | `"Python: Basics"` |
| `date` | Last update date (shown on site) | `2026-04-25T00:00:00-07:00` |
| `draft` | `false` for published, `true` for work-in-progress | `false` |

## Workshop landing page fields

The `_index.md` file for a workshop supports additional fields:

```yaml
---
title: "Python: Basics"
description: "Learn Python fundamentals including variables, loops, and functions"
date: 2026-04-25T00:00:00-07:00
difficulty: "Beginner"
prereq: "None"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

| Field | Purpose | Values |
|-------|---------|--------|
| `description` | Short summary shown in listings | Free text |
| `difficulty` | Skill level | `Beginner`, `Intermediate`, `Advanced` |
| `prereq` | Prerequisites | `"None"` or workshop name |
| `hidden` | Hide from navigation | `true` / `false` |
| `alwaysopen` | TOC expand behavior | `false` (preferred) |
| `icon` | Font Awesome icon for homepage | See icons below |
| `weight` | Sort order in navigation | Number (lower = first) |

## Common icons

The homepage displays an icon for each workshop. Use [Font Awesome](https://fontawesome.com/icons) classes:

| Icon | Class | Good for |
|------|-------|----------|
| {{< icon name="fab fa-python" >}} | `fab fa-python` | Python workshops |
| {{< icon name="fab fa-html5" >}} | `fab fa-html5` | HTML/web workshops |
| {{< icon name="fab fa-js" >}} | `fab fa-js` | JavaScript workshops |
| {{< icon name="fas fa-laptop-code" >}} | `fas fa-laptop-code` | General coding |
| {{< icon name="fas fa-microchip" >}} | `fas fa-microchip` | Hardware / Arduino |
| {{< icon name="fas fa-shield-alt" >}} | `fas fa-shield-alt` | Security workshops |
| {{< icon name="fas fa-database" >}} | `fas fa-database` | SQL / data workshops |
| {{< icon name="fas fa-code" >}} | `fas fa-code` | General (default) |
| {{< icon name="fas fa-gamepad" >}} | `fas fa-gamepad` | Game workshops |
| {{< icon name="fas fa-music" >}} | `fas fa-music` | Music / audio |

## Activity page fields

Activity pages are simpler:

```yaml
---
title: "Activity 1: Hello World"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 3
---
```

## Answer key fields

Answer keys should be hidden from navigation:

```yaml
---
title: "Python: Basics - Answer Key"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 15
hidden: true
---
```

## The date field

The `date` field is displayed on the site footer of each page. Update it whenever you make significant changes to a page so visitors know the content is current.

Format: `YYYY-MM-DDTHH:MM:SS-07:00` (ISO 8601 with timezone) or `YYYY-MM-DD` (date only).

## YAML tips

- Always wrap string values in double quotes if they contain colons: `title: "Python: Basics"`
- Boolean values don't need quotes: `draft: false`
- Don't use tabs — YAML requires spaces for indentation
- Frontmatter must be between `---` delimiters at the very top of the file
