---
title: "活动 9 - 添加分数、关卡和生命值"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 16
---

现在，我们将为游戏添加一些数字来量化进度！最简单的实现是分数。在屏幕的左上角创建一个文本变量，用于显示 `分数：` 以及存储玩家分数的数值变量。

```javascript
this.scoreText = this.add.text(20, 10, "Score: " + this.score, {
    font: "25px Arial",
    fill: "white"
});
```

{{% notice hint %}}
这行代码将在屏幕左上方显示分数变量。

* `20` 和 `10` 是 x 和 y 的坐标值
* `"score" + this.score` 是文本值
{{% /notice %}}

创建分数变量后，将这一行代码添加到如下位置：

<!--- ![create_score](../media/10/create_score.png)--->
<img src="../media/10/create_score.png" alt="create_score" style="width:950px;"/>

只需添加一个分数变量以及显示“分数：‘分数变量’”的文本到屏幕。我们将更新 `hitEnemy()` 函数，让玩家通过击败敌人获得分数：

<!--- ![hit_enemy_score](../media/10/hit_enemy_score.png)--->
<img src="../media/10/hit_enemy_score.png" alt="hit_enemy_score" style="width:950px;"/>

现在我们将添加关卡信息。我们将用与分数相同的方式初始化它，但这次我们将其显示在屏幕中间，而不是左上角：

<!--- ![create_level](../media/10/create_level.png)--->
<img src="../media/10/create_level.png" alt="create_level" style="width:950px;"/>

关卡的设置很简单：每当玩家消灭了所有敌人时，就进入下一关并重生所有敌人。为了让每一关比上一关更具挑战性，我们将调整敌人的射击频率。为此，我们将创建一个难度变量，并使用它来确定敌人随机射击的频率。

通过此设置，改变难度变量就能改变敌人的射击频率。较低的难度值会增加游戏难度，因为这使敌人射击的概率更高。

为了在玩家消灭所有敌人后更新关卡，我们将创建一个 `levelClear()` 方法，该方法会更新难度变量、重置敌人计时器、创建新敌人（通过调用 `createEnemies()` 方法），并更新屏幕上的关卡文本：

<!--- ![level_clear](../media/10/level_clear.png)--->
<img src="../media/10/level_clear.png" alt="level_clear" style="width:950px;"/>

注意，每次创建新敌人时都需要创建一个新计时器，否则敌人和计时器可能会不同步。此外，我们建议当难度达到 200 时，减小难度变量的递减幅度，因为此时游戏难度会提升得更快。

别忘了在 `update()` 中更新 `levelClear()`：

<!--- ![update_level_clear](../media/10/update_level_clear.png)--->
<img src="../media/10/update_level_clear.png" alt="update_level_clear" style="width:950px;"/>

接下来，我们将添加生命值。我们将使用类似的方法对其初始化，并将其放置在屏幕右上角：

<!--- ![create_live](../media/10/create_live.png)--->
<img src="../media/10/create_live.png" alt="create_live" style="width:950px;"/>

为了在每次被击中时扣除一条生命值，我们将向 `hurtPlayer()` 中添加如下代码：

<!--- ![hurt_player](../media/10/hurt_player.png)--->
<img src="../media/10/hurt_player.png" alt="hurt_player" style="width:950px;"/>

但是，为了让生命值更有意义，我们需要在玩家失去所有生命值时触发“游戏结束”。我们首先在 `create()` 方法中创建一个游戏结束的文本，并初始设为不可见：

<!--- ![create_game_over](../media/10/create_game_over.png)--->
<img src="../media/10/create_game_over.png" alt="create_game_over" style="width:950px;"/>

当游戏结束时，我们会在 `hurtPlayer()` 方法中将这个文本设为可见：

<!--- ![hurt_player_restart](../media/10/hurt_player_restart.png)--->
<img src="../media/10/hurt_player_restart.png" alt="hurt_player_restart" style="width:950px;"/>

这会让角色不再重生，显示“游戏结束”文本，并在玩家点击屏幕时重新开始游戏。

接下来只需创建这个代码所指的 `restart()` 方法：

<!--- ![restart_function](../media/10/restart_function.png)--->
<img src="../media/10/restart_function.png" alt="restart_function" style="width:950px;"/>

这会将所有内容重置为初始状态以重新开始游戏。

![gameplay](../media/10/game-play.gif)