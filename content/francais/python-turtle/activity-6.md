---
title: "Activity 6 - Moving the turtle"
date: 2019-07-25T13:24:17-07:00
weight: 9
draft: false
---

<img src="../media/bee_turtle_chat.png" alt="Bee turtle chat" width="25%"/>

Notre première étape consiste à dessiner une ruche plus petite afin de pouvoir dessiner à la fois la ruche et la fleur à l'écran. Nous avons déjà fait cela pour vous - voyez-vous ce que nous avons changé pour dessiner une ruche plus petite ?

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

Ensuite, nous devons déplacer la tortue vers un nouvel emplacement pour dessiner la fleur (nous ne voulons pas dessiner la fleur sur la ruche !). Pour ce faire, nous devons d'abord utiliser les méthodes suivantes :

``` python
turtle.penup() 
turtle.goto(x,y)
turtle.pendown()
```

`turtle.penup()` indique à la tortue de lever son stylo pour ne pas dessiner pendant qu'elle se déplace. Ensuite, avec `turtle.goto(x,y)`, nous indiquons à la tortue la position où elle doit se déplacer. Après cela, nous disons à la tortue de reposer son stylo avec `turtle.pendown()` pour qu'elle puisse recommencer à dessiner.

<img src="../media/graph.png" alt="Graph" width="50%"/>

{{% notice info %}}

## Conseil

Les `x` et `y` dans la méthode `turtle.goto()` sont les coordonnées `x` et `y` de la tortue. Nous voulons changer les coordonnées `x` et `y` de la tortue de `(0, 0)`, qui est le centre de l'image, à quelque part un peu plus loin afin que la fleur mandala ne couvre pas une partie du rayon de miel.

{{% /notice %}}

Pour compléter cette activité, déplacez la tortue à la position (100, 100) sur le canevas. Cela la déplacera vers le coin supérieur droit.

<iframe src="https://trinket.io/embed/python/dee0f642ce" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>