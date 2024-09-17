---
title: "Actividad 7: Cambia el fondo de la imagen"
prereq: "Conceptos básicos de Python, Manipulación de imágenes en Python: Abrir una imagen, Píxeles de Python: Colores y píxeles"
difficulty: "Intermedio"
date: 2020-09-08T00:00:00Z
weight: 7
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/zdi2R_EK6QA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

En esta sección, comenzaremos a aprender cómo cambiar el fondo simple de tu imagen usando píxeles.

### Ejemplo - Cambiar color de fondo

Vamos a cambiar el color de fondo de Nuvi a rosa.
<img src="../../media/nuevo.png" width=25%>

```python
from PIL import Image

# Abre la imagen de Nuvi
img = Image.open("nuevo.png")

width = img.size[0]
height = img.size[1]
 
# Configura una nueva imagen con ancho y altura
newimg = Image.new('RGB',(width,height))

# Establece los píxeles para la nueva imagen
colorpink = (244,114,208) 
coloryellow = img.getpixel((0,0))
for i in range(width):    
    for j in range(height):    
        color = img.getpixel((i,j)) # Obtén el color de la imagen original
        if color == coloryellow: # Si es amarillo, entonces:
            newimg.putpixel((i,j),colorpink) # Cambia el color a rosa
        else:
            newimg.putpixel((i,j),color) # Si no, el color sigue igual

newimg.save("nuevopink.png")
```

¡Wow! Este es nuestro nuevo Nuvi después de cambiar el fondo.
<img src="../../media/nuevopink.png" width=25%>

### Desafío - Cambia el fondo basado en tu elección

¡Ahora es tu turno de cambiar el color que desees en Nuvi!

{{% notice warning %}}
Para ver tu imagen, por favor haz clic en la esquina superior izquierda (donde dice 'Files') y luego haz clic en el archivo de imagen para ver el resultado.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity7" target="_blank">Iniciar Replit</a>