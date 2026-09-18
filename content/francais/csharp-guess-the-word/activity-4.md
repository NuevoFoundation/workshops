```yaml
---
title: "Activité 4 - Mettre le tout ensemble"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 13
---

## Activité 4

Cette activité comporte quatre parties. C'est un excellent moment pour utiliser vos connaissances sur les commentaires, les nombres, les variables et la lecture depuis la console, afin de compléter les quatre activités. Quelques informations contextuelles pour chaque activité sont fournies ci-dessous, et des indices sont inclus dans le code. Après chaque partie, appuyez sur **run** et assurez-vous qu'il n'y a pas d'erreurs dans la console.

### Activité 4.1

Tout d'abord, introduisons un peu plus de code dans notre jeu. Trouvez les deux lignes de code qui commencent par `TODO (ACTIVITY 4.1)` (l'une est approximativement à la ligne 60 et l'autre vers la ligne 130). Supprimez complètement ces deux lignes de code. Cela active le comportement principal du jeu, comme vérifier si la lettre devinée par le joueur se trouve dans le mot à deviner.

Malheureusement, après avoir appuyé sur **run**, il semble que le jeu ne reste pas en attente d'une entrée utilisateur et continue de deviner `'C'` en boucle ! Ce n'est pas bon, alors corrigeons cela dans la prochaine partie.

### Activité 4.2

Lorsque le joueur fait une devinette, nous devons prendre la lettre devinée et la stocker dans une variable. Cette variable sera utilisée pour vérifier si la lettre apparaît dans le mot à deviner. Utilisez `Console.ReadLine` pour attendre une entrée utilisateur et stocker cette entrée dans la variable `input`. Note : la variable `input` est déjà déclarée, donc vous n'avez pas besoin d'utiliser le mot-clé `var`.

Pour vérifier si vous avez bien fait cela, appuyez sur **run**. Vous devriez maintenant pouvoir taper une lettre dans la console.

### Activité 4.3

À chaque fois qu'une lettre est devinée correctement, nous devons incrémenter (ajouter un) au nombre de lettres correctement devinées. Utilisez la variable `lettersRevealed` pour modifier le nombre de lettres correctement devinées.
Appuyez sur **run** pour vous assurer qu'aucune erreur ne se produit. Nous avons également fourni un peu de code pour afficher la valeur de la variable `lettersRevealed` à des fins de test. Assurez-vous de supprimer cela une fois votre test terminé, car c'est une information que nous ne voulons pas révéler au joueur !

### Activité 4.4

À chaque fois qu'une lettre est devinée incorrectement, le joueur perd une vie. Décrémentez (soustrayez un) le nombre de vies à l'aide de la variable `lives`. Nous indiquerons également au joueur combien de vies il lui reste lorsqu'il fait une devinette incorrecte, en affichant le nombre de vies dans la console.
Vérifiez si vous avez bien fait cela en appuyant sur **run**, en devinant une lettre incorrecte, et en voyant si le nombre correct de vies restantes s'affiche dans la console.

{{% notice info %}}

### Fait Amusant - Bugs

Rappelez-vous dans **Activité 4.1** qu'après avoir dévoilé un peu de code, nous avons rencontré un comportement inattendu. Tout problème ou comportement inattendu dans le programme est appelé **"bug"**. Nous avons corrigé le bug introduit dans **Activité 4.1** en introduisant une entrée utilisateur dans **Activité 4.2**.

Même si vous avez tout implémenté correctement dans les parties précédentes, si vous continuez à jouer pendant un certain temps, un autre problème peut encore survenir. Quel est-il ? Nous corrigerons ce bug dans **Activité 6**.

{{% /notice %}}
```