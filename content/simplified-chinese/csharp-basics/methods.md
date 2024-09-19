```markdown
---
title: "方法"
description: "介绍C#中的方法。"
date: 2024-09-16T00:00:00Z
weight: 7
---

## 什么是方法？

到目前为止，我们已经学习了如何将数据存储在变量中，打印数据和句子，并通过`if`语句、`for`循环和`while`循环进行决策。

从上一次练习中，我们知道以下代码块可以计算从1到100的和：

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Sum: " + total);
```

但如果我们想计算从1到77的和呢？如何在不重新写整个代码块的情况下实现？

我们希望在代码中创建一个 ✨ 魔法盒 ✨，无论我们想计算哪两个数字，它都能为我们进行计算！
<img src="../images/method.png" height="250" alt="数字1和数字2箭头指向一个圆圈，圆圈内有文字‘Magic Box’，另一个箭头从圆圈指向‘Num 1到Num 2的和’"/> 

在C#中，**方法**就像一个可以使用用户输入来执行特定任务的魔法盒。

方法有两个部分：签名和主体。

{{% notice note %}}
### 方法签名

要定义一个方法，我们首先需要写出它的<b>方法签名</b>。签名头有四个主要部分：

```
access_specifier return_type method_name(list_of_parameters)
```

**部分名称** | **描述** | **示例或可能选项**
----|----|----
**访问控制符** | 提供对方法的访问级别 | `public` 表示任何人都可以使用此方法。`private` 表示只能在类内部调用（我们将在下一页学习类！）`protected` 表示可以由同类的对象调用。
**返回类型** | 返回给调用函数的数据类型，技术上在C#中返回类型不是签名的一部分 | `string`或`int`，如果方法不返回任何内容则用`void`。
**方法名称** | 方法的名称，用于调用它 | 选择一个基于方法功能的描述性名称。
**参数列表** | 方法使用时必须提供的输入列表 | 可以有零个或多个参数，形式为 (`type` `input name`, `type` `input name`, ... )。无参数时使用()。

```
// 一个示例，接受一个字符串作为参数，返回另一个字符串
public string artist (string songName)
```
**注意：** 参数的变量名不必与传入方法的数据变量名匹配。

### 方法主体

接下来，我们将与方法关联的代码块放在**方法主体**中，位于签名后的`{`和`}`之间。

要返回一些数据，我们使用关键字`return`，后跟一个变量名或要返回的值。

**注意：** 一旦`return`，方法中其后的内容不会执行。

这是一个定义方法的例子，它计算从`numA`到`numB`的总和：

```c#
/* 方法名称: sumNum
 * 输入/参数: 2个int类型的数字
 * 功能: 返回从numA到numB的和
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // 我们访问第一个输入名为numA
    while(num <= numB){  // 我们访问第二个输入名为numB
        total = total + num;
        num = num + 1;
    }
    return total; // 返回语句
}
```

### 方法调用

最后，要在代码中执行方法，我们需要进行**方法调用**。我们写出方法名和相应的输入。
例如：

```C#
sumNum(1, 3); // 调用方法sumNum()的一行代码，返回值为6
```

知道`sumNum(1, 3)`返回一个`int`类型的值从1到3的和，我们可以这样存储和打印该值：

你可以这样调用此方法
```c#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WrlineLine(sum); // 输出6
```

方法强大的原因之一是我们可以多次调用它：
```C#
    int sum = 0;
    sum = sum