---
title: "Números"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

La computadora también puede hacer matemáticas. Usa `print()` para imprimir el resultado de las expresiones matemáticas. ¡No se necesitan comillas para los números! A diferencia de las cadenas, puedes hacer operaciones matemáticas con números.

```python
print(7-3)  # imprime 4
print(5 * -6 + 7)   # imprime -23
print(24 * (8-3) / 6)   # imprime 20.0
```

{{% notice note %}}
La computadora hace la división de enteros de manera diferente a tu calculadora habitual. La división de enteros excluye los restos o decimales.

Por ejemplo,

`15/4` da `3`  
`15.0/4.0` da `3.75`

{{% /notice %}}

¡También puedes intentar usar los símbolos matemáticos para crear tus propias expresiones!

| Symbol          | Uso           | Symbol      | Uso         |
| --------------- | ------------- | ----------- | ----------- |
| `+`             | Sumar         | `*`         | Multiplicar | 
| `-`             | Restar        | `/`         | Dividir     | 

### Desafío 1

Vamos a intentar averiguar las respuestas de lo siguiente usando Python. Intenta imprimir el resultado de lo siguiente (<b>asegúrate de no olvidar ningún paréntesis</b>):

- 2 - 19
- (3 + 5) * 6
- (13 + 5 * 8) / (6 - (3 + 7))

### Desafío 2

¿Puedes imprimir esta expresión? `"527 multiplicado por 199 is: __"`

Rellenarás el espacio en blanco con la respuesta de cuánto es `(527 * 199)`. Si quieres imprimir una cadena y un número juntos, primero tienes que convertir el número en una cadena.

Aquí tienes un ejemplo: <font color="blue">print</font>(`"Hello, World!"` + str(5))

{{% notice tip %}}

Usar `str(5)` convierte el número en la cadena `"5"`. Convertir un tipo de dato a otro se llama "casting" (conversión de tipo).

{{% /notice%}}

{{% notice info %}}

#### Dato Curioso: Números Aleatorios

Así es como se imprime un número aleatorio entre 1 (inclusive) y 10 (inclusive):

 ```python 
 # Esta línea importa la librería necesaria
 from random import 
 # Esta línea imprime un número aleatorio entre 1 (inclusive) y 10 (inclusive)
 print(randint(1,10))
 ```

¿Quieres saber más? ¡Pide ayuda o busca en internet! El mejor amigo de todo programador es un motor de búsqueda.

En particular, intenta entender qué significan las palabras <font color="blue">from</font> y <font color="blue">import</font>. Volveremos a estas palabras más adelante durante el proyecto.

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>