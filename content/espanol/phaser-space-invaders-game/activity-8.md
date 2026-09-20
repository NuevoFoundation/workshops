---
title: "Actividad 8 - Permitir que los enemigos disparen"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 15
---

Ahora, haremos que los enemigos disparen de vuelta al jugador. Cada enemigo disparará de manera aleatoria, y la dificultad (que posteriormente se incrementará con cada nivel) se define por la frecuencia con la cual disparan aleatoriamente.

El rayo enemigo es bastante similar al rayo del jugador. Nuevamente, crearemos un archivo `enemyBeam.js` muy similar con casi el mismo código que el archivo `playerBeam.js`, pero con diferentes nombres de variables y números: 

<!--- ![enemy_bullet](../media/9/enemy_bullet.png)--->
<img src="../media/9/enemy_bullet.png" alt="enemy_bullet" style="width:950px;"/>

Compartiremos el sprite y la animación para los rayos del jugador y los rayos del enemigo. Sin embargo, durante la implementación, crearás un grupo separado para los proyectiles enemigos:

<!--- ![enemy_projectiles](../media/9/enemy_projectiles.png)--->
<img src="../media/9/enemy_projectiles.png" alt="enemy_projectiles" style="width:950px;"/>

También necesitamos crear una dificultad para este juego (más adelante explicaremos más sobre `difficulty`, pero por ahora, `difficulty` asegurará que el enemigo dispare):

<!--- ![add_diff](../media/9/add_diff.png)--->
<img src="../media/9/add_diff.png" alt="add_diff" style="width:950px;"/>

{{% notice hint %}}
* Recomendamos establecer la dificultad en 1000.
* Si configuras la dificultad en 1000, el número aleatorio será seleccionado entre 1 y 1000. Solo si el número aleatorio es 1, el enemigo disparará.
* El enemigo disparará continuamente si pruebas una dificultad de 1.
{{% /notice %}}

Para hacer que los enemigos disparen de manera aleatoria, primero crearemos un método llamado `enemyShoot()`:

<!--- ![enemyShoot](../media/9/enemyShoot.png)--->
<img src="../media/9/enemyShoot.png" alt="enemyShoot" style="width:950px;"/>

y lo llamaremos dentro del método `update()`:

<!--- ![update_player_shoot](../media/9/update_player_shoot.png)--->
<img src="../media/9/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

Esto crea un nuevo proyectil enemigo a una tasa aleatoria especificada.

Luego, necesitamos actualizar los proyectiles enemigos. Debemos asegurarnos de que cada rayo sea eliminado.

Deberás actualizar los rayos enemigos dentro de `enemyBeam.js` al igual que lo hiciste en `playerBeam.js`:

<!--- ![update](../media/9/update.png)--->
<img src="../media/9/update.png" alt="update_player_shoot again" style="width:950px;"/>

También necesitas actualizar cada proyectil enemigo en la Escena 2, de forma similar a cómo actualizamos los proyectiles:

<!--- ![update_projectiles](../media/9/update_enemy_projectiles.png)--->
<img src="../media/9/update_enemy_projectiles.png" alt="update_enemy_projectiles" style="width:950px;"/>

Al final, el juego debería lucir algo como esto:
![enemyShoot](../media/9/enemy-shoot.gif)