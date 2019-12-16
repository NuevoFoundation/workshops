---
title: "Activity 6 - Moving the turtle"
date: 2019-07-25T13:24:17-07:00
weight: 9
draft: false
---

Our first step is to move the turtle to a new location to draw the flower (we don’t want to draw the flower on top of the beehive!). To do this, we first need to use the following methods:

```
turtle.penup() 
turtle.goto(x,y)
turtle.pendown()
```

`turtle.penup()` tells the turtle to pick up its pen so it doesn’t draw while it is moving. Then, with `turtle.goto(x,y)`, we are telling the turtle the position where the turtle moves to. After that we tell the turtle to put its pen back down using `turtle.pendown()` so it can start drawing again. 

![Graph](../media/graph.png)

{{% notice info %}}

## Tip

The `x` and  `y` in the `turtle.goto()` method are the `x` and `y` coordinates of the turtle. We want to change the `x`, `y` coordinates of the turtle from `(0, 0)` which is center of the image, to somewhere a little farther away so that the mandala flower doesn’t cover up part of the honeycomb.

{{% /notice %}}

To complete this activity, move the turtle to position (300, 300) on the canvas. This will move it to the top-right corner.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity6?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
