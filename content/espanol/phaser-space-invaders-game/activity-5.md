---
title: "Actividad 5 - Hacer que los Enemigos se Muevan"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 12
---

En este momento, los enemigos son un poco aburridos porque están completamente estáticos. ¡Hagamos que se muevan un poco! Nuestro objetivo será que se muevan de izquierda a derecha como esto:
![move](../media/6/enemy-move.gif)

Comencemos haciendo que los enemigos se muevan hacia la izquierda una vez que son creados. Podemos hacerlo simplemente añadiendo una línea de código:

```javascript
enemy.body.velocity.x = -90;
```

Colócala en nuestro método `createEnemies()`:

<!--- ![move enemies](../media/6/move_enemies.png) --->
<img src="../media/6/move_enemies.png" alt="mover enemigos" style="width:950px;"/>

Pero si pruebas el código ahora, verás que los enemigos siguen moviéndose hacia la izquierda indefinidamente debido al lienzo infinito de Phaser. Hagamos que cambien de dirección antes de salir de la pantalla. Esto se puede lograr con un temporizador, una herramienta que nos permite llamar a una función después de un cierto período de tiempo. La función que el temporizador llama cambiará la dirección del enemigo. También podemos hacer que el temporizador se ejecute indefinidamente para que continúe ejecutando la función después de cada intervalo de tiempo (que es lo que haremos aquí). Coloca el siguiente temporizador al final del método `createEnemy()`.

```javascript
this.enemyTimer = this.time.addEvent({
    delay: 1500,
    callback: this.changeEnemyDirection,
    callbackScope: this,
    loop: true
});
```

<!--- ![timer_function](../media/6/timer_function.png) --->
<img src="../media/6/timer_function.png" alt="función del temporizador" style="width:950px;"/>

Este es un temporizador que llama continuamente al método `changeEnemyDirection()` después de cierto intervalo de tiempo. Sin embargo, aún no hemos puesto ningún contenido en él. Hagámoslo ahora: coloca el código en el método `changeEnemyDirection()` que cambiará la dirección de cada enemigo en el grupo de enemigos (¡esta es una de las razones por las que creamos un grupo!):

<!--- ![change_direction](../media/6/change_direction.png) --->
<img src="../media/6/change_direction.png" alt="cambiar dirección" style="width:950px;"/>

{{% notice hint %}}

Sin embargo, nota cómo (si usaste los mismos valores del temporizador que nosotros), tu nave comienza a moverse hacia dentro y fuera de la pantalla. En lugar de limitarla a la pantalla, como hicimos con la nave del jugador, simplemente moveremos la posición inicial del enemigo un poco hacia la derecha (porque el temporizador tiene la cantidad adecuada de tiempo para ir y venir por la pantalla).

{{% /notice %}}