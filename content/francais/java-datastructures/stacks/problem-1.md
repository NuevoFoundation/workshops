---
title: "Problème 1 : Les bases des piles"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 

## Tâche 1 : Inverser en utilisant une pile

Oh non ! Un nouveau stagiaire a été embauché et il a mélangé la liste des restaurants ! Les entrées des restaurants sont dans l'ordre **inverse** ! Heureusement, la pile est la structure de données parfaite pour résoudre ce problème. Pouvez-vous créer une nouvelle pile dans le bon ordre ?

{{% notice tip %}}
1. Rappelez-vous que la pile fonctionne sur le principe du Dernier Entré, Premier Sorti (LIFO ; pensez à une pile d'assiettes).
2. À quoi ressemble la pile d'origine ?
{{% /notice%}}

```js javascript
// Exemple de pile actuelle
Stack<String> restaurants = new Stack<>();

restaurants.push("McDonalds");
restaurants.push("Carls Jr.");
restaurants.push("Burger King");
restaurants.push("Chipotle");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackReverse" target="_blank">Lancer Replit</a>

## Tâche 2 : Garder l'historique

Un autre usage pratique de la pile est la fonction d'annulation. De nombreux programmes incluent aujourd'hui un bouton d'annulation pour garder une trace des modifications les plus récentes. La pile est la structure de données parfaite pour cela ! Pouvez-vous créer une fonction pour annuler la dernière modification ? Par exemple :

```js javascript
// Exemple de pile actuelle
Stack<String> myOrder = new Stack<>();

restaurants.push("Drink");
restaurants.push("Fries");
restaurants.push("Pizza");
restaurants.push("Pizza");

// L'utilisateur a commandé une pizza en trop ! Comment pouvez-vous annuler cette dernière modification ?

Stack.undo() // Supprime le dernier élément ajouté
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackUndo" target="_blank">Lancer Replit</a>