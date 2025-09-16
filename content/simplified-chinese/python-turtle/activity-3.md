```markdown
---
title: "活动 3 - 画一个六边形"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

![乌龟，六边形动画](https://media.giphy.com/media/TDLqC61A5uOAO8WwnJ/giphy.gif)

做得很好！你刚刚使用Python中的Turtle画了你的第一个形状！现在让我们稍微修改一下我们已经写好的代码，将画一个正方形改为画一个六边形。毕竟，Alex是一只蜜蜂，他需要画六边形来建造他的第一个蜂巢。

六边形是一个有六个边和六个角的形状。六边形是我们在自然界中常见的迷人形状！例如，蜜蜂使用六边形来建造它们的蜂巢，因为这种形状非常高效；它使用最少的材料来储存最多的蜂蜜。

为了帮助你画一个六边形，想一下一个六边形有多少边。现在，让我们找出乌龟需要转多少度？

{{% expand "**提示：**" %}} 
记住：如果你将360度除以你需要为一个形状转的次数，你将得到你需要转的角度。
{{% /expand %}}
<br/>

{{% expand "**显示答案：**" %}} 
乌龟需要转6次来画六边形。所以，360度 ÷ 6次 = 每次转60度。
{{% /expand %}}
<br/>

作为一个有用的提醒，这是用于创建三角形的代码：

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

<iframe src="https://trinket.io/embed/python/e82295e92f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```