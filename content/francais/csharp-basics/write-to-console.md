---
title: "Écrire dans la Console"
description: "Introduction aux méthodes d'impression en C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Votre premier programme C#

Notre premier exercice consiste à se familiariser avec la structure d'une application C# simple qui écrit dans la console.

Essayons d'exécuter un programme C# qui affiche `Hello World` dans la console. La ligne de code `Console.WriteLine ("Hello World");` fait cela pour nous. Elle indique à l'ordinateur d'écrire ce qui se trouve entre les parenthèses à l'écran.

### Écrivons un peu de code !

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

Dans le cadre .NET Fiddle ci-dessus, ajoutez une nouvelle ligne de code sous la première ligne pour imprimer "Hello *votre nom*". Cela devrait ressembler à ceci.

<img src="../images/Step1.png" height="300" alt="L'écran de départ d'un fiddle" />

Vous devriez voir votre résultat en bas de l'écran. Sympa, non ?

Essayons maintenant d'imprimer d'autres choses. Ajoutez des lignes de code supplémentaires pour :
1. Imprimer des nombres en les mettant entre parenthèses (par exemple, `Console.WriteLine(42);`). Pas besoin de guillemets doubles.
2. Combiner du texte (par exemple, `Console.WriteLine("Bonjour " + "Sally");`).

{{% notice tip %}}
### Avez-vous remarqué que toutes les instructions que vous avez tapées s'imprimaient sur des lignes différentes ?

Parfois, nous voulons écrire sur la même ligne. Pour cela, nous utilisons un code légèrement différent : `Console.Write` au lieu de `Console.WriteLine`.

Ajoutez deux lignes de code :
```csharp
Console.Write("J'aime manger ");
Console.Write("des pommes.");
```

Et essayez.
{{% /notice %}}

{{% notice warning %}}
### !! Important !! Parfois, vous ne pouvez pas simplement mettre des caractères entre " "

Lorsque vous placez des caractères entre les guillemets `" "` dans une instruction d'impression, il peut parfois être facile de confondre l'ordinateur sur les caractères à imprimer.

Par exemple, comment dire à l'ordinateur d'imprimer `"` ?

Si vous tapez `Console.WriteLine(""");`, vous obtiendrez une erreur car l'ordinateur ne peut pas identifier où se termine le texte !

Dans ce cas, certains caractères doivent être <b>échappés</b> en ajoutant un `\` devant.

```csharp
Console.Writeline("\"");  // cela imprime "
```
{{% /notice %}}