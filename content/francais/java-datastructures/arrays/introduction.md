```markdown
---
title: "Introduction"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 1
---

Les tableaux sont une structure de données dans laquelle chacun de ses éléments est disposé suivant une séquence numérique et chaque élément est référencé par son numéro de position. En Java, chacun de ces éléments est d'un seul type (`String`, `int`, `double`, etc.) et est indexé à zéro, ce qui signifie que le premier élément d'un tableau commence à `0`, le deuxième élément à `1`, et ainsi de suite.

![image](../img/array.png)

Voici quelques termes importants que vous devez connaître avant de parler davantage des tableaux.

- Le nombre d'éléments dans un tableau est appelé la **longueur** du tableau.
- Le type des éléments individuels dans un tableau est appelé le **type de base** du tableau.
- Le numéro de position d'un élément dans un tableau est appelé **index** de cet élément.

Pour nos besoins, nous voulons créer un tableau qui peut contenir tous les différents restaurants dans notre application. Supposons que notre programme devra traiter les noms d'un millier de restaurants différents. Nous aurons besoin d'un moyen de trier et de gérer toutes ces données. Sans une structure de données de type tableau, nous devrions résoudre le problème en créant mille variables différentes pour chaque restaurant et, si nous voulions faire quelque chose d'aussi simple que, par exemple, afficher les noms de chaque restaurant, il faudrait rédiger 1000 instructions d'affichage. Réaliser cet exploit serait un immense défi. 

À l'inverse, les tableaux ont la capacité de nous permettre de réaliser les mêmes actions, mais en une seule étape. Le tableau est simplement une variable unique, mais il contient les 1000 restaurants en son sein. 

![image](../img/array2.png)

La **longueur** du tableau serait de 1000, puisque 1000 noms individuels sont inclus. Le **type de base** du tableau serait `String`, car les éléments du tableau sont des chaînes de caractères. Le premier nom serait à l'**index** `0` dans le tableau, le deuxième nom à l'index `1`, et ainsi de suite, jusqu'au millième nom à l'index `999`.
```