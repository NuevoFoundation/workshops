```markdown
---
title: "启用用户输入"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 9
---

## 用户输入

输入是至关重要的，因为如果用户不能通过控件输入内容，我们的游戏就失去了作为游戏的意义。虽然 Phaser 支持多种不同的输入选项，但我们将重点介绍您将在《太空入侵者》游戏中使用的三种输入方式。

## 方向键

首先，介绍最重要的控制方式之一：方向键。首先，我们将创建一个变量，用来检测玩家按下方向键的动作。

```javascript
this.cursors = this.input.keyboard.createCursorKeys();
```

要使用这个变量，您需要在以下 4 个布尔语句中选择一个。

```javascript
this.cursors.up.isDown
this.cursors.down.isDown
this.cursors.left.isDown
this.cursors.right.isDown
```

如果相关的键被按下，这些布尔语句的值将为 true；如果没有被按下，则为 false。

## 空格键

要添加空格键输入，其过程与方向键非常相似。首先，我们将创建一个变量，用于检测空格键是否被按下。

```javascript
this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
```

然后，我们可以使用一个布尔语句来检查是否按下了这一输入。

```javascript
Phaser.Input.Keyboard.JustDown(this.spacebar)
```

## 单击

您也可以使用与添加方向键和空格键输入相同的过程来处理点击事件，但这里我们将介绍一种稍微不同的方法，因为它是您可能会在《太空入侵者》游戏中使用的内容。

```javascript
this.input.once("pointerdown", this.restart, this);
```

这行代码会在玩家点击时调用方法 `this.restart`。然而，这是一种单次使用的输入方式，这意味着玩家点击一次后，它将无法再次使用，除非再次调用。通常情况下，您会将其放在 `update()` 或辅助函数中，而不是放在 `create()` 中使用。
```