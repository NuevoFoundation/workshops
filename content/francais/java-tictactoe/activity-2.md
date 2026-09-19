---
title: "2. Lire et Traiter les Entrées"
description: "Lecture des entrées avec la classe Scanner et gestion des cas d'erreur"
date: 2021-10-14T00:00:00Z
prereq: "Configurer le Plateau!"
difficulties: ["intermédiaire"]
weight: 3
draft: false
---

## Importation des Packages

En Java, une manière efficace d'obtenir des entrées utilisateur est d'utiliser la classe `Scanner` dans le package `java.util`. Pour utiliser cette classe et toutes ses méthodes, nous devons `importer` la classe avec la ligne de code suivante au début du fichier.

```java
import java.util.Scanner;
```

## Utilisation de la Classe Scanner

Dans la méthode `main()`, nous devons d'abord créer un objet `Scanner` appelé `sc` en appelant son constructeur (montré ci-dessous).

Nous voulons que le `Scanner` lise notre entrée depuis le flux d'entrée standard. Pour cela, nous devons passer `System.in` (l'objet flux d'entrée standard).

```java
// Créer un objet Scanner
Scanner sc = new Scanner(System.in);
```

## Obtenir les Entrées Utilisateur

Dans l'activité précédente, nous invitons l'utilisateur à entrer des nombres entre 1 et 9. Ainsi, nous attendons un entier (`int`) du flux d'entrée.

Pour obtenir l'`int` stocké par l'objet `Scanner`, nous appelons la méthode `nextInt()` sur `sc`, l'objet `Scanner`.

```java
int input = sc.nextInt();
```

## Tester Votre Programme (optionnel)

Pour tester votre programme, ajoutez une instruction d'impression pour afficher la valeur que vous avez stockée à partir de `nextInt()`.

Essayez d'exécuter votre programme, saisissez quelques chiffres et appuyez sur `Entrée`. Vous devriez voir votre nombre s'afficher correctement. Par exemple :

```
<<<~  Tic  Tac  Toe  ~>>>
* Choisissez un numéro entre 1 et 9 pour placer votre coup
* Joueur: 'X' Ordinateur: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Entrez votre coup (1-9): 2                 <------- le numéro que vous avez saisi
Numéro Entré : 2                          <------- L'instruction d'impression affiche le numéro saisi correctement
```

{{% notice warning %}}
#### Que se passe-t-il si un utilisateur écrit quelque chose qui n'est pas un nombre ?

Lors de l'écriture de programmes, nous ne pouvons jamais supposer que les utilisateurs fourniront les valeurs correctes, même si le prompt les leur indique clairement.

Étant donné que notre programme n'accepte qu'une entrée de type `int`, le programme plantera si vous entrez autre chose qu'un entier, comme : `hi`, `$`, `20.1`. Le message d'erreur suivant s'affichera alors :

```
Exception in thread "main" java.util.InputMismatchException      <------ indique le type d'erreur
    at java.base/java.util.Scanner.throwFor(Scanner.java:939)
    at java.base/java.util.Scanner.next(Scanner.java:1594)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2258)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2212)
    at Main.main(Main.java:15)                                   <------ indique la ligne du code causant l'erreur (ligne 15 dans Main.java)
```

Notez également que les numéros saisis qui ne sont pas compris entre 1 et 9 ne feront pas planter le programme, mais ce ne sont pas des entrées valides que nous souhaitons accepter.
{{% /notice %}}

## Gérer les Entrées Non Valides avec Scanner

La classe Scanner fournit des méthodes pour vérifier si les entrées utilisateur sont valides ou non. Par exemple, la méthode `hasNextInt` permet de vérifier si la valeur saisie par l'utilisateur est un entier et renvoie `true` ou `false`. Cette méthode peut être utilisée pour valider les entrées utilisateur.

Utilisez des structures de contrôle pour valider les entrées utilisateur. Si l'entrée n'est pas valide, demandez une entrée valide à nouveau.

```java
if(sc.hasNextInt()) { // un entier a-t-il été saisi ?
	move = sc.nextInt(); // obtenir l'entrée entière
   if (!(move > 0 && move <= 9)) { // l'entier est-il compris entre 1 et 9 ?
		System.out.print("Position invalide ; entrez à nouveau votre coup (1-9) : ");
   }
} else { // si un entier n'a pas été saisi
   sc.next(); // vider le Scanner
	System.out.print("Entrée invalide ; entrez à nouveau votre coup (1-9) : ");
}
```

## Tester Votre Programme (optionnel)

Testez votre programme en cliquant sur `Exécuter`. Vous devriez voir le message `Position invalide ; entrez à nouveau votre coup (1-9) :` si vous avez entré une valeur non numérique ou un nombre ne faisant pas partie de l'intervalle 1-9.

## Prendre des Entrées Multiples

Maintenant que nous avons un programme qui prend une entrée unique et vérifie sa validité, nous voulons demander au joueur de rejouer jusqu'à la fin de la partie.

Pour continuer à inviter l'utilisateur à entrer son prochain coup, nous pouvons placer le bloc de code `hasNextInt` dans une boucle `while`. Cette boucle `while` prend comme argument `true`, ce qui signifie que le programme continuera à boucler jusqu'à ce qu'il soit explicitement arrêté.

Notez que nous appelons `printBoard(board)` et invitons l'utilisateur à la fin de chaque itération, comme indiqué ci-dessous :

```java
while(true){
    // insérer la condition if avec hasNextInt() ici

   // déplacer ces lignes dans la condition if avec hasNextInt() 
    printBoard(board);
    System.out.print("Entrez votre coup (1-9) : "); 
}
```

## Gérer les Entrées Non Valides

Lorsque l'utilisateur entre une entrée non valide, nous ne voulons pas que le programme appelle `printBoard(board)` et affiche `Entrez votre coup (1-9):`.

En d'autres termes, nous voulons que le programme passe simplement à l'itération suivante de la boucle `while`.

Nous ajoutons donc `continue;` dans le code pour indiquer à l'ordinateur de revenir en haut de la boucle `while` et de l'exécuter à nouveau.

À la fin de cet exercice, vous devriez avoir un programme qui invite à saisir une nouvelle entrée pour toute entrée invalide et affiche un plateau vide avec le prompt `Entrez votre coup (1-9):` pour toute entrée valide !

```
<<<~  Tic  Tac  Toe  ~>>>
* Choisissez un numéro entre 1 et 9 pour placer votre coup
*