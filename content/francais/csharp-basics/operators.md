```markdown
---
title: "Opérateurs"
description: "Introduction aux opérateurs et opérations sur les variables en C#."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Faisons des Maths : Opérateurs Arithmétiques 

Dans le dernier exercice, nous avons appris à utiliser des variables et comment attribuer des valeurs à une variable d'un type spécifique, comme :

```C#
int age = 3;  // déclare la variable age de type int et lui attribue la valeur 3
age = 4;      // attribue 4 à la variable age
```

En regardant le code ci-dessus, il ajoute essentiellement 1 à la valeur de la variable `age`.

En C#, nous pouvons effectuer des opérations mathématiques directement sur les variables avec les **opérateurs arithmétiques** : `+`, `-`, `*`, `/`, `%`.
Par exemple, nous pouvons utiliser l'opérateur d'addition `+` pour ajouter 1 à `age` :

```c#
int age = 3;  // déclare la variable age de type int avec la valeur 3
age = age + 1;// ajoute 1 à age
```

{{% notice note %}}
Les opérateurs arithmétiques en C# sont les suivants :

**Opérateur** | **Description** | **Exemple**
------|------|--------
`+` | addition | `1 + 1 = 2`
`-` | soustraction | `2 - 1 = 1`
`*` | multiplication | `3 * 3 = 9`
`/` | division | `9 / 3 = 3`
`%` | modulateur/reste | `10 % 4 = 2`

**Remarque** : Si les deux opérandes de la division sont des entiers, le résultat sera également un entier. Par exemple, `10 / 4` renvoie 2, et non 2.5, car nous rejetons le reste. Si l'un des opérandes est un double, le résultat sera un double.

**Remarque** : Utilisez l'opération de modulateur (`%`) pour obtenir le reste d'une division.

{{% /notice %}}

{{% notice tip %}}
L'opérateur d'addition (`+`) est utilisé sur les chaînes de caractères pour les concaténer. Par exemple :

`String name = "Patric" + "k";` est équivalent à `String name = "Patrick";`
{{% /notice %}}

### Instructions

1. Utilisez le programme ci-dessous pour pratiquer l'utilisation des opérateurs arithmétiques. Modifiez les nombres pour voir les réponses.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/dUSTOt" title="Exercice interactif sur les opérateurs arithmétiques en C#" frameborder="0"></iframe>

## Comparaisons : Opérateurs Relationnels 

Ensuite, apprenons à comparer des nombres en utilisant les **opérateurs relationnels**.

Comme en mathématiques, nous pouvons comparer des nombres en utilisant `>`, `<`, `>=`, `<=`. Par exemple : `(3 > 2)` est `true`, une valeur booléenne.

{{% notice note %}}
Les opérateurs relationnels en C# sont les suivants :

**Opérateur** | **Description** | **Exemple**
------| ------| ------
`==` | égal à | `(3 == 3)` est `true`
`!=` | pas égal à | `(3 != 3)` est `false`
`>` | supérieur à | `(3 > 2)` est `true`
`<` | inférieur à | `(3 < 2)` est `false`
`>=` | supérieur ou égal à | `(3 >= 2)` est `true`
`<=` | inférieur ou égal à | `(2 <= 2)` est `true`

Remarque : `==` et `!=` peuvent uniquement être utilisés sur des données du même type. Par exemple :
```csharp
int x=3; 
double y=3.0; 
x==y; // Cela produirait une erreur car x et y sont de types différents.
```

{{% /notice %}}

{{% notice tip %}}
Utiliser un seul signe égal attribue une valeur à une variable. Utiliser deux signes égaux compare les valeurs de deux éléments.

```csharp
age = 3;  // attribue la valeur 3 à age
age == 3; // vérifie si la valeur d'age est 3
```
{{% /notice %}}

### Pratique de Comparaison

1. Utilisez le programme ci-dessous pour pratiquer l'utilisation des opérateurs de comparaison. Modifiez les nombres pour voir les réponses.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/tZs8tb" title="Exercice interactif sur les opérateurs de comparaison en C#" frameborder="0"></iframe>

## Statistiques d'Examen !

Patrick 🐥 et 4 de ses camarades de classe viennent de passer un examen de musique dans cette classe. Voici les notes de leurs examens : Patrick(88), Tom(89), Mary(95), Chris(84), Jen(92).

Nous voulons produire un rapport sur les statistiques des notes de toute la classe.

Ce rapport liste la note de chaque étudiant, la moyenne de la classe, et indique si la moyenne de la classe dépasse 60, 70, 80, 90 (`true` ou `false`), comme indiqué ci-dessous :

```
---------------------------
     Rapport de Notes de Musique    
---------------------------

Notes des Étudiants :          
- Patrick: ...
- Tom: ...
...

Moyenne de la Classe: ...
- Moyenne Supérieure à 60: ...
- Moyenne Supérieure à 70: ...
- Moyenne Supérieure à 80: ...
- Moyenne Supérieure à 90: ...
```

Écrivons le code avec l'aide des opérateurs 🎵!

{{% notice note %}}

### Instructions :

1. Identifiez toutes les variables dans les instructions d'impression et déclarez-les à partir de la ligne 12 avec le type de données et la valeur corrects. Notez qu'il y a 10 variables au total, et `average` est déjà déclarée pour vous.

   Conseil : par exemple, la variable `patrickGrade` doit être déclarée et assignée à la ligne 13 comme suit `int patrickGrade = 88;`.

2. Calculez la moyenne correcte de la classe et attribuez-la à la variable `average` en utilisant les **opérateurs arithmétiques** tels que `+`, `-`, `*`, `/`, `%`. Assurez-vous d'utiliser des parenthèses autour du nombre total de points.

   Notez qu'une moyenne est `(total des points)`/`(nombre d'étudiants)`.

3. Attribuez aux variables `over60`, `over70`, `over80`, `over