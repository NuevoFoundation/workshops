---
title: "Variables and Data Types"
description: "Introduce types and variables in C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## Variables: Name It!

Dans le premier exercice, nous avons appris à imprimer différentes déclarations avec `Console.WriteLine() et Console.Write()`.

Bien qu'il soit agréable d'imprimer un nombre ou une phrase, nous ne leur avons pas donné de sens et si nous voulions réutiliser la phrase ou le nombre, nous devrions les retaper.

En C#, nous introduisons l'idée d'une **variable** pour les données. Une variable stocke une donnée avec un nom.

Par exemple, il peut y avoir une variable appelée `myName` qui est assignée à la valeur `"Ann"`. Une autre variable pourrait s'appeler `age` et elle est assignée au nombre `12`.

## What the Type!

Alors, comment créons-nous ces variables en C# pour stocker des données ?

Avant d'apprendre à créer des variables, nous devons comprendre le concept de **type de données** en C# ou simplement **type** pour faire court. Le type en C# décrit ce qui est stocké. Si vous avez une variable de nombre, elle ne peut contenir que des nombres, pas des phrases ou des symboles. Chaque variable a son propre type qui contrôle le genre de données qu'elle peut contenir.

Par exemple, nous pourrions avoir une variable appelée `age` qui stocke le nombre `12`. Si vous essayez de stocker le mot `"twelve"` dans `age`, cela générera une erreur car il ne connaît que les nombres.

En C#, pour qu'une variable stocke des nombres entiers, utilisez le type `int`. Nous déclarons une variable `int` appelée `age` avec la donnée `3` avec la ligne de code :

```
int age = 12;
```
En général, pour déclarer une variable, nous les écrivons au format : `[type de données] [nom de la variable] = [donnée];`.
{{% notice note %}}
Voici les types de données importants intégrés en C# :

**Type** | **Description** | **Exemples**
--------|-----------|----------
`int` | entier | `20`, `30`, `35`
`char` | caractère tel qu'un symbole ou une seule lettre de l'alphabet | `'A'`, `'b'`, `'('`, `']'`
`string` | une séquence de `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | booléen, a une valeur soit `true` soit `false` | `true`, `false`
`double` | nombres fractionnaires | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Utilisant notre exemple précédent, pour déclarer ces variables en C#, nous tapons ce qui suit :

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

La dernière variable est intéressante. Elle ne peut avoir qu'une valeur de `true` ou `false`. Nous verrons que cela peut être très utile dans les sections plus avancées de cet atelier.

## Play with variables

Voyons ce que nous pouvons faire avec les variables.

Dans le cadre .NET Fiddle ci-dessous, forkez le Fiddle et essayez d'entrer ces lignes et **exécutez** :

```C#
int age = 10;
Console.WriteLine(age); // affiche 10
age = 12; // assigne la donnée 12 à la variable age
Console.WriteLine(age); // affiche 12
```
Nous pouvons assigner une valeur à une variable, la référencer, puis changer la valeur.  

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## What the Type -- Help Patrick!

Patrick 🐥 n'est pas un maître des types de données ! Il les mélange souvent lorsqu'il déclare des variables. Aidons-le à corriger ses erreurs dans le .NET Fiddle ci-dessous.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>