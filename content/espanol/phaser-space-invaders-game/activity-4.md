---
title: "Actividad 4 - Agregar Enemigos"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 11
---

¡Ahora, hagamos algunos enemigos para que nuestro jugador se enfrente! Primero, carguemos un sprite sheet para nuestros enemigos en la Escena 1, tal como lo hicimos para el jugador. Usa la misma sintaxis que utilizaste para cargar al jugador, pero usa un nombre diferente, `assets/enemies.png` como la fuente del sprite sheet y un frameWidth y frameHeight de 16:

<!--- ![load_sprite](../media/5/load_sprite.png) --->
<img src="../media/5/load_sprite.png" alt="load_sprite" style="width:950px;"/>

Además, crea otra animación en la Escena 1 de la misma manera que creaste la animación del jugador (puedes usar los mismos argumentos para `frameRate` y `repeat`, pero recuerda usar `enemies` para `frames`):

<!--- ![create_sprite](../media/5/create_sprite.png) --->
<img src="../media/5/create_sprite.png" alt="create_sprite" style="width:950px;"/>

Este juego tendrá muchos enemigos que se verán idénticos y se comportarán de manera muy similar. Para facilitar este proceso de codificación, usaremos un concepto en Phaser llamado grupo para controlar a todos nuestros enemigos a la vez. Un grupo es exactamente lo que su nombre indica: un grupo de elementos. Podemos hacer referencia a este grupo cuando queremos que se realice un cambio en todos sus miembros.

Declaramos nuestro grupo de enemigos de esta manera:

```javascript
this.enemies = this.physics.add.group();
```

Esto creará un grupo llamado `enemies`.

Ahora, pongamos nuestros enemigos en la pantalla. Para facilitar esto, usaremos otro método auxiliar llamado `createEnemies()` (que nuevamente, ya se ha creado para ti sin nada dentro):

<!--- ![create_enemies](../media/5/create_enemies.png) --->
<img src="../media/5/create_enemies.png" alt="create_enemies" style="width:950px;"/>

Ahora, llama a este método en el método `create()` en lugar del método `update()` como hicimos con el movimiento del jugador, porque solo queremos que el enemigo aparezca una vez al principio del juego:

<!--- ![enemies_move](../media/5/enemies_move.png) --->
<img src="../media/5/enemies_move.png" alt="enemies_move" style="width:950px;"/>

La sintaxis para crear una variable de enemigo "enemy" en las coordenadas (X, Y), con el sprite sheet `enemies`, y dentro del grupo `enemies` que declaraste anteriormente, se ve así:

```javascript
var enemies = this.enemies.create(X, Y, 'enemies');
```

## Actividad 1: Colocar un Enemigo

Pruébalo eligiendo unas coordenadas (X, Y) y coloca esta línea de código en el método createEnemies(). También necesitarás reproducir la animación justo después de crear el enemigo (por lo que estará en el método createEnemies()).
![declare](../media/5/enemy-one.PNG)
Debería verse algo así (con una ubicación potencialmente diferente; este enemigo se colocó en (300, 100)).

## Actividad 2: Colocar más Enemigos

Ahora agreguemos algunos enemigos más. Añade un par de nuevos enemigos en el mismo método, pero ten cuidado porque cada variable de enemigo que crees dentro del mismo alcance debe tener un nombre de variable diferente.
![declare](../media/5/enemy-multiple.PNG)

## Actividad 3: Colocar un Bloque de Enemigos

Ahora que lo has entendido, intentemos algo un poco más desafiante y crea los enemigos en este patrón de bloques que se muestra a continuación. Sin embargo, hay una condición: hazlo SIN declarar cada enemigo con una línea individual.

`PISTA: usa un bucle for anidado`
![declare](../media/5/enemy-block.PNG)