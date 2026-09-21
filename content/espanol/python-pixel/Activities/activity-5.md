---
title: "Actividad 5: Filtros más avanzados"
date: 2026-04-25T00:00:00-07:00
prereq: "Conceptos básicos de Python, Python Pixels: colores y píxeles, Manipulación de imágenes en Python: Abrir una imagen"
difficulties: ["intermedio"]
weight: 5
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/deYXkPt58co" title="Activity 5: More advanced filters - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
  
En la última sección, vimos un ejemplo de cómo crear un filtro azul y pensamos en cómo crear el filtro gris. Ahora, creemos nuestro filtro gris juntos.

### Ejemplo - Crear un filtro gris

¡Cambiemos la imagen original del gato de abajo con nuestro filtro gris juntos! 

<img src="../../media/cat.png" alt="Imagen original de un gato" width="50%">

```python
# Necesitamos importar el paquete PIL para permitir la manipulación de píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")

# Filtros grises
for i in range(img.size[0]): # Para cada columna:
    for j in range(img.size[1]): # Para cada fila:
        color = img.getpixel((i, j)) # Obtener el color
        GREY = (color[0] + color[1] + color[2]) // 3 # Promediar los valores de los píxeles
        img.putpixel((i, j), (GREY, GREY, GREY)) # Establecer el color en consecuencia

# Guardar la imagen del gato después del filtrado
img.save("Mycat.png")
```

{{% notice tip %}}
Recuerda, para establecer un píxel en gris, los tres valores de RGB tienen que ser iguales. Sin embargo, establecer cada píxel al mismo valor aleatorio (por ejemplo, 200) hará que toda la imagen sea gris, en lugar de simplemente agregar un filtro encima de la imagen existente del gato.  

¿Cómo podemos determinar la mejor manera de establecer un píxel en su versión 'grisada'? Podemos tomar un promedio de cada valor de los colores RGB. Puedes usar // para hacer una división entera, lo cual garantiza que el resultado de la operación de promedio sea un número entero. 

{{% /notice %}}

¡Guau! Este es nuestro gato después del filtro gris.
  
<img src="../../media/greyfiltercat.png" alt="Imagen del gato con filtro en tono de gris aplicado" width="50%">

### Ejemplo - Filtro parcial

Ahora, pensemos en cómo añadir un filtro solo a una parte de nuestro adorable gato.

```python
# Necesitamos importar el paquete PIL para permitir la manipulación de píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")

# Filtros grises
for i in range((img.size[0] // 2)): # Para las columnas de la primera mitad
    for j in range((img.size[1] // 2)): # Para las filas de la primera mitad
        color = img.getpixel((i, j)) # Obtener el color
        GREY = (color[0] + color[1] + color[2]) // 3 # Promediar los valores de los píxeles
        img.putpixel((i, j), (GREY, GREY, GREY)) # Establecer el color en consecuencia

# Guardar la imagen del gato después del filtrado
img.save("Mycat.png")
```

¡Guau! Este es nuestro gato después del filtro. ¡Solo filtramos una cuarta parte del gato en la esquina superior izquierda!

<img src="../../media/partialfilter.png" alt="Imagen del gato con filtro parcial aplicado" width="50%">

### Desafío - Crea tu propio filtro parcial

¡Ahora es tu turno de filtrar la parte que desees con diferentes tipos de filtros en el lindo gato! ¡Qué emocionante!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity5" target="_blank">Abrir en Replit</a>

{{% showanswer Advanced %}}

¿No sería genial si pudiéramos simplificar los pasos anteriores? Hagámoslo utilizando la función `filter()` y `convert()` de `Pillow ImageFilter`.

Para usar la función `filter()`, puedes especificar el tipo de ImageFilter dentro del paréntesis. Por ejemplo, `image.filter(ImageFilter.BLUR)` hará que la imagen se vea borrosa. O, si usas `ImageFilter.CONTOUR` en su lugar, agregará un efecto tipo 'boceto' a tu imagen.

Por ejemplo, para la variable 'img' anterior:

```python
    blurredImage = img.filter(ImageFilter.BLUR) 
    blurredImage.save("myCatBlurred.jpg")
```

Deberías notar que la imagen del gato guardada está borrosa. ¡Prueba esto con otros filtros de imágenes hasta que encuentres uno que te guste!

Además, podemos usar la función `convert()` para establecer nuestra imagen en blanco y negro. Para usar esta función, puedes especificar el modo al que deseas convertir tu imagen. Los más comunes son "L", que convierte una imagen a escala de grises, y “RGB”, que convierte una imagen a su color verdadero.

¡Probémoslo así!

```python
    greyscaleImage = img.convert("L")
    greyscaleImage.save("myCatBW.jpg")
```

Si combinas la función de desenfoque con la función de conversión a blanco y negro, obtendrás algo como esto: ¡perfecto!

<img src="../../media/bw_upside_down.png" alt="gato borroso en blanco y negro, al revés" width="50%">
</br>
{{% /showanswer %}}