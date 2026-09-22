---
title: "Opérations"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

Les tableaux 2D fonctionnent de manière très similaire aux tableaux classiques, et de nombreuses idées ou méthodes que nous utilisons avec les tableaux s'appliquent également aux tableaux multidimensionnels. Pour rappel, voici comment initialiser un tableau 2D et accéder à un élément :

```js javascript
public static void main(String[] args) { 
    int[][] arr = new int[10][20]; 
    arr[0][0] = 1; 
    System.out.println(arr[0][0]); 
} 
    // Affiche 1
```

La partie qui peut sembler difficile au premier abord est l'itération à travers un tableau 2D, mais cela reste assez simple. Au lieu d'une boucle `for` unique, nous allons utiliser deux boucles `for`. Voici un exemple rapide pour vous donner une idée. 

```js javascript
public static void main(String[] args) { 
    int[][] arr = new int[10][20]; 
    int num = 0;

    // Parcourir le tableau de tableaux
    for (int i = 0; i < arr.length; i++) {

        // Parcourir un tableau individuel au sein du tableau 2D
        for (int j = 0; j < arr[i].length; j++) {

            // Accéder aux valeurs individuelles
            arr[i][j] = num;
            num++;
        }
    }
} 
```

Comme vous pouvez le voir, nous créons un tableau vide appelé `arr`. Dans ce tableau, nous avons `10` tableaux, chacun contenant respectivement `20` éléments. Pour parcourir tous les tableaux, nous utilisons une boucle `for` standard, comme nous le ferions avec un tableau normal. Cependant, la seule différence ici est que nous devons maintenant créer une seconde boucle `for` pour parcourir le tableau `i`-ème. Dans cet exemple, nous nous contentons de définir `arr[i][j]` sur `num` et d'incrémenter `num`.