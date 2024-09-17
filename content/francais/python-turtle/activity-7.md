---
title: "Activité 7 - Dessiner un chiffre 8"
date: 2024-09-17T13:24:17-07:00
weight: 10
draft: false
---

<img src="../media/turtle_circles.png" alt="dessiner un chiffre 8" width="25%"/>

Super ! Maintenant, faisons un chiffre 8 comme première étape pour créer une fleur mandala ! Un chiffre 8 est simplement deux cercles opposés l'un à l'autre. 
Pour ce faire, nous pouvons utiliser la méthode `turtle.circle(x)`, qui prend un entier `x` comme rayon du cercle. (Vous vous souvenez peut-être que `2 * rayon` est la largeur du cercle.) Avoir le rayon comme **argument** signifie que nous pouvons décider de la taille du cercle.

``` python
  import turtle
  turtle.circle(20)
```

Dans cet exemple, le cercle fait 40 pixels de large et il est tracé dans le sens antihoraire. Si l'argument de `turtle.circle()` est négatif, alors le cercle est tracé dans le sens horaire et il est opposé à la version originale.

En utilisant ces informations, créez une nouvelle fonction appelée `figure_8()` qui dessine un chiffre 8.

<iframe src="https://trinket.io/embed/python/e87cb9f3b9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>