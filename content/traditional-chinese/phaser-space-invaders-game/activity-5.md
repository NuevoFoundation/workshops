---
title: "活動 5 - 讓敵人移動"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 12
---

目前，敵人有點無聊，因為他們只是靜止不動。讓我們讓他們稍微動起來吧！我們的目標是讓敵人從左到右移動，就像這樣：
![move](../media/6/enemy-move.gif)

首先，我們可以讓敵人在創建後向左移動。我們可以通過簡單添加以下一行程式碼來實現這一點：

```javascript
enemy.body.velocity.x = -90;
```

將其放入我們的 `createEnemies()` 方法中：

<!--- ![move enemies](../media/6/move_enemies.png)--->
<img src="../media/6/move_enemies.png" alt="move enemies" style="width:950px;"/>

但是如果你現在測試程式碼，可以看到敵人會因為 Phaser 的無限畫布而不斷向左移動。我們需要在他們離開螢幕之前讓他們改變方向。我們可以使用計時器來實現。計時器是一種工具，可讓我們在一定時間段後調用一個函數。計時器調用的函數將改變敵人的方向。我們還可以讓計時器無限運行，使其在每次間隔時間後持續運行該函數（這是我們在此處要做的）。請將以下計時器放入 `createEnemy()` 方法的末尾。

```javascript
this.enemyTimer = this.time.addEvent({
    delay: 1500,
    callback: this.changeEnemyDirection,
    callbackScope: this,
    loop: true
});
```

<!--- ![timer_function](../media/6/timer_function.png)--->
<img src="../media/6/timer_function.png" alt="timer_function" style="width:950px;"/>

這是一個計時器，可以在一定時間間隔後不斷調用 `changeEnemyDirection()` 方法。然而，我們還沒有為它填充任何內容。現在我們來補全它：在 `changeEnemyDirection()` 方法中加入程式碼，讓它可以改變敵人群組中每個敵人的方向（這也是我們創建群組的原因之一！）：

<!--- ![change_direction](../media/6/change_direction.png)--->
<img src="../media/6/change_direction.png" alt="change_direction" style="width:950px;"/>

{{% notice hint %}}

請注意（如果你使用了與我們相同的計時器值），你的飛船會進出螢幕。這次我們不會像對玩家的飛船那樣將它綁定在螢幕內，而是將敵人的起始位置稍微向右移一點（因為計時器已經有正確的時間來往返於螢幕上）。

{{% /notice %}}