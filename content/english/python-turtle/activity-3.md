---
title: "Activity 3 - Drawing a hexagon"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

![Turtle, hexagon animation](https://media.giphy.com/media/TDLqC61A5uOAO8WwnJ/giphy.gif)

Great job! You just drew your first shape in Python with Turtle! Now let’s slightly change the code we already wrote to draw a square to instead draw a hexagon. Alex is a bee, after all, and he needs to draw hexagons to build his first honeycomb.

To help you draw a hexagon, think of how many sides a hexagon has. How many degrees are in each interior angle of a hexagon?

{{% expand "**Hint:**" %}} 
Remember that in any shape, all the interior angles add up to 360°. For example, there are 4 sides in a square, so each interior angle of a square is 360 ÷ 4 = 90°.
{{% /expand %}}
<br/>

{{% expand "**Show answer:**" %}} 
As a hexagon have 6 sides, each interior angle of a hexagon is 360 ÷ 6 = 60°.
{{% /expand %}}
<br/>

As a helpful reminder, this is the code that was used to create a triangle:

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

<iframe src="https://trinket.io/embed/python/e82295e92f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>