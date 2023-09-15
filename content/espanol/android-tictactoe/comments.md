---
title: "Comentarios"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 6
---
Los desarrolladores a menudo necesitan colaborar con otros desarrolladores. Los comentarios son una forma fácil para que los desarrolladores escriban notas en el código y se comuniquen con otros. Los comentarios son ignorados por la computadora; Por lo tanto, también son una manera fácil de decirle a la computadora que no ejecute ciertas líneas de código. Hay dos formas de crear comentarios:

1. Para comentar una línea, coloca `//` al inicio de una línea de código. Por ejemplo:

```kotlin
// Este es un comentario de una sola línea.
```

2. Para comentar varias líneas a la vez, indique el comienzo del comentario con `/*` y al final del comentario con `*/`. Por ejemplo:

```kotlin
/* Este es un comentario de varias líneas de código.
Esta línea también es parte del comentario. */
```

Para eliminar un comentario (o descomentar una línea), simplemente elimine el botón `//` para un comentario de una sola línea, o el `/*` y los `*/` caracteres para el comentario de varias líneas.

{{% notice tip %}}
## Trabajando Juntos

1. Escribe `//` al inicio de `Toast.makeText(this, "Welcome to Tic-Tac-Toe”, Toast.LENGTH_LONG).show()`. Después presiona el botón de inicio (►), asegurate de que el texto `Bienvenido al juego del Gato` no se muestre en la pantalla.
2. Borra `//` y en su lugar, rodea `Toast.makeText(this, "Welcome to Tic-Tac-Toe”, Toast.LENGTH_LONG).show()` con `/*` y `*/`. Revisa que el texto de `Welcome to Tic-Tac-Toe` sigue sin mostrarse en la pantalla después de presionar el botón de inicio (►).
3. Borra tanto `/*` como `*/`, y presiona el botón de inicio (►). El mensaje de `Welcome to Tic-Tac-Toe` debería de verse en la consola.
   A lo largo de los rompecabezas de hoy, verá varios comentarios de varias líneas y `// PUZZLE` comentarios (como el del acertijo 2). Estos comentarios nos guiarán para completar el juego del Gato, así que asegúrate de entender cómo comentar y descomentar el código.

{{% /notice %}}