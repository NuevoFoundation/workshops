```markdown
---
title: "Activity 4 - Adding Enemies"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 11
---

现在，让我们为玩家添加一些敌人！首先像为玩家加载精灵图一样，在场景1中加载敌人的精灵图。使用你加载玩家时相同的语法，但使用不同的名称，`assets/enemies.png`作为精灵图的来源，并设置frameWidth和frameHeight为16：

<!--- ![load_sprite](../media/5/load_sprite.png) --->
<img src="../media/5/load_sprite.png" alt="load_sprite" style="width:950px;"/>

此外，像创建玩家动画一样在场景1中创建另一个动画（你可以使用相同的`frameRate`和`repeat`参数，但记住要使用`enemies`作为`frames`）：

<!--- ![create_sprite](../media/5/create_sprite.png) --->
<img src="../media/5/create_sprite.png" alt="create_sprite" style="width:950px;"/>

这个游戏会使用许多看起来相同且行为类似的敌人。为了让编码更简单，我们会使用Phaser中的一个概念，称为“组”（group），来同时控制所有敌人。组的概念非常直接——它是由多个对象组成的一群东西。当我们想对这个组里的每个成员做修改时，可以通过引用这个组来实现。

我们可以这样声明敌人组：

```javascript
this.enemies = this.physics.add.group();
```

这将创建一个名为`enemies`的组。

接下来，让我们把敌人放到屏幕上。为简化操作，我们将使用另一个辅助方法`createEnemies()`（它已经为你创建，但内部还没有任何内容）：

<!--- ![create_enemies](../media/5/create_enemies.png) --->
<img src="../media/5/create_enemies.png" alt="create_enemies" style="width:950px;"/>

现在，在`create()`方法中调用此方法，而不是在`update()`方法中调用，因为我们只需要在游戏开始时生成敌人一次：

<!--- ![enemies_move](../media/5/enemies_move.png) --->
<img src="../media/5/enemies_move.png" alt="enemies_move" style="width:950px;"/>

创建一个变量"enemy"的语法如下，该敌人位于坐标(X, Y)，使用`enemies`精灵图，并添加到之前声明的`enemies`组中：

```javascript
var enemies = this.enemies.create(X, Y, 'enemies');
```

## 活动 1：放置一个敌人

试试看，通过选择一个(X, Y)坐标并将这行代码放入`createEnemies()`方法中。你还需要在创建敌人后立即播放动画（所以这也要放在`createEnemies()`方法中）。
![declare](../media/5/enemy-one.PNG)
它看起来会像这样（也许位置不同 - 这个敌人被放置在(300, 100)）。

## 活动 2：放置更多敌人

现在我们来添加更多敌人。在相同的方法中添加几个新的敌人，但要小心，因为你在相同作用域中创建的每个敌人变量必须有不同的变量名。
![declare](../media/5/enemy-multiple.PNG)

## 活动 3：放置一个敌人块

现在你已经掌握了基础，让我们尝试一些更具挑战性的内容，按照下面显示的块状图案创建敌人。不过有一个要求：不要使用单独的行逐个声明每个敌人。

`提示：使用嵌套的for循环`
![declare](../media/5/enemy-block.PNG)
```