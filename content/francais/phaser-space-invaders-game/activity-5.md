---
title: "Activité 5 - Faire Bouger les Ennemis"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 12
---

Pour l'instant, les ennemis sont un peu ennuyeux car ils restent immobiles. Faisons-les bouger un peu ! Notre objectif sera de les faire se déplacer de gauche à droite comme ceci :  
![move](../media/6/enemy-move.gif)

Commençons par faire en sorte que les ennemis se dirigent vers la gauche dès qu'ils sont créés. Nous pouvons le faire en ajoutant simplement une ligne de code :  

```javascript
enemy.body.velocity.x = -90;
```

Ajoutez cette ligne dans notre méthode `createEnemies()` :

<!--- ![move enemies](../media/6/move_enemies.png)--->
<img src="../media/6/move_enemies.png" alt="move enemies" style="width:950px;"/>

Mais si vous testez le code maintenant, vous verrez que les ennemis continuent simplement à aller vers la gauche à l'infini en raison du canevas infini de Phaser. Faisons en sorte qu'ils changent de direction avant de sortir de l'écran. Nous pouvons faire cela avec un minuteur, un outil qui nous permet d'appeler une fonction après une certaine période de temps. La fonction appelée par le minuteur changera la direction des ennemis. Nous pouvons également faire en sorte que le minuteur s'exécute de manière infinie pour qu'il continue d'exécuter la fonction après chaque intervalle de temps (c’est ce que nous allons faire ici). Placez le minuteur ci-dessous à la fin de la méthode `createEnemy()`.

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

Ce minuteur appelle continuellement la méthode `changeEnemyDirection()` après un certain intervalle de temps. Cependant, nous n'avons pas encore ajouté de contenu à cette méthode. Faisons-le maintenant : mettez le code dans la méthode `changeEnemyDirection()` qui permettra de changer la direction de chaque ennemi dans le groupe des ennemis (c’est l’une des raisons pour lesquelles nous avons créé un groupe !) :

<!--- ![change_direction](../media/6/change_direction.png)--->
<img src="../media/6/change_direction.png" alt="change_direction" style="width:950px;"/>

{{% notice hint %}}

Notez cependant que (si vous avez utilisé les mêmes valeurs de minuteur que nous), votre vaisseau se déplace à l'intérieur et à l'extérieur de l'écran. Au lieu de l'attacher à l'écran comme nous l'avons fait pour le vaisseau du joueur, nous allons simplement déplacer un peu la position de départ de l'ennemi vers la droite (car le minuteur a la durée correcte pour faire des allers-retours sur l'écran).

{{% /notice %}}