---
title: "Actividad 6: Recortar Imagen"
prereq: "Conceptos básicos de Python, Manipulación de imágenes con Python: Abrir una imagen, Python Pixel: Colores y píxeles"
difficulties: ["intermedio"]
date: 2026-04-25T00:00:00-07:00
weight: 6
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/X2AoHSdQOLo" title="Actividad 6: Recortar Imagen - video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

En esta sección, aprenderemos a recortar tu imagen.

### Ejemplo - Recortar el gato a la mitad

Ahora, recortemos la mitad derecha de la imagen del gato.
  
<img src="../../media/cat.png" alt="Imagen original del gato" width="50%">

```python
# Necesitamos importar el paquete PIL para permitir la manipulación de píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")
width = img.size[0] 
height = img.size[1] 

# Configurar una nueva imagen con la mitad del ancho y la altura
newimg = Image.new('RGB', (width // 2, height))

# Establecer los píxeles para la nueva imagen
for i in range(width // 2):    
    for j in range(height): # Para cada fila
        color = img.getpixel((i,j)) # Obtener el color de la imagen original
        newimg.putpixel((i,j),color) # Poner el color en la nueva imagen

newimg.save("Mycat.png")
```

¡Wow! Este es nuestro gato después del recorte. ¡Hemos recortado la mitad derecha de la imagen!

<img src="../../media/halfcat.png" alt="Imagen del gato recortada a la mitad izquierda" width="25%">

### Ejemplo - Recortar una pieza central

¡Recortemos la imagen del gato para conservar solo la parte central!

<img src="../../media/cat.png" alt="Imagen original del gato" width="50%">

```python
# Necesitamos importar el paquete PIL para permitir la manipulación de píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configurar una nueva imagen con la mitad del ancho y la mitad de la altura
newimg = Image.new('RGB', (width // 2, height // 2))

# Establecer los píxeles para la nueva imagen
for i in range(width // 4, (width // 4) * 3): # Tomamos desde el primer cuarto del ancho hasta el tercer cuarto del ancho
    for j in range(height // 4, (height // 4) * 3): # Para cada fila
        color = img.getpixel((i,j)) # Obtener el color de la imagen original
        newimg.putpixel((i - width // 4, j - height // 4), color) # Poner el color en la nueva imagen

newimg.save("Mycat.png")
```

¡Wow! Así luce nuestro gato después de recortar.
<img src="../../media/cropcat.png" alt="Imagen del gato con un recorte personalizado" width="25%">

### Desafío - Recorta la imagen según tu elección

¡Es tu turno de recortar la parte que prefieras de este adorable gato! ¡Qué emocionante!
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity6" target="_blank">Lanzar Replit</a>