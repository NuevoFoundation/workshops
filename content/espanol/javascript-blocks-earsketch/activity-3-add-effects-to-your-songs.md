---
title: "Actividad 3 - Agregar efectos a nuestra canción"
date: 2019-07-23T11:45:38-07:00
weight: 5
draft: false
---

## Efectos en EarSketch

**Los efectos** permiten al productor alterar el sonido del clip de audio en su propio sonido único. Similar a cómo usamos `fitMedia()` para agregar nuevos clips de audio, debemos usar la función `setEffect()` para definir efectos específicos para cada clip de audio. Es importante tener en cuenta que se pueden colocar múltiples efectos en la misma pista. Esto permite al productor combinar varios efectos juntos. EarSketch tiene muchos efectos incorporados. Para hacer referencia a todos los efectos, visite este [enlace](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) y asegúrese de que el panel *Curriculum* esté seleccionado en la barra de navegación.

Antes de comenzar a agregar efectos a nuestra canción, desglosemos las piezas de las dos funciones `setEffect`:

<img src="../img/screenshot-seteffect1.png" height="30"/>

- `track`: El número de pista al que se aplica el efecto. Nota: Para aplicar un efecto a la pista Master, use 0 como valor para la pista. La pista maestra es donde se reproducen colectivamente todos los audios. Esta es una manera fácil de aplicar un efecto a todos los sonidos que se están procesando.
- `effectType`: El efecto específico que se está utilizando.
- `effectParameter`: La configuración para el efecto que se está utilizando.
- `effectValue`: El valor aplicado al efectoParameter.

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

## Agregar la función setEffect a su canción

Ahora que estamos más familiarizados con el uso de efectos, agreguemos un efecto a nuestra canción.

1. Encuentre el bloque de función `setEffect`. Hay dos bloques `setEffect`; elija el primero en la parte superior. Arrastre el bloque al script debajo de sus bloques de código existentes.
2. Necesitamos reemplazar los parámetros con nuestros propios valores. Use el menú desplegable para reemplazar `track` con 2 (o cualquier número que desee).
3. Use el menú desplegable para ver los diferentes efectos que se pueden seleccionar para el parámetro `effectType`. Seleccione DELAY como `effectType`.
4. Ahora que hemos elegido nuestro `effectType`, necesitamos un `parameter`. Seleccione DELAY_FEEDBACK para `parameter`.
5. Para el último parámetro, ingrese un valor válido. Dado que hemos elegido DELAY_FEEDBACK, debemos especificar un número entre -120,0 y -1,0. Ejemplo: Use -6,0 como valor de efecto para DELAY_FEEDBACK.

Su código ahora debería verse algo así:

<img src="../img/screenshot-set-effect-1.png" height="400