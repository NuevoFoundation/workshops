---
title: "Actividad 1 - Colocar Fondo y Nave del Jugador"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 6
---

Esta actividad tendrá dos partes: cargar el fondo del juego y cargar la nave que el jugador eventualmente controlará (por ahora será solo una imagen que no se mueve). Para ambas actividades, el método será muy similar: primero subiremos la imagen al juego en Escena 1 y luego la haremos visible en Escena 2. Puedes pensar en la Escena 1 como el lugar donde se sube la imagen al juego y en la Escena 2 como el lugar donde se crean las cosas que hemos subido.

## Parte 1: El Fondo

Comencemos con el fondo. Nuevamente, para agregar imágenes al juego, primero las subiremos en la Escena 1 y luego las colocaremos en nuestro juego en la Escena 2. Primero, ve al Paso 1 en la función `preload()` en `Scene1.js`:

<!---![background part 1](../media/3/step1.png) --->
<img src="../media/3/step1.png" alt="background part 1" style="width:950px;"/>

Ahora, carga la imagen de fondo en `preload()`.

Para repasar:
* Nada sucederá después de completar esta línea porque simplemente estás cargando la imagen para uso futuro, no colocándola en ningún lugar.

* `imageID` es el nombre que le das a la imagen.

* `imagePosition` es la posición de la imagen.
(una imagen llamada example.png en la carpeta assets, su posición sería assets/example.png)

A continuación, ve al Paso 1 y Paso 2 en la función `create()` en `Scene2.js`. Cada paso requerirá una línea de código, creando un total de 2 líneas:

<!---![background_section](../media/3/background_section.png) --->
<img src="../media/3/background_section.png" alt="background_section" style="width:950px;"/>

¡Intenta cargar la página y verifica si el fondo está funcionando! Tu consola a la derecha debería verse así:

<!---![after_add_image](../media/3/after_add_image.png) --->
<img src="../media/3/after_add_image.png" alt="background_after_add_image" style="width:950px;"/>

## Parte 2: La Nave del Jugador

Haremos casi lo mismo con el jugador, pero con una sintaxis diferente porque la nave del jugador es una hoja de sprites en lugar de una imagen normal (verás por qué en la próxima actividad).

Para esta parte, estarás haciendo el Paso 2 en la función `preload()` en `Scene1.js`:

<!---![background player ship step2](../media/3/step2.png) --->
<img src="../media/3/step2.png" alt="background player ship step2" style="width:950px;"/>


* `SpriteID` y `SpritePosition` funcionan igual que `imageID` y `imagePosition`.

* `FrameWidth` será 32 y `FrameHeight` será 48.

y la sección del `player` en `Scene2.js`:

<!--- ![player_section](../media/3/player_section.png) --->
<img src="../media/3/player_section.png" alt="background player_section" style="width:950px;"/>

{{% notice hint %}}

Si la sección del jugador está correctamente rellenada, pero el jugador no aparece en la pantalla, intenta cambiar `x` y `y`; ¡el jugador podría estar fuera de la pantalla!

{{% /notice %}}

Después de agregar la nave del jugador, tu consola debería verse así:

<!--- ![after_add_player](../media/3/after_add_player.png) --->
<img src="../media/3/after_add_player.png" alt="background after_add_player" style="width:950px;"/>