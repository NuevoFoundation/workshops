---
title: "Actividad 8: Voltea tu imagen"
date: 2020-09-08T00:00:00Z
prereq: "Conceptos básicos de Python, Python Pixels: Colores y Píxeles, Manipulación de imágenes con Python: Abrir una imagen"
difficulty: "Intermedio"
weight: 8
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jx_b8111WW0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

En esta sección, comenzaremos a aprender cómo voltear tu imagen usando píxeles.

### Ejemplo - Voltea tu imagen boca abajo

Vamos a voltear el gato boca abajo.
<img src="../../media/cat.png" width=50%>

{{% notice note %}}

Voltear la imagen boca abajo es lo mismo que crear una imagen simétrica con respecto a la `línea central horizontal`, que es la línea negra en la siguiente imagen.

{{% /notice %}}

<img src="../../media/cathori.png" width=50%>

```python
# Necesitamos importar el paquete PIL para manipulación con píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configurar una nueva imagen con el mismo ancho y alto
newimg = Image.new('RGB', (width,height))

# Establecer el píxel para la nueva imagen
for i in range(width): # Para cada columna
    for j in range(height): # Para cada fila
        heightNew = height - 1 - j # Obtener la nueva ubicación en altura del píxel.
        color = img.getpixel( (i, heightNew) ) # Obtener el color de la imagen original
        newimg.putpixel((i,j),color) # Poner el color en la nueva imagen

newimg.save("Mycat.png")
```

¡Wow! Este es nuestro nuevo gato después de voltear.

<img src="../../media/flipcat.png" width=50%>

¿Cómo descubrimos cómo establecer `heightNew`? En el código anterior tenemos:

`heightNew = height - 1 - j`

Este es el punto clave para voltear el gato boca abajo. Esto toma la altura de la imagen y resta 1 así como la ubicación actual de la altura del píxel (j). Restamos 1 para el índice; recuerda que las computadoras comienzan a contar desde '0' en lugar de '1'. Restamos la ubicación actual de la altura del píxel para obtener la ubicación de donde debería estar el nuevo píxel.

Puedes dibujar algunas imágenes simples a mano para visualizar esto.

Recuerda que nuestro código original principalmente es:

```python
width = img.size[0]
height = img.size[1]

# Configurar una nueva imagen con el mismo ancho y alto
newimg = Image.new('RGB', (width,height))

# Establecer el píxel para la nueva imagen
for i in range(width): # Para cada columna
    for j in range(height): # Para cada fila
        heightNew = height - 1 - j # Obtener la nueva ubicación en altura del píxel.
        color = img.getpixel( (i, heightNew) ) # Obtener el color de la imagen original
        newimg.putpixel((i,j),color) # Poner el color en la nueva imagen
```

Por ejemplo, intenta aplicar este código en el siguiente grupo de letras de 4x4:

<img src="../../media/table.png" width=15%>

Luego crea la salida simétrica con respecto a la línea central horizontal y compárala con la salida anterior. ¿Son iguales?

### Desafío - Voltea tu gato de izquierda a derecha

Ahora es tu turno de voltear tu gato de izquierda a derecha.

{{% notice note %}}

Voltear la imagen de izquierda a derecha es lo mismo que crear una imagen simétrica con respecto a la `línea central vertical`.

Presta atención a la variable `widthNew` y piensa cuidadosamente cómo configurarla.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity8" target="_blank">Lanzar Replit</a>