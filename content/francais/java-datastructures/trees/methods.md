```markdown
---
title: "Méthodes"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 2
--- 

## Arbres Binaires

Les arbres sont un type particulier de structure de données car ils sont constitués d'une collection de nœuds connectés par des arêtes. Il n'existe pas d'initialiseur unique pour créer un nouvel arbre générique comme pour les autres structures de données que nous avons examinées. Pour simplifier les choses, nous nous concentrerons spécifiquement sur les **Arbres Binaires**, qui sont un type d'arbre spécifique avec des règles strictes concernant l'emplacement de chaque nœud.

Les règles d'un arbre binaire sont :
* chaque nœud a exactement deux arêtes, un nœud gauche et un nœud droit
* les nœuds à gauche sont inférieurs au nœud actuel
* les nœuds à droite sont supérieurs au nœud actuel

L'arbre que nous avons examiné auparavant est un exemple d'arbre binaire. Regardez chacun des nœuds et vérifiez par vous-même s'ils respectent les règles !
![image](../img/tree.png)

## Rechercher des Éléments

Avant de plonger dans la mise en œuvre d'une recherche avec du code, examinons comment un arbre binaire recherche un élément. Lorsque nous examinons les éléments dans un arbre, nous commençons toujours par le nœud racine, qui, dans un arbre binaire, devrait être plus ou moins au milieu des données.

Une fois que nous commençons au niveau de la racine, nous examinons la valeur et nous nous posons la question suivante : « La valeur que nous recherchons est-elle inférieure, égale ou supérieure à cette valeur ? » Si la valeur est égale, super ! Nous avons trouvé notre réponse. Si la valeur que nous voulons est inférieure à ce que nous avons actuellement, alors nous nous dirigeons vers le nœud gauche et nous reposons la même question. Si la valeur que nous voulons est supérieure à ce que nous avons actuellement, alors nous allons au nœud droit et nous nous reposons la même question.

Essayez de suivre cet exemple ci-dessous. C'est le même arbre que précédemment et nous voulons trouver la valeur 9.

![image](../img/binarysearch.gif)

## Traverser les Éléments

Maintenant que nous comprenons conceptuellement comment rechercher des éléments, nous pouvons constater que rechercher des éléments revient simplement à répéter la même opération encore et encore. Cela signifie que si nous programmons correctement l'opération, l'intégralité de l'algorithme de recherche sera réalisée.

Imaginons que nous ayons des nœuds définis comme ci-dessous :
```js javascript
class Node {
    int value;
    Node left;
    Node right;
}
```

Nous pouvons maintenant appliquer la logique pour trouver le bon élément dont nous avons parlé dans la section précédente. Considérez cet extrait de code :
```js javascript
Node current = root;
if (current.value < desired) {
    current = root.right;
} else if (current.value > desired) {
    current = root.left;
}
```
Nous constatons que cela nous fait passer d'une étape à l'autre. Nous pourrions alors utiliser cette logique dans une boucle `for` jusqu'à ce que nous trouvions la valeur que nous cherchons.
```