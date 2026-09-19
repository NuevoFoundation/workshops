---
title: "Le Menu"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/LelFnKtml8Q" title="Le Menu - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Stockage des informations du restaurant

Rappelons-nous du tableau des restaurants que nous avons créé précédemment dans la section sur les tableaux. 

![restaurant](../../arrays/img/array2.png)

Comme vous pouvez le voir, ce tableau contient tous les différents restaurants pour notre application. Maintenant, essayons de faire en sorte que chaque restaurant contienne un tableau de tous ses éléments de menu. Si cela est fait correctement, le premier élément `[0]` de notre tableau, "Burger King", devrait maintenant contenir ses éléments de menu respectifs. Cela pourrait ressembler à ceci :

![burgerkingarray](../img/2darray2.png)

Comme vous pouvez le voir, le premier élément (`[0]`) devrait être notre tableau pour Burger King. Tout comme nos tableaux 1D, nous utilisons une indexation à partir de zéro pour accéder aux éléments de notre tableau. Si nous voulions passer une commande pour un Whopper, il suffirait d'appeler `Restaurant[0][0]`. Cela appellerait notre tableau Burger King et le premier élément de ce tableau, qui est un Whopper. Si nous voulions des frites dans notre tableau, nous appellerions `Restaurant[0][2]`. 

Question : Si nous voulions commander du poulet à l'orange et que le poulet à l'orange était le 10ème élément de notre tableau Panda Express, comment pourrions-nous accéder à cet élément ?

Si vous avez répondu `Restaurant[2][9]`, alors vous avez raison ! Panda Express est le troisième tableau `[2]`, et le poulet à l'orange est le dixième élément `[9]`.