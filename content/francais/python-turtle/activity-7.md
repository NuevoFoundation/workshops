---
title: "Activity 7 - Drawing a figure 8"
date: 2019-07-25T13:24:17-07:00
weight: 10
draft: false
---

<img src="../media/turtle_circles.png" alt="drawing a figure 8" width="25%"/>

Super ! Maintenant, faisons un chiffre 8 comme première étape pour créer une fleur mandala ! Un chiffre 8 est simplement deux cercles opposés l'un à l'autre. 
Pour ce faire, nous pouvons utiliser la méthode `turtle.circle(x)`, qui prend un entier `x` comme le rayon du cercle. (Vous vous rappelez peut-être que `2 * rayon` est la largeur du cercle.) Avoir le rayon comme **argument** signifie que nous pouvons décider de la taille du cercle.

``` python
  import turtle
  turtle.circle(20)
```

Dans l'exemple ci-dessus, le cercle a 40 pixels de large et est dessiné dans le sens antihoraire. Si l'argument de `turtle.circle()` est négatif, alors le cercle est dessiné dans le sens horaire et est opposé à la version originale.

En utilisant ces informations, créez une nouvelle fonction appelée `figure_8()` qui dessine un chiffre 8.

<iframe src="https://trinket.io/embed/python/e87cb9f3b9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>