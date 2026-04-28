---
title: "Images and GIFs"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 7
---

Images make workshops more engaging for young learners. Follow these guidelines to ensure images are accessible, properly sized, and work across all platforms.

## Image sizing

Never leave images without width constraints. Without a `width` attribute, images render at their original size, which is often too large for the content area.

| Image type | Target width | Example |
|-----------|-------------|---------|
| Full UI screenshots (Replit, IDE) | 60% | Replit upload dialog |
| Code output / terminal | 70% | dotnetfiddle results |
| Concept diagrams | 50% | Color theory, data structures |
| Photo examples | 40-50% | python-pixel cat images |
| Small icons / badges | 15-25% | Tables, small diagrams |
| Decorative art | 20-30% | Character illustrations |
| Hero images | 100% | Landing page `_index.md` only |

**Use percentages, not pixels.** Percentage widths are responsive and scale on mobile and tablet. Pixel widths can overflow on smaller screens.

```markdown
<!-- Good: responsive -->
<img src="../media/screenshot.png" alt="Replit code editor" width="60%">

<!-- Avoid: fixed pixel width -->
<img src="../media/screenshot.png" alt="Replit code editor" width="900px">
```

## Adding images

### Method 1: Markdown syntax

```markdown
![Description of the image](../media/filename.png)
```

### Method 2: HTML img tag (when you need width control)

```html
<img src="../media/filename.png" alt="Description of the image" width="50%">
```

### Method 3: Hugo figure shortcode

```
{{</* figure src="../media/filename.png" alt="Description" width="50%" */>}}
```

The `figure` shortcode wraps images in a `<figure>` element. Note: most existing workshops use the markdown or HTML approaches above. Older workshops may use `img/` instead of `media/` — both work identically.

## Accessibility (alt text)

Every image **must** have descriptive alt text. This is non-negotiable.

| Do | Don't |
|----|-------|
| `alt="Replit code editor showing a Python hello world program"` | `alt="screenshot"` |
| `alt="RGB color diagram with red, green, and blue circles overlapping"` | `alt="image"` |
| `alt=""` (for purely decorative images like dividers) | `alt="Cannot load image"` |

For translated workshops, alt text must be in the page's language:
- English: `alt="A friendly chatbot welcoming users"`
- Portuguese: `alt="Um chatbot amigavel dando boas-vindas aos usuarios"`
- Korean: `alt="사용자를 환영하는 친근한 챗봇"`

## File naming

- Use **lowercase** file extensions: `.png`, `.jpg`, `.gif` (not `.PNG`, `.JPG`)
- Use **descriptive names**: `replit-upload-dialog.png` (not `img1.png`)
- Use **hyphens** for word separation: `color-theory-diagram.png` (not `color_theory_diagram.png`)
- Keep names short but meaningful

## Image location

New workshops should use a `media/` directory (the scaffold script generates this automatically). Some older workshops use `img/` instead — both work the same way in Hugo.

```
content/english/my-workshop/
  _index.md
  activity-1.md
  media/             <-- images here
    screenshot.png
    diagram.png
```

Reference images with relative paths from the page. In `_index.md`, use `media/image.png`. In activity pages and answer keys, use `../media/image.png` (they render one level deeper in Hugo).

{{% notice warning %}}
Hugo resolves relative paths from the **page URL**, not the filesystem location. For child pages at `/workshop/section/activity/`, the path `../media/file.png` resolves to `/workshop/media/file.png`. This is the correct pattern. Do not "fix" these `../` paths — they are intentional.
{{% /notice %}}

## GIFs

GIFs are great for showing short interactions (clicking buttons, dragging elements). Keep them:

- **Short**: 5-15 seconds max
- **Small**: Under 2MB if possible (large GIFs slow page load)
- **Clear**: Use a reasonable frame rate. Screen recordings at 10-15fps work well.
- **Accessible**: Add alt text describing what the GIF shows

Consider using a static image with a caption instead of a GIF if the animation isn't essential to understanding.

## Screenshots

When taking screenshots for workshops:

1. **Crop tightly** to the relevant area
2. **Use a clean environment** (no personal bookmarks, notifications, etc.)
3. **Consistent sizing** within a workshop (don't mix 1080p and 4K screenshots)
4. **Highlight the relevant area** if the screenshot includes a lot of UI
