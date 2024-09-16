---
title: "Activity 5 - Drawing a honeycomb"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

<img src="../media/bee_honeycomb.png" alt="Honeycomb drawing" width="25%" />

C'est le final ! Créons la ruche dans laquelle Alex vivra. Heureusement, une ruche se compose simplement de 6 hexagones, alors combinons nos connaissances des fonctions et des boucles pour créer notre ruche !

Dans cette activité, créez une nouvelle fonction appelée `draw_honeycomb()`. À l'intérieur du corps de la fonction, créez une boucle qui se répète 6 fois. À l'intérieur de la boucle, nous devons d'abord dessiner un hexagone en utilisant notre fonction `draw_hexagon()` que nous avons précédemment définie. Ensuite, déplacez la tortue pour qu'elle puisse dessiner le prochain hexagone. Pour ce faire, après que la tortue a dessiné chaque hexagone, nous devons dire à notre tortue d'avancer de **50 pixels** et ensuite de tourner à droite de **60 degrés**.

Notez que le dessin de la ruche peut prendre un certain temps. Vous pouvez modifier la vitesse à laquelle la tortue dessine la ruche en réglant la vitesse de la tortue sur un nombre compris entre `1` et `10`, `1` étant le plus lent et `10` étant le plus rapide. Placez ce code à proximité de l'endroit où nous changeons la couleur de la tortue.

``` python
turtle.speed(8)
```

<iframe src="https://trinket.io/embed/python/d83811c24a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>