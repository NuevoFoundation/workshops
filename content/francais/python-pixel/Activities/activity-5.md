```yaml
---
title: "Activité 5 : Filtres plus avancés"
date: 2026-04-25T00:00:00-07:00
prereq: "Bases de Python, Python Pixels : Couleurs et Pixels, Manipulation d'images avec Python : Ouvrir une image"
difficulties: ["intermédiaire"]
weight: 5
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/deYXkPt58co" title="Activité 5 : Filtres plus avancés - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
  
Dans la section précédente, nous avons vu un exemple de création d'un filtre bleu et réfléchi à la manière de créer un filtre gris. Maintenant, créons ensemble notre filtre gris.

### Exemple - Créer un filtre gris

Modifions ensemble l'image originale du chat ci-dessous avec notre filtre gris !

<img src="../../media/cat.png" alt="Image originale du chat" width="50%">

```python
# Nous devons importer le package PIL pour permettre la manipulation des pixels.
from PIL import Image

# Ouvrir l'image du chat
img = Image.open("cat.png")

# Filtre gris
for i in range(img.size[0]): # Pour chaque colonne :
    for j in range(img.size[1]): # Pour chaque rangée :
        color = img.getpixel( (i,j)) # Obtenir la couleur 
        GREY = (color[0] + color[1] + color[2]) // 3 # Moyenne des valeurs des pixels
        img.putpixel((i,j),(GREY, GREY, GREY)) # Définir la couleur en conséquence

# Sauvegarder l'image du chat après application du filtre
img.save("Mycat.png")
```

{{% notice tip %}}
Rappelez-vous, pour définir un pixel gris, les trois valeurs RGB doivent être identiques. Cependant, définir chaque pixel à la même valeur aléatoire (ex. 200) rendra toute l'image grise, plutôt que d'ajouter simplement un filtre à l'image existante du chat.

Comment déterminer la meilleure méthode pour rendre un pixel "gris" ? Nous pouvons faire une moyenne de chaque valeur des couleurs RGB. Vous pouvez utiliser // pour effectuer une division entière, ce qui garantit que le résultat de l'opération de moyenne est un nombre entier.

{{% /notice %}}

Wow ! Voici notre chat après l'application du filtre gris.
  
<img src="../../media/greyfiltercat.png" alt="Image du chat avec filtre gris appliqué" width="50%">

### Exemple - Filtre partiel

Pensons maintenant à la manière d'ajouter un filtre uniquement sur une partie de notre adorable chat.

```python
# Nous devons importer le package PIL pour permettre la manipulation des pixels.
from PIL import Image

# Ouvrir l'image du chat
img = Image.open("cat.png")

# Filtre gris
for i in range((img.size[0] // 2)): # Pour les colonnes de la première moitié
    for j in range((img.size[1] // 2)): # Pour les rangées de la première moitié
        color = img.getpixel((i,j)) # Obtenir la couleur
        GREY = (color[0] + color[1] + color[2]) // 3 # Moyenne des valeurs des pixels
        img.putpixel((i,j),(GREY, GREY, GREY)) # Définir la couleur en conséquence

# Sauvegarder l'image du chat après application du filtre
img.save("Mycat.png")
```

Wow ! Voici notre chat après l'application du filtre. Nous avons uniquement filtré un quart du chat dans le coin supérieur gauche !

<img src="../../media/partialfilter.png" alt="Image du chat avec un filtre partiel appliqué" width="50%">

### Défi - Créez votre propre filtre partiel

C'est maintenant à votre tour de filtrer la partie que vous souhaitez avec différents types de filtres sur le chat mignon ! Excitant !

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity5" target="_blank">Lancer Replit</a>

{{% showanswer Advanced %}}

Ne serait-il pas agréable de simplifier les étapes ci-dessus ? Faisons cela en utilisant les fonctions `filter()` et `convert()` de `Pillow ImageFilter`.

Pour utiliser la fonction `filter()`, vous pouvez spécifier le type de filtre ImageFilter dans les parenthèses. Par exemple, `image.filter(ImageFilter.BLUR)` rendra l'image floue. Si vous utilisez `ImageFilter.CONTOUR` à la place, cela ajoutera un effet « croquis » à votre image.

Par exemple, pour l'objet 'img' mentionné ci-dessus :

```python
    blurredImage = img.filter(ImageFilter.BLUR) 
    blurredImage.save("myCatBlurred.jpg")
```

Vous devriez voir que l'image sauvegardée du chat est floue. Essayez cela avec quelques autres filtres d'images jusqu'à en trouver un que vous aimez !

De plus, nous pouvons utiliser la fonction `convert()` pour transformer notre image en noir et blanc. Pour utiliser cette fonction, vous pouvez spécifier le mode dans lequel vous souhaitez convertir votre image. Les modes les plus courants sont "L", qui convertit une image en niveaux de gris, et "RGB" qui convertit une image en ses vraies couleurs.

Essayons cela ainsi :

```python
    greyscaleImage = img.convert("L")
    greyscaleImage.save("myCatBW.jpg")
```

Si vous combinez la fonction de flou et la fonction de conversion en noir et blanc, vous obtiendrez quelque chose comme ceci – parfait !

<img src="../../media/bw_upside_down.png" alt="chat inversé flou en noir et blanc" width="50%">
</br>
{{% /showanswer %}}
```