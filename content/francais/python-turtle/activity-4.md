---
title: "Activité 4 - Simplifier le code avec des fonctions"
date: 2024-09-17T13:24:17-07:00
weight: 6
draft: false
---

Nous avons dessiné un hexagone. Mais ce n'est qu'un des nombreux hexagones qu'Alex doit construire pour sa ruche. Encore une fois, il semble que nous devrions répéter le code plusieurs fois pour dessiner plusieurs hexagones. Heureusement, nous n’avons pas à le faire ! Les fonctions à la rescousse !

{{% notice tip %}}

## Fonctions

Une fonction est un moyen de regrouper des lignes de code pour faire quelque chose. Par exemple, `turtle.forward(50)` déplace la tortue de 50 pas en avant, et `turtle.left(120)` tourne la tortue de 120 degrés à gauche. Que faire si nous voulons toujours effectuer ces deux actions ensemble ? Nous pouvons les mettre dans une fonction appelée `draw_line()`, de sorte que chaque fois que cette fonction est appelée, ces deux actions se produisent simultanément. Pensez-y comme une recette :nous regroupons toutes les instructions ensemble, et le nom de la recette est la nourriture que nous préparons.

{{% /notice %}}

Voici un exemple de **définition de fonction**, et comment nous l'utiliserions :

``` python
def draw_line():
  turtle.forward(50)
  turtle.left(120)
```

La première ligne est appelée ** the function definition header **. Le mot-clé `def` indique à l'ordinateur que nous définissons une nouvelle fonction. Ensuite, nous donnons un nom à la fonction, dans ce cas `draw_line`. Enfin, n'oubliez pas le `():` à la fin de la ligne, qui indique à l'ordinateur que nous commençons le corps de la fonction.

{{% notice tip %}}

## Matériel supplémentaire - paramètres

Dans les parenthèses `()` nous définirions normalement des **paramètres** pour la fonction. Les paramètres sont des entrées que nous pouvons donner à la fonction, que la fonction peut utiliser pour produire sa sortie. Par exemple, nous devons avoir deux nombres pour les additionner et produire un résultat - les deux nombres que nous utilisons peuvent être considérés comme des **paramètres**. Aujourd'hui, nous n'utiliserons pas de paramètres, et nous laisserons comme `()`.

{{% /notice %}}

Semblable à une boucle for, tout ce que nous souhaitons définir dans la fonction doit être précédé d'une tabulation.

Si vous appuyez sur **run** avec juste ce code, vous remarquerez que vous ne verrez aucune sortie ! Nous avons seulement créé les fonctions, mais nous devons les utiliser. Pour utiliser la fonction que nous avons créée, tapez à nouveau `draw_line()` sans le `def`.

``` python
def draw_line():    # Définition de fonction
  turtle.forward(50)
  turtle.left(120)

draw_line()         # Appel de fonction
```

Ceci est appelé un **appel de fonction** pour la fonction `draw_line()`. Un appel de fonction exécute le code défini dans la fonction portant le même nom. Avec l'analogie de la recette, pensez à cela comme à la réalisation de la recette.

{{% notice info %}}

## Conseils

1. Assurez-vous toujours que les noms de vos fonctions sont suffisamment descriptifs pour expliquer ce que le code dans la fonction fait.
2. Votre appel de fonction doit être en dessous de la définition de la fonction.

{{% /notice %}}

{{% notice warning %}}

## Syntaxe Python délicate - Partie 2

Remarquez que les fonctions utilisent des règles de syntaxe similaires aux boucles `for` - vous devez avoir un `:` à la fin de la déclaration de fonction, et tout dans le corps de la fonction doit commencer par une tabulation.

Que se passe-t-il lorsque vous avez besoin d'une boucle `for` à l'intérieur d'une fonction ? Ensuite, vous devez combiner les règles ensemble ! Voici un exemple de la façon de mettre correctement une boucle `for` à l'intérieur d'une fonction.

``` python
def draw_line():
  for i in range(3):
    turtle.forward(50)
```

Remarquez que `turtle.forward(50)` a 2 tabulations devant lui, car il est à la fois dans une définition de fonction et dans une boucle `for` !

{{% /notice %}}

Alors, essayons cela en créant notre propre fonction `draw_hexagon()` ! N'oubliez pas d'inclure l'en-tête de définition de fonction, le nombre de côtés d'un hexagone: 60 dégrées et l'angle associé à un hexagone : 