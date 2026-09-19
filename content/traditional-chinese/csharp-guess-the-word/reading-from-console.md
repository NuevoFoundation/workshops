```markdown
---
title: "從控制台讀取資料"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 12
---

## 從控制台讀取資料

現在我們已經了解了變數的基礎，接下來可以學習如何從使用者接受輸入。使用以下程式碼行，可以指示控制台等待，直到使用者在控制台中輸入某些內容。然後，電腦會將輸入的內容儲存到名為 `input` 的變數中。

```csharp
var input = Console.ReadLine();
```

以下是一個使用 `Console.ReadLine` 接受使用者輸入的範例：

```csharp
Console.WriteLine("請輸入內容:");
var input = Console.ReadLine();
Console.WriteLine("您輸入的是: " + input);
```

當使用者按下 **run**，會看到如下畫面：

![alt text height="600px" width="70%"](../media/reading-input-1.png "輸入資料前的顯示畫面")

此例中，當使用者於控制台中輸入 `Hello World!`，程式會完整輸出以下內容至控制台：

![alt text height="600px" width="70%"](../media/reading-input-2.png "輸入資料後的顯示畫面")

{{% notice tip %}}

## 一起來試試看

撰寫一個程式，讓它先在控制台上印出以下兩行文字：

```
Welcome!
How can I help you today?
```

接著，控制台需要等待使用者的輸入。在使用者輸入內容並按下 Enter 後，電腦應該輸出以下內容：

```
You asked: [input]?
I don't know the answer to that! Goodbye!
```

其中 `[input]` 應該替換為使用者在控制台中輸入的內容。

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="從控制台讀取資料 - .NET Fiddle 編輯器" frameborder="0"></iframe>

{{% /notice %}}
```