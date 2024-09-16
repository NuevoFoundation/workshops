---
title: "Les Bases - Dessiner une ligne colorée"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uSQGtnlot2s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Avant qu'Alex puisse apprendre à créer une ruche, il doit d'abord apprendre à dessiner une ligne colorée. Nous allons ajouter du code à la fenêtre Trinket ci-dessous, et nous le ferons en deux parties.

<iframe src="https://trinket.io/embed/python/1363ac22be" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Tout d'abord, nous devons indiquer à la tortue quelle couleur nous voulons que la ligne soit. Pour ce faire, tapons :

``` python
turtle.color("orange")
```

Essayons de comprendre cette ligne de code plus en détail.

{{% notice tip %}}

## Chaînes de caractères

Tout ce que vous voyez entre **guillemets** est appelé une **chaîne de caractères**. Une chaîne est simplement une séquence de caractères (qu'ils soient lettres, chiffres ou symboles).

Dans le code ci-dessus, `"orange"` est une chaîne de caractères. D'autres exemples de chaînes de caractères incluent `"123"`, `"abc!"` et `"green"`. Attention, `123`, `abc!` et `green` ne sont pas des chaînes car il manque des guillemets !

## Méthodes

`turtle.color()` est une **méthode.** Nous utilisons des méthodes pour que la tortue effectue certaines actions. Dans ce cas, `turtle.color()` change la couleur des lignes qu'elle dessine selon la couleur que nous lui indiquons. Nous lui avons demandé de changer la couleur en orange en lui envoyant la **chaîne** `"orange"` comme **argument**.

## Arguments

Les arguments sont des entrées que vous passez aux **méthodes** pour les utiliser. Dans notre exemple, `turtle.color()` a besoin d'un argument **chaîne de caractères** représentant le nom de la couleur à définir pour la tortue, donc nous avons passé `"orange"` comme **argument** à la méthode. Nous aurions pu aussi lui demander de changer la couleur pour autre chose, mais elle doit être une couleur que `turtle.color()` comprend. Les couleurs qu'elle reconnaît sont : `"red"`, `"orange"`, `"yellow"`, `"green"`, `"blue"`, `"purple"`, `"black"`, `"pink"`, et `"gray"`. Si nous envoyons autre chose que l'une de ces chaînes de couleurs, nous obtenons la couleur par défaut, qui est le noir.

{{% /notice %}}

Maintenant que nous avons choisi la couleur que nous voulons, nous pouvons maintenant dessiner une ligne ! Pour dessiner une ligne, il y a deux **méthodes** que nous pouvons utiliser :

``` python
turtle.forward(50)
turtle.backward(50)
```

`turtle.forward(50)` fera avancer la tortue de 50 pixels et dessinera une ligne dans la direction à laquelle elle fait face, tandis que `turtle.backward(50)` fera la même chose, mais dans la direction opposée.

{{% notice tip %}}

## Pixels

Une image est composée de milliers, voire de millions de pixels. Un pixel est une unité de mesure pour les images numériques, similaire à la façon dont nous mesurons le poids en livres ou les longues distances en miles.

## Entiers

Un entier est simplement un nombre entier, qu'il soit positif ou négatif. Dans cet exemple, `turtle.forward()` et `turtle.backward()` attendent un **nombre entier** comme argument au lieu d'une chaîne. Cela est dû au fait que l'argument représente le nombre de pixels que vous voulez que la tortue déplace en dessinant. Une chaîne de caractères ne fonctionnerait clairement pas pour ces méthodes !

{{% /notice %}}

Faisons avancer la tortue, donc tapez `turtle.forward(50)`. Votre code devrait ressembler à ceci :

``` python
import turtle

turtle.color("orange")
turtle.forward(50)
```

Maintenant que nous avons complété notre code, appuyez sur **run**. Vous devriez voir ce qui suit à l'écran des résultats :

![texte alternatif height="600px" width="70%"](../media/basics-trinket.png "Fenêtre Trinket")

Si c'est