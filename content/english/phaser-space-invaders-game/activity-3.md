---
title: "Activity 3 - Add Keyboard Input to Move the Player"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 10
---

Now, let's allow our ship to move when the player uses the keyboard. The first step is to create a cursor attribute in the `create()` method in `Scene2.js`:

<!--- ![create_cursor_key](../media/4/create_cursor_key.png) --->
<img src="../media/4/create_cursor_key.png" alt="create_cursor_key" style="width:950px;"/>

The most efficient way to create movement is to create a helper function that uses the cursor attribute to check whether the keyboard has been pressed. We have already made this function for you, and it is called `movePlayer()`:

<!--- ![move_player_function](../media/4/move_player_function.png) --->
<img src="../media/4/move_player_function.png" alt="move_player_function" style="width:950px;"/>

We then move the player with this function. We can call this function in the `update()` method so that we check for movement during every update cycle (this has also already been done for you).

Now, go to the `movePlayer()` method, and write code that will check for movement and move the player accordingly.

{{% notice hint %}}

* We would recommend a movement speed of 200
* Use an if statement
* After you've made the if statements, you may find that your player is continuing to move even after you've stopped pressing on the keyboard. To fix this, think: when the player is not pressing the keyboard, what should the ship be doing?

{{% /notice %}}

Now test it out! You may notice one thing however; the player is able to move outside of the screen like this:

<!--- ![bounds](../media/4/player-off.gif) --->
<img src="../media/4/player-off.gif" alt="bounds" style="width:100px;"/>

This happens because Phaser uses on an unlimited canvas that exists even outside of the screen’s window. We can fix this by restricting the player to the screen with one line of code:

```javascript
this.player.body.setCollideWorldBounds(true); // player cannot go out of screen
```

Find the `create()` method of Scene 2:

<!--- ![set_bound](../media/4/set_bound.png) --->
<img src="../media/4/set_bound.png" alt="set_bound" style="width:950px;"/>

Now, that your player is bound within the screen, you should be able to move your ship like this:

<!--- ![animation spaceship and background](../media/4/player-move-example.gif)
 --->
<img src="../media/4/player-move-example.gif" alt="animation spaceship and background" style="width:300px;"/>
