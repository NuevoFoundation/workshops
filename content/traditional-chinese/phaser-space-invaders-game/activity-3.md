---
title: "活動 3 - 添加鍵盤輸入以移動玩家"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 10
---

現在，讓我們實現使用鍵盤使飛船移動的功能。第一步是在 `Scene2.js` 的 `create()` 方法中創建一個 `cursor` 屬性：

<!--- ![create_cursor_key](../media/4/create_cursor_key.png) --->
<img src="../media/4/create_cursor_key.png" alt="create_cursor_key" style="width:950px;"/>

最有效的移動方式是創建一個輔助函數，用 `cursor` 屬性檢查鍵盤是否有按鍵被按下。我們已經為你準備好了這個函數，名為 `movePlayer()`：

<!--- ![move_player_function](../media/4/move_player_function.png) --->
<img src="../media/4/move_player_function.png" alt="move_player_function" style="width:950px;"/>

然後我們使用這個函數來移動玩家。我們可以在 `update()` 方法中調用這個函數，這樣我們就可以在每個更新迴圈中檢查是否有移動（這一步我們也已經幫你完成了）。

現在，打開 `movePlayer()` 方法，編寫程式碼檢查按鍵的移動情況，並根據需要移動玩家。

{{% notice hint %}}

* 我們建議使用 200 的移動速度
* 使用 `if` 條件語句
* 編寫 `if` 語句後，你可能會發現即使停止按鍵，玩家也會繼續移動。要解決這個問題，想一想：當玩家沒有按下鍵盤時，飛船應該做什麼？

{{% /notice %}}

現在測試一下！不過你可能會注意到一件事：玩家可以移動到螢幕外，就像這樣：

<!--- ![bounds](../media/4/player-off.gif) --->
<img src="../media/4/player-off.gif" alt="bounds" style="width:100px;"/>

之所以會發生這種情況，是因為 Phaser 使用的是無限畫布，即使在螢幕視窗之外也存在。我們可以通過一行程式碼來解決這個問題，將玩家限制在螢幕之內：

```javascript
this.player.body.setCollideWorldBounds(true); // player 無法移出螢幕範圍
```

找到 Scene 2 的 `create()` 方法：

<!--- ![set_bound](../media/4/set_bound.png) --->
<img src="../media/4/set_bound.png" alt="set_bound" style="width:950px;"/>

現在，當你的玩家被限制在螢幕內時，你就應該能像這樣移動你的飛船了：

<!--- ![animation spaceship and background](../media/4/player-move-example.gif)
 --->
<img src="../media/4/player-move-example.gif" alt="animation spaceship and background" style="width:300px;"/>