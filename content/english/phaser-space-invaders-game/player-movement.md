---
title: "Player Movement"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 4
---

# Animating the Player's Ship

To add some life to our game, let’s get things moving around! We will start with animating the player's ship. These are relatively easy to do in Phaser. The reason we used a sprite sheets for the player (and not simply an image like the background) is so that each image in the sheet is a frame of animation! The animation works by cycling through this “sheet” of sprites quickly to imitate movement.

Animations in Phaser are created as an attribute in JavaScript. The syntax is shown below.

![syntax](../media/animation-syntax.PNG)

It looks a bit complicated, but this syntax is actually quite simple. The `key` is essentially the name of the animation. `frames` will take in what sprite we're animating (in this case, the player). The `frameRate` is essentially how fast we wish the animation to play. And finally, `repeat` will assign how many times this animation will loop around (a negative number will make the animation play infinitely).

The process we will use to implement the player's animation is to declare this animation attribute (shown above) in the `create()` method of `Scene1.js` (NOTE: not the `preload()` function like we used in the last activity), and then we will play the animations by adding a line of code to Scene 2. You can think of it like creating the animation's instructions in Scene 1 and actually playing those instructions in Scene 2.

`///// we need to edit the location of this in the repl to make it easier to find`

Once your ship is animated, it should look like this. Notice the flames coming out of the ship's engine! (although it may be faster or slower depending on the frame rate that you picked)

![animation](../media/animation-ship.gif)

We will make one final touch to the animation - we will move the background as well. Even though it’s not a sprite sheet, we can still move because it is a tile sprite!

`///explanation?`

Now try it! If it’s working properly, then it will look like the ship is flying through space!

![animation](../media/animation-flying.gif)

Now, let's allow our ship to move when the player uses the keyboard. The first step is to create a cursor attribute in the `create()` method in `Scene2.js`. Phaser uses this to detect when the player uses the keyboard. The syntax looks like this:

![animation](../media/cursor-attribute.PNG)

Now, in order to check if the player is pressing the keyboard, we can call one of the attribute's methods like this:

![animation](../media/cursor-attribute.PNG)

This snippet will return the boolean `true` if the left arrow key is pressed and `false` if it is not. We can use the exact same line for the other arrow keys by replacing `left` with `right`, `up`, or `down`.

The most efficient way to create movement is to create a helper function that uses the cursor attribute to check whether the keyboard has been pressed. We have already made this function for you, and it is called `movePlayer()`. We then move the player with this function. We can call this function in the `update()`` method so that we check for movement during every update cycle (this has also already been done for you).

Now, go to the `movePlayer()` method, and write code that will check for movement and move the player accordingly.

`NOTE: we would recommend a movement speed of 200`

`HINT: use an if statement`

`WARNING: after you've made the if statements, you may find that your player is continuing to move even after you've stopped pressing on the keyboard. To fix this, think: when the player is not pressing the keyboard, what should the ship be doing?`

Now test it out! You may notice one thing however: the player is able to move outside of the screen like this:

![bounds](../media/player-off.gif)

This happens because Phaser uses on an unlimited canvas that exists even outside of the screen’s window. We can fix this by restricting the player to the screen with one line of code in the `create()` method of Scene 2:

![animation](../media/player-bounds.PNG)

Now, that your player is bound within the screen, you should be able to move your ship like this:

![animation](../media/player-move-example.gif)
