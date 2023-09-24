---
title: "Make the bird jump & add gravity"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

### What should we do with the bird?

Let's make him jump:

Add below command in the file [File: create-game.js]
     spaceKey.onDown.add(jump, this);

### Working Together

In the Replit window below, we started the code with the line `spaceKey.onDown.add(jump, this);`.

![alt text](../img/jump.png "image to add jump down")

In your console you should see a Jsappy bird jumping after you press **run**:

![alt text](../img/jump_output.png "Image of jumping bird")

## Add gravity
### Working Together

In the Replit window below, we started the code with the line `bird.body.gravity.y = 900;`.

![alt text](../img/gravity.png "image to add gravity to the bird")

In your console you should see a JSappy bird jumping with gravity after you press **run**:

![alt text](../img/jump_output.png "bird jumping with gravity")

