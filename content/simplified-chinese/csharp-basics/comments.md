---
title: "Comments"
description: "Introduce comments in C#."
date: 2024-09-16T00:00:00Z
weight: 3
---

## 注释

在创建 C# 程序时，我们可以通过使用 `//` 添加单行注释，或使用 `/*` 和 `*/` 添加多行注释（注意：之前活动中的说明是以注释形式写的）。

另外，添加注释不会影响程序。因此，您可以在代码中添加注释，以记录程序的工作原理，方便自己和其他程序员理解。

```c#
     // 示例单行注释

     /* 示例
      * 多行
      * 注释 */
```

## 试试注释

在下面的 .NET Fiddle 框架中，给程序添加一行单行注释和一段多行注释。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" frameborder="0"></iframe>

{{% notice tip %}}

您可以注释代码，这样计算机就不会运行它。

```c#
Console.Write("I like to eat");
// Console.Write("apples.");
```

将会在控制台输出 "I like to eat"，但不会输出 "apples"。
{{% /notice %}}