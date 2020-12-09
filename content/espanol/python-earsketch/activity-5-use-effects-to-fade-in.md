---
title: "Actividad 5 - Usar efecto de Fade in"
description: "Actividad 5 - Usar efecto de Fade in"
weight: 9
prereq: "Python Basico: Imprimir, Comentarios, Funciones"
difficulty: "Intermedio"
draft: false
---

Ahora que tienes un efecto en tu canción, vamos a tratar de desvanecernos en la introducción de nuestra canción.

En la actividad 4, usamos la función `setEffect` se utiliza para aplicar un efecto a una pista/canción específica durante toda la duración de la canción, pero ¿qué pasa si solo quieres que una sección específica de tu canción tenga un efecto? ¡Utilice la función `setEffect` con más parámetros!

![](../img/screenshot-seteffect2.png)

- `effectStartValue`: el valor inicial aplicado al parámetro
- `effectStartLocation`: la medida en la que se establece el valor inicial
- `effectEndValue`: el valor final del parámetro
- `effectEndLocation`: la medida en la que se establece el valor final

Esta versión de `setEffect` nos permite realizar *automatización* en una pieza específica de nuestra canción. La automatización es una forma de cambiar el valor de un efecto a lo largo del tiempo. Un uso de la automatización es hacer que una canción se desvanezca o se desvanezca. Para ello, debemos ajustar el volumen **GAIN** en `effectParameter` en el efecto **VOLUME** `effectType` a lo largo del tiempo. Por ejemplo, si definimos nuestro `effectStartValue` en -60 db y nuestro `effectEndValue` en 0 db, sonará como si nuestra canción se desvaneciera con el tiempo. Para ajustar el punto inicial y la longitud del efecto, especifique `effectStartLocation` y `effectEndLocation`.

## Añadir otra función de `setEffect` a tu pista/canción

1. Agregue otra función de `setEffect` al código, pero asegúrese de que están presentes los 7 parámetros en la imagen de arriba.
2. Establezca `effectType` en **VOLUME**.
3. Utilice la guía de referencia "Cada efecto explicado en detalle" para ver qué parámetros tiene **VOLUME**. Para ajustar la sonoridad de un clip de audio, utilice el `effectParameter` **GAIN**.
4. Si queremos hacer que algo suene como si se estuviera desvaneciendo (fade in), debemos tener el volumen del sonido comenzar en nada y aumentarlo hasta alrededor de 0 decibelios. Para ello, establezca `effectStartValue` en un valor muy bajo y `effectEndValue` para que sea un valor más alto.

{{% notice tip %}}
*Sugerencia:* El volumen se mide en decibelios. En decibelios, cuanto más positivo es un número, más fuerte se pone. Además, trate de no exceder 0 decibelios.
{{% /notice %}}

5. Establezca valores para `effectStartLocation` y `effectEndLocation` para especificar cuándo iniciar y detener el fundido en vigor.

Tu código debería parecerse a este:

```python
    from earsketch import *

    init()
    setTempo(120)

    fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
    fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

    # Section A
    def sectionA(startMeasure, endMeasure):
        fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
        fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
        fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

    # Section B
    def sectionB(startMeasure, endMeasure): 
        fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
        fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
        fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

    sectionA(1, 9)
    sectionB(9, 17)
    sectionA(17, 25)
    setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
    setEffect(2, DELAY, DELAY_TIME, 1200.0)
    setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)

    finish()
```