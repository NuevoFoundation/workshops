---
title: "Activité 6 - Déplacer la tortue"
date: 2024-09-17T13:24:17-07:00
weight: 9
draft: false
---

<img src="../media/bee_turtle_chat.png" alt="Bee turtle chat" width="25%"/>

Notre première étape est de dessiner une ruche plus petite afin que nous puissions dessiner à la fois la ruche et la fleur à l'écran. Nous l'avons déjà fait pour vous - voyez-vous ce que nous avons changé pour dessiner une ruche plus petite ?

``` python
def draw_hexagon():
  for i in range(6):
    turtle.forward(20)
    turtle.left(60)

def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(20)
    turtle.right(60)
```

Ensuite, nous devons déplacer la tortue vers un nouvel emplacement pour dessiner la fleur (nous ne voulons pas dessiner la fleur par-dessus la ruche !). Pour ce faire, nous devons d'abord utiliser les méthodes suivantes :

``` python
turtle.penup() 
turtle.goto(x,y)
turtle.pendown()
```

`turtle.penup()` dit à la tortue de lever son stylo pour ne pas dessiner pendant qu'elle se déplace. Ensuite, avec `turtle.goto(x,y)`, nous indiquons à la tortue la position où se déplacer. Après cela, nous disons à la tortue de reposer son stylo avec `turtle.pendown()` pour qu'elle puisse recommencer à dessiner. 

<img src="../media/graph.png" alt="Graph" width="50%"/>


{{% notice info %}}

## Conseil

Les `x` et `y` dans la méthode `turtle.goto()` sont les coordonnées `x` et `y` de la tortue. Nous voulons changer les coordonnées `x` et `y` de la tortue de `(0, 0)`, qui est le centre de l'image, à un endroit un peu plus éloigné pour que la fleur mandala ne couvre pas une partie de la ruche.

{{% /notice %}}

Pour compléter cette activité, déplacez la tortue à la position (100, 100) sur la toile. Cela la déplacera vers le coin supérieur droit.

<iframe src="https://trinket.io/embed/python/dee0f642ce" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>