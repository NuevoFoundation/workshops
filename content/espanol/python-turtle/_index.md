---
title: "Python Turtle"
description: "Aprender Python con Turtle"
date: 2019-09-22T23:26:18-05:00
difficulty: "Principiante"
---

# Python con Turtle

# Introducción

Bienvenidos al mundo de Nueva Colmena! Llegaste justo a tiempo para ayudar a nuestra abeja bebé Alex.


![animation of baby bee Alex](https://media1.giphy.com/media/ozjz5omKqJYex8CaDV/giphy.gif)

Alex vive en un país llamado Isla Tortuga. Los habitantes de Isla Tortuga hablan un lenguaje llamado **Python**.  Vamos a usar este lenguaje para enseñar a Alex cómo vivir en una colmena. ¿Estás listo para jugar?

# Part 1 - Construyendo la colmena

Para que Alex pueda vivir en una colmena, necesita aprender a construir un panal. Vamos a usar una biblioteca de Python que se llama `turtle` para dibujar el panal.


## Using Repl.it

Vamos a utilizar la herramienta Repl.it para jugar con nuestros códigos Python. Este es un ejemplo de una ventana interactiva como las que usaremos en todo el tutorial:


<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleIntroduction?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Antes de empezar, entendamos como funciona esta ventana. El programa `main.py` contiene las intrucciones que la computadora va a ejecutar o "correr" (Run en inglés). Al presionar el botón **Run**, le estás diciendo a la computadora que ejecute las instrucciones que están en el programa. Los resultados del programa los puedes ver en la pantalla blanca que está debajo, en la pestaña **result**

Ahora explicaremos parte del código que tenemos en el archivo `main.py` 

{{% notice tip %}}


### Bibliotecas (Library) e instrucciones "import" 

Mira el inicio del código. Ahí puedes ver la siguiente línea


```
import turtle
```

Esta instrucción nos permite toda la funcionalidad para dibujar que proporciona la biblioteca `turtle`. Una **biblioteca** es el lugar donde se agrupan en Python las instrucciones relacionadas a un tema en particular. Hay bibliotecas para hacer documentos, otras para conectarse a internet, otras para hacer operaciones matemáticas. `turtle` es una biblioteca para dibujar y que podemos controlar a través de las instrucciones que le demos.


### Comentarios (Comments)

La línea gris que empieza con `#` se llama **comentario**. Estos son notas en el código que nos ayudan a explicar qué está pasando. Como los comentarios son ignorados por la computadora, suelen ser usados para que otros puedan entender lo que nuestro código está haciendo.

{{% /notice %}}

## Introducción - Dibujando una línea de color

Ante de que Alex pueda aprender a crear una colmena, él debe aprender primero cómo dibujar una línea. Haremos esto en dos partes.

Primero, necesitamos decirle a la tortuga qué color queremos usar para dibujar la línea. Para hacerlo de color naranja (orange in inglés) esta es la instrucción:


```
turtle.color("orange")
```

Intentemos entender esta línea de código en más detalle.



{{% notice tip %}}

### Cadenas (Strings)

Todo lo que veas entre **comillas ""** se llama **cadena o string**. Un string es solo una secuencia de caracteres, es decir, de números, letras o símbolos.

En el código que escribimos arriba `"orange"` es un string. Otros ejemplos de string pueden ser `"123"`, `"abc!"` o `"green"`. ¡Ojo!, `123`, `abc!` and `green` NO son strings ¡porque no tienen comillas!arks!

### Métodos

`turtle.color()` es un **método**. Usamos los métodos para hacer que la tortuga haga ciertas acciones. En este caso, `turtle.color()` está cambiando el color con el que va a dibujar. Nosotros le dijimos que cambiara su color original por naranja (orange) cuando mandamos el **string** `"orange"` como un  **argument**. 


### Argumentos

Los argumentos son los valores que le pasamos a los **métodos**. En nuestro ejemplo, `turtle.color()` necesita un **argumento** que represente el nombre del color que va a usar la tortuga, así que pasamos `"orange"` como un **argument** al método. Podríamos usar otro color pero tiene que ser un color que el método entienda. Los colores que reconoce son `"red"`, `"orange"`, `"yellow"`, `"green"`, `"blue"`, `"purple"`, `"black"`, `"pink"`, y `"gray"`. Si mandamos algún color diferente, el método no lo reconocerá y usará el color que tenía al inicio: negro.


{{% /notice %}}

Ahora que ya escogimos el color que queremos, ¡ya podemos dibujar la línea! Para dibujar la línea tenemos dos **métodos** que podemos usar:


```
turtle.forward(50)
turtle.backward(50)
```

`turtle.forward(50)` hará que la tortuga se mueva hacia adelante 50 pixeles y dibujará la línea en esa dirección mientras que  `turtle.backward(50)` hará lo mismo pero hacia atrás.

{{% notice tip %}}

### Pixeles

Una imagen  está compuesta por miles o millones de pixeles. Un pixel es una unidad de medida para las imagenes digitales. Imagínalo como cada uno de los pequeños puntos de los que está hecha una imagen.

### Enteros (Integers)

Un **integer** es sólo un número, ya sea negativo o positivo. En nuestro ejemplo, tanto `turtle.forward()` como  `turtle.backward()` necesitan un **entero** como argumento. Cuando escogimos el color necesitabamos un **string** pero esta vez necesitamos un **entero**. Esto es porque el **argumento** representa el número de pixeles que se moverá la tortuga en la dirección que le indicamos. No tendría sentido decirle que se mueva `"orange"` pixeles, ¿o sí?



Para que la tortuga se mueva hacia adelante el código debería verse así:


```
import turtle

turtle.color("orange")
turtle.forward(50)
```

Copia las líneas de arriba, pégalas en el archivo `main.py` que teníamos al inicio, y da click en Run.

{{% /notice %}}


Como ejercicio, trata de entender que hace la siguiente línea de código. Después pégala al final del archivo `main.py` y vuélvelo a correr.

```
turtle.shape("turtle")
```

{{% notice warning %}}


### ¡AYUDA! No se ve nada en la pantalla

Si, después de presionar el botón **Run**, no logras ver nada en la pestaña **result**, revisa si hay una **x roja** en la pestaña **console**. Si la ves, es porque tienes errores en el código. Pídele ayuda al instructor par revisar tu código.

Mientas tanto puedes revisar lo siguiente:

1.	No uses letras mayúsculas.
2.	Asegúrate que ninguna línea que hayas escrito tenga espacios al inicio.
3.	Revisa que el color que hayas escogido esté entre comillas y que esté entre os paréntesis del commando `turtle.color()`.

{{% /notice %}}


## Actividad  1 - Dibujando un cuadrado

¡Muy bien! Has ayudado a Alex a dibujar una línea. Ahora demos un paso más y dibujemos un cuadrado. Para dibujarlo, necesitamos seguir los siguientes pasos:

1. Ir hacia adelante 50 pixeles.
2. Girar a la izquierda 90 grados.
3. Ir hacia adelante 50 pixeles.
4. Girar a la izquierda 90 grados.
5. Ir hacia adelante 50 pixeles.
6. Girar a la izquierda 90 grados.
7. Ir hacia adelante 50 pixeles.

Recuerda que debes usar `turtle.forward()` para dibujar líneas. Para girar 90 grados necesitas pasar `90` como argumento al método `turtle.left()`:

```
turtle.left(90)
```

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity1?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


## Activity 2 - Simplificando el código con ciclos (loops)

¡Genial! Dibujaste un cuadrado. ¿Pero notas cómo estamos escribiendo las mismas líneas una y otra vez? Tuvimos que repetir las instrucciones para dibujar una línea y dar la vuelta cuatro veces. ¿No sería genial que en vez de dar todas las instrucciones le dijeramos al programa que repita cuatro veces lo qu ele dijimos? ¡Intentémoslo!

Para hacer esto tenemos que usar CICLOS. Un ciclo ejecuta un grupo de instrucciones varias veces. Miremos este ejemplo donde se hace un triángulo:

```
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

Intentemos entender lo que hace este código. `for i in range(3):` esta sentencia le dice al programa que las intrucciones que están debajo deben correrse dentro de un ciclo. `range(3)`  dice cuántas veces va a repetirse el código (3 veces en este caso). La letra `i` es una **variable** y la usamos para llevar la cuenta de cuántas veces hemos corrido el ciclo.

{{% notice warning %}}

###  La  sintaxis "tricky"  de Python - Parte 1

La **Sintaxis** es la forma en que escribimos los programas para hacerlos entendibles. Cuando hablamos español tenemos reglas (ortografía, gramática, etc) para podernos entender. El lenguaje Python tiene algo parecido para que la computadora pueda entender el código que escribimos.

Primero, notemos que al final de la línea que empieza con `for` agregamos dos punts (`:`); esto significa que la siguiente línea será parte del ciclo `for`. Si no ponemos los dos puntos, la computadora no sabrá qué hacer.

Fíjate que la siguiente línea tiene unos espacios en blanco, un "tab" le llamamos. Este tab le dice a la computadora que las sentencias deben de considerarse dentro del ciclo.

As well, we added a tab in front of some lines of code in the example above. The tab tells the computer these statements are considered a part of the `for` loop. 

Para dar en ejemplo de lo improtante que es poner el tab, veamos el siguiente código. Podemos ver que le quitamos el tab a la línea `turtle.left(120)` así que el código no funcionará como esperamos. El código repetirá la línea  `turtle.forward(50)` tres veces y obteneremos una larga línea recta.

```
for i in range(3):
  turtle.forward(50)
turtle.left(120)
```

{{% /notice %}}


Bueno, ahora tomemos el código que teníamos y modifiquemoslo un poco para dibujar un cuadrado en vez de un triángulo. Como pista, puedes volver a revisar lo que hicimos en la Avtividad 2.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Actividad 3 - Dibujar un hexágono

¡Buen trabajo! Acabas de dibujar tu primera figura con Python y Turtle. Hagamos otros pequeños cambios al código que escribimos para hacer el cuadrado e intentemos hacer un hexágono. Alex es una abeja así que después de todo, él necesita dibujar hexágonos para crear su colmena.

Piensa en cuántos lados tiene un hexágono. Si divides los 360° que tiene un círculo entre el número de lados del hexágono, tendrás los grados del ángulo para hacer tu nueva figura.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity3?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Actividad 4 - Simplificando el código con funciones

Ya dibujamos un hexágono. Pero es sólo uno de los muchos que necesita para construir su colmena. Una vez más parece  we tendríamos que repetir el código varias veces para dibujar muchos hexágonos. Afortunadamente no tenemos qué hacerlo. ¡Las **funciones** vienen a nuestro rescate!

{{% notice tip %}}

### Funciones

Una función es una manera de agrupar líneas de código para hacer algo. Por ejemplo, `turtle.forward(50)` mueve la tortuga hacia delante 50 paso y `turtle.left(120)` gira la tortuga 120 grados hacia la izquierda. ¿Y qué pasaría si siempre quisieramos hacer esas dos cosas juntas? Podríamos ponerlas en una función que se llame  `draw_line()` para que cada que mandemos llamar a esa función esas dos acciones juntas sucedan. 



{{% /notice %}}

Este es un ejemplo de la  **definición de funcion** y cómo se usa


```
def draw_line():
  turtle.forward(50)
  turtle.left(120)
```

La primera línea se llama **cabecera** o **header**. La palabra `def` le dice a la computadora que estamos definiendo una función. Después le pone a la función un nombre, en este caso `draw_line`. Finalmente, no olvidemos esto que va al final: `():`, que le dice a la computadora que estamos empezando el **cuerpo** de la función.


{{% notice tip %}}

###  Material extra : Parámetros  

Dentro de los paréntesis `()` solemos poner los **parámetros** de la función. Un parámetro es un dato de entrada que le damos a la función para que esta la use para generar una salida. Por ejemplo, para hacer una suma necesitamos dos dígitos. Cada uno de estos dígitos sería un parámetro. En nuestro ejemplo no vamos a usar parámetros así que vamos a dejar los paréntesis en blanco.

{{% /notice %}}

Similar a un ciclo for, lo que sea que queramos que la función ejecute debe tener un tab el inicio.

Pero no basta sólo con crearla sino que hay que mandarla llamar. Esto se hace escribiendo el nombre de la función seguido de paréntesis:


```
def draw_line():
  turtle.forward(50)
  turtle.left(120)

draw_line()  # Aquí llamamos a la función
```

A esto se le llama una **llamada** de la función `draw_line()`. Una llamada corre el código que tiene dentro la función que estamos invocando.
 
Si nos imaginamos la función como una recete, una llamada a una función es como hacer la receta.

{{% notice info %}}

### Tips

1. Siempre asegúrate de que los nombres de tus funciones sean descriptivos. Es decir que digan qué hace la función.
2. Las llamadas a tu función siempre deben estar escritas más abajo que la definición de tu función.

{{% /notice %}}

{{% notice warning %}}

###   La  sintaxis "tricky"  de Python - Parte 2

Notemos que las funciones usan una sintaxis similar a la que usan los ciclos `for`: tienes que poner el símbolo `:` al final de la línea donde se declara la función y todas las líneas que estén dentro de la función deben empezar con dos espacios.

¿Pero qué pasaría si necesitaramos un ciclo `for` dentro de nuestra función? Entonces hay que combinar las reglas. A continuación hay un ejemplo de cómo poner un ciclo for dentro de una función:

```
def draw_line():
  for i in range(3):
    turtle.forward(50)
```

¿Te fijas cómo la línea `turtle.forward(50)` tiene dos tabs al inicio? Esto es porque ocupa un tab por estar dentro del ciclo `for` y otro tab por estar dentro de la función.

{{% /notice %}}

Intentemos ahora crear nuestra propia función y llamémosla `draw_hexagon()`. Recuerda incluir la cabecera o header dela función, el número de lados que tiene un hexágono y el ángulo que debes usar: 60 grados.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity4?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Actividad 5 - Dibujar la colmena

![](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563991066657_honey_comb.png)

¡Llegamos a la prueba final! Vamos a crear la colmena para que Alex viva en ella. Afortunadamente una colmena es cimplemente 6 hexágonos así que podemos usar lo que ya aprendimos sobre funciones y ciclos para crear la colmena.


En esta actividad primero crearemos una función llamada `draw_honeycomb()`. Dentro del cuerpo de esta función pondremos un ciclo que se repita seis veces. Dentro del ciclo dibujaremos el primer hexágono con la función `draw_hexagon()` que ya tenemos construida. Ahora, movamos la tortuga un poco para que pueda pintar el siguiente hexágono. Para hacer eso necesitamos decirle al programa que al terminar de dibujar el hexágono se mueva hacia adelante 50 pixeles y luego gire a la derecha 60 grados.

Dibujar la colmena puede tomar un rato. Para que la tortuga vaya más rápido puedes modificar la velocidad a la que se mueve. Las velocidades van del 1 al 10 donde 1 es la más lenta y 10 la más rápida. Pon el siguiente código justo debajo de donde está la línea que cambia el color de la tortuga.

```
  turtle.speed(8)
```

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity5?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

# Parte 2: Construyendo una Flor de Mandala

![mandala flower with random color petals](https://paper-attachments.dropbox.com/s_F078714AB8FA59FD292476DB5E3304D54CD817148B6A8087A90D63D6C59A7C0D_1563989900782_mandala+colors.PNG)

¡Buen Trabajo! Terminaste de construir un panal para la colmena de Alex, pero ¡Alex también necesita conseguir polen de las flores! ¿No seria agradable también agregar una flor a la imagen? En la parte 2, ¡crearemos una flor de mandala! (Permanece atento - te mostraremos como luce una flor de mandala.)

### Actividad 6 - Moviendo la tortuga

Nuestro primer paso es mover la tortuga a una nueva posición para dibujar la flor (¡no queremos dibujar la flor encima de la colmena!). Para hacer esto, primero necesitamos usar los siguientes métodos:

```
turtle.penup() 
turtle.goto(x,y)
turtle.pendown()
```

`turtle.penup()` le dice a la tortuga que levante su pluma para que no dibuje mientras se mueve. Entonces, con `turtle.goto(x,y)`, le estamos diciendo a la tortuga la posición donde debe moverse. Después de eso le decimos a la tortuga que vuelva a bajar su pluma usando `turtle.pendown()` para que pueda comenzar a dibujar nuevamente. 

<!--TODO: Add a picture of a graph with the x and y coordinates.-->

{{% notice info %}}

### Pista

La `x` y la `y` en el método `turtle.goto()` son las coordenadas `x` y `y` de la tortuga. Queremos cambiar las coordenadas `x`, `y` de la tortuga desde `(0, 0)` que es el centro de la imagen, a algún lugar un poco mas lejos para que la flor de mandala no cubra parte de la colmena.

{{% /notice %}}

Para completar esta actividad, mueve a la tortuga a la posición (300, 300) sobre el lienzo. Esto la moverá a la esquina superior derecha.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity6?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Actividad 7 - Dibujando una figura 8

![drawing a figure 8](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563992981796_figure8.PNG)

¡Excelente! Ahora hagamos la figura de un 8 como primer paso para hacer una flor de mandala! Una figura de un 8 son solo dos círculos opuestos entre sí. 
Para hacer esto podemos hacer uso del método `turtle.circle(x)`, el cual toma un entero `x` como el radio del círculo. (Puede recordar que `radio * 2` es que tan ancho es el circulo.) Tener el radio como un **argumento** significa que podemos decidir qué tan grande o pequeño debe ser el círculo.

```
  import turtle
  turtle.circle(50)
```

En el ejemplo anterior, el círculo es de 100 píxeles de ancho y es dibujado en sentido contrario a las manecillas del reloj. Si el argumento para `turtle.circle()` es negativo, entonces el círculo se dibuja en dirección de las manecillas del reloj y es opuesto a la versión original.

Usando esta información, crea una nueva función llamada `figure_8()` que dibuje una figura de un 8.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity7?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Actividad 8 -  Creando una flor de mandala

Hemos terminado de crear nuestra primera figura de un 8! Ahora podemos usar la función `figure_8()` para crear una flor de mandala! Una flor de mandala es muchas figuras 8 puestas encima de otras en ángulos diferentes. Entonces, para hacer esto necesitamos usar un... lo has adivinado, un ciclo!

Crea una nueva función llamada `mandala_flower()`. En el ciclo llamaremos la función `figure_8()` que escribimos anteriormente para crear una figura de un 8. Luego, hay que girar la tortuga a la izquierda o derecha un cierto número de grados (por ejemplo, 10 grados). Repita estos pasos muchas veces para hacer una flor de mandala; es una buena idea crear un ciclo que se repita al menos 35 veces. 

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity8?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Actividad 9 - Coloreando tu flor de mandala

![mandala flower with blue pedals](https://paper-attachments.dropbox.com/s_F078714AB8FA59FD292476DB5E3304D54CD817148B6A8087A90D63D6C59A7C0D_1563989987816_mandala+one+color.PNG)

Ahora que ya tenemos la forma de una flor de mandala, ¡es momento de colorearla! Aun vamos a utilizar el método `turtle.color()`; sin embargo esta vez vamos a utilizar un valor RGB en lugar un valor de color en cadena de texto, así que podemos producir una gran variedad de colores.

{{% notice tip %}}

### Colores RGB (Red-Green-Blue)

En la escuela primaria, puede que recuerdes que al mezclar colores, puedes producir nuevos colores. Por ejemplo, la combinación de rojo y azul hace el purpura. También podemos cambiar la cantidad de rojo y azul mezclados para crear diferentes tonos de purpura. La computadora hace algo similar para producir colores. Al combinar varias intensidades de rojo, verde y azul, podemos crear colores más variados, tal como como azul polvo, amarillo dorado y rosa salmón. Click [aqui](https://htmlcolorcodes.com/color-names/) para ver los colres y su forma correspondiente en hexadecimal.

El el método `turtle.color()`, podemos especificar argumentos enteros correspondientes a la cantidad de rojo, verde y azul a mezclar. Cada número entero debe estar entre `0` y `255` inclusivos. Un ejemplo puede ser `turtle.color(30, 100, 238)`, que produce un tono azul oscuro.

{{% /notice %}}

Actualiza tu flor de mandala para usar un color de tu preferencia. ¡Siéntete libre de experimentar con colores diferentes!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity9?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Actividad 10 - Randomizar el color de los pétalos de tu flor de mandala

![mandala flower with random color petals](https://paper-attachments.dropbox.com/s_F078714AB8FA59FD292476DB5E3304D54CD817148B6A8087A90D63D6C59A7C0D_1563989900782_mandala+colors.PNG)

Hemos establecido con éxito el color de la flor de mandala en un valor RGB. Ahora, exploremos cambiar el color de los pétalos individuales de la flor de mandala 

Haremos uso de la biblioteca `random` de python. El método `random.randint()` nos permite elegir un valor aleatorio para cada uno de los valores rojo, verde o azul. Para elegir un valor que esté entre 0 inclusivo y 256 exclusivo (en otras palabras, entre 0 y 255 inclusivo), necesitamos usar `random.randint(0, 256)`.

Usa `random.randint(0, 256)` tres veces para generar tres valores aleatorios y utilizalos en el método `turtle.color()`. ¡Ahora deberías poder ver una flor de mandala multicolor! ¡Esta es definitivamente una flor de la que Alex estaría interesado en recolectar néctar!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity10?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

¡Felicidades! ¡Ayudaste a Alex a hacer un panal y una flor! ¡Ahora puede vivir feliz en su colmena y hacer mucha miel! Su imagen final debería verse así:

![final product](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563991731125_final_image.png)

## Actividad 11 - Ahora es tu turno!

Si queda algo de tiempo, ¡Intenta dibujar tus propias formas y diseños! Has de tu imagen interesante usando varias formas y colores.

Click [aquí](https://repl.it/languages/python_turtle) para abrir una ventana en blanco repl.it e iniciar tu propia creación.

<!--
## Help, I am stuck!

Stuck? Check the Answer key for the activity that you are stuck on!

```
#The below 3 lines are needed for the introduction activity and all the other activities as well.

import turtle
turtle.color("orange")
turtle.shape("turtle")

# Introduction activity
def draw_line():
  turtle.color("orange")
  turtle.forward(50)
#TODO: Uncomment the below line to call the draw_line() function so that it runs
#remember to comment it back out again before going to the next part!
#draw_line()

#Activity 1
def draw_square():
  turtle.color("red")
  turtle.forward(50)
  turtle.left(90)
  turtle.forward(50)
  turtle.left(90)
  turtle.forward(50)
  turtle.left(90)
  turtle.forward(50)
  turtle.left(90)

#TODO: Uncomment the below line to call the draw_square() function so that it runs
#remember to comment it back out again before going to the next part!
#draw_square()

#Activity 2
def draw_square_using_for_loop():  
  turtle.color("red")
  for i in range(4):
    turtle.forward(50)
    turtle.left(90)

#TODO: Uncomment the below line to call the draw_square_using_for_loop() function so that it runs
#remember to comment it back out again before going to the next part!
#draw_square_using_for_loop()

#Activity 3
def draw_hexagon():
  for i in range(6):
    turtle.color("orange")
    turtle.forward(50)
    turtle.left(60)
    
#TODO: Uncomment the below line to call the draw_square_using_for_loop() function so that it runs
#remember to comment it back out again before going to the next part!   
#draw_hexagon()

# Activity 4
def draw_hexagon():
  for i in range(6):
    draw_line()
    turtle.left(60)
    
#TODO: Uncomment the below line to call the draw_hexagon() function so that it runs
#remember to comment it back out again before going to the next part!
#draw_hexagon()

# Activity 5
def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(50)
    turtle.right(60)

#TODO: Uncomment the below line to call the draw_honeycomb() function so that it runs
#remember to comment it back out again before going to the next part!
#draw_honeycomb()

# Activity 6
turtle.penup()
turtle.goto(300, 300)
turtle.pendown()

# Activity 7
def figure_8():
  turtle.circle(50)
  turtle.circle(-50)
  turtle.left(10)

#TODO: Uncomment the below line to call the figure_8() function so that it runs
#remember to comment it back out again before going to the next part!
#figure_8()

# Activity 8
def mandala_flower():
  for i in range(35):
    figure_8()
    
#mandala_flower()

# Activity 9
def mandala_flower():
  turtle.color(30, 100, 160)
  for i in range(35):
    figure_8()
    
#mandala_flower()

# Activity 10
def mandala_flower():
  for i in range(35):
    turtle.color(random.randint(0, 256),random.randint(0, 256), random.randint(0, 256))  
    figure_8()

#mandala_flower()
```
-->
