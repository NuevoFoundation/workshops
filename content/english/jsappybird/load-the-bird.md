---
title: "Load the bird image & change the screen text"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

First of all let's load Flappy and put it on the screen.

Add below command in the file [File: load-sprites.js]
       game.load.image('bird','assets/bird.png');

## Working Together

In the Replit window below, we started the code with the line `game.load.image('bird', 'assets/bird.png');`.

![alt text](../img/loadbird.png "image to add the bird in the file")

In your console you should see a Jsappy bird after you press **run**:

![alt text](../img/loadbird_output.png "bird image in the output")

## Change the screen text

Let's change the start screen text:

Add below command in the file [File: start-screen.js]
     var text = game.add.text(0, 0, "Press Space to Start", textOptions);
## Working Together

In the Replit window below, we started the code with the line `var text = game.add.text(0, 0, "Press Space to Start", textOptions);`.

![alt text](../img/startscreen.png "image to add the bird in the file")

In your console you should see `Press Space to Start` after you press **run**:

![alt text](../img/startscreen_output.png "bird image in the output")