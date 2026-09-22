```markdown
---
title: "运算符"
description: "介绍运算符，并在 Java 中对变量进行运算。"
date: 2021-10-13T00:00:00Z
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/wP8-F1nBPcg" title="Java 运算符视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 让我们做数学运算：算术运算符

在上一节练习中，我们学习了变量以及如何给特定类型的变量赋值，例如：

```java
int age = 3;  // 声明一个类型为 int 的变量 age，值为 3
age = 4;      // 将 4 赋值给变量 age
```

查看上面的代码，它实际上是将 1 加到变量 `age` 的值上。

在 Java 中，我们可以使用 **算术运算符** 直接对变量进行数学运算：`+`，`-`，`*`，`/`，`%`。 例如，我们可以使用加法运算符 `+` 给 `age` 加 1：

```java
int age = 3;  // 声明一个类型为 int 的变量 age，值为 3
age = age + 1;// age 加 1
```

{{% notice note %}}
以下是 Java 中的算术运算符：

**运算符** | **描述** | **示例**
------|------|--------
`+` | 加法 | `1 + 1 = 2`
`-` | 减法 | `2 - 1 = 1`
`*` | 乘法 | `3 * 3 = 9`
`/` | 除法 | `9 / 3 = 3`
`%` | 求余数 | `10 % 4 = 2`

**注意**：如果除法的两个操作数都是整数，则结果也将是整数。例如，`10 / 4` 返回 2，而不是 2.5，因为余数被舍弃。如果其中一个操作数是 double，则结果将是 double。

**注意**：取模运算取的是除法运算的余数。
{{% /notice %}}

{{% notice tip %}}
加法运算符 (`+`) 也可用作字符串的拼接运算符。例如：

`String name = "Patric" + "k";` 等同于 `String name = "Patrick";`
{{% /notice %}}

### 指导
1. 使用下面的程序练习使用算术运算符。改变数字以查看结果。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOperatorsPractice" target="_blank">启动 Replit</a>

## 比较：关系运算符

接下来，让我们学习如何使用 **关系运算符** 进行数字的比较。

就像数学一样，我们可以使用 `>`，`<`，`>=`，`<=` 来比较数字。例如：`(3 > 2)` 的结果是 `true`，一个布尔值。

{{% notice note %}}
以下是 Java 中的关系运算符：

**运算符** | **描述** | **示例**
------| ------| ------
`==` | 等于 | `(3 == 3)` 是 `true`
`!=` | 不等于 | `(3 != 3)` 是 `false`
`>` | 大于 | `(3 > 2)` 是 `true`
`<` | 小于 | `(3 < 2)` 是 `false`
`>=` | 大于或等于 | `(3 >= 2)` 是 `true`
`<=` | 小于或等于 | `(2 <= 2)` 是 `true`

注意：`==` 和 `!=` 只能用于相同类型的数据。例如：

```java
int x = 3; 
double y = 3.0; 
x == y; // 这会产生错误，因为 x 和 y 是不同类型。
```

{{% /notice %}}

{{% notice tip %}}
使用一个等号表示给变量赋值。使用两个等号比较两个元素的值。

```java
age = 3;  // 设置 age 的值为 3
age == 3; // 检查 age 的值是否为 3
```
{{% /notice %}}

### 比较练习

1. 使用下面的程序练习使用比较运算符。更改数字以查看结果。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsComparisonPractice" target="_blank">启动 Replit</a>

## 考试成绩统计！

Patrick 🐥 和他的 4 位同学刚刚在班级中进行了音乐考试。他们的考试成绩如下：Patrick(88)，Tom(89)，Mary(95)，Chris(84)，Jen(92)。

我们希望生成一份整个班级的成绩统计报告。

该报告将列出每位学生的成绩、班级平均分，以及班级平均分是否超过 60、70、80、90（结果为 `true` 或 `false`），如下所示：

```
---------------------------
     Music Grade Report    
---------------------------

Student Grades:          
- Patrick: ...
- Tom: ...
...

Class Average: ...
- Average Over 60: ...
- Average Over 70: ...
- Average Over 80: ...
- Average Over 90: ...
```

让我们借助运算符来编写这个报告 🎵！

{{% notice note %}}

### 指导：

1. 在第 12 行开始，识别打印语句中的所有变量，并用正确的数据类型和值声明它们。请注意，共有 10 个变量，变量 `average` 已为您声明。

   提示：例如，变量 `patrickGrade` 应在第 13 行被声明并赋值：`int patrickGrade = 88;`。

2. 使用 **算术运算符**（如 `+`，`-`，`*`，`/`，`%`）计算正确的班级平均分，并将其赋值给变量 `average`。

   请注意，平均分的计算方式为 `(总分)`/`(学生人数)`。

3. 使用 **关系运算符**（如 `>`，`<`，`>=`，`<=`）为变量 `over60`，`over70`，`over80`，`over90` 赋值正确的结果。

4. 运行程序并查看打印的报告！

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href