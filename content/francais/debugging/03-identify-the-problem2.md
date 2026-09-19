---
title: "Étape 1 - Identifier le problème (Partie 2)"
difficulties: ["intermédiaire"]
weight: 4
draft: false
---

## Erreurs d'exécution

Les erreurs de compilation sont une chose, mais les **bugs et erreurs d'exécution** en sont une autre. Alors que le compilateur peut facilement vous indiquer où chercher, les bugs d'exécution sont causés par la manière dont votre programme s'exécute. Nous devons comprendre ce que fait le programme lorsque le bug survient :
- Quelles variables sont utilisées ?
- Quelle instruction est appelée ?
- Y a-t-il une instruction manquante que nous avions besoin d'ajouter ?

Dans les applications plus petites, nous pouvons utiliser des **instructions d'impression** dans le code pour comprendre rapidement l'état d'exécution du programme. Les instructions d'impression permettent d'examiner un programme pendant son exécution de manière simple et directe. Avec un peu de chance, vous pourrez identifier ce qui cause le bug sans trop de difficultés.

## Recherche binaire

L'un des algorithmes les plus simples que vous apprendrez ou que vous avez appris est la **recherche binaire**, qui vous permet de rechercher un élément dans une liste triée en temps logarithmique. L'idée est d'examiner le milieu de la liste triée et de voir s'il correspond à l'élément que nous recherchons ; si nous trouvons l'élément, l'algorithme est terminé. Si l'élément recherché est plus grand, nous recherchons dans la moitié supérieure de la liste. Sinon, nous cherchons dans la moitié inférieure. Nous répétons ce processus jusqu'à trouver l'élément recherché.

|![Recherche du chiffre 7 dans une liste ordonnée de 10 nombres à l'aide de la recherche binaire](../resources/binary_search.svg "Un arbre montrant le processus de recherche pour trouver le chiffre 7 dans une liste ordonnée de nombres allant de 1 à 10 à l'aide de la recherche binaire")|
|:--:|
|Recherche du chiffre **7** dans une liste ordonnée de **10** nombres à l'aide de la recherche binaire|

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Lancer Replit</a>

Notre programme vous demandera de rechercher un nom en fonction de la position à laquelle il se trouve.

Ouvrez le **Shell** sur le programme Replit et compilez le programme :
```bash
make BinarySearch
```

Exécutez le programme comme suit :
```bash
./examples/BinarySearch
```

Vous devriez voir une liste de noms et leurs numéros dans une liste. Recherchez Emily en saisissant 6 à l'invite de commande et appuyez sur `Enter`.

|![Recherche de Amy](../resources/debugging_process_searching_for_amy.svg "Capture d'écran d'une console affichant une liste de noms et leur numéro associé. 'Number: 5, Name: Amy' est mis en valeur.")|
|:--:|
|Recherche de Amy.|

Maintenant, relancez le programme et cherchez le numéro correspondant à `Ramona`. Le programme plante avec un message `Segmentation fault (core dumped)` ! 😮

Face à ce problème, vous devez vous poser la question : quel est le comportement du bug ?

Les erreurs de type « segmentation fault » sont généralement causées par l'un des problèmes suivants :
- Accès en dehors des limites d'un tableau.
- Déréférencement d'un pointeur NULL.
- Dépassements de mémoire/stack.

Pour plus d'informations, consultez une [liste des raisons courantes des erreurs de segmentation en C](https://www.tutorialspoint.com/List-of-Common-Reasons-for-Segmentation-Faults-in-C-Cplusplus#:~:text=List%20of%20Common%20Reasons%20for%20Segmentation%20Faults%20in,7%20Stack%20overflow%208%20Writing%20to%20read-only%20memory).

Regardons le code qui implémente la recherche binaire dans notre programme :

1. La fonction `binary_search()` prend trois arguments : le tableau d'éléments, la longueur du tableau et le numéro que nous recherchons. Elle appelle ensuite la fonction récursive `rbin_search()`.

2. `rbin_search()` effectue la recherche binaire de manière récursive et renvoie l'index de l'élément si trouvé. Sinon, elle renvoie `-1`.

Une `fonction récursive` découpe un problème en de nombreux petits problèmes en s’appelant elle-même, ce qui rend le problème plus facile à gérer avec un ensemble de **cas de base**. Une fonction récursive qui ne se termine pas présente généralement l'un des problèmes suivants :

1. Les cas de base sont incomplets.
2. Les appels récursifs sont mal configurés.

Passons au débogage !

## Utilisation des instructions d'impression

Placer des instructions `print` dans votre code est une méthode rudimentaire mais parfois efficace pour savoir si votre code fonctionne comme prévu. Allez-y et vérifiez si le `rbin_search()` fonctionne correctement en plaçant des instructions d'impression pour observer les valeurs évoluer.

{{% expand "***Indice 1 : Qu'est-ce qui rend le problème que nous essayons de résoudre plus petit ?***" %}} 
- Essayez de placer l'instruction d'impression après la variable `middle` dans la fonction `rbinary_search` afin de voir comment évoluent les valeurs de `lo`, `hi` et `middle`. Exécutez la recherche. 
|![Placer une instruction d'impression pour vérifier les valeurs "lo", "hi" et "middle".](../resources/debugging_process_print_statement.svg "Capture d'écran du code ajoutant une instruction d'impression à la ligne 17. L'instruction imprime les valeurs de 'lo', 'hi' et 'middle'.")|
|:--:|
|Placer une instruction d'impression pour vérifier les valeurs `lo`, `hi` et `middle`.|

- Surveillez comment les valeurs sont affichées à chaque étape.
{{% /expand %}}

{{% expand "**Cliquez pour voir la réponse**" %}} 
L'appel récursif pour rechercher dans la moitié inférieure du tableau recherche à la place dans la moitié supérieure.

Pour corriger cela, les arguments `lo` et `hi` de la fonction `rbin_search()` doivent être modifiés en `lo` et `middle-1`.

|![Correction de l'appel récursif pour la recherche dans la moitié inférieure.](../resources/debugging_process_fixing_lowerhalf_search.svg "Capture d'écran du code mettant en évidence la ligne 24 qui indique 'return rbin_search(arr, lo, middle-1, element);'")|
|:--:|
|Correction de l'appel récursif pour la recherche dans la moitié inférieure.|

|![Observation des variables "lo", "hi" et "middle" qui évoluent lors de la recherche de