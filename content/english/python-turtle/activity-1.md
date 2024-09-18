---
title: "Activity 1 - Drawing a square"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

<img src="../media/bee_square.png" alt="Bee imagining square" width="25%" />

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/CRJf-LbXAx4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Kudos! You helped Alex draw a line! Now let’s step it up and help Alex draw a square. A square is one of the simplest and most familiar shapes in geometry.A square has four sides and they are exactly the same length. When we say "angle," we mean the space between two sides where they meet. In a square, all four angles are the same too.

The turtle needs to turn 90 degrees 4 times and move the exact number of steps each time to create a square.

Here’s the trick: the sum of the angles around a point (like where you turn) is always 360 degrees. If you divide 360 degrees by the number of turns you need to make (which is 4 for a square), you'll get the angle you need to turn. 
So, 360 degrees ÷ 4 turns = 90 degrees per turn.

To draw a square, we need to follow these steps:

1. Go forward for 50 steps
2. Turn left by 90 degrees
3. Go forward for 50 steps
4. Turn left by 90 degrees
5. Go forward for 50 steps
6. Turn left by 90 degrees
7. Go forward for 50 steps

Remember to use `turtle.forward()` to draw lines. To turn 90 degrees left, you need to pass `90` as the argument to the `turtle.left()` method:

``` python
turtle.left(90)
```

<iframe src="https://trinket.io/embed/python/bfe791bb1e" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
