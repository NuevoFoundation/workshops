---
title: "Les Bases - Dessiner une ligne colorée"
date: 2024-09-17T13:24:17-07:00
weight: 2
draft: false
---

Avant qu'Alex puisse apprendre à créer une ruche, il doit d'abord apprendre à dessiner une ligne colorée. Nous ajouterons du code à la fenêtre Trinket ci-dessous, et nous ferons cela en deux parties.

D'abord, nous devons dire à la tortue quelle couleur nous voulons que la ligne soit. Pour ce faire, tapons :

``` python
turtle.color("orange")
```

Essayons de comprendre cette ligne de code plus en détail.

{{% notice tip %}}

## Chaînes de caractères

Tout ce que vous voyez entre **guillemets** est appelé une **chaîne de caractères**. Une chaîne est simplement une séquence de caractères (qu'il s'agisse de lettres, de chiffres ou de symboles).

Dans le code ci-dessus, `"orange"` est une chaîne de caractères. D'autres exemples incluent `"123"`, `"abc!"` et `"green"`. Faites attention, `123`, `abc!` et `green` ne sont pas des chaînes parce qu'il manque les guillemets !

## Méthodes

`turtle.color()` est une **méthode.** Nous utilisons les méthodes pour faire exécuter certaines actions à la tortue. Dans ce cas, `turtle.color()` change la couleur des lignes qu'elle dessine à la couleur que nous lui indiquons. Nous lui avons dit de changer la couleur en orange en lui envoyant la **chaîne de caractères** `"orange"` en tant qu’**argument**.

## Arguments

Les arguments sont des entrées que vous passez aux **méthodes** pour utiliser. Dans notre exemple, `turtle.color()` a besoin d'une **chaîne** représentant le nom de la couleur à définir pour la tortue, donc nous avons passé `"orange"` en tant qu'**argument** à la méthode. Nous aurions aussi pu lui dire de changer la couleur pour quelque chose d'autre, mais cela devait être une couleur que `turtle.color()` comprend. Les couleurs qu'elle reconnaît sont : `"red"`, `"orange"`, `"yellow"`, `"green"`, `"blue"`, `"purple"`, `"black"`, `"pink"`, et `"gray"`. Si nous envoyons autre chose qu'une de ces couleurs, nous obtenons la couleur par défaut, qui est le noir.

{{% /notice %}}

Maintenant que nous avons choisi la couleur désirée, nous pouvons maintenant dessiner une ligne ! Pour dessiner une ligne, il existe deux **méthodes** que nous pouvons utiliser :

``` python
turtle.forward(50)
turtle.backward(50)
```

`turtle.forward(50)` fera avancer la tortue de 50 pixels et dessinera une ligne dans la direction qu'elle regarde, tandis que `turtle.backward(50)` fera la même chose, mais dans la direction opposée.

{{% notice tip %}}

## Pixels

Une image est composée de milliers, voire de millions de pixels. Un pixel est une unité de mesure pour les images numériques, tout comme nous mesurons le poids en livres, ou les grandes distances en miles.

## Entiers

Un entier est simplement un nombre entier, qu'il soit positif ou négatif. Dans cet exemple, tant `turtle.forward()` que `turtle.backward()` attendent un **entier** comme argument au lieu d'une chaîne. Cela est dû au fait que l'argument représente le nombre de pixels que vous voulez que la tortue déplace en dessinant. Une chaîne ne fonctionnerait évidemment pas pour ces méthodes !

{{% /notice %}}

Faisons avancer la tortue, donc tapez `turtle.forward(50)`. Maintenant, votre code devrait ressembler à ceci :

``` python
import turtle

turtle.color("orange")
turtle.forward(50)
```

Maintenant que nous avons complété notre code, appuyez sur **exécuter**. Vous devriez voir ceci sur l’écran de résultat :

Si oui, super! Sinon, demandez de l'aide.

En guise d'exercice, essayez de comprendre ce que fait la ligne de code suivante, et essayez de l'ajouter à votre code. Que fait-elle ?

``` python
turtle.shape("turtle")
```

{{% notice warning %}}

## À L’AIDE ! Rien ne s'affiche à l'écran !

Si, après avoir appuyé sur **exécuter**, vous ne voyez rien à l'écran, vérifiez s'il y a un **x rouge** à côté de l'onglet **console** (l’onglet **console** est juste à côté de l'onglet **résultat