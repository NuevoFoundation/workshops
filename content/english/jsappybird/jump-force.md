---
title: "Make the bird jump with force"
date: 2020-07-29T13:24:17-07:00
draft: false
weight: 8
---

Let's add force to the bird

Add the below command in the file [File: create-game.js]
    bird.body.velocity.y = -350;


## Working Together

In the repl.it window below, we started the code with the line `bird.body.velocity.y = -350;`.

![alt text](../img/jump_force.png "image to add gravity to the bird")

In your console you should see a Jsappy bird jumping with force after you press **run**:

![alt text](../img/jump_output.png "bird jumping with gravity")



### Bonus Activity

Let's make the bird jump up and forwards:

Add below command in the file [File: create-game.js]
    bird.body.velocity.x = 100;
