---
title: "Activité 9 : Faites pivoter votre image"
date: 2026-04-25T00:00:00-07:00
prereq: "Bases de Python, Pixels et couleurs en Python, Manipulation d'images en Python : Ouvrir une image"
difficulties: ["intermédiaire"]
weight: 9
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/m0d9NT0MEPE" title="Activité 9 : Faites pivoter votre image - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Dans cette section, nous allons apprendre à faire pivoter une image à l’aide des pixels.

### Exemple - Faites pivoter votre image de 180 degrés dans le sens des aiguilles d’une montre

Faisons pivoter notre chat de 180 degrés dans le sens des aiguilles d’une montre.
<img src="../../media/cat.png" alt="Image originale du chat" width="50%">

```python
# Nous devons importer le module PIL pour permettre la manipulation des pixels.
from PIL import Image

# Ouvrir l'image du chat
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configurer une nouvelle image avec la même largeur et hauteur
newimg = Image.new('RGB',(width,height) )

# Configurer les pixels pour la nouvelle image
for i in range(width): # Pour chaque colonne
    for j in range(height): # Pour chaque ligne
        # Regardez comment nous obtenons notre heightNew.
        heightNew = height - 1 - j
        
        # Regardez comment nous obtenons notre widthNew.
        widthNew = width - 1 - i

        color = img.getpixel((widthNew, heightNew)) # Obtenir la couleur de l'image originale
        newimg.putpixel((i,j),color) # Mettre la couleur dans la nouvelle image

newimg.save("Mycat.png")
```

Wow ! Voici notre nouveau chat après la rotation.
<img src="../../media/catrot.png" alt="Image du chat après rotation" width="50%">

{{% notice note %}}

Faites attention à la façon dont nous obtenons heightNew et widthNew. Réfléchissez soigneusement à ces variables et essayez de les visualiser.

Par exemple, essayez de les appliquer au groupe de lettres 4x4 suivant :

<img src="../../media/table.png" alt="Table de référence des coordonnées des pixels" width="15%">

Ensuite, faites-le pivoter de 180 degrés dans le sens des aiguilles d’une montre et comparez avec le résultat précédent. Est-ce identique ?
{{% /notice %}}


### Défi - Faites pivoter votre chat de 90 degrés dans le sens inverse des aiguilles d’une montre

C’est maintenant à votre tour de faire pivoter votre chat de 90 degrés dans le sens inverse des aiguilles d’une montre !

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity9" target="_blank">Lancer Replit</a>

{{% showanswer Avancé %}}

Le module Pillow a des fonctions qui peuvent simplifier les étapes ci-dessus ! Pour cela, examinons la fonction `rotate()` de `Pillow Image`.

La rotation d'image fonctionne avec des angles. Par exemple, `rotate(45)` inclinera votre image de 45 degrés. Avec `rotate(90)`, votre image sera tournée sur le côté.

Essayons cela ! Faisons pivoter l’image avant de l’enregistrer :

```python
    image = Image.open("cat.jpg")
    image.rotate(90)
    image.save("myCat.jpg")
```

Hmm, l’image ne semble pas avoir pivoté. Pourquoi ? Eh bien, l’image que nous avons ouverte est sauvegardée dans la variable `image`. Quand nous faisons tourner l’image, nous ne sauvegardons pas l’image modifiée dans une variable, donc notre code ne garde pas la version tournée.

Faisons plutôt ceci :

```python
    image = Image.open("cat.jpg")
    image = image.rotate(90)
    image.save("myCat.jpg")
```

Défi : pouvez-vous faire tourner cette image complètement ? Pouvez-vous la tourner aux 3/4 sans utiliser un angle > 180 ? (Astuce : essayez d'utiliser des angles négatifs !)

Après une rotation complète, mon image ressemble à ceci :

<img src="../../media/upside_down.png" alt="chat à l'envers" width="50%">
</br>
{{% /showanswer %}}