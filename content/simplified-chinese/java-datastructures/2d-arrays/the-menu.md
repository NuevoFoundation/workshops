---
title: "菜单"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/LelFnKtml8Q" title="The Menu - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 存储餐厅信息

回想一下我们在数组部分创建的餐厅数组。

![restaurant](../../arrays/img/array2.png)

如你所见，这个数组存储了我们应用中所有不同的餐厅。现在，让我们尝试让每家餐厅包含一个包含其所有菜单项的数组。如果操作正确，我们数组的第`0`个元素，“Burger King”（汉堡王），现在应该包含其相应的菜单项。它看起来可能是这样的：

![burgerkingarray](../img/2darray2.png)

如你所见，第`0`个元素应该是我们的汉堡王数组。就像我们的一维数组一样，我们对数组中的项目进行零索引。如果我们想点一份华堡，我们只需调用`Restaurant[0][0]`。这会调用我们的汉堡王数组及其数组中的第一个元素，也就是华堡。如果我们想要点薯条，我们可以调用`Restaurant[0][2]`。

问题：如果我们想点橙味鸡，而橙味鸡是熊猫快餐数组的第10个元素，那么我们该如何访问该元素？

如果你的回答是`Restaurant[2][9]`，那么你是对的！熊猫快餐是第三个数组（`[2]`），而橙味鸡是第十个元素（`[9]`）。