---
title: "Activity 2 - Simplifying code with loops"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kGhMGdqqV-w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Super ! Vous avez dessiné un carré. Mais remarquez que nous écrivons les mêmes lignes encore et encore ! Nous avons dû répéter les instructions pour tracer une ligne et tourner à gauche 4 fois. Ne serait-il pas génial de donner les instructions une seule fois et de dire au programme de les répéter 4 fois ? Rassurez-vous, c'est possible !

Pour cela, nous devons utiliser des boucles. Les boucles exécutent un ensemble d'instructions plusieurs fois. Pour voir cela en action, voici un exemple de code qui dessine un triangle :

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

Comprenons ce que fait ce code. `for i in range(3):` Cette instruction indique au programme d'exécuter les instructions en boucle. `range(3)` définit une limite au nombre de fois que la boucle s'exécute (dans ce cas, 3 fois). La lettre `i` est appelée une **variable**. Elle est utilisée pour suivre combien de fois nous avons exécuté le contenu de la boucle.

{{% notice warning %}}

## Syntaxe Python délicate - Partie 1

La **syntaxe** est la manière dont nous écrivons des langages pour qu’ils soient compréhensibles. En anglais, nous avons des règles d'orthographe et de grammaire pour nous aider à comprendre les uns les autres. De même, le langage Python a des règles de syntaxe pour que l'ordinateur puisse comprendre notre code.

Tout d'abord, remarquez qu'à la fin de la ligne contenant `for`, nous avons ajouté un deux-points (`:`); cela signifie que la ligne suivante fera partie de la boucle `for`. L'ordinateur se plaindra si vous oubliez le `:` !

De plus, nous avons ajouté une tabulation devant certaines lignes de code dans l'exemple ci-dessus. La tabulation indique à l'ordinateur que ces instructions font partie de la boucle `for`.

Pour voir à quel point cela fait une différence, regardez le code ci-dessous. Comme nous avons supprimé la tabulation devant `turtle.left(120)`, le code ne fonctionnera plus comme prévu. Maintenant, nous répétons seulement `turtle.forward(50)` trois fois, et nous obtenons une ligne droite à la place !

``` python
for i in range(3):
  turtle.forward(50)
turtle.left(120)
```

{{% /notice %}}

Maintenant, prenez le code d'exemple que nous avons fourni et modifiez-le légèrement pour qu'au lieu de dessiner un triangle, il dessine un carré. Vous pouvez regarder ce que vous avez fait dans l'Activité 1 pour un indice.

<iframe src="https://trinket.io/embed/python/892913b49a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>