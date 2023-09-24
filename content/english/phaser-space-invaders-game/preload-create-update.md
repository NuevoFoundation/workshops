---
title: "Preload, Create, and Update"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 4
---

## The Preload, Create, and Update methods

So now let's look at our scenes, which will eventually hold the code for our game. If you scroll through, you will see that each scene has a constructor (because it is a class), and also three large methods: `preload()`, `create()`, `update()`. There are also a number of helper functions in Scene 2, but we will talk about the aforementioned three methods because they are integral to understanding Phaser.

With the way we've set up the scenes, preload() and create() are in Scene 1 and create() and update() are in Scene 2. These three functions are the main tools that any game using Phaser will utilize.
## Preload()

Let's start by describing preload() - this function essentially loads things into our game. This can be images, variables, and pretty much anything else that you want to define for your game to use. Things loaded up into the game with preload() are NOT actually used or put anywhere in the game until you use it later. You can think of this method like a storage space that is filled once before the game starts. Most things have to be put into preload() before they are used anywhere in the game.

## Create()

Next is create(). This function is also relatively straightforward - it runs once at the beginning of the game and allows the user to place the things that they've preloaded with preload() and create objects within our game such as animations, collision detectors, text, groups, and much more.

## Update()

Finally, the last function is update(). While preload() and create() run only once at the start of the game, update() runs constantly.

{{% notice info %}}
While playing games, you may have encountered the term "FPS". This refers to the "frames per second" of the game, or how often a new frame is updated on the screen. A frame is essentially a single call to the update() method. Phaser typically runs at 60 FPS, meaning the update() method is called 60 times in a single second!
{{% /notice %}}

The update() method is used in a variety of ways. One is for movement - if we assign an object to move a little bit in update(), then when we play the game, it will look like the object is moving smoothly because update() is being called so often that we can't see the breaks in between each movement. We can also use update() to constantly check whether an input has given. For example, if we want the player to be able to shoot when the spacebar is pressed, we can use an if-statement that checks for the spacebar in the update() function, so that the game is constantly checking for this.
