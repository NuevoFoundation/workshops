---
title: "Condicionais"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
Podemos usar instruções `if` para executar uma instrução de código apenas se certas condições forem atendidas.

Por exemplo:

```kotlin
if (isRainingOutside == true) {
    takeUmbrella = true;
} else {
    takeUmbrella = false;
}
```

Para o nosso jogo, devemos usar instruções `if` para determinar se um jogador tem 3 correspondências verticais, horizontais ou diagonais.

Dentro do `()` ao lado de `if`, você deve especificar uma _expressão booleana_. **Booleans** são declarações `verdadeiras` ou `falsas`. Podemos utilizar isso em nossa instrução `if`. Se a expressão for `verdadeira`, o código dentro de `{ }` é executado. Se a expressão for `falsa`, o código dentro de `{ }` após a instrução `else` é executado.

Você também pode conectar **expressões booleanas** usando o operador `&&` (E) e o operador `||` (OU).

Dê uma olhada na função `CheckWinner()` em `MainActivity.kt` e pense sobre o que todas as instruções conectadas `&&` estão fazendo.
