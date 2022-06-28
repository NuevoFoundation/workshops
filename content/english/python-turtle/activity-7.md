---
title: "Activity 7 - Drawing a figure 8"
date: 2019-07-25T13:24:17-07:00
weight: 10
draft: false
---

![alt text width="70%"](../media/figure-8.png "drawing a figure 8")

Great! Now let’s make a figure 8 as the first step to making a mandala flower! A figure 8 is just two circles that are opposite to each other. 
To do this we can make use of the `turtle.circle(x)` method, which takes an integer `x` as the radius of the circle. (You may recall that `2 * radius` is how wide the circle is.) Having the radius as an **argument** means we can decide how big or small the circle should be.

```
  import turtle
  turtle.circle(50)
```

In the above example, the circle is 100 pixels wide and the circle is drawn in a counterclockwise direction. If the argument to `turtle.circle()` is negative, then the circle is drawn in a clockwise direction and it is opposite to the original version.

Using this information, create a new function called `figure_8()` which draws a figure 8.

<iframe src="https://trinket.io/embed/python/e87cb9f3b9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>