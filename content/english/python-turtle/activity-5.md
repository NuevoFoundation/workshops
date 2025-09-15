---
title: "Activity 5 - Drawing a honeycomb"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/Z6omKevIUKo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<img src="../media/bee_honeycomb.png" alt="Honeycomb drawing" width="25%" />

This is the finale! Let's create the honeycomb that Alex will live in. Fortunately, a honeycomb is simply 6 hexagons, so let's combine our knowledge of functions and loops to make our honeycomb! 

A hexagon is a shape with 6 sides. To make a honeycomb, you'll need to arrange 7 hexagons in a way that they fit together perfectly without any gaps. It looks like a hexagon in the center with 6 hexagons arranged around the central hexagon - one above, one below, one to the top-left, one to the top-right, one to the bottom-left and one to the bottom right. 

Remember to lift the pen, move to the new position by 50 steps and turn 60 degrees right to draw the new hexagon. 

In this activity, create a new function called `draw_honeycomb()`. Inside the function body, create a loop that repeats 6 times. Inside the loop we have to first draw a hexagon using our `draw_hexagon()` function we previously defined. Next, move the turtle so it can draw the next hexagon. To do so, after the turtle draws each hexagon, we need to tell our turtle to move forward **50 pixels** and then turn right **60 degrees**. 

Note that the drawing of the honeycomb may take a while. You can change how fast the turtle draws the honeycomb by setting the turtle's speed to a number between `1` and `10`, `1` being the slowest and `10` being the fastest. Place this code near where we change the color of the turtle.

``` python
turtle.speed(8)
```

<iframe src="https://trinket.io/embed/python/d83811c24a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
