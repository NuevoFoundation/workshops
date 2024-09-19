---
title: "评论"
description: "介绍C#中的评论。"
date: 2024-09-16T00:00:00Z
weight: 3
---

## 添加评论

在创建C#程序时，我们可以通过使用`//`添加单行注释或使用`/*`和`*/`添加多行注释来做一些记录（注意：之前活动中的指示是以注释形式编写的）。

另外，添加注释不会对程序产生任何影响。因此，您可以在代码中添加注释，记录其工作原理，供自己和其他开发者参考。

```c#
     // 示例单行注释

     /* 示例
      * 多行
      * 注释 */
```

## 试用评论

在下面的.NET Fiddle框架中，添加一个单行注释和一个多行注释到您的程序中。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" frameborder="0"></iframe>

{{% notice tip %}}

您可以注释掉代码，这样计算机就不会运行它。

```c#
Console.Write("I like to eat");
// Console.Write("apples.");
```

这将会在控制台上写入 "I like to eat" 而不会写入 "apples"。
{{% /notice %}}