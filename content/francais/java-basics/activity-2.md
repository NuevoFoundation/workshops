```markdown
---
title: "Variables et Types"
description: "Introduction aux types et variables en Java."
date: 2021-10-13T00:00:00Z
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/KE0fNb-hTKE" title="Vidéo sur les variables et types en Java" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Variables : Nommez-les !

Dans l'exercice précédent, nous avons appris à afficher différentes instructions avec `System.out.print()`.

Bien qu'il soit utile d'afficher un nombre ou une phrase, nous ne leur avons pas attribué de sens.

En Java, nous introduisons l'idée de **variable** pour représenter les données. Une variable est comme une boîte qui stocke une donnée avec un nom.

Par exemple, il peut y avoir une variable appelée `myName` qui stocke `"Patrick"`, une autre variable appelée `loveMusic` qui stocke `true`, et une autre variable appelée `age` qui stocke `3`. Tout comme sur l'image ci-dessous :

<img src="../images/variable.png" height="200" alt="3 boîtes. La première boîte a un texte blanc à l'extérieur, myName, et un texte blanc à l'intérieur, 'Patrick'. La deuxième boîte a un texte blanc à l'extérieur, loveMusic, et un texte blanc à l'intérieur, true. La troisième boîte a un texte blanc à l'extérieur, age, et un texte blanc à l'intérieur, 3."/>

## Quel type !

Alors, comment créons-nous ces boîtes ou variables en Java pour stocker des données ?

Avant d’apprendre à déclarer des variables, nous devons comprendre le concept de **type** en Java. Le type en Java décrit ce qui est stocké dans la boîte. Si vous avez une boîte pour des entiers, elle ne contiendra que des entiers, pas des phrases ou des symboles. Chaque variable a son propre type, qui la contraint à stocker un type spécifique de données.

Par exemple, la variable appelée `age` qui contient le nombre `3` doit uniquement contenir des entiers, pas des phrases ou des symboles.

En Java, pour qu’une variable stocke des nombres entiers, son type est `int`. Et nous déclarons une variable de type `int` appelée `age` avec la donnée `3` à l'aide de la ligne de code suivante :

```java
int age = 3;
```

De manière générale, pour déclarer une variable, nous utilisons le format suivant : `[type de données] [nom de variable] = [donnée];`.
{{% notice note %}}
Les types suivants sont les types de données importants intégrés dans Java :

**Type** | **Description** | **Exemples**
--------|-----------|----------
`int` | nombre entier | `20`, `30`, `35`
`char` | caractère tel qu'un symbole ou une seule lettre de l'alphabet | `'A'`,`'b'`, `'('`, `']'`
`String` | une séquence de `char` | `"Bonjour"`, `"Hello"`, `"Hola"`
`boolean` | a une valeur qui est soit `true` soit `false` | `true`, `false`
`double` | nombres fractionnaires | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Revisitons les trois variables dont nous avons parlé plus tôt et identifions leurs types de données.

<img src="../images/dataType.png" height="200" alt="3 boîtes. La première boîte a un texte blanc à l'extérieur, myName, et un texte blanc à l'intérieur, 'Patrick'. Flèche rouge pointant vers une boîte avec texte type String. La deuxième boîte a un texte blanc à l'extérieur, loveMusic, et un texte blanc à l'intérieur, true. Flèche rouge pointant vers une boîte avec texte type boolean. La troisième boîte a un texte blanc à l'extérieur, age, et un texte blanc à l'intérieur, 3. Flèche rouge pointant vers une boîte avec texte type int"/>

Pour déclarer ces variables en Java, nous écrivons les lignes suivantes :

```java
String name = "Patrick";
int age = 10;
boolean loveMusic = true;
```

## Quel type -- Aidez Patrick !

Patrick 🐥 n'est pas un expert en types de données ! Il se trompe souvent lorsqu'il déclare des variables. Aidons-le à corriger ses erreurs :

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsDataType" target="_blank">Lancer Replit</a>

{{% notice tip %}}
En stockant des données dans des variables, vous pouvez réutiliser ces données plus tard ou les modifier en leur assignant une nouvelle valeur du même type. Par exemple :

```java
int age = 10;
System.out.println(age); // affiche 10
age = 11; // assigne la valeur 11 à la variable age
System.out.println(age); // affiche 11
```

{{% /notice %}}

## Quel type -- Suivez les nombres !

Considérons maintenant le code suivant. Que pensez-vous qu'il affichera comme résultat ? Suivez les valeurs de chaque variable par vous-même, puis testez-le ci-dessous !

```java
double x = 2.3;
double y = 10.0;
int z = 4;

x = y;
y = x;
z = 0;
z = z;
System.out.println("x: " + x + " y: " + y + " z: " + z );
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsVariable" target="_blank">Lancer Replit</a>

{{% notice tip %}}
#### Explication de l'exemple
Dans les lignes 1-3, nous déclarons les variables et définissons les valeurs initiales pour `x` (2.3), `y` (10.0), et `z` (4).
Dans la ligne 4, nous attribuons à `x` la valeur de `y` (10.0).
Dans la ligne 5, nous attribuons à `y` la valeur de `x`, qui vient d'être définie à 10.0 (10.0).
Dans la ligne 6, nous attribuons à `z` la valeur 0.
Dans la ligne 7, nous attribuons à `z` la valeur de `z`, soit 0 (0).
{{% /notice %}}
```