---
title: "Actividad 3 - Cambiar la Asignacion de Teclas para Mover la Paleta Izquierda"
date: 2019-07-29T13:24:17-07:00
weight: 5
draft: false
---

¡Buen trabajo! No solo arreglaste el límite del juego, sino que también pudiste asignar color a los objetos. Ahora, veamos si puedes cambiar las teclas para mover la paleta.

Para hacer esto, necesitamos modificar uno de los parámetros que pasamos al crear el objeto de la paleta izquierda. Recuerda que en la sección **"Conceptos Basicos - Clase y Objeto"** definiste la clase `Paddle` con las asignaciones de teclas UP y DOWN como sus atributos.

Busca `# TODO (ACTIVITY 3)` en el código. Modifica el valor del atributo correspondiente para la paleta izquierda de modo que al presionar la tecla `'s'` la paleta izquierda se mueva hacia abajo. Observa que actualmente el movimiento hacia abajo de la paleta izquierda está controlado por la tecla `'T'`.

{{% notice tip %}}

Intenta intercambiar la tecla UP por otra. Presiona <b>Run</b> para probar tus cambios.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">Abrir Replit</a>

## Conclusión

Acabas de modificar el atributo `down_key` en la clase `Paddle` para controlar cómo se debe moverse la paleta izquierda en la pantalla.