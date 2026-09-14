---
title: "Actividad 1 - Establecer tempo y añadir sonidos"
description: "Actividad 1 - Establecer tempo y añadir sonidos"
prereq: "Python Basico: Imprimir, Comentarios, Funciones"
difficulties: ["intermediate"]
weight: 5
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/INHMwQoni-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Echemos un vistazo más de cerca al código preexistente y entendamos lo que significa.

<img src="../img/screenshot-setup-complete.png" height="400"/>

La función `setTempo()` te permite establecer el tempo general del proyecto. El tempo es la velocidad a la que se reproduce una pieza de música. Cambiar el tempo de un proyecto permite crear diferentes estilos de música. ¡Intenta cambiar el tempo de tu función `setTempo` modificando el número y observa lo que sucede! Asegúrate de que sea un número entre 45 y 220. A continuación tienes algunas sugerencias de tempos que puedes usar.

<img src="../img/img-tempo1.png" height="200"/>

Ahora que nuestro tempo está ajustado, es hora de añadir sonidos. Para ello, debemos utilizar la función `fitMedia()`. Colocaremos el nuevo código debajo de la función `setTempo()`.

## Actividad 1

1. Asegúrate de que el cursor de tu programa esté debajo de la función `setTempo()`.

<img src="../img/screenshot-cursor.png" height="200"/>

2. Desplázate por la lista **API** en el lado izquierdo del editor de código y busca la función `fitMedia()`.

<img src="../img/screenshot-find-fitmedia.png" height="400"/>

3. Haz clic en el icono **Pegar** en la esquina derecha de `fitMedia()` para insertar la función debajo de la función `setTempo`.

<img src="../img/icon-paste.png"/>

4. Puede que notes que, cuando pegas la función, Earsketch genera algunos textos de marcador de posición que tendremos que reemplazar más adelante. Estos textos de marcador de posición también se conocen como `parámetros`.

<img src="../img/screenshot-fitmedia.png" />

Puedes especificar tus propios valores para lo siguiente:

- `sound` - Ve al panel **Sounds** (sonidos) y encuentra un sonido que te guste.
- `track` - Elige cualquier número entero positivo como número de pista.
- `start/end` - Estos parámetros se cuantifican en medidas. Una medida es un segmento de tiempo que se corresponde con un número específico de tiempos musicales.

Si no estás seguro de qué valores elegir, prueba con esto:

- `fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)`

Tu código debería parecerse a este:

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

{{% notice warning %}}
Asegúrate de que el uso de mayúsculas en la llamada al método sea correcto. La mayoría de los lenguajes de programación, incluido Python, distinguen entre mayúsculas y minúsculas. Esto significa que agregar letras mayúsculas puede llamar a una función diferente de la esperada. Por ejemplo: `fitMedia()` no es lo mismo que `FitMedia()`.
{{% /notice %}}

6. Una vez que hayas introducido tus propios parámetros, pulsa ejecutar y luego haz clic en reproducir para escuchar tu clip de audio.

<img src="../img/icon-play.png" />

- **Si ves algún texto rojo, ¡has encontrado algunos errores! Por favor, pide ayuda.** La función `fitMedia()` es la columna vertebral para hacer música en Earsketch. Vamos a utilizar esta función mucho, así que si tienes alguna pregunta sobre su uso, ¡pregunta!

{{% notice info %}}

La estación de trabajo de audio digital (por sus siglas en inglés *Digital Audio Workstation* o DAW) es el área donde aparecen los sonidos. Está en la parte central superior de tu ventana de EarSketch. El siguiente es un ejemplo de cómo pueden verse las diferentes secciones de una canción en el DAW.

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}
