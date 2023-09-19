---
title: "字符串"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

任何用引号括起来的内容都被称为 `字符串(str)`。这是计算机表示单词或句子的方式。例如，"a"、"2"、"banana!" 和 "Hello World" 都是字符串，但2和Hello World不是字符串，因为缺少引号。您可以使用 `+` 符号将许多字符串组合在一起！

{{% notice tip %}}
你组合的字符串不必是真正的单词！例如，`"Ap" + "ple"` 将生成字符串 `"Apple"`。
<b>如果遇到困难，请寻求帮助！</b>

{{% /notice %}}

例如，

- `"Apple" + "Pineapple"` 生成字符串 `"ApplePineapple"`

- `"Nuevo" + " " + "Foundation"` 生成 `"Nuevo Foundation"`


#### 小挑战一

如果你将名字和姓氏组合在一起会发生什么？如何做到这一点？

#### 小挑战二

删除你代码中的所有 `print` 语句。从一行 `print("Nuevo" + " " + "Foundation")`开始你的代码。

如果运行它，会得到以下输出：

    Nuevo Foundation

让我们尝试找出在每个 `print` 语句中使用两个加号（`+`）符号打印字符串 `"Nuevo Foundation"` 的另外两种方法。一旦使其工作，您应该已经打印了字符串 `"Nuevo Foundation"` 3 次。换句话说，在按运行后，控制台应如下所示：

    Nuevo Foundation
    Nuevo Foundation
    Nuevo Foundation

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>