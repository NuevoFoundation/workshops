```markdown
---
title: "Methods"
description: "介绍C#中的方法。"
date: 2024-09-16T00:00:00Z
weight: 7
---

## 什么是方法？

到目前为止，我们已经学习了如何在变量中存储数据、打印数据和句子，并使用`if`语句、`for`循环和`while`循环做决策。

从上一个练习中，我们知道以下代码块计算从1到100的和：

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Sum: " + total);
```

但如果我们想计算从1到77的和呢？如何做到无需再次编写整个代码块？

我们希望创建一个 ✨ 魔法盒 ✨ ，可以为我们计算无论哪个两个数字的和！
<img src="../images/method.png" height="250" alt="Num 1和Num 2箭头指向一个圈，圈内有文字Magic Box和箭头指向圈外Sum of Num 1 to Num 2"/> 

在C#中，**方法**就像一个魔法盒，通过运行一段可以使用用户输入的代码来执行特定任务。

方法有两个部分：签名和主体：

{{% notice note %}}
### 方法签名

要定义一个方法，首先需要写出它的<b>方法签名</b>。签名头有四个主要部分：

```
access_specifier return_type method_name(list_of_parameters)
```

**部分名称** | **描述** | **示例或可能选项**
----|----|----
**access specifier** | 提供对方法的访问级别 | `public` 表示任何人都可以使用此方法。`private` 表示只能在类内调用。（我们将在下一页学习类！）`protected` 表示可以由同类对象调用。
**return type** | 返回给调用函数的数据类型，技术上在C#中返回类型不是签名的一部分 | `string` 或 `int`，如果方法不返回任何内容则使用 `void`。
**method name** | 方法的名称，用于调用它 | 根据方法的功能选择描述性名称。
**list of parameters** | 使用该方法时必须提供的输入列表 | 可以有零个或多个参数，形式为 (`type` `input name`, `type` `input name`, ... )。无参数时使用 ()。

```
// 一个例子，接受一个字符串作为参数并返回另一个字符串作为响应
public string artist (string songName)
```
**注意:** 参数的变量名不必与传递给方法的数据的变量名匹配。

### 方法主体

接下来，将与方法关联的代码块放在**方法主体**中，位于方法签名后的 `{` 和 `}` 之间。

要返回一些数据，我们使用关键字 `return` 后跟一个变量名或要返回的值。

**注意:** 一旦 `return`，方法中的任何后续内容都不再运行。

这是一个定义方法的示例，该方法计算从 `numA` 到 `numB` 的数字之和：

```c#
/* 方法名称: sumNum
 * 输入/参数: 2 个类型为 int 的数字
 * 功能: 返回从 numA 到 numB 的和
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // 通过名称 numA 访问第一个输入
    while(num <= numB){  // 通过名称 numB 访问第一个输入
        total = total + num;
        num = num + 1;
    }
    return total; // 返回语句
}
```

### 方法调用

最后，要在代码中执行一个方法，我们需要进行方法调用。编写方法名称与适当的输入。
例如：

```C#
sumNum(1, 3); // 一行代码调用方法 sumNum() 并返回值 6
```

知道 `sumNum(1, 3)` 返回 `int` 类型的从 1 到 3 的和，我们可以执行以下操作来存储然后打印该值：

调用此方法可以这样做：
```c#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WrlineLine(sum); // 打印 6
```

方法强大的原因之一是我们可以多次调用它们：
```C#
    int sum = 0;
    sum = sumNum(1