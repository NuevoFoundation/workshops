---
title: "寫入控制台"
description: "介紹 C# 的列印方法。"
date: 2024-09-16T00:00:00Z
weight: 2
---

## 您的第一個 C# 程式

我們的第一個練習是熟悉一個簡單的 C# 應用程式的結構，該應用程式將資料輸出到控制台。

讓我們嘗試執行一個 C# 程式，它會將 `Hello World` 列印到控制台。代碼行 `Console.WriteLine ("Hello World");` 會為我們完成這個動作。它告訴電腦將在 `()` 中的任何內容寫到螢幕上。

### 讓我們開始撰寫些代碼吧！

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

在上面的 .NET Fiddle 框中，請在第一行代碼的下方新增一行代碼，列印出 "Hello *你的名字*"。它應該看起來像這樣：

<img src="../images/Step1.png" height="300" alt="程式起始介面" />

您應該可以在螢幕底部看到您的輸出。很酷吧？

現在嘗試列印其他內容。新增一些額外的代碼行來：
1. 使用括號中的數字列印數字（例如 `Console.WriteLine(42);`）。注意，不需要雙引號。
2. 將一些文字組合在一起（例如 `Console.WriteLine("Hi " + "Sally");`）。

{{% notice tip %}}
### 您是否注意到您輸入的所有語句都列印在不同的行上？

有時我們希望文字列印在同一行上。此時，我們會使用稍微不同的代碼 `Console.Write` 而不是 `Console.WriteLine`。

新增以下兩行代碼：
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

然後試試看。
{{% /notice %}}

{{% notice warning %}}
### !! 重要 !! 有時您無法僅在 `"` 中放入字符

在列印語句的 `" "` 中放入字符時，有時很容易讓電腦混淆，不知道該列印哪些字符。

例如，我們如何告訴電腦列印 `"` 呢？

如果您輸入 `Console.WriteLine(""");`，您會得到錯誤，因為電腦無法辨識文字的結尾位置！

相反，某些字符需要透過在前面添加一個 `\` 來進行<b>轉義</b>。

```csharp
Console.Writeline("\"");  // 這會列印出 "
```
{{% /notice %}}