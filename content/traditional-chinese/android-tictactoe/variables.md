---
title: "變數"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
變數簡單來說就是我們可以為字串、數字和布林值等值所命名的名稱。我們使用變數來儲存資訊，讓電腦可以追蹤這些資訊。變數透過使用變數的類型以及變數的名稱來建立。接著，可以使用 `=` 將您想要儲存的內容指派給該變數。

請看 `MainActivity.kt` 檔案頂部的變數。

```kotlin
    var Player1 = ArrayList<Int>()
    var Player2 = ArrayList<Int>()
    var ActivePlayer = 1
    var setPlayer = 1
    var colorBlue = Color.rgb(0, 161, 241)
    // PUZZLE 3
    var colorGreen = Color.BLACK
```

- `Player1` 儲存玩家1在遊戲中的移動值。
- `Player2` 儲存玩家2在遊戲中的移動值。
- `ActivePlayer` 用來追蹤目前輪到哪位玩家操作。
- `setPlayer` 儲存遊戲是玩家對玩家模式還是玩家對電腦模式的值。
- `colorBlue` 和 `colorGreen` 儲存玩家顏色的值。