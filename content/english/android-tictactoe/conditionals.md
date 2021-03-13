---
title: "Conditionals"
date: 2020-07-27T14:17:07.42-07:00
draft: false
hidden: false
weight: 11
---
We can use if statements to run a code statement only if certain conditions are met.

For example:

```kotlin
if (isRainingOutside == true) {
    takeUmbrella = true;
} else {
    takeUmbrella = false;
}
```

For our game, we should use `if` statements to determine if a player has 3 vertical, horizontal, or diagonal matches.

Inside the `()` beside `if`, you should specify a _Boolean expression_. **Booleans** are `true` or `false` statements. We can utilize this in our `if` statement. If the expression is `true`, the code inside `{ }` is executed.

You can also connect **Boolean expressions** together using the `&&` (AND) and the `||` (OR) operator.

Take a look at the `CheckWinner()` function in `MainActivity.kt` and think about what all the connected `&&` statements are doing.