---
title: "Activity 8 - Allowing the Enemies to Shoot"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 15
---

Now, we will make the enemies shoot back at the player. Each enemy will shoot randomly, and the difficulty (which will later be escaleted with each level) is defined by how often they randomly shoot.

The enemy beam is rather similar to the player’s beam. We will again make a very similar `enemyBeam.js` file with nearly the same code as the `playerBeam.js` but with different variable names and numbers: 

<!--- ![enemy_bullet](../media/9/enemy_bullet.png)--->
<img src="../media/9/enemy_bullet.png" alt="enemy_bullet" style="width:950px;"/>

We will share sprite and animation for the player's beams and enemy's beams. However, during implementation, you will create a separate group for enemy projectiles:

<!--- ![enemy_projectiles](../media/9/enemy_projectiles.png)--->
<img src="../media/9/enemy_projectiles.png" alt="enemy_projectiles" style="width:950px;"/>

We also need to create a difficulty for this game (we will explain more about `difficulty` later, but for now, `difficulty` will make sure enemy will shoot):

<!--- ![add_diff](../media/9/add_diff.png)--->
<img src="../media/9/add_diff.png" alt="add_diff" style="width:950px;"/>

{{% notice %}}
* We recommend setting difficulty to 1000.
* If you set difficulty to 1000, the random number will pick from 1 to 1000. Only if the random number is 1, the enemy will shoot.
* The enemy will shoot continously if you try difficulty to 1.
{{% /notice %}}

To make the enemies shoot randomly, we will first create an `enemyShoot()` method:

<!--- ![enemyShoot](../media/9/enemyShoot.png)--->
<img src="../media/9/enemyShoot.png" alt="enemyShoot" style="width:950px;"/>

and call it in the `update()` method:

<!--- ![update_player_shoot](../media/9/update_player_shoot.png)--->
<img src="../media/9/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

that creates a new enemy projectile at a specified random rate.

Then, we need to update enemy projectiles. We need to make sure each beam is deleted.

You will have to update enemy beams in `enemyBeam.js` like you did in `playerBeam.js`:

<!--- ![update](../media/9/update.png)--->
<img src="../media/9/update.png" alt="update_player_shoot again" style="width:950px;"/>

You also need to update each enemy projectile in Scene 2, which is similar to how we update the projectiles:

<!--- ![update_projectiles](../media/9/update_enemy_projectiles.png)--->
<img src="../media/9/update_enemy_projectiles.png" alt="update_enemy_projectiles" style="width:950px;"/>

In the end, it gameplay should look something like this:
![enemyShoot](../media/9/enemy-shoot.gif)
