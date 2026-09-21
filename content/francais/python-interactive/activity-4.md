```yaml
---
title: "Activité 4 - Interagir avec le Client"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---
## Interagir avec le Client
Continuons d’interagir avec le client et prenons sa commande ! Dans la fonction `main()`, la prochaine chose que nous devons faire est de créer une liste vide stockée dans la variable `listOrderItems`, de manière à ce que tous les articles qu’ils commanderont éventuellement y soient enregistrés.

Maintenant, utilisons nos connaissances des instructions if-else et des boucles while pour recevoir la commande du client. Si le client a répondu Non à la question lui demandant s'il souhaite commander quelque chose du menu, imprimez un message d'au revoir. Sinon, demandez-lui de saisir le premier article et la quantité qu'il souhaite commander avec un format spécifié comme `"(Exemple de commande : Rouleaux de printemps-2)"` fourni dans l'invite.

Nous avons le premier article que le client souhaite commander ! Enfin, c'est ce que nous pensons... Cependant, nous ne savons pas réellement ce que le client a saisi dans la fonction `input()`. Il pourrait très bien avoir écrit `"Baa Baa Baa Ba ba banane"` issu du film Les Minions. Ou alors, il pourrait avoir saisi un article valable du menu, mais pas dans le format spécifié. Il pourrait avoir écrit `"Rouleaux de printemps : 2"` ou `"Rouleaux de printemps -2`, aucun des deux n'étant une entrée valide ! Ou bien il pourrait même avoir donné une quantité NÉGATIVE. Le point est que nous ignorons ce que le client pourrait avoir entré, et nous devons protéger à la fois le client et notre programme contre ces saisies invalides.

Alors, écrivons une fonction pour vérifier toute entrée d'article commandée par l'utilisateur et nommons-la `orderItemChecking(item)`. Remarquez qu'elle prend un paramètre ? Cela signifie que nous devons transmettre l'article commandé comme argument à cette fonction depuis `main()`. Dans cette fonction, nous allons vouloir nous protéger contre tous les problèmes mentionnés au paragraphe précédent.

Indice : Utilisez des instructions `if` pour attraper les saisies incorrectes.

Indice : Retournez une valeur booléenne, soit `True` si l'entrée est valide, soit `False` si elle est invalide.

Indice : Une méthode de chaîne utile pour analyser l’entrée `orderItemInput` pourrait être `str.split()`... Par quoi devrions-nous diviser ?

Puisque nous pouvons vérifier l'entrée des clients, retournons à la fonction `main()` et ajoutons une boucle `while` dans le bloc `else` après avoir demandé au client de saisir le premier article. Cette boucle `while` continuera de demander à l'utilisateur de saisir un article et une quantité valides comme précédemment jusqu'à ce que `orderItemChecking(item)` retourne `True`. Rappelez-vous de stocker le résultat de la fonction `input()` dans la même variable que vous aviez utilisée lors de la première demande, autrement la boucle `while` ne pourra pas continuer.

Lorsque l'utilisateur a enfin saisi un premier article valide, ajoutez cet article à la liste `listOrderItems` que vous avez créée auparavant.

Puisque nous avons réussi à obtenir un article, voyons si le client veut commander un autre article, ou même plusieurs autres. Pour cela, nous allons écrire une autre fonction auxiliaire, `isOrderComplete()`, qui demandera à l'utilisateur de saisir soit Oui, soit Non, comme dans la fonction `orderFromRestaurantYN()`, avec un format spécifié jusqu'à ce qu'il nous fournisse une réponse valide. S'il répond Oui, alors nous retournons `True` pour indiquer qu'il souhaite commander au moins un autre article. Sinon, nous retournons `False`, indiquant qu'il ne souhaite pas commander autre chose.

Nos fonctions auxiliaires sont complètes ! Il suffit maintenant d’appeler ces fonctions dans le bloc `else` de la fonction `main()`. La logique de cette dernière étape est essentiellement la suivante :

- Tant que `isOrderComplete()` est `True`, continuer à demander au client de saisir un article du menu qu’il souhaite commander ainsi que la quantité.
- À l'intérieur de cette boucle `while`... après que l'utilisateur ait indiqué un article qu’il souhaite commander, vérifiez avec `orderItemChecking(item)` si l’entrée est valide ou non. Tant qu’elle n’est pas valide, continuez de demander au client de réessayer jusqu'à ce qu'il saisisse correctement un article. Assurez-vous de l’informer que son entrée était incorrecte.
- Une fois la boucle interne `while` terminée, indiquant que l'utilisateur a saisi correctement un article et une quantité, ajoutez cet article à la liste `listOrderItems` mentionnée plus tôt.

Si une partie de ce processus vous semble familière, c'est une bonne chose ! C'est exactement ce que nous avons fait lorsque nous avons demandé à l'utilisateur de saisir le premier article qu'il voulait commander.

Excellent travail ! Vous avez réussi à prendre en compte les saisies des utilisateurs et à vérifier les éventuelles erreurs qu'ils pourraient avoir commises, ce qui est formidable !
```