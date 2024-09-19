---
title: "Write to the Console"
description: "介紹 C# 的打印方法。"
date: 2024-09-16T00:00:00Z
weight: 2
---

## 你的第一個 C# 程式

我們的第一個練習是熟悉一個簡單 C# 應用程式的結構，該程式將輸出內容到控制台。

讓我們嘗試運行一個 C# 程式，將 `Hello World` 打印到控制台。代碼行 `Console.WriteLine ("Hello World");` 為我們完成了這一操作。它告訴電腦將括號內的內容顯示到螢幕上。

### 讓我們寫點代碼吧！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

在上面的 .NET Fiddle 框中，新增一行代碼在第一行下面打印 "Hello *你的名字*"。它應該看起來像這樣。

<img src="../images/Step1.png" height="300" alt="Fiddle 的起始畫面" />

你應該能在螢幕底部看到你的輸出。有趣吧？ 

讓我們嘗試打印其他東西。新增一些額外的代碼行來：
1. 輸出數字，將數字放在括號中（例如：`Console.WriteLine(42);`）。不需要雙引號。
2. 組合一些文字（例如：`Console.WriteLine("Hi " + "Sally");`）

{{% notice tip %}}
### 你注意到了嗎？你輸入的所有語句都打印在不同的行上。

有時候我們希望在同一行上寫。我們使用稍微不同的代碼 `Console.Write` 代替 `Console.WriteLine`。

新增兩行代碼：
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

並試試看。
{{% /notice %}}

{{% notice warning %}}
### !! 重要 !! 有時你不能只是簡單地在 " " 之間放入字符

在打印語句的 " " 之間放入字符時，有時容易讓電腦混淆應該打印哪些字符。

例如，我們如何告訴電腦打印 `"`？

如果你輸入 `Console.WriteLine(""");`，你會得到錯誤，因為電腦無法識別文本的結束位置！

因此，某些字符需要通過在前面加上一個 `\` 來<b>轉義</b>。

```csharp
Console.Writeline("\"");`  // 這會打印出 "
```
{{% /notice %}}
