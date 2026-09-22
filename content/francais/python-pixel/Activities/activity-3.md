---
title: "Activité 3 : Défi : Concevoir de nouveaux éléments"
prereq: "Bases de Python, Manipulation d'images en Python : Ouvrir une image, Pixels en Python : Couleurs et Pixels"
difficulties: ["intermédiaire"]
date: 2026-04-25T00:00:00-07:00
weight: 3
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/YkxNH1TWjR0" title="Activity 3: Challenge: Design new elements - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


À l'aide de boucles, vous pouvez créer vos propres éléments sur la planche de couleurs. Vous pouvez concevoir votre propre logo ou tout ce que vous voulez sur cette planche de couleurs. Voici un exemple que nous vous avons fourni.

### Exemple : créer un N.

```python
# Ceci crée la planche de couleurs d'origine.
from PIL import Image
img = Image.new('RGB', (60, 30), 'white')

# Cela utilise une boucle imbriquée pour modifier la planche de couleurs.
# Ligne verticale gauche
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

# Ligne verticale droite
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

# Ligne diagonale centrale
for y in range(5, 25):
  for x in range(10+(y-5), 15+(y-5)):
    img.putpixel( (x,y), (255, 211, 0)) 
img.save('pixel-activity3.png')
```
résultat :
<img src="../../media/Activity3_ex.png" alt="Image illustrant l'exemple de l'activité 3" width="60%">


### Concevez votre propre élément !

{{% notice tip %}}
Vous pouvez concevoir des lettres simples, comme H, K, T, etc. Vous pouvez changer la couleur d'une partie de ces lettres afin de les rendre plus jolies.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity3" target="_blank">Lancer Replit</a>