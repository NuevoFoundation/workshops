---
title: "Opérateurs"
description: "Introduire les opérateurs et effectuer des opérations sur les variables en C#."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Faisons des Maths : Opérateur Arithmétique

Dans le dernier exercice, nous avons appris les variables et comment nous pouvons attribuer des valeurs à une variable d'un type spécifique, comme :

```C#
int age = 3;  // déclarer la variable age de type int avec la valeur 3
age = 4;      // attribuer 4 à la variable age
```

En regardant le code ci-dessus, cela ajoute essentiellement 1 à la valeur de la variable `age`.

Et, en C#, nous pouvons effectuer des opérations mathématiques sur les variables directement avec les **opérateurs arithmétiques** : `+`, `-`, `*`, `/`, `%`.
Par exemple, nous pouvons utiliser l'opérateur d'addition `+` pour ajouter 1 à `age` :

```c#
int age = 3;  // déclarer la variable age de type int avec la valeur 3
age = age + 1;// ajouter 1 à age
```

{{% notice note %}}
Les opérateurs arithmétiques en C# sont les suivants :

**Opérateur** | **Description** | **Exemple**
------|------|--------
`+` | addition | `1 + 1 = 2`
`-` | soustraction | `2 - 1 = 1`
`*` | multiplication | `3 * 3 = 9`
`/` | division | `9 / 3 = 3`
`%` | modulo/reste | `10 % 4 = 2`

**Note** : Si les deux opérandes de la division sont des entiers, le résultat sera également un entier. Par exemple, `10 / 4` renvoie 2, pas 2.5 puisqu'on néglige le reste. Si l'un des opérandes est un double, le résultat sera un double.

**Note** : Utilisez l'opération de modulo (`%`) pour obtenir le reste de l'opération de division.

{{% /notice %}}

{{% notice tip %}}
L'opérateur d'addition (`+`) est utilisé sur les chaînes comme opérateur de concaténation. Par exemple :

`String name = "Patric" + "k";` est équivalent à `String name = "Patrick";`
{{% /notice %}}

### Instructions
1. Utilisez le programme ci-dessous pour vous exercer à utiliser les opérateurs arithmétiques. Changez les nombres pour voir les réponses.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/dUSTOt" frameborder="0"></iframe>

## Comparaisons : Opérateur Relationnel

Ensuite, apprenons comment comparer des nombres, en utilisant les **opérateurs relationnels**.

Tout comme en mathématiques, nous pouvons comparer des nombres en utilisant `>`, `<`, `>=`, `<=`. Par exemple : `(3 > 2)` est `true`, une valeur booléenne.

{{% notice note %}}
Les opérateurs relationnels en C# sont les suivants :

**Opérateur** | **Description** | **Exemple**
------| ------| ------
`==` | égal à | `(3 == 3)` est `true`
`!=` | différent de | `(3 != 3)` est `false`
`>` | supérieur à | `(3 > 2)` est `true`
`<` | inférieur à | `(3 < 2)` est `false`
`>=` | supérieur ou égal à | `(3 >= 2)` est `true`
`<=` | inférieur ou égal à | `(2 <= 2)` est `true`

Note : `==` et `!=` ne peuvent être utilisés que sur des données de même type. Par exemple :
```csharp
int x=3; 
double y=3.0; 
x==y; // Cela produirait une erreur car x et y sont de types différents.
```

{{% /notice %}}

{{% notice tip %}}
Utiliser un signe égal assigne une valeur à la variable. Utiliser deux signes égaux compare les valeurs de deux éléments.

```csharp
age = 3;  // fixe la valeur de age à 3
age == 3; // vérifie si la valeur de age est 3
```
{{% /notice %}}

### Pratique de la Comparaison

1. Utilisez le programme ci-dessous pour vous exercer à utiliser les opérateurs de comparaison. Changez les nombres pour voir les