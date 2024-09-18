---
title: "活动 1 - 画一个正方形"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

<img src="../media/bee_square.png" alt="Bee imagining square" width="25%" />

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/CRJf-LbXAx4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

干得好！你已帮助 Alex 画了一条线！现在让我们更进一步，帮助 Alex 画一个正方形。正方形是几何中最简单和最熟悉的形状之一。正方形有四条边，长度完全相同。我们所说的“角”是指两边之间相遇的空间。在正方形中，四个角也是相同的。

海龟需要转动 90 度 4 次，并且每次移动相同的步数以创建正方形。

诀窍在于：一个点周围的角度总和（如转动的点）总是 360 度。如果将 360 度除以所需的转动次数（正方形为 4），就能得到所需的转动角度。
因此，360 度 ÷ 4 次转动 = 每次转动 90 度。

要画一个正方形，我们需要遵循以下步骤：

1. 向前走 50 步
2. 向左转 90 度
3. 向前走 50 步
4. 向左转 90 度
5. 向前走 50 步
6. 向左转 90 度
7. 向前走 50 步

记得使用 `turtle.forward()` 来画线。要向左转 90 度，需要传递 `90` 作为 `turtle.left()` 方法的参数：

``` python
turtle.left(90)
```

<iframe src="https://trinket.io/embed/python/bfe791bb1e" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>