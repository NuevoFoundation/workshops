---
title: "建立動畫"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 7
---

## 在 Phaser 中的動畫

動畫是通過快速連續播放一組圖片來實現的。當我們以很快的速度播放圖片時，我們的大腦會將其解讀為移動。某種程度上，你是在欺騙大腦，使其認為這組圖片是某個正在移動的物體。

![animation](../media/animation.png)

我們使用精靈圖集（spritesheets）來對想要製作動畫的東西進行動畫處理，因為我們可以通過瀏覽這些精靈圖集來創建動畫。要對精靈圖集進行動畫處理，需要完成以下兩個步驟。

第一步是為動畫創建「指令」

```javascript
this.anims.create({
    key: "dude_anim",
	frames: this.anims.generateFrameNumbers("dude"),
	frameRate: 10,
	repeat: -1
});
```

這會創建一個名為「dude_anim」的動畫，並應用於「dude」。`frameRate` 是動畫的播放速度。`repeat` 指的是動畫播放的次數，而負數表示動畫將無限循環播放。

接下來的步驟是告訴遊戲按照我們指令中的規範來播放動畫。這可以在 `create()` 中完成。

```javascript
this.dude.anims.play("dude_anim");
```

{{% notice note %}}

當你撰寫這行播放指令時，這段程式碼必須放在將「dude」放置到螢幕之後，因為程式碼是從上到下執行的。如果我們在將「dude」置入螢幕之前撰寫這行指令，電腦將不知道要對誰進行動畫處理。

{{% /notice %}}

試著為上一課中使用的「dude」添加動畫。隨意調整參數值並觀察它們如何改變最終的結果。
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorAnimation" target="_blank">啟動 Replit</a>