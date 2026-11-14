---
title: "Activity 1 - Open your snack stall"
date: 2026-11-14
draft: false
weight: 2
---

Nuvi's menu is ready. Before we take orders, let's open the stall and give it your own style!

## Open the starter

<a class="my-2 mx-4 btn btn-info" href="../media/snack-stall-starter.zip" download>Download the snack stall starter</a>

1. Download the ZIP file, then **extract** it. Extracting opens the package so you can edit the files inside. On Windows, right-click the ZIP and choose **Extract All**. On a Mac, double-click the ZIP.
2. Keep `index.html`, `styles.css`, and `script.js` together in the extracted folder.
3. Double-click the extracted `index.html` to open the stall in your browser.
4. Open the same folder in your text editor. If you use Notepad, right-click a file and choose **Open with**, then **Notepad**.

{{% notice warning %}}
Edit the extracted files, not files still inside the ZIP. Keep their names unchanged, especially `.html`, `.css`, and `.js`. If the page has no styling, check that all three files are in the same folder.
{{% /notice %}}

Try selecting a snack card. The starter tells you which snack you selected, but it does **not** check your choice yet. The order stays the same and the counter stays at zero. Those are the game rules you will build!

## Meet the three files

| File | Job |
|---|---|
| `index.html` | **HTML** describes the page: its headings, menu cards, buttons, and progress bar. |
| `styles.css` | **CSS** controls colors, spacing, and layout. |
| `script.js` | **JavaScript** responds to clicks and runs the game rules. |

When you change a file, **save it in your editor**, then **refresh the browser** to see the change.

## Challenge: name your stall

Open `index.html` and find this heading:

```html
<h1>Nuvi's Korean snack stall</h1>
```

The `<h1>` and `</h1>` tags mark the main heading. Change the words between them to your own stall name. Save and refresh. Your new name should appear above the menu!

{{% notice tip %}}
Keep both tags, including the `/` in `</h1>`. Only change the text between them. You can search for `Nuvi's` in your editor to find the heading.
{{% /notice %}}

Want to customize a color too? In `styles.css`, find `.snack-button` and change its `border` color from `#a9c9be` to `#2d6da4`. A color starting with `#` is a **hex color code**.

## Checkpoint

Your stall opens, has your chosen name, and responds when you select a snack. Nuvi is ready for a first visitor!

Need a hand? See the [Activity 1 answer](../answer-key/#activity-1).
