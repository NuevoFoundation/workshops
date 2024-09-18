```markdown
---
title: "活动2 - 用循环简化代码"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kGhMGdqqV-w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

太好了！你画了一个正方形。但请注意，我们重复写了很多相同的行！我们需要重复4次画线和左转的指令。如果我们能只给一次指令，然后让程序重复4次，那该多好！别担心，我们可以做到！

为此，我们需要使用循环。循环可以多次运行一组指令。让我们用循环来创建一个三角形。三角形是一种有三条边和三个角的图形。我们来建一个侧边和角度相同的三角形。如果将360度除以需要转的次数（三角形是3次），你将得到所需的转角。

因此，360度 ÷ 3 次转角 = 每次转120度。

这意味着每次画完三角形的一条边后，需要转动120度以准备画下一边。通过这样做三次，你将完成你的三角形。

要看实际效果，以下是一些绘制三角形的示例代码：

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

让我们理解这段代码的作用。`for i in range(3):` 这条语句告诉程序循环运行指令。`range(3)` 设置循环运行的次数限制（在这种情况下是3次）。字母 `i` 被称为一个**变量**。它用于跟踪我们运行循环内容的次数。

{{% notice warning %}}

## Python语法 - 第1部分

**语法**是我们书写语言以便理解的方式。在英语中，我们有拼写和语法规则来帮助理解。同样，Python语言也有语法规则，以便计算机能够理解我们的代码。

首先，注意在带有 `for` 的行末，我们加了一个冒号 (`:`)；这表示下一行将是 `for` 循环的一部分。如果你漏掉 `:`，计算机会报错！

此外，我们在示例中某些代码行前加了一个制表符。制表符告诉计算机这些语句被视为 `for` 循环的一部分。

要看这有多大影响，请查看下面的代码。由于我们移除了 `turtle.left(120)` 前的制表符，这段代码将不再按预期工作。现在，我们只重复 `turtle.forward(50)` 三次，就得到了直线！

``` python
for i in range(3):
  turtle.forward(50)
turtle.left(120)
```

{{% /notice %}}

现在，取我们提供的示例代码，稍作修改，使其画一个正方形而不是三角形。你可以回顾一下在活动1中所做的作为提示。

<iframe src="https://trinket.io/embed/python/892913b49a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```