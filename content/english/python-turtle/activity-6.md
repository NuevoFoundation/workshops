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

![alt text height="600px" width="50%"](../media/graph.png "Graph")

{{% notice info %}}

## Tip

The `x` and  `y` in the `turtle.goto()` method are the `x` and `y` coordinates of the turtle. We want to change the `x` and  `y` coordinates of the turtle from `(0, 0)` which is center of the image, to somewhere a little further away so that the mandala flower doesn’t cover up part of the honeycomb.

{{% /notice %}}

To complete this activity, move the turtle to position (300, 300) on the canvas. This will move it to the top-right corner.

<iframe src="https://trinket.io/embed/python/dee0f642ce" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>