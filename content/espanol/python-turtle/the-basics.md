---
title: "Los basicos - Dibujando una línea de color"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

Ante de que Alex pueda aprender a crear una colmena, él debe aprender primero cómo dibujar una línea. Haremos esto en dos partes.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleIntroduction?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

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

{{% /notice %}}

Para que la tortuga se mueva hacia adelante el código debería verse así:

```
import turtle

turtle.color("orange")
turtle.forward(50)
```

Copia las líneas de arriba, pégalas en el archivo `main.py` que teníamos al inicio, y dale click en Run.

![alt text height="600px" width="70%"](../media/basics-replit.png "Ventana de Repl.it")

Como ejercicio, trata de entender que hace la siguiente línea de código. Después pégala al final del archivo `main.py` y vuélvelo a correr.

```
turtle.shape("turtle")
```

{{% notice warning %}}

### ¡AYUDA! No se ve nada en la pantalla

Si, después de presionar el botón **Run**, no logras ver nada en la pestaña **result**, revisa si hay una **x roja** en la pestaña **console**. Si la ves, es porque tienes errores en el código. Pídele ayuda al instructor par revisar tu código.

Mientas tanto puedes revisar lo siguiente:

1. No uses letras mayúsculas.
2. Asegúrate que ninguna línea que hayas escrito tenga espacios al inicio.
3. Revisa que el color que hayas escogido esté entre comillas y que esté entre os paréntesis del commando `turtle.color()`.

{{% /notice %}}
