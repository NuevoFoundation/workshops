```markdown
---
title: "Introduction"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 1
---

Les arbres sont composés de deux éléments : **les arêtes** et **les nœuds**. Examinons chacun de ces éléments plus en détail.

### Arêtes

Vous pouvez imaginer une arête comme la ligne qui relie deux nœuds. Les arêtes connectent toujours exactement deux nœuds. Les arêtes peuvent véhiculer des informations, mais ce n'est pas obligatoire.

### Nœuds

Les nœuds sont simplement des points dans un arbre qui représentent des données. Un arbre a besoin d'au moins un nœud et chaque nœud peut avoir autant d'arêtes qu'il le souhaite, tant qu'il est connecté à un autre nœud distinct.

### Pourquoi les arbres ?

Les arbres sont des structures de données très simples qui peuvent stocker beaucoup de données tout en permettant de les retrouver rapidement. De nombreux algorithmes qui reposent sur la recherche du meilleur correspondance organisent leurs données sous forme d'arbre avant de commencer la recherche, afin d'optimiser leur rapidité. Quelques exemples d'utilisation des arbres dans le monde réel incluent :
* <a href="https://en.wikipedia.org/wiki/Spanning_Tree_Protocol" target="_blank">Spanning Tree Protocol</a> - Un protocole fondamental pour l'utilisation d'Internet,
* <a href="https://en.wikipedia.org/wiki/Binary_search_algorithm" target="_blank">Recherche binaire</a> - L'un des algorithmes les plus efficaces pour rechercher des données dans un ensemble trié,
* <a href="https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html" target="_blank">TreeMaps</a> - Le cousin de la structure de données HashMap en Java qui utilise un arbre pour organiser les données.

Certains types d'arbres suivent des règles plus spécifiques concernant la manière dont les données y sont ajoutées et maintenues, ce qui signifie qu'il existe presque toujours un arbre adapté à chaque situation.

## Visualisation des arbres

Les arbres possèdent ce qu'on appelle un **nœud racine**, qui est le nœud auquel le reste de l'arbre est connecté, soit directement, soit indirectement. Cette structure de données est appelée un arbre parce que les nœuds se ramifient à partir du nœud racine. Lorsque vous voyez un arbre dessiné, vous verrez généralement le nœud racine en haut, mais ce ne sera pas toujours le cas !

![image](../img/tree.png)
```