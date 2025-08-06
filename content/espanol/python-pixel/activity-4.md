---
title: "Actividad 4: Crear Filtro Básico"
date: 2020-09-08T00:00:00Z
prereq: "Fundamentos de Python, Python Pixels: Colores y Píxeles, Manipulación de Imágenes en Python: Abrir una imagen"
difficulty: "Intermedio"
weight: 4
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/jA6xNqAhb1o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Ahora que entendemos más sobre píxeles e imágenes, podemos comenzar a aprender cómo diseñar tu propio filtro en la imagen. Veamos algunos ejemplos de cómo diseñar un filtro básico en tu imagen.

### Ejemplo para filtro azul

<img src="../../media/cat.png" width=50%>
Queremos agregar un filtro azul al lindo gato de arriba. Veamos cómo lograrlo.

```python
# Necesitamos importar el paquete PIL para permitir la manipulación de píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")

# Añadimos el filtro azul
for i in range(img.size[0]): # Para cada columna
    for j in range(img.size[1]): # Para cada fila
        color = img.getpixel( (i,j) )
        img.putpixel((i,j),(0, 0, color[2])) # Establece el color adecuadamente

# Guarda el gato después de filtrar
img.save("Mycat.png")
```

¡Wow! Este es nuestro gato después del filtro azul.
<img src="../../media/bluefiltercat.png" width=50%>

{{% notice tip %}}
¿Cómo funcionó esto? Veamos el ciclo:

```python
for i in range(img.size[0]): # Para cada columna
    for j in range(img.size[1]): # Para cada fila
        color = img.getpixel( (i,j) ) # Obtiene el píxel actual
        img.putpixel((i,j),(0, 0, color[2])) # Establece el color adecuadamente
```

Comenzamos recorriendo la imagen, por cada columna y cada fila, para obtener cada píxel. Luego obtiene el valor de color actual del píxel. Para aplicar un filtro azul a ese píxel, lo único que hacemos es establecer los valores RGB de 'Rojo' y 'Verde' a 0. ¡Por lo tanto, solo permanecen los valores de 'Azul'!

{{% /notice %}}


### Desafío - Crea tu propio filtro

Siguiendo el ejemplo anterior, intenta crear tus propios filtros con diferentes colores.
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity4" target="_blank">Iniciar Replit</a>

Finalmente, piensa en crear un filtro gris. Hablaremos sobre cómo crear un filtro gris en la siguiente sección.