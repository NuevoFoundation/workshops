```markdown
---
title: "活动 1 - 放置背景和玩家飞船"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 6
---

这个活动将分为两个部分：加载游戏的背景图片以及加载玩家最终将控制的飞船（目前飞船只会显示为一个静态图片，不会移动）。对于这两个任务，方法非常相似：我们首先将在场景 1 中上传图像到游戏中，然后在场景 2 中使它可见。可以将场景 1 理解为用于将图片上传到游戏中，而场景 2 则用于创建我们已经上传的内容。

## 第 1 部分：背景

让我们从背景开始。再次强调，为游戏添加图像，我们首先需要在场景 1 中上传它，然后再在场景 2 中使用它。首先在 `Scene1.js` 的 `preload()` 函数中完成第 1 步：

<!---![背景第 1 步](../media/3/step1.png) --->
<img src="../media/3/step1.png" alt="背景第 1 步" style="width:950px;"/>

现在，将背景图片加载到 `preload()` 中。

回顾一下：
* 完成这一行代码后将不会产生任何变化，因为你只是为未来使用加载了图像，而没有将其放置到任何位置。

* `imageID` 是你为图像命名的标识符。

* `imagePosition` 是图像的路径。
（例如，一张名为 `example.png` 的图片位于 `assets` 文件夹中，则 `imagePosition` 为 `assets/example.png`）

接下来，进入 `Scene2.js` 的 `create()` 函数中的第 1 步和第 2 步。每步需要一行代码，共两行：

<!---![背景部分](../media/3/background_section.png) --->
<img src="../media/3/background_section.png" alt="背景部分" style="width:950px;"/>

尝试加载页面并看看背景是否正常工作！你右侧的控制台应该显示以下内容：

<!---![添加背景图片后](../media/3/after_add_image.png) --->
<img src="../media/3/after_add_image.png" alt="添加背景图片后" style="width:950px;"/>

## 第 2 部分：玩家飞船

我们将几乎以同样的方式处理玩家飞船，但语法会略有不同，因为玩家的飞船是一个精灵图，而不是普通图片（为什么会这样将在下一活动中解释）。

对于这一部分，你将在 `Scene1.js` 的 `preload()` 函数中完成第 2 步：

<!---![玩家飞船第 2 步](../media/3/step2.png) --->
<img src="../media/3/step2.png" alt="玩家飞船第 2 步" style="width:950px;"/>

* `SpriteID` 和 `SpritePosition` 的工作方式与 `imageID` 和 `imagePosition` 相同。

* `FrameWidth` 设置为 32，而 `FrameHeight` 设置为 48。

接下来完成 `Scene2.js` 中的 `player 部分`：

<!--- ![玩家部分代码](../media/3/player_section.png) --->
<img src="../media/3/player_section.png" alt="玩家部分代码" style="width:950px;"/>

{{% notice hint %}}

如果 `player 部分`代码填写无误，但玩家飞船没有显示在屏幕上，请尝试更改 x 和 y 值，飞船可能超出屏幕范围！

{{% /notice %}}

添加玩家飞船后，你的控制台应该显示以下内容：

<!--- ![添加玩家飞船后](../media/3/after_add_player.png) --->
<img src="../media/3/after_add_player.png" alt="添加玩家飞船后" style="width:950px;"/>
```