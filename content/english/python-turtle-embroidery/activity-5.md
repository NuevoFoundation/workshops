---
title: "Activity 5: Put Nuvi's design together"
date: 2026-11-06
draft: false
weight: 7
---

## A personal touch for Nuvi

Time for Nuvi's wardrobe reveal! Combine the ideas you practiced into a recognizable robot outline, then personalize its colors. **Time: about 15 minutes.**

### From practice shapes to a complete outline

Our reference design combines a rounded rectangular body, a face frame, separate side and top curves, and two oval eyes. The squares taught us to close a path; the stitch-gap activity taught us to move without a connector; the mini-activities taught us how straight sections and curves fit together.

The final reference curves are not all circular arcs. We supply a small drawing helper that uses **control points**, positions that shape a curve, to follow the original Nuvi outline. You do not need to rewrite its mathematics today.

This browser-ready program uses the reference artwork coordinates from the original embroidery script, but ordinary Python Turtle draws them. It **does not generate SVG/PES files, record real stitches, or control a machine**.

### Draw Nuvi in the embedded editor

Open the complete starting program below, copy it, and replace the editor's existing code. Press **Run**. A downloadable [browser drawing script](../media/nuvi_turtle_preview.py) contains the same program.

<details>
<summary>Show the complete starting program</summary>

```python
import turtle

OUTLINE_COLOR = "black"
EYE_COLOR = "#f6ca45"
BLACK_EYES = False
DISPLAY_SCALE = 0.4
SCALE = 1000.0 / 1720


def position(point):
    x, y = point
    return (x - 780) * SCALE * DISPLAY_SCALE, (517 - y) * SCALE * DISPLAY_SCALE


def draw_path(needle, start, *segments):
    needle.penup()
    needle.goto(position(start))
    needle.pendown()

    for segment in segments:
        controls = (start,) + segment
        degree = len(controls) - 1
        if degree == 1:
            needle.goto(position(segment[-1]))
        else:
            # Smooth the reference curves for drawing, not stitch generation.
            coefficients = (1, 2, 1) if degree == 2 else (1, 3, 3, 1)
            for step in range(1, 25):
                t = step / 24.0
                weights = [
                    coefficients[i] * (1 - t) ** (degree - i) * t ** i
                    for i in range(degree + 1)
                ]
                point = tuple(
                    sum(weight * p[axis] for weight, p in zip(weights, controls))
                    for axis in (0, 1)
                )
                needle.goto(position(point))
        start = segment[-1]


def draw_nuvi_outline(needle):
    draw_path(
        needle, (158, 230),
        ((1373, 230),),
        ((1390, 230), (1390, 247)),
        ((1390, 992),),
        ((1390, 1009), (1373, 1009)),
        ((158, 1009),),
        ((141, 1009), (141, 992)),
        ((141, 247),),
        ((141, 230), (158, 230)),
    )
    draw_path(
        needle, (141, 430),
        ((-3, 533), (-3, 704), (141, 805)),
    )
    draw_path(needle, (96, 766), ((96, 623),))
    draw_path(
        needle, (508, 230),
        ((580, -48), (1025, -48), (1105, 230)),
    )
    draw_path(needle, (529, 181), ((884, 181),))
    draw_path(
        needle, (1390, 434),
        ((1585, 520), (1580, 710), (1390, 804)),
    )
    draw_path(needle, (1430, 780), ((1430, 574),))
    draw_path(
        needle, (242, 418),
        ((1275, 418),), ((1275, 907),),
        ((242, 907),), ((242, 418),),
    )


def draw_eye(needle, center_x):
    def p(dx, y):
        return center_x + dx, y

    draw_path(
        needle, p(46, 730),
        (p(46, 779.15), p(25.41, 819), p(0, 819)),
        (p(-25.41, 819), p(-46, 779.15), p(-46, 730)),
        (p(-46, 680.85), p(-25.41, 641), p(0, 641)),
        (p(25.41, 641), p(46, 680.85), p(46, 730)),
    )


turtle.speed(0)
turtle.hideturtle()
turtle.color(OUTLINE_COLOR)
draw_nuvi_outline(turtle)
turtle.color(OUTLINE_COLOR if BLACK_EYES else EYE_COLOR)
draw_eye(turtle, 385)
draw_eye(turtle, 1095)
turtle.done()
```

</details>

<iframe title="Embroidery Activity 5: Python Turtle editor for the complete Nuvi drawing" src="https://codebunga.com/embed/y6tyvujt" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

[Can't see the editor? Open Codebunga in a new tab.](https://codebunga.com/projects/y6tyvujt)

You should see a black Nuvi outline with yellow oval eyes. The helper lifts the pen before each separate path, so no unwanted connectors appear between the body, curves, and eyes.

### Read the recipe, not every helper

| Code to find | What it contributes |
|---|---|
| `OUTLINE_COLOR` | The color of Nuvi's body and face frame |
| `EYE_COLOR` | The eye color when `BLACK_EYES` is `False` |
| `BLACK_EYES` | Selects whether eyes use the outline color instead |
| `position(point)` | Scales and positions the reference artwork on the drawing canvas |
| `draw_path(...)` | Travels with the pen up, then draws a line or curve |
| `draw_nuvi_outline(turtle)` | Draws the rounded body, face frame, and separate side/top paths |
| `draw_eye(turtle, 385)` and `draw_eye(turtle, 1095)` | Reuses one eye recipe at two positions |

`True` and `False` are **Boolean values**, meaning yes/no choices. Keep their first letters capitalized. The last drawing instructions select `OUTLINE_COLOR` for the eyes if `BLACK_EYES` is `True`; otherwise they select `EYE_COLOR`.

### Challenge

Give Nuvi **purple eyes with a black outline**: change `EYE_COLOR` to `"#7b2cbf"`, keep `BLACK_EYES = False`, and press **Run**. A **hex color** is a text code for a color; keep its quotation marks and `#`.

Next, change `BLACK_EYES` to `True` and run again to see an all-black version. Compare them and explain why two physical thread colors would need a thread change, while one color would not.

Keep a copy of your favorite program, and explain which item of clothing you would personalize.

{{% notice tip %}}
The editable choices are at the top of the program. Leave the curve helpers unchanged. `BLACK_EYES = True` deliberately ignores `EYE_COLOR` and uses `OUTLINE_COLOR` for the eyes.
{{% /notice %}}

### What would a real embroidery machine need?

The original [Nuvi TurtleThread script](../media/nuvi_turtlethread.py) records running stitches and jumps, requests a color change, and exports an SVG preview plus a PES machine-format file. A facilitator can use it separately; it cannot run in the current Codebunga editor.

Changing a color in this drawing does not load physical thread or alter that original script automatically. A facilitator must transfer the intended eye color into the embroidery script and inspect the resulting plan. [Codebunga support notes](../codebunga-embroidery-support/) describe the remaining implementation work.

### Wardrobe reveal

Nuvi now has a personalized drawing for their patch! Show your result to a partner and name one straight section, one curved section, one pen-up travel move, and one color decision.

**Before any machine demonstration:** an experienced facilitator must still verify PES support, measured design bounds and hoop fit, fabric and stabilizer, actual stitch spacing, travel/trim handling, and thread-change behavior. Actual sewing is outside this workshop and has not been validated by its drawing previews.
