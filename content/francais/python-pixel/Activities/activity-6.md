---
title: "Activité 6 : Rogner une image"
prereq: "Bases de Python, Manipulation d'images en Python : Ouvrir une image, Pixel Python : Couleurs et pixels"
difficulties: ["intermédiaire"]
date: 2026-04-25T00:00:00-07:00
weight: 6
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/X2AoHSdQOLo" title="Activity 6: Crop Image - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Dans cette section, nous allons apprendre à rogner votre image.

### Exemple - Rogner la moitié du chat

Maintenant, rognons la moitié droite de l'image du chat.

<img src="../../media/cat.png" alt="Image originale du chat" width="50%">

```python
# Nous devons importer le package PIL pour permettre la manipulation des pixels.
from PIL import Image

# Ouvrir l'image du chat
img = Image.open("cat.png")
width = img.size[0] 
height = img.size[1] 

# Configurer une nouvelle image avec la moitié de la largeur et la pleine hauteur
newimg = Image.new('RGB', (width // 2, height))

# Définir les pixels pour la nouvelle image
for i in range(width // 2):    
    for j in range(height): # Pour chaque ligne
        color = img.getpixel((i,j)) # Obtenez la couleur de l'image originale
        newimg.putpixel((i,j),color) # Placez la couleur dans la nouvelle image

newimg.save("Mycat.png")
```

Waouh ! Voici notre chat après le rognage. Nous avons rogné la moitié droite de l'image !

<img src="../../media/halfcat.png" alt="Image du chat rognée à la moitié gauche" width="25%">

### Exemple - Rogner la pièce centrale

Rognons l'image du chat pour conserver uniquement la partie centrale !

<img src="../../media/cat.png" alt="Image originale du chat" width="50%">

```python
# Nous devons importer le package PIL pour permettre la manipulation des pixels.
from PIL import Image

# Ouvrir l'image du chat
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configurer une nouvelle image avec la moitié de la largeur et la moitié de la hauteur
newimg = Image.new('RGB', (width // 2, height // 2))

# Définir les pixels pour la nouvelle image
for i in range(width // 4, (width // 4) * 3): # Prenons du premier quart de la largeur de l'image jusqu'au dernier quart    
    for j in range(height // 4, (height // 4) * 3): # Pour chaque ligne
        color = img.getpixel((i,j)) # Obtenez la couleur de l'image originale
        newimg.putpixel((i - width // 4, j - height // 4), color) # Placez la couleur dans la nouvelle image

newimg.save("Mycat.png")
```

Waouh ! Voici notre chat après le rognage.
<img src="../../media/cropcat.png" alt="Image du chat avec un recadrage personnalisé" width="25%">

### Défi - Rogner une image selon votre choix

C'est à votre tour de rogner la partie que vous voulez sur le mignon chat ! Enthousiasmant !
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity6" target="_blank">Lancer Replit</a>