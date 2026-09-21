---
title: "Actividad 3: Desafío: Diseña nuevos elementos"
prereq: "Conceptos Básicos de Python, Manipulación de Imágenes en Python: Abrir una Imagen, Píxeles en Python: Colores y Píxeles"
difficulties: ["intermedio"]
date: 2026-04-25T00:00:00-07:00
weight: 3
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/YkxNH1TWjR0" title="Actividad 3: Desafío: Diseña nuevos elementos - video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Usando bucles, puedes diseñar tus propios elementos en el tablero de colores. Puedes crear tu propio logotipo o cualquier cosa que desees en este tablero de colores. Aquí tienes un ejemplo que te hemos proporcionado.

### Ejemplo: hacer una N.

```python
#Esto crea el colorboard original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'white')

#Esto utiliza bucle while anidado para cambiar el colorboard.
#Línea vertical izquierda
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

#Línea vertical derecha
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

#Línea diagonal central
for y in range(5, 25):
  for x in range(10+(y-5), 15+(y-5)):
    img.putpixel( (x,y), (255, 211, 0)) 
img.save('pixel-activity3.png')
```
salida:
<img src="../../media/Activity3_ex.png" alt="Imagen mostrando el ejemplo de la actividad 3" width="60%">

### ¡Diseña tu propio elemento!

{{% notice tip %}}
De hecho, puedes diseñar algunas letras simples, como H, K, T, entre otras. Puedes cambiar el color de una parte de esas letras para que sean más bonitas.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity3" target="_blank">Abrir Replit</a>