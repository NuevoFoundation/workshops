---
title: "使用 Trinket"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/_DbRac3d0lo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

为了帮助 Alex 住在蜂巢中，他需要学习如何制作蜂窝！我们将使用 Python 的 `turtle` 库为 Alex 画一个蜂窝。蜂窝形状是你经常在蜂巢中看到的图案。想象一下许多小的、平坦的六边形完美地拼在一起，没有任何间隙。这些六边形叫做六边形。

<img src="../media/turtle_honeycomb.png" alt="A photo of a honeycomb" width="25%" />

## 使用 Trinket

今天你将使用 Trinket 学习如何用 Python 编码。这里是你今天将使用的交互窗口示例：

<iframe src="https://trinket.io/embed/python/1363ac22be" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

在我们开始之前，先了解一下窗口是如何工作的。`main.py` 文件包含代码，即计算机运行的指令。通过按下 **run** 按钮，你告诉计算机执行代码中的指令。运行代码的任何结果都会显示在底部白色屏幕的 **result** 标签下。今天，我们的结果将是一个画作创建的动画。

接下来，让我们进一步解释 `main.py` 文件中提供的一些代码。

{{% notice tip %}}

## 库和导入语句

查看代码顶部。你会看到以下一行：

```
import turtle
```

这条语句允许我们导入 `turtle` 库提供的所有绘图功能。**库**是将相关功能分组在一起以供 Python 语言使用的地方。例如，`turtle` 库在结果窗口中引入了一个有用的艺术海龟，我们可以通过代码控制它来绘制图像。

## 注释

以 `#` 开头的灰色行称为 **注释**。这些是在代码中用来解释发生了什么的说明，因为它们被计算机忽略，通常用于方便其他开发者在处理相同代码时更容易阅读和理解正在发生的事情。

{{% /notice %}}