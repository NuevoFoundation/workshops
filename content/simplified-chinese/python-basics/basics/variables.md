---
title: "变量"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 4
--- 

在前面的练习中，我们学习了使用 `print("")` 语句打印不同的内容。虽然打印出一个数字或一个句子很棒，但我们还没有给这个数字和句子赋予含义。变量就是我们可以赋予字符串(str)、数字(int, float, complex)和布尔值(bool)等值的名称。以下是在 Python 中创建名为 s 的变量的方法。我们说 s 是一个字符串，它的值为 `"Hello, World!"`。
```python
s = "Hello, World!"
x = 88
happy = True
```
单击运行. 

![Screenshot of what variables example looks like in replit](../../img/variables.png "image of how variables look in replit") 

请注意，变量不会被打印到控制台。相反，变量只是将字符串、数字或布尔值保存到计算机的内存中。我们可以在其他语句中使用这些变量。例如，以下代码会将 `"Hello Nuevo Foundation"` 打印到控制台：

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1 + " " + str2)
```

你还可以运行以下代码将字符串打印在一起，同时在单词之间添加空格。

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1, str2)
```
## 变量是什么类型！

在学习如何创建变量之前，我们需要学习 **类型** 的概念。类型描述了被存储的变量信息。

Python 是一种动态类型语言，这意味着与 Java 等语言不同，在为变量赋值之前，我们不必指定它的类型。 而且，如果你原先有一个整数，但你删除了这个整数并在原先整数的地方创建了一个字符串，python 将允许你这样做。但是，你必须根据类型使用变量。

{{% notice note %}}
以下是Python中重要的数据类型：

**类型** | **描述** | **示例**
--------|-----------|----------
`int` | 整数 | `20`, `30`, `35`
`char` | 字符，例如符号或单个字母 | `'A'`,`'b'`, `'('`, `']'`
`String` | 一串字符 `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`boolean` | 是 `true` 或否 `false` | `true`, `false`
`double` | 小数 | `2.0`, `3.14`, `9.33`

{{% /notice %}}

让我们回到在第一个示例中提到的三个变量，并确定它们的数据类型。`s` 是字符串，`x` 是整数，`happy` 是布尔值。

### 小挑战

- 创建两个新变量：一个名为 `comp` 的变量，用于存储字符串 `"Computer"`。
- 一个名为为 `five` 的变量，用于存储数字 `5`。

接下来，使用这些变量和在前面的活动中学到的内容将以下内容用 `print` 语句打印到控制台。你_必须_使用变量！

    Computer
    5
    ComputerComputer
    10
    ComputerComputerComputer
    15

{{% notice tip %}}

提示：如果你遇到困难，请考虑使用 `+` 运算符。请记住，你可以在同一行中多次使用变量 **comp** 和 **five**！

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
