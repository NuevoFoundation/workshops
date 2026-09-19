---
title: "从控制台读取输入"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 12
---

## 从控制台读取输入

现在我们已经了解了关于变量的基本知识，接下来我们可以接受用户的输入。使用以下代码行，让控制台等待用户在控制台中输入内容。然后计算机将接收到的输入存储到名为 `input` 的变量中。

```csharp
var input = Console.ReadLine();
```

以下是一个使用 `Console.ReadLine` 接受用户输入的示例：

```csharp
Console.WriteLine("请输入内容:");
var input = Console.ReadLine();
Console.WriteLine("你输入了: " + input);
```

当用户按下 **运行** 时，用户将看到以下程序行为：

![alt text height="600px" width="70%"](../media/reading-input-1.png "读取输入前的控制台")

在这个例子中，当用户在控制台中输入 `Hello World!` 后，程序将完成输出：

![alt text height="600px" width="70%"](../media/reading-input-2.png "读取输入后的控制台")

{{% notice tip %}}

## 协同工作

编写一个程序，首先向控制台打印以下两行内容：

```
欢迎！
今天我能为您做些什么？
```

接着，控制台等待用户输入。当用户输入内容并按下回车后，计算机会输出以下内容：

```
您提出的问题是: [input]?
我不知道答案！再见！
```

`[input]` 应替换为用户在控制台中输入的内容。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="从控制台读取输入 - .NET Fiddle 编辑器" frameborder="0"></iframe>

{{% /notice %}}