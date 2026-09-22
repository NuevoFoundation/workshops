---
title: "Actividad 4: Crear Filtro Básico"
date: 2026-04-25T00:00:00-07:00
prereq: "Conceptos Básicos de Python, Python Pixels: Colores y Píxeles, Manipulación de Imágenes con Python: Abrir una Imagen"
difficulties: ["intermedio"]
weight: 4
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/jA6xNqAhb1o" title="Actividad 4: Crear Filtro Básico - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Ahora que entendemos más sobre píxeles e imágenes, podemos empezar a aprender cómo diseñar tu propio filtro para una imagen. Veamos algunos ejemplos sobre cómo diseñar un filtro básico en tu imagen.

### Ejemplo de filtro azul

<img src="../../media/cat.png" alt="Imagen original de un gato" width="50%">
Queremos agregar un filtro azul al lindo gato de arriba. Vamos a ver cómo lograrlo.

```python
# Necesitamos importar el paquete PIL para permitir la manipulación con píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")

# Agreguemos el filtro azul
for i in range(img.size[0]): # Por cada columna
    for j in range(img.size[1]): # Por cada fila
        color = img.getpixel( (i,j) )
        img.putpixel((i,j),(0, 0, color[2])) # Establecer el color de acuerdo

# Guardar la imagen del gato después de aplicar el filtro
img.save("Mycat.png")
```

¡Wow! Este es nuestro gato después de aplicar el filtro azul.
<img src="../../media/bluefiltercat.png" alt="Imagen del gato con filtro azul aplicado" width="50%">

{{% notice tip %}}
¿Cómo funcionó esto? Veamos el bucle:

```python
for i in range(img.size[0]): # Por cada columna
    for j in range(img.size[1]): # Por cada fila
        color = img.getpixel( (i,j) ) # Tomar el píxel actual
        img.putpixel((i,j),(0, 0, color[2])) # Establecer el color de acuerdo
```

Comenzamos recorriendo la imagen, columna por columna y fila por fila, para obtener cada píxel. Luego, se obtiene el valor de color actual del píxel. Para aplicar un filtro azul a ese píxel, todo lo que hacemos es establecer los valores de 'Rojo' y 'Verde' en RGB a 0. ¡Por lo tanto, solo permanecen los valores de 'Azul'! 

{{% /notice %}}


### Desafío - Crea tu propio filtro

Siguiendo el ejemplo de arriba, intenta crear tus propios filtros con diferentes colores.
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity4" target="_blank">Abrir Replit</a>

Finalmente, piensa e intenta crear un filtro de escala de grises. Hablaremos sobre cómo crear un filtro de escala de grises en la siguiente sección.