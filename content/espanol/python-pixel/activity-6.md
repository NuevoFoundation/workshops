---
title: "Actividad 6: Recortar Imagen"
prereq: "Conceptos Básicos de Python, Manipulación de Imágenes en Python: Abrir una Imagen, Python Pixel: Colores y Píxeles"
difficulty: "Intermedio"
date: 2020-09-08T00:00:00Z
weight: 6
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/X2AoHSdQOLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

En esta sección, comenzaremos a aprender cómo recortar tu imagen.

### Ejemplo - Recortar al gato a la mitad

Ahora, recortemos la mitad derecha de la imagen del gato.

<img src="../../media/cat.png" width=50%>

```python
# Necesitamos importar el paquete PIL para permitir la manipulación con píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")
width = img.size[0] 
height = img.size[1] 

# Configurar una nueva imagen con la mitad del ancho y altura
newimg = Image.new('RGB', (width // 2, height))

# Establecer los píxeles para la nueva imagen
for i in range(width // 2):    
    for j in range(height): # Para cada fila
        color = img.getpixel((i,j)) # Obtener el color de la imagen original
        newimg.putpixel((i,j),color) # Poner el color en la nueva imagen

newimg.save("Mycat.png")
```

¡Wow! Este es nuestro gato después del recorte. ¡Recortamos la mitad derecha de la imagen!

<img src="../../media/halfcat.png" width=25%>

### Ejemplo - Recortar la pieza central

¡Recortemos la imagen del gato para que solo tenga la parte central!

<img src="../../media/cat.png" width=50%>

```python
# Necesitamos importar el paquete PIL para permitir la manipulación con píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configurar una nueva imagen con la mitad del ancho y la mitad de la altura
newimg = Image.new('RGB', (width // 2, height // 2))

# Establecer el píxel para la nueva imagen
for i in range(width // 4, (width // 4) * 3): # Tomemos el primer 1/4 del ancho de la imagen al último 1/4 del ancho de la imagen    
    for j in range(height // 4, (height // 4) * 3): # Para cada fila
        color = img.getpixel((i,j)) # Obtener el color de la imagen original
        newimg.putpixel((i - width // 4, j - height // 4), color) # Poner el color en la nueva imagen

newimg.save("Mycat.png")
```

¡Wow! Este es nuestro gato después del recorte.
<img src="../../media/cropcat.png" width=25%>

### Desafío - Recortar la imagen según tu elección

Ahora es tu turno de recortar la parte que quieras del lindo gato. ¡Emocionante！
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity6" target="_blank">Lanzar Replit</a>