---
title: "Variables et Types de Données"
description: "Introduction aux types et variables en C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## Variables : Nommez-les !

Dans le premier exercice, nous avons appris à afficher différentes déclarations avec `Console.WriteLine()` et `Console.Write()`.

Bien qu'il soit intéressant d'afficher un nombre ou une phrase, nous ne leur avons pas donné de signification et, si nous souhaitions réutiliser cette phrase ou ce nombre, nous devrions les retaper.

En C#, nous introduisons l'idée de **variable** pour les données. Une variable stocke une donnée avec un nom.

Par exemple, il peut y avoir une variable appelée `myName` qui se voit attribuer la valeur `"Ann"`. Une autre variable pourrait s’appeler `age`, et elle est attribuée au nombre `12`.

## Quel Type !

Alors, comment créons-nous ces variables en C# pour stocker des données ?

Avant d'apprendre à créer des variables, nous devons comprendre le concept de **type de donnée** en C#, ou simplement **type**. En C#, le type décrit ce qui est stocké. Si vous avez une variable de type nombre, elle ne pourra contenir que des nombres, pas des phrases ou des symboles. Chaque variable possède son propre type qui contrôle le type de données qu’elle peut contenir.

Par exemple, nous pourrions avoir une variable appelée `age` qui stocke le nombre `12`. Si vous essayez de stocker le mot `"douze"` dans `age`, cela générera une erreur, car cette variable ne comprend que les nombres.

En C#, pour qu'une variable stocke des nombres entiers, nous utilisons le type `int`. Nous déclarons une variable `int` appelée `age` avec la donnée `12` grâce à la ligne de code suivante :

```
int age = 12;
```

De manière générale, pour déclarer une variable, nous écrivons dans le format : `[type de donnée] [nom de la variable] = [donnée];`.
{{% notice note %}}
Les types de données suivants sont importants et intégrés en C# :

**Type** | **Description** | **Exemples**
--------|-----------|----------
`int` | entier | `20`, `30`, `35`
`char` | caractère, tel qu'un symbole ou une lettre alphabétique unique | `'A'`,`'b'`, `'('`, `']'`
`string` | une séquence de `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | booléen, a une valeur soit `true` soit `false` | `true`, `false`
`double` | nombres fractionnaires | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Utilisons notre exemple précédent. Pour déclarer ces variables en C#, nous tapons ce qui suit :

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

La dernière variable est intrigante. Elle ne peut avoir qu'une valeur de `true` ou `false`. Nous verrons que cela peut être très utile dans des sections plus avancées de cet atelier.

## Expérimentons avec les Variables

Voyons ce que nous pouvons faire avec des variables.

Dans le cadre interactif .NET Fiddle ci-dessous, dupliquez le Fiddle et essayez d'entrer ces lignes, puis **exécutez** :

```C#
int age = 10;
Console.WriteLine(age); // affiche 10
age = 12; // assigne la valeur 12 à la variable age
Console.WriteLine(age); // affiche 12
```

Nous pouvons attribuer une valeur à une variable, la référencer, puis modifier sa valeur.  

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" title="Exercice interactif C# sur les variables" frameborder="0"></iframe>

## Quel Type — Aidons Patrick !

Patrick 🐥 n'est pas un expert en types de données ! Il les confond souvent lorsqu'il déclare des variables. Aidons-le à corriger ses erreurs dans le .NET Fiddle ci-dessous.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" title="Exercice interactif C# sur les types de données" frameborder="0"></iframe>