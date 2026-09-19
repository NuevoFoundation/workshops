```markdown
---
title: "数字"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 7
---

## 数字

计算机也可以执行你在学校学过的常规数学运算。使用 `Console.WriteLine` 打印数学表达式的结果。数字不需要加引号！

```csharp
Console.WriteLine(5 + 4);
Console.WriteLine(6 * (9 - 7) / 3);
```

![alt text height="600px" width="70%"](../media/numbers-intro.png "打印数字")

以下是可以使用的数学符号的完整列表：

| 运算符  | 描述       | 运算符         | 描述                |
| ------- | ---------- | -------------- | ------------------- |
| `+`     | 加法       | `\`            | 除法                |
| `-`     | 减法       | `%`            | 取模（余数）        |
| `*`     | 乘法       | `(`,`)`        | 括号                |

{{% notice info %}}

## 趣闻：计算机除法

计算机的除法处理方式不同于普通的计算器。计算机会排除余数或小数。例如，`15 / 4` 的结果是 `3`，而不是 `3.75`。

{{% /notice %}}

{{% notice tip %}}

## 一起练习

尝试将以下表达式的答案打印到控制台。确保括号正确匹配。可以使用计算器（或心算）验证计算机给出的答案是否正确。

- `2 - 19`
- `(3 + 5) * 6`
- `(13 + 5 * 8) / (6 - (3 + 7))`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Numbers - .NET Fiddle editor" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## 趣闻：随机数字

以下是如何打印介于 `1`（包含）和 `10`（不包含）之间的随机数字：

```csharp
Random random = new Random();
Console.WriteLine(random.Next(1, 10));
```

尝试查找在 "GuessTheWord" 游戏中我们在哪里使用了 `Random`！不过，其具体工作原理比较复杂，我们将跳过这些讨论。

{{% /notice %}}
```