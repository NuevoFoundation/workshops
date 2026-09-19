```markdown
---
title: "Placeholder"
date: 2020-07-23T00:00:00Z
weight: 15
draft: true
hidden: true
---

## Lire et Traiter les Entrées

En Java, une manière efficace d'obtenir les entrées utilisateur est d'utiliser la classe `Scanner` dans le package `java.util`. Pour utiliser cette classe et toutes ses méthodes, nous devons l'`importer` avec la ligne de code suivante en haut du fichier.

```java
import java.util.Scanner;
```

## Gestion des Erreurs

En Java, nous pouvons gérer les erreurs potentielles en plaçant le code susceptible de causer une erreur dans un bloc `try-catch`.

Dans le bloc `try`, nous mettons le morceau de code susceptible de provoquer une erreur.

Dans le bloc `catch`, nous donnons des instructions sur ce qu'il faut faire en cas d'erreur lors de l'exécution du bloc `try`. De cette manière, nous pouvons empêcher le programme de se planter.  
Par exemple :

```java
try{
   //  Bloc de code à essayer
} catch(Exception e){
   //  Bloc de code pour gérer les erreurs
}
```

   Exécutez votre programme et tapez des entrées non numériques. Votre programme ne devrait plus échouer maintenant !

## Le Bloc Try

Dans le bloc `try`, nous obtenons des entrées numériques de l'utilisateur. Cependant, toutes les entrées ne sont pas valides, car nous ne devrions accepter que les cases disponibles sur le plateau.

Utilisez une ou plusieurs instructions `if` pour vérifier si l'entrée numérique est valide. (Astuce : accédez au tableau `board` pour vérifier si l'entrée est valide).

Si ce n'est pas le cas, affichez le message `Invalid Position; re-enter your move (1-9):`.

{{% notice hint %}}
#### Comment vérifier si deux chaînes de caractères sont identiques ?

Pour vérifier si deux chaînes contiennent le même contenu, nous utilisons la méthode `equals()`. Par exemple :

```java
String s1 = "hi";
boolean b1 = s1.equals("hi"); // ceci est vrai
boolean b2 = s1.equals("HI"); // ceci est faux
```

{{% /notice %}}

## Le Bloc Catch

Dans le bloc `catch`, nous savons que le joueur entre une entrée non numérique. Tout d'abord, nous devons ignorer cette entrée invalide en la supprimant à l'aide de la méthode `next()` sur l'objet `Scanner` que nous avons créé. Ensuite, nous devrions également afficher le message pour informer le joueur de saisir à nouveau un coup `Invalid Position; re-enter your move (1-9):`.

## (optionnel) Tester Votre Programme

Testez votre programme en cliquant sur `Run`. Vous devriez voir le message `Invalid Position; re-enter your move (1-9):` si vous entrez une entrée non numérique ou un numéro qui n'est pas compris entre 1 et 9.

## Entrées Multiples

Maintenant que nous avons un programme qui prend une entrée et évalue si elle est valide, nous voulons demander au joueur de recommencer jusqu'à la fin du jeu.

Pour continuer à demander à l'utilisateur d'entrer son prochain coup, nous plaçons tout le bloc `try-catch` dans une boucle `while`. Cette boucle `while` contient comme argument `true`, ce qui signifie que le programme continuera à boucler jusqu'à ce qu'on lui demande de s'arrêter.

Notez que nous appelons `printBoard(board)` et demandons à l'utilisateur à la fin de chaque itération, comme montré ci-dessous :

```java
while(true){
    // insérez le bloc try-catch ici

    printBoard(board);
    System.out.print("Enter your move (1-9): "); 
}
```

## Gestion des Entrées Invalides

Lorsqu'un utilisateur entre une entrée invalide, nous ne voulons pas que le programme appelle `printBoard(board)` et affiche `Enter your move (1-9):`.

En d'autres termes, nous voulons que le programme passe directement à la prochaine itération de la boucle `while`.

Nous ajoutons `continue;` dans le code pour indiquer à l'ordinateur de revenir au début de la boucle `while` et de recommencer l'exécution.

À la fin de cet exercice, vous devriez avoir un programme qui vous demande de ressaisir une entrée non valide et qui affiche un plateau vide avec le message `Enter your move (1-9): ` pour toute entrée valide !

```
<<<~  Tic  Tac  Toe  ~>>>
* Choisissez un numéro entre 1 et 9 pour placer votre coup
* Joueur : 'X' Ordinateur : 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Enter your move (1-9): 1
   |   |   
---+---+---
   |   |                                    <--------------- Le plateau n'affiche pas les coups du joueur/ordinateur
---+---+---
   |   |   
Enter your move (1-9): d
Invalid Input; re-enter your move (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- Le plateau n'affiche pas les coups du joueur/ordinateur
---+---+---
   |   |   
Enter your move (1-9): 
```

Continuons dans cet atelier pour voir comment nous devrions mettre à jour notre plateau de jeu !
```