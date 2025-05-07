---
title: "Write to the Console"
description: "Introduce print methods in C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## 您的第一个C#程序

我们的第一个练习是熟悉一个简单的C#应用程序结构，该程序可以在控制台上输出内容。

让我们尝试运行一个C#程序，在控制台打印 `Hello World`。代码行 `Console.WriteLine ("Hello World");` 为我们完成了这项工作。它告诉计算机在 () 之间的内容要写到屏幕上。

### 让我们写些代码吧！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

在上面的 .NET Fiddle 框中，在第一行代码下面添加新的一行以打印 "Hello *你的名字*"。它应该看起来像这样。

<img src="../images/Step1.png" height="300" alt="The starting screen of a fiddle" />

你应该在屏幕底部看到你的输出。很酷吧？

让我们尝试打印其他东西。添加一些额外的代码行来：
1. 通过在括号中放置数字来打印数字（即 `Console.WriteLine(42);`）。不需要双引号。
2. 把一些文本放在一起（即 `Console.WriteLine("Hi " + "Sally");`）

{{% notice tip %}}
### 你注意到你输入的所有语句都打印在不同的行上了吗？

有时我们想在同一行上书写。我们使用稍微不同的代码 `Console.Write` 而不是 `Console.WriteLine`。

添加两行代码：
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

然后试一下。
{{% /notice %}}

{{% notice warning %}}
### !! 重要 !! 有时你不能简单地把字符放在 " " 之间

在打印语句中把字符放在 `" "` 之间时，有时很容易让计算机混淆应该打印哪些字符。

例如，我们如何告诉计算机打印 `"`？

如果你输入 `Console.WriteLine(""");`，你将会得到一个错误，因为计算机无法识别文本的结尾！

相反，某些字符需要通过在前面添加 `\` 来<b>转义</b>。

```csharp
Console.WriteLine("\"");`  // 这会打印出 "
```
{{% /notice %}}