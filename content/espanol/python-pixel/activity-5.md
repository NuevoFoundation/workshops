---
title: "Actividad 5: Filtros más avanzados"
date: 2020-09-08T00:00:00Z
prereq: "Conceptos básicos de Python, Python Pixels: Colores y píxeles, Manipulación de imágenes en Python: Abrir una imagen"
difficulty: "Intermedio"
weight: 5
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/deYXkPt58co" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
En la última sección, vimos un ejemplo de creación de un filtro azul y pensamos en cómo crear el filtro gris. Ahora, crearemos nuestro filtro gris juntos.

### Ejemplo - Crear un filtro gris

Cambiemos la imagen original del gato con nuestro filtro gris juntos.

<img src="../../media/cat.png" width=50%>

```python
# Necesitamos importar el paquete PIL para permitir la manipulación de píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")

# Filtros grises
for i in range(img.size[0]): # Para cada columna:
    for j in range(img.size[1]): # Para cada fila
        color = img.getpixel((i,j)) # Obtener color 
        GREY = (color[0] + color[1] + color[2]) // 3 # Promediar los valores de los píxeles
        img.putpixel((i,j),(GREY, GREY, GREY)) # Establecer el color en consecuencia

# Guardar el gato después de filtrar
img.save("Mycat.png")
```

{{% notice tip %}}
Recuerda, para establecer un píxel gris, los tres valores RGB deben ser iguales. Sin embargo, establecer cada píxel al mismo valor aleatorio (ej. 200) hará que toda la imagen sea gris, en lugar de solo añadir un filtro sobre la imagen existente del gato.

¿Cómo podemos averiguar mejor cómo establecer un píxel para que sea la versión 'griseada' de sí mismo? Podemos tomar un promedio de cada valor de los colores RGB. Puedes usar // para hacer una división entera, lo que garantiza que el resultado de la operación de promediado sea un número entero.

{{% /notice %}}

¡Guau! Este es nuestro gato después del filtro gris.

<img src="../../media/greyfiltercat.png" width=50%>

### Ejemplo - Filtro parcial

Ahora, pensemos en cómo añadir un filtro solo en parte de nuestro querido gato.

```python
# Necesitamos importar el paquete PIL para permitir la manipulación de píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")

# Filtros grises
for i in range((img.size[0] // 2)): # Para las columnas de la primera mitad
    for j in range((img.size[1] // 2)): # Para las filas de la primera mitad
        color = img.getpixel((i,j)) # Obtener color
        GREY = (color[0] + color[1] + color[2]) // 3 # Promediar los valores de los píxeles
        img.putpixel((i,j),(GREY, GREY, GREY)) # Establecer el color en consecuencia

# Guardar el gato después de filtrar
img.save("Mycat.png")
```

¡Guau! Este es nuestro gato después del filtro. ¡Solo filtramos una cuarta parte del gato en la esquina superior izquierda!

<img src="../../media/partialfilter.png" width=50%>

### Desafío - Crea tu propio filtro parcial

¡Ahora es tu turno de filtrar la parte que quieras con diferentes tipos de filtros en el lindo gato! ¡Emocionante!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity5" target="_blank">Iniciar Replit</a>

{{% showanswer Advanced %}}

¿No sería genial si pudiéramos simplificar los pasos anteriores? Hagámoslo usando la función `filter()` y `convert()` de `Pillow ImageFilter`.

Para usar la función `filter()`, puedes especificar el tipo de ImageFilter dentro del paréntesis. Por ejemplo, `image.filter(ImageFilter.BLUR)` hará que la imagen se vea borrosa. O, si usas `ImageFilter.CONTOUR` en su lugar, añadirá un efecto tipo 'boceto' a tu imagen.

Por ejemplo, para la 'img' anterior:

```python
    blurredImage =