---
title: "字符串"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 5
---

## 字符串

任何被引号包围的内容都称为字符串。这是计算机表示单词或句子的一种方式。例如，`"a"`，`"2"`，`"banana!"` 和 `"Hello World"` 是字符串，但 `Hello World` 和 `2` 不是字符串，因为缺少引号。

你可以使用 `+` 运算符将多个字符串组合在一起。例如：

- `"Apple" + "Pineapple"` 生成字符串 `"ApplePineapple"`。
- `"Nuevo" + " " + "Foundation"` 生成字符串 `"Nuevo Foundation"`。

```csharp
Console.WriteLine("Apple" + "Pineapple");
Console.WriteLine("Nuevo" + " " + "Foundation");
```

![alt text height="600px" width="70%"](../media/strings-intro.png "用 + 合并字符串")

{{% notice tip %}}

## 一起合作

在下面的 Replit 程序中，我们用以下代码开始：`Console.WriteLine("Nuevo" + " " + "Foundation");`。

注意，组合字符串的方法有很多种。例如，打印 Nuevo Foundation 的另一种方式是写作 `Console.WriteLine("Nue" + "vo Fou" + "ndation");`。

我们将一起集思广益，至少找到一种使用两个 `+` 符号在每条 `Console.WriteLine` 语句中打印字符串 `"Nuevo Foundation"` 的方法。确保 Nuevo Foundation 被打印 3 次。换句话说，当你按下 **运行** 后，你的控制台应该看起来像这样：

```
Nuevo Foundation
Nuevo Foundation
Nuevo Foundation
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/itRFnP" title="字符串 - .NET Fiddle 编辑器" frameborder="0"></iframe>

{{% /notice %}}