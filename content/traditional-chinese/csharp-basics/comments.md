---
title: "註解"
description: "介紹 C# 中的註解。"
date: 2024-09-16T00:00:00Z
weight: 3
---

## 添加註解

在建立 C# 程式時，我們可以使用 `//` 添加單行註解，或使用 `/*` 和 `*/` 添加多行註解（注意：前面活動中的指示均以註解形式提供）。

此外，添加註解對程式的功能不會產生任何影響。因此，您可以在程式碼中添加註解，以記錄它如何運作，便於自己和其他開發者了解。

```c#
     // 範例：單行註解

     /* 範例：
      * 多行
      * 註解 */
```

## 練習使用註解

在下方的 .NET Fiddle 框架內，為您的程式添加一個單行註解和一個多行註解。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" title="互動式 C# 註解練習" frameborder="0"></iframe>

{{% notice tip %}}

您可以註解掉程式碼，這樣電腦就不會執行它。

```c#
Console.Write("I like to eat");
// Console.Write("apples.");
```

此程式碼將在主控台輸出 "I like to eat"，但不會輸出 "apples"。
{{% /notice %}}