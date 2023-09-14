---
title: "Condicionales"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
Podemos usar sentencias `if` para ejecutar una instrucción de código solo si se cumplen ciertas condiciones.

Por ejemplo:

```kotlin
if (isRainingOutside == true) {
    takeUmbrella = true;
} else {
    takeUmbrella = false;
}
```

Para nuestro juego, deberíamos usar declaraciones `if` para determinar si un jugador tiene 3 coincidencias verticales, horizontales o diagonales.

Dentro de los `()` al lado de `if`, debes especificar una _expresión booleana_. Los **booleanos** son declaraciones `true` (verdaderas) o `false` (falsas). Podemos utilizar esto en nuestra declaración `if`. Si la expresión es `true`, se ejecuta el código dentro de `{ }`. Si la expresión es `false`, se ejecuta el código dentro de `{ }` después de la declaración `else`.

También puedes conectar **expresiones booleanas** usando el operador `&&` (AND) y el operador `||` (OR).

Echa un vistazo a la función `CheckWinner()` en `MainActivity.kt` y piensa en lo que están haciendo todas las declaraciones `&&` conectadas.