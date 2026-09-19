```markdown
---
title: "Opérateurs"
description: "Introduction aux opérateurs et opérations sur les variables en Java."
date: 2021-10-13T00:00:00Z
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/wP8-F1nBPcg" title="Java operators video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Faisons des mathématiques : opérateur arithmétique

Dans l'exercice précédent, nous avons appris ce qu'étaient les variables et comment nous pouvions affecter des valeurs à une variable d'un type spécifique, par exemple :

```java
int age = 3;  // déclaration de la variable age de type int avec la valeur 3
age = 4;      // assigne 4 à la variable age
```

En regardant le code ci-dessus, il s'agit essentiellement d'ajouter 1 à la valeur de la variable `age`. 

En Java, nous pouvons effectuer des opérations mathématiques directement sur des variables avec des **opérateurs arithmétiques** : `+`, `-`, `*`, `/`, `%`.
Par exemple, nous pouvons utiliser l'opérateur d'addition `+` pour ajouter 1 à `age` :

```java
int age = 3;  // déclaration de la variable age de type int avec la valeur 3
age = age + 1;// ajoute 1 à age
```

{{% notice note %}}
Voici les opérateurs arithmétiques en Java :

**Opérateur** | **Description** | **Exemple**
------|------|--------
`+` | addition | `1 + 1 = 2`
`-` | soustraction | `2 - 1 = 1`
`*` | multiplication | `3 * 3 = 9`
`/` | division | `9 / 3 = 3`
`%` | modulo (reste) | `10 % 4 = 2`

**Note** : Si les deux opérandes de la division sont des entiers, le résultat sera également un entier. Par exemple, `10 / 4` retourne 2, et non 2.5 car nous ignorons le reste. Si l'un des opérandes est un double, le résultat sera un double.

**Note** : L'opération de modulo permet d'obtenir le reste de la division.
{{% /notice %}}

{{% notice tip %}}
L'opérateur d'addition (`+`) peut être utilisé pour la concaténation des chaînes de caractères (String). Par exemple :

`String name = "Patric" + "k";` est équivalent à `String name = "Patrick";`
{{% /notice %}}

### Instructions
1. Utilisez le programme ci-dessous pour pratiquer l'utilisation des opérateurs arithmétiques. Modifiez les nombres pour voir les réponses.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOperatorsPractice" target="_blank">Lancer Replit</a>

## Comparaisons : Opérateur relationnel

Passons maintenant à la comparaison des nombres, en utilisant des **opérateurs relationnels**.

Tout comme en mathématiques, nous pouvons comparer des nombres en utilisant `>`, `<`, `>=`, `<=`. Par exemple : `(3 > 2)` est `true`, une valeur booléenne.

{{% notice note %}}
Voici les opérateurs relationnels en Java :

**Opérateur** | **Description** | **Exemple**
------| ------| ------
`==` | égal à | `(3 == 3)` est `true`
`!=` | différent de | `(3 != 3)` est `false`
`>` | supérieur à | `(3 > 2)` est `true`
`<` | inférieur à | `(3 < 2)` est `false`
`>=` | supérieur ou égal à | `(3 >= 2)` est `true`
`<=` | inférieur ou égal à | `(2 <= 2)` est `true`

Note : `==` et `!=` ne peuvent être utilisés que sur des données de même type. Par exemple :
```java
int x=3; 
double y=3.0; 
x==y; // Cela produirait une erreur car x et y sont de types différents.
```

{{% /notice %}}

{{% notice tip %}}
Utiliser un seul signe égal assigne une valeur à une variable. Utiliser deux signes égaux compare les valeurs de deux éléments.

```java
age = 3;  // assigne la valeur 3 à age
age == 3; // vérifie si la valeur de age est 3
```
{{% /notice %}}

### Pratique de la comparaison

1. Utilisez le programme ci-dessous pour pratiquer l'utilisation des opérateurs de comparaison. Modifiez les nombres pour voir les réponses.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsComparisonPractice" target="_blank">Lancer Replit</a>

## Statistiques des examens !

Patrick 🐥 et 4 de ses camarades de classe viennent de passer un examen de musique dans leur classe. Voici les notes de leurs examens : Patrick(88), Tom(89), Mary(95), Chris(84), Jen(92).

Nous voulons produire un rapport statistique des notes pour toute la classe.

Ce rapport liste les notes de chaque étudiant, la moyenne des notes de la classe, et indique si la moyenne de la classe est supérieure à 60, 70, 80 ou 90 (`true` ou `false`), comme suit :

```
---------------------------
     Rapport de Notes de Musique    
---------------------------

Notes des étudiants :          
- Patrick: ...
- Tom: ...
...

Moyenne de la classe : ...
- Moyenne supérieure à 60 : ...
- Moyenne supérieure à 70 : ...
- Moyenne supérieure à 80 : ...
- Moyenne supérieure à 90 : ...
```

Écrivons ce rapport avec l'aide des opérateurs 🎵!

{{% notice note %}}

### Instructions :

1. Identifiez toutes les variables dans les commandes d'impression et déclarez-les à partir de la ligne 12 avec le type de données et la valeur corrects. Notez qu'il y a 10 variables au total, et `average` a déjà été déclaré pour vous.

   Astuce : par exemple, la variable `patrickGrade` doit être déclarée et assignée à la ligne 13 comme suit : `int patrickGrade = 88;`.

2. Calculez la moyenne correcte de la classe et attribuez-la à la variable `average` en utilisant les **opérateurs arithmétiques** tels que `+`, `-`, `*`, `/`, `%`.

   Notez qu'une moyenne se calcule comme `(total des points)`/`(nombre d'élèves