---
title: "Activity 2: Plan stitches and travel"
date: 2026-11-06
draft: false
weight: 4
---

## Two motifs, no unwanted connector

Nuvi wants two little square **motifs**, or repeated design elements, on a sleeve. Drawing a line between them would spoil the design! **Time: about 12 minutes.**

### Model stitches with the drawing turtle

We will use ordinary Python Turtle to **simulate**, or model, embroidery movements. Each dot represents a planned needle penetration, and each line between dots represents thread. The editor draws a picture; it does not create a machine stitch plan.

**TurtleThread** is an extra Python package that can record real stitch patterns. It is not available in Codebunga yet. Here is how our drawing model connects to its ideas:

| Drawing model | Embroidery idea |
|---|---|
| `turtle.penup()` before `goto()` | Travel without sewing a connecting line, similar to a jump |
| `turtle.pendown()` and repeated short movements | A running-stitch path |
| `turtle.dot(3)` after each movement | A visible marker for a planned needle penetration |
| `turtle.goto(x, y)` | A position: x is left/right, y is down/up |

A **running stitch** is a sequence of small stitches along a line. In our model, **10 design units represent 1 millimeter**, matching TurtleThread's units. A 20-unit step represents 2 mm; ten steps make a 200-unit side, representing 20 mm.

`display_scale = 0.5` makes the drawing fit the result area. It changes screen size only, not the model's dimensions. This is not a calibration of your monitor to physical millimeters.

<img src="../media/stitch-travel.svg" alt="Two square motifs with a 10 millimeter gap. Each square side is 20 millimeters. A dashed labeled travel arrow connects the motifs without a sewn line." width="70%">

### Draw two stitched-looking squares

Copy the complete starting program into the editor below and press **Run**:

```python
import turtle

turtle.speed(0)
turtle.color("black")
display_scale = 0.5

for start_x in (-250, 50):
    turtle.penup()
    turtle.goto(start_x * display_scale, -100 * display_scale)
    turtle.pendown()
    turtle.dot(3)
    for edge in range(4):
        for stitch in range(10):
            turtle.forward(20 * display_scale)
            turtle.dot(3)
        turtle.left(90)

turtle.done()
```

<iframe title="Embroidery Activity 2: Python Turtle editor for stitch markers and jump travel" src="https://codebunga.com/embed/y6tyvujt" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

[Can't see the editor? Open Codebunga in a new tab.](https://codebunga.com/projects/y6tyvujt)

The outer loop draws once at each starting x position. Each square finishes where it started, facing right, so the second one starts with the same heading. The innermost loop makes ten small movements per side rather than one long movement.

You should see two squares with dots along their sides and **no line between them**. A dot is only a drawing marker; it does not make an embroidery stitch file or control a needle.

### Check the distance

The first square starts at x = -250 and ends its right edge at x = -50, because its side is 200 units. The second starts at x = 50. The gap is therefore `50 - (-50) = 100` units, or **10 mm**.

Pen-up travel does not draw across that gap. In a real embroidery plan, the corresponding movement must be recorded as a jump. Thread may also need trimming, or cutting, between separate parts. Whether a machine performs a requested trim depends on its capabilities and the export format.

### Challenge

Move the second motif so the model's gap becomes **20 mm**, while keeping both sides at **20 mm** and the modeled stitch steps at **2 mm**. Press **Run** and check that there is still no connecting line.

Explain which movement must be a jump and why changing screen zoom would not change the pattern's physical dimensions.

{{% notice tip %}}
20 mm is 200 TurtleThread units. The first square's right edge is still x = -50. Add the desired gap to that coordinate to find the second starting x. Change only the second number in `(-250, 50)`.
{{% /notice %}}

{{% notice warning %}}
Keep `penup()` before the travel `goto()` and `pendown()` afterward. A misplaced movement can draw an unwanted connector. Use four spaces per indentation level. Our dots and lines are a teaching model, not a verified stitch plan.
{{% /notice %}}

You can now separate drawing from travel. Next, let's practice the curves that give Nuvi their recognizable outline!
