---
title: "Activité 10 - Randomiser la couleur des pétales de votre fleur mandala"
date: 2024-09-17T13:24:17-07:00
weight: 13
draft: false
---

![alt text width="70%"](../media/mandala-color.png "mandala fleur avec pétales de couleur aléatoire")

Nous avons réussi à définir la couleur de la fleur mandala sur une valeur RVB. Maintenant, explorons le changement de couleur des pétales individuels de la fleur mandala ! 

Nous allons utiliser la bibliothèque `random` de python. La méthode `random.randint()` nous permet de choisir une valeur aléatoire pour chacune des valeurs rouge, vert ou bleu. Pour choisir une valeur qui est comprise entre 0 inclus et 256 exclus (en d'autres termes, entre 0 et 255 inclus), nous devons utiliser `random.randint(0, 256)`.

Utilisez `random.randint(0, 256)` trois fois pour produire trois valeurs aléatoires, et intégrez-les dans la méthode `turtle.color()`. Vous devriez maintenant pouvoir voir une fleur mandala multicolore ! C'est certainement une fleur dont Alex serait intéressé à collecter le nectar !

<iframe src="https://trinket.io/embed/python/64ab3455ae" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br>
<br>

Félicitations ! Vous avez aidé Alex à fabriquer un nid d'abeilles et une fleur ! Il peut maintenant vivre heureux dans sa ruche et faire beaucoup de miel ! Votre image finale devrait ressembler à ceci :

![alt text width="70%"](../media/turtle-honeycomb-flower.png "produit final")