---
title: "加载鸟类图像并更改屏幕文本"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

首先，让我们加载 Flappy 并将其放在屏幕上。

在文件 [文件: load-sprites.js] 中添加以下命令：
      ```
      game.load.image('bird','assets/bird.png');
      ```
       
### 一起动手

在下面的 Replit 窗口中，我们以代码行 `game.load.image('bird', 'assets/bird.png');` 开始代码。

![alt text](../img/loadbird.png "在文件中添加鸟类的图像")

在你的控制台中，你应该在按下 **运行** 然后按下空格键时看到一个 Jsappy 鸟：

![alt text](../img/loadbird_output.png "输出中的鸟类图像")

## 更改屏幕上的文本

让我们更改开始屏幕上的文本：

在文件 [文件: start-screen.js] 中添加以下命令：
     var text = game.add.text(0, 0, "Press Space to Start", textOptions);
     
### 一起动手

在下面的 Replit 窗口中，我们以代码行 `var text = game.add.text(0, 0, "Press Space to Start", textOptions);` 开始代码。

![alt text](../img/startscreen.png "在文件中添加鸟类的图像")

在你的控制台中，你应该在按下 **运行** 后看到 `Press Space to Start`：

![alt text](../img/startscreen_output.png "输出中的鸟类图像")