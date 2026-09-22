---
title: "Pixels sur une Image"
draft: false
weight: 4
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WvDHBwyM6_U" title="Pixels on an Image - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pixels 

Les pixels sont de petites zones de couleur sur un écran d'affichage. Les images sont formées par des pixels sur l'écran. Nous pouvons manipuler les pixels en modifiant la **valeur RGB**, ce qui revient essentiellement à changer les valeurs de rouge, vert et bleu de chaque pixel. Lorsque nous voyons une image sur un écran, elle est composée d'une multitude de petits pixels de différentes couleurs côte à côte. Cependant, chaque petit pixel a une seule couleur à une position unique dans l'image.

<div style="width:80%;padding-left:20%;">
    <table>
        <td>
            <img src="../../media/nuvi.png" alt="Personnage Nuvi" width="100%">
        </td>
        <td>
            <img src="../../media/pixel-nuvi.png" alt="Personnage Nuvi affiché en pixels" width="100%">
        </td>
    </table>
</div>

Passons maintenant à la création d'images. N'oubliez pas, nous avons appris comment ouvrir et enregistrer des images en Python en utilisant le module Pillow dans les sections précédentes !

## Créer des images à l'aide de pixels

```python
# Pensez à importer Image
from PIL import Image

Image.new(mode, size)
Image.new(mode, size, color)
```

`Image.new()` crée une nouvelle image avec le mode et la taille donnés (et éventuellement, la couleur). Ici, nous pouvons utiliser `RGB` comme mode. La taille est une valeur `(largeur, hauteur)` d'une image. La couleur correspond à la couleur RGB des pixels. Nous pouvons également utiliser des noms de couleurs au lieu des valeurs RGB. Si vous n'initialisez pas la valeur de la couleur, l'image est remplie en noir.

## Explorons quelques exemples

```python
# Pensez à importer Image
from PIL import Image
img = Image.new('RGB', (200,100),(100,100,100))
img.save('pil_grey.png')
```
La variable `img` stocke l'image PNG qui ressemble à cela : 

<img src="../../media/grey.png" alt="Image montrant le premier exemple de pixels" width="40%">

```python
# Pensez à importer Image
from PIL import Image
img=Image.new('RGB', (200,100),"black")
img.save('pil_black.png')
```
Ici, spécifier `black` comme couleur RGB crée et stocke l'image PNG qui ressemble à ceci :

<img src="../../media/black.png" alt="Image montrant le deuxième exemple de pixels" width="40%">

## Modifier un pixel dans une image 

Et si nous voulions ajouter un autre pixel dans une image ? 

La fonction `img.putpixel( (x,y), (r, g, b))` ajoute un nouveau pixel sur l'image à la position et couleur spécifiées. La position est une valeur `(largeur, hauteur)` qui indique l'emplacement du pixel sur l'image. La couleur est la couleur RGB de ce pixel.

## Explorons un exemple

```python
# Pensez à importer Image
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
img.putpixel( (100,50), (0, 0, 0))
img.save('pil_black-dot.png')
```

Après avoir créé une image jaune de 200x100, la fonction `putpixel` ajoute un petit point au milieu de ce bloc jaune. C'est un petit pixel - en fait, il est si petit que vous devrez peut-être agrandir l'image pour vraiment le voir !

<img src="../../media/black-dot.png" alt="Image montrant le troisième exemple de pixels" width="40%">

