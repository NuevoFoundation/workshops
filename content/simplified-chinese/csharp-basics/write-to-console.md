---
title: "Write to the Console"
description: "介绍 C# 中的打印方法。"
date: 2024-09-16T00:00:00Z
weight: 2
---

## 你的第一个 C# 程序

我们的第一个练习是熟悉简单 C# 应用程序的结构，该程序可在控制台输出内容。

让我们运行一个 C# 程序，将 `Hello World` 打印到控制台上。代码行 `Console.WriteLine ("Hello World");` 为我们完成了这项工作。它告诉计算机将 () 中的内容写到屏幕上。

### 让我们写些代码！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

在上面的 .NET Fiddle 框中，添加一行代码在第一行下面打印 "Hello *你的名字*"。看起来应该像这样。

<img src="../images/Step1.png" height="300" alt="fiddle 的起始屏幕" />

你应该能在屏幕底部看到输出。很酷吧？

让我们尝试打印其他内容。添加一些代码行以：
1. 通过将数字放在括号中来打印数字（例如 `Console.WriteLine(42);`）。不需要双引号。
2. 将一些文本拼接在一起（例如 `Console.WriteLine("Hi " + "Sally");`）

{{% notice tip %}}
### 你注意到你输入的所有语句都打印在不同的行上了吗？

有时我们希望在同一行上输出。我们使用略微不同的代码 `Console.Write` 而不是 `Console.WriteLine`。

添加两行代码：
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

试试看。
{{% /notice %}}

{{% notice warning %}}
### !! 重要 !! 有时你不能直接将字符放在 " " 中

在打印语句中将字符放在 `" "` 中时，有时容易让计算机混淆要打印哪些字符。

例如，我们如何告诉计算机打印 `"`？

如果你输入 `Console.WriteLine(""");`，会出现错误，因为计算机无法识别文本结束的位置！

相反，某些字符需要通过在前面加一个 `\` 来<b>转义</b>。

```csharp
Console.Writeline("\"");  // 这会打印出 "
```
{{% /notice %}}