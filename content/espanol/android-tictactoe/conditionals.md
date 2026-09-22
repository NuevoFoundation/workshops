---
title: "Condicionales"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
Podemos usar declaraciones `if` para ejecutar una porción de código solo si se cumplen ciertas condiciones.

Por ejemplo:

```kotlin
if (isRainingOutside == true) {
    takeUmbrella = true;
} else {
    takeUmbrella = false;
}
```

Para nuestro juego, debemos usar declaraciones `if` para determinar si un jugador tiene 3 coincidencias verticales, horizontales o diagonales.

Dentro de los `()` junto a `if`, debes especificar una _expresión Booleana_. Los **Booleanos** son declaraciones `true` o `false`. Podemos usar esto en nuestra declaración `if`. Si la expresión es `true`, el código dentro de `{ }` se ejecuta. Si la expresión es `false`, se ejecuta el código dentro de `{ }` después de la declaración `else`.

También puedes conectar **expresiones Booleanas** usando los operadores `&&` (AND) y `||` (OR).

Echa un vistazo a la función `CheckWinner()` en `MainActivity.kt` y piensa en lo que hacen todas las declaraciones conectadas con `&&`.