---
title: "Activité 2 - Animer le vaisseau du joueur"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 8
---

Pour donner un peu de vie à notre jeu, mettons les choses en mouvement ! Animons le vaisseau du joueur que nous avons créé.

<!--- ![animation_part](../media/4/animation_part.png) --->
<img src="../media/4/animation_part.png" alt="animation_part" style="width:950px;"/>

<!--- ![play_animation](../media/4/play_animation.png) --->
<img src="../media/4/play_animation.png" alt="play_animation" style="width:950px;"/>

Une fois que votre vaisseau est animé, il devrait ressembler à ceci. Remarquez les flammes qui sortent des réacteurs du vaisseau ! (Bien que cela puisse être plus rapide ou plus lent selon le taux d'images que vous avez choisi).

<!--- ![animation](../media/4/animation-ship.gif) --->
<img src="../media/4/animation-ship.gif" alt="animation" style="width:300px;"/>

Nous allons apporter une dernière touche à l'animation - nous allons également faire bouger l'arrière-plan. Changez l'arrière-plan d'une image ordinaire à un `TileSprite` comme ceci :

```javascript
this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
this.background.setOrigin(0, 0);
```

Les `TileSprites` permettront à notre arrière-plan de bouger même s'il ne s'agit pas d'une spritesheet, car il s'agit d'un type de Sprite avec une texture répétée, ce qui permet de le faire défiler grâce au canevas infini de Phaser.

<!--- ![move_background](../media/4/move_background.png) --->
<img src="../media/4/move_background.png" alt="move_background" style="width:950px;"/>

Essayez maintenant ! Si cela fonctionne correctement, cela donnera l'impression que le vaisseau vole dans l'espace !

<!--- ![animation spaceship and background](../media/4/animation-flying.gif) --->
<img src="../media/4/animation-flying.gif" alt="animation spaceship and background" style="width:300px;"/>