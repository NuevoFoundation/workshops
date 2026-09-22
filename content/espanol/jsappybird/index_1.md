---
title: "Javascript: JSappy Bird"
description: "Aprende sobre variables, funciones y condicionales mientras construyes una copia del juego Flappy Bird."
date: 2019-07-23T10:42:43-07:00
difficulties: ["principiante", "intermedio"]
draft: true
hidden: true
---

![alt text](resources/_gen/images/flappy.png "JSappyBird")

1. **Descarga los archivos necesarios.** <link_here>

La plantilla contiene los siguientes archivos:

- phaser.min.js, el marco de trabajo Phaser v2.4.3.
- index.html, donde se mostrará el juego.
- main.js, un archivo donde escribiremos todo nuestro código.
- assets/, un directorio con 2 imágenes.
- Activity 1.js
- Activity 2.js
- Activity 3.js

El archivo index.html es la página principal para nuestro juego Flappy Bird, que también utiliza nuestros dos archivos Javascript (`.js`). El archivo **phaser.min.js** es nuestro marco de trabajo para crear juegos de navegador. El otro archivo es **main.js**, que contendrá toda nuestra lógica en Javascript. Los tres archivos de actividad te ayudarán a que tu juego funcione correctamente. Las partes que necesitas agregar están marcadas con 🐤🐤🐤.

¡Diviértete!

### Variables

Las variables son simplemente nombres que podemos darle a valores como cadenas (strings), números y valores Booleanos. Utilizamos las variables para almacenar información para que el ordenador pueda realizar un seguimiento de ella. Las variables se crean utilizando la palabra clave `var` y el nombre de la variable. Luego, puedes asignar esa variable a la información que deseas almacenar utilizando `=` seguido por la información.

Por ejemplo:

```js
var world = "Hola Mundo";
var x = 88;
var happy = true;
```

También puedes cambiar el valor al que hace referencia un nombre, como esto:

```js
var x = 4;
x = 10;
```

En este ejemplo, la variable `x` se asigna primero al valor 4, luego se reasigna al valor 10.

El siguiente código crea un nuevo objeto de juego Phaser y lo guarda en una variable para usarlo en nuestro juego.

```js
var game = new Phaser.Game(800, 600);
```

## Actividad 1: Utilicemos tanto valores Booleanos como expresiones Booleanas

### Condicionales

Podemos usar declaraciones `if` para ejecutar un código solo si se cumplen ciertas condiciones.

Por ejemplo:

```js
if (isRainingOutside == true) {
  takeUmbrella = true;
}
```

Dentro de los `()` al lado de `if`, debes especificar una _expresión Booleana_. Los valores **Booleanos** son declaraciones `true` o `false`. Podemos utilizar esto en nuestra declaración `if`. Si la expresión es `true`, el código dentro de `{ }` se ejecuta.

También podemos usar expresiones Booleanas para verificar si un número está dentro de un rango específico:

![Operadores de comparación](https://imgur.com/F9gGHiI.png)

También puedes conectar **expresiones Booleanas** usando los operadores `&&` (AND) y `||` (OR).

![alt text](resources/_gen/images/statements.png "declaraciones")

`&&` requiere que ambas _expresiones Booleanas_ sean `true`, mientras que `||` solo requiere que una de ellas sea `true`.

Por ejemplo:

```js
// resulta en true ya que 5 es menor que 8 y 9 no es igual a 10.

(1 < 100 &&
  (5 != 10)(
    // resulta en true ya que al menos una de las expresiones es true
    5 == 5
  )) ||
  10 > 20;
```

#### Abre `Activity 1.js` donde agregarás un condicional que verifica que el pájaro está entre la parte superior de la pantalla (y = 0) y la parte inferior de la pantalla (y = 490).

## Actividad 2: Ahora agreguemos una función que haga que el pájaro salte

### Funciones

**Puedes pensar en una función como una tarea.** Algunas tareas son cortas y simples como sumar `1 + 1` o decir `“¡Hola Mundo!”`. Las funciones pueden ser utilizadas para ejecutar las mismas tareas múltiples veces. En este caso, escribiremos una función para hacer que el pájaro salte.

“Saltar” en este juego significa simplemente cambiar la posición _y_ del pájaro.

#### Abre `Activity 2.js` donde agregaremos una función llamada `jump`.

Podemos hacerlo con esta declaración dentro de la función `jump`:

```js
bird.body.velocity.y = -300;
```

El número puede ser ajustado dependiendo de qué tan alto quieras que el pájaro salte. ¡Prueba cambiar el número para ver las diferencias en qué tan alto salta el pájaro al presionar la barra espaciadora!

Ahora, ¡tu pájaro puede volar por el aire!

## Actividad 3: Agreguemos obstáculos

Actualmente, tu pájaro no tiene realmente nada que esquivar en la pantalla, ¡lo que parece demasiado fácil! Podemos usar código para aumentar la dificultad del juego agregando objetos para esquivar. Para hacer esto, necesitarás usar condicionales y bucles. Ya hablamos sobre condicionales, así que ahora vamos a ver los bucles.

### Bucles

Los bucles se utilizan para ejecutar un bloque de código múltiples veces. Hay muchos tipos de bucles, pero el que usarás para este proyecto es un bucle `for`.

Los bucles `for` tienen el siguiente formato:

```js
for (declaración 1; declaración 2; declaración 3) {
  // bloque de código a ejecutar
}
```

- La declaración 1 se ejecuta una vez antes de ejecutar el código dentro de `{ }`.
- La declaración 2 se utiliza para definir la condición en la que el bucle dejará de ejecutarse.
- La declaración 3 se ejecuta en cada iteración del bucle.

Por ejemplo:

```js
var sum = 0;
for (var i = 0; i < 7; i += 1) {
  sum = sum + 1;
}
```

Después de que se ejecute este código, `sum` tendrá el valor de 6. Esto es porque el bucle agregó 1 a esa variable 6 veces.

Notarás que creamos una variable llamada `i` en la primera declaración dentro del bucle `for`. Esta variable se usa para realizar un seguimiento de cuánto tiempo debe ejecutarse el bucle. En cada ejecución del bucle, verificamos si `i` sigue siendo menor que 7 y, si lo es, ejecutamos el código dentro de las llaves y luego agregamos 1 a `i`.

Este proceso se repite hasta que `i < 7` sea falso.

También podemos usar `i` en el código dentro de las llaves:

```js
var