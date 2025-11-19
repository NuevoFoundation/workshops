---
title: "Actividad 1: Crea un tablero de colores"
prereq: "Conceptos básicos de Python, Manipulación de imágenes en Python: Abrir una imagen, Pixels de Python: Colores y Pixels"
difficulty: "Intermedio"
date: 2020-07-11T00:00:00Z
weight: 1
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nz3Uz4kBoUU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Ejemplo para un tablero de colores básico

Aquí tienes un ejemplo de cómo hacer un tablero de color con el color rojo, un ancho de 60 y una longitud de 30.

```python
# Este es el ejemplo para crear un tablero de colores.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
```
![alt text](../../media/whileloopbefore.png "imagen que muestra el primer ejemplo de la actividad uno")

## ¡Crea tu propio tablero de colores!

¡Elige tu color favorito y haz un tablero de colores para jugar! Aquí tienes algunos colores de ejemplo que puedes elegir, pero también puedes escoger tu propio color.

<img src="../../media/Color-chart.png" width=30%>

<!-- Para accesibilidad, usa esta etiqueta HTML -->
<label for="colorpicker">Puedes usar el selector de color para elegir un color:</label>
<input type="color" id="colorpicker">

{{% notice warning %}}
 Para ver tu imagen, haz clic en la esquina superior izquierda (donde dice 'Archivos') y luego haz clic en el archivo de imagen para ver el resultado.
<div style="width:100%">
    <table>
        <td>
            <img src="../../media/open-file1.png" width=100%>
        </td>
        <td>
            <img src="../../media/open-file2.png" width=100%>
        </td>
    </table>
</div>
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity1" target="_blank">Iniciar Replit</a>