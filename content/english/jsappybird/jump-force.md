---
title: "Make the bird jump with force & falling with rotation"
date: 2020-07-29T13:24:17-07:00
draft: false
weight: 4
---

Let's add force to the bird

Add the below command in the file [File: create-game.js]
    bird.body.velocity.y = -350;
    
{{% notice tip %}}

## Working Together

In the Replit window below, we started the code with the line `bird.body.velocity.y = -350;`.

![alt text](../img/jump_force.png "image to add gravity to the bird")

In your console you should see a JSappy bird jumping with force after you press **run**:

![alt text](../img/jump_output.png "bird jumping with gravity")

{{% /notice %}}

## Bonus Activity

Let's make the bird jump up and forwards:

Add below command in the file [File: create-game.js]
    bird.body.velocity.x = 100;

# Bird falling with rotation

Let's add rotation to the bird:

Add below command in the file [File: update-game.js]
    if (bird.angle < 50) {
       bird.angle += 1;
    }

## Comments:

`If` is a conditional block where we are checking the angle of the bird and if it's less than 50 we are executing the condition.
   -bird.angle+=1;

{{% notice tip %}}

## Working Together

In the Replit window below, we started the code with the line `bird.angle +=1;`.

![alt text](../img/rotate.png "image to add rotation to the bird")

In your console you should see a Jsappy bird rotating with an angle after you press **run**:

![alt text](../img/rotate_output.png "bird rotating")

{{% /notice %}}

