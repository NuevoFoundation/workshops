```markdown
---
title: "Exercice 2 - Implémentation d'un tas binaire"
difficulties: ["intermédiaire"]
weight: 10
draft: false
---

Un tas binaire est une structure de données importante, souvent utilisée pour implémenter un type de données appelé une file de priorité. Il est également utilisé conceptuellement dans un algorithme de tri appelé heapsort. Sa caractéristique distincte est sa requête `O(1)` pour obtenir la plus grande ou la plus petite valeur contenue, en fonction du type de tas dont il s'agit.

## La théorie

Le tas binaire est conceptuellement un arbre binaire complet. Cela signifie que les nœuds sont ajoutés à l'arbre par niveau, et que la profondeur de l'arbre n'augmente que lorsqu'il n'y a plus de place au niveau le plus profond de l'arbre.

En plus de cette contrainte structurelle, il respecte la propriété de l'ordre du tas : Les enfants d'un nœud doivent avoir une valeur plus grande ou plus petite que le nœud lui-même. Dans un **min-tas**, les enfants doivent être plus grands. Dans un **max-tas**, les enfants doivent être plus petits. Effectivement, cela signifie que la racine doit contenir l'élément le plus grand du tas.

Voici un exemple d'un tas binaire max, le type de tas sur lequel nous nous concentrerons dans cet exercice.

![Exemple de tas binaire](../resources/e2-01.png "Exemple de tas binaire max")

Vous pouvez voir que chaque nœud a 2 enfants ou aucun, sauf le nœud à l'extrême droite. Les nœuds sont remplis de gauche à droite avant de commencer une nouvelle rangée. Tous les enfants sont plus petits que leur parent.

{{% notice note %}}
Les doublons sont facilement gérés dans ce schéma. Nous devons maintenir que tous les enfants sont effectivement inférieurs *ou égaux* à leur parent.
{{% /notice %}}

Nous pouvons utiliser un tableau pour représenter cette structure de données. Un nœud `i` peut être accédé par son index, `i`. Pour accéder à son enfant gauche, multipliez par 2. Pour accéder à son enfant droit, multipliez par 2 et ajoutez 1. Le diagramme suivant illustre ceci :

![Tableau du tas binaire](../resources/e2-02.png "Image d'un tas binaire et son tableau correspondant")

### Ajout dans un tas binaire

Pour ajouter un élément, nous l'ajoutons d'abord à l'emplacement disponible suivant. Ensuite, nous corrigeons rétroactivement tout problème causé par cet ajout en le remontant et en échangeant les nœuds jusqu'à ce qu'il atteigne une position stable, c'est-à-dire son parent est plus grand ou égal à lui-même.

Le diagramme ci-dessous illustre ce processus pour ajouter `34` dans l'exemple de tas binaire.
1. Nous insérons `34` dans la dernière position provisoirement (cercle vert, étape 1).
2. Nous comparons ensuite avec son parent (flèche bleue) et constatons que `34 > 19`. Nous échangeons donc les deux nœuds.
3. À l'étape 2, nous comparons avec `85` et constatons que `34 < 85`, ce qui indique que nous avons terminé.

![Ajout au tas binaire](../resources/e2-03.png "Illustration du processus d'ajout dans un tas binaire")

### Suppression du maximum du tas

Un tas binaire max doit également prendre en charge `removeMax`, qui supprime le plus grand élément du tas. Heureusement, le plus grand élément est simplement la racine ; cependant, nous devons corriger les problèmes causés par ce nouvel espace vide.

Pour remplir cet espace, nous prenons le dernier élément et le plaçons au sommet. Comme auparavant, nous corrigeons rétroactivement tout problème causé par cette opération. Nous effectuons des échanges vers le bas avec l'enfant le plus grand jusqu'à ce qu'il atteigne une position stable dans le tas.

Le diagramme ci-dessous montre comment une suppression du maximum se produit.
1. La racine est supprimée et remplacée par l'élément le plus à droite sur la rangée du bas.
2. À l'étape 1, nous comparons `19` et `42`. Puisque `42` est le plus grand des deux, nous comparons `12` et `42` (flèche bleue) et trouvons que `12 < 42`. Nous échangeons donc `12` avec `42`.
3. Nous répétons le processus à l'étape 2. Nous constatons que `28` est le plus grand des deux enfants, et puisque `12 < 28`, nous échangeons encore.
4. Nous atteignons finalement une position stable à l'étape 3.

![Suppression du maximum du tas binaire](../resources/e2-04.png "Illustration du processus de suppression du max dans un tas binaire")

## L'implémentation

Dans notre implémentation, nous commençons l'indexation à partir de `1` pour gagner un peu en calcul. Ainsi, la racine du tas binaire est située dans `heap.__arr[1]` au lieu de `heap.__arr[0]`. Toutes les fonctions ont des commentaires sur leur fonctionnement dans `binary_heap.h`.

L'implémentation **sera** testée avec des doublons, alors assurez-vous de les gérer correctement. De plus, bien que le tas soit de taille fixe, les données sont stockées dans le tas. Assurez-vous que les données soient `free` !

{{% notice tip %}}
Les fonctions `createHeap` et `heapPrint` ont déjà été testées et vérifiées comme fonctionnant correctement.
{{% /notice %}}

Votre objectif est de lancer `make test` et de ne rencontrer aucune erreur. Utilisez tous les outils à votre disposition, comme `gdb`, `valgrind`, etc., pour vous aider. Bonne chance !

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-2" target="_blank">Lancer Replit</a>
```