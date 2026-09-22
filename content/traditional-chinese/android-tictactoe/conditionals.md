---
title: "條件判斷"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
我們可以使用 `if` 判斷式來執行某段程式碼，但只有在特定條件符合時才執行。

例如：

```kotlin
if (isRainingOutside == true) {
    takeUmbrella = true;
} else {
    takeUmbrella = false;
}
```

針對我們的遊戲，我們應該使用 `if` 判斷式來檢查玩家是否有3個直線、橫線或斜線的連續配對。

在 `if` 的括號 `()` 中，你應該指定一個 _布林表達式_。**布林值 (Booleans)** 是 `true` 或 `false` 的陳述。我們可以在 `if` 判斷式中使用它。如果表達式為 `true`，則執行 `{ }` 中的程式碼。如果表達式為 `false`，則執行 `else` 之後的 `{ }` 中的程式碼。

你也可以使用 `&&` (AND) 和 `||` (OR) 運算符連接 **布林表達式**。

看看 `MainActivity.kt` 中的 `CheckWinner()` 函數，試著思考所有連接的 `&&` 表達式正在執行什麼任務。