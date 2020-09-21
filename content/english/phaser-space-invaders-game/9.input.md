---
title: "Enabling User Inputs"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 9
---

# User Inputs

Inputs are essential because without the user inputting things with controls, our game isn't really much of a game. Although Phaser supports a variety of different input options, we are going to go over three that you will use in the Space Invaders Game.

# Arrow Keys

Let's start with one of the most important controls: arrow keys. First, we will create a variable that is able to detect when the player presses an arrow key.

```javascript
this.cursors = this.input.keyboard.createCursorKeys();
```

In order to use this variable, you must pick between 4 boolean statements.

```javascript
this.cursors.up.isDown
```

```javascript
this.cursors.down.isDown
```

```javascript
this.cursors.left.isDown
```

```javascript
this.cursors.right.isDown
```

Each of these boolean statements will equal true if the associated key is pressed and false if it is not.

# Space Bar

To add a space bar input, the process will be very similar to the arrow keys. First we will create a variable that detects the space bar being pressed.

```javascript
this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
```

Then we can use a boolean statement to check whether the input has been pressed.

```javascript
Phaser.Input.Keyboard.JustDown(this.spacebar)
```

# Single Click

You can also use the same process that we used to add arrow key and space bar inputs for clicks, but we will go over a slightly different method here because it is something you will likely use in the Space Invaders game.

```javascript
this.input.once("pointerdown", this.restart, this);
```

This line calls the method `this.restart` when the player clicks. However, this is a single-use input, meaning that after the player clicks once, it can no longer be used without being called again. You will typically use this somewhere within update() or the helper functions instead of create().
