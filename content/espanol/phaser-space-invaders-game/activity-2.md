---
title: "Actividad 2 - Animando la Nave del Jugador"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 8
---

¡Para darle vida a nuestro juego, hagamos que las cosas se muevan! Animemos la nave del jugador que hemos creado.

<!--- ![animation_part](../media/4/animation_part.png) --->
<img src="../media/4/animation_part.png" alt="animation_part" style="width:950px;"/>

<!--- ![play_animation](../media/4/play_animation.png) --->
<img src="../media/4/play_animation.png" alt="play_animation" style="width:950px;"/>

Una vez que tu nave esté animada, debería verse así. ¡Observa las llamas saliendo del motor de la nave! (Aunque podría ser más rápido o más lento dependiendo de la velocidad de fotogramas que hayas seleccionado).

<!--- ![animation](../media/4/animation-ship.gif) --->
<img src="../media/4/animation-ship.gif" alt="animation" style="width:300px;"/>

Haremos un toque final a la animación: también moveremos el fondo. Cambia el fondo de una imagen normal a un `TileSprite` de esta manera:

```javascript
this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
this.background.setOrigin(0, 0);
```

Los `TileSprites` nos permitirán mover el fondo incluso si no es un spritesheet porque es un tipo de Sprite con textura repetitiva, por lo que se puede desplazar a través del Canvas infinito de Phaser.

<!--- ![move_background](../media/4/move_background.png) --->
<img src="../media/4/move_background.png" alt="move_background" style="width:950px;"/>

¡Ahora inténtalo! Si funciona correctamente, parecerá que la nave está volando por el espacio.

<!--- ![animation spaceship and background](../media/4/animation-flying.gif) --->
<img src="../media/4/animation-flying.gif" alt="animation spaceship and background" style="width:300px;"/>