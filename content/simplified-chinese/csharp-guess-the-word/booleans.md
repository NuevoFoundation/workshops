```markdown
---
title: "布尔值"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 8
---

## 布尔值

**布尔值**是`true`或`false`的语句。与字符串或数字不同，布尔值存储的是真实性陈述：我所说的是“真”还是“假”？例如，如果我问“你是机器人吗？”，这个问题会产生一个`true`或`false`的结果，我们称之为**布尔值**。在这种情况下，由于你不是一个机器人（希望如此！），我们会输出`false`。

我们还可以使用数学运算符来创建布尔表达式。以下是一些例子，不过请注意“等于”和“不等于”的符号有些特别：

| 运算符 | 描述               | 运算符 | 描述                   |
| ------ | ------------------ | ------ | ---------------------- |
| `<`    | 小于               | `>`    | 大于                   |
| `<=`   | 小于等于           | `>=`   | 大于等于               |
| `==`   | 等于               | `!=`   | 不等于                 |

像往常一样，使用`Console.WriteLine`来打印你的结果：

```csharp
Console.WriteLine(10 < 8);
Console.WriteLine((3 * 6) == (32 - 14));
```

![alt text height="600px" width="70%"](../media/booleans-intro.png "打印布尔值")

{{% notice tip %}}

## 一起练习

尝试猜测以下表达式的答案。使用`Console.WriteLine`检查你的答案。

- `54 < (10 + 32)`
- `(37 / 5) == 7`
- `"Hello" + "World" == "Hello World"`
- `false == false`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="布尔值 - .NET Fiddle 编辑器" frameborder="0"></iframe>

{{% /notice %}}
```