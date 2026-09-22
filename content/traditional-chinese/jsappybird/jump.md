---
title: "讓小鳥跳躍並添加重力"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

### 我們應該如何處理這隻小鳥？

讓我們讓牠跳躍：

在檔案 [File: create-game.js] 中添加以下指令：
     `spaceKey.onDown.add(jump, this);`

### 一起來完成

在下面的 Replit 視窗中，我們已經添加了這行程式碼：`spaceKey.onDown.add(jump, this);`。

![alt text](../img/jump.png "添加跳躍功能的圖片")

在你的控制台中，按下 **run** 之後，你應該會看到一隻 JSappy 小鳥跳躍的畫面：

![alt text](../img/jump_output.png "小鳥跳躍的圖片")

## 添加重力
### 一起來完成

在下面的 Replit 視窗中，我們已經添加了這行程式碼：`bird.body.gravity.y = 900;`。

![alt text](../img/gravity.png "為小鳥添加重力的圖片")

在你的控制台中，按下 **run** 後，你應該會看到一隻帶有重力作用的 JSappy 小鳥跳躍的畫面：

![alt text](../img/jump_output.png "帶有重力的小鳥跳躍的圖片")