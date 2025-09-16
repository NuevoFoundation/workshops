---
title: "Activity 1 - Drawing a square"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

<img src="../media/bee_square.png" alt="Bee imagining square" width="25%" />

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/CRJf-LbXAx4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

太好了！你幫助 Alex 畫了一條線！現在讓我們再進一步，幫助 Alex 畫一個正方形。正方形是幾何學中最簡單和最熟悉的形狀之一。正方形有四個邊，而且長度完全相同。當我們說“角度”時，我們指的是兩條邊相交的空間。在正方形中，四個角度也都是相同的。

烏龜需要轉 90 度 4 次，每次移動相同的步數來創建一個正方形。

這裡有個小訣竅：圍繞一個點（比如你轉彎的地方）的角度總和總是 360 度。如果你將 360 度除以你需要轉彎的次數（正方形是 4 次），你就會得到每次需要轉的角度。
所以，360 度 ÷ 4 次轉彎 = 每次轉 90 度。

要畫一個正方形，我們需要按以下步驟進行：

1. 向前走 50 步
2. 向左轉 90 度
3. 向前走 50 步
4. 向左轉 90 度
5. 向前走 50 步
6. 向左轉 90 度
7. 向前走 50 步

記得使用 `turtle.forward()` 來畫線。要向左轉 90 度，你需要在 `turtle.left()` 方法中傳入 `90` 作為參數：

``` python
turtle.left(90)
```

<iframe src="https://trinket.io/embed/python/bfe791bb1e" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>