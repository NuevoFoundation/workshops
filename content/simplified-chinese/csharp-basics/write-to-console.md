```markdown
---
title: "输出到控制台"
description: "介绍 C# 中的打印方法。"
date: 2024-09-16T00:00:00Z
weight: 2
---

## 您的第一个 C# 程序

我们的第一个练习是熟悉一个简单 C# 应用程序的结构，该程序可以输出到控制台。

让我们尝试运行一个 C# 程序，将 `Hello World` 输出到控制台。这行代码 `Console.WriteLine ("Hello World");` 可以帮助我们实现。它指示计算机将括号内的内容输出到屏幕上。

### 让我们写点代码！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

在上面的 .NET Fiddle 框中，在第一行代码的下面添加一个新的代码行，打印 "Hello *你的名字*"。它看起来应该像这样。

<img src="../images/Step1.png" height="300" alt="Fiddle 的起始界面" />

您应该在屏幕底部看到您的输出。酷吧？  

让我们尝试打印其他内容。添加一些额外的代码行来：
1. 打印数字，将数字放在括号中（例如：`Console.WriteLine(42);`）。不需要双引号。
2. 合并一些文本（例如：`Console.WriteLine("Hi " + "Sally");`）

{{% notice tip %}}
### 您是否注意到您输入的所有语句都打印在不同的行上？

有时我们希望在同一行上打印内容。这时，我们使用稍微不同的代码：用 `Console.Write` 来代替 `Console.WriteLine`。

添加两行代码：
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

并试试看。
{{% /notice %}}

{{% notice warning %}}
### !! 重要提示 !! 有时您不能直接在 "" 中放置字符

在打印语句的 `" "` 中放置字符时，有时会让计算机对需要打印的字符感到困惑。

例如，如何让计算机打印出 `"`？

如果您输入 `Console.WriteLine(""");`，您会收到一个错误，因为计算机无法识别文本的结束位置！

相反，某些字符需要通过添加一个 `\` 来进行<b>转义</b>。

```csharp
Console.WriteLine("\"");  // 这将打印出 "
```
{{% /notice %}}
```