---
title: "Activité 5 - Dessiner un nid d'abeilles"
date: 2024-09-17T13:24:17-07:00
weight: 7
draft: false
---

<img src="../media/bee_honeycomb.png" alt="Dessin de nid d'abeilles" width="25%" />

C'est le final ! Créons le nid d'abeilles dans lequel Alex va vivre. Heureusement, un nid d'abeilles est simplement composé de 6 hexagones, alors combinons nos connaissances des fonctions et des boucles pour réaliser notre nid d'abeilles !

Dans cette activité, créez une nouvelle fonction appelée `draw_honeycomb()`. À l'intérieur du corps de la fonction, créez une boucle qui se répète 6 fois. À l'intérieur de la boucle, nous devons d'abord dessiner un hexagone en utilisant notre fonction `draw_hexagon()` que nous avons précédemment définie. Ensuite, déplacez la tortue pour qu'elle puisse dessiner l'hexagone suivant. Pour cela, après que la tortue ait dessiné chaque hexagone, nous devons lui dire d'avancer de **50 pixels** puis de tourner à droite de **60 degrés**.

Notez que le dessin du nid d'abeilles peut prendre un certain temps. Vous pouvez changer la vitesse à laquelle la tortue dessine le nid d'abeilles en réglant la vitesse de la tortue à un nombre entre `1` et `10`, `1` étant le plus lent et `10` le plus rapide. Placez ce code près de l'endroit où nous changeons la couleur de la tortue.

``` python
turtle.speed(8)
```

<iframe src="https://trinket.io/embed/python/d83811c24a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>