```markdown
---
title: "活动6-玩家被摧毁后重新生成"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 13
---

我们已经制作了一些非常坚固的敌人，但现在有点问题——它们实际上什么都不会对你做！具体来说，它们实际上不能以任何方式伤害你。我们来改变这一点。在最终的游戏中，有两种方式可以让你受到伤害：被敌人激光击中，或者直接触碰敌人。让我们先从后者开始，因为它会稍微简单些。

在Phaser中，碰撞相对容易。

首先，我们需要导入一个爆炸的精灵图集并在`场景1`中实现它的动画：

<!--- ![load_sprite](../media/7/load_sprite.png)--->
<img src="../media/7/load_sprite.png" alt="load_sprite" style="width:950px;"/>

<!--- ![create_sprite](../media/7/create_sprite.png)--->
<img src="../media/7/create_sprite.png" alt="create_sprite" style="width:950px;"/>

这将是玩家被摧毁时播放的爆炸动画！

Phaser 提供了非常方便的方式来处理物体之间的碰撞。我们只需在 `场景2` 的 `create()` 方法中添加以下代码行：

```javascript
this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
```

<!--- ![overlap with player](../media/7/overlap_hurtPlayer.png)--->
<img src="../media/7/overlap_hurtPlayer.png" alt="overlap with player" style="width:950px;"/>

这行代码的作用是当 `this.player` 和 `this.enemies` 组中的成员发生重叠时，调用 `hurtPlayer()` 方法。此方法会以 `this.player` 和 `this.enemies` 作为参数调用。

有了这行代码，当玩家和敌人组中的一个物体接触时，就会调用 `hurtPlayer()` 方法，并将玩家和敌人的变量作为参数传递给该方法。现在让我们来创建 `hurtPlayer()` 方法：

<!--- ![hurtPlayer](../media/7/function.png)--->
<img src="../media/7/function.png" alt="hurtPlayer" style="width:950px;"/>

首先我们通过以下代码销毁敌人并禁用玩家（步骤4和步骤5）：

```javascript
enemy.destroy();
player.disableBody(true, true);
```

这会让敌人和玩家都消失（敌人已被删除，但玩家只是不可见且不可交互）。接下来，让我们在短暂停顿后重新生成玩家（暂停时间是为了让玩家有一段时间反应并适应伤害）。为了实现这个暂停，我们将在`步骤7`中使用另一个计时器（就像我们之前为改变敌人方向所做的一样）。语法是一样的，但我们会调用 `resetPlayer()` 方法，设置一个较短的延迟，并且不需要循环计时器。

创建计时器后，我们开始编写 `resetPlayer()` 方法：

<!--- ![reset_player](../media/7/resetPlayer.png)--->
<img src="../media/7/resetPlayer.png" alt="reset_player" style="width:950px;"/>

首先，选择一个重生坐标，并将玩家的 (X, Y) 值更改为该位置（我们仍然可以通过这种方式更改飞船的位置，因为它仍然存在，只是被禁用了）。然后，通过以下代码启用玩家：

```javascript
this.player.enableBody(true, x, y, true, true);
```

在完成这些之后，碰撞应该看起来如下：
![collision](../media/7/respawn-first.gif)

接下来，编辑 `explosion.js` 文件，创建一个新的爆炸对象：

<!--- ![explosion](../media/7/explosion.png)--->
<img src="../media/7/explosion.png" alt="explosion" style="width:950px;"/>

注意它继承了 Phaser.GameObjects.Sprite。这使我们能通过继承使用该类的构造函数。我们的爆炸物对象需要的参数非常简单，仅包含场景和两个数字（x 和 y）——稍后你会看到我们传入的是场景2本身。我们可以利用此场景访问其中的所有内容。此文件的功能是创建一个会在指定位置播放爆炸动画的对象。该类需要的代码都包含在构造函数内，且只有两行代码需要填写。

现在，打开 `scene2.js` 文件中的 `hurtPlayer()` 方法：

<!--- ![create_explosion](../media/7/create_explosion.png)--->
<img src="../media/7/create_explosion.png" alt="create_explosion" style="width:950px;"/>

{{% notice hint %}}
你需要创建两个爆炸对象：

* 一个以场景和玩家坐标为参数，
* 另一个以场景和敌人坐标为参数。
{{% /notice %}}

接下来，注意玩家的重生过程稍显突然。我们可以使用一个渐变效果让这个过渡更平滑，在玩家生成后应用：

<!--- ![reset_tween](../media/7/reset_tween.png)--->
<img src="../media/7/reset_tween.png" alt="reset_tween" style="width:950px;"/>

Tween 是一个工具，可以用来完成某个对象的特性或属性的动画处理。例如，在本例中，我们将玩家的透明度（alpha）设置为动画效果。首先将玩家的透明度设置为 0.5，然后使用 Tween 将其逐步恢复到完全正常可见。

```javascript
var tween = this.tweens.add({
    targets: this.player,
    y: config.height - 64,
    ease: 'Power1',
    duration: 1500,
    repeat: 0,
    onComplete: function(){
        this.player.alpha = 1;
    },
    callbackScope: this
});
```

现在我们终于完成了！现在，玩家的重生动画看起来更加流畅了！

![collision](../media/respawn-second.gif)
```