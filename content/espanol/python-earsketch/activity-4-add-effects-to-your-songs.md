---
title: "Actividad 4 - Añadir efectos a tu canción"
description: "Actividad 4 - Añadir efectos a tu canción"
weight: 8
prereq: "Python Basico: Imprimir, Comentarios, Funciones"
difficulties: ["intermediate"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/vryYSBvwnIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Efectos en EarSketch

Los efectos permiten al productor alterar el sonido del clip de audio en su propio sonido único. De forma similar a como usamos `fitMedia()` para añadir nuevos clips de audio, debemos utilizar la función `setEffect()` para definir efectos específicos para cada clip de audio. Es importante tener en cuenta que se pueden colocar múltiples efectos en la misma pista. Esto permite al productor combinar múltiples efectos juntos. Earsketch tiene muchos efectos incorporados. Para hacer referencia a todos los efectos, visite este [enlace](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) y asegúrese de que el panel *Curriculum* aparezca en el lado derecho de la pantalla.

Antes de empezar a añadir efectos a nuestra canción, vamos a desglosar las piezas de las dos funciones `setEffect`:

![](../img/screenshot-seteffect1.png)

- `track` (o pista): es el número de pista al que se aplica el efecto. Nota: Para aplicar un efecto a la pista maestra, utilice 0 como valor para la pista. La pista maestra es donde todo el audio se reproduce colectivamente juntos. Esta es una manera fácil de aplicar un efecto a todos los sonidos que se están procesando.
- `type`: el efecto específico que se utiliza
- `parameter`: la configuración del efecto que se está utilizando
- `value`: el valor aplicado al `parameter`

<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.3%;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>

<div class="row">
  <div class="column">
    <img src="../img/Robot_2_Pink.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_1_Green.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_2_Blue.PNG" width="45%">
  </div>
</div>

## Añadir la función `setEffect` en tu canción

Ya que estamos más familiarizados con el uso de efectos, vamos a añadir un efecto a nuestra canción.

1. En el explorador de API de la izquierda, desplácese hasta `setEffect` API. 
2. Inserte una llamada a la función `setEffect` en el código mediante el icono de pegar.
3. Necesitamos reemplazar los parámetros con nuestros propios valores. Coloque un valor entero para `track`. Pongamos 2.
4. Para el resto de los parámetros del efecto, haga clic en **Open** junto a la API `setEffect` y verá un enlace a "Every Effect Explained in Detail". Haga clic en él para abrir esta sección en el lado derecho de su ventana.

<img src="../img/screenshot-seteffect-open.png" height="400"/>

<img src="../img/screenshot-seteffect-explain.png" width="200"/>

5. Usted puede notar que Earsketch tiene muchas variaciones diferentes de efectos. De forma predeterminada, debería ver la sección 10.1 BANDPASS a la derecha. Por ahora, usaremos el DELAY de la sección 10.4 como `type` en nuestra llamada a la función `setEffect`.
6. Ahora que hemos elegido nuestro `type`, necesitamos un `parameter`. Navegue a la sección 10.4 a la derecha para explorar los diversos parámetros soportados para `DELAY`. Aquí hay una foto de esa sección. Se recomienda utilizar `DELAY_FEEDBACK`.
    ![](../img/screenshot-effect-parameter.png)

7. Para el parámetro final, introduzca un valor válido. Puesto que hemos elegido `DELAY_FEEDBACK`, debemos especificar un número entre -120.0 y -1.0 (como se muestra en la imagen de arriba). Ejemplo: Utilice -6.0 como valor de efecto para `DELAY_FEEDBACK`.

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
```