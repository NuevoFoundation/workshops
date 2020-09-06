---
title: "Letting the Player Shoot"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 8
---

Now, we we want to add one of the most important parts of the game - shooting the enemies! We will do this in an interesting way by creating the object using a separate JavaScript file.

We will start with some basic stuff - loading a spritesheet and animation in Scene 1

///// show code

Now in Scene 2, we will do something similar to what we did with the enemies and create a group for the projectiles so that we can easily manipulate them.

//// show code

Now, let’s create a new file called PlayerBullet.js. The basic format will look like this:

/// show code

Notice that it extends Phaser.GameObjects.Sprite.This will allow us to use this Class’s constructor through inheritance. Our Projectile object’s parameter is simply just the scene - later you will see that we pass Scene 2 itself. We can use this scene to access everything within it like the player’s location:

//// show code in constructor

Now that we have the basics of the projectile down, let’s allow the player to shoot it when they click the spacebar. Similar to how we created a variable to process pointer keys for player movement, we will create another variable to process when the player presses the space bar
//// show code

We will now create a playerShoot() method and call it in the update() method. The playerShoot method will check if the spacebar has been pressed and fire a projectile if it has

///// show playerShoot() method

This simply creates a playerBullet object and adds it to the projectile group if the player is active (still alive).

Test it out now! You will see two things however - the bullet doesn’t harm the enemy at all yet, and the bullet also keeps going forever because of phaser’s infinite canvas. Let’s fix that second issue first. What we will do is utilize an update function in playerBullet.js that will destroy the bullet if it goes off screen. Even though we can’t actually see the bullet when it goes off screen, meaning it probably won’t ever actually effect the game, too many bullets traveling off screen can make the game slower or lag because the amount of objects for the computer to take care of could potentially build up.

//// new code in playerBullet

The only way to make these update functions work, however, is to call them in the update function in our Scene 2 like this:

//// scene2 update code

Now, to test this, we can simply change the height value that the bullet self-destructs to one that is on the screen (like x). The code is working correctly if the bullet disappears at the specific height. Now, we can simply change this value back to what it was before (which was a height value that is above the screen).

Now, lets make the enemy be destroyed if they’re hit with a projectile! We can actually just do this with a similar overlap detection that we did to check if the player is touching the enemy.

//// show bullet overlap code

However, we can’t use the hurtPlayer() method because the player isn’t being hurt and we don’t want the player to respawn when the enemy is hit. We will create a new function called hitEnemy().

//// show hit enemy method

This method simply creates an explosion at the enemy’s location and removes the projectile and the enemy.
