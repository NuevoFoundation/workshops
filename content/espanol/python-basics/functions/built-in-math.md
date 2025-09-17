---
title: "Funciones Matemáticas Integradas"
date: 2019-07-28T11:45:38-07:00
draft: false
weight: 3
---

Python proporciona una serie de funciones integradas importantes que podemos usar sin necesidad de definir la función. En esta sección, aprenderemos sobre algunas de las funciones matemáticas integradas que te permiten realizar tareas matemáticas con números.

Las funciones `max()` y `min()` nos devuelven, respectivamente, el valor más grande y el más pequeño de una lista:

```python
x = min(20, 10, 50, 25)		# x = 10
print(x)
y = max(20, 10, 50, 25)		# y = 50
print(y)
```

La función `abs()` nos devuelve el valor absoluto (positivo) de un número:

```python
x = abs(-34)		         # x = 34
print(x)
y = abs(90)			         # y = 90
print(y)
```

La función `pow(a, b)` nos da el valor de `a` elevado a la potencia `b` (a<sup>b</sup>):

```python
x = pow(3,4)		        # x = 81
print(x)
```

### Desafío

¡Pongamos todo junto! Veamos si podemos crear un programa que tome 5 números del usuario e imprima el valor del mínimo de esos números elevado a la potencia del máximo. Por ejemplo, dados los números 2,7,4,11,9, devolver 2<sup>11</sup>. ¡Puntos extra si lo divides en funciones!

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>