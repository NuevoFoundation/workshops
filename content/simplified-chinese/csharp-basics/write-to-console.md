```yaml
---
title: "输出到控制台"
description: "介绍 C# 中的打印方法。"
date: 2024-09-16T00:00:00Z
weight: 2
---
```

## 您的第一个 C# 程序

我们的第一个练习是熟悉一个简单 C# 应用程序的结构，该应用程序可以输出信息到控制台。

让我们尝试运行一个 C# 程序，将 `Hello World` 输出到控制台。代码行 `Console.WriteLine("Hello World");` 可以实现这个功能。它告诉计算机将 `()` 中的内容输出到屏幕上。

### 来写些代码吧！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

在上面的 .NET Fiddle 窗口中，在第一行代码下面添加新的一行代码，打印 "Hello *你的名字*"。它应该看起来像这样：

<img src="../images/Step1.png" height="300" alt="小练习的起始界面" />

你应该在屏幕下方看到你的输出结果。很酷吧？  

接下来尝试打印其他内容。添加一些额外的代码行来：
1. 打印数字，可以将数字放入括号中（例如：`Console.WriteLine(42);`）。不需要使用双引号。
2. 将一些文字拼接到一起（例如：`Console.WriteLine("Hi " + "Sally");`）。

{{% notice tip %}}
### 你注意到所有你输入的语句都打印在了不同的行上吗？

有时我们希望将内容打印在同一行上，这时我们需要用稍微不同的代码 `Console.Write` 来代替 `Console.WriteLine`。

添加两行代码：
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

然后运行试试看吧。
{{% /notice %}}

{{% notice warning %}}
### !! 重要 !! 有时候你不能直接把字符放在 " " 中

在打印语句中将字符放入 `" "` 之间时，有时可能会让计算机混淆打印哪些字符。

例如，我们如何告诉计算机打印 `"` 呢？

如果你输入 `Console.WriteLine(""");`，将会出现错误，因为计算机无法识别文本的起止位置！

在这种情况下，某些字符需要使用 `<b>转义</b>`，通过在其前面添加一个 `\` 来实现。

```csharp
Console.Writeline("\"");  // 这将打印出 "
```
{{% /notice %}}
```