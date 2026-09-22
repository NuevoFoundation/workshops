```markdown
---
title: "活動 6 - 玩家被摧毀後重新啟動"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 13
---

我們已經製作了一些非常堅固的敵人，但現在有一些問題——它們實際上對你沒有任何作用！具體來說，它們根本無法傷害你。讓我們來改變這一點。在最終的遊戲中，有兩種方式可以對你造成傷害：被敵方激光射中，或者直接接觸敵人。我們先從後者開始，因為這比較容易。

在 Phaser 中進行碰撞檢測相對簡單。

我們首先導入一個爆炸的精靈圖表，並在場景 1 中實現其動畫：

<!--- ![load_sprite](../media/7/load_sprite.png)--->
<img src="../media/7/load_sprite.png" alt="load_sprite" style="width:950px;"/>

<!--- ![create_sprite](../media/7/create_sprite.png)--->
<img src="../media/7/create_sprite.png" alt="create_sprite" style="width:950px;"/>

這將是一個玩家被摧毀時播放的爆炸動畫！

Phaser 提供了非常方便的方式來處理物體之間的碰撞。我們可以簡單地將下面的代碼行添加到場景 2 的 `create()` 方法中：

```javascript
this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
```

<!--- ![overlap with player](../media/7/overlap_hurtPlayer.png)--->
<img src="../media/7/overlap_hurtPlayer.png" alt="overlap with player" style="width:950px;"/>

這行代碼的作用是在 `this.player` 和群組 `this.enemies` 的成員發生重疊時調用 `hurtPlayer()` 方法。這將以 `this.player` 和 `this.enemies` 作為參數調用 `hurtPlayer()`。

這行代碼會使得當玩家和敵人組中的某個對象相觸時，調用 `hurtPlayer()` 方法，並將玩家和敵人作為參數傳遞給方法。現在，讓我們建立 `hurtPlayer()` 方法：

<!--- ![hurtPlayer](../media/7/function.png)--->
<img src="../media/7/function.png" alt="hurtPlayer" style="width:950px;"/>

首先，我們將摧毀敵人並禁用玩家，用這些行代碼完成第 4 和第 5 步：

```javascript
enemy.destroy();
player.disableBody(true, true);
```

這會讓敵人和玩家都消失（敵人被刪除，但玩家只是變得不可見且無法交互）。現在讓我們讓玩家在短暫的暫停後復活（暫停是為了讓玩家有時間反應損傷）。為了這個暫停，我們將像更改敵人方向時那樣再創建一個計時器，作為第 7 步。語法與之前相同，但這次我們將呼叫 `resetPlayer()` 函數，設置更短的延遲，並且不循環計時器。

當你創建好計時器後，讓我們來完成 `resetPlayer()` 方法：

<!--- ![reset_player](../media/7/resetPlayer.png)--->
<img src="../media/7/resetPlayer.png" alt="reset_player" style="width:950px;"/>

首先，選擇一個重生座標，並將玩家的 (X, Y) 值更改為這個位置（我們仍然可以這樣更改飛船的位置，因為它依然存在，只是不啟動）。然後，使用這行代碼啟用玩家：

```javascript
this.player.enableBody(true, x, y, true, true);
```

一旦你實現了這個功能，碰撞應該看起來像這樣：
![collision](../media/7/respawn-first.gif)

接下來，讓我們通過編輯 `explosion.js` 創建一個新的爆炸對象：

<!--- ![explosion](../media/7/explosion.png)--->
<img src="../media/7/explosion.png" alt="explosion" style="width:950px;"/>

注意它繼承自 `Phaser.GameObjects.Sprite`。這將允許我們通過繼承使用該類別的構造函數。我們的 `Projectile` 對象的參數僅僅是場景和兩個數字（x 和 y）——稍後你會看到，我們將傳遞場景 2 本身。我們可以使用這個場景訪問其中的所有內容。這個文件所做的只是創建一個對象，該對象將在指定位置播放爆炸動畫。這個類別需要的所有代碼只包含在構造函數內，並且你只需填寫其中的兩行代碼。

現在，轉到 `scene2.js` 中的 `hurtPlayer()` 方法：

<!--- ![create_explosion](../media/7/create_explosion.png)--->
<img src="../media/7/create_explosion.png" alt="create_explosion" style="width:950px;"/>

{{% notice hint %}}
你將創建兩個爆炸對象：

* 一個以場景和玩家座標作為參數，
* 另一個以場景和敵人座標作為參數。
{{% /notice %}}

接下來，注意到玩家的復活有些突然。我們將使用補間動畫來讓這個過程更加自然，補間動畫會在玩家重生後立即啟動：

<!--- ![reset_tween](../media/7/reset_tween.png)--->
<img src="../media/7/reset_tween.png" alt="reset_tween" style="width:950px;"/>

補間動畫本質上是一種工具，用於為物件的某個功能或特徵創建動畫。例如，在這種情況下，我們正在為玩家的透明度（又稱可見性）創建動畫。我們將先將玩家的透明度設置為 0.5，然後使用補間動畫將其漸變為完全正常的可見性。

```javascript
var tween = this.tweens.add({
    targets: this.player,
    y: config.height - 64,
    ease: 'Power1',
    duration: 1500,
    repeat: 0,
