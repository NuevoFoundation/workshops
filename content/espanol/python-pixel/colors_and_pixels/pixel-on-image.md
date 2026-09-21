---
title: "Píxeles en una Imagen"
draft: false
weight: 4
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WvDHBwyM6_U" title="Pixels on an Image - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Píxeles 

Los píxeles son pequeñas áreas de color en una pantalla de visualización. Las imágenes se forman por píxeles en la pantalla. Podemos manipular los píxeles cambiando el **valor RGB**, que esencialmente significa modificar los valores de los colores rojo, verde y azul en cada píxel. Cuando vemos una imagen en una pantalla, está compuesta por una gran cantidad de pequeños píxeles de diversos colores colocados uno al lado del otro. Sin embargo, cada pequeño píxel tiene un único color en una posición única de la imagen.

<div style="width:80%;padding-left:20%;">
    <table>
        <td>
            <img src="../../media/nuvi.png" alt="Personaje Nuvi" width="100%">
        </td>
        <td>
            <img src="../../media/pixel-nuvi.png" alt="Personaje Nuvi mostrado como píxeles" width="100%">
        </td>
    </table>
</div>

¡Vamos a sumergirnos en la creación de imágenes! No olvides que aprendimos cómo abrir y guardar imágenes en Python usando el módulo Pillow en secciones anteriores.

## Creando imágenes usando píxeles

```python
# Recuerda importar Image
from PIL import Image

Image.new(mode, size)
Image.new(mode, size, color)
```

`Image.new()` crea una nueva imagen con el modo y tamaño dados (y, opcionalmente, el color). Aquí, podemos usar `RGB` como modo. El tamaño es un valor `(ancho, alto)` de una imagen. El color es el color RGB de los píxeles. También podemos usar nombres de colores en lugar de valores RGB. Si no inicializas un valor de color, la imagen se rellenará de negro.

## Veamos algunos ejemplos

```python
# Recuerda importar Image
from PIL import Image
img = Image.new('RGB', (200,100),(100,100,100))
img.save('pil_grey.png')
```
La variable `img` almacena la imagen PNG que se ve así: 

<img src="../../media/grey.png" alt="Imagen mostrando el primer ejemplo de píxeles" width="40%">

```python
# Recuerda importar Image
from PIL import Image
img=Image.new('RGB', (200,100),"black")
img.save('pil_black.png')
```
Aquí, al especificar `black` como el color RGB, se crea y almacena la imagen PNG que se ve así:

<img src="../../media/black.png" alt="Imagen mostrando el segundo ejemplo de píxeles" width="40%">

## Cambiar un píxel en una imagen 

¿Qué pasa si queremos añadir otro píxel a una imagen?

La función `img.putpixel( (x,y), (r, g, b))` agrega un nuevo píxel a la imagen con la posición y el color dados. La posición es un valor `(ancho, alto)` de la ubicación del píxel en la imagen. El color es el color RGB de ese píxel.

## Veamos un ejemplo

```python
# Recuerda importar Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
img.putpixel( (100,50), (0, 0, 0))
img.save('pil_black-dot.png')
```

Después de crear una imagen amarilla de 200x100, la función `putpixel` coloca un punto diminuto en el centro de este bloque amarillo. Es un píxel tan pequeño que, de hecho, puede que tengas que ampliar la imagen para verlo claramente.

<img src="../../media/black-dot.png" alt="Imagen mostrando el tercer ejemplo de píxeles" width="40%">

