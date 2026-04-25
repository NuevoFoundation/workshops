---
title: "Bucles"
draft: false
weight: 3
---

## Bucles en Python

Si quieres repetir una tarea varias veces, Python tiene una forma sencilla de hacerlo usando bucles.
Hay dos tipos de bucles básicos en Python: bucles `for` y bucles `while`.

### Bucles for

Los bucles `for` iteran sobre una secuencia. Supongamos que quieres repetir una tarea simple 5 veces. Así es como lo harías.

El siguiente `for` itera por cada uno de los números en la lista [1,2,3,4,5], y asigna el valor a x. Luego, ejecuta el código dentro del `for`.

```python
for x in [1,2,3,4,5]:    
    print("Estamos en el número de bucle",x)
```

<iframe src="https://trinket.io/embed/python/69500ce2884d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

¿Qué pasa si quieres repetir una tarea 10 veces? ¿100 veces? ¿1000 veces?

Sería difícil escribir una lista con 1000 números [1,2,3,4,5,6,..........,998,999,1000]. Hay una función que puede crear esta lista por ti.

Aquí tienes un ejemplo de cómo crear la lista usando la función `range`:

El siguiente código crea una lista que comienza en 1 y termina en 10.
```
range(1,11)
```
¡Ahora intenta reemplazar la lista [1,2,3,4,5] en el ejemplo anterior por esta función `range`!

La lista en el `for` no tiene que ser solo números, ¡puede ser cualquier cosa! Aquí hay otro ejemplo de lo que puedes hacer:

```python
frutas = ["manzana", "plátano", "naranja"]

for x in frutas:    
  print(x)
```

<iframe src="https://trinket.io/embed/python/02c154536635" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Bucles while

Los bucles `while` son parecidos a los `for`, pero en lugar de iterar sobre una secuencia, se repiten mientras se cumpla cierta condición.
Por ejemplo, vamos a crear un `while` que se repite 5 veces.

```python
contador = 0

while contador < 5:    
  print("El conteo actual es", contador)    
  contador += 1 # Esto es lo mismo que contador = contador + 1
```

<iframe src="https://trinket.io/embed/python/1dafeeebecfc" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Como puedes ver, todo el código debajo del `while` se ejecuta mientras la variable `count` sea menor que 5.

¡Ten cuidado! Asegúrate de que la condición sea `False` en algún momento, o el bucle continuará infinitamente.

### Declaraciónes Break

Aprendiste antes que los bucles `for` y `while` siguen iterando sobre una secuencia hasta que llegan al final o hasta que se cumple una condición.

Hay otra forma de detener estos bucles antes de llegar al final de la lista o antes de que se cumpla la condición.

Puedes hacerlo con la declaración `break`. Esto te permite salir del bucle en un `for` o en un `while`.

Aquí tienes un ejemplo de usar `break` dentro de un `while`:

```python
contador = 0

while True: # Esto hará que el bucle while se ejecute para siempre, ¡a menos que haya una instrucción break en algún lugar del bucle.
  print("el contador es", contador)
  
  if (contador == 10): # Esto dice que si el contador es igual a 10, entonces salir del bucle while
    print("¡Saliendo del bucle!")
    break
  
  contador += 1 # esto es igual a contador = contador + 1
```

<iframe src="https://trinket.io/embed/python/16bb6cb1c7a8" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Desafíos

1. Dada una lista de comidas, escribe un programa que imprima "Me gusta [nombre de la comida]" a menos que sea la que menos le guste al usuario, la cual le preguntas al principio.

```python
listaDeComida = ["manzanas", "helado", "pizza", "plátanos", "zanahorias", "calabaza", "pepinos", "sándwich", "avena", "galletas", "pastel", "espinacas", "col rizada"]
```

2. Dada una lista grande como la que aparece abajo, escribe un programa que pueda encontrar un número particular en esa lista.

```python
listaDeNumero = [69, 430, 363, 80, 166, 476, 250, 38, 84, 405, 41, 302, 480, 57, 155, 17, 350, 87, 313, 36, 191, 367, 163, 167, 185, 93, 131, 314, 444, 452, 47, 457, 28, 21, 405, 350, 241, 121, 411, 152, 244, 207, 199, 371, 193, 4, 286, 482, 496, 283, 23, 466, 8, 84, 47, 231, 112, 329, 328, 85, 208, 161, 42, 251, 277, 207, 496, 3, 137, 138, 436, 447, 442, 313, 479, 464, 191, 19, 78, 333, 480, 36, 378, 232, 438, 451, 139, 444, 392, 75, 245, 151, 225, 50, 369, 49, 73, 325, 430, 335]
```

Por ejemplo, pide al usuario que introduzca un número en la consola, y luego escribe en la consola si fue encontrado.
Pista: Necesitarás convertir la información introducida por el usuario a un entero usando `int(x)`.

<iframe src="https://trinket.io/embed/python/e90a80df15f9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Pregunta

¿Cómo cambiarías este programa si la lista es muy grande? Si ya encontraste un número, ¿necesitas seguir buscando en el resto de la lista? 