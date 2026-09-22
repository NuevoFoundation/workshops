---
title: "Activité 7 - Permettre au joueur de tirer"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 14
---

À présent, nous voulons ajouter l'une des parties les plus importantes du jeu : tirer sur les ennemis ! Bien que nous puissions vaincre les ennemis en entrant en collision avec eux, ce ne sera pas une bonne idée lorsque nous ajouterons des vies plus tard. Nous allons créer un effet de tir en créant un objet pour le rayon en utilisant un fichier JavaScript séparé (comme nous l'avons fait pour l'explosion).

Nous allons commencer par quelques étapes de base - charger une feuille de sprites et une animation dans la Scène 1 pour les rayons du joueur :

<!--- ![scene1_preload](../media/8/scene1_preload.png)--->
<img src="../media/8/scene1_preload.png" alt="scene1_preload" style="width:950px;"/>

L'emplacement de la feuille de sprites est `assets/beam.png` et la largeur et la hauteur du cadre sont de 32 :

<!--- ![scene1_create](../media/8/scene1_create.png)--->
<img src="../media/8/scene1_create.png" alt="scene1_create" style="width:950px;"/>

Maintenant, dans la Scène 2, nous allons faire quelque chose de similaire à ce que nous avons fait avec les ennemis et créer un groupe pour les rayons afin que nous puissions les manipuler facilement. Créez un groupe et nommez-le "projectiles" :

<!--- ![projectiles](../media/8/projectiles_step1.png)--->
<img src="../media/8/projectiles_step1.png" alt="projectiles" style="width:950px;"/>

Rendez-vous ensuite dans `playerBeam.js`:

<!--- ![constructor_xy](../media/8/constructor_xy.png)--->
<img src="../media/8/constructor_xy.png" alt="constructor_xy" style="width:950px;"/>

Notez que, comme `Explosion.js`, il étend Phaser.GameObjects.Sprite et utilise le mot-clé `super()` dans son constructeur. Complétez le code dans le constructeur. Cela nécessitera de jouer l'animation du rayon, d'activer le corps et de définir la vitesse en y du rayon à la vitesse que vous souhaitez qu'il atteigne.

Maintenant que nous avons les bases du rayon, permettons au joueur de le tirer lorsqu'il appuie sur la barre d'espace. De manière similaire à comment nous avons créé une variable pour gérer les touches fléchées pour le déplacement du joueur, nous allons créer une autre variable pour détecter lorsque le joueur appuie sur la barre d'espace :

<!--- ![control_space](../media/8/control_space.png)--->
<img src="../media/8/control_space.png" alt="control_space" style="width:950px;"/>

Nous allons maintenant créer une méthode `playerShoot()` :

<!--- ![player_shoot](../media/8/player_shoot.png)--->
<img src="../media/8/player_shoot.png" alt="player_shoot" style="width:950px;"/>

et l'appeler dans la méthode `update()` comme nous l'avons fait pour la méthode `movePlayer()` :

<!--- ![update_player_shoot](../media/8/update_player_shoot.png)--->
<img src="../media/8/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

La méthode `playerShoot` vérifiera si la barre d'espace a été pressée et tirera un rayon si c'est le cas. "Tirer un rayon", dans ce cas, signifie créer un objet `playerBeam` et l'ajouter au groupe projectiles si le joueur est actif (encore en vie).

Testez cela maintenant ! Cependant, deux grands problèmes subsistent - le rayon ne fait aucun mal à l'ennemi et continue aussi indéfiniment à cause du canevas infini de Phaser.
![blast](../media/8/blast-first.gif)

Corrigeons d'abord ce deuxième problème. Bien que ce problème n'affecte pas directement la jouabilité, il pourrait potentiellement poser problème car si le rayon continue d'exister hors de l'écran, cela signifie que l'ordinateur devra gaspiller des ressources pour le gérer. Si trop de rayons doivent être pris en charge par l'ordinateur, cela pourrait potentiellement provoquer des ralentissements ! Ce que nous allons faire, c'est utiliser une fonction `update` dans `playerBeam.js` qui détruira le rayon s’il dépasse l’écran.

La seule façon de rendre ces fonctions `update` fonctionnelles, cependant, est de les appeler dans la fonction `update` de notre Scène 2 comme ceci :

```javascript
for(var i = 0; i < this.projectiles.getChildren().length; i++) {
    var beam = this.projectiles.getChildren()[i];
    beam.update();
}
```

Vous pouvez l'insérer à cet emplacement :

<!--- ![update_projectiles](../media/8/update_projectiles.png)--->
<img src="../media/8/update_projectiles.png" alt="update_projectiles" style="width:950px;"/>

Pour tester cela, nous pouvons simplement changer la valeur de hauteur à laquelle le rayon se détruit lui-même pour qu'elle soit visible sur l'écran :

<!--- ![player_bullet_update](../media/8/player_bullet_update.png)--->
<img src="../media/8/player_bullet_update.png" alt="player_bullet_update" style="width:950px;"/>

Le code fonctionne correctement si le rayon disparaît à la hauteur spécifiée. Après avoir confirmé que le code fonctionne, nous pouvons simplement changer cette valeur pour qu'elle soit légèrement hors écran.

![blast](../media/8/blast-disappear.gif)

Dans ce gif, vous pouvez voir que le rayon disparaît une fois qu'il atteint une hauteur spécifiée (nous avons utilisé 50). Encore une fois, après avoir confirmé que cela fonctionne, nous pouvons simplement changer le nombre 50 pour un qui est légèrement hors écran (comme 10) et nous savons que le code fonctionne probablement toujours de la même manière.

Maintenant, faisons en sorte que l'ennemi soit détruit s'il est touché par un rayon ! Nous pouvons le faire de manière similaire à la détection de chevauchement que nous avons utilisée pour vérifier si le joueur touchait l'ennemi :

<!--- ![overlap](../media/8/projectiles_step2.png)--->
<img src="../media/8/projectiles_step2.png" alt="overlap projectiles" style="width:950px;"/>

Créez une ligne de code en utilisant la même syntaxe que celle que nous avons utilisée pour détecter si le joueur et l'ennemi sont entrés en collision, mais cette fois, vérifiez si l'ennemi et le rayon sont entrés en collision.

Cependant, nous ne pouvons pas utiliser la méthode `hurtPlayer()` car le joueur n