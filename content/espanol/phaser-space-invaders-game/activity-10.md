---
title: "Actividad 10 - Agregando una Pantalla de Título"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 17
---

¡Ahora pondremos en práctica la separación de la escena 1 y la escena 2 creando una pantalla de título para terminar nuestro juego!

¡Esto es muy simple! Primero comentaremos la línea `startGame()` que se encuentra al final de `create()` en `Scene 1`. Usaremos la función `startGame()` para iniciar el juego en lugar de que comience automáticamente como antes:

<!--- ![startGame()](../media/11/comment_out.png)--->
<img src="../media/11/comment_out.png" alt="comentar startGame" style="width:950px;"/>

La consola volverá a mostrar una pantalla negra. Para crear una pantalla de título, debemos importar la imagen de fondo y algo de texto en la sección `start page` de la escena 1:

<!--- ![start_page](../media/11/start_page.png)--->
<img src="../media/11/start_page.png" alt="página de inicio" style="width:950px;"/>

¡Solo puedes crear un fondo como imagen dentro de `create()`, ya que las imágenes solo pueden moverse en las funciones `update()`!

Para los textos, te recomendamos usar diferentes `fuentes` y `colores de relleno` para el texto del título y el texto de inicio.

Ahora, llamaremos al método `startGame()` solo si el jugador hace clic para iniciar el juego:

<!--- ![on_click](../media/11/on_click.png)--->
<img src="../media/11/on_click.png" alt="al hacer clic" style="width:950px;"/>

Tu pantalla debería verse algo así:
![pantalla_título](../media/11/title_screen.gif)

## ¡Felicitaciones!

¡Ahora has completado todas las lecciones y has creado tu propio juego de Space Invader! ¡Diviértete con él! 👏🏽👏🏽👏🏽