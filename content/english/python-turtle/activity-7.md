---
title: "Activity 7 - Drawing a figure 8"
date: 2019-07-25T13:24:17-07:00
weight: 10
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/f1LwVBXHRhs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<img src="../media/turtle_circles.png" alt="drawing a figure 8" width="25%"/>

Great! Now let’s make a figure 8 as the first step to making a mandala flower! A figure 8 is just two circles that are opposite to each other. 

A circle is a round shape that looks like a ring or a hoop. The radius is the distance from the middle of the circle to its edge. It helps you understand how big the circle is because it shows you how far it is from the center to the edge.

To do this we can make use of the `turtle.circle(x)` method, which takes an integer `x` as the radius of the circle. (You may recall that `2 * radius` is how wide the circle is.) Having the radius as an **argument** means we can decide how big or small the circle should be.

``` python
  import turtle
  turtle.circle(20)
```

In the above example, the circle is 40 pixels wide and the circle is drawn in a counterclockwise direction. If the argument to `turtle.circle()` is negative, then the circle is drawn in a clockwise direction and it is opposite to the original version.

Using this information, create a new function called `figure_8()` which draws a figure 8.

<iframe src="https://trinket.io/embed/python/e87cb9f3b9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
