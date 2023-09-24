---
title: "Actividad 4 - Simplificando el código con funciones"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

Ya dibujamos un hexágono. Pero es sólo uno de los muchos que necesita para construir su colmena. Una vez más parece  we tendríamos que repetir el código varias veces para dibujar muchos hexágonos. Afortunadamente no tenemos qué hacerlo. ¡Las **funciones** vienen a nuestro rescate!

{{% notice tip %}}

## Funciones

Una función es una manera de agrupar líneas de código para hacer algo. Por ejemplo, `turtle.forward(50)` mueve la tortuga hacia delante 50 paso y `turtle.left(120)` gira la tortuga 120 grados hacia la izquierda. ¿Y qué pasaría si siempre quisieramos hacer esas dos cosas juntas? Podríamos ponerlas en una función que se llame  `draw_line()` para que cada que mandemos llamar a esa función esas dos acciones juntas sucedan. 


{{% /notice %}}

Este es un ejemplo de la  **definición de funcion** y cómo se usa

``` python
def draw_line():
  turtle.forward(50)
  turtle.left(120)
```

La primera línea se llama **cabecera** o **header**. La palabra `def` le dice a la computadora que estamos definiendo una función. Después le pone a la función un nombre, en este caso `draw_line`. Finalmente, no olvidemos esto que va al final: `():`, que le dice a la computadora que estamos empezando el **cuerpo** de la función.

{{% notice tip %}}

## Material extra : Parámetros  

Dentro de los paréntesis `()` solemos poner los **parámetros** de la función. Un parámetro es un dato de entrada que le damos a la función para que esta la use para generar una salida. Por ejemplo, para hacer una suma necesitamos dos dígitos. Cada uno de estos dígitos sería un parámetro. En nuestro ejemplo no vamos a usar parámetros así que vamos a dejar los paréntesis en blanco.

{{% /notice %}}

Similar a un ciclo for, lo que sea que queramos que la función ejecute debe tener un tab el inicio.

Pero no basta sólo con crearla sino que hay que mandarla llamar. Esto se hace escribiendo el nombre de la función seguido de paréntesis:

``` python
def draw_line():
  turtle.forward(50)
  turtle.left(120)

draw_line()  # Aquí llamamos a la función
```

A esto se le llama una **llamada** de la función `draw_line()`. Una llamada corre el código que tiene dentro la función que estamos invocando.
 
Si nos imaginamos la función como una recete, una llamada a una función es como hacer la receta.

{{% notice info %}}

## Tips

1. Siempre asegúrate de que los nombres de tus funciones sean descriptivos. Es decir que digan qué hace la función.
2. Las llamadas a tu función siempre deben estar escritas más abajo que la definición de tu función.

{{% /notice %}}

{{% notice warning %}}

## La sintaxis "tricky" de Python - Parte 2

Notemos que las funciones usan una sintaxis similar a la que usan los ciclos `for`: tienes que poner el símbolo `:` al final de la línea donde se declara la función y todas las líneas que estén dentro de la función deben empezar con dos espacios.

¿Pero qué pasaría si necesitaramos un ciclo `for` dentro de nuestra función? Entonces hay que combinar las reglas. A continuación hay un ejemplo de cómo poner un ciclo for dentro de una función:

``` python
def draw_line():
  for i in range(3):
    turtle.forward(50)
```

¿Te fijas cómo la línea `turtle.forward(50)` tiene dos tabs al inicio? Esto es porque ocupa un tab por estar dentro del ciclo `for` y otro tab por estar dentro de la función.

{{% /notice %}}

Intentemos ahora crear nuestra propia función y llamémosla `draw_hexagon()`. Recuerda incluir la cabecera o header dela función, el número de lados que tiene un hexágono y el ángulo que debes usar: 60 grados.

<iframe src="https://trinket.io/embed/python/d100671656" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>