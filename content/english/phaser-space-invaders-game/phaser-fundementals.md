---
title: "Phaser Fundamentals"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 3
---

## Part 1: The Config Variable

Let's go over some of the fundamentals of Phaser, a game framework that uses HTML and JavaScript to create games for the web! This is what you'll be learning to use in this workshop.

Go to `game.js`. Every Phaser game will start out off with a variable that stores the configurations for the game (often named config like we have here).

```javascript
var config = {
  type: Phaser.AUTO,
  width: 512,
  height: 544,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],

	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
};
```

In this variable, you'll notice that we have defined a variety of characteristics of our game like the width, the height, and background color. We have also defined the scenes that we will be using (more info on scenes a bit later). You can also create a game without scenes and simply put all of the code into the `game.js` file.

You'll also notice that we define the physics of the game in Config as well. In game design, physics is one of the most essential aspects that define the "feel" of a game. For example, the bouncy physics in Mario distinctively makes it "feel like Mario." For our game, you can see that we use "arcade" physics, a type of physics in Phaser that is very simple to use. Also notice that in our Physics, we define Gravity to be 0, because our game is a Space Shooter so we don't need any gravity pulling our characters down.

At the end of `game.js`, you can see that we pass the config variable to a game variable, something that is also almost always needed in a Phaser game.

## Part 2: Scenes

Now, let's finally talk about scenes a little bit. A scene is essentially a game state that the user is operating within. It's best understood within an example:

Let's take the famous game franchise, Pokemon. When you play, you'll often be roaming around the world. When you encounter a trainer or a wild Pokemon in the tall grass, you enter a different scene so that you can battle. After you finish the battle, you may pull up your map to see where you need to go - this is also opening a different scene. These three scenes function completely different and have their own mechanics attached. When you log out of the map, the game switches scenes to the world where you roam as the player. And once you get into battle, you switch to the battle scene. You can see how creating these three game states would be completely different - the battle requires a menu, the world requires a 2D space and a player, and the map is essentially an interactive chart. We separate these into scenes because they all have to be created completely differently.

You can think of the user as moving amongst scenes as they play the game. They only use one scene at a time, and each one is almost like its own mini-game (although there will usually be one main one that isn't quite "mini").

{{% notice info %}}

Technically, we could use a single scene for all three of these game states if we wanted to (how you divide a game into scenes will be up to the game designer). It is physically possible to do so. However, creating separate scenes will make the coding significantly easier (in this case, I can't even imagine how you could cram them into one without simply placing the visuals of one on top of another).
{{% /notice %}}

Here is another example of a very common way to use scenes: a title screen.

![Outliers game title screen](../media/title-game.png)

The first scene displays simply a title screen that often contains things like settings, loading a save file, and more. Once the player clicks play, they are switched to a different scene, where they'll play the game within.

This is exactly what we're going to be doing. Scene 1 will contain a title screen, and Scene 2 will contain our actual gameplay. Thus, Scene 2 will have the majority of the code, and it'll be where you will do most if your work.

# Part 3: Infinite Canvas

When you start up the game on the repl.it, you can see a blank canvas on your screen where you will eventually place things onto. However, you are only seeing a part of the total canvas - actually, the canvas is infinite in all directions. The canvas behaves the same way in all sections - this means that objects can move and be placed into parts of the canvas that the user cannot see. This will become important because for our game, we don't want things really going out of the screen very much, so we need to bind our objects within the screen or delete them if they exit.
