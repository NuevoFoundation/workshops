```markdown
---
title: "Actividad 9 - Agregar Puntaje, Niveles y Vidas"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 16
---

Ahora, ¡agregaremos algunos números para cuantificar nuestro juego! El más fácil de implementar es el puntaje. Crea una variable de texto en la parte superior izquierda de la pantalla que muestre `Puntaje: ` y el valor de una variable numérica que almacena el puntaje del jugador.

```javascript
this.scoreText = this.add.text(20, 10, "Puntaje: " + this.score, {
    font: "25px Arial",
    fill: "white"
});
```

{{% notice hint %}}
Esta línea imprime la variable de puntaje en la parte superior izquierda de la pantalla.

* `20` y `10` son los valores de x y y.
* `"score" + this.score` es el valor del texto.
{{% /notice %}}

Puedes agregar esta línea en esta ubicación después de crear la variable de puntaje:

<!--- ![create_score](../media/10/create_score.png)--->
<img src="../media/10/create_score.png" alt="create_score" style="width:950px;"/>

Solo añade una variable de puntaje y algo de texto en la pantalla que muestre "Puntaje: 'variable del puntaje'". Vamos a actualizar la función `hitEnemy()` para que el jugador gane puntos en su puntaje si derrota a un enemigo:

<!--- ![hit_enemy_score](../media/10/hit_enemy_score.png)--->
<img src="../media/10/hit_enemy_score.png" alt="hit_enemy_score" style="width:950px;"/>

Ahora añadiremos niveles. Los inicializaremos de la misma manera que hicimos con el puntaje, pero esta vez los imprimiremos en el centro de la pantalla en lugar de la parte superior izquierda:

<!--- ![create_level](../media/10/create_level.png)--->
<img src="../media/10/create_level.png" alt="create_level" style="width:950px;"/>

Haremos los niveles bastante simples: cada vez que el jugador destruya a todos los enemigos, se alcanzará el siguiente nivel, reapareciendo todos los enemigos. Para hacer que cada nivel sea más difícil que el anterior, haremos que los enemigos disparen con más frecuencia. Para que los enemigos disparen con más frecuencia, crearemos una variable de dificultad y la usaremos cuando hagamos que los enemigos disparen aleatoriamente.

Con esta configuración, al cambiar la variable de dificultad, cambiaremos la frecuencia con la que los enemigos disparan. Una menor dificultad hará que el juego sea más difícil porque aumentará la probabilidad de que un enemigo dispare.

Ahora, para actualizar el nivel cuando el jugador destruya a todos los enemigos, crearemos un método `levelClear()` que actualizará la variable de dificultad, reiniciará el temporizador de los enemigos, creará nuevos enemigos (llamando a `createEnemies()`), y actualizará el texto del nivel en la pantalla:

<!--- ![level_clear](../media/10/level_clear.png)--->
<img src="../media/10/level_clear.png" alt="level_clear" style="width:950px;"/>

Nota cómo debemos crear un nuevo temporizador cada vez que creamos nuevos enemigos, de lo contrario, los enemigos y el temporizador podrían no estar sincronizados. También recomendamos reducir la variable de dificultad menos cuando alcancemos 200, porque la dificultad aumenta mucho más rápido en ese punto.

No olvides actualizar levelClear() en `update()`:

<!--- ![update_level_clear](../media/10/update_level_clear.png)--->
<img src="../media/10/update_level_clear.png" alt="update_level_clear" style="width:950px;"/>

Ahora, añadiremos vidas. De nuevo, utilizaremos un método similar para inicializarlas y colocarlas en la parte superior derecha de la pantalla:

<!--- ![create_live](../media/10/create_live.png)--->
<img src="../media/10/create_live.png" alt="create_live" style="width:950px;"/>

Ahora, para perder una vida cada vez que te golpeen, añadamos este código a `hurtPlayer()`:

<!--- ![hurt_player](../media/10/hurt_player.png)--->
<img src="../media/10/hurt_player.png" alt="hurt_player" style="width:950px;"/>

Sin embargo, para que las vidas tengan algún significado, hagamos que sea un "Game Over" cuando el jugador pierda todas las vidas. Comenzaremos creando un texto que esté invisible en la pantalla en el método `create()`:

<!--- ![create_game_over](../media/10/create_game_over.png)--->
<img src="../media/10/create_game_over.png" alt="create_game_over" style="width:950px;"/>

Haremos este texto visible cuando sea un "Game Over". Haremos esto en el método `hurtPlayer()`:

<!--- ![hurt_player_restart](../media/10/hurt_player_restart.png)--->
<img src="../media/10/hurt_player_restart.png" alt="hurt_player_restart" style="width:950px;"/>

Esto hace que el personaje no reaparezca, muestre el texto de "Game Over", y reinicie el juego si el jugador hace clic en la pantalla.

Solo falta crear el método `restart()` al cual se hace referencia en este código:

<!--- ![restart_function](../media/10/restart_function.png)--->
<img src="../media/10/restart_function.png" alt="restart_function" style="width:950px;"/>

Esto reinicia todo para comenzar el juego desde el principio.

![gameplay](../media/10/game-play.gif)
```