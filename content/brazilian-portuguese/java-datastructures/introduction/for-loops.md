---
title: "Loops For"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 5
---

<!--<link rel="stylesheet" href="../../style.css">-->

Quando você sabe exatamente quantas vezes deseja percorrer um bloco de código, use um loop (laço) `for`em vez de um loop `while`:

```java
for (initialization; condition; iteration) {
  // bloco de código a ser executado
}
```

- `initialization` é executado (uma vez) antes da execução do bloco de código.
- `condition` (condição) define a condição para execução do bloco de código.
- `iteration` é executado (sempre) após a execução do bloco de código.

O exemplo abaixo irá imprimir os números `0` a `4`:

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

- `initialization` define uma variável antes do início do loop (`int i = 0`).
- `condition` define a condição para a execução do loop (`i` deve ser menor que `5`). Se a condição for `true`, o loop começará novamente, se for `false`, o loop terminará.
- `iteration` aumenta um valor (`i++`) cada vez que o bloco de código no loop é executado.

Este exemplo só imprimirá valores pares entre `0` e `10`:

```java
for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
```