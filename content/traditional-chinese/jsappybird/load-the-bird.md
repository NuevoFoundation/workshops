---
title: "載入小鳥圖片和更改畫面文字"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

首先，讓我們載入 Flappy (小鳥) 並將它放到螢幕上。

在檔案 [File: load-sprites.js] 中新增以下指令：
      ```
      game.load.image('bird','assets/bird.png');
       ```

### 一起來動手

在下面 Replit 的視窗中，我們以這行代碼作為開始：`game.load.image('bird', 'assets/bird.png');`。

![alt text](../img/loadbird.png "在檔案中新增小鳥的圖片")

當你按下 **運行 (run)** 並再按空白鍵後，你應該會在主控台中看到一隻 Jsappy 小鳥：

![alt text](../img/loadbird_output.png "輸出中的小鳥圖片")

## 更改螢幕文字

接下來讓我們更改開始畫面的文字：

在檔案 [File: start-screen.js] 中新增以下指令：
     var text = game.add.text(0, 0, "Press Space to Start", textOptions);

### 一起來動手

在下面 Replit 的視窗中，我們以這行代碼作為開始：`var text = game.add.text(0, 0, "Press Space to Start", textOptions);`。

![alt text](../img/startscreen.png "在檔案中新增小鳥的圖片")

當你按下 **運行 (run)** 後，你應該會在主控台中看到 `Press Space to Start`：

![alt text](../img/startscreen_output.png "輸出中的小鳥圖片")