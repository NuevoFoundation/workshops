---
title: "Activité 8 : Retournez votre image"
date: 2026-04-25T00:00:00-07:00
prereq: "Bases de Python, Pixels en Python : Couleurs et pixels, Manipulation d’images en Python : Ouvrir une image"
difficulties: ["intermédiaire"]
weight: 8
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jx_b8111WW0" title="Activité 8 : Retournez votre image - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Dans cette section, nous apprendrons à retourner une image en utilisant les pixels.

### Exemple - Retournez votre image à l’envers

Retournons le chat à l’envers.
<img src="../../media/cat.png" alt="Image originale du chat" width="50%">

{{% notice note %}}

Retourner une image à l’envers revient à créer une image symétrique par rapport à la `ligne centrale horizontale`, représentée par la ligne noire dans l'image suivante.

{{% /notice %}}

<img src="../../media/cathori.png" alt="Image du chat retournée horizontalement" width="50%">

```python
# Nous devons importer le package PIL pour la manipulation avec les pixels.
from PIL import Image

# Ouvrir l'image du chat
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configurer une nouvelle image avec la même largeur et hauteur
newimg = Image.new('RGB', (width,height))

# Définir le pixel pour la nouvelle image
for i in range(width): # Pour chaque colonne
    for j in range(height): # Pour chaque rangée
        heightNew = height - 1 - j # Obtenir la nouvelle position verticale du pixel.
        color = img.getpixel( (i, heightNew) ) # Obtenir la couleur de l'image originale
        newimg.putpixel((i,j),color) # Placer la couleur dans la nouvelle image

newimg.save("Mycat.png")
```

Wow ! Voici notre nouveau chat après l'avoir retourné.

<img src="../../media/flipcat.png" alt="Image du chat retournée à l’envers" width="50%">

Comment avons-nous déterminé comment définir `heightNew` ? Dans le code ci-dessus, nous avons :

`heightNew = height - 1 - j`

C'est l'élément clé pour retourner le chat à l’envers. Cela prend la hauteur de l'image, soustrait 1 ainsi que la position verticale actuelle du pixel (j). Nous soustrayons 1 pour l'indexation, car les ordinateurs commencent à compter à partir de '0' au lieu de '1'. Nous soustrayons ensuite la position verticale actuelle du pixel pour déterminer où le nouveau pixel doit se trouver.

Vous pouvez dessiner quelques images simples à la main pour visualiser cela.

Souvenez-vous, notre code principal est :

```python
width = img.size[0]
height = img.size[1]

# Configurer une nouvelle image avec la même largeur et hauteur
newimg = Image.new('RGB', (width,height))

# Définir le pixel pour la nouvelle image
for i in range(width): # Pour chaque colonne
    for j in range(height): # Pour chaque rangée
        heightNew = height - 1 - j # Obtenir la nouvelle position verticale du pixel.
        color = img.getpixel( (i, heightNew) ) # Obtenir la couleur de l'image originale
        newimg.putpixel((i,j),color) # Placer la couleur dans la nouvelle image
```

Par exemple, essayez d'appliquer ce code au groupe de lettres 4x4 suivant :

<img src="../../media/table.png" alt="Table de référence des coordonnées des pixels" width="15%">

Créez ensuite la sortie symétrique par rapport à la ligne centrale horizontale et comparez-la au résultat précédent. Sont-ils identiques ?

### Défi - Retournez votre chat de gauche à droite

C'est maintenant à vous de retourner votre chat de gauche à droite !

{{% notice note %}}

Retourner l'image de gauche à droite revient à créer une image symétrique par rapport à la `ligne centrale verticale`.

Prêtez attention à la variable `widthNew` et réfléchissez à la manière de la définir.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity8" target="_blank">Lancer Replit</a>