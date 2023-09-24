---
title: "Activity 10 - Adding a Title Screen"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 17
---

Now, we will put our separation of scene 1 and scene 2 to good use by adding a title screen to finish off our game!

This is very simple! we will first comment out `startGame()` line from the bottom of `create()` in `Scene 1`. We are going to use `startGame()` function to start game instead of start automatically as before:

<!--- ![startGame()](../media/11/comment_out.png)--->
<img src="../media/11/comment_out.png" alt="startGame comment out" style="width:950px;"/>

The console will go back to a black canvas. To make a title screen, we need to import the background screen and some text in `start page` section from scene 1:

<!--- ![start_page](../media/11/start_page.png)--->
<img src="../media/11/start_page.png" alt="start_page" style="width:950px;"/>

You can only create background as an image in `create()`, because images can only be moved in `update()` functions!

For the texts, We would recommend different `font` and `fills` for title text and start text.

Now, we will call the `startGame()` method only if the player clicks to start the game:

<!--- ![on_click](../media/11/on_click.png)--->
<img src="../media/11/on_click.png" alt="on_click" style="width:950px;"/>

Your screen should look similar like this:
![title_screen](../media/11/title_screen.gif)

## Congratulations!

You have now compeleted all the lessons and created your own space invader game! Have fun with it! 👏🏽👏🏽👏🏽
