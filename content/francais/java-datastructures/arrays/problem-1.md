---
title: "Problème 1 : Bases des tableaux"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---
<!--<link rel="stylesheet" href="../../style.css">-->

## Tâche 1 : Impression

Nous avons créé un tableau des restaurants existants dans notre système ! Nous avons besoin de votre aide pour tout imprimer afin de ne pas inclure les mêmes restaurants.

{{% notice tip %}}  
1. Utilisez une boucle `for` pour imprimer le contenu du tableau.  
2. Utilisez la méthode `length()` pour trouver la taille du tableau.  
3. Regardez l'exemple ci-dessous.  
{{% /notice%}}

Si nous avons le tableau ci-dessous :

```js javascript
String[] restaurants = { "Burger King", "Chipotle", "Panda Express", "McDonalds" };
```

le résultat devrait afficher :

```js javascript
String reponse = "Burger King,Chipotle,Panda Express,McDonalds";
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-1-getRestaurant" target="_blank">Lancer Replit</a>

## Tâche 2 : Changer des éléments

Oh non ! McDonalds n’a plus de nourriture ! Modifiez la liste des restaurants avant que les gens ne commencent à commander chez McDonalds et soient déçus par l’absence de nourriture. Heureusement, "Pizza Hut" est prêt à aider ! Remplacez McDonalds par Pizza Hut à l’index correspondant.

{{% notice tip %}}  
1. Lancez  
2. Trouvez d'abord l'index de McDonalds  
3. N'oubliez pas les guillemets autour de `"Pizza Hut"`  
4. Regardez l'exemple ci-dessous !  
{{% /notice%}}

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "McDonalds"};
//remplacez "McDonalds" par "Pizza Hut"

```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-2-insertRestaurant" target="_blank">Lancer Replit</a>