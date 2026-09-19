```yaml
---
title: "5. (Optionnel) Coup de l'IA"
description: "Utiliser l'algorithme Minimax pour choisir le coup de l'ordinateur"
date: 2021-10-14T00:00:00Z
weight: 6
prereq: "Configurer le plateau !, Lire et traiter les entrées, Mettre à jour le plateau de jeu, Vérifier le gagnant"
difficulties: ["avancé"]
---
```

### Faisons réfléchir l'ordinateur

Auparavant, nous avons utilisé un objet `Random` pour générer aléatoirement un coup pour l'ordinateur. En conséquence, la compétitivité de l'ordinateur était relativement faible.

Dans cet exercice, nous souhaitons augmenter la difficulté du jeu en prenant des décisions optimales pour l'ordinateur.

Nous allons le faire en ajoutant de l'intelligence artificielle dans notre programme avec l'utilisation de l'algorithme **Minimax** (une procédure bien définie qui permet aux ordinateurs de résoudre des problèmes).

### Algorithme Minimax

Minimax est un algorithme utilisé dans les jeux à deux joueurs pour prendre des décisions optimales pour un joueur.

- Les deux joueurs sont respectivement appelés <b>maximiseur</b> et <b>minimiseur</b>. Alors que le maximiseur maximise ses chances de gagner, le minimiseur cherche à minimiser ses pertes.
- L'algorithme examine tous les états futurs possibles du jeu en fonction du plateau actuel en supposant que le maximiseur et le minimiseur choisiront les coups qui leur sont le plus avantageux.
- Dans notre cas, nous choisissons que l'ordinateur soit le maximiseur et que le joueur soit le minimiseur. Nous tenterons de prendre des décisions optimales pour l'ordinateur afin de maximiser ses chances de gagner !

### Comment fonctionne l'algorithme Minimax dans TicTacToe ?

- Nous examinons tous les coups possibles de `"X"` et `"O"` et attribuons un score au plateau si une victoire ou un match nul est détecté.
- Puisque nous voulons que l'ordinateur gagne en un minimum d'étapes, nous concevons le score pour les plateaux de jeu comme suit :

- Si l'ordinateur gagne, calculer le score avec la formule `1 * (nombre de cases disponibles sur le plateau + 1)`.
- Si le joueur gagne, calculer le score avec la formule `-1 * (nombre de cases disponibles sur le plateau + 1)`.
- S'il y a un match nul, le score est `0`.
- En donnant des scores plus importants aux états de jeu où l'ordinateur peut gagner avec moins d'étapes, nous apprenons à notre code à choisir le coup optimal pour l'ordinateur.

Regardons un exemple ci-dessous :

<img src="../images/minimax.png" height="500" alt="exemple des options possibles pour gagner au tic-tac-toe telles que décrites dans le texte ci-dessus." /> 

1. Dans la première ligne, nous avons considéré les 3 coups possibles pour l'ordinateur `"O"`, qui est le maximiseur.
2. Nous examinons tous les états du jeu jusqu'à ce que tous les coups aboutissent à une victoire de l'ordinateur, une victoire du joueur ou un match nul. Nous leur attribuons ensuite leur score correspondant.

    Par exemple, dans le deuxième plateau de la ligne 1, l'ordinateur gagne en plaçant `"O"` à la position 8. Cet état se voit attribuer un score de `1 * (nombre de cases disponibles sur le plateau + 1)` = `1 * (2+1)` = `3`.

3. Aux états du jeu qui n'ont pas de gagnant ni de match nul, nous choisissons le score le plus bas pendant les tours de minimisation (lorsque `"X"` joue un coup) et le score le plus élevé pendant les tours de maximisation (lorsque `"O"` joue un coup).
4. Si vous suivez les tours de maximisation/minimisation sur l'image ci-dessus, vous remarquerez que le coup optimal pour l'ordinateur est de placer `"O"` à la position 8, permettant ainsi à l'ordinateur de gagner en un seul coup depuis le plateau de départ.

### Structure du Code

Dans l'activité-3, vous avez écrit la méthode `int getComputerMove(String[] curBoard)` pour générer aléatoirement une position pour l'ordinateur. Écrivons une autre méthode appelée `getComputerMoveAI(String[] curBoard)` qui retourne le coup optimal pour l'ordinateur en appelant la méthode `int minimax(String[] curBoard, boolean isMaximizing)`.

```java
int getComputerMove(String[] curBoard){
    // 1. cette méthode appelle minimax() sur tous les coups possibles que l'ordinateur peut choisir
    // 2. elle prend le maximum parmi tous ces coups
    // 3. retourne le coup optimal
}
int minimax(String[] curBoard, boolean isMaximizing){
    // 1. Lors du tour de maximisation, elle appelle minimax() sur tous les coups possibles pour l'ordinateur, "O", retourne le score maximum
    // 2. Lors du tour de minimisation, elle appelle minimax() sur tous les coups possibles pour le joueur, "X", retourne le score minimum
}
```

{{% notice note %}}

- La méthode `minimax()` est une fonction <b>récursive</b>, ce qui signifie que la fonction s'appelle elle-même à l'intérieur de sa propre implémentation.
- Dans notre méthode, `minimax()` s'appelle avec différents plateaux possibles en plaçant `"X"` ou `"O"` à chaque case disponible. Et, la méthode choisit soit le score maximum, soit le score minimum en fonction de si c'est un tour de maximisation ou non.

{{% /notice %}}

### Écrire la Méthode `getComputerMoveAI()`

1. Pour chaque case disponible sur le plateau de jeu, placez `"O"` à cette position et obtenez le score pour ce plateau en appelant `minimax()`.

{{% notice hint %}}

- Notez que vous devriez passer `false` comme second argument, puisque ce serait le tour du minimiseur.
- Vous devriez remettre cette case à `" "` après avoir obtenu le score, afin de maintenir l'état original du plateau de jeu pour l'itération suivante.
{{% /notice %}}

2. Suivez le plus grand score et sa position correspondante sur le plateau à chaque itération. Retournez la position avec le plus grand score.

{{% notice hint %}}

- Ayez une variable appelée `bestScore` qui stocke le meilleur score actuel et qui a une valeur initiale de `Integer.MIN_VALUE` (valeur minimale d'un entier).
- C'est une manière utile de trouver la valeur maximale dans une structure de données. 
Par exemple :

```java
public int getLargestNum() {
    // le code suivant trouve la valeur maximale dans le tableau "nums"
    int[] nums = {3, 5, -2, 