```markdown
---
title: "活动 7 - 允许玩家射击"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 14
---

现在，我们想添加游戏中最重要的部分之一——射击敌人！虽然我们可以通过撞击敌人来击败他们，但当我们稍后添加生命值时，这将不是一个好主意。我们将通过使用一个单独的 JavaScript 文件为光束创建一个对象来实现射击效果（如我们之前为爆炸效果所做的）。

我们将从一些基本内容开始——在场景 1 中加载一个精灵表和动画以用于玩家光束：

<!--- ![scene1_preload](../media/8/scene1_preload.png)--->
<img src="../media/8/scene1_preload.png" alt="scene1_preload" style="width:950px;"/>

精灵表的位置是 `assets/beam.png`，帧宽度和高度为 32：

<!--- ![scene1_create](../media/8/scene1_create.png)--->
<img src="../media/8/scene1_create.png" alt="scene1_create" style="width:950px;"/>

现在在场景 2 中，我们会像对敌人所做的那样，为光束创建一个组，以便我们可以轻松地操控它们。创建一个组并命名为 "projectiles"：

<!--- ![projectiles](../media/8/projectiles_step1.png)--->
<img src="../media/8/projectiles_step1.png" alt="projectiles" style="width:950px;"/>

然后打开 `playerBeam.js` 文件：

<!--- ![constructor_xy](../media/8/constructor_xy.png)--->
<img src="../media/8/constructor_xy.png" alt="constructor_xy" style="width:950px;"/>

请注意，与 `Explosion.js` 类似，它扩展了 Phaser.GameObjects.Sprite，并在构造函数中使用了 `super()` 关键字。完成构造函数中的代码。这将要求您播放光束的动画、启用物体，并设置光束的 y 轴速度，根据您的需要设定光束的飞行速度。

现在我们已经完成了光束的基本部分，让我们实现玩家在按下空格键时发射光束的功能。与我们为玩家移动创建一个变量来处理方向键的方式类似，我们将创建另一个变量来处理玩家按下空格键时的操作：

<!--- ![control_space](../media/8/control_space.png)--->
<img src="../media/8/control_space.png" alt="control_space" style="width:950px;"/>

接下来我们将创建一个 playerShoot() 方法：

<!--- ![player_shoot](../media/8/player_shoot.png)--->
<img src="../media/8/player_shoot.png" alt="player_shoot" style="width:950px;"/>

并像调用 movePlayer() 一样在 update() 方法中调用它：

<!--- ![update_player_shoot](../media/8/update_player_shoot.png)--->
<img src="../media/8/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

playerShoot 方法会检查是否按下了空格键，并在按下时发射光束。"发射光束" 在此指的是创建一个 playerBeam 对象并将其添加到 projectiles 组中，如果玩家处于活动状态（仍然存活）。

现在测试吧！不过这里有两个大问题——光束不会对敌人造成任何伤害，并且光束会无限往前飞，因为 Phaser 的画布是无限的。
![blast](../media/8/blast-first.gif)

让我们先修复第二个问题。虽然这个问题不会直接影响游戏玩法，但可能会成为一个问题，因为如果光束仍然存在于屏幕外，那就意味着电脑需要浪费时间处理它们。如果电脑需要处理太多光束，可能会导致游戏卡顿！我们可以利用 playerBeam.js 中的 update 函数来销毁超出屏幕的光束。

然而，使这些 update 函数起作用的唯一方法是在我们场景 2 的 update 函数中调用它们，如下所示：

```javascript
for(var i = 0; i < this.projectiles.getChildren().length; i++) {
    var beam = this.projectiles.getChildren()[i];
    beam.update();
}
```

您可以将其填充到以下位置：

<!--- ![update_projectiles](../media/8/update_projectiles.png)--->
<img src="../media/8/update_projectiles.png" alt="update_projectiles" style="width:950px;"/>

现在，为测试代码是否有效，我们可以简单地更改光束自毁的高度值为屏幕内的一个值：

<!--- ![player_bullet_update](../media/8/player_bullet_update.png)--->
<img src="../media/8/player_bullet_update.png" alt="player_bullet_update" style="width:950px;"/>

如果光束在特定高度消失，代码就运行正确。测试确认代码工作后，我们可以将该值更改为屏幕外的一个值以实现目标。

![blast](../media/8/blast-disappear.gif)

您可以在这个动图中看到光束在达到指定高度时消失（我们用的是 50）。再次确认代码工作后，我们可以将 50 改为一个略高于屏幕之外的值（例如 10），就可以确定代码应该仍然按照相同方式工作。

现在，让我们实现敌人被光束击中时被摧毁的功能！我们实际上可以使用类似于检测玩家是否与敌人碰撞的重叠检测来实现这个功能：

<!--- ![overlap](../media/8/projectiles_step2.png)--->
<img src="../media/8/projectiles_step2.png" alt="overlap projectiles" style="width:950px;"/>

创建一行代码，其语法与我们用于检测玩家和敌人是否碰撞的代码类似，但这次检测敌人和光束是否碰撞。

但我们不能使用 `hurtPlayer()` 方法，因为玩家并没有受伤，敌人被击中时我们也不希望玩家重新生成。我们将创建一个新函数命名为 `hitEnemy()`：

<!--- ![hit_enemy](../media/8/hit_enemy.png)--->
<img src="../media/8/hit_enemy.png" alt="hit_enemy" style="width:950px;"/>

在 `hitEnemy()` 中添加代码以在敌人位置创建一个爆炸效果，并移除敌人和光束。

最后，射击效果应该像这样：
![blast](../media/8/blast-final.gif)
```