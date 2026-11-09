---
title: "Activity 3: Mini-activity - partial circles"
date: 2026-11-06
draft: false
weight: 5
---

## Curves for Nuvi's sides and top

Nuvi's outline has curved pieces at the sides and on top. Let's practice drawing just part of a circle rather than a whole one. **Time: about 7 minutes.**

A **radius** is the distance from a circle's center to its edge. An **arc** is part of a circle. `turtle.circle(radius, extent)` draws an arc, where `extent` is the angle around the circle:

| Extent | Part of a circle |
|---|---|
| `90` | A quarter circle |
| `180` | A half circle |
| `360` | A full circle |

With a positive radius, the circle's center is to the turtle's left. Its starting direction matters! `setheading(0)` faces right, `90` faces up, `180` faces left, and `270` faces down.

### Try three separate arcs

Copy this program into the editor below and press **Run**:

```python
import turtle

turtle.speed(3)
turtle.color("black")

def arc_at(x, y, heading, radius, extent):
    turtle.penup()
    turtle.goto(x, y)
    turtle.setheading(heading)
    turtle.pendown()
    turtle.circle(radius, extent)

arc_at(40, 40, 90, 40, 180)
arc_at(-60, 0, 180, 25, 180)
arc_at(60, -50, 0, 25, 180)

turtle.done()
```

<iframe title="Embroidery Activity 3: Python Turtle editor for Nuvi-inspired partial circles" src="https://codebunga.com/embed/y6tyvujt" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

[Can't see the editor? Open Codebunga in a new tab.](https://codebunga.com/projects/y6tyvujt)

You should see a top arch and two separate side curves, with no lines connecting them. The `arc_at()` function reuses the same instructions at different positions and headings.

These circular arcs are practice shapes inspired by Nuvi. The final reference outline uses more flexible curves, which are not all exact parts of circles.

### Challenge

Change **only the top arch** into a quarter circle. Keep the side curves as half circles. Before running, predict whether a 90-degree arc will be longer or shorter than a 180-degree arc with the same radius.

Explain why the turtle lifts its pen before starting each separate arc.

{{% notice tip %}}
The first `arc_at(...)` call draws the top arch. Its last argument is the extent. Change that argument from `180` to `90`, leaving the radius at `40`.
{{% /notice %}}

The quarter arc is shorter; changing the extent changes how much of the circle is drawn, not the circle's radius. Now you can use small quarter-circle arcs to round a rectangle's corners.
