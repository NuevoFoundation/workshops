---
title: "活動 7 - 允許玩家射擊"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 14
---

現在，我們要加入遊戲中最重要的部分之一——射擊敵人！雖然我們可以通過撞到敵人來擊敗他們，但一旦我們稍後加入了玩家生命值的設定，這將不是一個好主意。我們將透過建立一個光束對象來創建射擊效果，並使用一個單獨的 JavaScript 文件（就像我們為爆炸效果所做的一樣）。

我們將從一些基本內容開始——在場景 1 中為玩家的光束加載 spritesheet（精靈圖集）和動畫：

<!--- ![scene1_preload](../media/8/scene1_preload.png)--->
<img src="../media/8/scene1_preload.png" alt="scene1_preload" style="width:950px;"/>

光束的 spritesheet 的位置在 `assets/beam.png`，每個幀的寬度和高度均為 32：

<!--- ![scene1_create](../media/8/scene1_create.png)--->
<img src="../media/8/scene1_create.png" alt="scene1_create" style="width:950px;"/>

現在在場景 2 中，我們將做一些類似於處理敵人的事情，為光束創建一個組，這樣我們就可以輕鬆操作它們。創建一個組並命名為 "projectiles"：

<!--- ![projectiles](../media/8/projectiles_step1.png)--->
<img src="../media/8/projectiles_step1.png" alt="projectiles" style="width:950px;"/>

接下來打開 `playerBeam.js`：

<!--- ![constructor_xy](../media/8/constructor_xy.png)--->
<img src="../media/8/constructor_xy.png" alt="constructor_xy" style="width:950px;"/>

注意，與 `Explosion.js` 一樣，它擴展了 `Phaser.GameObjects.Sprite`，並在構造函數中使用了 `super()` 關鍵字。完成構造函數中的程式碼。在這裡，需要運行光束的動畫，啟用其物理屬性，並設置光束的 y 軸速度，確保光束能以你需要的速度前進。

現在我們已經完成了光束的基礎功能，接著讓玩家可以在按下空白鍵時進行射擊。與為玩家移動建立變數來處理方向鍵輸入的方式類似，我們將建立另一個變數，用於處理玩家按下空白鍵時的輸入：

<!--- ![control_space](../media/8/control_space.png)--->
<img src="../media/8/control_space.png" alt="control_space" style="width:950px;"/>

接著，我們將創建一個 playerShoot() 方法：

<!--- ![player_shoot](../media/8/player_shoot.png)--->
<img src="../media/8/player_shoot.png" alt="player_shoot" style="width:950px;"/>

並將它像處理 `movePlayer()` 一樣，加到 update() 方法中：

<!--- ![update_player_shoot](../media/8/update_player_shoot.png)--->
<img src="../media/8/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

`playerShoot` 方法將檢查空白鍵是否被按下，如果有，並且玩家仍處於活躍狀態（還沒死），則會發射光束。“發射光束”在這裡的意思是創建一個 playerBeam 對象並將它加入到 projectiles 群組中。

現在來測試它！不過目前還有兩個大問題——光束對敵人完全沒有傷害，而且光束會無限持續地向前飛行，因為 phaser 的畫布無限延伸。
![blast](../media/8/blast-first.gif)

讓我們先解決第二個問題。雖然這個問題不會直接影響遊戲的流程，但它可能會成為一個問題，因為如果光束持續存在於畫面之外，電腦就需要多花心思來處理它。如果有太多光束需要處理，這可能會導致遊戲延遲！我們將在 `playerBeam.js` 中利用一個更新函數，來在光束飛出畫面時摧毀它。

然而，這些更新函數要正常運作，我們需要在場景 2 中的 update 函數中調用它們，如下所示：

```javascript
for(var i = 0; i < this.projectiles.getChildren().length; i++) {
    var beam = this.projectiles.getChildren()[i];
    beam.update();
}
```

將它填入到這個位置：

<!--- ![update_projectiles](../media/8/update_projectiles.png)--->
<img src="../media/8/update_projectiles.png" alt="update_projectiles" style="width:950px;"/>

現在，為了測試，我們可以臨時將光束自毀的高度值設為畫面內的一個數值：

<!--- ![player_bullet_update](../media/8/player_bullet_update.png)--->
<img src="../media/8/player_bullet_update.png" alt="player_bullet_update" style="width:950px;"/>

如果光束在特定高度消失，則表明程式碼運行正常。在確認程式碼正確運行後，我們只需將這個測試時使用的數值更改為畫面上方的數值即可。

![blast](../media/8/blast-disappear.gif)

從這個 gif 動畫可以看到，光束在達到特定高度後便會消失（我們設置的測試數值為 50）。再次確認程式碼正常後，我們可以將此數值修改為更接近畫面外的數值（如 10），程序仍然會正常工作。

接下來，讓我們讓敵人在被光束擊中時被摧毀！其實，我們可以使用類似於檢查玩家是否與敵人接觸的重疊檢測來完成此操作：

<!--- ![overlap](../media/8/projectiles_step2.png)--->
<img src="../media/8/projectiles_step2.png" alt="overlap projectiles" style="width:950px;"/>

�