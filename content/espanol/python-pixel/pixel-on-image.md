---
title: "Píxeles en una Imagen"
draft: false
weight: 4
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WvDHBwyM6_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Píxeles 

Los píxeles son pequeñas áreas de color en una pantalla. Las imágenes se forman por píxeles en la pantalla. Podemos manipular los píxeles cambiando el **Valor RGB**, lo cual implica cambiar el valor de los colores rojo, verde y azul en cada píxel. Cuando vemos una imagen en una pantalla, está compuesta por una gran cantidad de pequeños píxeles de muchos colores todos juntos. Sin embargo, cada pequeño píxel tiene un solo color en una posición única en la imagen.

<div style="width:80%;padding-left:20%;">
    <table>
        <td>
            <img src="../../media/nuvi.png" width=100%>
        </td>
        <td>
            <img src="../../media/pixel-nuvi.png" width=100%>
        </td>
    </table>
</div>

Vamos a sumergirnos en la creación de imágenes. ¡No olvides que aprendimos a abrir y guardar imágenes en Python usando el módulo Pillow en las secciones anteriores!

## Creando imágenes usando píxeles

```python
# Recuerda importar Image
from PIL import Image

Image.new(mode, size)
Image.new(mode, size, color)
```

`Image.new()` crea una nueva imagen con el modo y tamaño dados (y opcionalmente, el color). Aquí, podemos usar `RGB` como modo. El tamaño es un valor `(ancho, alto)` de una imagen. El color es el color RGB de los píxeles. También podemos usar nombres de colores en lugar de valores RGB. Si no inicializas el valor del color, la imagen se llenará de negro.

## Veamos algunos ejemplos

```python
# Recuerda importar Image
from PIL import Image
img = Image.new('RGB', (200,100),(100,100,100))
img.save('pil_grey.png')
```
La variable `img` almacena la imagen PNG que se ve así: 

![alt text](../../media/grey.png "Imagen mostrando el primer ejemplo de píxeles")

```python
# Recuerda importar Image
from PIL import Image
img=Image.new('RGB', (200,100),"black")
img.save('pil_black.png')
```
Aquí, especificar `black` como el color RGB crea y almacena la imagen PNG que se ve así:

![alt text](../../media/black.png "Imagen mostrando el segundo ejemplo de píxeles")

## Cambiar un píxel en una imagen 

¿Qué pasa si queremos poner otro píxel en una imagen? 

La función `img.putpixel( (x,y), (r, g, b))` coloca un nuevo píxel en la imagen con la posición y el color dados. La posición es un valor `(ancho, alto)` de la ubicación de ese píxel en la imagen. El color es el color RGB de ese píxel.

## Veamos un ejemplo

```python
# Recuerda importar Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
img.putpixel( (100,50), (0, 0, 0))
img.save('pil_black-dot.png')
```

Después de crear una imagen amarilla de 200x100, la función `putpixel` coloca un pequeño punto en el centro de este bloque amarillo. Este es un pequeño píxel, de hecho, es tan pequeño que quizás debas ampliar la imagen para verlo realmente.

![alt text](../../media/black-dot.png "Imagen mostrando el tercer ejemplo de píxeles")