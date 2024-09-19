---
title: "Écrire dans la Console"
description: "Introduire les méthodes d'affichage en C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Votre premier programme C#

Notre premier exercice consiste à se familiariser avec la structure d'une simple application C# qui écrit dans la console.

Essayons de lancer un programme C# qui affiche `Hello World` dans la console. La ligne de code `Console.WriteLine ("Hello World");` le fait pour nous. Elle dit à l'ordinateur d'écrire ce qui se trouve entre les () à l'écran.

### Écrivons du code !

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

Dans le cadre .NET Fiddle ci-dessus, ajoutez une nouvelle ligne de code sous la première ligne pour afficher "Hello *votre nom*". Cela devrait ressembler à ceci.

<img src="../images/Step1.png" height="300" alt="L'écran de démarrage d'un fiddle" />

Vous devriez voir votre sortie en bas de l'écran. Sympa, non ?  

Essayons d'imprimer d'autres choses. Ajoutez quelques lignes de code supplémentaires pour :
1. Imprimer des chiffres en mettant des chiffres entre parenthèses (c'est-à-dire `Console.WriteLine(42);`). Pas besoin de guillemets.
2. Assembler du texte (c'est-à-dire `Console.WriteLine("Hi " + "Sally");`)

{{% notice tip %}}
### Avez-vous remarqué que toutes les instructions que vous avez tapées s'affichent sur des lignes différentes ?

Parfois, nous voulons écrire sur la même ligne. Nous utilisons un code légèrement différent `Console.Write` au lieu de `Console.WriteLine`.

Ajoutez deux lignes de code :
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

Et essayez.
{{% /notice %}}

{{% notice warning %}}
### !! Important !! Parfois, vous ne pouvez pas simplement mettre des caractères entre " "

Lors de la mise de caractères entre `" "` dans une instruction d'affichage, il est parfois facile de confondre l'ordinateur sur les caractères à afficher.

Par exemple, comment indiquer à l'ordinateur d'afficher `"` ?

Si vous tapez `Console.WriteLine(""");`, vous obtiendrez une erreur car l'ordinateur ne peut pas identifier où le texte se termine !

Certaines caractères doivent être <b>échappés</b> en ajoutant un `\` devant.

```csharp
Console.Writeline("\"");`  // cela affiche "
```
{{% /notice %}}