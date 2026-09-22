---
title: "Problème 1 : Bases des ArrayLists"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/unwrTbTILmA" title="Problème 1 : Bases des ArrayLists - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

## Tâche 1 : Insertion

Le camion de tacos est maintenant disponible au coin de la rue ! Les nouveaux employés ont du mal à suivre toutes les différentes commandes. Aidez-les à organiser tous les éléments en utilisant des `ArrayList` !

```js javascript
/*
Dan commande dans son taco shop préféré :
    - 2 commandes de "carne asada"
    - 4 commandes de "carnitas"
    - 1 commande de "pollo"
    - 2 commandes de "birria"

    Retournez un ArrayList contenant tous ces éléments dans cet ordre.
*/
```

{{% notice tip %}}
1. Comment pouvez-vous ajouter des éléments dans la liste ?
2. Que contient la commande de Dan ?
{{% /notice %}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DInsert?lite=true" title="Problème 1 : Bases des ArrayLists - Replit éditeur 1"></iframe>

## Tâche 2 : Récupérer des éléments

Un restaurant de cuisine chinoise vient d'ouvrir à proximité. Un grand nombre de commandes viennent d'arriver, et le manager a du mal à tout suivre, alors il a tout regroupé dans une `ArrayList`. Aidez à terminer le programme pour retourner la chaîne donnée à un index donné.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Hotdog"); 

// Retourne "Pizza" car c'est l'article à l'index 0 dans le menu
item = find(menu, 0);
```

{{% notice tip %}}
1. Comment pouvez-vous parcourir la liste ?
2. Regardez l'exemple du menu !
{{% /notice%}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DFind?lite=true" title="Problème 1 : Bases des ArrayLists - Replit éditeur 2"></iframe>

## Tâche 3 : Supprimer des éléments

Ce même restaurant chinois a un bug dans son code ! Les commandes ont été dupliquées de manière aléatoire et les `ArrayList` sont remplies de copies des commandes. Aidez le propriétaire en écrivant un programme pour supprimer les `n` premières occurrences d'une commande donnée dans l'`ArrayList`.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Pizza");
menu.add("Pizza");
menu.add("Hotdog"); 

// Supprimez les deux premières occurrences de Pizza
item = remove(menu, "Pizza", 2);

// Le menu deviendra le tableau suivant : {"Hotdog", "Hamburger", "Pizza", "Hotdog"}
```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DRemove?lite=true" title="Problème 1 : Bases des ArrayLists - Replit éditeur 3"></iframe>