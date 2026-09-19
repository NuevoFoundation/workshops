---
title: "Comentarios"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 6
---
Los desarrolladores a menudo necesitan colaborar con otros desarrolladores. Los comentarios son una manera sencilla para que los desarrolladores escriban notas en el código y se comuniquen con otros. Los comentarios son ignorados por la computadora; por lo tanto, también son una manera fácil de indicarle a la computadora que no ejecute ciertas líneas de código. Hay dos maneras de crear comentarios:

1. Para comentar una sola línea, coloca `//` delante de una línea de código. Por ejemplo:

```kotlin
// Este es un comentario de una sola línea.
```

2. Para comentar varias líneas a la vez, indica el inicio del comentario con `/*` y el final del comentario con `*/`. Por ejemplo:

```kotlin
/* Este es un comentario de múltiples líneas.
Esta línea también forma parte del comentario. */
```

Para eliminar un comentario (o descomentar una línea), simplemente borra el `//` en un comentario de una sola línea, o los caracteres `/*` y `*/` en un comentario de múltiples líneas.

{{% notice tip %}}
## Trabajando Juntos

1. Escribe `//` delante de `Toast.makeText(this, "Welcome to Tic-Tac-Toe”, Toast.LENGTH_LONG).show()`. Después de presionar el botón de reproducción (►), verifica que `Welcome to Tic-Tac-Toe` no aparezca en la pantalla.
2. Borra el `//` y, en su lugar, rodea `Toast.makeText(this, "Welcome to Tic-Tac-Toe”, Toast.LENGTH_LONG).show()` con `/*` y `*/`. Verifica que `Welcome to Tic-Tac-Toe` aún no se imprima en la consola después de presionar el botón de reproducción (►).
3. Borra tanto `/*` como `*/` y presiona el botón de reproducción (►). Ahora, `Welcome to Tic-Tac-Toe` debería imprimirse en la consola.  
   A lo largo de los ejercicios de hoy, verás varios comentarios de múltiples líneas y comentarios `// PUZZLE` (como el del Puzzle 2). Estos comentarios nos guiarán hacia la finalización del juego del Tic-Tac-Toe, así que asegúrate de entender cómo comentar y descomentar el código.

{{% /notice %}}