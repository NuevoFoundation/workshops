```markdown
---
title: "Activité 5 - Analyse de la commande client"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---
## Prérequis
- <a href="../../python-basics/functions" target="_blank">Fonctions</a>
- <a href="../../python-basics/conditional-statements-loops/loops/" target="_blank">Boucles</a>

## Analyse de la commande du client
Nous avons reçu la commande du client, et maintenant, nous devons simplement calculer le coût de sa commande !

### Création d'un dictionnaire à partir de la commande du client
La première fonction que nous allons écrire est `createDictOrderItems(listOrderItems)`, elle prend la liste des articles de la commande du client en paramètre. Nous retournerons un dictionnaire contenant tous les articles commandés et leurs quantités respectives. Actuellement, nous n'avons qu'une liste de chaînes qui contiennent à la fois le nom de l'article et la quantité. Cependant, nous devons séparer ces informations et convertir la quantité en type entier puisqu'il s'agit d'un nombre.
  - Tout d'abord, créons un dictionnaire vide intitulé `dictItems` qui stockera ces informations.
  - Ensuite, écrivez une boucle (Hmm, quel type de boucle souhaitez-vous utiliser ?) qui parcourt tous les éléments de la liste de commande que nous avons passée en paramètre.
  - Dans cette boucle, nous voulons diviser chaque chaîne par le `"-"` qui se trouve entre le nom de l'article et la quantité. Si vous avez spécifié un format différent, tel que `" : "` ou `" - "`, précisez-le ici. Le premier élément obtenu en scindant la chaîne est le nom de l'article. Le deuxième élément obtenu est la quantité, convertissez-la en entier. Stockez ces deux valeurs dans des variables nommées de manière significative, comme `itemName` et `itemQuantity`.
  - Toujours dans la boucle, nous devons maintenant ajouter ces données au dictionnaire `dictItems`. Cependant, rappelez-vous que, techniquement, un client peut commander le même article plusieurs fois dans des éléments de commande distincts. Nous devons les combiner ici. Par exemple, si le client commande Spring Rolls-2 deux fois, nous devons comprendre cela comme 4 Spring Rolls. Pour ce faire, nous devons utiliser un bloc `if`-`else`, où, si le dictionnaire contient déjà le nom de l'article, nous ajoutons cette nouvelle quantité à la quantité déjà associée au nom de l'article. Sinon, nous créons une nouvelle paire clé-valeur avec le nom de l'article et la quantité.
  - Enfin, une fois cette boucle terminée, n'oubliez pas de retourner ce dictionnaire !

### Calcul des prix à partir du dictionnaire  
La deuxième fonction que nous allons écrire est `computePrices(dictItems)`, qui prend le dictionnaire que nous avons créé dans la dernière fonction en paramètre et retourne un nouveau dictionnaire contenant chaque nom d'article associé au prix * quantité.
  - Créez un dictionnaire vide `dictItemAndPrice` qui contiendra l'article et le prix total de cet article.
  - Parcourez les articles du dictionnaire que nous venons de passer en paramètre. Dans cette boucle, nous souhaitons obtenir la quantité d'article du `dictItems`, car c'est la valeur de la paire clé-valeur du dictionnaire. Nous souhaitons également accéder au prix de l'article à partir de la variable globale `dictMenu`. Gardez à l'esprit toutefois que c'est la première valeur de la liste associée au nom de l'article, et nous devons y accéder en conséquence.
  - Multipliez ces deux nombres pour obtenir le prix total de cet article.
  - Ajoutez la paire nom d'article et prix total au dictionnaire `dictItemAndPrice`.
  - Retournez ce dictionnaire.

### Calcul du prix total de la commande
La troisième fonction que nous allons créer est `computeTotalPrice(dictItemAndPrice)`, elle prend le dictionnaire que nous avons créé dans `computePrices(dictItems)` en paramètre et retourne le prix total de la commande complète du client.
  - Initialisez une variable `totalPrice` avec la valeur `0` afin de pouvoir y additionner les prix de chaque article.
  - Parcourez le dictionnaire `dictItemAndPrice` et ajoutez chacune des valeurs à `totalPrice`.
  - Retournez `totalPrice` arrondi à 2 décimales en utilisant `round()` et fournissez 2 comme deuxième argument pour qu'il arrondisse à deux chiffres après la virgule, puisque c'est ainsi que nous souhaitons afficher le prix final.

Ces trois fonctions auxiliaires seront appelées dans la fonction `main()` dans le bloc `else`, dans l'ordre où nous les avons écrites. La valeur que nous avons retournée pour la première fonction sera l'argument de la deuxième fonction, et la valeur retournée par la deuxième fonction sera l'argument de la troisième fonction. Enfin, le résultat de la troisième fonction sera utilisé dans l'activité suivante ! N'oubliez pas de stocker explicitement chaque résultat des fonctions dans des variables afin de pouvoir les réutiliser plusieurs fois.
```