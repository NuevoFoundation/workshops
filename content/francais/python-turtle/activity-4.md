---

title: "Activity 4 - Simplifying code with functions"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

Nous avons dessiné un hexagone. Mais ce n'est qu'un parmi les nombreux hexagones dont Alex a besoin pour construire sa ruche. Encore une fois, il semble que nous devions répéter le code de nombreuses fois pour dessiner plusieurs hexagones. Heureusement, nous n'avons pas besoin de le faire ! Les fonctions à la rescousse !

{{% notice tip %}}

## Fonctions

Une fonction est un moyen de regrouper des lignes de code pour faire quelque chose. Par exemple, `turtle.forward(50)` fait avancer la tortue de 50 pas, et `turtle.left(120)` fait tourner la tortue de 120 degrés vers la gauche. Que faire si nous voulons toujours effectuer ces deux actions ensemble ? Nous pouvons les mettre dans une fonction appelée `draw_line()`, afin que chaque fois que cette fonction est appelée, ces deux actions aient lieu simultanément. Pensez-y comme une recette : nous compilons toutes les instructions ensemble, et le nom de la recette est le plat que nous préparons.

{{% /notice %}}

Voici un exemple de **définition de fonction**, et comment nous l'utiliserions :

``` python
def draw_line():
  turtle.forward(50)
  turtle.left(120)
```

La première ligne est appelée l'en-tête de définition de fonction. Le mot-clé `def` indique à l'ordinateur que nous définissons une nouvelle fonction. Ensuite, nous donnons un nom à la fonction, dans ce cas `draw_line`. Enfin, n'oubliez pas le `():` à la fin de la ligne, qui indique à l'ordinateur que nous commençons le corps de la fonction.

{{% notice tip %}}

## Matériel supplémentaire - paramètres

Dans les parenthèses `()`, nous définirions normalement des **paramètres** pour la fonction. Les paramètres sont des entrées que nous pouvons fournir à la fonction, que la fonction peut utiliser pour produire son résultat. Par exemple, nous devons avoir deux nombres pour les additionner et produire un résultat - les deux nombres utilisés peuvent être considérés comme des **paramètres**. Aujourd'hui, nous n'utiliserons pas de paramètres, et laisserons `()` vide.

{{% /notice %}}

Contrairement à une boucle for, tout ce que nous souhaitons définir dans la fonction doit être précédé d'une tabulation.

Si vous appuyez sur **run** avec juste ce code, vous constaterez que vous ne verrez aucune sortie ! Nous avons seulement créé les fonctions, mais nous devons les utiliser. Pour utiliser la fonction que nous avons créée, saisissez à nouveau `draw_line()`, mais sans le `def`.

``` python
def draw_line():    # Définition de fonction
  turtle.forward(50)
  turtle.left(120)

draw_line()         # Appel de fonction
```

Ceci est appelé un **appel de fonction** pour la fonction `draw_line()`. Un appel de fonction exécute le code défini dans la fonction portant le même nom. Avec l’analogie de la recette, pensez-y comme à la réalisation effective de la recette.

{{% notice info %}}

## Conseils

1. Assurez-vous toujours que les noms de vos fonctions sont suffisamment descriptifs pour expliquer ce que le code de la fonction fait. 
2. Votre appel de fonction doit être sous la définition de fonction.

{{% /notice %}}

{{% notice warning %}}

## Syntaxe Python délicate - Partie 2

Notez que les fonctions utilisent des règles de syntaxe similaires avec les boucles `for` - vous devez avoir un `:` à la fin de la déclaration de fonction, et tout ce qui est dans le corps de la fonction doit commencer par une tabulation.

Que se passe-t-il lorsque vous avez besoin d'une boucle `for` à l'intérieur d'une fonction ? Alors, vous devez combiner les règles ensemble ! Voici un exemple sur la manière de correctement mettre une boucle `for` à l'intérieur d'une fonction.

``` python
def draw_line():
  for i in range(3):
    turtle.forward(50)
```

Notez que `turtle.forward(50)` a 2 tabulations devant lui, parce qu'il est à la fois à l'intérieur de la définition de fonction, et à l'intérieur d'une boucle `for` !

{{% /notice %}}

Essayons cela en créant notre propre fonction `draw_hexagon()` ! N'oubliez pas d'inclure l'en-tête de définition de fonction, le nombre de côtés d'un hexagone, et l'angle associé à un hexagone : 60 degrés