---
title: "Activité 3 - Accueillez le Client dans votre Restaurant et Affichez le Menu"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---
## Accueillez le Client dans votre Restaurant et Affichez le Menu
Maintenant que nous avons à la fois une bannière pour votre restaurant à afficher au client et un menu stocké dans votre programme Python, accueillons votre client et affichons le menu. Dans cette activité, nous allons écrire 2 fonctions auxiliaires pour y parvenir.

{{% notice info %}}
## Fonctions Auxiliaires
Les fonctions auxiliaires sont des fonctions appelées dans une fonction principale qui exécute tout le code pour ce programme. Chacune de ces fonctions auxiliaires poursuit un objectif simple.
{{% /notice %}}

La première fonction auxiliaire que nous écrirons est `printMenu()`, une fonction qui parcourra le dictionnaire `dictMenu` et aboutira à un menu similaire à l'exemple ci-dessous. Étant donné que les valeurs de `dictMenu` sont toutes des listes contenant le prix de l'article comme premier élément et la description comme deuxième élément, nous voulons nous assurer que, lorsque nous affichons les informations de chaque élément, nous accédons à chaque élément de cette liste en utilisant des indices.
Psst : La description de l'article figure sur une ligne distincte du nom et du prix de l'article, qu'est-ce que cela vous indique ?
Pssst : Il y a un espace entre chaque élément du menu, comment pouvons-nous faire cela... ?

Exemple de Menu :

-----Menu-----

Pâtes au Pesto Crémeux ------ 15,99 $

Pâtes penne mélangées dans une sauce pesto crémeuse, garnies d'olives noires et de tomates séchées au soleil.

Rouleaux de Printemps ------ 8,00 $

Légumes sautés comme le chou et la carotte mélangés à des vermicelles et de fines lamelles de tofu frit, enveloppés dans une couche extérieure croustillante.

La deuxième fonction auxiliaire que nous allons écrire est `orderFromRestaurantYN()` où nous demanderons à l'utilisateur s'il souhaite commander quelque chose à partir du menu ou non. Rappelez-vous de fournir à l'utilisateur un exemple de ce qu'il doit entrer. Qu'ils entrent O pour Oui et N pour Non ou oui/non ou Oui/Non ou o/n ; cela doit être précisé pour le client afin qu'il sache ce qu'est une réponse valide.

Une fois ces fonctions écrites, appelez-les dans la fonction `main()` après l'affichage de la bannière du restaurant. 
Lorsque vous appelez ces fonctions dans `main()`, souvenez-vous que tant que l'utilisateur n'entre pas l'une des réponses valides pour `orderFromRestaurantYN()`, nous devons indiquer qu'il n'a pas saisi sa réponse dans un format valide, lui réafficher le menu, puis lui demander de répondre à nouveau.