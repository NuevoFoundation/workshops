---
title: "Activité 3 - Dessiner un hexagone"
date: 2024-09-17T13:24:17-07:00
weight: 5
draft: false
---

![Turtle, hexagon animation](https://media.giphy.com/media/TDLqC61A5uOAO8WwnJ/giphy.gif)

Bon travail ! Vous venez de dessiner votre première forme en Python avec Turtle ! Maintenant, changeons légèrement le code que nous avons déjà écrit pour dessiner un carré afin de dessiner un hexagone. Après tout, Alex est une abeille et il a besoin de dessiner des hexagones pour construire son premier rayon de miel.

Pour vous aider à dessiner un hexagone, pensez au nombre de côtés qu'un hexagone possède. Combien de degrés y a-t-il dans chaque angle intérieur d'un hexagone ?

{{% expand "**Indice :**" %}} 
Rappelez-vous que dans n'importe quelle forme, tous les angles intérieurs s'additionnent à 360°. Par exemple, il y a 4 côtés dans un carré, donc chaque angle intérieur d'un carré est de 360 ÷ 4 = 90°.
{{% /expand %}}
<br/>

{{% expand "**Montrer la réponse :**" %}} 
Comme un hexagone a 6 côtés, chaque angle intérieur d'un hexagone est de 360 ÷ 6 = 60°.
{{% /expand %}}
<br/>

Pour rappel, voici le code utilisé pour créer un triangle :

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

<iframe src="https://trinket.io/embed/python/e82295e92f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% expand "**Défi supplémentaire :**" %}}
Si tu as terminé plus tôt, essaie de modifier ton code et de dessiner des formes plus complexes ! Voici quelques exemples de formes que tu peux essayer de dessiner.

<div style="display: flex">
  <div><img src="../media/star_1.png" height="60%" title="Forme d’étoile 1" alt="Forme d’étoile 1"/></div>
  <div><img src="../media/star_2.png" height="60%" title="Forme d’étoile 2" alt="Forme d’étoile 2"/></div> 
</div>
{{% /expand %}}