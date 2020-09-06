---
title: "Letting the Enemies Shoot"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 9
---

The enemy bullet is rather similar to the player’s bullet. We will again make a very similar enemyBullet.js file with nearly the same code as the playerBullet.js but with different variable names and numbers.

/// show enemyBullet.js

However, instead of pressing the spacebar, each enemy will shoot randomly. We will create an enemyShoot() method (that is called in the update() method), that looks like this:

//// show code

This code makes each random enemy shoot in a 1 out of 50 chance (2%)
