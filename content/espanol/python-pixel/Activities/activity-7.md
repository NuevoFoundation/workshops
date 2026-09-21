---
title: "Actividad 7: Cambia el fondo de una imagen"
prereq: "Conceptos básicos de Python, Manipulación de imágenes en Python: Abrir una imagen, Píxeles y colores en Python"
difficulties: ["intermedio"]
date: 2026-04-25T00:00:00-07:00
weight: 7
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/zdi2R_EK6QA" title="Actividad 7: Cambia el fondo de una imagen - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

En esta sección, aprenderemos a cambiar el fondo simple de tu imagen utilizando píxeles.

### Ejemplo - Cambiar el color del fondo

Cambiemos el color de fondo de Nuvi a rosa.  
<img src="../../media/nuevo.png" alt="Logo de Nuevo Foundation" width="25%">

```python
from PIL import Image

# Abrir la imagen de Nuvi
img = Image.open("nuevo.png")

width = img.size[0]
height = img.size[1]
 
# Crear una nueva imagen con el mismo ancho y alto
newimg = Image.new('RGB',(width,height))

# Establecer los píxeles para la nueva imagen
colorpink = (244,114,208) 
coloryellow = img.getpixel((0,0))
for i in range(width):    
    for j in range(height):    
        color = img.getpixel((i,j)) # Obtener el color de la imagen original
        if color == coloryellow: # Si es amarillo, entonces:
            newimg.putpixel((i,j),colorpink) # Cambiar el color a rosa
        else:
            newimg.putpixel((i,j),color) # De lo contrario, el color permanece igual

newimg.save("nuevopink.png")
```

¡Wow! Este es nuestro nuevo Nuvi después de cambiar el fondo.  
<img src="../../media/nuevopink.png" alt="Logo de Nuevo Foundation con fondo rosa" width="25%">


### Desafío - Cambiar el fondo según tu elección

¡Ahora es tu turno de cambiar el color que prefieras en Nuvi!  

{{% notice warning %}}
Para ver tu imagen, haz clic en la esquina superior izquierda (donde dice ‘Files’), y luego haz clic en el archivo de imagen para ver el resultado.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity7" target="_blank">Abrir en Replit</a>