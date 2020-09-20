---
title: "Activity 9 - Adding Score, Levels, and Lives"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 16
---

Now, we will add some numbers to quantify our game! The easiest one to implement is the score. Create a text variable on the top left of the screen that displays `Score: ` and the value of a num variable that stores the player's score.

```javascript
this.scoreText = this.add.text(20, 10, "Score: " + this.score, {
    font: "25px Arial",
    fill: "white"
});
```

{{% notice hint %}}
this line print score variable at the top left of the screen.
* `20` and `10` is the x and y value
* `"score" + this.score` is the text value
{{% /notice %}}

you can fill this line to this location after you create score value:

![create_score](../media/10/create_score.png)

Just add a score variable and some text to the screen that displays "Score: 'score variable'". We will update the `hitEnemy()` function so that the player will earn points to their score if they defeat an enemy:

![hit_enemy_score](../media/10/hit_enemy_score.png)

Now we will add levels. We will initialize it the same way we did for the score, but this time we will print it to the middle of the screen instead of the top left:

![create_level](../media/10/create_level.png)

We will make levels pretty simple: whenever the player destroys all of the enemies, the next level will be reached, respawning all of the enemies. In order to make each level more difficult than the last, we will make the enemies shoot more often. To make the enemies shoot more often, let’s create a difficulty variable and use that when we make the enemies randomly shoot.

With this setup, by changing the difficulty variable, we change how often the enemies shoot. A lower difficulty will make the game harder because it will make the probability that an enemy shoots harder.

Now to make the level update when the player destroys all of the enemies, we will create a `levelClear()` method that will update the difficulty variable, reset the enemytimer, create new enemies (by calling createEnemies()), and update the level text on screen :

![level_clear](../media/10/level_clear.png)

Note how we have to create a new timer every time we create new enemies or else the enemies and timer might not be in sync. Also, we recommend decrementing the difficulty variable less when we reach 200 because the difficulty ramps up much quicker at that point.

Don't forgot to update levelClear() in `update()`:

![update_level_clear](../media/10/update_level_clear.png)

Now, we will add lives. We will again use a similar method to initialize it and put it on the top right of the screen:

![create_live](../media/10/create_live.png)

Now, in order to lose a life whenever you get hit, now let’s add this code to `hurtPlayer()`:

![hurt_player](../media/10/hurt_player.png)

However, in order for the lives to mean anything, let’s make it a Game Over when the player. We will start by making some text that’s invisible on the screen in the create() method:

![create_game_over](../media/10/create_game_over.png)

We will make this text visible when it is a game over. We will do this in the hurtPlayer() method:

![hurt_player](../media/10/hurt_player_restart.png)

This makes the character not spawn, show the game over text, and restart the game if the player clicks on the screen.

Only thing now is that we need to create the restart() method that this code refers to:

![restart_function](../media/10/restart_function.png)

This resets everything to start the game over

![gameplay](../media/10/game-play.gif)
