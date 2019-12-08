---
title: "Activity 5 - Drawing a honeycomb"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

![Honeycomb drawing](../media/turtle-honeycomb.png)

This is the finale! Let's create the honeycomb that Alex will live in. Fortunately, a honeycomb is simply 6 hexagons, so let's combine our knowledge of functions and loops to make our honeycomb! 

In this activity, create a new function called `draw_honeycomb()`. Inside the function body, create a loop that repeats 6 times. Inside the loop we have to first draw a hexagon using our `draw_hexagon()` function we previously defined. Next, move the turtle so it can draw the next hexagon. To do so, after the turtle draws each hexagon, we need to tell our turtle to move forward **50 pixels** and then turn right **60 degrees**. 

Note that the drawing of the honeycomb may take a while. You can change how fast the turtle draws the mandala flower by setting the turtle's speed to a number between 1 and 10, 1 being the slowest and 10 being the fastest. Place this code near where we change the color of the turtle.

```
  turtle.speed(8)
```

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity5?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
