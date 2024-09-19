```markdown
---
title: "变量和数据类型"
description: "介绍C#中的类型和变量。"
date: 2024-09-16T00:00:00Z
weight: 4
---

## 变量：命名吧！

在第一个练习中，我们学习了用`Console.WriteLine()`和`Console.Write()`打印不同的语句。

虽然打印一个数字或一个句子很不错，但我们还没有给它们赋予意义，如果我们想再次使用这个句子或数字，就必须重新输入。

在C#中，我们引入了一个**变量**的概念来存储数据。变量为一段数据分配一个名称。

例如，可以有一个名为`myName`的变量，赋值为`"Ann"`。另一个变量可能名为`age`，它被赋予数字`12`。

## 类型是什么！

那么我们如何在C#中创建这些变量来存储数据呢？

在学习如何创建变量之前，我们需要了解C#中的**数据类型**概念，简称为**类型**。在C#中，类型描述了存储的内容。如果你有一个数字变量，它只能包含数字，而不是句子或符号。每个变量都有自己的类型，控制它可以存储的数据种类。

例如，我们可以有一个名为`age`的变量来存储数字`12`。如果你试图将单词`"twelve"`存储在`age`中，它会产生错误，因为它只知道数字。

在C#中，要存储整数，使用类型`int`。我们用以下代码声明一个`int`类型的变量`age`，数据为`3`：

```
int age = 12;
```

一般来说，声明一个变量的格式为：`[数据类型] [变量名] = [数据];`。
{{% notice note %}}
以下是C#中内置的重要数据类型：

**类型** | **描述** | **示例**
--------|-----------|----------
`int` | 整数 | `20`, `30`, `35`
`char` | 字符，如符号或单个字母 | `'A'`,`'b'`, `'('`, `']'`
`string` | 字符序列 | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | 布尔值，仅为`true`或`false` | `true`, `false`
`double` | 小数 | `2.0`, `3.14`, `9.33`

{{% /notice %}}

在我们之前的例子中，要在C#中声明这些变量，我们输入如下：

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

最后一个变量很有趣。它的值只能是`true`或`false`。我们将在本研讨会的更高级部分看到这非常有用。

## 操作变量

让我们看看变量可以做些什么。

在下面的.NET Fiddle框架中，fork这个Fiddle并尝试输入以下代码并**运行**：

```C#
int age = 10;
Console.WriteLine(age); // 输出10
age = 12; // 将数据12分配给变量age
Console.WriteLine(age); // 输出12
```

我们可以给变量赋值，引用它，然后改变它的值。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## 类型是什么--帮助Patrick！

Patrick 🐥不是数据类型大师！他在声明变量时经常混淆。让我们在下面的.NET Fiddle中帮助他修正错误。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>
```