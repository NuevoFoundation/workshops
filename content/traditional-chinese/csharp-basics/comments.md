---
title: "Comments"
description: "Introduce comments in C#."
date: 2024-09-16T00:00:00Z
weight: 3
---

## 註解的使用

當我們在創建一個 C# 程式時，可以通過使用 `//` 增加單行註解或使用 `/*` 和 `*/` 增加多行註解來記下筆記（注意：先前活動中的指示是以註解的形式寫的）。

此外，添加註解不會影響程式的運行。所以，你可以在你的程式碼中隨處添加註解，以便為自己和其他程式設計師記錄程式的運作方式。

```c#
     // 範例單行註解

     /* 範例
      * 多行
      * 註解 */
```

## 試試註解

在下面的 .NET Fiddle 框架中，為你的程式添加一個單行註解和一個多行註解。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" frameborder="0"></iframe>

{{% notice tip %}}

你可以將程式碼註解掉，使電腦不會執行它。

```c#
Console.Write("I like to eat");
// Console.Write("apples.");
```

這樣將會在控制台輸出 "I like to eat" 而不會輸出 "apples"。
{{% /notice %}}