---
title: "Actividad 4 - Usar efectos para fundir"
weight: 6
draft: false
---

Ahora que tienes un efecto en tu canción, intentemos hacer que la introducción de nuestra canción se desvanezca.

En la actividad 3, usamos la función `setEffect` para aplicar un efecto a una pista específica durante toda la duración de la canción, pero ¿qué sucede si solo quieres que una sección específica de tu canción tenga un efecto? ¡Usa la función `setEffect` con más parámetros!

<img src="../img/screenshot-seteffect2.png" height="30"/>

- `startValue`: El valor inicial aplicado al parámetro
- `start`: La medida en la que se establece el valor inicial
- `endValue`: El valor final del parámetro
- `end`: La medida en la que se establece el valor final

Esta versión de `setEffect` nos permite realizar *automatización* en una pieza específica de nuestra canción. La automatización es una forma de cambiar el valor de un efecto con el tiempo. Una forma de utilizar la automatización es hacer que una canción se desvanezca. Para hacerlo, debemos ajustar el volumen del parámetro **GAIN** en el tipo de efecto **VOLUME** con el tiempo. Por ejemplo, si definimos nuestro `startValue` en -60 dB y nuestro `endValue` en 0 dB, sonará como si nuestra canción se estuviera desvaneciendo con el tiempo. Para ajustar el punto de inicio y la duración del efecto, especifica el `start` y el `end`.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## Agrega otra función `setEffect` a tu canción

1. Agrega otro bloque `setEffect` a tu código, pero asegúrate de que haya 7 parámetros en el bloque.
2. Selecciona VOLUME para `effectType` utilizando el menú desplegable.
3. Selecciona GAIN para `parameter` utilizando el menú desplegable.
4. Si queremos que algo suene como si se desvaneciera, debemos hacer que el volumen del sonido comience muy bajo y aumentarlo gradualmente. Para hacerlo, establece `startValue` en un valor muy bajo (como -60) y `endValue` en un valor más alto (como 0).

{{% notice tip %}}
*Pista:* El volumen se mide en decibelios. En decibelios, cuanto más positivo es un número, más fuerte se vuelve. Además, trata de no superar los 0 decibelios.
{{% /notice %}}

5. Establece valores para los parámetros `start` y `end` para especificar cuándo comenzar y detener el efecto de desvanecimiento.

Tu código debería verse algo así:

<img src="../img/screenshot-set-effect-2.png" height="400"/>