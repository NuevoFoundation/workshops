---
title: "Activité 1 : Créer un tableau de couleurs"
prereq: "Bases de Python, Manipulation d'images en Python : ouvrir une image, Pixels Python : Couleurs et Pixels"
difficulties: ["intermédiaire"]
date: 2026-04-25T00:00:00-07:00
weight: 1
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nz3Uz4kBoUU" title="Activité 1 : Créer un tableau de couleurs - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Exemple de tableau de couleurs basique

Voici un exemple pour créer un tableau de couleurs avec la couleur rouge, une largeur de 60 et une longueur de 30.

```python
#Voici l'exemple pour créer un tableau de couleurs.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
```
<img src="../../media/whileloopbefore.png" alt="Image montrant le premier exemple de l'activité un" width="60%">

## Créez votre propre tableau de couleurs !

Choisissez votre couleur préférée et créez un tableau de couleurs avec lequel jouer ! Voici quelques exemples de couleurs que vous pouvez choisir, mais vous pouvez également choisir votre propre couleur.

<img src="../../media/Color-chart.png" alt="Tableau de couleurs montrant des exemples de couleurs RGB" width="30%">

<!-- Pour l'accessibilité, utilisez cette étiquette HTML -->
<label for="colorpicker">Vous pouvez utiliser le sélecteur de couleurs pour choisir une couleur :</label>
<input type="color" id="colorpicker">

{{% notice warning %}}
 Pour voir votre image, veuillez cliquer dans le coin supérieur gauche (où il est indiqué "Files"), puis cliquer sur le fichier image pour voir le résultat.
<div style="width:70%">
    <table>
        <td>
            <img src="../../media/open-file1.png" alt="Cliquez sur Files dans le panneau de gauche" width="100%">
        </td>
        <td>
            <img src="../../media/open-file2.png" alt="Cliquez sur le fichier image pour voir les résultats" width="100%">
        </td>
    </table>
</div>
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity1" target="_blank">Lancer Replit</a>