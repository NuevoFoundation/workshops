---
title: "Booleanos"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 9
---
Los booleanos son declaraciones de verdadero o falso. A diferencia de las cadenas o números, los booleanos almacenan afirmaciones de verdad: ¿lo que estoy diciendo es verdadero o falso? Por ejemplo, si pregunto, "¿Eres un robot?", esta pregunta produce un resultado verdadero o falso, que llamamos un booleano. En este caso, dado que no eres un robot (¡espero!), el resultado sería falso. También podemos usar operadores matemáticos para crear expresiones booleanas. Aquí hay algunos ejemplos; sin embargo, nota los símbolos poco comunes para "igual a" y "no igual a":

| Operador | Descripción            | Operador | Descripción                 |
| -------- | ---------------------- | -------- | --------------------------- |
| `<`      | Menor que              | `>`      | Mayor que                   |
| `<=`     | Menor o igual que      | `>=`     | Mayor o igual que           |
| `==`     | Igual a                | `!=`     | No igual a                  |

Como de costumbre, utiliza `System.out.println` para imprimir tus resultados:

```kotlin
System.out.println(10 < 8);
System.out.println((3 * 6) == (32 - 14));
```
{{% notice tip %}}
## Trabajando Juntos

Borra todo el texto de `System.out.println` en tu código. Intenta adivinar las respuestas de las siguientes expresiones. Usa `System.out.println` para verificar tus respuestas.

- 54 < (10 + 32)
- (37 / 5) == 7
- "Hello" + "World" == "Hello World"
- false == false
{{% /notice %}}

## Operadores de Booleanos

También puedes conectar expresiones booleanas utilizando los operadores `&&` (Y) y `||` (O). Por ejemplo, supongamos que pregunto: "¿Eres humano, y Nuvi es un robot?" La palabra "y" conecta las dos preguntas de verdadero-falso juntas. En este caso, dado que es verdad que eres humano, y también es verdad que Nuvi es un robot, entonces el resultado general es `true`. Aquí tienes una tabla que describe qué sucede cuando conectamos booleanos juntos:  

| Expresión                   | Resultado | Expresión                              | Resultado |
| --------------------------- | --------- | -------------------------------------- | --------- |
| <code>true && true</code>   | `true`    | <code>true &#124;&#124; true</code>   | `true`    |
| <code>true && false</code>  | `false`   | <code>true &#124;&#124; false</code>  | `true`    |
| <code>false && true</code>  | `false`   | <code>false &#124;&#124; true</code>  | `true`    |
| <code>false && false</code> | `false`   | <code>false &#124;&#124; false</code> | `false`   | 

En resumen, `&&` requiere que ambas expresiones booleanas sean verdaderas, mientras que `||` solo requiere que una de las dos expresiones booleanas sea verdadera. Aquí hay algunos ejemplos más:

- `(5 < 8) && (9 != 10)` produce `true` ya que tanto 5 es menor que 8 como 9 no es igual a 10.
- `(6 != 2 * 3) || (8 < 2 * 4)` produce `false` ya que tanto 6 no es diferente a 2 * 3 como 8 no es menor que 2 * 4 producen `false`.