---
title: "活动 3 - 添加键盘输入以移动玩家"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 10
---

现在，让我们的飞船在玩家使用键盘时能够移动。第一步是在 `Scene2.js` 的 `create()` 方法中创建一个光标属性：

<!--- ![create_cursor_key](../media/4/create_cursor_key.png) --->
<img src="../media/4/create_cursor_key.png" alt="create_cursor_key" style="width:950px;"/>

实现移动的最有效方法是创建一个助手函数，该函数使用光标属性来检测键盘是否被按下。我们已经为你编写好了这个函数，名为 `movePlayer()`：

<!--- ![move_player_function](../media/4/move_player_function.png) --->
<img src="../media/4/move_player_function.png" alt="move_player_function" style="width:950px;"/>

然后，我们可以使用这个函数移动玩家。在每个更新周期中，我们可以在 `update()` 方法中调用这个函数，以检查是否需要移动（这部分代码也已经为你完成）。

现在，进入 `movePlayer()` 方法，编写代码来检测移动，并根据需要移动玩家。

{{% notice hint %}}

* 我们建议使用 200 的移动速度
* 使用 `if` 语句
* 你可能会发现，玩家在停止按键之后，飞船仍然继续移动。要修复这一问题，请思考：当玩家没有按下键盘时，飞船应该在做什么？

{{% /notice %}}

现在，测试一下吧！不过，你可能会注意到一件事：玩家可以移出屏幕，比如这样：

<!--- ![bounds](../media/4/player-off.gif) --->
<img src="../media/4/player-off.gif" alt="bounds" style="width:100px;"/>

发生这种情况是因为 Phaser 使用了一个无限的画布，即使超出屏幕窗口也是如此。我们可以通过一行代码将玩家的活动限制在屏幕内来修复这个问题：

```javascript
this.player.body.setCollideWorldBounds(true); // 玩家无法移出屏幕
```

找到 Scene 2 的 `create()` 方法：

<!--- ![set_bound](../media/4/set_bound.png) --->
<img src="../media/4/set_bound.png" alt="set_bound" style="width:950px;"/>

现在，你的玩家被限制在屏幕内，你应该可以像这样移动你的飞船了：

<!--- ![animation spaceship and background](../media/4/player-move-example.gif)
 --->
<img src="../media/4/player-move-example.gif" alt="animation spaceship and background" style="width:300px;"/>