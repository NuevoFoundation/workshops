```markdown
---
title: "Activity 8 - 让敌人射击"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 15
---

现在，我们将使敌人能够向玩家发射射击。每个敌人将随机射击，难度（稍后将通过每个关卡逐步提高）由它们随机射击的频率定义。

敌人的射击光束与玩家的射击光束非常相似。我们将创建一个几乎与 `playerBeam.js` 相同但变量名和数值不同的 `enemyBeam.js` 文件：

<!--- ![enemy_bullet](../media/9/enemy_bullet.png)--->
<img src="../media/9/enemy_bullet.png" alt="enemy_bullet" style="width:950px;"/>

我们将共享玩家的光束和敌人的光束的精灵和动画。不过，在实现过程中，你将为敌人射击创建一个单独的组：

<!--- ![enemy_projectiles](../media/9/enemy_projectiles.png)--->
<img src="../media/9/enemy_projectiles.png" alt="enemy_projectiles" style="width:950px;"/>

我们还需要为这个游戏创建难度设置（稍后会详细讲解 `difficulty`，但现在，`difficulty` 将确保敌人会射击）：

<!--- ![add_diff](../media/9/add_diff.png)--->
<img src="../media/9/add_diff.png" alt="add_diff" style="width:950px;"/>

{{% notice hint %}}
* 我们建议将难度设置为 1000。
* 如果你将难度设置为 1000，随机数将从 1 到 1000 中选择。只有当随机数是 1 时，敌人才会射击。
* 如果你设置难度为 1，敌人将会连续射击。
{{% /notice %}}

为了让敌人随机射击，我们将首先创建一个 `enemyShoot()` 方法：

<!--- ![enemyShoot](../media/9/enemyShoot.png)--->
<img src="../media/9/enemyShoot.png" alt="enemyShoot" style="width:950px;"/>

并在 `update()` 方法中调用它：

<!--- ![update_player_shoot](../media/9/update_player_shoot.png)--->
<img src="../media/9/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

它会以指定的随机速率创建一个新的敌人射击光束。

然后，我们需要更新敌人射击光束。我们需要确保每个光束被删除。

你需要像在 `playerBeam.js` 中更新射击光束那样更新 `enemyBeam.js` 中的敌人光束：

<!--- ![update](../media/9/update.png)--->
<img src="../media/9/update.png" alt="update_player_shoot again" style="width:950px;"/>

你还需要在场景 2 中更新每个敌人的射击光束，这与更新玩家的射击光束类似：

<!--- ![update_projectiles](../media/9/update_enemy_projectiles.png)--->
<img src="../media/9/update_enemy_projectiles.png" alt="update_enemy_projectiles" style="width:950px;"/>

最终，游戏的展示效果应该类似如下：
![enemyShoot](../media/9/enemy-shoot.gif)
```