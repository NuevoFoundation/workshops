---
title: "Bucles For"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/QHM7dmhFP64" title="For Loops - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

Cuando sabes exactamente cuántas veces quieres ejecutar un bloque de código, utiliza un bucle `for` en lugar de un bucle `while`:

```java
for (initialization; condition; iteration) {
  // bloque de código a ejecutar
}
```

- `initialization` se ejecuta (una vez) antes de la ejecución del bloque de código.
- `condition` (como su nombre lo indica) define la condición para ejecutar el bloque de código.
- `iteration` se ejecuta (cada vez) después de que el bloque de código haya sido ejecutado.

El siguiente ejemplo imprimirá los números del `0` al `4`:

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

- `initialization` establece una variable antes de que comience el bucle (`int i = 0`).
- `condition` define la condición para que el bucle se ejecute (`i` debe ser menor que `5`). Si la condición es `true`, el bucle continuará ejecutándose; si es `false`, el bucle terminará.
- `iteration` aumenta un valor (`i++`) cada vez que el bloque de código dentro del bucle se haya ejecutado.

Este ejemplo solo imprimirá los valores pares entre `0` y `10`:

```java
for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
```