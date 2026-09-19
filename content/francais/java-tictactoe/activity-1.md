```markdown
---
title: "1. Configurez le plateau !"
description: "Utilisation des instructions print pour afficher les règles du jeu et le plateau"
date: 2021-10-14T00:00:00Z
weight: 2
---

Dans cette activité, nous allons créer un programme qui affiche le plateau de jeu et une invite de commande, comme le résultat ci-dessous :

```
<<<~  Tic  Tac  Toe  ~>>>
* Choisissez un numéro entre 1 et 9 pour placer votre coup
* Joueur : 'X' Ordinateur : 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Entrez votre coup (1-9): 2
 O | X |   
---+---+---
   |   |   
---+---+---
   |   |   
Entrez votre coup (1-9): 
```

## La classe principale et la méthode principale

Remarquez que dans le code de départ, nous avons la classe `Main` et la méthode `main()`. La méthode `main()` est le point de départ du programme chaque fois que nous cliquons sur le bouton `Run`.

```java
public class Main {
  public static void main(String[] args) {
  }
}
```

## Instructions print

Dans `main()`, écrivez une ou plusieurs instructions print pour afficher le message de bienvenue et les règles du jeu !

```
<<<~  Tic  Tac  Toe  ~>>>
* Choisissez un numéro entre 1 et 9 pour placer votre coup
* Joueur : 'X' Ordinateur : 'O'
```

## Variables et tableaux

Dans ce jeu, notez que nous devrons suivre le symbole actuellement présent dans chacune des 9 positions sur le plateau.

   Par conséquent, nous devrons stocker 9 éléments de données dans le programme. Utilisons un `tableau` (une structure de données) de taille 9 pour les stocker.

   Comme indiqué dans les règles, sur le plateau de jeu, `"X"` représente le coup du joueur, `"O"` le coup de l'ordinateur et `" "` une case disponible.

   Pour cela, déclarons un tableau `variable` appelé `board` avec la valeur `" "` (chaînes de caractères) dans toutes les 9 positions (c'est-à-dire `{" ", " ", " ", " ", " ", " ", " ", " ", " "}`).

## Affichage du plateau

Maintenant que nous avons la variable `board` qui stocke les symboles actuels du plateau de jeu, essayons d'imprimer un plateau de jeu vide à l'aide d'instructions print (comme illustré ci-dessous).

Notez que chaque plateau de jeu se compose de 5 lignes, il est donc raisonnable d'avoir 5 instructions print pour afficher chaque ligne du plateau.

Chacun des 9 blocs est une `chaîne de caractères` de longueur 3, où le caractère central est le symbole actuel stocké dans `board` à la position correspondante.

Vous devriez obtenir un programme qui produit le résultat ci-dessous après avoir terminé cette étape.

```
<<<~  Tic  Tac  Toe  ~>>>
* Choisissez un numéro entre 1 et 9 pour placer votre coup
* Joueur : 'X' Ordinateur : 'O'

   |   |  
---+---+---
   |   |  
---+---+---
   |   | 
```

## Méthodes

Comme nous savons que nous devrons afficher le plateau de jeu actuel plusieurs fois au cours du jeu, il serait judicieux de déplacer le bloc de code que vous avez écrit à l'étape 4 dans une méthode.

Cette méthode devrait prendre un `tableau de chaînes de caractères` en entrée et afficher le plateau actuel. Notez que cette méthode devrait être écrite en dehors de `main()`.

Écrivons une méthode avec l'en-tête suivant :

```java
public static void printBoard(String[] curBoard);
```

## Appel de méthodes

Dans `main()`, appelez la méthode `printBoard()` pour afficher le plateau initial avec les positions numérotées. Vous pouvez le faire en créant un autre `tableau de chaînes de caractères` avec le contenu `"1", "2", ..., "9"`.

Ajoutez une ligne de code qui affiche `Entrez votre coup (1-9): `

```
<<<~  Tic  Tac  Toe  ~>>>
* Choisissez un numéro entre 1 et 9 pour placer votre coup
* Joueur : 'X' Ordinateur : 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Entrez votre coup (1-9): 
```

## Exécutez le programme

Exécutez votre programme, s'il affiche le texte ci-dessus, vous êtes prêt à continuer 👍 !
```