```yaml
---
title: "Accéder aux pixels d'une image"
draft: false
weight: 5
---
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/ydP3GVHLGR0" title="Access pixels on image - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Plus d'informations sur les pixels

Nous avons déjà appris à créer une image de couleur pure en utilisant des pixels et à modifier un pixel sur l'image. Maintenant, nous allons apprendre à identifier les pixels dans les images existantes.

* Pour des informations sur l'utilisation des listes et des tuples en Python, consultez les pages suivantes : 
<a href="../../../python-basics/data-structures/" target="blank">Structure de données</a>

## Obtenir les données de l'image 

```python
# N'oubliez pas d'importer Image
from PIL import Image
Image.size
Image.size[0]
Image.size[1]
```
`Image.size` donne une valeur `(largeur, hauteur)` de l'image. `Image.size[0]` donne la largeur de l'image et `Image.size[1]` donne la hauteur de l'image.

## Voyons un exemple

```python
# N'oubliez pas d'importer Image
from PIL import Image
img=Image.new('RGB', (200,100),(100,100,100))
# Imprimons les détails de l'image :
print(img.size) 
print(img.size[0])
print(img.size[1])
```

Le code ci-dessus imprimera :  
```  
(200, 100)  
200  
100  
```
Ici, la taille de l'image est 200 par 100. La largeur est de 200 et la hauteur est de 100.

## Obtenir des informations sur le pixel

`img.getpixel(x,y)` récupère une valeur de couleur à une certaine position. La position est une valeur `(largeur, hauteur)` de ce pixel. La couleur est la couleur RGB de ce pixel.

## Voyons un exemple

```python
# N'oubliez pas d'importer Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))
# Imprimons la couleur du pixel
print(color)
```

Le code ci-dessus imprimera :   
```
(255, 255, 0)
```

## Obtenir la valeur RGB d'un pixel 

Chaque couleur RGB donne une valeur tuple `(rouge, vert, bleu)` d'un pixel. `Color[0]` donne la valeur rouge du pixel, `Color[1]` donne la valeur verte du pixel et `Color[2]` donne la valeur bleue du pixel.

#### Voyons un exemple

```python
# N'oubliez pas d'importer Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))

# Imprimons la valeur RGB d'un pixel
print(color[0])
print(color[1])
print(color[2])
```

Le code ci-dessus imprimera :   
```
255
255
0
```
Ici, la valeur RGB se décompose de la manière suivante : le rouge a une valeur de 255, le vert a une valeur de 255 et le bleu a une valeur de 0.  