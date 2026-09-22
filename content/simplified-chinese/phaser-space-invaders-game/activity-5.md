---
title: "活动 5 - 让敌人移动"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 12
---

目前，敌人有点无聊，因为它们只是静止不动。让我们让它们稍微移动一下吧！我们的目标是让它们从左向右移动，如下所示：  
![move](../media/6/enemy-move.gif)

让我们从让敌人在创建后向左移动开始。这可以通过简单地添加一行代码来实现：

```javascript
enemy.body.velocity.x = -90;
```

将其放入我们的 `createEnemies()` 方法中：

<!--- ![move enemies](../media/6/move_enemies.png)--->
<img src="../media/6/move_enemies.png" alt="move enemies" style="width:950px;"/>

但如果你现在测试代码，你会发现敌人一直会无限向左移动，这是因为 Phaser 的无限画布特性。我们需要让敌人在离开屏幕之前改变方向。我们可以通过一个计时器实现，这个工具可以在一定时间后调用一个函数。计时器调用的这个函数将改变敌人的方向。我们还可以让计时器无限运行，以便在每个时间间隔后继续调用这个函数（我们将在这里这样做）。在 `createEnemy()` 方法的末尾加入以下计时器：

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

这是一个计时器，它每隔一段时间连续调用 `changeEnemyDirection()` 方法。然而，我们还没有在方法中加入任何内容。现在让我们添加这些内容：在 `changeEnemyDirection()` 方法中加入代码，这些代码将改变敌人组中每个敌人的方向（这也是我们创建一个组的原因之一！）：

<!--- ![change_direction](../media/6/change_direction.png)--->
<img src="../media/6/change_direction.png" alt="change_direction" style="width:950px;"/>

{{% notice hint %}}

注意，如果你使用了和我们一样的计时器值，你会发现敌舰会进出屏幕。对于敌人，我们不会像为玩家的飞船那样绑定到屏幕，而是将敌人的起始位置稍微向右移动一些（因为计时器的时间已经正确设置为在屏幕上来回移动）。

{{% /notice %}}