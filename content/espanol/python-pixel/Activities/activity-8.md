```yaml
---
title: "Actividad 8: Voltea tu imagen"
date: 2026-04-25T00:00:00-07:00
prereq: "Conceptos básicos de Python, Python Pixels: Colores y píxeles, Manipulación de imágenes en Python: Abre una imagen"
difficulties: ["intermedio"]
weight: 8
draft: false
---
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jx_b8111WW0" title="Actividad 8: Voltea tu imagen - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

En esta sección, aprenderemos cómo voltear tu imagen utilizando píxeles.

### Ejemplo: Voltea tu imagen al revés

Vamos a voltear al gato al revés.  
<img src="../../media/cat.png" alt="Imagen original del gato" width="50%">

{{% notice note %}}

Voltear la imagen al revés es lo mismo que crear una imagen simétrica con respecto a la `línea central horizontal`, que es la línea negra en la siguiente imagen.

{{% /notice %}}

<img src="../../media/cathori.png" alt="Imagen del gato volteada horizontalmente" width="50%">

```python
# Necesitamos importar el paquete PIL para la manipulación con píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configurar una nueva imagen con el mismo ancho y alto
newimg = Image.new('RGB', (width,height))

# Configurar los píxeles para la nueva imagen
for i in range(width): # Para cada columna
    for j in range(height): # Para cada fila
        heightNew = height - 1 - j # Obtener la nueva posición del píxel en altura.
        color = img.getpixel( (i, heightNew) ) # Obtener el color de la imagen original
        newimg.putpixel((i,j),color) # Colocar el color en la nueva imagen

newimg.save("Mycat.png")
```

¡Impresionante! Este es nuestro nuevo gato después de voltear la imagen.

<img src="../../media/flipcat.png" alt="Imagen del gato volteada al revés" width="50%">

¿Cómo descubrimos cómo configurar `heightNew`? En el código anterior tenemos:

`heightNew = height - 1 - j`

Este es el punto clave para voltear el gato al revés. Esto toma la altura de la imagen y le resta 1, además de la ubicación actual del píxel en altura (j). Restamos 1 debido a la indexación; recuerda que las computadoras comienzan a contar en '0' en lugar de '1'. Luego restamos la posición actual del píxel para obtener la ubicación donde debería estar el nuevo píxel.

Puedes dibujar algunas imágenes simples a mano para visualizar esto.

Recuerda que el código principal es:

```python
width = img.size[0]
height = img.size[1]

# Configurar una nueva imagen con el mismo ancho y alto
newimg = Image.new('RGB', (width,height))

# Configurar los píxeles para la nueva imagen
for i in range(width): # Para cada columna
    for j in range(height): # Para cada fila
        heightNew = height - 1 - j # Obtener la nueva posición del píxel en altura.
        color = img.getpixel( (i, heightNew) ) # Obtener el color de la imagen original
        newimg.putpixel((i,j),color) # Colocar el color en la nueva imagen
```

Por ejemplo, intenta aplicar este código en el siguiente grupo de letras de 4x4:

<img src="../../media/table.png" alt="Tabla de referencia de coordenadas de píxeles" width="15%">

Luego crea la salida simétrica con respecto a la línea central horizontal y compárala con el resultado anterior. ¿Son iguales?

### Desafío: Voltea a tu gato de izquierda a derecha

¡Ahora es tu turno de voltear a tu gato de izquierda a derecha!

{{% notice note %}}

Voltear la imagen de izquierda a derecha es lo mismo que crear una imagen simétrica con respecto a la `línea central vertical`.

Presta atención a la variable `widthNew` y piensa cuidadosamente cómo configurarla.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity8" target="_blank">Lanzar Replit</a>