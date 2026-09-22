---
title: "Activité 4 - Ajouter des ennemis"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 11
---

Maintenant, créons des ennemis pour que notre joueur puisse se battre ! Commençons par charger une feuille de sprites pour nos ennemis dans la scène 1, comme nous l’avons fait pour le joueur. Utilisez la même syntaxe que celle utilisée pour charger le joueur, mais donnez un nom différent, `assets/enemies.png` comme source de la feuille de sprites, avec une largeur et une hauteur de cadre de 16 :

<!--- ![load_sprite](../media/5/load_sprite.png) --->
<img src="../media/5/load_sprite.png" alt="load_sprite" style="width:950px;"/>

De plus, créez une autre animation dans la scène 1, de la même manière que vous avez créé l'animation du joueur (vous pouvez utiliser les mêmes arguments pour `frameRate` et `repeat`, mais souvenez-vous d’utiliser `enemies` pour les `frames` :

<!--- ![create_sprite](../media/5/create_sprite.png) --->
<img src="../media/5/create_sprite.png" alt="create_sprite" style="width:950px;"/>

Ce jeu utilisera de nombreux ennemis qui se ressemblent et se comportent de manière très similaire. Pour simplifier le codage, nous allons utiliser un concept de Phaser appelé un groupe pour contrôler tous nos ennemis simultanément. Un groupe est exactement ce qu’il semble être - un groupe d’objets. Nous pouvons référencer ce groupe lorsqu’un changement doit être appliqué à tous ses membres.

Nous déclarons notre groupe d’ennemis comme suit :

```javascript
this.enemies = this.physics.add.group();
```

Cela créera un groupe appelé `enemies`.

Maintenant, plaçons nos ennemis sur l’écran. Pour faciliter cela, nous utiliserons une autre méthode auxiliaire appelée `createEnemies()` (qui encore une fois, a déjà été créée pour vous, mais avec rien à l’intérieur) :

<!--- ![create_enemies](../media/5/create_enemies.png) --->
<img src="../media/5/create_enemies.png" alt="create_enemies" style="width:950px;"/>

Ensuite, appelez cette méthode dans la méthode `create()` au lieu de la méthode `update()` comme nous l’avons fait pour le mouvement du joueur, car nous ne voulons générer l’ennemi qu'une seule fois au début du jeu :

<!--- ![enemies_move](../media/5/enemies_move.png) --->
<img src="../media/5/enemies_move.png" alt="enemies_move" style="width:950px;"/>

La syntaxe pour créer une variable ennemie "enemy" aux coordonnées (X, Y), avec la feuille de sprites `enemies`, et dans le groupe `enemies` que vous avez déclaré plus tôt ressemble à ceci :

```javascript
var enemies = this.enemies.create(X, Y, 'enemies');
```

## Activité 1 : Placer un ennemi

Essayez en choisissant une coordonnée (X, Y) et en plaçant cette ligne de code dans la méthode createEnemies(). Vous devrez également jouer l’animation juste après avoir créé l’ennemi (elle devra donc être dans la méthode createEnemies()).
![declare](../media/5/enemy-one.PNG)
Cela devrait ressembler à ceci (avec potentiellement un emplacement différent - cet ennemi a été placé à (300, 100)).

## Activité 2 : Placer plusieurs ennemis

Ajoutons maintenant quelques ennemis supplémentaires. Ajoutez quelques nouveaux ennemis dans la même méthode, mais faites attention car chaque variable ennemie que vous créez dans le même scope doit avoir un nom de variable différent.
![declare](../media/5/enemy-multiple.PNG)

## Activité 3 : Placer un bloc d’ennemis

Maintenant que vous avez compris, essayons quelque chose d’un peu plus difficile : créez les ennemis selon ce modèle de bloc illustré ci-dessous. Cependant, il y a une contrainte : faites-le SANS déclarer chaque ennemi avec une ligne individuelle.

`ASTUCE : utilisez une boucle for imbriquée`
![declare](../media/5/enemy-block.PNG)