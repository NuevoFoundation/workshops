---
title: "变量"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
变量是我们为字符串、数字、和布尔值等数据赋予名称的一种方式。我们使用变量来存储信息，以便计算机能够跟踪这些信息。变量的创建需要先定义变量的类型和名称，然后通过 `=` 符号将变量与需要存储的内容进行赋值。

请查看 `MainActivity.kt` 顶部的变量：

```kotlin
    var Player1 = ArrayList<Int>()
    var Player2 = ArrayList<Int>()
    var ActivePlayer = 1
    var setPlayer = 1
    var colorBlue = Color.rgb(0, 161, 241)
    // PUZZLE 3
    var colorGreen = Color.BLACK
```

- `Player1` 存储的是玩家1在游戏中走的步数。
- `Player2` 存储的是玩家2在游戏中走的步数。
- `ActivePlayer` 用于记录当前轮到谁进行操作。
- `setPlayer` 用于标识游戏是玩家对玩家模式还是玩家对电脑模式。
- `colorBlue` 和 `colorGreen` 存储了玩家的颜色值。