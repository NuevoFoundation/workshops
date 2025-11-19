---
title: "Accede a los píxeles en una imagen"
draft: false
weight: 5
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ydP3GVHLGR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Más sobre los píxeles

Ya hemos aprendido cómo crear una imagen de color puro usando píxeles y cambiar un píxel en la imagen. Ahora, aprenderemos a identificar píxeles en imágenes existentes.

* Para información sobre cómo usar listas y tuplas en Python, consulta más en estas páginas: 
<a href="../../../python-basics/data-structures/" target="blank">Estructura de Datos</a>

## Obtener datos de la imagen 

```python
# Recuerda importar Image
from PIL import Image
Image.size
Image.size[0]
Image.size[1]
```
`Image.size` proporciona un valor `(ancho, altura)` de una imagen. `Image.size[0]` da el ancho de la imagen y `Image.size[1]` da la altura de la imagen.

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
Aquí el tamaño de la imagen es 200 por 100. El ancho es 200, la altura es 100.

## Obtener información del píxel

`img.getpixel(x,y)` obtendrá un valor de Color en una cierta posición. La posición es un valor `(ancho, altura)` de ese píxel. El color es el color RGB de ese píxel.

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

Cada color RGB proporciona un valor tupla `(rojo, verde, azul)` de un píxel. `Color[0]` da el valor rojo del píxel, `Color[1]` da el valor verde del píxel y `Color[2]` da el valor azul del píxel.

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
Aquí el valor RGB se descompone de manera que el rojo tiene un valor de 255, el verde tiene un valor de 255 y el azul tiene un valor de 0.  