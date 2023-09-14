---
title: "Booleanos"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 9
---
Los booleanos son declaraciones verdaderas o falsas. A diferencia de las cadenas o los números, los booleanos almacenan declaraciones de verdad: ¿lo que estoy diciendo es verdadero o falso? Por ejemplo, si pregunto: "¿Eres un robot?", Esta pregunta produce un resultado verdadero o falso, que llamamos booleano. En este caso, como no eres un robot (¡con suerte!), produciríamos falso. También podemos usar operadores matemáticos para crear expresiones booleanas. Aquí hay algunos ejemplos; Sin embargo, observe los símbolos inusuales para "igual a" y "no igual a":

| Operador | Descripción           | Operador | Descripción              |
| -------- | --------------------- | -------- | ------------------------ |
| `<`      | Menos que             | `>`      | Mayor que                |
| `<=`     | Menos que ó igual que | `>=`     | Mayor que ó igual que    |
| `==`     | Igual que             | `!=`     | Diferente que            |

Como de costumbre, use ´System.out.println´ para imprimir sus resultados:

```kotlin
System.out.println(10 < 8);
System.out.println((3 * 6) == (32 - 14));
```
{{% notice tip %}}
## Trabajando Juntos

Elimine todo el texto ´System.out.println´ en su código. Intenta adivinar las respuestas a las siguientes expresiones. Utilice ´System.out.println´ para comprobar sus respuestas.

- 54 < (10 + 32)
- (37 / 5) == 7
- "Hola" + "Mundo" == "Hola Mundo"
- false == false
{{% /notice %}}

## Operadores Booleanos

También puede conectar expresiones booleanas entre sí mediante ´&&´ (AND) y ´||´ (OR) operador. Por ejemplo, supongamos que pregunto: "¿Eres un humano y Nuvi es un robot?" La palabra "y" conecta las dos preguntas verdadero-falso. En este caso, dado que es cierto que eres un humano, y también es cierto que Nuvi es un robot, entonces el resultado general es "verdadero". Aquí hay una tabla que describe lo que sucede cuando conectamos booleanos:  

| Expresión                   | Resultado  | Expresión                            | Resultado  |
| --------------------------- | -------- | ------------------------------------- | ------- |
| <code>true && true</code>   | `true`   | <code>true &#124;&#124; true</code>   | `true`  |
| <code>true && false</code>  | `false`  | <code>true &#124;&#124; false</code>  | `true`  |
| <code>false && true</code>  | `false`  | <code>false &#124;&#124; true</code>  | `true`  |
| <code>false && false</code> | `false`  | <code>false &#124;&#124; false</code> | `false` | 

En resumen, ´&&´ requiere que ambas expresiones booleanas sean verdaderas, mientras que ´||´ sólo requiere que una de las dos expresiones booleanas sea verdadera. Aquí hay algunos ejemplos más:

- ´(5 < 8) && (9 != 10)´ produce ´verdadero´ ya que tanto 5 es menor que 8 y 9 no es igual a 10.
- ´(6 != 2 * 3) || (8 < 2 * 4)´ produce ´falso´ ya que tanto 6 no es igual a 2 * 3, y 8 no siendo menos de 2 * 4 producen ´falso´.
