---
title: "Écrire sur la Console"
description: "Introduire les méthodes d'impression en C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Votre premier programme C#

Notre premier exercice est de se familiariser avec la structure d'une application C# simple qui écrit sur la console.

Essayons de lancer un programme C# qui imprime `Hello World` sur la console. La ligne de code `Console.WriteLine ("Hello World");` fait cela pour nous. Elle indique à l'ordinateur d'écrire ce qui est entre les () à l'écran.

### Écrivons un peu de code !

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

Dans le cadre .NET Fiddle ci-dessus, ajoutez une nouvelle ligne de code sous la première ligne pour imprimer "Hello *votre nom*". Cela devrait ressembler à ceci.

<img src="../images/Step1.png" height="300" alt="L'écran de départ d'un fiddle" />

Vous devriez voir votre sortie en bas de l'écran. Cool non ?

Essayons d'imprimer d'autres choses. Ajoutez des lignes de code supplémentaires pour :
1. Imprimer des nombres en mettant des nombres dans les parenthèses (c'est-à-dire `Console.WriteLine(42);`). Pas besoin de guillemets.
2. Mettre du texte ensemble (c'est-à-dire `Console.WriteLine("Hi " + "Sally");`)

{{% notice tip %}}
### Avez-vous remarqué que toutes les instructions que vous avez tapées s'impriment sur des lignes différentes ?

Parfois, nous voulons écrire sur la même ligne. Nous utilisons un code légèrement différent `Console.Write` à la place de `Console.WriteLine`.

Ajoutez deux lignes de code :
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

Et essayez.
{{% /notice %}}

{{% notice warning %}}
### !! Important !! Parfois, vous ne pouvez pas simplement mettre des caractères entre " "

Lors de la mise de caractères entre `" "` dans une instruction d'impression, il est parfois facile de confondre l'ordinateur sur les caractères à imprimer.

Par exemple, comment dire à l'ordinateur d'imprimer `"` ?

Si vous tapez `Console.WriteLine(""");`, vous obtiendrez une erreur car l'ordinateur ne peut pas identifier où le texte se termine !

Certains caractères doivent être <b>échappés</b> en ajoutant un `\` devant.

```csharp
Console.Writeline("\"");`  // cela imprime "
```
{{% /notice %}}