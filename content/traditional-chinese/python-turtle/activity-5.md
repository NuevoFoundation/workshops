---
title: "Activity 5 - Drawing a honeycomb"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

<img src="../media/bee_honeycomb.png" alt="Honeycomb drawing" width="25%" />

這是最終活動！讓我們創建亞歷克斯將會住的蜂窩。幸運的是，蜂窩只是由6個六邊形組成，讓我們結合函數和循環的知識來製作蜂窩！

六邊形是一種有6條邊的形狀。要製作蜂窩，你需要將7個六邊形排列成沒有空隙的完美結合。看起來像是中心的一個六邊形，周圍排列著6個六邊形：一個在上面，一個在下面，一個在左上，一個在右上，一個在左下和一個在右下。

記得抬起筆，移動到新的位置50步，並向右轉60度以畫出新的六邊形。

在這個活動中，創建一個名為 `draw_honeycomb()` 的新函數。在函數體內，創建一個重複6次的循環。在循環內，我們首先必須使用之前定義的 `draw_hexagon()` 函數來畫六邊形。接下來，移動海龜來畫下一個六邊形。為此，海龜畫完每個六邊形後，我們需要讓海龜向前移動 **50 個像素**，然後向右轉 **60 度**。

注意，畫蜂窩可能需要一段時間。你可以通過設定海龜的速度在 `1` 到 `10` 之間來改變海龜畫蜂窩的速度，`1` 是最慢，`10` 是最快。在更改海龜顏色的附近放置此代碼。

``` python
turtle.speed(8)
```

<iframe src="https://trinket.io/embed/python/d83811c24a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>