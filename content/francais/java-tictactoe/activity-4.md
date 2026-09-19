```markdown
---
title: "4. Vérifiez le gagnant"
description: "écrire une méthode pour vérifier le gagnant avec un tableau en entrée"
date: 2021-10-14T00:00:00Z
prereq: "Configurer le plateau!, Lire et traiter l'entrée, Mettre à jour le plateau de jeu"
difficulties: ["intermédiaire"]
weight: 5
---

## Afficher un gagnant

Écrivez une méthode `getWinner(String[] curBoard)` qui renvoie le gagnant dans une `String` avec un tableau `array` comme entrée du plateau de jeu actuel.

- Si le joueur gagne, retournez `"Félicitations ! \nVous avez gagné la partie :)"`.
- Si l'ordinateur gagne, retournez `"Fin de jeu ! \nVous avez perdu la partie :("`.
- S'il y a égalité, retournez `"C'est une ÉGALITÉ ! Essayez encore"`.
- S'il n'y a pas encore de gagnant, retournez `""`.

Il existe plusieurs façons d'écrire cette méthode.

Essayez-la d'abord dans le Replit suivant ; il vous indiquera si votre méthode est correctement écrite !
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaTicTacToegetWinner" target="_blank">Lancer Replit</a>

{{% notice note %}}
#### Idées/Indices pour écrire la méthode `getWinner()`

- Concaténez les `Strings` aux 3 positions qui constituent une ligne horizontale, verticale ou diagonale.
- Utilisez `equals()` pour vérifier si chacune des chaînes concaténées est `"XXX"` ou `"OOO"` pour un gagnant. (Vous pouvez même créer une autre méthode qui vérifie si une chaîne d'entrée est `"XXX"` ou `"OOO"`)
- Si toutes les cases du tableau sont remplies (une `for loop` peut être utile) et qu'il n'y a pas de gagnant, le jeu se termine par une égalité.
{{% /notice %}}

## Appeler la méthode du gagnant

Dans `main()`, appelez la méthode `getWinner()` après la ligne de code où vous placez le coup du joueur, `"X"`.

Vérifiez si le jeu doit continuer (lorsqu'il n'y a pas de gagnant ou d'égalité).

S'il y a un gagnant ou une égalité, affichez le plateau final et le résultat du jeu ! Et, ajoutez la ligne de code `break;`, qui incite le programme à sortir de la boucle `while` !

## Répétez l'étape ci-dessus

Dans `main()`, répétez le code de l'étape précédente (vérifiez le gagnant et imprimez le résultat si nécessaire) après avoir placé le coup de l'ordinateur, `"O"`.

## Fermez l'objet Scanner

En dehors de la boucle `while`, ajoutez le code `sc.close()` pour fermer l'objet `Scanner` afin de ne plus lire de nouvelles entrées.

Il est conseillé de fermer l'objet `Scanner` si l'on ne prévoit pas de recevoir d'autres données après avoir utilisé `break` pour sortir de la boucle `while` !

## Tout est terminé :) !

Vous devriez maintenant avoir un jeu de Tic Tac Toe fonctionnel ! Vous pouvez être très fier de vous pour avoir terminé cet atelier ! Bravo 👍 !

##### En résumé, voici la structure de votre code :
<img src="../images/code.png" height="500" alt="Tic Tac Toe : Votre projet Java. void main(String args[]) qui lit les entrées du joueur, traite les entrées et invite chaque tour de jeu ou affiche le gagnant du jeu. void printBoard(String[] curBoard) est une méthode pour afficher le plateau de jeu. int getComputerMove(String[] curBoard) renvoie aléatoirement un coup disponible pour l'ordinateur. String getWinner(String[] curBoard) retourne le gagnant du jeu/l'ÉGALITÉ ou '' si le jeu doit continuer."/>
```