---
title: "Activity 2 - Animating the Player's Ship"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 8
---

To add some life to our game, let’s get things moving around! Animate the player we have created.

<!--- ![animation_part](../media/4/animation_part.png) --->
<img src="../media/4/animation_part.png" alt="animation_part" style="width:950px;"/>

<!--- ![play_animation](../media/4/play_animation.png) --->
<img src="../media/4/play_animation.png" alt="play_animation" style="width:950px;"/>

Once your ship is animated, it should look like this. Notice the flames coming out of the ship's engine! (Although it may be faster or slower depending on the frame rate that you picked).

<!--- ![animation](../media/4/animation-ship.gif) --->
<img src="../media/4/animation-ship.gif" alt="animation" style="width:300px;"/>

We will make one final touch to the animation - we will move the background as well. Change the background from a regular image to a TileSprite like this:

```javascript
this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
this.background.setOrigin(0, 0);
```

`TileSprites` will allow our background to move even though it's not a spritesheet because it is a type of Sprite with repeating texture, so it can be scrolled through Phaser's infinite Canvas.

<!--- ![move_background](../media/4/move_background.png) --->
<img src="../media/4/move_background.png" alt="move_background" style="width:950px;"/>

Now try it! If it’s working properly, then it will look like the ship is flying through space!

<!--- ![animation spaceship and background](../media/4/animation-flying.gif) --->
<img src="../media/4/animation-flying.gif" alt="animation spaceship and background" style="width:300px;"/>
