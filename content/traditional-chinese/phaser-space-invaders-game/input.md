---
title: "啟用使用者輸入"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 9
---

## 使用者輸入

輸入是至關重要的，因為如果沒有透過控制來讓使用者進行輸入，我們的遊戲就不算是一個遊戲。雖然 Phaser 支援多種不同的輸入選項，但我們將著重介紹三種會在《Space Invaders》遊戲中使用到的輸入方式。

## 方向鍵

首先，我們來看其中最重要的控制之一：方向鍵。首先，我們需要建立一個變數，它能檢測玩家何時按下方向鍵。

```javascript
this.cursors = this.input.keyboard.createCursorKeys();
```

要使用這個變數，你需要選擇以下 4 個布林語句之一。

```javascript
this.cursors.up.isDown
this.cursors.down.isDown
this.cursors.left.isDown
this.cursors.right.isDown
```

如果對應的按鍵被按下，這些布林語句的值就會是 `true`；如果按鍵沒有被按下，值則會是 `false`。

## 空格鍵

要加入空格鍵輸入，過程將與方向鍵非常相似。首先，我們將建立一個變數來檢測空格鍵是否被按下。

```javascript
this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
```

然後，我們可以使用布林語句來檢查該輸入是否已被按下。

```javascript
Phaser.Input.Keyboard.JustDown(this.spacebar)
```

## 單擊

你也可以使用與方向鍵和空格鍵類似的流程來設定單擊輸入，但我們在這裡會介紹一種稍微不同的方法，因為這方法在《Space Invaders》遊戲中可能會經常用到。

```javascript
this.input.once("pointerdown", this.restart, this);
```

這行程式碼會在玩家進行點擊時呼叫 `this.restart` 方法。不過，這是一種一次性使用的輸入，也就是說玩家點擊一次後，必須再次呼叫才能啟用輸入。通常，你會將這段程式碼放在 `update()` 或協助函式中，而不是放在 `create()` 中。