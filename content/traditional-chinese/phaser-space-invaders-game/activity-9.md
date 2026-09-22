---
title: "活動 9 - 新增分數、等級和生命"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 16
---

現在，我們將為遊戲添加一些計數數值！最簡單的是實現分數。在螢幕的左上角創建一個文字變數，顯示 `Score: ` 和儲存玩家分數的數值變數的值。

```javascript
this.scoreText = this.add.text(20, 10, "Score: " + this.score, {
    font: "25px Arial",
    fill: "white"
});
```

{{% notice hint %}}
這行程式碼會在螢幕的左上角顯示分數變數。

* `20` 和 `10` 是 x 和 y 的位置值
* `"score" + this.score` 是顯示的文字內容
{{% /notice %}}

在創建分數值之後，將此行程式碼添加到以下位置：

<!--- ![create_score](../media/10/create_score.png)--->
<img src="../media/10/create_score.png" alt="create_score" style="width:950px;"/>

只需添加一個分數變數和一些文字到螢幕上，顯示 "Score: '分數變數'"。接下來我們會更新 `hitEnemy()` 函數，以便玩家擊敗敵人後可以增加分數：

<!--- ![hit_enemy_score](../media/10/hit_enemy_score.png)--->
<img src="../media/10/hit_enemy_score.png" alt="hit_enemy_score" style="width:950px;"/>

現在我們將添加等級。我們會以與分數相同的方式初始化，但這次會將其顯示在螢幕中間，而不是左上角：

<!--- ![create_level](../media/10/create_level.png)--->
<img src="../media/10/create_level.png" alt="create_level" style="width:950px;"/>

我們會讓等級設定相對簡單：每當玩家消滅了所有敵人，就會進入下一個等級，重新生成所有敵人。為了讓每個等級比之前的更困難，我們會讓敵人射擊頻率提高。為了做到這點，我們會創建一個難度變數並在敵人隨機射擊時使用它。

透過這種設定，只需調整難度變數即可改變敵人射擊頻率。難度越低，遊戲會變得越困難，因為敵人射擊的機率也會增加。

為了讓玩家消滅所有敵人後遊戲能更新等級，我們將創建一個 `levelClear()` 方法。它將更新難度變數、重置敵人計時器、透過呼叫 `createEnemies()` 創建新的敵人，並更新螢幕上的等級文字：

<!--- ![level_clear](../media/10/level_clear.png)--->
<img src="../media/10/level_clear.png" alt="level_clear" style="width:950px;"/>

需要注意的是，每次創建新的敵人時，我們都需要創建一個新的計時器，否則敵人和計時器可能會不同步。此外，建議在等級達到 200 時，減少難度變數的減幅，因為此時難度會加速增長。

別忘了在 `update()` 方法中更新 `levelClear()`：

<!--- ![update_level_clear](../media/10/update_level_clear.png)--->
<img src="../media/10/update_level_clear.png" alt="update_level_clear" style="width:950px;"/>

接下來，我們將添加生命值。我們會再次使用類似的方式初始化，並將其放在螢幕的右上角：

<!--- ![create_live](../media/10/create_live.png)--->
<img src="../media/10/create_live.png" alt="create_live" style="width:950px;"/>

現在，為了在玩家被擊中時失去一條生命，我們將在 `hurtPlayer()` 方法中添加以下程式碼：

<!--- ![hurt_player](../media/10/hurt_player.png)--->
<img src="../media/10/hurt_player.png" alt="hurt_player" style="width:950px;"/>

然而，為了讓生命值的存在有意義，當玩家生命值耗盡時，遊戲應該結束（Game Over）。我們將在 `create()` 方法中創建一個預設不可見的文字：

<!--- ![create_game_over](../media/10/create_game_over.png)--->
<img src="../media/10/create_game_over.png" alt="create_game_over" style="width:950px;"/>

當遊戲結束時，我們會在 `hurtPlayer()` 方法中讓該文字顯示出來：

<!--- ![hurt_player_restart](../media/10/hurt_player_restart.png)--->
<img src="../media/10/hurt_player_restart.png" alt="hurt_player_restart" style="width:950px;"/>

這會讓角色不再生成，顯示遊戲結束文字，並在玩家點擊螢幕時重新啟動遊戲。

最後一部我們需要創建 `restart()` 方法，這段程式碼會用到它：

<!--- ![restart_function](../media/10/restart_function.png)--->
<img src="../media/10/restart_function.png" alt="restart_function" style="width:950px;"/>

這段程式碼會將所有內容重置，從而重新開始遊戲。

![gameplay](../media/10/game-play.gif)