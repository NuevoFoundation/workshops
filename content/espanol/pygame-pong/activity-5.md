---
title: "Actividad 5 - Declarar y Usar una Variable para la Fuente"
date: 2019-07-29T13:24:17-07:00
weight: 7
draft: false
---

¡Gran progreso hasta ahora! Ahora vamos a usar una variable para cambiar la fuente del texto en el juego.

En esta actividad, debes aplicar tus conocimientos sobre variables que aprendiste en el taller **"Conceptos Básicos de Python"**

Busca `# TODO (ACTIVITY 5)` en el código. Declara la variable `font_label` y asígnale el valor `'arial'`. Ahora observa esta instrucción en el código `font_name = pygame.font.match_font('arial')`. ¿Puedes averiguar dónde debe usarse esta nueva variable en esa instrucción para controlar la fuente que se muestra en la pantalla?

{{% notice tip %}}

Puedes obtener una lista de las fuentes que tu computadora reconoce ejecutando `pygame.font.get_fonts()`. Intenta usar una fuente distinta de `'arial'`. ¿Cuál te gusta más? Haz clic en **Run** para ver el resultado.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">Abrir en Replit</a>

## Conclusión

Acabas de modificar el parámetro de la fuente usando una variable. !Si usas la misma fuente en varios lugares de tu programa, puedes modificar la variable en un solo sitio, y el cambio se aplicará en todos los lugares donde la hayas usado!