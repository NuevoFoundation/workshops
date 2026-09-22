---
title: "Problème 1 : Bases des File d'Attente"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 
<!--<link rel="stylesheet" href="../../style.css">-->

## Tâche 1 : Vider la File d'Attente pour les Nouvelles Commandes

Un nouveau restaurant a été ajouté à Nuevo Eats ! De nouvelles commandes affluent, et la file d'attente déborde d'ordres ! La popularité des différents tacos a rapidement augmenté, et le restaurant est surchargé. Trouvez un moyen de supprimer tous les éléments pour sauver le restaurant !

{{% notice tip %}}
1. Comment pouvez-vous parcourir la file d'attente ?
2. Essayez de vider la file d'attente au fur et à mesure que vous la parcourez !
3. Consultez le menu d'exemple !
{{% /notice%}}

```js javascript
// Cela utilise une liste comme organisateur de la file d'attente.
Queue<String> orders = new PriorityQueue<>();

orders.add("Fish Taco");
orders.add("Beef Taco");
orders.add("Chicken Taco");
orders.add("Fish Taco");
orders.add("Beef Taco");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Clear" target="_blank">Lancer Replit</a>

## Tâche 2 : Utilisation d'une File de Priorité pour Trouver le Prix Minimum

Un restaurant utilise une File de Priorité pour gérer les commandes. Le restaurant souhaite examiner les commandes en fonction de leurs prix afin de mieux préparer les repas qu'il prépare. Plus précisément, il aimerait pouvoir trouver le nième prix minimum actuellement dans leur liste. Écrivez une fonction qui examine leur file d'attente de commandes et renvoie le nième prix minimum.

{{% notice tip %}}
1. Comment vous assurerez-vous que la liste est triée ?
2. Qu'est-ce qui rend la recherche du prix minimum plus facile ?
3. Que se passe-t-il s'ils recherchent le 5ᵉ prix minimum ou le plus bas ?
{{% /notice%}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Min" target="_blank">Lancer Replit</a>