---
title: "Variables"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
Las variables son simplemente nombres que podemos dar a valores como cadenas, números y booleanos. Usamos variables para almacenar información para que la computadora pueda hacer un seguimiento de ella. Las variables se crean utilizando el tipo de la variable y el nombre de la variable. Luego puedes asignar esa variable a la información que quieres almacenar usando `=` y el contenido.

Por favor, mira las variables en la parte superior de `MainActivity.kt`.

```kotlin
    var Player1 = ArrayList<Int>()
    var Player2 = ArrayList<Int>()
    var ActivePlayer = 1
    var setPlayer = 1
    var colorBlue = Color.rgb(0, 161, 241)
    // PUZZLE 3
    var colorGreen = Color.BLACK
```

- `Jugador1` contiene los valores de los movimientos del Jugador 1 en el juego.
- `Jugador2` contiene los valores de los movimientos del Jugador 2 en el juego.
- `ActivePlayer` realiza un seguimiento de quién es el turno.
- `setPlayer` contiene el valor de si el juego es Jugador vs Jugador o Jugador vs Computadora.
- `colorBlue` y `colorGreen` contienen los valores de los colores del jugador.
