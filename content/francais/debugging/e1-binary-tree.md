```markdown
---
title: "Exercice 1 - Implémentation d'un Arbre Binaire"
difficulties: ["intermédiaire"]
weight: 9
draft: false
---

L'arbre binaire est l'une des structures de données les plus simples en informatique et les idées qu'il utilise sont très utiles. Il stocke des données ordonnables et offre un temps d'exécution optimal de O(log n) pour la recherche, l'ajout et la suppression d'éléments. Cependant, ces performances dépendent fortement de l'ordre dans lequel les éléments sont ajoutés ou supprimés, ce qui limite son utilisation à des discussions académiques.

## La Théorie

Un arbre binaire est constitué de plusieurs nœuds qui sont reliés entre eux. Chaque nœud a un nœud parent, ou son prédécesseur, et jusqu'à deux nœuds enfants. Un nœud qui n'a pas d'enfants est appelé une feuille.

Dans un arbre binaire **enraciné**, un nœud est spécifié comme racine, ce qui signifie qu'il n'a pas de parent. Dans le schéma ci-dessous, le nœud A est le parent des nœuds B et C. De même, B est le parent de D et E. A est la racine, et D, E, F et G sont des feuilles.

![Les Bases de l'Arbre Binaire](../resources/e1-01.png "Graphique d'un arbre binaire avec des étiquettes indiquant la racine, les feuilles, le parent, et les enfants gauche et droit.") 

L'arbre binaire est une structure de données récursive. Chaque nœud peut contenir 0 à 2 enfants, et 1 parent. Nous pouvons nous limiter à examiner un sous-arbre spécifique de l'arbre binaire original sans trop nous soucier de l'arbre complet, et ce sous-arbre est un arbre binaire valide en soi.

### Utilisation de l'Arbre Binaire

Nous pouvons utiliser un arbre binaire pour stocker des informations sur l'ordre d'une liste. Chaque nœud peut stocker une valeur, et ses enfants doivent être ordonnés comme suit :
- L'enfant gauche doit avoir une valeur inférieure à celle de son parent.
- L'enfant droit doit avoir une valeur supérieure à celle de son parent.
- Les valeurs en double peuvent être stockées à gauche ou à droite ; cependant, il est important de s'assurer que les doublons soient stockés de manière cohérente. Ainsi, si les doublons sont stockés à gauche, ils ne seront stockés qu'à gauche, et de même pour la droite.

Le diagramme suivant montre un exemple d'arbre binaire. Remarquez que les enfants gauche sont tous inférieurs à leur parent, tandis que les enfants droit sont supérieurs. En plus de cette propriété d'ordre de l'arbre, on peut voir qu'il n'y a pas de contrainte stricte sur la forme de l'arbre.

![Exemple d'Arbre Binaire 1](../resources/e1-02.png "Un exemple d'arbre binaire où les enfants gauche sont tous inférieurs à leur parent, tandis que les enfants droit sont supérieurs.") 

### Ajout à un Arbre Binaire

Pour ajouter un élément, nous devons trouver où il s'insère dans l'arbre. Pour ce faire, nous effectuerons une **traversée de l'arbre**. L'idée est de passer d'un nœud à un autre jusqu'à ce que nous trouvions un "endroit" pour l'élément que nous voulons ajouter. Tout d'abord, nous commençons à la racine. Ensuite, nous comparons la valeur à la racine avec l'élément à ajouter. Si l'élément est plus grand, nous passons à l'enfant droit. Sinon, nous passons à l'enfant gauche.

Nous pouvons répéter ce processus jusqu'à ce que nous trouvions un nœud qui puisse être le parent du nouvel élément. Le diagramme ci-dessous illustre l'ajout de 7 à un arbre binaire.

![Ajout à un Arbre Binaire](../resources/e1-03.png "Diagramme illustrant le processus d'ajout de 7 à un arbre binaire.")

1. À l'étape 1 (en bleu), nous comparons `10` et `7`. Étant donné que `7 < 10`, nous avançons vers l'enfant gauche.
2. À l'étape 2 (en vert), nous comparons `5` et `7`. `7 > 5`, nous avançons vers son enfant droit, pour constater que `5` n'a pas d'enfant droit ! Ainsi, nous pouvons insérer `7` à cet endroit.

### Suppression d'un Arbre Binaire

La suppression d'un élément est un peu plus complexe. Nous devons d'abord trouver l'élément à supprimer. Cependant, une fois que nous l'avons supprimé, nous devons combler le "trou" que nous avons créé dans l'arbre. Nous ne pouvons pas simplement remplir le trou avec un élément quelconque ; nous devons maintenir la propriété d'ordre de l'arbre binaire. Un élément pratique à choisir est l'élément le plus profond, situé à gauche du sous-arbre droit du trou.

Le diagramme ci-dessous montre comment supprimer des éléments dans plusieurs cas. Les lignes pointillées indiquent que la connexion peut ou non exister. Ainsi, dans le cas 2 par exemple, le parent en bleu peut ne pas exister si le nœud à supprimer est la racine de l'arbre.
- Dans le premier cas, le nœud n'a pas d'enfants - nous pouvons le supprimer en toute sécurité sans problème.
- Dans le deuxième cas, le nœud a 1 enfant à gauche ou à droite. Nous pouvons faire monter l'enfant à l'emplacement précédent de ce nœud. Cela fonctionne pour le côté gauche et droit.
- Dans le troisième cas, le nœud a 2 enfants. Il existe plusieurs façons d'aborder cela, mais la méthode que nous allons utiliser consiste à prendre le plus petit élément du sous-arbre droit et à l'insérer dans le "trou" que nous allons créer. Si cet élément possède un enfant droit (le nœud vert), nous devons faire monter cet enfant, de sorte que son ancien parent (orange) devienne le parent de cet enfant.

![Suppression d'un Arbre Binaire](../resources/e1-04.png "Diagramme illustrant les 3 cas de suppression d'un élément d'un arbre binaire.")

Le troisième cas est difficile à mettre en œuvre correctement en raison du nombre de cas exceptionnels qui existent. Par exemple, la plus petite valeur du sous-arbre droit pourrait être l'enfant droit lui-même. Ou bien, l'enfant minimum pourrait ne pas avoir d'enfant droit.

## L'Implémentation

Chez l'équipe Nuevo, nous avons créé une implémentation pour l'arbre binaire. Cependant, le programmeur a été négligent et n'a pas vérifié son travail, donc il y a des erreurs et des bugs ! Pour cet exercice