---
title: "Activity 7 - Drawing a figure 8"
date: 2019-07-25T13:24:17-07:00
weight: 10
draft: false
---

<img src="../media/turtle_circles.png" alt="drawing a figure 8" width="25%"/>

太好了！现在让我们画一个数字8，这是制作曼陀罗花的第一步！数字8就是两个相对的圆。

圆是一个看起来像环或箍的圆形。半径是从圆心到边缘的距离。它帮助你理解圆的大小，因为它显示了从中心到边缘的距离。

为此，我们可以使用 `turtle.circle(x)` 方法，其中 `x` 是圆的半径。（你可能记得 `2 * radius` 是圆的宽度。）将半径作为一个**参数**意味着我们可以决定圆的大小。

``` python
  import turtle
  turtle.circle(20)
```

在上面的例子中，圆的宽度是40像素，圆是逆时针方向绘制的。如果 `turtle.circle()` 的参数是负数，那么圆是顺时针方向绘制的，且与原始版本相反。

使用这些信息，创建一个名为 `figure_8()` 的新函数，绘制一个数字8。

<iframe src="https://trinket.io/embed/python/e87cb9f3b9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>