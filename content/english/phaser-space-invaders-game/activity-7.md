---
title: "Activity 7 - Allowing the Player to Shoot"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 14
---

Now, we we want to add one of the most important parts of the game - shooting the enemies! Although we can defeat enemies by crashing into them, this won't be a good idea once we add lives later. We will create a shooting effect by creating an object for the beam using a separate JavaScript file (like we did for the explosion).

We will start with some basic stuff - loading a spritesheet and animation in Scene 1 for the player's beams:

<!--- ![scene1_preload](../media/8/scene1_preload.png)--->
<img src="../media/8/scene1_preload.png" alt="scene1_preload" style="width:950px;"/>

The location of the spritesheet is `assets/beam.png` and the frame width and height is 32:

<!--- ![scene1_create](../media/8/scene1_create.png)--->
<img src="../media/8/scene1_create.png" alt="scene1_create" style="width:950px;"/>

Now in Scene 2, we will do something similar to what we did with the enemies and create a group for the beams so that we can easily manipulate them. Create a group and name it "projectiles":

<!--- ![projectiles](../media/8/projectiles_step1.png)--->
<img src="../media/8/projectiles_step1.png" alt="projectiles" style="width:950px;"/>

Now go to `playerBeam.js`：

<!--- ![constructor_xy](../media/8/constructor_xy.png)--->
<img src="../media/8/constructor_xy.png" alt="constructor_xy" style="width:950px;"/>

Notice that, like `Explosion.js`, it extends Phaser.GameObjects.Sprite and uses the `super()` keyword in its constructor. Complete the code in the constructor. This will require that you play the beam's animation, enable the body, and set the beam's y-velocity to whatever speed you want your beam to travel.

Now that we have the basics of the beam down, let’s allow the player to shoot it when they click the spacebar. Similar to how we created a variable to process pointer keys for player movement, we will create another variable to process when the player presses the space bar:

<!--- ![control_space](../media/8/control_space.png)--->
<img src="../media/8/control_space.png" alt="control_space" style="width:950px;"/>

We will now create a playerShoot() method:

<!--- ![player_shoot](../media/8/player_shoot.png)--->
<img src="../media/8/player_shoot.png" alt="player_shoot" style="width:950px;"/>

and call it in the update() method like we did for the movePlayer():

<!--- ![update_player_shoot](../media/8/update_player_shoot.png)--->
<img src="../media/8/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

The playerShoot method will check if the spacebar has been pressed and fire a beam if it has. "Firing a beam", in this case, means creating a playerBeam object and adding it to the projectiles group if the player is active (still alive).

Test it out now! There are two big issues here however - the beam doesn’t harm the enemy at all and the beam also keeps going forever because of phaser’s infinite canvas.
![blast](../media/8/blast-first.gif)

Let’s fix that second issue first. Although this issue doesn't directly affect the gameplay, it could potentially be an issue because if the beam still exists off screen, then that means the computer has to waste time tending to it. If there are too many beams for the computer to take care of, it could potentially cause lag! What we will do is utilize an update function in playerBeam.js that will destroy the beam if it goes off screen.

The only way to make these update functions work, however, is to call them in the update function in our Scene 2 like this:

```javascript
for(var i = 0; i < this.projectiles.getChildren().length; i++) {
    var beam = this.projectiles.getChildren()[i];
    beam.update();
}
```

You can fill it into this location:

<!--- ![update_projectiles](../media/8/update_projectiles.png)--->
<img src="../media/8/update_projectiles.png" alt="update_projectiles" style="width:950px;"/>


Now, to test this, we can simply change the height value that the beam self-destructs to one that is on the screen:

<!--- ![player_bullet_update](../media/8/player_bullet_update.png)--->
<img src="../media/8/player_bullet_update.png" alt="player_bullet_update" style="width:950px;"/>

The code is working correctly if the beam disappears at the specific height. After we test that the code works, we can simply change this value to one that is above the screen.

![blast](../media/8/blast-disappear.gif)

You can see in this gif that the beam is disappearing once it hits a specified height (we used 50). Again, after confirming that it works, we can simply change the number 50 to one that is a bit off screen (like 10) and we know that the code is probably still working the same.

Now, lets make the enemy be destroyed if they’re hit with a beam! We can actually just do this with a similar overlap detection that we did to check if the player is touching the enemy:

<!--- ![overlap](../media/8/projectiles_step2.png)--->
<img src="../media/8/projectiles_step2.png" alt="overlap projectiles" style="width:950px;"/>

Create a line of code that uses the same syntax as the line we used for detecting whether the player and enemy have collided, but this time check if the enemy and beam have collided.

However, we can’t use the hurtPlayer() method because the player isn’t being hurt and we don’t want the player to respawn when the enemy is hit. We will create a new function called `hitEnemy()`:

<!--- ![hit_enemy](../media/8/hit_enemy.png)--->
<img src="../media/8/hit_enemy.png" alt="hit_enemy" style="width:950px;"/>

Add code to the `hitEnemy()` so that it creates an explosion at the enemy’s location and removes the beam and the enemy.

At the end, the shooting should look like this!
![blast](../media/8/blast-final.gif)
