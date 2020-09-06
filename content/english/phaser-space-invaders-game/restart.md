---
title: "Restart After Losing"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 7
---

We have made some pretty solid enemies, but now there's something wrong - they don't actually do anything to you! Specifically, they can't actually hurt you in any way. Let's change that. In the final game, there will be two ways you can get damaged: getting shot by an enemy laser, or directly touching the enemy. Let's start with the latter since it is a bit easier.

Collision is relatively easy in Phaser.

Let’s first start by importing an explosion sprite sheet and implementing its animation in Scene 1. This will be an explosion that plays when the player is destroyed!

Phaser has very convenient ways to handle collision between objects. We can simply add this line to the create() method in Scene 2
![collision](../media/collision-example.PNG)
What this line does is call the hurtPlayer() method when `this.player` and a member of the group `this.enemies` overlap. It will call hurtPLayer with `this.player` and `this.enemies` as arguments.

This line will make it so that the hurtPlayer() method is called when the player and an object in the enemy group touches each other with the player and enemy variable passed to the method as arguments. Now let’s create the hurtPlayer() method.

First we will destroy the enemy and disable the player with these lines:
![collision](../media/enemy-destroy.PNG)
This makes both the enemy and player disappear (the enemy has been deleted, but the player is just invisible and not interactable). Now let's make the player revive after a short pause (the pause allows the player some time to react to the damage). For this pause, we will another timer (like we did for changing the enemy direction). The syntax will be the same, but we will call the resetPlayer() function, have a shorter delay, and also not loop the timer.

Once you have the timer created, let's work on the resetPlayer() method. First, choose a respawn coordiate and change the player's (X, Y) value to this location (we can still change the ship's location like this because it still exists, it's just disabled). Then, enable the player with this line:
![collision](../media/player-enable.PNG)

Once you have implemented this, the collision should look like this:
![collision](../media/respawn-first.gif)

Now this is ok, but we can do a bit better with a few tweeks. We can first add an explosion where the enemy and player were. First, import the explosion spritesheet (the location is 'assets/explosion.png) and create a new animation (it shouldn't repeat and it should have a new attribute hideOnComplete: true).

Next, notice how the player's revival is a bit sudden. We will make this transition smoother with a tween after we spawn the player. A tween is essentially a tool that lets you animate a feature or characteristic of an object. For example, in this case, we are animating the player’s alpha (aka visibility). We will begin by setting the player’s alpha to 0.5 and then using the tween to animate it to full, normal visibility.

![collision](../media/tween.PNG)

Now we’re finally done! Now our player revival animation looks much cleaner!

///// `forgot to describe the explosion.js class`
