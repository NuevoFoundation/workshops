---
title: "Navigation"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 8
---

Hugo uses frontmatter metadata in each markdown file to control how pages appear in the site navigation. This guide covers the key settings.

## Page ordering with weight

The `weight` field controls the order of pages in the left sidebar and table of contents. Lower numbers appear first.

```yaml
---
title: "Activity 1: Getting started"
weight: 3
---
```

**Recommended weight scheme:**

| Page type | Weight | Example |
|-----------|--------|---------|
| `_index.md` (landing page) | 1 | Workshop intro |
| Setup / prerequisites | 2 | Tools needed |
| Activities | 3, 4, 5... | Activity 1, 2, 3 |
| Answer key | 15+ | Hidden from nav |

Leave gaps between activity weights if you expect to insert pages later (e.g., use 3, 5, 7 instead of 3, 4, 5).

## Controlling the table of contents

### Collapsed TOC (preferred)

Workshops should open with a story introduction visible and the activity list collapsed:

```yaml
---
title: "Python: Basics"
alwaysopen: false
---
```

With `alwaysopen: false`, the child pages appear as a collapsible tree in the sidebar. Students expand sections as they progress.

### Expanded TOC

For very short workshops (3 or fewer activities), you may want all sections visible:

```yaml
---
title: "Short Workshop"
alwaysopen: true
---
```

## Hiding pages

### Hidden pages (built but not in nav)

Use `hidden: true` for pages that should exist but not appear in the sidebar navigation. Students can still access them via a direct link.

```yaml
---
title: "Answer Key"
hidden: true
---
```

Common uses: answer keys, instructor notes, bonus content.

### Draft pages (not built in production)

Use `draft: true` for work in progress that shouldn't appear on the live site at all:

```yaml
---
title: "Unfinished Workshop"
draft: true
---
```

Draft pages only appear when running `hugo server -D` (the `-D` flag includes drafts).

## The children shortcode

To show a list of child pages on a landing page, use the `children` shortcode inside a collapsible details element:

```html
<details close>
<summary>Table of Contents</summary>
{{% children /%}}
</details>
```

This renders a clean, collapsible table of contents that students can expand when ready.

## Workshop landing page template

Here's a complete `_index.md` frontmatter example:

```yaml
---
title: "Python: Basics"
description: "Learn Python fundamentals"
date: 2026-04-25T00:00:00-07:00
difficulty: "Beginner"
prereq: "None"
draft: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

## Tips

- Test navigation changes locally with `hugo server -D` before submitting
- Check that answer keys are `hidden: true` so students don't see them
- Keep weight numbers consistent within a workshop
- If you reorder pages, update all weights to avoid gaps or collisions
