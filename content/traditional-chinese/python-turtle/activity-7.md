---
title: "Activity 7 - 繪製一個數字 8"
date: 2019-07-25T13:24:17-07:00
weight: 10
draft: false
---

<img src="../media/turtle_circles.png" alt="drawing a figure 8" width="25%"/>

太好了！現在讓我們繪製一個數字 8 作為創建曼荼羅花的第一步！數字 8 就是兩個相對的圓。

圓是一種看起來像環或圈的圓形。半徑是從圓中心到邊緣的距離。它幫助你了解圓的大小，因為它顯示了從中心到邊緣的距離。

為此，我們可以使用 `turtle.circle(x)` 方法，其中 `x` 是圓的半徑。(你可能記得 `2 * radius` 是圓的寬度。)將半徑作為一個**參數**意味著我們可以決定圓的大小。

``` python
  import turtle
  turtle.circle(20)
```

在上述示例中，圓的寬度為 40 像素，並以逆時針方向繪製。如果 `turtle.circle()` 的參數是負數，那麼圓將以順時針方向繪製，並且與原版本相反。

利用這些信息，創建一個名為 `figure_8()` 的新函數來繪製一個數字 8。

<iframe src="https://trinket.io/embed/python/e87cb9f3b9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>