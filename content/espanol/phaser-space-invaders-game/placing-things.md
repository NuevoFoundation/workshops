---
title: "Colocando cosas en Phaser"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 5
---

## Colocando Texto

Ahora, aprenderás cómo colocar elementos dentro de Phaser. Observa el repl a continuación.

¡Primero repasemos cómo colocar texto!

```javascript
message = this.add.text(20, 10, "Hello World!", {
	font: "25px Arial",
	fill: "white"
});
```

Estas líneas de código crean una variable llamada "message." Esta variable agrega el texto "Hello World" a la coordenada (X, Y) (20, 10) en nuestra ventana de juego. El código también especifica que el texto se crea con el color blanco, fuente Arial y tamaño de fuente de 25 px.

Pon esta línea en tu método `create()` al final de la página y verifica si aparece en la ventana de tu juego.

{{% notice note %}}

1. Al crear texto, el nombre de la variable no es el texto que se mostrará en la pantalla; es lo que se coloca entre comillas.
2. Esta sintaxis también puede usarse para colocar texto que esté almacenado en una variable de tipo String.

{{% /notice %}}

{{% notice warning %}}

### ¡Ayuda! ¡La ventana de mi juego es muy pequeña!

No te preocupes, en realidad es relativamente grande, pero por defecto el repl la minimiza. Puedes ampliar la vista de la ventana arrastrando las barras entre ellas.

{{% /notice %}}

## Colocando un Fondo

Los textos son muy simples, pero cuando queremos usar nuestros propios sprites personalizados para el juego (lo cual es casi siempre), primero debes cargar el sprite en `preload()` antes de especificar su ubicación en `create()`.

Comencemos creando un fondo. Coloca este código en tu método `preload()`.

```javascript
this.load.image('background', 'assets/sky.png');
```

Esto simplemente carga la imagen en el juego. Ahora, agreguemos esta imagen al juego con `create()`:

```javascript
this.add.image(400, 300, 'sky');
```

Esta línea simplemente coloca la imagen en la coordenada (400, 300). ¡Pruébalo y verifica si tu fondo ya no es una pantalla negra!

{{% notice note %}}

La coordenada (400, 300) se refiere al lugar donde estamos colocando el píxel central de nuestra imagen. Esto significa que (400, 300) será el centro de la imagen. Estamos colocando la imagen aquí para que cubra toda la pantalla como debería hacerlo un fondo.

{{% /notice %}}

## Colocando un Personaje

A continuación, coloquemos un personaje en nuestro mundo.

El código que va en tu función `preload()` se ve así:

```javascript
this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48
});
```

Esto requiere un poco más de código porque se trata de un spritesheet en lugar de un sprite simple. Los spritesheets se ven así:
![dude](../media/example-dude.png)  
Este es el spritesheet para nuestro personaje. Los spritesheets son esencialmente una colección de sprites de un único personaje o elemento en múltiples posiciones. Cuando se reproducen uno tras otro, crean una animación para nuestro juego (lo explicaremos en detalle en la siguiente lección). Aunque para nosotros es obvio que son varias imágenes del mismo personaje, la computadora no lo puede detectar fácilmente por sí sola. Así que necesitamos más sintaxis para indicarle a la computadora qué tan grande es cada sprite del personaje en el spritesheet (en este caso, 32x48).

La sintaxis para colocar este spritesheet en `create()` es casi la misma que con la imagen, pero con un tag de física:

```javascript
dude = this.physics.add.sprite(250, 200, 'dude');
```

En esta línea, estamos creando una variable llamada "dude" que agrega la primera imagen en el spritesheet en la coordenada (250, 200). La imagen también recibe el nombre "dude."

En esta línea, "dude" es el nombre de una variable que estamos creando. 250 y 200 son las coordenadas X y Y donde hemos colocado el sprite, por lo que se colocará en la coordenada (250, 200) en nuestra pantalla. "dude" es el nombre de nuestro sprite, pero no entrará en juego en esta lección en particular.

¡Intenta agregar el personaje! ¿Ves al personaje en tu pantalla?

{{% notice note %}}

1. Para poder ver al personaje, la variable "dude" en `create()` DEBE ser creada después del fondo. Esto se debe a que el código es leído por la computadora de arriba hacia abajo, por lo que si el personaje se coloca antes del fondo, la computadora colocará el fondo encima del personaje, cubriéndolo y haciéndolo no visible para el usuario.
2. El personaje debería estar mirando hacia la izquierda porque, al colocarse por primera vez, los spritesheets siempre se colocarán en la primera entrada del sheet, y para nuestro personaje, está mirando hacia la izquierda.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorPlacingThings" target="_blank">Lanzar Replit</a>