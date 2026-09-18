---
title: "Strings"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 5
---

## Chaînes de caractères

Tout ce qui est entouré de guillemets est appelé une chaîne (string). C'est ainsi qu'un ordinateur représente les mots ou les phrases. Par exemple, `"a"`, `"2"`, `"banana!"`, et `"Hello World"` sont des chaînes, mais `Hello World` et `2` ne le sont pas, car les guillemets sont absents.

Vous pouvez combiner plusieurs chaînes ensemble en utilisant l'opérateur `+`. Par exemple :

- `"Apple" + "Pineapple"` produit la chaîne `"ApplePineapple"`.
- `"Nuevo" + " " + "Foundation"` produit la chaîne `"Nuevo Foundation"`.

```csharp
Console.WriteLine("Apple" + "Pineapple");
Console.WriteLine("Nuevo" + " " + "Foundation");
```

![alt text height="600px" width="70%"](../media/strings-intro.png "Combining strings with +")

{{% notice tip %}}

## Travailler Ensemble

Dans le programme Replit ci-dessous, nous avons commencé le code avec la ligne `Console.WriteLine("Nuevo" + " " + "Foundation");`.

Notez qu'il existe de nombreuses façons de combiner des chaînes ensemble. Par exemple, une autre manière d'afficher Nuevo Foundation serait d'écrire `Console.WriteLine("Nue" + "vo Fou" + "ndation");`.

Nous allons réfléchir à au moins une autre manière d'afficher la chaîne `"Nuevo Foundation"` en utilisant deux symboles `+` dans chaque instruction `Console.WriteLine`. Vérifiez que Nuevo Foundation est bien affiché 3 fois. Autrement dit, votre console devrait ressembler à ceci après avoir appuyé sur **run** :

```
Nuevo Foundation
Nuevo Foundation
Nuevo Foundation
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/itRFnP" title="Strings - .NET Fiddle editor" frameborder="0"></iframe>

{{% /notice %}}