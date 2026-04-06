---
title: "Write to the Console"
description: "介紹在 C# 中的列印方法。"
date: 2024-09-16T00:00:00Z
weight: 2
---

## 您的第一個 C# 程式

我們的第一個練習是熟悉一個簡單 C# 應用程式的結構，讓它能夠寫入到主控台。

讓我們嘗試運行一個 C# 程式，將 `Hello World` 列印到主控台上。這行程式碼 `Console.WriteLine ("Hello World");` 為我們完成了這個工作。它指示電腦將括號中的內容寫到螢幕上。

### 讓我們來寫一些程式碼！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

在上面的 .NET Fiddle 框架中，在第一行代碼的下方新增一行程式碼，列印出 "Hello *您的名字*"。它應該類似於以下所示。

<img src="../images/Step1.png" height="300" alt="Fiddle 的起始畫面" />

您應該可以在螢幕底部看到輸出。有趣吧？

讓我們嘗試列印其他內容。新增一些額外的程式碼來：
1. 列印數字。只需將數字放在括號中（例如 `Console.WriteLine(42);`）。不需要使用雙引號。
2. 將文本結合在一起（例如 `Console.WriteLine("Hi " + "Sally");`）。

{{% notice tip %}}
### 您是否注意到您輸入的所有語句都列印在不同的行上？

有時候我們希望將內容寫在同一行。此時可以使用稍微不同的程式碼：`Console.Write` 而不是 `Console.WriteLine`。

新增下面的兩行程式碼：
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

並試一試。
{{% /notice %}}

{{% notice warning %}}
### !! 重要 !! 有時候，您不能直接在 " " 中放入字符

當在列印語句中將字符放入 `" "` 中時，有時可能會容易讓電腦混淆到底該列印哪些字符。

例如，我們如何告訴電腦列印 `"` 呢？

如果您輸入 `Console.WriteLine(""");`，您將會遇到錯誤，因為電腦無法分辨文字的結束位置！

相反，某些字符需要透過在其前面加上一個 `\` 來進行<b>跳脫</b>。

```csharp
Console.Writeline("\"");  // 這會列印出 "
```
{{% /notice %}}