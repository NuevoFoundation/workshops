---
title: "Structures de données (Tableau & ArrayList)"
description: "Introduction aux structures de données de base en Java."
date: 2021-10-13T00:00:00Z
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/x2hcvJjiH_g" title="Java arrays and ArrayLists video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Dans les exercices précédents, nous avons appris que les variables nous permettent d'accéder et de stocker une donnée. Mais, que faire si nous voulons stocker un ensemble de données similaires ? Existe-t-il un bon moyen de les organiser sans déclarer plusieurs variables ?

En programmation, les **structures de données** sont des éléments qui permettent aux programmeurs de stocker plusieurs données du même type. Utiliser des structures de données est une façon efficace de stocker et d'accéder à de grands ensembles de données. Dans cet exercice, nous allons explorer 2 structures de données utilisées en Java : **tableau** et **ArrayList**.

Alors qu'un tableau est une structure de données de longueur fixe, une ArrayList est de longueur variable, ce qui signifie que vous pouvez en modifier la taille. Commençons par examiner les tableaux !

## Tableau (Array)

Imaginons que nous souhaitons stocker les 5 films préférés de Patrick 🐥. Au lieu de créer 5 variables, nous pouvons stocker ces 5 données dans un tableau, notre première structure de données !

Pour stocker des données dans un tableau, nous procédons comme suit :

1. Nous déclarons d'abord un tableau en spécifiant un type de données et une taille (nombre de données pouvant être stockées).

```java
String topMovies[] = new String[5]; // créer un tableau de chaînes de caractères de taille 5.
```

2. Nous parcourons le tableau (parcourons tous les emplacements de données) et assignons les données à un emplacement dans le tableau.

Notez que nous accédons au tableau avec son nom et un index (`0` pour accéder au 1er élément, `1` pour le 2ème ...).
```java
topMovies[0] = "Birds Of Prey";
topMovies[1] = "The Birds";
topMovies[2] = "Angry Birds";
topMovies[3] = "Bird Box";
topMovies[4] = "The Secret Life of Pets";
// le tableau topMovies stocke maintenant "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" dans cet ordre
```
{{% notice info %}}
### Pourquoi l'index des tableaux en Java commence-t-il à 0 ?

Il est tentant et raisonnable de penser que pour accéder au premier élément d'un tableau, nous devrions commencer à l'index 1.

Cependant, lorsque l'ordinateur lit le code `arr[1]`, il ne pense pas obtenir le `1er` élément de `arr`.

En réalité, il lit `arr[1]` comme s'il devait obtenir l'élément situé à une distance de `1` de l'origine du tableau.

En d'autres termes, l'index est en fait un décalage de mémoire. Pour accéder au 1er élément, nous devons obtenir celui situé à un décalage de `0` par rapport au début du tableau (c.-à-d. `arr[0]`).
{{% /notice %}}

{{% notice tip %}}
### Une autre façon de créer un tableau :
Si nous connaissons à l'avance toutes les données du tableau, nous pouvons le créer en une ligne en listant toutes les données entre `{` et `}`.

Par exemple :

```java
String topMovies[] = {"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"};
```

Tout comme nous initialisons des données à l'aide de leur index, nous pouvons également accéder/modifier chaque donnée avec son index.

Par exemple :

```java
String movie1 = topMovies[0]; // movie1 a pour valeur "Birds Of Prey"
```

{{% /notice %}}

Il est souvent utile de savoir combien d'éléments contient un tableau après l'avoir créé (par exemple, pour accéder au dernier élément du tableau). Nous pouvons obtenir le nombre d'éléments d'un tableau grâce au champ `length` du tableau, en tapant `array_name.length`.

Par exemple :

```java
int numOfMovie = topMovies.length; // numOfMovie a pour valeur 5
```

<br/>

### Exercice : Écrivez une méthode `printArr()` qui prend en entrée un tableau et affiche tous les éléments dans l'ordre 
(Indice : utilisez une boucle for et `.length` pour vous aider).

Après avoir cliqué sur « Run », le programme devrait afficher ce qui suit :

```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsArray" target="_blank">Lancer Replit</a>

## ArrayList

ArrayList est une autre structure de données populaire en Java. `ArrayList` est une classe implémentée en utilisant des tableaux. Elle est similaire à un tableau dans le sens où les utilisateurs accèdent, stockent et modifient des données via un index.

Vous créez une ArrayList en spécifiant un nom et le type entre `<` et `>`.
Par exemple :

```java
ArrayList<String> topMoviesList = new ArrayList<String>();
```

Pour ajouter des éléments, nous appelons la méthode `add()` sur l'ArrayList.
Par exemple :

```java
topMoviesList.add("Birds Of Prey");
topMoviesList.add("The Birds");
topMoviesList.add("Angry Birds");
topMoviesList.add("Bird Box");
topMoviesList.add("The Secret Life of Pets");
// l'ArrayList stocke désormais "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" dans cet ordre
```

Pour accéder à un élément à un index particulier, nous appelons la méthode `get()`. Notez que Java utilise un index basé sur `0`, donc pour obtenir le premier élément dans une ArrayList, nous appelons la méthode `get(0)`. 
Par exemple :

```java
String movie1 = topMoviesList.get(0); // movie1 a pour valeur "Birds Of Prey"
```

Et, pour obtenir le nombre d'éléments dans l'ArrayList, nous appelons la méthode `size()`.
Par exemple :

```java
int numOfMovie2 = topMoviesList.size(); // numOfMovie2 a pour valeur 5
```

<br/>

Comme mentionné brièvement ci-dessus, la différence critique entre un tableau et une