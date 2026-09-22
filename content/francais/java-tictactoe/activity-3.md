```markdown
---
title: "3. Mise à jour du plateau de jeu"
description: "Apprenez à générer un mouvement pour l'ordinateur et à mettre à jour le plateau"
date: 2021-10-14T00:00:00Z
prereq: "Configurer le plateau!, Lire et traiter les entrées"
difficulties: ["intermédiaire"]
weight: 4
---

Dans l'exercice précédent, nous avons créé un programme qui affiche le plateau et demande `Entrez votre coup (1-9):` à l'utilisateur à chaque mouvement valide. Cependant, le plateau est resté vide (illustré ci-dessous). Dans cet exercice, nous apprendrons comment mettre à jour le plateau et générer un mouvement aléatoire pour l'ordinateur.

```
<<<~  Tic  Tac  Toe  ~>>>
* Choisissez un numéro entre 1 et 9 pour placer votre coup
* Joueur : 'X' Ordinateur : 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Entrez votre coup (1-9): 1
   |   |   
---+---+---
   |   |                                    <--------------- Le plateau n'affiche pas les coups du joueur/ordinateur
---+---+---
   |   |   
Entrez votre coup (1-9): d
Entrée invalide ; veuillez réessayer (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- Le plateau n'affiche pas les coups du joueur/ordinateur
---+---+---
   |   |   
Entrez votre coup (1-9): 
```

## Afficher les coups du joueur

À l'intérieur de l'instruction `if` utilisant `hasNextInt()`, avant l'appel de méthode `printBoard(board)`, mettez à jour le tableau `board` avec l'entrée de l'utilisateur à l'index correspondant.

Notez que le joueur est représenté par `"X"` sur le plateau de jeu.

{{% notice tip %}}
### Rappels

- Java utilise un indexage à partir de 0, et le joueur a été invité à entrer un numéro de 1 à 9.
- Pour accéder à un élément d'un tableau, vous utilisez la notation par index : `myVariable[indexNumber]`.
{{% /notice %}}

## Configurer les coups de l'ordinateur

Créez une nouvelle méthode `getComputerMove(String[] curBoard)` qui génère un coup valide pour l'ordinateur (entre 1 et 9) en utilisant comme entrée le plateau actuel du jeu.

Suivez les étapes suivantes pour implémenter la méthode.

## Implémentation du mouvement de l'ordinateur

Dans `getComputerMove()`, nous générerons aléatoirement un numéro entre 1 et 9 pour l'ordinateur.

Nous ferons cela avec l'aide de la classe `Random`, qui est fréquemment utilisée en Java pour générer des nombres aléatoires.

Pour utiliser cette classe et toutes ses méthodes, nous devons l'importer avec la ligne de code suivante en haut du fichier :

```java
import java.util.Random;
```

Créez un objet `Random` en appelant le constructeur `Random()`.

```java
Random rand = new Random();
```

## Générer des nombres aléatoires

Appelez la méthode `int nextInt(int num)` sur l'objet `Random` que vous avez créé pour générer aléatoirement un numéro entre 1 et 9.

Un appel de méthode à `int nextInt(int num)` retournera un nombre aléatoire compris entre 0 et `num-1`.

```java
int position = rand.nextInt(9);
```

## Vérification d'un coup valide

Après avoir généré un nombre aléatoire entre 1 et 9, nous devons vérifier si la position est disponible.

Utilisez une boucle `while` pour générer un coup valide pour l'ordinateur, si le numéro généré précédemment correspond à une position déjà prise.

Retournez le numéro une fois que nous avons trouvé un coup valide pour l'ordinateur.

```java
while (!curBoard[position].equals(" ")){
   position = rand.nextInt(9);
}
return position;
```

## Mettre à jour le tableau de plateau

Tout comme lors de la première étape, nous devrions mettre à jour le tableau `board` pour l'ordinateur avant d'appeler la méthode `printBoard(board)`.

Générez un coup aléatoire en appelant `getComputerMove()` !

Notez que l'ordinateur est représenté par `"O"` sur le plateau de jeu.

```java
board[getComputerMove(board)] = "O"; // getComputerMove retourne l'entier 0-8 représentant la position correcte dans le tableau
printBoard(board);
```

## Exécutez le programme

`Exécutez` le programme maintenant ! Le plateau devrait mettre à jour correctement les coups du joueur et de l'ordinateur à chaque entrée, comme illustré ci-dessous :

```
<<<~  Tic  Tac  Toe  ~>>>
* Choisissez un numéro entre 1 et 9 pour placer votre coup
* Joueur : 'X' Ordinateur : 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Entrez votre coup (1-9): 1
 X |   |   
---+---+---
   |   |   
---+---+---
   | O |   
Entrez votre coup (1-9): 1
Position invalide ; veuillez réessayer (1-9): 2
 X | X |   
---+---+---
   |   | O 
---+---+---
   | O |   
Entrez votre coup (1-9): 
```

Tout semble bien fonctionner ! Il ne nous reste qu'à déterminer qui est le gagnant ou le perdant du jeu, ce que nous allons implémenter dans le prochain exercice !
```