---
title: "Activity 1 - Place Background and Player Ship"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 6
---

This activity will have two parts: loading in the game's background and loading in the ship that the player will eventually control (it will just be an image that doesn't move for now). For both of these activities, the method will be very similar: we will first upload the image into the game on Scene 1 and then make it visible with Scene 2. You can think of Scene 1 as being used to upload the picture into the game and Scene 2 being used to create things that we've uploaded.

## Part 1: The Background

Let's start with the background. Again, to add images to the game, we will first upload them in Scene 1 and then put it in our game in Scene 2. First go to Step 1 in the `preload()` function in `Scene1.js`:

<!---![background part 1](../media/3/step1.png) --->
<img src="../media/3/step1.png" alt="background part 1" style="width:950px;"/>

Now, load the background image into preload().

For review,
* Nothing will happen after you complete this line because you are simply loading the image for future use, not placing it anywhere.

* `imageID` is the name you give to the image.

* `imagePosition` is the position of the image.
(a image called example.png in assets folder, imagePosition will be assets/example.png)

Next, go to Step 1 and Step 2 in the `create()` function in `Scene2.js`. Each step will require one line of code, creating 2 lines in total:

<!---![background_section](../media/3/background_section.png) --->
<img src="../media/3/background_section.png" alt="background_section" style="width:950px;"/>

Try loading the page and see if the background is working! Your console on the right should look like this:

<!---![after_add_image](../media/3/after_add_image.png) --->
<img src="../media/3/after_add_image.png" alt="background_after_add_image" style="width:950px;"/>

## Part 2: The Player Ship

We will do nearly the same thing with the player but with different syntax because the player's ship is a spritesheet instead of a normal image (you will see why in the next activity).

For this part you will be doing Step 2 in the `preload()` function in `Scene1.js`:

<!---![background player ship step2](../media/3/step2.png) --->
<img src="../media/3/step2.png" alt="background player ship step2" style="width:950px;"/>


* `SpriteID` and `SpritePosition` works the same with imageID and imagePosition.

* `FrameWidth` will be 32 and `FrameHeight` will be 48.

and the `player section` in `Scene2.js`:

<!--- ![player_section](../media/3/player_section.png) --->
<img src="../media/3/player_section.png" alt="background player_section" style="width:950px;"/>

{{% notice hint %}}

If the player section filled in correctly, but player does not shown up on the screen. Try to change x and y, the player may be out of screen!

{{% /notice %}}

After adding the player's ship, your console should look like this:

<!--- ![after_add_player](../media/3/after_add_player.png) --->
<img src="../media/3/after_add_player.png" alt="background after_add_player" style="width:950px;"/>
