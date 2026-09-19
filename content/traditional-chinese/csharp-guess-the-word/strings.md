---
title: "Strings"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 5
---

## 字串

任何被雙引號包圍的內容都被稱為字串。這是電腦用來表示文字或句子的方式。例如，`"a"`、`"2"`、`"banana!"` 和 `"Hello World"` 都是字串，但 `Hello World` 和 `2` 則不是字串，因為缺少了引號。

你可以使用 `+` 運算符將多個字串結合起來。例如：

- `"Apple" + "Pineapple"` 會生成字串 `"ApplePineapple"`。
- `"Nuevo" + " " + "Foundation"` 會生成字串 `"Nuevo Foundation"`。

```csharp
Console.WriteLine("Apple" + "Pineapple");
Console.WriteLine("Nuevo" + " " + "Foundation");
```

![alt text height="600px" width="70%"](../media/strings-intro.png "使用 + 來結合字串")

{{% notice tip %}}

## 一起合作

在下面的 Replit 程式中，我們以 `Console.WriteLine("Nuevo" + " " + "Foundation");` 開始了程式碼。

請注意，有許多方法可以將字串結合在一起。例如，另一種列印 Nuevo Foundation 的方法是寫 `Console.WriteLine("Nue" + "vo Fou" + "ndation");`。

我們將至少再想出一種方法，使用每個 `Console.WriteLine` 陳述句中的兩個 `+` 符號來列印字串 `"Nuevo Foundation"`。驗證 Nuevo Foundation 被列印出 3 次。換句話說，當你按下 **執行** 後，你的控制台應該看起來像這樣：

```
Nuevo Foundation
Nuevo Foundation
Nuevo Foundation
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/itRFnP" title="Strings - .NET Fiddle editor" frameborder="0"></iframe>

{{% /notice %}}