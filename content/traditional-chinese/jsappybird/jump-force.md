---
title: "讓鳥以力跳躍並加入旋轉的下落效果"
date: 2020-07-29T13:24:17-07:00
draft: false
weight: 4
---

讓我們為鳥加入跳躍的力量

在以下檔案中加入以下命令 [檔案: create-game.js]
    bird.body.velocity.y = -350;

{{% notice tip %}}

## 一起動手

在下面的 Replit 視窗中，我們已經使用了程式行 `bird.body.velocity.y = -350;` 開始。

![alt text](../img/jump_force.png "為鳥添加重力的圖片")

在你的控制台中，當你按下 **run** 後，你應該會看到一隻 JSappy 鳥以力量跳躍：

![alt text](../img/jump_output.png "鳥跳躍的重力效果")

{{% /notice %}}

## 額外活動

讓我們使鳥向上並向前跳躍：

在以下檔案中加入以下命令 [檔案: create-game.js]
    bird.body.velocity.x = 100;

# 鳥的下落和旋轉

讓我們為鳥加入旋轉效果：

在以下檔案中加入以下命令 [檔案: update-game.js]
    if (bird.angle < 50) {
       bird.angle += 1;
    }

## 註解：

`If` 是一個條件區塊，我們使用它來檢查鳥的角度是否小於 50，如果條件符合，我們就執行以下動作。
   - bird.angle += 1;

{{% notice tip %}}

## 一起動手

在下面的 Replit 視窗中，我們已經使用了程式行 `bird.angle += 1;` 開始。

![alt text](../img/rotate.png "為鳥添加旋轉的圖片")

在你的控制台中，當你按下 **run** 後，你應該會看到一隻 JSappy 鳥以角度旋轉：

![alt text](../img/rotate_output.png "鳥旋轉的效果")

{{% /notice %}}