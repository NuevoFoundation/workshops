```markdown
---
title: "方法"
description: "介绍 C# 中的方法。"
date: 2024-09-16T00:00:00Z
weight: 7
---

## 什么是方法？

到目前为止，我们已经学习了如何在变量中存储数据，打印数据和句子，并通过 `if` 语句、`for` 循环和 `while` 循环进行决策。

从最后一个练习中，我们知道以下代码块可以计算 1 到 100 的总和：

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Sum: " + total);
```

但是如果我们想计算 1 到 77 的总和呢？我们如何做到这一点而不需要重复写整个代码块？

我们想在代码中创建一个 ✨ 魔法盒 ✨，无论我们想为哪两个数字创建总和，它都能为我们完成计算！
<img src="../images/method.png" height="250" alt="Num 1 和 Num 2 的箭头指向一个带有 Magic Box 字样的圆圈，圆圈的箭头指向 Num 1 到 Num 2 的总和"/> 

在 C# 中，**方法**就像一个魔法盒，通过运行可以使用用户输入的代码块来完成特定任务。

方法有两个部分：方法签名和方法体：

{{% notice note %}}
### 方法签名

定义一个方法时，我们首先需要编写它的<b>方法签名</b>。一个签名头有四个主要部分：

```
access_specifier return_type method_name(list_of_parameters)
```

**部分名称** | **描述** | **示例或可能选项**
----|----|----
**访问修饰符** | 提供方法的访问级别 | `public` 告诉计算机任何人都可以使用这个方法。`private` 告诉计算机它只能在类内被调用。(我们将在下一页学习类！) `protected` 告诉计算机它可以被同类对象调用。
**返回类型** | 返回到调用函数的数据类型，严格来说在 C# 中返回类型不属于签名的一部分 | `string` 或 `int`，如果方法没有返回值，使用 `void`。
**方法名称** | 方法的名字，用于调用它 | 根据方法的功能选择一个描述性名称。
**参数列表** | 方法被使用时必须提供的输入列表 | 可以有零个或多个参数，形式为 (`type` `input name`, `type` `input name`, ... )。如果没有参数，使用 ()。

```
// 一个示例：接受一个字符串作为参数，并返回另一个字符串作为响应
public string artist (string songName)
```
**注意：** 参数的变量名不必与传入方法的数据的变量名相同。

### 方法体

接下来，我们把与方法关联的代码块放入方法签名后面的 **方法体**，它位于 `{` 和 `}` 之间。

要返回一些数据，我们可以使用关键字 `return`，后面跟变量名或要返回的值。

**注意：** 一旦执行了 `return`，方法中的任何后续代码都不会执行。

这是一个定义一个方法的示例，该方法计算从 `numA` 到 `numB` 数字的总和：

```c#
/* 方法名：sumNum
 * 输入/参数：两个类型为 int 的数字
 * 功能：返回从 numA 到 numB 的总和
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // 我们通过名称 numA 访问第一个输入
    while(num <= numB){  // 我们通过名称 numB 访问第二个输入
        total = total + num;
        num = num + 1;
    }
    return total; // 返回语句
}
```

### 方法调用

最后，为了在代码中执行一个方法，我们需要进行 **方法调用**。我们要写出方法名称并提供合适的输入。
例如：

```C#
sumNum(1, 3); // 单行代码调用方法 sumNum()，返回值为 6
```

知道 `sumNum(1, 3)` 返回的是一个 `int`，它表示从 1 到 3 的总和，我们可以存储并打印该值：

调用此方法可以这样做：
```c#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WriteLine(sum); // 打印 6
```

方法强大的一个原因是我们可以多次调用它：
```C#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WriteLine(sum); // 打印 6
    sum = sumNum(1, 4);
    Console.WriteLine(sum); // 打印 10
```

我们可以写成直接打印返回值而不存储它：
```c#
    Console.WriteLine(sumNum(1,3)); // 打印 6
    Console.WriteLine(sumNum(1,4)); // 打印 10
```
{{% /notice %}}

## 数一数金字塔！🔺

以下是一幅每层都是当前层的完美平方数形成的方数金字塔的图像，从顶部开始计数。

<img src="../images/pyramid.png" height="250" alt="由彩珠组成的金字塔。底层为黄色，接着是蓝色、棕色、白色、粉色、淡蓝色、橙色、珊瑚色、绿色，最后是红色" /> 

顶层有 `1 * 1` 个珠子，第二层有 `2 * 2` 个珠子，以此类推。

让我们写一个方法，它接受总层数并输出金字塔中的珠子总数！

完成挑战后，您将看到以下消息：

```
恭喜！挑战已解决！
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ireaAA" title="交互式 C# 方法挑战" frameborder="0"></iframe>
```