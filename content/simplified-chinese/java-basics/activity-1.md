---
title: "打印语句和注释"
description: "介绍 Java 中的 println() 方法和注释。"
date: 2021-10-13T00:00:00Z
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uYoq-4juYBY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 让程序说话！

让我们尝试编写一个程序，通过输入代码行 `System.out.print("Hello World");` 输出 `Hello World`。

程序会打印 `System.out.print` 的括号内内容。每行代码以 `;` 结尾。

接下来，通过将数字放在括号中（如：`System.out.print(2020)`），或者将一个符号放在两个单引号中（如：`System.out.print('@')`）来添加更多打印语句。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsHelloWorld" target="_blank">启动 Replit</a>

{{% notice tip %}}
### 你是否注意到所有你输入的语句都在同一行打印出来了？

有时我们希望在输入时换行。
要实现这一点，我们需要输入稍微不同的代码 `System.out.println();`

（注意：我们输入 `println` 而不是 `print` 以在之后换行）

回到上方试试吧！让所有语句打印在不同的行上！
{{% /notice %}}

{{% notice tip %}}
### 如何在一行代码中打印多个符号？

我们学过，打印符号时需要将它们用单引号 `'` 包起来，但是如果要在一行中打印多个符号怎么办？

我们只需将它们用双引号 `"` 包起来即可（如：`System.out.print("@ , - h A #");`）。

{{% /notice %}}

{{% notice tip %}}
### !! 重要 !! 有时你不能简单地将字符放在 " " 中

当在打印语句中将字符放在 `" "` 中时，有时很容易让计算机搞不清要打印哪些字符。

例如，如何告诉计算机打印 `"`？

如果你输入 `System.out.print(""");`，你会遇到错误！因为计算机无法判断文本的结束位置！

取而代之的是，某些字符需要通过在其前面加一个 `\` 来进行<b>转义</b>。

     System.out.print("\"");  // 这会输出 "

在 Java 中需要被转义的其他字符包括：`'`, `"`, `\`。
{{% /notice %}}

## 打印一只猫头鹰

让我们来认识 🐥 Patrick 的第一个朋友，猫头鹰 Minerva 🦉！

使用你刚学到的知识，用仅仅 4 行代码重现以下的猫头鹰！（艺术图鸣谢：asciiart.eu/animals/birds-land）

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Hi, I am Minerva. Patrick's friend!  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOwl" target="_blank">启动 Replit</a>

{{% notice warning %}}
#### 我遇到了一个错误！

     Main.java:4: error: reached end of file while parsing
如果你遇到上述这样的错误，很可能是你忘记转义字符比如 `"` 和 `\`。

回看上方的第三个提示，学习如何在打印语句中转义字符！
{{% /notice %}}

## 添加注释

在创建 Java 程序时，我们可以使用 `//` 添加单行注释，或者使用 `/*` 和 `*/` 添加多行注释（注意：之前活动中的指导内容是作为注释写的）。

此外，添加注释不会对程序产生任何影响。因此，你可以在代码中随处添加任何注释！

     // 示例单行注释
     /* 示例
      * 多行
      * 注释 */