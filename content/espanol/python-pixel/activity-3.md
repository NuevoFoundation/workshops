---
title: "Actividad 3: Desafío: Diseñar nuevos elementos"
prereq: "Conceptos básicos de Python, Manipulación de imágenes en Python: Abrir una imagen, Python Pixeles: Colores y Pixeles"
difficulty: "Intermedio"
date: 2020-09-08T00:00:00Z
weight: 3
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/YkxNH1TWjR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Usando bucles, puedes diseñar tus propios elementos en el tablero de colores. Puedes diseñar tu propio logotipo o lo que quieras en este tablero de colores. Aquí tienes un ejemplo que hemos proporcionado para ti.

### Ejemplo: hacer una N.

```python
# Esto crea el tablero de colores original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'white')

# Esto usa un bucle while anidado para cambiar el tablero de colores.
# Línea vertical izquierda
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

# Línea vertical derecha
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

# Línea diagonal central
for y in range(5, 25):
  for x in range(10+(y-5), 15+(y-5)):
    img.putpixel( (x,y), (255, 211, 0)) 
img.save('pixel-activity3.png')
```
output:
![alt text](../../media/Activity3_ex.png "image showing activity3 example")

### ¡Diseña tu propio elemento!

{{% notice tip %}}
Puedes diseñar algunas letras sencillas, como H, K, T, etc. Puedes cambiar el color de una cierta parte de esas letras para hacerlas más bonitas.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity3" target="_blank">Lanzar Replit</a>