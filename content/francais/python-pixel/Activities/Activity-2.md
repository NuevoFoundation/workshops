```markdown
---
title: "Activité 2 : Modifiez votre tableau de couleurs"
date: 2026-04-25T00:00:00-07:00
prereq: "Bases de Python, Pixels Python : Couleurs et Pixels, Manipulation d'images en Python : Ouvrir une image"
difficulties: ["intermédiaire"]
weight: 2
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WkI5ij6pTWI" title="Activité 2 : Modifiez votre tableau de couleur - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Exemple un : Faire une diagonale

```python
# Cela crée le tableau de couleur original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
# Cela utilise une boucle while imbriquée pour changer l'image.
x = 0
y = 0
while x < 10:
 while y < 20:
   img.putpixel( (x,y), (0, 0, 0))
   x += 1
   y += 1
img.save('pil_red.png')
```

Voici l'image avant d'ajouter la diagonale.
<img src="../../media/whileloopbefore.png" alt="Image montrant le premier exemple de boucle while" width="60%">

Voici l'image après avoir ajouté la diagonale.
<img src="../../media/whileloopafter.png" alt="Image montrant le résultat du premier exemple de boucle while" width="60%">

## Exemple deux : Faire un rectangle.

```python
# Cela crée le tableau de couleur original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
# Cela utilise une boucle for imbriquée pour changer l'image.
for x in range(10, 30):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))
img.save('pil_redmodified.png')
```

Voici l'image avant d'ajouter le rectangle.
<img src="../../media/whileloopbefore.png" alt="Image montrant le premier exemple de boucle for" width="60%">

Voici l'image après avoir ajouté le rectangle.
<img src="../../media/forloopafter.png" alt="Image montrant le résultat du premier exemple de boucle for" width="60%">

## Modifier votre propre tableau de couleurs !

Voici deux modèles pour vous aider à modifier vos tableaux de couleurs.

#### Modèle un : Ajouter une ligne

```python
# Modèle pour ajouter une ligne
initial_position_x = 0 #modifiez ici
initial_position_y = 0 #modifiez ici
width = 0 #modifiez ici
height = 0 #modifiez ici
color = (0,0,0) #modifiez ici
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel( (x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

#### Modèle deux : Ajouter un rectangle

```python
# Modèle pour ajouter un rectangle
initial_position_x = 0 #modifiez ici
initial_position_y = 0 #modifiez ici
width = 0 #modifiez ici
height = 0 #modifiez ici
color = (0,0,0) #modifiez ici
for x in range(initial_position_x, width+initial_position_x):
  for y in range(initial_position_y, height+initial_position_y):
    img.putpixel( (x,y), color)
img.save('pixel-activity2.png')
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity2" target="_blank">Lancer Replit</a>
```