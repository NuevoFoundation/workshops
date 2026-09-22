---
title: "让小鸟跳跃并添加重力"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

### 我们应该对小鸟做什么？

让它跳跃吧：

在文件 [File: create-game.js] 中添加以下命令：
     `spaceKey.onDown.add(jump, this);`

### 一起动手

在下面的 Replit 窗口中，我们以 `spaceKey.onDown.add(jump, this);` 行开始了代码。

![alt text](../img/jump.png "添加跳跃功能的图片")

在控制台中，你应该能看到 Jsappy 小鸟在按下 **运行** 后跳跃：

![alt text](../img/jump_output.png "小鸟跳跃的图片")

## 添加重力
### 一起动手

在下面的 Replit 窗口中，我们以 `bird.body.gravity.y = 900;` 行开始了代码。

![alt text](../img/gravity.png "为小鸟添加重力的图片")

在控制台中，你应该能看到 JSappy 小鸟在按下 **运行** 后随着重力跳跃：

![alt text](../img/jump_output.png "带有重力跳跃的小鸟图片")