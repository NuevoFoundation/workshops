```markdown
---
title: "布林運算子"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 9
---

## 布林運算子

你也可以使用 `&&` (AND) 和 `||` (OR) 運算子將布林表達式連接在一起。例如，假設我問：「你是人類，而 Nuvi 是機器人嗎？」其中的「而且 (and)」連接了兩個是非題。在這種情況下，因為你確實是人類，且 Nuvi 確實是機器人，因此整體結果為 `true`。

以下是一個描述將布林值連接在一起時會發生什麼的表格：

| 表達式           | 結果    | 表達式                                | 結果    |
| ---------------- | ------- | ------------------------------------- | ------- |
| `true && true`   | `true`  | <code>true &#124;&#124; true</code>   | `true`  |
| `true && false`  | `false` | <code>true &#124;&#124; false</code>  | `true`  |
| `false && true`  | `false` | <code>false &#124;&#124; true</code>  | `true`  |
| `false && false` | `false` | <code>false &#124;&#124; false</code> | `false` |

總結來說，`&&` 需要兩個布林表達式都為真，而 `||` 只需要其中一個布林表達式為 `true` 即可。以下是一些例子：

- `(5 < 8) && (9 != 10)` 結果為 `true`，因為 `5` 小於 `8` 且 `9` 不等於 `10`。
- `(8 <= 2) || ("h" + "e" == "he")` 結果為 `true`，因為 `"h" + "e"` 結果為 `"he"`，即使 `8` 不小於或等於 `2`。
- `(6 != 2 * 3) || (8 < 2 * 4)` 結果為 `false`，因為 `6` 不等於 `2 * 3` 和 `8` 不小於 `2 * 4` 的結果都是 `false`。

![alt text height="600px" width="70%"](../media/booleans-advanced.png "結合布林值的圖解")

{{% notice tip %}}

## 一起練習

試著猜猜以下表達式的答案。使用 `Console.WriteLine` 將答案列印出來。

- `(9 < 10) && (12 => 11)`
- `(15 - 2 == 11) || (4 % 3 != 2)`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="布林運算子 - .NET Fiddle 編輯器" frameborder="0"></iframe>

{{% /notice %}}
```