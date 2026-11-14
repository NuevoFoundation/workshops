# Nuvi's Korean snack stall

A beginner JavaScript game for the [four-activity workshop](../../../content/english/js-snack-picker/). Match each visitor's order to a snack, get a hint after an incorrect choice, and serve five visitors to win. There is no timer or penalty for trying again.

## Run the finished game

Keep `index.html`, `styles.css`, and `script.js` together, then open `index.html` in a browser. No server, account, packages, or internet connection are needed to play.

## Starter and solution

The workshop's starter download uses the same HTML and CSS but substitutes `starter.js` for `script.js`. Its menu responds to clicks, but orders are fixed and choices are not checked yet. Activities 2 through 4 build the game rules progressively.

| File | Purpose |
|---|---|
| `index.html` | Accessible menu, visitor order, progress bar, and finish screen |
| `styles.css` | Responsive teal, blue, and yellow styling with reduced-motion support |
| `script.js` | Complete game and provided page helpers |
| `starter.js` | Working starting point for students |
| `build-downloads.py` | Builds both lesson ZIP downloads from these source files |

After changing the HTML, CSS, or JavaScript, regenerate the downloads from the repository root:

```powershell
python workshopcode\english\js-snack-picker\build-downloads.py
```

Do not edit the ZIP files directly. Both downloads contain exactly three files, with the appropriate JavaScript named `script.js`. The answer key links to the complete solution download.

Run the focused browser and lesson-progression checks with:

```powershell
python tools\test-snack-stall.py --browser-channel msedge
```

The checks use the repository's existing Python Playwright dependency. Omit `--browser-channel msedge` to use Playwright's installed Chromium instead.
