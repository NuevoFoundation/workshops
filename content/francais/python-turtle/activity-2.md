---
title: "Activité 2 - Simplifier le code avec des boucles"
date: 2024-09-17T13:24:17-07:00
weight: 4
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kGhMGdqqV-w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Super ! Vous avez dessiné un carré. Mais remarquez que nous écrivons les mêmes lignes encore et encore ! Nous avons dû répéter les instructions pour dessiner une ligne et tourner à gauche 4 fois. Ne serait-ce pas génial si nous pouvions donner les instructions une fois et dire au programme de les répéter 4 fois ? Ne vous inquiétez pas, nous pouvons le faire !

Pour cela, nous devons utiliser des boucles. Les boucles exécutent un ensemble d'instructions plusieurs fois. Pour voir cela en action, voici un exemple de code qui dessine un triangle :

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

Comprenons ce que fait ce code. `for i in range(3):` Cette instruction dit au programme d'exécuter les instructions dans une boucle. `range(3)` fixe une limite au nombre de fois où la boucle s'exécute (dans ce cas, 3 fois). La lettre `i` est appelée une **variable**. Elle est utilisée pour suivre combien de fois nous avons exécuté le contenu de la boucle.

{{% notice warning %}}

## Syntaxe Python délicate - Partie 1

La **syntaxe** est la façon dont nous écrivons les langages pour qu'ils soient compréhensibles. En anglais, nous avons des règles d'orthographe et de grammaire pour nous aider à nous comprendre. De même, le langage Python a des règles de syntaxe pour que l'ordinateur comprenne notre code.

Tout d'abord, remarquez qu'à la fin de la ligne avec `for`, nous avons ajouté deux-points (`:`); ceci signale que la ligne suivante fera partie de la boucle `for`. L'ordinateur se plaindra si vous oubliez les `:` !

De plus, nous avons ajouté une tabulation devant certaines lignes de code dans l'exemple ci-dessus. La tabulation indique à l'ordinateur que ces instructions font partie de la boucle `for`.

Pour voir la différence que cela fait, jetez un coup d'œil au code ci-dessous. Parce que nous avons enlevé la tabulation devant `turtle.left(120)`, le code ne fonctionnera plus comme prévu. Maintenant, nous ne répétons `turtle.forward(50)` que trois fois, et nous obtenons une ligne droite à la place !

``` python
for i in range(3):
  turtle.forward(50)
turtle.left(120)
```

{{% /notice %}}

Maintenant, regardez l'exemple de code que nous avons fourni et modifiez-le légèrement pour qu'il dessine un carré au lieu d'un triangle. Vous pouvez regarder ce que vous avez fait dans l'Activité 1 comme indice.

<iframe src="https://trinket.io/embed/python/892913b49a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>