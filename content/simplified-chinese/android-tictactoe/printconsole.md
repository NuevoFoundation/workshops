---
title: "打印到控制台"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 4
---
有时游戏或应用程序可能无法按预期工作，或者您想将某些内容写入控制台以用于日志记录目的。除了调试应用程序外，您还可以使用 `System.out.println()` 来写入您的消息。在 Android Studio 底部的“logcat”窗口中查看您的消息：
<img src="../resources/_gen/images/println.gif" height="60%" width="60%" title="System.out.println()" alt="Android Studio 中 logcat 窗口显示通过 System.out.printIn 日志功能创建的消息"/>

{{% notice tip %}}

## 一起动手

1. 在不删除双引号的情况下，将 `"Restarting the Tac-Tic-Toe Game!"` 更改为 `"Restarting the Tic-Tac-Toe Game!"` 或其他您喜欢的句子。按运行按钮，看看是否有任何变化。
2. 在当前行下面添加另一个 `System.out.println`，以在第一句话下面打印第二句话。
3. 按运行按钮，查看是否打印出两句话。如果您看到任何红色文字，请寻求帮助。

{{% /notice %}}

{{% notice warning %}}
## 救命！我看到很多红色文字！

如果您看到红色文字，则表明遇到了一些错误！请寻求帮助。在 Android 编码时要注意以下几点：

1. `out` 和 `println` 是以小写字母开头的。
2. `System` 是以大写字母开头的。
3. 确保要打印的句子用双引号括起来，且句子位于括号之间。
4. 不要删除任何花括号 `{` 或 `}`。

{{% /notice %}}

`System.out.println` 在您需要修复代码中的错误时非常有帮助，但使用此函数打印的文本用户（即使用应用程序的人）是看不到的。然而我们可以使用 Toast 来实现！Toast 是一种快速、小型的文本，可以让用户可见。以下是如何创建 Toast：
```kotlin
Toast.makeText(this, "我们想要显示的文本", Toast.LENGTH_SHORT).show()
```
<img src="../resources/_gen/images/toast_example.png" title="Toast 示例" alt="Toast 示例。您可以使用 toast.makeText 函数的参数上下文、消息字符串以及 Toast.LENGTH_LONG 或 Toast.LENGTH_SHORT 来显示欢迎消息，例如欢迎来到 Tic-Tac-Toe"/>
