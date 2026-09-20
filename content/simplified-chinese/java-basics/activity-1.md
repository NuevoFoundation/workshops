```markdown
---
title: "打印语句和注释"
description: "介绍Java中的println()方法和注释。"
date: 2021-10-13T00:00:00Z
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uYoq-4juYBY" title="Java打印语句和注释视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 让程序说话！

试着编写一个程序，通过输入代码行 `System.out.print("Hello World");` 来打印出 `Hello World`。

程序会打印出你在 `System.out.print` 的括号中输入的内容。而且，每行代码以 `;` 结束。

之后，添加更多语句，通过在括号中输入数字（例如 `System.out.print(2020)`）来打印数字，或者通过在两个单引号之间放置一个符号（例如 `System.out.print('@')`）来打印一个符号。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsHelloWorld" target="_blank">启动Replit</a>

{{% notice tip %}}
### 你注意到所有你输入的语句都打印在同一行了吗？

有时我们希望输入内容时进入新的一行。  
要实现这一点，可以输入稍微不同的代码 `System.out.println();`。

（注意：我们输入 `println` 而不是 `print` 来在打印后创建新的一行。）

返回上面尝试一下吧！让所有语句打印在不同的行上！
{{% /notice %}}

{{% notice tip %}}
### 如何在一行代码中打印多个符号？

我们学过打印符号时将符号包裹在两个单引号 `'` 中，但如何在一行中打印多个符号呢？

我们可以将符号包裹在两个双引号 `"` 中（例如：`System.out.print("@ , - h A #");`）。

{{% /notice %}}

{{% notice tip %}}
### !!重要!! 有时不能直接将字符放在" "之间

当在打印语句中将字符放在 `" "` 之间时，有时会让计算机无法判断要打印哪些字符。

例如，如何告诉计算机打印 `"`？

如果你输入 `System.out.print(""");`，你会得到一个错误！因为计算机无法判断文本在哪里结束！

由于这个原因，需要在某些字符前面加上 `\` 来进行<b>转义</b>。

     System.out.print("\"");  // 这将打印 "

在Java中需要转义的其他字符包括：`'`、`"`、`\`。
{{% /notice %}}

## 打印一只猫头鹰

来认识一下 🐥 Patrick 的第一个朋友，小猫头鹰 Minerva 🦉！

使用刚刚学到的内容，通过仅仅四行代码重新创建下面这只猫头鹰！（艺术来源：asciiart.eu/animals/birds-land）

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   嗨，我是Minerva。Patrick的朋友！   |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOwl" target="_blank">启动Replit</a>

{{% notice warning %}}
#### 我遇到错误了！

     Main.java:4: error: reached end of file while parsing
如果你收到类似上面的错误消息，可能是你忘记转义字符，例如 `"` 和 `\`。

回到上面的第三条提示，查看如何在打印语句中转义字符！
{{% /notice %}}

## 添加注释

在创建Java程序时，我们可以使用 `//` 添加单行注释，或者使用 `/*` 和 `*/` 添加多行注释。（注意：前面的活动中的指令是以注释的形式编写的。）

此外，添加注释不会影响程序的运行。所以你可以在代码中添加任何注释！

     // 单行注释示例
     /* 多行注释示例
      * 第一行
      * 第二行
      */
```