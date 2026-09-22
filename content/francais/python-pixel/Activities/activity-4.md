---
title: "Activité 4 : Créer un Filtre Basique"
date: 2026-04-25T00:00:00-07:00
prereq: "Bases de Python, Python Pixels : Couleurs et Pixels, Manipulation d'images en Python : Ouvrir une image"
difficulties: ["intermédiaire"]
weight: 4
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/jA6xNqAhb1o" title="Activité 4 : Créer un Filtre Basique - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Maintenant que nous comprenons mieux les pixels et les images, nous pouvons commencer à apprendre comment concevoir votre propre filtre sur une image. Voyons quelques exemples pour concevoir un filtre basique sur votre image.

### Exemple de filtre bleu

<img src="../../media/cat.png" alt="Image originale du chat" width="50%">
Nous voulons ajouter un filtre bleu au joli chat ci-dessus. Voyons comment y parvenir.

```python
# Nous devons importer le package PIL pour permettre la manipulation des pixels.
from PIL import Image

# Ouvrir l'image du chat
img = Image.open("cat.png")

# Ajoutons le filtre bleu
for i in range(img.size[0]): # Pour chaque colonne
    for j in range(img.size[1]): # Pour chaque ligne
        color = img.getpixel( (i,j) )
        img.putpixel((i,j),(0, 0, color[2])) # Définir la couleur en conséquence

# Enregistrer l'image du chat après application du filtre
img.save("Mycat.png")
```

Waouh ! Voici notre chat après application du filtre bleu.
<img src="../../media/bluefiltercat.png" alt="Image du chat avec filtre bleu appliqué" width="50%">

{{% notice tip %}}
Comment cela fonctionne-t-il ? Jetons un coup d'œil à la boucle : 

```python
for i in range(img.size[0]): # Pour chaque colonne
    for j in range(img.size[1]): # Pour chaque ligne
        color = img.getpixel( (i,j) ) # Obtenir le pixel actuel
        img.putpixel((i,j),(0, 0, color[2])) # Définir la couleur en conséquence
```

Nous commençons par parcourir l'image, colonnes par colonnes et ligne par ligne, pour obtenir chaque pixel. Ensuite, nous récupérons la valeur de couleur actuelle du pixel. Pour appliquer un filtre bleu à ce pixel, il suffit simplement de définir les valeurs RGB 'Rouge' et 'Vert' à 0. Par conséquent, seules les valeurs 'Bleues' restent !

{{% /notice %}}


### Défi - Créez votre propre filtre

En suivant l'exemple ci-dessus, essayez de créer vos propres filtres avec différentes couleurs.
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity4" target="_blank">Lancez Replit</a>

Enfin, réfléchissez et essayez de créer un filtre gris. Nous parlerons de comment créer un filtre gris dans la section suivante.