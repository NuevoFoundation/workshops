---
title: "Actividad 3 - Agregar Entrada del Teclado para Mover al Jugador"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 10
---

Ahora, vamos a permitir que nuestra nave se mueva cuando el jugador use el teclado. El primer paso es crear un atributo `cursor` en el método `create()` en `Scene2.js`:

<!--- ![create_cursor_key](../media/4/create_cursor_key.png) --->
<img src="../media/4/create_cursor_key.png" alt="create_cursor_key" style="width:950px;"/>

La forma más eficiente de crear movimiento es creando una función auxiliar que utilice el atributo `cursor` para verificar si se ha presionado alguna tecla. Ya hemos creado esta función para ti y se llama `movePlayer()`:

<!--- ![move_player_function](../media/4/move_player_function.png) --->
<img src="../media/4/move_player_function.png" alt="move_player_function" style="width:950px;"/>

Luego movemos al jugador con esta función. Podemos llamarla en el método `update()` para verificar el movimiento durante cada ciclo de actualización (esto también ya está hecho para ti).

Ahora, ve al método `movePlayer()` y escribe el código que verificará el movimiento y moverá al jugador en consecuencia.

{{% notice hint %}}

* Recomendamos una velocidad de movimiento de 200.  
* Usa una declaración `if`.  
* Después de escribir las declaraciones `if`, es posible que notes que tu jugador continúa moviéndose incluso después de que dejes de presionar el teclado. Para solucionar esto, piensa: cuando el jugador no está presionando el teclado, ¿qué debería estar haciendo la nave?

{{% /notice %}}

¡Ahora pruébalo! Sin embargo, es posible que notes algo: el jugador puede moverse fuera de la pantalla, como esto:

<!--- ![bounds](../media/4/player-off.gif) --->
<img src="../media/4/player-off.gif" alt="bounds" style="width:100px;"/>

Esto sucede porque Phaser utiliza un lienzo ilimitado que existe incluso fuera de la ventana de la pantalla. Podemos solucionar esto restringiendo al jugador dentro de la pantalla con una línea de código:

```javascript
this.player.body.setCollideWorldBounds(true); // el jugador no puede salir de la pantalla
```

Encuentra el método `create()` de la Escena 2:

<!--- ![set_bound](../media/4/set_bound.png) --->
<img src="../media/4/set_bound.png" alt="set_bound" style="width:950px;"/>

Ahora que tu jugador está restringido a la pantalla, deberías poder mover la nave de esta manera:

<!--- ![animation spaceship and background](../media/4/player-move-example.gif)
 --->
<img src="../media/4/player-move-example.gif" alt="animation spaceship and background" style="width:300px;"/>