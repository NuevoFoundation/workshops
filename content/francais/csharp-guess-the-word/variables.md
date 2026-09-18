---
title: "Variables"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 10
---

## Variables

Les variables sont simplement des noms que nous pouvons attribuer à des valeurs comme des chaînes de caractères (strings), des nombres et des booléens. Nous utilisons des variables pour stocker des informations que l'ordinateur peut suivre.

Voici comment déclarer une variable nommée `str`. Nous disons que `str` a la valeur `"Hello World"`. Pouvez-vous décrire ce que signifient les autres variables ci-dessous ?

```csharp
var str = "Hello World";
var x = 88;
var happy = true;
```

Appuyez sur **run**. Notez que les variables ne sont pas affichées dans la console. Au lieu de cela, la variable stocke simplement la chaîne, le nombre ou le booléen dans la mémoire de l'ordinateur.

![alt text height="600px" width="70%"](../media/variables-intro.png "Introduction aux variables")

Nous pouvons utiliser ces variables dans d'autres instructions. Par exemple, le code suivant affichera `Hello Nuevo Foundation` dans la console :

```csharp
var str1 = "Hello";
var str2 = "Nuevo Foundation";
Console.WriteLine(str1 + " " + str2);
```

![alt text height="600px" width="70%"](../media/variables-strings.png "Variables avec des chaînes de caractères")

Vous pouvez changer la valeur d'une variable à tout moment en utilisant à nouveau l'opérateur `=`. Si vous changez la valeur d'une variable, vous n'avez pas besoin de réutiliser `var`. Dans l'exemple suivant, `Hola` sera affiché au lieu de `Hello`.

```csharp
var str = "Hello";
str = "Hola";
Console.WriteLine(str);
```

![alt text height="600px" width="70%"](../media/variables-replace.png "Variables remplaçant des valeurs")

Voici un autre exemple : `10` sera affiché au lieu de `9`.

```csharp
var num = 9;
num = num + 1;
Console.WriteLine(num);
```

![alt text height="600px" width="70%"](../media/variables-numbers.png "Variables avec des nombres")

Notez que vous NE POUVEZ PAS remplacer une variable de type chaîne (string) par un nombre ou un booléen, et cela fonctionne de façon similaire pour d'autres combinaisons. Le code suivant NE FONCTIONNERA PAS :

```csharp
var happy = "Hello";
happy = 9;
```

![alt text height="600px" width="70%"](../media/variables-invalid.png "Variables invalides")

Une autre façon de déclarer des variables est de remplacer `var` par le type (`string`, `int`, `bool`) de variable que vous créez. En déclarant explicitement le type, vous évitez le problème que nous avons vu ci-dessus. Par exemple :

```csharp
string str = "Hello World";
int x = 88;
bool happy = true;
```

Notez que `var`, `string`, `int`, ou `bool` sont des mots-clés spécifiques en C#, vous ne pouvez donc pas créer de variables portant ces noms.

{{% notice tip %}}

## Travaillons ensemble

Créons deux nouvelles variables :

- Une variable nommée `comp` qui stocke la chaîne de caractères `"Computer"`.
- Une variable nommée `five` qui stocke le nombre `5`.

Ensuite, utilisons les variables pour afficher (`Console.WriteLine`) ce qui suit dans la console. Essayons de le faire en utilisant les variables !

**_Astuce :_** nous utiliserons l'opérateur `+` pour combiner des chaînes de caractères ou pour additionner des nombres.

```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Variables - Éditeur .NET Fiddle" frameborder="0"></iframe>

{{% /notice %}}