---
title: "Actividad 1 - Establecer tempo y agregar sonidos"
date: 2019-07-23T11:45:38-07:00
weight: 3
draft: false
---

Veamos de cerca el código preexistente y comprendamos lo que significa.

<img src="../img/screenshot-setup-complete.png" height="400"/>

La función `setTempo()` le permite establecer el tempo general del proyecto. El tempo es la velocidad a la que se reproduce una pieza de música. Cambiar el tempo de un proyecto permite crear diferentes estilos de música. ¡Intenta cambiar el tempo de tu función `setTempo` cambiando el número en el bloque y observa qué sucede! Asegúrate de que sea un número entre 45 y 220. A continuación se presentan algunas sugerencias de tempos que puedes usar.

<img src="../img/img-tempo1.png" height="200"/>

Ahora que hemos establecido nuestro tempo, es hora de agregar sonidos. Para hacerlo, debemos utilizar la función `fitMedia()`. Colocaremos un nuevo código debajo del bloque de función `setTempo()`.

## Actividad 1

1. Busca el bloque de función morado `fitMedia()` en el lado izquierdo del editor de código.
2. Arrastra el bloque `fitMedia()` para insertarlo debajo del bloque `setTempo`.
3. Puede que notes que cuando se agrega el bloque, Earsketch produce algunos textos de marcador de posición que tendremos que reemplazar más adelante. Estos textos de marcador de posición también se conocen como `parámetros`.

<img src="../img/screenshot-parameters.png" height="100"/>

Reemplazaremos cada uno de estos textos con un valor válido.

- `sound` - Navega hasta el panel "Sonidos" y encuentra un sonido que te guste. Haz clic en "sound" en el bloque de función `fitMedia()`, luego presiona el botón "Pegar" al lado del sonido que deseas agregar. El nombre del sonido debería aparecer dentro del bloque `fitMedia()`.
- `trackNumber` - Usa el menú desplegable para seleccionar cualquier número entero positivo como número de pista. Para este ejemplo, selecciona `1`.
- `start/end` - Estos parámetros son números enteros positivos cuantificados en compases. Un compás es un segmento de tiempo que se correlaciona con un número específico de tiempos. Intenta establecer `start` en `1` y `end` en `9`.

Tu código debería verse algo así:

<img src="../img/screenshot-fit-media.png" height="400"/>

{{% notice warning %}}

Asegúrate de que los bloques de función y el texto estén colocados correctamente.

{{% /notice %}}

5. Una vez que hayas ingresado tus propios parámetros, presiona "run" y luego haz clic en "play" para escuchar tu clip de audio.

    - **Si ves algún texto rojo, ¡has encontrado algunos errores! Por favor, pide ayuda.** La función `fitMedia()` es la columna vertebral para hacer música en Earsketch. Usaremos esta función mucho, así que si tienes alguna pregunta sobre su uso, ¡por favor pregúntanos!

{{% notice info %}}

La **estación de trabajo de audio digital** (DAW) es el área donde aparecen los sonidos. Se encuentra en la parte superior central de tu ventana