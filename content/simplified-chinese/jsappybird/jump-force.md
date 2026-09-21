---
title: "让鸟通过加速度跳跃并带有旋转下落"
date: 2020-07-29T13:24:17-07:00
draft: false
weight: 4
---

让我们给小鸟加上加速度

在文件 [File: create-game.js] 中添加以下指令：
    bird.body.velocity.y = -350;
    
{{% notice tip %}}

## 一起练习

在下面的 Replit 窗口中，我们已经用这行代码 `bird.body.velocity.y = -350;` 开始了。

![alt text](../img/jump_force.png "为小鸟添加重力的图片")

在你的控制台上，当你按下 **运行** 后，你应该看到一只带有跳跃力度的 JSappy 小鸟：

![alt text](../img/jump_output.png "小鸟带重力跳跃的效果")

{{% /notice %}}

## 额外活动

让我们让小鸟同时向上和向前跳跃：

在文件 [File: create-game.js] 中添加以下指令：
    bird.body.velocity.x = 100;

# 带旋转的鸟儿下落

让我们为小鸟添加旋转效果：

在文件 [File: update-game.js] 中添加以下指令：
    if (bird.angle < 50) {
       bird.angle += 1;
    }

## 解释：

`If` 是一个条件块，我们在这里检查小鸟的角度是否小于 50，如果小于的话，就执行这一条件。
   - bird.angle += 1;

{{% notice tip %}}

## 一起练习

在下面的 Replit 窗口中，我们已经用这行代码 `bird.angle +=1;` 开始了。

![alt text](../img/rotate.png "为小鸟添加旋转的图片")

在你的控制台上，当你按下 **运行** 后，你应该看到一只带有旋转角度的 JSappy 小鸟：

![alt text](../img/rotate_output.png "小鸟旋转的效果")

{{% /notice %}}