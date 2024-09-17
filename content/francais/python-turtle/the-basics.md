---
title: "Les bases - Dessiner une ligne colorée"
date: 2024-09-17T13:24:17-07:00
weight: 2
draft: false
---

Avant qu'Alex ne puisse apprendre à créer une ruche, il doit d'abord apprendre à dessiner une ligne colorée. Nous ajouterons du code à la fenêtre Trinket ci-dessous, et nous le ferons en deux parties.

Tout d'abord, nous devons dire à la tortue quelle couleur nous voulons que la ligne soit. Pour cela, tapons :

``` python
turtle.color("orange")
```

Essayons de comprendre cette ligne de code plus en détail.

{{% notice tip %}}

## Chaînes de caractères

Tout ce que vous voyez entre **guillemets** s'appelle une **chaîne de caractères**. Une chaîne est simplement une séquence de caractères (qu'il s'agisse de lettres, de chiffres ou de symboles).

Dans le code ci-dessus, `"orange"` est une chaîne de caractères. D'autres exemples de chaînes incluent `"123"`, `"abc!"` et `"green"`. Attention, `123`, `abc!` et `green` ne sont pas des chaînes car il manque des guillemets !

## Méthodes

`turtle.color()` est une **méthode.** Nous utilisons des méthodes pour que la tortue effectue certaines actions. Dans ce cas, `turtle.color()` change la couleur des lignes qu'elle dessine selon la couleur que nous lui indiquons. Nous lui avons dit de changer la couleur en orange en lui envoyant la **chaîne** `"orange"` comme **argument**. 

## Arguments

Les arguments sont des entrées que vous passez aux **méthodes** pour utiliser. Dans notre exemple, `turtle.color()` a besoin d'un argument de type **chaîne** représentant le nom de la couleur à définir pour la tortue, donc nous avons passé `"orange"` comme **argument** à la méthode. Nous aurions aussi pu lui dire de changer la couleur en quelque chose d'autre, mais il fallait que ce soit une couleur que `turtle.color()` comprend. Les couleurs qu'il reconnaît sont : `"red"`, `"orange"`, `"yellow"`, `"green"`, `"blue"`, `"purple"`, `"black"`, `"pink"`, et `"gray"`. Si nous envoyons autre chose qu'une de ces chaînes de couleurs, nous obtenons la couleur par défaut, qui est le noir.

{{% /notice %}}

Maintenant que nous avons choisi la couleur que nous voulons, nous pouvons maintenant dessiner une ligne ! Pour dessiner une ligne, il y a deux **méthodes** que nous pouvons utiliser :

``` python
turtle.forward(50)
turtle.backward(50)
```

`turtle.forward(50)` fera avancer la tortue de 50 pixels et dessinera une ligne dans la direction où elle est orientée, tandis que `turtle.backward(50)` fera la même chose, mais dans la direction opposée.

{{% notice tip %}}

## Pixels

Une image est composée de milliers, voire de millions de pixels. Un pixel est une unité de mesure pour les images numériques, similaire à la façon dont nous mesurons le poids en livres, ou les longues distances en miles.

## Entiers

Un entier est simplement n'importe quel nombre entier, qu'il soit positif ou négatif. Dans cet exemple, `turtle.forward()` et `turtle.backward()` attendent tous deux un **entier** comme argument plutôt qu'une chaîne. C'est parce que l'argument représente le nombre de pixels que vous voulez que la tortue se déplace lors du dessin. Une chaîne ne fonctionnerait évidemment pas pour ces méthodes !

{{% /notice %}}

Faisons avancer la tortue, donc tapez `turtle.forward(50)`. Maintenant, votre code devrait ressembler à ceci :

``` python
import turtle

turtle.color("orange")
turtle.forward(50)
```

Maintenant que nous avons terminé notre code, appuyez sur **run**. Vous devriez voir ceci dans l'écran de résultat :

Si oui, super ! Sinon, demandez de l'aide.

Comme exercice, essayez de comprendre ce que la ligne de code suivante fait, et essayez de l'ajouter à votre code. Que fait-elle ?

``` python
turtle.shape("turtle")
```

{{% notice warning %}}

## AIDE ! Rien ne s'affiche à l'écran !

Si, après avoir appuyé sur **run**, vous ne voyez rien à l'écran, vérifiez s'il y a une **croix rouge** à côté de l'onglet **console** (l'onglet **console** est juste à côté de l'onglet **result** au milieu