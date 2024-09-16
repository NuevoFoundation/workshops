---
title: "Activity 10 - Randomizing the color of your mandala flower petals"
date: 2019-07-25T13:24:17-07:00
weight: 13
draft: false
---

![alt text width="70%"](../media/mandala-color.png "mandala flower with random color pedals")

Nous avons réussi à définir la couleur de la fleur mandala à une valeur RGB. Maintenant, explorons la possibilité de changer la couleur des pétales individuels de la fleur mandala. 

Nous allons utiliser la bibliothèque `random` de Python. La méthode `random.randint()` nous permet de choisir une valeur aléatoire pour chacune des valeurs rouge, verte ou bleue. Pour choisir une valeur comprise entre 0 inclus et 256 exclus (autrement dit, entre 0 et 255 inclus), nous devons utiliser `random.randint(0, 256)`.

Utilisez `random.randint(0, 256)` trois fois pour produire trois valeurs aléatoires et intégrez-les dans la méthode `turtle.color()`. Vous devriez maintenant voir apparaître une fleur mandala multicolore! C'est assurément une fleur dont Alex serait intéressé à récolter le nectar!

<iframe src="https://trinket.io/embed/python/64ab3455ae" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br>
<br>

Félicitations! Vous avez aidé Alex à créer un rayon et une fleur! Il peut maintenant vivre heureux dans sa ruche et faire beaucoup de miel! Votre image finale devrait ressembler à ceci:

![alt text width="70%"](../media/turtle-honeycomb-flower.png "final product")