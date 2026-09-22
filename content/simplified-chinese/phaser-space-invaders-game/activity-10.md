---
title: "活动 10 - 添加一个标题屏幕"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 17
---

现在，我们将通过添加一个标题屏幕来利用场景 1 和场景 2 的分离，为我们的游戏画上圆满的句号！

这非常简单！我们首先需要将 `Scene 1` 的 `create()` 底部的 `startGame()` 行注释掉。我们将使用 `startGame()` 函数来启动游戏，而不是像之前那样自动启动：

<!--- ![startGame()](../media/11/comment_out.png)--->
<img src="../media/11/comment_out.png" alt="startGame 注释掉" style="width:950px;"/>

此时，控制台将恢复为一个黑色画布。为了创建标题屏幕，我们需要在场景 1 的 `start page` 部分导入背景屏幕和一些文本：

<!--- ![start_page](../media/11/start_page.png)--->
<img src="../media/11/start_page.png" alt="start_page" style="width:950px;"/>

你只能在 `create()` 中将背景创建为图像，因为图像只能在 `update()` 函数中移动！

对于文本，我们建议为标题文本和开始文本使用不同的 `字体` 和 `填充样式`。

接下来，我们将在玩家点击以启动游戏时调用 `startGame()` 方法：

<!--- ![on_click](../media/11/on_click.png)--->
<img src="../media/11/on_click.png" alt="on_click" style="width:950px;"/>

你的屏幕应该看起来如下所示：
![title_screen](../media/11/title_screen.gif)

## 恭喜！

你现在已经完成了所有课程，并创建了自己的太空侵略者游戏！好好享受你的作品吧！👏🏽👏🏽👏🏽