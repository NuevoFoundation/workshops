---
title: "Activity 3 - Drawing a hexagon"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/RFWEYPAoiew" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

![Turtle, hexagon animation](https://media.giphy.com/media/TDLqC61A5uOAO8WwnJ/giphy.gif)

Great job! You just drew your first shape in Python with Turtle! Now let’s slightly change the code we already wrote to draw a square to instead draw a hexagon. Alex is a bee, after all, and he needs to draw hexagons to build his first honeycomb.

A hexagon is a shape with six sides and six angles. Hexagons are fascinating shapes that we often see in nature! For example, bees use hexagons to build their honeycombs because this shape is very efficient; it uses the least amount of material to hold the most honey. 

To help you draw a hexagon, think of how many sides a hexagon has. Now lets find out how many degrees should the turtle turn?

{{% expand "**Hint:**" %}} 
Remember: If you divide 360 degrees by the number of turns you need to make for a shape, you'll get the angle you need to turn.
{{% /expand %}}
<br/>

{{% expand "**Show answer:**" %}} 
The turtle needs to turn 6 times to draw the hexagon. So, 360 degrees ÷ 6 turns = 60 degrees per turn.
{{% /expand %}}
<br/>

As a helpful reminder, this is the code that was used to create a triangle:

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

<iframe src="https://trinket.io/embed/python/e82295e92f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
