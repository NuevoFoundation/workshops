---
title: "布林值"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 8
---

## 布林值 (Booleans)

**布林值** 是 `true` 或 `false` 的陳述句。與字串或數字不同，布林值儲存的是真實性的陳述：我所說的是對還是錯？例如，如果我問「你是一個機器人嗎？」這個問題會產生一個 `true` 或 `false` 的結果，這就是我們所稱的 **布林值**。在這種情況下，因為你不是機器人（希望不是吧！），我們的答案應該是 `false`。

我們也可以使用數學運算符號來建立布林表達式。以下是一些範例，但請注意「等於」與「不等於」的符號跟我們習慣的不同：

| 運算符 | 描述                   | 運算符 | 描述                       |
| ------ | ---------------------- | ------ | -------------------------- |
| `<`    | 小於                   | `>`    | 大於                       |
| `<=`   | 小於或等於             | `>=`   | 大於或等於                 |
| `==`   | 等於                   | `!=`   | 不等於                     |

像往常一樣，使用 `Console.WriteLine` 來輸出你的結果：

```csharp
Console.WriteLine(10 < 8);
Console.WriteLine((3 * 6) == (32 - 14));
```

![alt text height="600px" width="70%"](../media/booleans-intro.png "Printing booleans")

{{% notice tip %}}

## 一起練習

試著猜猜以下表達式的答案。使用 `Console.WriteLine` 來驗證你的答案。

- `54 < (10 + 32)`
- `(37 / 5) == 7`
- `"Hello" + "World" == "Hello World"`
- `false == false`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Booleans - .NET Fiddle editor" frameborder="0"></iframe>

{{% /notice %}}