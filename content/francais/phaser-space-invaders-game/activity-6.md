---
title: "Activité 6 - Relancer le Joueur après sa Destruction"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 13
---

Nous avons créé des ennemis plutôt solides, mais il y a un problème : ils ne vous font rien ! Plus précisément, ils ne peuvent pas vous blesser de quelque manière que ce soit. Changeons cela. Dans le jeu final, il y aura deux façons dont vous pouvez être touché : être frappé par un laser ennemi ou toucher directement l'ennemi. Commençons par la seconde, car elle est un peu plus simple.  

La collision est relativement facile dans Phaser.

Commençons par importer une feuille de sprites d'explosion et implémenter son animation dans la Scène 1 :

<!--- ![load_sprite](../media/7/load_sprite.png)--->
<img src="../media/7/load_sprite.png" alt="load_sprite" style="width:950px;"/>

<!--- ![create_sprite](../media/7/create_sprite.png)--->
<img src="../media/7/create_sprite.png" alt="create_sprite" style="width:950px;"/>

Il s'agit d'une explosion qui s'affichera lorsque le joueur est détruit !

Phaser dispose de moyens très pratiques pour gérer la collision entre objets. Nous pouvons simplement ajouter la ligne suivante à la méthode `create()` dans la Scène 2 :

```javascript
this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
```

<!--- ![overlap with player](../media/7/overlap_hurtPlayer.png)--->
<img src="../media/7/overlap_hurtPlayer.png" alt="overlap with player" style="width:950px;"/>

Cette ligne appelle la méthode `hurtPlayer()` lorsque `this.player` et un membre du groupe `this.enemies` se chevauchent. Elle appelle `hurtPlayer` avec `this.player` et `this.enemies` comme arguments.

Cette ligne permet donc d'appeler la méthode `hurtPlayer()` lorsque le joueur et un objet du groupe d'ennemis se touchent, avec les variables joueur et ennemi passées à la méthode comme arguments. Passons maintenant à la création de la méthode `hurtPlayer()` :

<!--- ![hurtPlayer](../media/7/function.png)--->
<img src="../media/7/function.png" alt="hurtPlayer" style="width:950px;"/>

Tout d'abord, nous allons détruire l'ennemi et désactiver le joueur pour les étapes `4 et 5` avec ces lignes :

```javascript
enemy.destroy();
player.disableBody(true, true);
```

Cela fait disparaître l'ennemi et le joueur (l'ennemi a été supprimé, mais le joueur est simplement invisible et non interactif). Ensuite, rendons le joueur à nouveau disponible après une courte pause (la pause permet au joueur de réagir au dégât). Pour cette pause, nous utiliserons un autre timer (comme nous l'avons fait pour changer la direction des ennemis) à l'étape `7`. La syntaxe sera identique, mais nous appellerons la fonction `resetPlayer()`, avec un délai plus court et sans répétition du timer.

Une fois le timer créé, passons à la méthode `resetPlayer()` :

<!--- ![reset_player](../media/7/resetPlayer.png)--->
<img src="../media/7/resetPlayer.png" alt="reset_player" style="width:950px;"/>

Tout d'abord, choisissez une coordonnée de réapparition et modifiez les valeurs (X, Y) du joueur pour l'amener à cet emplacement (nous pouvons encore modifier l'emplacement du vaisseau de cette manière car il existe toujours, il est seulement désactivé). Ensuite, activez le joueur avec cette ligne :

```javascript
this.player.enableBody(true, x, y, true, true);
```

Une fois implémenté, la collision devrait ressembler à ceci :
![collision](../media/7/respawn-first.gif)

Ensuite, créons un nouvel objet d'explosion en modifiant le fichier `explosion.js` :

<!--- ![explosion](../media/7/explosion.png)--->
<img src="../media/7/explosion.png" alt="explosion" style="width:950px;"/>

Notez qu'il étend `Phaser.GameObjects.Sprite`. Cela nous permettra d'utiliser le constructeur de cette classe grâce à l'héritage. Les paramètres de notre objet Projectile sont simplement la scène et deux nombres (x et y). Plus tard, vous verrez que nous passons la Scène 2 elle-même. Nous pouvons utiliser cette scène pour accéder à tout son contenu. Tout ce fichier fera est créer un objet qui jouera l'animation d'explosion à l'emplacement spécifié. Tout le code dont cette classe a besoin est contenu dans le constructeur et il n'y a que 2 lignes de code à remplir.

Maintenant, accédez à la méthode `hurtPlayer()` dans le fichier `scene2.js` :

<!--- ![create_explosion](../media/7/create_explosion.png)--->
<img src="../media/7/create_explosion.png" alt="create_explosion" style="width:950px;"/>

{{% notice hint %}}
Vous allez créer deux objets explosion :

* Un avec la scène et les coordonnées du joueur comme paramètres,  
* Un autre avec la scène et les coordonnées de l'ennemi comme paramètres.  
{{% /notice %}}

Ensuite, remarquez que la réapparition du joueur est un peu brutale. Nous allons rendre cette transition plus fluide avec un Tween après avoir réapparu le joueur :

<!--- ![reset_tween](../media/7/reset_tween.png)--->
<img src="../media/7/reset_tween.png" alt="reset_tween" style="width:950px;"/>

Un Tween est essentiellement un outil qui vous permet d'animer une caractéristique ou un attribut d'un objet. Dans ce cas, nous animons l'alpha (la visibilité) du joueur. Nous commencerons par définir l'alpha du joueur à 0.5, puis utiliserons le Tween pour l'animer à sa pleine visibilité normale.

```javascript
var tween = this.tweens.add({
    targets: this.player,
    y: config.height - 64,
    ease: 'Power1',
    duration: 1500,
    repeat: 0,
    onComplete: function(){
        this.player.alpha = 1;
    },
    callbackScope: this
});
```

Maintenant, nous avons terminé ! L'animation de la réapparition du joueur est beaucoup plus fluide !

![collision](../media/respawn-second.gif)