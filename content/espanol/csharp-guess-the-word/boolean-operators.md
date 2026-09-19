---
title: "Operadores Booleanos"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 9
---

## Operadores Booleanos

También puedes conectar expresiones booleanas utilizando los operadores `&&` (AND) y `||` (OR). Por ejemplo, supongamos que pregunto: "¿Eres un humano y Nuvi es un robot?" La palabra "y" conecta las dos preguntas de verdadero-falso. En este caso, dado que es cierto que eres un humano, y también es cierto que Nuvi es un robot, el resultado general es `true`.

Aquí tienes una tabla que describe lo que sucede cuando conectamos booleanos:

| Expresión        | Resultado | Expresión                             | Resultado |
| ---------------- | --------- | ------------------------------------- | --------- |
| `true && true`   | `true`    | <code>true &#124;&#124; true</code>   | `true`    |
| `true && false`  | `false`   | <code>true &#124;&#124; false</code>  | `true`    |
| `false && true`  | `false`   | <code>false &#124;&#124; true</code>  | `true`    |
| `false && false` | `false`   | <code>false &#124;&#124; false</code> | `false`   |

En resumen, `&&` requiere que ambas expresiones booleanas sean verdaderas, mientras que `||` solo requiere que una de las dos expresiones booleanas sea `true`. Aquí tienes algunos ejemplos más:

- `(5 < 8) && (9 != 10)` produce `true` ya que tanto `5` es menor que `8` como `9` no es igual a `10`.
- `(8 <= 2) || ("h" + "e" == "he")` produce `true` ya que `"h" + "e"` resulta en `"he"`, aunque `8` no sea menor o igual a `2`.
- `(6 != 2 * 3) || (8 < 2 * 4)` produce `false` ya que tanto `6` no es diferente de `2 * 3` como `8` no es menor a `2 * 4`, producen `false`.

![alt text height="600px" width="70%"](../media/booleans-advanced.png "Combinando booleanos")

{{% notice tip %}}

## Trabajando Juntos

Intenta adivinar las respuestas de las siguientes expresiones. Usa `Console.WriteLine` para imprimir las respuestas.

- `(9 < 10) && (12 => 11)`
- `(15 - 2 == 11) || (4 % 3 != 2)`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Operadores Booleanos - Editor .NET Fiddle" frameborder="0"></iframe>

{{% /notice %}}