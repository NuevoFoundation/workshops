---
title: "活動 4 - 新增敵人"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 11
---

現在，讓我們為玩家新增一些敵人！首先，像在場景 1 中為玩家加載角色精靈圖集一樣，我們也需要為敵人加載一個角色精靈圖集。使用與加載玩家相同的語法，但使用不同的名稱，將資源指定為 `assets/enemies.png`，並設置 frameWidth 和 frameHeight 為 16：

<!--- ![load_sprite](../media/5/load_sprite.png) --->
<img src="../media/5/load_sprite.png" alt="load_sprite" style="width:950px;"/>

此外，像為玩家創建動畫那樣，為敵人在場景 1 中創建另一個動畫（你可以使用與 `frameRate` 和 `repeat` 相同的參數，但記得要將 `frames` 設置為 `enemies`）：

<!--- ![create_sprite](../media/5/create_sprite.png) --->
<img src="../media/5/create_sprite.png" alt="create_sprite" style="width:950px;"/>

這個遊戲會使用許多外觀相同且行為非常相似的敵人。為了使程式碼編寫更簡單，我們將使用 Phaser 中的一個概念——群組（group）來一次性控制所有的敵人。顧名思義，群組就是一群物件。我們可以在希望對全部成員進行更改時引用這個群組。

我們可以這樣宣告敵人群組：

```javascript
this.enemies = this.physics.add.group();
```

這會創建一個名為 `enemies` 的群組。

現在，讓我們將敵人放到畫面上。為了更簡單，我們將使用另一個名為 `createEnemies()` 的輔助方法（這個方法已經為你預先建立，但內容為空）：

<!--- ![create_enemies](../media/5/create_enemies.png) --->
<img src="../media/5/create_enemies.png" alt="create_enemies" style="width:950px;"/>

接下來，呼叫這個方法，並將它放在 `create()` 方法中，而不是 `update()` 方法中，因為我們只想在遊戲開始時生成一次敵人：

<!--- ![enemies_move](../media/5/enemies_move.png) --->
<img src="../media/5/enemies_move.png" alt="enemies_move" style="width:950px;"/>

以下為語法：在座標 (X, Y) 處創建名為 "enemy" 的敵人變數，使用 `enemies` 精靈圖集，並將它放入你先前宣告的 `enemies` 群組中：

```javascript
var enemies = this.enemies.create(X, Y, 'enemies');
```

## 活動 1：放置一個敵人

試著選擇一個 (X, Y) 座標，並將此行程式碼放入 createEnemies() 方法中。你還需要在生成敵人之後立即播放動畫（同樣在 createEnemies() 方法中進行）。
![declare](../media/5/enemy-one.PNG)  
這看起來應該類似於下圖（座標可能不同——此例中的敵人放置在 (300, 100)）：

## 活動 2：放置更多敵人

現在，讓我們加一些更多的敵人。在同一方法中新增幾個敵人，但要小心，因為在同一作用域內創建的每個敵人變數都必須具有不同的變數名稱。
![declare](../media/5/enemy-multiple.PNG)

## 活動 3：放置一組敵人區塊

現在，當你已經熟練操作了，讓我們嘗試一些更具挑戰性的任務：創建一組如下圖所示的敵人區塊。不過，有一個條件：**不能通過為每個敵人單獨寫多行程式碼來實現**。

**提示：使用嵌套的 for 迴圈**  
![declare](../media/5/enemy-block.PNG)