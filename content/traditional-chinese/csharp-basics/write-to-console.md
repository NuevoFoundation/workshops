---
title: "Write to the Console"
description: "Introduce print methods in C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## 您的第一個 C# 程式

我們的第一個練習是熟悉一個簡單 C# 應用程式的結構，這個程式會將訊息寫到控制台。

讓我們嘗試運行一個 C# 程式，在控制台上打印 `Hello World`。代碼行 `Console.WriteLine ("Hello World");` 為我們做到這一點。它告訴電腦將括號內的內容寫到螢幕上。

### 讓我們寫些代碼！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

在上面的 .NET Fiddle 框中，新增一行代碼在第一行下面打印 "Hello *您的名字*"。它應該看起來像這樣。

<img src="../images/Step1.png" height="300" alt="fiddle 的起始畫面" />

您應該可以在屏幕底部看到您的輸出。不錯吧？  

讓我們嘗試打印其他內容。新增一些額外的代碼行：
1. 通過將數字放在括號中來打印數字（例如 `Console.WriteLine(42);`）。不需要雙引號。
2. 將一些文本放在一起（例如 `Console.WriteLine("Hi " + "Sally");`）

{{% notice tip %}}
### 您注意到您輸入的所有語句都打印在不同的行上嗎？

有時我們想在同一行寫內容。我們使用稍微不同的代碼 `Console.Write` 而不是 `Console.WriteLine`。

新增兩行代碼：
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

然後試試看。
{{% /notice %}}

{{% notice warning %}}
### !! 重要 !! 有時您不能僅僅在雙引號中放置字元

在打印語句中將字元放在 `" "` 中時，有時很容易讓電腦混淆要打印的字元。

例如，我們如何告訴電腦打印 `"`？

如果您輸入 `Console.WriteLine(""");`，您會得到一個錯誤，因為電腦無法識別文本的結束位置！

相反，某些字符需要通過在其前面添加 `\` 來<b>轉義</b>。

```csharp
Console.Writeline("\"");`  // 這會打印出 "
```
{{% /notice %}}