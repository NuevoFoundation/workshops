---
title: "Activity 4: Mini-activity - rounded corners"
date: 2026-11-06
draft: false
weight: 6
---

## A softer frame for Nuvi

The large rounded rectangle gives Nuvi's body and face area their shape. We can build a practice frame by joining straight lines to quarter-circle corners. **Time: about 7 minutes.**

Each rounded corner replaces part of two straight edges. If the corner radius is `radius`, the horizontal straight section is `width - 2 * radius`; the vertical one is `height - 2 * radius`.

### Draw a rounded rectangle

Copy this complete program into the editor and press **Run**:

```python
import turtle

turtle.speed(3)
turtle.color("black")
width = 180
height = 110
radius = 15

turtle.penup()
turtle.goto(-width / 2 + radius, -height / 2)
turtle.setheading(0)
turtle.pendown()

for pair in range(2):
    turtle.forward(width - 2 * radius)
    turtle.circle(radius, 90)
    turtle.forward(height - 2 * radius)
    turtle.circle(radius, 90)

turtle.done()
```

<iframe title="Embroidery Activity 4: Python Turtle editor for a rounded rectangular frame" src="https://codebunga.com/embed/y6tyvujt" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

[Can't see the editor? Open Codebunga in a new tab.](https://codebunga.com/projects/y6tyvujt)

You should see one closed frame with four rounded corners. Each pass through the loop draws two straight sections and two quarter circles; two passes complete the rectangle.

Unlike the square, this program does not call `left(90)` at each corner: `circle(radius, 90)` both draws the curve and changes the turtle's heading by 90 degrees. An extra turn would point the next side in the wrong direction.

### Challenge

Make the corners rounder by changing `radius` to **25**, keeping the frame's overall width at **180** and height at **110**. Check that it still closes.

Explain why simply adding quarter circles to four full-length rectangle sides would make the overall frame too large.

{{% notice tip %}}
Change only `radius = 15`. The calculations automatically shorten the straight sections as the corner radius increases.
{{% /notice %}}

{{% notice warning %}}
Use a positive radius no larger than half the shorter side. For this frame, that means `0 < radius <= 55`. A larger radius would make a straight section's length negative.
{{% /notice %}}

Great! You can now combine straight lines, separate movements, partial circles, and rounded corners. Let's put those ideas together in Nuvi's full design.
