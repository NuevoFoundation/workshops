---
title: "活動 8 - 讓敵人可以射擊"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 15
---

現在，我們將讓敵人能夠向玩家射擊。每個敵人將以隨機的方式射擊，而難度（之後我們會在每個關卡逐步提升）是透過控制他們射擊的隨機頻率來定義的。

敵人的射擊光束與玩家的光束相當類似。我們將建立一個結構和代碼幾乎與 `playerBeam.js` 相同但變數名稱和數值不同的 `enemyBeam.js` 檔案：

<!--- ![enemy_bullet](../media/9/enemy_bullet.png)--->
<img src="../media/9/enemy_bullet.png" alt="enemy_bullet" style="width:950px;"/>

我們將共用玩家的光束與敵人的光束的圖像和動畫。不過，在實作時，你需要為敵人的投射物建立一個單獨的群組：

<!--- ![enemy_projectiles](../media/9/enemy_projectiles.png)--->
<img src="../media/9/enemy_projectiles.png" alt="enemy_projectiles" style="width:950px;"/>

我們還需要為這款遊戲加入一個難度設定（稍後我們會更詳細解釋 `difficulty`，但目前 `difficulty` 將確保敵人可以射擊）：

<!--- ![add_diff](../media/9/add_diff.png)--->
<img src="../media/9/add_diff.png" alt="add_diff" style="width:950px;"/>

{{% notice hint %}}
* 我們建議將難度設為 1000。
* 如果將難度設為 1000，隨機數將從 1 到 1000 中選擇。只有當隨機數等於 1 時，敵人才會射擊。
* 如果你將難度設為 1，敵人將會持續射擊。
{{% /notice %}}

為了讓敵人隨機射擊，我們將首先建立一個 `enemyShoot()` 方法：

<!--- ![enemyShoot](../media/9/enemyShoot.png)--->
<img src="../media/9/enemyShoot.png" alt="enemyShoot" style="width:950px;"/>

然後在 `update()` 方法中呼叫它：

<!--- ![update_player_shoot](../media/9/update_player_shoot.png)--->
<img src="../media/9/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

這會以指定的隨機頻率創建一個新的敵人投射物。

接著，我們需要更新敵人的投射物，並確保每個光束在適當時間自動刪除。

如同你在 `playerBeam.js` 中的做法，你需要在 `enemyBeam.js` 中更新敵人的光束：

<!--- ![update](../media/9/update.png)--->
<img src="../media/9/update.png" alt="update_player_shoot again" style="width:950px;"/>

同樣地，你也需要在場景 2 中更新每個敵人的投射物，這與我們更新投射物的方式相似：

<!--- ![update_projectiles](../media/9/update_enemy_projectiles.png)--->
<img src="../media/9/update_enemy_projectiles.png" alt="update_enemy_projectiles" style="width:950px;"/>

最後，遊戲畫面應該會類似如下所示：
![enemyShoot](../media/9/enemy-shoot.gif)