---
title: "Bird falling with Rotation"
date: 2020-07-29T13:24:17-07:00
draft: false
weight: 9
---

Let's add rotation to the bird:

Add below command in the file [File: update-game.js]
    if (bird.angle < 50) {
       bird.angle += 1;
    }

## Comments:

`If` is a conditional block where we are checking the angle of the bird and if it's less than 50 we are executing the condition.
   -bird.angle+=1;

## Working Together

In the repl.it window below, we started the code with the line `bird.angle+=1;`.

![alt text](../../img/rotate.png "image to add rotation to the bird")

 In  your console you should see a Jsappy bird  roatting with an angle after you press **run**:

![alt text](../../img/rotate_output.png "bird rotating")




