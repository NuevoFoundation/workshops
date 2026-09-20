```yaml
---
title: "变量和类型"
description: "介绍 Java 中的类型和变量。"
date: 2021-10-13T00:00:00Z
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/KE0fNb-hTKE" title="Java variables and types video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 变量：命名它！

在上一个练习中，我们学习了如何使用 `System.out.print()` 打印不同的语句。

虽然输出一个数字或一句话很棒，但我们还没有赋予它们意义。

在 Java 中，我们引入了**变量**的概念。变量就像一个存储数据的带有名字的盒子。

例如，可以有一个名为 `myName` 的变量存储 `"Patrick"`，另一个名为 `loveMusic` 的变量存储 `true`，还有一个名为 `age` 的变量存储 `3`。就像下面的图片一样：

<img src="../images/variable.png" height="200" alt="3个盒子。第一个盒子外面有白色文字“myName”，里面有白色文字“Patrick”。第二个盒子外面有白色文字“loveMusic”，里面有白色文字“true”。第三个盒子外面有白色文字“age”，里面有白色文字“3”。"/>

## 什么是类型！

那么我们如何在 Java 中创建这些盒子或变量以存储数据呢？

在学习如何创建变量之前，我们需要先了解 Java 中的**类型**概念。类型描述了盒子里存储的是什么。如果你有一个整数盒子，它只能存储整数，而不能存储句子或符号。每个变量都有其自己的类型，限制它只能存储特定类型的数据。

例如，变量 `age` 存储数字 `3`，它应该只包含整数，而不是句子或符号。

在 Java 中，为了让变量存储整数，它的类型应该是 `int`。我们可以用下面的代码声明一个 `int` 类型变量 `age`，并赋值为 `3`：

```java
int age = 3;
```

一般来说，声明一个变量的格式为：`[数据类型] [变量名] = [数据];`。
{{% notice note %}}
以下是 Java 中一些重要的内置数据类型：

**类型** | **描述** | **示例**
--------|-----------|----------
`int` | 整数 | `20`, `30`, `35`
`char` | 字符，例如符号或单个字母 | `'A'`,`'b'`, `'('`, `']'`
`String` | 一串字符 | `"Hello"`, `"Bonjour"`, `"Hola"`
`boolean` | 布尔值，取值为 `true` 或 `false` | `true`, `false`
`double` | 浮点数 | `2.0`, `3.14`, `9.33`

{{% /notice %}}

让我们重新审视之前提到的三个变量，并确定它们的数据类型。

<img src="../images/dataType.png" height="200" alt="3个盒子。第一个盒子外面有白色文字“myName”，里面有白色文字“Patrick”。红色箭头指向字符串类型文本。第二个盒子外面有白色文字“loveMusic”，里面有白色文字“true”。红色箭头指向布尔类型文本。第三个盒子外面有白色文字“age”，里面有白色文字“3”。红色箭头指向整数类型文本。"/> 

在 Java 中，我们可以用以下代码声明这些变量：

```java
String name = "Patrick";
int age = 10;
boolean loveMusic = true;
```

## 什么是类型 -- 帮助 Patrick！

Patrick 🐥 在数据类型方面并不是大师！他经常在声明变量时混淆类型。让我们帮助他修正错误：

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsDataType" target="_blank">启动 Replit</a>

{{% notice tip %}}
通过将数据存储在变量中，你可以稍后使用这些数据或通过赋值同类型的新数据来更改变量。例如：

```java
int age = 10;
System.out.println(age); // 输出 10
age = 11; // 将数据 11 赋值给变量 age
System.out.println(age); // 输出 11
```

{{% /notice %}}

## 什么是类型 -- 追踪数字！

现在看看以下代码。你认为输出结果是什么？自己追踪每个变量的值，然后在下面测试：

```java
double x = 2.3;
double y = 10.0;
int z = 4;

x = y;
y = x;
z = 0;
z = z;
System.out.println("x: " + x + " y: " + y + " z: " + z );
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsVariable" target="_blank">启动 Replit</a>

{{% notice tip %}}
#### 解释这个例子
在第1-3行，我们声明变量并为 `x` (2.3)、`y` (10.0) 和 `z` (4) 设置初始值。
在第4行，我们将 `x` 设为 `y` 的值 (10.0)。
在第5行，我们将 `y` 设为 `x` 的值，而刚刚被设置为 10.0 (10.0)。
在第6行，我们将 `z` 设为 0。
在第7行，我们再次将 `z` 设为 `z` 的值，即 0 (0)。
{{% /notice %}}
```