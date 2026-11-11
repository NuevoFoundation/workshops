---
title: "Activity 1: Draw a patch border"
date: 2026-11-06
draft: false
weight: 3
---

## Give Nuvi a starting shape

Nuvi's first idea is a square border for a patch. Let's draw it before deciding where the stitches would go. **Time: about 10 minutes.**

### Meet the turtle

Python's built-in `turtle` module moves a drawing cursor around a canvas. Calling a function tells it to do something:

| Instruction | What it does | Embroidery connection |
|---|---|---|
| `turtle.forward(120)` | Moves 120 screen units in the direction it faces | Plans a path; an embroidery tool must still divide it into stitches |
| `turtle.left(90)` | Turns left by 90 degrees | Changes the direction of the next path |
| `turtle.penup()` | Moves without drawing | Similar to travel without making stitches |
| `turtle.pendown()` | Draws while moving | Similar to making stitches along a path |
| `turtle.color("purple")` | Changes the drawing color | Represents a thread choice, but does not change physical thread |

An **angle** measures a turn. Four 90-degree turns make one full turn of 360 degrees. A `for` loop repeats the same indented instructions; `range(4)` gives us four sides.

### Draw your first border

Copy this complete starting program into the embedded editor below, replacing its existing code. Press **Run**:

```python
import turtle

turtle.shape("turtle")
turtle.speed(3)
turtle.color("purple")
side = 120

turtle.penup()
turtle.goto(-60, -60)
turtle.pendown()

for edge in range(4):
    turtle.forward(side)
    turtle.left(90)

turtle.done()
```

<iframe title="Interactive Python Turtle code editor for drawing a honeycomb" src="https://codebunga.com/embed/bkgcqzrx" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

[Can't see the editor? Open Codebunga in a new tab.](https://codebunga.com/projects/y6tyvujt)

The turtle starts facing right. Its starting point is 60 units left and 60 units below the canvas center. You should see a purple square with **no line from the canvas center to its first corner**. The final turn leaves the turtle facing right again.

Change one thing at a time and run again. A **variable**, such as `side`, stores a value we can reuse for each edge. Keep drawing instructions above the final `turtle.done()` line.

### From a drawing to thread

A solid line on a screen is not one giant stitch. A stitch plan needs small movements between needle penetrations. Also, pixels are not millimeters: a later tool must deliberately choose a physical scale.

For the square, imagine the fabric held in a **hoop**, a frame that keeps it steady. On many embroidery machines, the hoop moves left/right and forward/back while the needle moves up/down. Turning the turtle is a way to plan direction; the machine does not need to rotate a little turtle or turn its needle through 90 degrees.

### Challenge

Make Nuvi a **blue square with sides of 80 screen units**. Keep it closed and avoid a line from the center to the first corner. Predict whether it will look larger or smaller before running it.

Then explain to a partner: if the turtle draws an entire edge in one command, why would an embroidery machine still need several stitches along that edge?

{{% notice tip %}}
Change the values in `turtle.color(...)` and `side = ...`, not the number of sides or the turn. Keep `penup()` before `goto()` and `pendown()` afterward. The smaller square need not be centered to meet the challenge.
{{% /notice %}}

{{% notice warning %}}
If the square does not close, check that both loop instructions have four spaces in front of them and that the turn is `90`, not `"90"`. If you reset the editor, paste the complete starting program again.
{{% /notice %}}

Nice work! You have a drawing path. Next, you will use drawing dots and pen-up travel to model where stitches would go.
