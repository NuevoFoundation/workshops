---
title: "Actividad 1: Crear un tablero de color"
prereq: "Conceptos básicos de Python, Manipulación de imágenes en Python: Abrir una imagen, Python Pixels: Colores y píxeles"
difficulties: ["intermedio"]
date: 2026-04-25T00:00:00-07:00
weight: 1
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nz3Uz4kBoUU" title="Actividad 1: Crear un tablero de color - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Ejemplo de tablero de color básico

Aquí tienes un ejemplo de cómo hacer un tablero de color con el color rojo, un ancho de 60 y un largo de 30.

```python
#Este es el ejemplo para crear un tablero de color.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
```
<img src="../../media/whileloopbefore.png" alt="Imagen que muestra el primer ejemplo de la actividad uno" width="60%">

## ¡Crea tu propio tablero de color!

¡Elige tu color favorito y crea un tablero de color para jugar! Aquí tienes algunos colores de ejemplo que puedes usar, aunque también puedes elegir tu propio color.

<img src="../../media/Color-chart.png" alt="Carta de colores que muestra algunos colores RGB de ejemplo" width="30%">

<!-- Para accesibilidad, utiliza este etiquetado HTML -->
<label for="colorpicker">Puedes usar el selector de color para elegir un color:</label>
<input type="color" id="colorpicker">

{{% notice warning %}}
 Para ver tu imagen, por favor haz clic en la esquina superior izquierda (donde dice 'Files'), y luego haz clic en el archivo de imagen para ver el resultado.
<div style="width:70%">
    <table>
        <td>
            <img src="../../media/open-file1.png" alt="Haz clic en Files en el panel izquierdo" width="100%">
        </td>
        <td>
            <img src="../../media/open-file2.png" alt="Haz clic en el archivo de imagen para ver los resultados" width="100%">
        </td>
    </table>
</div>
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity1" target="_blank">Abrir en Replit</a>