---
title: "活动 2 - 动画玩家的飞船"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 8
---

为了让我们的游戏更加生动，让我们让东西动起来！为我们创建的玩家飞船添加动画。

<!--- ![animation_part](../media/4/animation_part.png) --->
<img src="../media/4/animation_part.png" alt="animation_part" style="width:950px;"/>

<!--- ![play_animation](../media/4/play_animation.png) --->
<img src="../media/4/play_animation.png" alt="play_animation" style="width:950px;"/>

当你的飞船动画完成后，它应该看起来像这样。注意飞船引擎喷出的火焰！（尽管根据你选择的帧率，它可能会更快或者更慢）。

<!--- ![animation](../media/4/animation-ship.gif) --->
<img src="../media/4/animation-ship.gif" alt="animation" style="width:300px;"/>

我们将对动画进行最后一点改动——我们也将移动背景。将背景从普通图像更改为像这样的 `TileSprite`：

```javascript
this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
this.background.setOrigin(0, 0);
```

`TileSprites` 允许我们的背景移动，即使它不是一个精灵图，因为它是一种具有重复纹理的精灵类型，因此可以通过 Phaser 的无限画布进行滚动。

<!--- ![move_background](../media/4/move_background.png) --->
<img src="../media/4/move_background.png" alt="move_background" style="width:950px;"/>

现在试试吧！如果它正常工作，看起来就像飞船正在穿越太空飞行！

<!--- ![animation spaceship and background](../media/4/animation-flying.gif) --->
<img src="../media/4/animation-flying.gif" alt="animation spaceship and background" style="width:300px;"/>