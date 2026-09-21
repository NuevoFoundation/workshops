---
title: "Actividad 2: Modifica tu tablero de colores"
date: 2026-04-25T00:00:00-07:00
prereq: "Conceptos básicos de Python, Python Pixels: Colores y píxeles, Manipulación de imágenes en Python: Abrir una imagen"
difficulties: ["intermedio"]
weight: 2
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WkI5ij6pTWI" title="Actividad 2: Modifica tu tablero de colores - Vídeo de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Ejemplo uno: Hacer una diagonal

```python
# Esto crea el tablero de colores original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
# Esto utiliza un bucle while anidado para modificar la imagen.
x = 0
y = 0
while x < 10:
 while y < 20:
   img.putpixel( (x,y), (0, 0, 0))
   x += 1
   y += 1
img.save('pil_red.png')
```

Esta es la imagen antes de agregar la diagonal.
<img src="../../media/whileloopbefore.png" alt="Imagen que muestra el primer ejemplo del bucle while" width="60%">

Esta es la imagen después de agregar la diagonal.
<img src="../../media/whileloopafter.png" alt="Imagen que muestra el resultado del primer ejemplo del bucle while" width="60%">

## Ejemplo dos: Hacer un rectángulo.

```python
# Esto crea el tablero de colores original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
# Esto utiliza un bucle for anidado para modificar la imagen.
for x in range(10, 30):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))
img.save('pil_redmodified.png')
```

Esta es la imagen antes de agregar el rectángulo.
<img src="../../media/whileloopbefore.png" alt="Imagen que muestra el primer ejemplo del bucle for" width="60%">

Esta es la imagen después de agregar el rectángulo.
<img src="../../media/forloopafter.png" alt="Imagen que muestra el resultado del primer ejemplo del bucle for" width="60%">

## ¡Modifica tu propio tablero de colores!

Aquí tienes dos plantillas para ayudarte a realizar modificaciones en tu tablero de colores.

#### Plantilla Uno: Agregar una línea

```python
# Plantilla para agregar una línea
initial_position_x = 0 #haz cambios aquí
initial_position_y = 0 #haz cambios aquí
width = 0 #haz cambios aquí
height = 0 #haz cambios aquí
color = (0,0,0) #haz cambios aquí
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel( (x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

#### Plantilla Dos: Agregar un rectángulo

```python
# Plantilla para agregar un rectángulo
initial_position_x = 0 #haz cambios aquí
initial_position_y = 0 #haz cambios aquí
width = 0 #haz cambios aquí
height = 0 #haz cambios aquí
color = (0,0,0) #haz cambios aquí
for x in range(initial_position_x, width+initial_position_x):
  for y in range(initial_position_y, height+initial_position_y):
    img.putpixel( (x,y), color)
img.save('pixel-activity2.png')
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity2" target="_blank">Abrir Replit</a>