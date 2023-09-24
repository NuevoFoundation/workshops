---
title: "Actividad 2 - Simplificando el código con ciclos (loops)"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

¡Genial! Dibujaste un cuadrado. ¿Pero notas cómo estamos escribiendo las mismas líneas una y otra vez? Tuvimos que repetir las instrucciones para dibujar una línea y dar la vuelta cuatro veces. ¿No sería genial que en vez de dar todas las instrucciones le dijeramos al programa que repita cuatro veces lo qu ele dijimos? ¡Intentémoslo!

Para hacer esto tenemos que usar CICLOS. Un ciclo ejecuta un grupo de instrucciones varias veces. Miremos este ejemplo donde se hace un triángulo:

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

Intentemos entender lo que hace este código. `for i in range(3):` esta sentencia le dice al programa que las intrucciones que están debajo deben correrse dentro de un ciclo. `range(3)`  dice cuántas veces va a repetirse el código (3 veces en este caso). La letra `i` es una **variable** y la usamos para llevar la cuenta de cuántas veces hemos corrido el ciclo.

{{% notice warning %}}

## La sintaxis "tricky" de Python - Parte 1

La **Sintaxis** es la forma en que escribimos los programas para hacerlos entendibles. Cuando hablamos español tenemos reglas (ortografía, gramática, etc) para podernos entender. El lenguaje Python tiene algo parecido para que la computadora pueda entender el código que escribimos.

Primero, notemos que al final de la línea que empieza con `for` agregamos dos punts (`:`); esto significa que la siguiente línea será parte del ciclo `for`. Si no ponemos los dos puntos, la computadora no sabrá qué hacer.

Fíjate que la siguiente línea tiene unos espacios en blanco, un "tab" le llamamos. Este tab le dice a la computadora que considere que forma parte del `for` loop y que no.

Para dar en ejemplo de lo improtante que es poner el tab, veamos el siguiente código. Podemos ver que le quitamos el tab a la línea `turtle.left(120)` así que el código no funcionará como esperamos. El código repetirá la línea  `turtle.forward(50)` tres veces y obteneremos una larga línea recta.

``` python
for i in range(3):
  turtle.forward(50)
turtle.left(120)
```

{{% /notice %}}

Bueno, ahora tomemos el código que teníamos y modifiquemoslo un poco para dibujar un cuadrado en vez de un triángulo. Como pista, puedes volver a revisar lo que hicimos en la Avtividad 2.

<iframe src="https://trinket.io/embed/python/c35ddebfcd" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>