---
title: "Activité 7 : Changer l'arrière-plan d'une image"
prereq: "Bases de Python, Manipulation d'images en Python : Ouvrir une image, Pixels Python : Couleurs et Pixels"
difficulties: ["intermédiaire"]
date: 2026-04-25T00:00:00-07:00
weight: 7
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/zdi2R_EK6QA" title="Activité 7 : Changer l'arrière-plan d'une image - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Dans cette section, nous allons apprendre à changer l'arrière-plan simple d'une image en utilisant les pixels.

### Exemple - Changer la couleur d'arrière-plan

Changeons la couleur de l'arrière-plan de Nuvi en rose.
<img src="../../media/nuevo.png" alt="Logo de la Fondation Nuevo" width="25%">

```python
from PIL import Image

# Ouvrir l'image de Nuvi
img = Image.open("nuevo.png")

width = img.size[0]
height = img.size[1]
 
# Créer une nouvelle image avec la même largeur et hauteur
newimg = Image.new('RGB',(width,height))

# Définir les pixels pour la nouvelle image
colorpink = (244,114,208) 
coloryellow = img.getpixel((0,0))
for i in range(width):    
    for j in range(height):    
        color = img.getpixel((i,j)) # Obtenir la couleur depuis l'image originale
        if color == coloryellow: # Si c'est du jaune, alors :
            newimg.putpixel((i,j),colorpink) # Changer la couleur en rose
        else:
            newimg.putpixel((i,j),color) # Sinon, conserver la couleur d'origine

newimg.save("nuevopink.png")
```

Wow ! Voici notre nouveau Nuvi après avoir changé l'arrière-plan.
<img src="../../media/nuevopink.png" alt="Logo de la Fondation Nuevo avec un fond rose" width="25%">


### Défi - Changer l'arrière-plan selon vos préférences

C'est maintenant à vous de changer la couleur que vous voulez sur Nuvi !

{{% notice warning %}}
Pour voir votre image, veuillez cliquer dans le coin supérieur gauche (où il est indiqué « Files »), puis cliquer sur le fichier image pour voir le résultat.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity7" target="_blank">Lancer Replit</a>