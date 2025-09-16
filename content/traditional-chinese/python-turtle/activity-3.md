---
title: "活動 3 - 繪製六邊形"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

![Turtle, hexagon animation](https://media.giphy.com/media/TDLqC61A5uOAO8WwnJ/giphy.gif)

做得好！你剛剛用 Python 和 Turtle 繪製了第一個形狀！現在讓我們稍微修改一下我們已經寫好的正方形代碼，來繪製一個六邊形。畢竟，Alex 是一隻蜜蜂，他需要繪製六邊形來建造他的第一個蜂巢。

六邊形是一種具有六條邊和六個角的形狀。六邊形是非常有趣的形狀，我們經常在自然界中看到！例如，蜜蜂利用六邊形來建造蜂巢，因為這種形狀非常有效；它使用最少的材料來容納最多的蜂蜜。

為了幫助你繪製六邊形，想想一個六邊形有多少邊。現在我們來看看烏龜應該轉多少度？

{{% expand "**提示：**" %}} 
記住：如果你將360度除以一個形狀所需的轉彎次數，你將得到每次轉彎所需的角度。
{{% /expand %}}
<br/>

{{% expand "**顯示答案：**" %}} 
烏龜需要轉6次以繪製六邊形。所以，360度 ÷ 6 次轉彎 = 每次轉60度。
{{% /expand %}}
<br/>

提醒一下，這是用來創建三角形的代碼：

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

<iframe src="https://trinket.io/embed/python/e82295e92f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>