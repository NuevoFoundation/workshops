---
title: "Codebunga embroidery support - implementation notes"
date: 2026-11-06
draft: false
hidden: true
weight: 20
---

## Current scope and verified limitation

The five student activities run ordinary Python Turtle inside Codebunga. The dots and curves are teaching previews, not digitized embroidery. The [browser Nuvi program](../media/nuvi_turtle_preview.py) preserves the original artwork coordinates while replacing embroidery recording with drawing.

The [original Nuvi export program](../media/nuvi_turtlethread.py) remains unchanged. It needs `turtlethread`, `pyembroidery`, and Python 3 features including `argparse`, `pathlib`, `math.comb`, and `math.dist`.

On November 6, 2026, the deployed editor at `https://codebunga.com/embed/y6tyvujt` was tested with both imports:

```python
from turtlethread import Turtle
```

```python
from pyembroidery import write
```

Both returned `ImportError: No module named ... on line 1`. The deployed frontend loads `/vendor/skulpt/skulpt.min.js` and `/vendor/skulpt/skulpt-stdlib.js`. Its Python runner uses Skulpt's Python 3 mode and a read callback that looks in `Sk.builtinFiles.files`. It does not expose a pip/micropip package installer in the tested embed. Simply adding the original program to a Codebunga project will not resolve these imports.

This inspection describes the deployed bundle, not verified filenames in an upstream repository. Locate the corresponding runner, module-read callback, project model, embed UI, and output handlers in the Codebunga source before implementing changes.

## Runtime and package support

Choose a runtime strategy before adding UI:

| Approach | Work required | Tradeoff |
|---|---|---|
| Keep Skulpt | Make the module loader resolve project/package Python files; port and test both packages and the Python 3 APIs they depend on | Preserves the current Turtle canvas, but copying package files alone does not establish compatibility |
| Add a CPython-compatible browser runtime, such as Pyodide | Add an embroidery execution mode, worker lifecycle, virtual filesystem, and pinned package installation | More likely to support the original Python packages; standard desktop Tk graphics still will not work in the browser |

TurtleThread 0.0.11 declares pyembroidery as its runtime dependency, plus typing-extensions for Python versions below 3.11. Pyembroidery 1.5.1 declares no runtime dependencies. Neither requires NumPy for this program. Review their licenses and browser compatibility, pin approved versions, and test imports and actual export rather than assuming pure-Python packages are automatically compatible with Skulpt.

Preserve the existing Skulpt Turtle mode for other workshops. A separate embroidery mode avoids unexpectedly breaking their drawings while package support is introduced. A Pyodide/micropip solution is a proposed direction, not an integration validated by this workshop.

## Execution, preview, and downloads

1. **Run in a worker with cancellation.** Keep the UI responsive, stop long-running code, bound output and file size, and display package-loading progress and useful import errors. Do not expose a server's filesystem or credentials to student code.
2. **Provide a script-like entry point.** Execute with `__name__ = "__main__"`, a virtual `__file__` such as `/workshop/nuvi_turtlethread.py`, and controlled `sys.argv`. Map Run to `--no-preview`; offer the `--black-eyes` option through UI or an editable configuration. The current original program uses its script path to choose its output directory.
3. **Avoid desktop Tk.** The export path with `--no-preview` does not need a Turtle graphics window. Render its generated SVG as the colored browser preview. If movement visualization is also wanted, implement a canvas renderer for stitch, jump, trim, and color-change commands rather than calling `needle.visualise()` in the browser.
4. **Offer real file downloads.** Read SVG text and PES bytes from the virtual filesystem. Expose downloadable files using appropriately typed Blob URLs, revoke old URLs, and handle repeated runs without confusing stale and new output. Preserve PES bytes exactly: do not decode or re-encode them as text.
5. **Keep artifact rendering isolated.** Treat user-generated SVG/HTML as untrusted content; use an image or a properly sandboxed preview instead of inserting arbitrary output markup into the parent page. Support keyboard use, error announcements, and descriptive preview labels.
6. **Publish real activity starters.** Create dedicated projects with each activity's initial code and reset behavior. The current workshop reuses an existing blank Turtle project and asks students to paste the supplied program. Do not invent project IDs or silently change the shared project.
7. **Maintain the embed contract.** Keep direct iframe `src` loading, contextual non-empty titles, responsive width, and a fallback project link. If adding parent-to-iframe code initialization, validate message origin and schema and use explicit target origins.

## Embroidery behavior to preserve

The original program deliberately jumps to each independent path, records running stitches, and inserts a single color-change request before both eyes unless `--black-eyes` is selected. TurtleThread's upward-positive y is flipped for exported embroidery coordinates. Preserve this orientation rather than treating SVG and canvas coordinates as interchangeable.

`STITCH_LENGTH = 20` is a 2 mm target, not a maximum. With the tested desktop package versions, some Nuvi movements reach approximately 2.64 mm. The PES export also approximates colors using a limited thread palette: default yellow `#f6ca45` in SVG reads back as `#feba35` in PES. Preview colors and physical thread selection must not be treated as identical guarantees.

## Acceptance checks before switching the student activities

| Check | Expected result |
|---|---|
| Imports in the actual embed | Both installed packages import successfully |
| Original script, no-preview mode | Produces a non-empty SVG and valid PES without Tk or desktop dependencies |
| Default colors | Black outline and yellow eyes in SVG; two thread entries and one color-change request in PES |
| Purple eye edit | SVG retains `#7b2cbf`; PES has a second palette-mapped thread and one color change |
| Black-eyes option | One black thread and no color-change request |
| Geometry | Upright reference outline; no running stitches connecting independent paths |
| File download | Downloaded PES parses back with expected stitch commands, bounds, and thread order |
| Repeated Run/Reset | No stale preview or downloads; dedicated starter restored; cancellation works |
| Existing workshops | Existing Python Turtle embeds still load and run without an account |
| Accessibility and layout | Keyboard-accessible controls, understandable errors, visible preview, and usable desktop/mobile embeds |

Do not remove the facilitator-only export boundary until these checks pass in Codebunga itself. Browser previews do not establish machine compatibility or sewability.

## Facilitator export while support is pending

This is an optional facilitator task, not a student terminal activity. Prepare desktop Python 3 with Tk if a movement window is wanted:

```shell
python -m pip install turtlethread==0.0.11 pyembroidery==1.5.1
python nuvi_turtlethread.py --no-preview
python nuvi_turtlethread.py --black-eyes --no-preview
```

Run from the folder containing the downloaded original script. Both commands write `nuvi-turtlethread.svg` and `nuvi-turtlethread.pes` beside it and overwrite previous outputs. Keep copies when comparing versions. For purple eyes, edit the original script's yellow `pattern.add_thread("#f6ca45")` value to `"#7b2cbf"` and run without `--black-eyes`.

Before any hardware demonstration, separately review machine/format compatibility, actual bounds and hoop fit, material and stabilizer, stitch spacing, trims, travel, and thread changes. No machine sewing has been validated here.
