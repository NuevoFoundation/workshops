---
title: "活動 7 - 繪製8字形"
date: 2019-07-25T13:24:17-07:00
weight: 10
draft: false
---

<img src="../media/turtle_circles.png" alt="drawing a figure 8" width="25%"/>

太棒了！現在讓我們繪製一個8字形，作為製作曼荼羅花的第一步！8字形就是兩個相對的圓圈。

圓是一種看起來像環或圈的形狀。半徑是從圓的中心到邊緣的距離。它幫助你了解圓的大小，因為它顯示了從中心到邊緣的距離。

為此，我們可以使用 `turtle.circle(x)` 方法，該方法接受一個整數 `x` 作為圓的半徑。（你可能記得 `2 * 半徑` 是圓的寬度。）將半徑作為一個**參數**意味著我們可以決定圓的大小。

``` python
  import turtle
  turtle.circle(20)
```

在上面的例子中，圓的寬度是40像素，並且圓是逆時針方向繪製的。如果 `turtle.circle()` 的參數是負數，則圓會順時針方向繪製，這與原始方向相反。

利用這些資訊，創建一個名為 `figure_8()` 的新函數，繪製一個8字形。

<iframe src="https://trinket.io/embed/python/e87cb9f3b9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>