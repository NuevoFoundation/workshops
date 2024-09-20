---
title: "Variables and Data Types"
description: "Introduce types and variables in C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## 变量：命名它！

在第一个练习中，我们学习使用 `Console.WriteLine() 和 Console.Write()` 打印不同的语句。

虽然直接打印一个数字或句子很方便，但我们还没有赋予它们意义，如果想再次使用该句子或数字，就需要重新输入。

在 C# 中，我们引入了**变量**的概念用于存储数据。变量用一个名字存储一段数据。

例如，可以有一个变量叫 `myName`，它被赋值为 `"Ann"`。另一个变量可能叫 `age`，它被赋值为数字 `12`。

## 类型！

那么，我们如何在 C# 中创建这些变量以存储数据呢？

在学习如何创建变量之前，我们需要了解 C# 中的**数据类型**或简称**类型**的概念。C#中的类型描述了存储的内容。如果你有一个数字变量，它只能包含数字，不能是句子或符号。每个变量都有它自己的类型，来控制它可以保存的数据种类。

例如，我们可以有一个变量叫 `age` 存储数字 `12`。如果你试图将 `"twelve"` 存储到 `age` 中，会产生错误，因为它只认数字。

在 C# 中，变量若储存整数，使用类型 `int`。我们用以下代码声明一个 `int` 类型的变量 `age` 并赋值 `3`：

```
int age = 12;
```
通常，声明变量的格式为: `[数据类型] [变量名] = [数据];`。
{{% notice note %}}
下面是 C# 中重要的内置数据类型：

**类型** | **描述** | **示例**
--------|-----------|----------
`int` | 整数 | `20`, `30`, `35`
`char` | 字符，如符号或单个字母 | `'A'`,`'b'`, `'('`, `']'`
`string` | 一系列 `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | 布尔值，值为 `true` 或 `false` | `true`, `false`
`double` | 小数 | `2.0`, `3.14`, `9.33`

{{% /notice %}}

使用我们之前的例子，在 C# 中声明这些变量，可以输入以下内容：

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

最后一个变量很有趣。它只能有值 `true` 或 `false`。我们将在本研讨会的更高级部分看到这会非常有帮助。

## 玩转变量

让我们看看变量可以做什么。

在下面的 .NET Fiddle 框中，创建 Fiddle 并尝试输入这些行，然后**运行**：

```C#
int age = 10;
Console.WriteLine(age); // 打印出 10
age = 12; // 赋值 12 给变量 age
Console.WriteLine(age); // 打印出 12
```
我们可以为变量赋值，引用它然后改变该值。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## 帮助 Patrick - 类型！

Patrick 🐥 不是数据类型大师！他在声明变量时常常混淆。让我们在下面的 .NET Fiddle 中帮他修正错误。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>