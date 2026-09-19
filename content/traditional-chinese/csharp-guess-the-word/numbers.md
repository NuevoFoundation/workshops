---
title: "Numbers"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 7
---

## 數字

電腦也可以完成學校裡看到的普通數學運算。使用 `Console.WriteLine` 來輸出數學表達式的結果。對於數字來說，不需要使用引號！

```csharp
Console.WriteLine(5 + 4);
Console.WriteLine(6 * (9 - 7) / 3);
```

![alt text height="600px" width="70%"](../media/numbers-intro.png "Printing numbers")

以下是您可以使用的數學運算符完整列表：

| 運算符 | 描述      | 運算符        | 描述                |
| ------ | --------- | ------------- | ------------------- |
| `+`    | 加法      | `\`           | 除法                | 
| `-`    | 減法      | `%`           | 取模（餘數）        |
| `*`    | 乘法      | `(`,`)`       | 括號                |

{{% notice info %}}

## 小知識：電腦的除法

電腦的除法方式不同於普通計算器。電腦除法會忽略餘數或小數部分。例如，`15 / 4` 得到的是 `3`，而不是 `3.75`。

{{% /notice %}}

{{% notice tip %}}

## 一起動手

嘗試將以下問題的答案打印到控制台。確保括號是匹配的。使用計算器（或心算）來檢查電腦是否產生了正確的答案。

- `2 - 19`
- `(3 + 5) * 6`
- `(13 + 5 * 8) / (6 - (3 + 7))`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Numbers - .NET Fiddle editor" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## 小知識：隨機數

以下是如何打印範圍在 `1`（包括）到 `10`（不包括）之間的隨機數的方法：

```csharp
Random random = new Random();
Console.WriteLine(random.Next(1, 10));
```

嘗試找找我們在 GuessTheWord 遊戲中哪裡用了 `Random`！然而，具體的工作原理比較複雜，所以我們將跳過這個討論。

{{% /notice %}}