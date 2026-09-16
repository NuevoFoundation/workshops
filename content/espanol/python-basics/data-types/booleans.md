---
title: "Booleanos"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

Booleans son declaraciones <font color="#005a9c">True</font> (Verdadero) o <font color="#005a9c">False</font> (Falso). A diferencia de cadenas o números, <b>booleans</b> almacenan declaraciones de verdad: ¿lo que estoy diciendo es verdadero o falso?

Por ejemplo, si digo "Eres un robot", un boolean puede almacenar si esa afirmación es verdadera. En este caso, como no eres un robot (¡esperemos!), se almacenaría <font color="#005a9c">False</font>.

¿Cuáles son las respuestas booleanas a estas preguntas sobre ti?

1. Soy humano. _______
2. Tengo 25 dedos. _______
3. Me gustan las galletas. _______
4. Mi color favorito es azul. ______

Las formas más comunes de operadores booleanos son comparaciones como menor que o mayor que. Cómo se escriben en python se muestra a continuación.

| Operator | Descripción           | Operator | Descripción                  |
| -------- | --------------------- | -------- | ---------------------------  |
| `<`      | Menor que             | `>`      | Mayor que                    |
| `<=`     | Menor o igual que     | `>=`     | Mayor o igual que            |
| `==`     | Igual a               | `!=`     | Distinto de / No igual a     |

### Desafío 1
Como siempre, usa `print` para imprimir tus resultados en lo siguiente:

```python
print(5 + 8 < 10)
print((3 + 5) * 6) == (65 - 17)
```

La primera expresión debería devolver <font color="#005a9c">False</font>. Y la segunda debería devolver <font color="#005a9c">True</font>.

![alt text](../../img/booleans.png "image of the above example showing the first is false and the second is true")

### Desafío 2
Intenta imprimir las respuestas a las siguientes expresiones usando `print`. Si los resultados de alguna de estas declaraciones no tienen sentido, ¡por favor pide ayuda!

- 54 < (10 + 32)
- (37 / 5) != 7
- "Hello" + "World" == "Hello World"
- <font color="#005a9c">False</font> == <font color="#005a9c">False</font>

### Desafío 3
¡Intenta crear tus propias expresiones!

### Dato Curioso: Conectar Booleans con Operadores AND y OR

También puedes conectar expresiones booleanas usando el operador AND y el operador OR. Aquí hay una tabla que describe lo que ocurre cuando conectamos booleans:

Expression  | Result 
------------|---------- 
<font color="#005a9c">True</font> and <font color="#005a9c">True</font>  | <font color="#005a9c">True</font>
<font color="#005a9c">True</font>  and <font color="#005a9c">False</font> | <font color="#005a9c">False</font>
<font color="#005a9c">False</font> and <font color="#005a9c">True</font> | <font color="#005a9c">False</font>
<font color="#005a9c">False</font> and <font color="#005a9c">False</font> | <font color="#005a9c">False</font>
<font color="#005a9c">True</font>  or <font color="#005a9c">True</font>  | <font color="#005a9c">True</font>
<font color="#005a9c">True</font>  or <font color="#005a9c">False</font> | <font color="#005a9c">True</font>
<font color="#005a9c">False</font> or <font color="#005a9c">True</font>  | <font color="#005a9c">True</font>
<font color="#005a9c">False</font>  and <font color="#005a9c">False</font> | <font color="#005a9c">False</font>

En resumen, AND requiere que ambas expresiones booleanas sean verdaderas, mientras que OR solo requiere que una de las dos expresiones booleanas sea verdadera. Aquí hay más ejemplos:

- (5 < 8) and (9 != 10) produce <font color="#005a9c">True</font> ya que tanto 5 es menor que 8 como 9 no es igual a 10.
- (8 <= 2) or ("h" + "e" == "he") produce <font color="#005a9c">True</font> ya que "h" + "e" resulta en "he", aunque 8 no sea menor o igual que 2.
- (6 != 2 * 3) or (8 < 2 * 4) produce <font color="#005a9c">False</font> ya que tanto "6 no es igual a 2 * 3" como "8 es menor que 2 * 4" dan como resultado <font color="#005a9c">False</font>.

#### ¿Qué crees que producen las siguientes expresiones?

- (11-2 < 10) and (7+3 > 10)
- (<font color="#005a9c">True</font> or 3 < 1) and (<font color="#005a9c">False</font> or 3>1)

<iframe title="¿Qué crees que producen las siguientes expresiones? - Codebunga" src="https://codebunga.com/embed/c2vqd36f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>