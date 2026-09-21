---
title: "Activité 3 - Ajouter une Entrée Clavier pour Déplacer le Joueur"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 10
---

Maintenant, ajoutons la possibilité à notre vaisseau de se déplacer lorsque le joueur utilise le clavier. La première étape consiste à créer un attribut de curseur dans la méthode `create()` dans le fichier `Scene2.js` :

<!--- ![create_cursor_key](../media/4/create_cursor_key.png) --->
<img src="../media/4/create_cursor_key.png" alt="create_cursor_key" style="width:950px;"/>

La manière la plus efficace de créer un déplacement est de créer une fonction auxiliaire qui utilise l'attribut de curseur pour vérifier si une touche du clavier est enfoncée. Nous avons déjà créé cette fonction pour vous, elle s'appelle `movePlayer()` :

<!--- ![move_player_function](../media/4/move_player_function.png) --->
<img src="../media/4/move_player_function.png" alt="move_player_function" style="width:950px;"/>

Nous utilisons ensuite cette fonction pour déplacer le joueur. Nous pouvons appeler cette fonction dans la méthode `update()` afin de vérifier les mouvements à chaque cycle de mise à jour (cela a également déjà été fait pour vous).

Maintenant, rendez-vous dans la méthode `movePlayer()` et écrivez du code qui vérifiera les mouvements et déplacera le joueur en conséquence.

{{% notice hint %}}

* Nous vous recommandons une vitesse de déplacement de 200.
* Utilisez une instruction `if`.
* Après avoir écrit les instructions `if`, vous remarquerez peut-être que votre joueur continue de se déplacer même après avoir cessé d'appuyer sur le clavier. Pour résoudre ce problème, réfléchissez : lorsque le joueur n'appuie pas sur le clavier, que devrait faire le vaisseau ?

{{% /notice %}}

Testez maintenant votre code ! Vous remarquerez peut-être cependant une chose : le joueur peut sortir de l'écran comme ceci :

<!--- ![bounds](../media/4/player-off.gif) --->
<img src="../media/4/player-off.gif" alt="bounds" style="width:100px;"/>

Cela se produit parce que Phaser utilise une toile illimitée qui existe même en dehors de la fenêtre de l'écran. Nous pouvons résoudre ce problème en limitant le joueur à l'écran avec une ligne de code :

```javascript
this.player.body.setCollideWorldBounds(true); // empêche le joueur de sortir de l'écran
```

Trouvez la méthode `create()` de la Scène 2 :

<!--- ![set_bound](../media/4/set_bound.png) --->
<img src="../media/4/set_bound.png" alt="set_bound" style="width:950px;"/>

Maintenant que votre joueur est confiné à l'écran, vous devriez être en mesure de déplacer votre vaisseau comme ceci :

<!--- ![animation spaceship and background](../media/4/player-move-example.gif)
 --->
<img src="../media/4/player-move-example.gif" alt="animation du vaisseau et arrière-plan" style="width:300px;"/>