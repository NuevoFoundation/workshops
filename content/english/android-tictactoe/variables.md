---
title: "Variables"
date: 2020-07-27T14:17:07.42-07:00
draft: false
hidden: true
weight: 10
---

# Variables

Variables are simply names that we can give to values such as strings, numbers, and booleans. We use variables to store information so the computer can keep track of it. Variables are created by using the type of the variable and the name of the variable. Then you can assign that variable to the information that you want to store by using `=` and the content.

Look at the variables at the top of of `MainActivity.kt`.

```java
    var Player1 = ArrayList<Int>()
    var Player2 = ArrayList<Int>()
    var ActivePlayer = 1
    var setPlayer = 1
    var colorBlue = Color.rgb(0, 161, 241)
    // PUZZLE 3
    var colorGreen = Color.BLACK
```

- `Player1` holds the values of Player 1's moves in the game
- `Player2` holds the values of Player 2's moves in the game
- `ActivePlayer` keeps track of whose turn it is
- `setPlayer` holds the value for whether the game is Player vs Player or Player vs Computer
- `colorBlue` and `colorGreen` hold the values for the player colors
