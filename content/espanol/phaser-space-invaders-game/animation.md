---
title: "Creando Animaciones"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 7
---

## Animación en Phaser

La animación funciona mostrando un conjunto de imágenes una tras otra muy rápidamente. Cuando lo hacemos rápido, nuestra mente lo percibe como movimiento. En cierta forma, estás engañando a la mente para que piense que este conjunto de imágenes es solo una cosa que se está moviendo.

![animation](../media/animation.png)

Utilizamos hojas de sprites para las cosas que queremos animar porque podemos crear esa animación desplazándonos a través de las hojas de sprites. Para animar hojas de sprites, hay dos pasos que debemos seguir.

El primer paso es crear las "instrucciones" para la animación.

```javascript
this.anims.create({
    key: "dude_anim",
	frames: this.anims.generateFrameNumbers("dude"),
	frameRate: 10,
	repeat: -1
});
```

Esto crea una animación llamada "dude_anim" que funciona sobre "dude". La velocidad de fotogramas (frameRate) es esencialmente la velocidad de la animación. Repeat se refiere a cuántas veces se repite la animación cuando se reproduce, y un número negativo significa que la animación se reproduce indefinidamente.

El siguiente paso es simplemente decirle al juego que reproduzca la animación especificada en nuestras instrucciones. Esto también se puede hacer en `create()`.

```javascript
this.dude.anims.play("dude_anim");
```

{{% notice note %}}

Cuando hagas esta declaración de reproducción, debes colocar la línea después de que el personaje (dude) se haya colocado en la pantalla, porque el código se escribe de arriba hacia abajo, así que si hacemos esta declaración de reproducción antes de colocar el personaje, la computadora no sabrá qué animar.

{{% /notice %}}

Intenta animar al personaje (dude) de la lección anterior. Siéntete libre de experimentar con los valores y ver cómo cambian el resultado final.
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorAnimation" target="_blank">Lanzar Replit</a>