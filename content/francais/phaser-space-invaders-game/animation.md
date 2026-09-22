---
title: "Créer des Animations"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 7
---

## Animation dans Phaser

L'animation fonctionne en montrant un ensemble d'images rapidement les unes après les autres. Lorsqu'on le fait rapidement, notre esprit perçoit cela comme un mouvement. D'une certaine manière, on trompe l'esprit pour qu'il pense que cet ensemble d'images est une seule chose en mouvement.

![animation](../media/animation.png)

Nous utilisons des spritesheets pour les éléments que nous voulons animer car nous pouvons créer cette animation en faisant défiler les spritesheets. Pour animer les spritesheets, il y a deux étapes à suivre.

La première étape consiste à créer les "instructions" pour l'animation :

```javascript
this.anims.create({
    key: "dude_anim",
	frames: this.anims.generateFrameNumbers("dude"),
	frameRate: 10,
	repeat: -1
});
```

Ceci crée une animation appelée "dude_anim" qui fonctionne sur "dude". Le taux de rafraîchissement correspond essentiellement à la vitesse de l'animation. `Repeat` fait référence au nombre de fois où l'animation se répète lorsqu'elle est jouée. Un nombre négatif signifie que l'animation se répète indéfiniment.

La deuxième étape consiste simplement à dire au jeu de jouer l'animation spécifiée dans nos instructions. Cela peut également être fait dans `create()` :

```javascript
this.dude.anims.play("dude_anim");
```

{{% notice note %}}

Lorsque vous ajoutez cette instruction pour jouer l'animation, elle doit être placée après que "dude" ait été placé à l'écran. En effet, le code s'exécute de haut en bas, donc si vous ajoutez cette instruction avant de placer "dude", l'ordinateur ne saura pas quoi animer.

{{% /notice %}}

Essayez d'animer le personnage "dude" de la leçon précédente. N'hésitez pas à modifier les valeurs et à observer comment elles affectent le résultat final.
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorAnimation" target="_blank">Lancer Replit</a>