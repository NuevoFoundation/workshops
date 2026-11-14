---
title: "Activity 11 - A spiral for Alex's garden"
date: 2026-11-14
weight: 14
draft: false
---

You helped Alex build a honeycomb and a colorful flower. Great work! Now let's have some fun with our turtle and create a spiral for Alex's garden.

This is an **optional challenge**. Try the spiral below, or use the editor to draw your own shapes and designs!

## 1. Draw a growing spiral

In our earlier shapes, every line had the same length. A spiral winds around a center and grows outward. Let's make each new line a little longer than the last one.

Use this fresh editor so you can keep your honeycomb and flower in the previous activity. Replace all the code in this editor with the following program, then press **Run**.

```python
import turtle

turtle.shape("turtle")
turtle.speed(0)
turtle.color("blue")

for i in range(80):
  turtle.forward(i * 2)
  turtle.right(61)
```

<iframe title="Interactive Python Turtle editor for Alex's garden spiral" src="https://codebunga.com/embed/wm8xfj5y" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

Can't see the editor? <a href="https://codebunga.com/embed/wm8xfj5y" target="_blank" rel="noopener noreferrer">Open the Turtle editor in a new tab</a>.

Here is what makes the spiral grow:

- `range(80)` gives `i` the values `0` through `79`, one at a time.
- `*` means multiplication. `i * 2` makes the turtle move `0`, `2`, `4`, `6` pixels, and so on. The first move has length `0`, so it does not draw a line.
- `turtle.right(61)` turns the turtle right by 61 degrees after each move.
- `turtle.speed(0)` uses Turtle's fastest setting. Unlike speeds `1` through `10`, `0` turns off the movement animation.

## 2. Make it your own

Before each experiment, predict what will change. Change **one thing at a time**, press **Run**, and compare the result with the starting spiral.

| Try this change | What to look for |
|---|---|
| Change `range(80)` to `range(40)` | Does the spiral grow as far? |
| Change `i * 2` to `i * 1` | How does the size change? |
| Change `turtle.right(61)` to `turtle.right(60)`, then try `turtle.right(90)` | How does the shape change? |

{{% notice tip %}}
Return to the starting code before trying a different experiment. Keep the spaces before the two lines inside the loop. If your drawing goes off the canvas, try fewer repetitions or a smaller number after `*`.
{{% /notice %}}

## 3. Extra challenge: repeat your favorite colors

Ready to add colors? First, return to the starting code. We will use a **list**, which stores several items in order. The list below is named `colors`. Each color name is a string inside quotation marks, and commas separate the items between the square brackets `[]`.

Replace the entire `for` loop with this code. Keep the setup lines above it, including `import turtle`.

```python
colors = ["red", "orange", "blue", "green", "cyan", "gold"]

for i in range(80):
  turtle.color(colors[i % len(colors)])
  turtle.forward(i * 2)
  turtle.right(61)
```

Press **Run**. The colors repeat in the same order as the turtle draws!

{{% expand "How does the turtle choose a color?" %}}
Each item in a list has a position called an **index**. Python starts counting positions at `0`, so `colors[0]` is `"red"` and `colors[1]` is `"orange"`.

`len(colors)` counts the items in the list. Here, there are `6`.

The `%` symbol gives the **remainder** after division. For example, `7 % 6` is `1`, because 6 fits into 7 once with 1 left over. As `i` increases, `i % 6` cycles through `0`, `1`, `2`, `3`, `4`, `5`, then starts again at `0`.

`colors[i % len(colors)]` uses that repeating index to pick a color. Using `len(colors)` instead of a fixed number means you can add or remove colors without changing the loop.

The first color is selected when `i` is `0`, but that move has length `0`. The first visible line uses the second color.
{{% /expand %}}

**Your challenge:** Choose your own colors, then make two different spirals for Alex's garden. Explain which numbers you changed and how they affected your drawing. You can also create a completely different design!

{{% notice tip %}}
Keep at least one color in the list, with quotation marks around each name and commas between names. Try `["blue", "green", "gold"]` for a shorter repeating pattern. Change the angle or the number after `*` to make your second spiral different.
{{% /notice %}}

## Help, I am stuck!

Check the [Activity 11 answer key](../answer-key/#activity-11) for complete examples and explanations.
