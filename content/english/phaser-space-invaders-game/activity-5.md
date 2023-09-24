---
title: "Activity 5 - Making the Enemies Move"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 12
---

At the moment, the enemies are a bit boring because they’re just sitting still. Let’s make them move a little bit! Our goal will be to make them move from left to right like this:
![move](../media/6/enemy-move.gif)

Let’s start by making the enemies move to the left once they’re created. We can do this by simply adding one line of code:

```javascript
enemy.body.velocity.x = -90;
```

Place in our createEnemies() method:

<!--- ![move enemies](../media/6/move_enemies.png)--->
<img src="../media/6/move_enemies.png" alt="move enemies" style="width:950px;"/>

But if you test out the code now, we can see that the enemies just keep going to the left infinitely because of Phaser’s infinite canvas. Let’s make them change direction before they go out of the screen. We can do this with a timer, a tool that lets us call a function after a certain period of time. The function that the timer calls will change the enemy's direction. We can also make the timer run infinitely so that it continues to run the function after each time interval (which we are going to do here). Put the below timer at the end of the `createEnemy()` method.

```javascript
this.enemyTimer = this.time.addEvent({
    delay: 1500,
    callback: this.changeEnemyDirection,
    callbackScope: this,
    loop: true
});
```

<!--- ![timer_function](../media/6/timer_function.png)--->
<img src="../media/6/timer_function.png" alt="timer_function" style="width:950px;"/>

This is a timer that continuously calls the `changeEnemyDirection()` method after a certain time interval. However, we haven’t put any content in it yet. Let's do that now: put code in the `changeEnemyDirection()` method that will change the direction of every enemy in the enemies group (this is one of the reasons we made a group!):

<!--- ![change_direction](../media/6/change_direction.png)--->
<img src="../media/6/change_direction.png" alt="change_direction" style="width:950px;"/>

{{% notice hint %}}

Notice how, however, that (if you used the same timer values we did), that your ship is moving in and out of the screen. Instead of binding it to the screen like we did for the player's ship, we will simply move the enemy's starting position a bit to the right (because the timer has the correct amount of time to go back and forth the screen).

{{% /notice %}}
