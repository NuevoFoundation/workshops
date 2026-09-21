---
title: "Acceder a píxeles en una imagen"
draft: false
weight: 5
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ydP3GVHLGR0" title="Acceder a píxeles en una imagen - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Más sobre píxeles

Ya hemos aprendido cómo crear una imagen de color puro utilizando píxeles y cambiar un píxel en la imagen. Ahora, aprenderemos cómo identificar píxeles en imágenes existentes.

* Para obtener información sobre cómo usar listas y tuplas en Python, consulta más en estas páginas:
<a href="../../../python-basics/data-structures/" target="blank">Estructura de datos</a>

## Obtener datos de la imagen 

```python
# Recuerda importar Image
from PIL import Image
Image.size
Image.size[0]
Image.size[1]
```
`Image.size` devuelve un valor `(ancho, alto)` de una imagen. `Image.size[0]` devuelve el ancho de la imagen y `Image.size[1]` devuelve el alto de la imagen.

## Veamos un ejemplo

```python
# Recuerda importar Image
from PIL import Image
img=Image.new('RGB', (200,100),(100,100,100))
# Imprimamos los detalles de la imagen:
print(img.size)
print(img.size[0])
print(img.size[1])
```

El código anterior imprimirá:  
```  
(200, 100)  
200  
100  
```
Aquí el tamaño de la imagen es de 200 por 100. El ancho es 200 y el alto es 100.

## Obtener información de píxeles

`img.getpixel(x,y)` obtendrá un valor de color en una posición determinada. La posición es un valor `(ancho, alto)` de ese píxel. El color es el color RGB de ese píxel.

## Veamos un ejemplo

```python
# Recuerda importar Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))
# Imprimamos el color del píxel
print(color)
```

El código anterior imprimirá:   
```
(255, 255, 0)
```

## Obtener el valor RGB de un píxel 

Cada color RGB proporciona un valor de tupla `(rojo, verde, azul)` de un píxel. `Color[0]` proporciona el valor rojo del píxel, `Color[1]` proporciona el valor verde del píxel y `Color[2]` proporciona el valor azul del píxel.

#### Veamos un ejemplo

```python
# Recuerda importar Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))

# Imprimamos el valor RGB de un píxel
print(color[0])
print(color[1])
print(color[2])
```

El código anterior imprimirá:   
```
255
255
0
```
Aquí el valor RGB se desglosa de manera que el rojo tiene un valor de 255, el verde tiene un valor de 255 y el azul tiene un valor de 0.  