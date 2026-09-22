---
title: "Strings"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 7
---
任何用引号括起来的内容都称为字符串。这是计算机表示单词或句子的方式。例如，`"a"`、`"2"`、`"banana!"` 和 `"Hello World"` 是字符串，而 `Hello World` 和 `2` 不是字符串，因为缺少引号。你可以使用加号操作符（`+`）将多个字符串组合在一起。例如：

- `"Apple" + "Pineapple"` 生成字符串 `"ApplePineapple"`。
- `"Nuevo" + " " + "Foundation"` 生成字符串 `"Nuevo Foundation"`。

{{% notice tip %}}
## 一起练习

删除代码中所有 `System.out.println` 的文本。以 `System.out.println("Nuevo" + " " + "Foundation");` 开始你的代码。请注意，有许多不同的方法可以将字符串组合在一起。例如，另一种打印 Nuevo Foundation 的方法是编写 `System.out.println("Nue" + "vo Fou" + "ndation");`。我们将至少再想出一种方式，使用两次 `+` 符号在每个 `System.out.println` 语句中打印字符串 `"Nuevo Foundation"`。验证 Nuevo Foundation 被打印了三次。换句话说，当你按下运行后，控制台应显示如下内容：

        Nuevo Foundation
        Nuevo Foundation
        Nuevo Foundation
{{% /notice %}}