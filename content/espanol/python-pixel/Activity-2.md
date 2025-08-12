---
title: "Actividad 2: Modifica tu tablero de colores"
date: 2020-07-11T00:00:00Z
prereq: "Conceptos básicos de Python, Python Pixeles: Colores y Pixeles, Manipulación de imágenes Python: Abrir una imagen"
difficulty: "Intermedio"
weight: 2
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WkI5ij6pTWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Ejemplo uno: Hacer una diagonal

```python
#Esto crea el tablero de colores original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#Esto utiliza un bucle anidado while para cambiar la imagen.
x = 0
y = 0
while x < 10:
 while y < 20:
   img.putpixel((x,y), (0, 0, 0))
   x += 1
   y += 1
img.save('pil_red.png')
```

Esta es la imagen antes de añadir la diagonal.
![alt text](../../media/whileloopbefore.png "imagen mostrando el primer ejemplo del bucle while")

Esta es la imagen después de añadir la diagonal.
![alt text](../../media/whileloopafter.png "imagen mostrando el primer ejemplo del bucle while")

## Ejemplo dos: Hacer un rectángulo.

```python
#Esto crea el tablero de colores original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#Esto utiliza un bucle anidado for para cambiar la imagen.
for x in range(10, 30):
  for y in range(5, 25):
    img.putpixel((x,y), (0, 0, 0))
img.save('pil_redmodified.png')
```

Esta es la imagen antes de añadir el rectángulo.
![alt text](../../media/whileloopbefore.png "imagen mostrando el primer ejemplo del bucle for")

Esta es la imagen después de añadir el rectángulo.
![alt text](../../media/forloopafter.png "imagen mostrando el primer ejemplo del bucle for")

## ¡Modifica tu propio tablero de colores!

Aquí tienes dos plantillas para ayudarte a modificar tu tablero de colores.

#### Plantilla Uno: Añadir una línea

```python
# Plantilla para añadir una línea
initial_position_x = 0 #hacer cambios aquí
initial_position_y = 0 #hacer cambios aquí
width = 0 #hacer cambios aquí
height = 0 #hacer cambios aquí
color = (0,0,0) #hacer cambios aquí
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel((x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

#### Plantilla Dos: Añadir un rectángulo

```python
# Plantilla para añadir un rectángulo
initial_position_x = 0 #hacer cambios aquí
initial_position_y = 0 #hacer cambios aquí
width = 0 #hacer cambios aquí
height = 0 #hacer cambios aquí
color = (0,0,0) #hacer cambios aquí
for x in range(initial_position_x, width+initial_position_x):
  for y in range(initial_position_y, height+initial_position_y):
    img.putpixel((x,y), color)
img.save('pixel-activity2.png')
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity2" target="_blank">Iniciar Replit</a>