---
title: "Comments"
description: "Introduce comments in C#."
date: 2024-09-16T00:00:00Z
weight: 3
---

## 添加註解

在創建 C# 程式時，我們可以使用 `//` 添加單行註解，或使用 `/*` 和 `*/` 添加多行註解（注意：之前活動中的指示是以註解形式撰寫的）。

此外，添加註解不會對程式有任何影響。因此，你可以在程式碼中添加註解，以便自己和其他程式員了解其工作原理。

```c#
     // 範例單行註解

     /* 範例
      * 多行
      * 註解 */
```

## 玩轉註解

在下面的 .NET Fiddle 框架中，為你的程式添加一個單行註解和一個多行註解。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" frameborder="0"></iframe>

{{% notice tip %}}

你可以註解你的程式碼，使計算機不會執行它。

```c#
Console.Write("I like to eat");
// Console.Write("apples.");
```

將在控制台上顯示 "I like to eat"，但不會顯示 "apples"。
{{% /notice %}}

