---
title: "布尔运算符"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 9
---

## 布尔运算符

你可以使用 `&&`（AND）和 `||`（OR）运算符将布尔表达式连接在一起。例如，假设我问：“你是人类吗，Nuvi是机器人吗？”其中单词“and”将两个真假问题连接在一起。在这种情况下，既然你是人类是真的，Nuvi是机器人也是真的，那么综合结果为`true`。

以下是一个描述连接布尔值时会发生什么的表格：

| 表达式           | 结果    | 表达式                                 | 结果    |
| ---------------- | ------- | ------------------------------------- | ------- |
| `true && true`   | `true`  | <code>true &#124;&#124; true</code>   | `true`  |
| `true && false`  | `false` | <code>true &#124;&#124; false</code>  | `true`  |
| `false && true`  | `false` | <code>false &#124;&#124; true</code>  | `true`  |
| `false && false` | `false` | <code>false &#124;&#124; false</code> | `false` |

总结来说，`&&`需要两个布尔表达式都为`true`，而`||`只需要其中一个布尔表达式为`true`。以下是更多示例：

- `(5 < 8) && (9 != 10)` 结果为`true`，因为`5`小于`8`和`9`不等于`10`都为真。
- `(8 <= 2) || ("h" + "e" == "he")`结果为`true`，因为`"h" + "e"`的结果是`"he"`，尽管`8`不小于或等于`2`。
- `(6 != 2 * 3) || (8 < 2 * 4)`结果为`false`，因为`6`不等于`2 * 3`和`8`不小于`2 * 4`都为假。

![alt text height="600px" width="70%"](../media/booleans-advanced.png "组合布尔值")

{{% notice tip %}}

## 一起练习

试着猜测以下表达式的答案。使用`Console.WriteLine`打印出结果。

- `(9 < 10) && (12 => 11)`
- `(15 - 2 == 11) || (4 % 3 != 2)`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="布尔运算符 - .NET Fiddle 编辑器" frameborder="0"></iframe>

{{% /notice %}}