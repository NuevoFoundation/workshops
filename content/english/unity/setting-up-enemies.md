---
title: "Setting up the Enemies"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 7
---

Now that Nuvi is all set and ready to move, let's have them welcome aliens into the universe! Locate the alien png file called "alien_pink" from the Drawings folder. Then, drag and drop the alien_pink into the hierarchy. Rescale the enemy to match Nuvi's size as it is too large.

<img src="../img/6_nuvi_and_enemy.png" alt="Enemy is scaled to match Nuvi's size" width="400"/>

Now, if we were to run the game, Nuvi runs on top of the pink alien. We want Nuvi to collide with it. To do this, add a BoxCollider2D on the alien like we did with Nuvi and resize it if necessary. Now, if we were to run the game again, Nuvi runs into the alien instead of over it!
