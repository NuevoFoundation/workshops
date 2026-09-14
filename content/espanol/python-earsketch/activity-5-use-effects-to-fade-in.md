---
title: "Actividad 5 - Usar efecto de Fade in"
description: "Actividad 5 - Usar efecto de Fade in"
weight: 9
prereq: "Python Basico: Imprimir, Comentarios, Funciones"
difficulties: ["intermediate"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/VSm6m5p3CUg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Ahora que tienes un efecto en tu canción, vamos a tratar de desvanecernos en la introducción de nuestra canción.

En la actividad 4, usamos la función `setEffect` se utiliza para aplicar un efecto a una pista/canción específica durante toda la duración de la canción, pero ¿qué pasa si solo quieres que una sección específica de tu canción tenga un efecto? ¡Utilice la función `setEffect` con más parámetros!

<img src="../img/screenshot-seteffect2.png" alt="Ejemplo de codigo" width="60%"/>

- `startValue`: el valor inicial aplicado al parámetro
- `start`: la medida en la que se establece el valor inicial
- `endValue`: el valor final del parámetro
- `end`: la medida en la que se establece el valor final

Esta versión de `setEffect` nos permite realizar *automatización* en una pieza específica de nuestra canción. La automatización es una forma de cambiar el valor de un efecto a lo largo del tiempo. Un uso de la automatización es hacer que una canción aparezca o desaparezca gradualmente. Para ello, debemos ajustar el volumen del `parameter` **GAIN** dentro del `type` **VOLUME** a lo largo del tiempo. Por ejemplo, si definimos nuestro `startValue` en -60 db y nuestro `endValue` en 0 db, sonará como si nuestra canción apareciera gradualmente con el tiempo. Para ajustar el punto inicial y la longitud del efecto, especifique `start` y `end`.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## Añadir otra función de `setEffect` a tu pista/canción

1. Agregue otra función de `setEffect` al código, pero asegúrese de que están presentes los 7 parámetros en la imagen de arriba.
2. Establezca `type` en **VOLUME**.
3. Utilice la guía de referencia "Every Effect Explained in Detail" para ver qué parámetros tiene **VOLUME**. Para ajustar la sonoridad de un clip de audio, utilice el `parameter` **GAIN**.
4. Si queremos que un sonido aparezca gradualmente (fade in), debemos hacer que su volumen comience casi en silencio y aumentarlo hasta alrededor de 0 decibelios. Para ello, establezca `startValue` en un valor muy bajo y `endValue` en un valor más alto.

{{% notice tip %}}
*Sugerencia:* El volumen se mide en decibelios. En decibelios, cuanto más positivo es un número, más fuerte se pone. Además, trate de no exceder 0 decibelios.
{{% /notice %}}

5. Establezca valores para `start` y `end` para especificar cuándo iniciar y detener el efecto de aparición gradual.

Tu código debería parecerse a este:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, 1, 9)
fitMedia(HOUSE_MAIN_BEAT_002, 4, 1, 9)
fitMedia(HOUSE_ROADS_BASS_001, 5, 1, 9)

fitMedia(Y37_ORGAN_1, 2, 9, 17)
fitMedia(HOUSE_ROADS_BASS_001, 5, 9, 17)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, 9, 17)

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")

setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)
```