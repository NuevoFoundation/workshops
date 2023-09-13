---
title: "从控制台中读取"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 6
prereq: "Python 基础知识:变量"
difficulty: 中级
--- 

现在我们已经学习了变量的基础知识，我们可以让用户输入一些内容到我们的程序。使用以下代码告诉我们的程序等待直到用户在控制台中键入内容。然后，计算机会得到在控制台中键入的任何内容，并将其存储到名为 **value** 的变量中。

```python
value = input()
```

以下是如何使用 `input()` 得到用户输入的例子：

```python
print("What's your name?")
value = input()
print("Hello " + value + "!")
```

试一试！当单击运行时，你会注意到下面的图像尚未出现在控制台上。

![Screenshot of the console end symbol](../../img/end_symbol.png "image of the console end symbol")

![Screen shot of the console waiting for user input](../../img/console_read_waiting.png "image of how the console looks waiting for user input")

这是因为程序正在等待你输入一些内容！在右侧的控制台中输入您的名字或 'Nuvi'，然后按Enter键，检查它是否正确打印出来。

![Screen shot of the console after the user has given input and the program completed](../../img/console_read_input.png "image of how the console looks after it has read user input")

{{% notice note %}}

即使我们输入一个数字，比如 `8`，变量 `value` 仍然会包含字符串 `"8"`。在尝试对输入变量进行数学运算时要小心！

{{% /notice %}}

## 小挑战

让我们看看是否可以编写一个程序，首先将以下两行内容打印到控制台：

    Welcome!
    How can I help you today?

然后，控制台等待用户输入。用户在控制台中键入内容并按下 "Enter" 键后，计算机会打印出：

    You asked: [input]?
    I don’t know the answer to [input]. Goodbye!

[input] 应该替换为用户在控制台中输入的内容。例如，如果您想问 "How old am I?"，计算机将打印出 "I don’t know the answer to ... "

{{% notice tip %}}

这与我们上面一起学习的示例非常相似。尝试对我们提供的内容进行一些小的更改。

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>