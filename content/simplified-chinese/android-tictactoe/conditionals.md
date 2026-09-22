---
title: "条件语句"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
我们可以使用 `if` 条件语句，仅在满足某些条件时才运行代码语句。

例如：

```kotlin
if (isRainingOutside == true) {
    takeUmbrella = true;
} else {
    takeUmbrella = false;
}
```

在我们的游戏中，我们应该使用 `if` 条件语句来判断玩家是否有3个垂直、水平或对角线上的匹配。

在 `if` 旁边的 `()` 中，你需要指定一个_布尔表达式_。**布尔值**是 `true` 或 `false` 的语句。我们可以在 `if` 条件语句中利用这一点。如果表达式为 `true`，则执行 `{ }` 内的代码。如果表达式为 `false`，则执行 `else` 语句后 `{ }` 内的代码。

你还可以使用 `&&`（与）和 `||`（或）操作符将多个**布尔表达式**连接在一起。

看看 `MainActivity.kt` 文件中的 `CheckWinner()` 函数，并思考这些连接了 `&&` 的语句在做什么。