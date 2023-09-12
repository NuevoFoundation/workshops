---
title: "写入控制台 (print打印语句)"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/NrbQCjlzhYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 和你的程序对话！

**Print** 语句用于将内容写入控制台。用 `print("Hello World")` 在屏幕中打印 *Hello World*。我们稍后会明白其实`print` 是一个函数， 我们用这个函数来执行打印任务。我们输入到 `print` 函数中的内容将会被打印在屏幕上。

让我们从使用 `print`打印语句开始吧。

我们将在后面的课程中大量使用打印语句，因此在继续下一个概念之前，请确保你已经理解了上面的内容！

### 小挑战一
首先，将以下文本写入您的 Trinket main.py，然后单击运行。

```python
print("Hello, World!")
```

观察"Hello, World!"显示在你的右侧屏幕上！ `print` 打印语句告诉计算机将括号 `()` 中的句子打印到控制台窗口或右侧的屏幕中。

![alt text](../../img/print.png "hello world in python!")

<iframe src="https://trinket.io/embed/python/ce70252d93" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% notice tip %}}
### 在打印语句中使用 "

你有没有注意到 Hello, World! 被`"`包围了？你有没有试过不带 `"` 符号会导致程序错误？值得注意的是，如果你尝试 `print(123)` 你会发现程序成功运行且并没有错误产生。这是因为程序中的文本（编程语言中的str字符串）需要使用引号
括起来以指定它是文本。但数字不需要用引号来指定。

继续尝试打印不同的东西！
{{% /notice %}}

### 小挑战二

1. 在不删除引号的情况下，尝试将 `"Hello, World"` 更改为另一个句子。（例如 – `"My name is Nuvi!"`） 单击 **运行** 观察是否有任何改变出现。
2. 在第一个打印语句下面添加一个新的打印语句，在第一句话下面打印第二句。
3. 单击**运行**观察是否两个句子被打印了出来。

<iframe src="https://trinket.io/embed/python/ce70252d93" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

我们将在后面的课程中大量使用打印语句，因此在继续之前请确保你已经理解了上面的内容！

{{% notice warning %}}

## 求助！我得到了很多红色文字！

如果你看到任何红色文字，表示你遇到了一些错误！请寻求帮助。在 Python 中编码时，尤其要注意以下几点：

1. 确保要打印的句子**用引号括起来**，并且这个句子**在括号内**。

![Example showing print statement done wrong (without quotation marks - print(Hello, World!)) and correctly (with quotation marks - print('Hello, World!'))](../../img/redLine.png)

2. Python 中代码的间距非常重要。确保在每行的开头或结尾没有任何不必要的空格或tabs符号，否则 Python 将无法读取代码。例如，不要在 `print` 之前写任何空格，也不要在 `print("Hello, World!)` 的最后一个括号之后写任何空格。

{{% /notice %}}
