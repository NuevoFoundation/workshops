---
title: "Écrire dans la console"
description: "Introduction aux méthodes d'impression en C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Votre premier programme en C#

Notre premier exercice consiste à se familiariser avec la structure d’une simple application en C# qui écrit dans la console.

Essayons d'exécuter un programme C# qui affiche `Hello World` dans la console. La ligne de code `Console.WriteLine ("Hello World");` fait cela pour nous. Elle indique à l'ordinateur d'écrire tout ce qui se trouve entre les parenthèses () à l'écran.

### Écrivons du code !

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

Dans l'encadré .NET Fiddle ci-dessus, ajoutez une nouvelle ligne de code sous la première ligne pour afficher "Hello *votre nom*". Cela devrait ressembler à ceci.

<img src="../images/Step1.png" height="300" alt="L'écran de départ d'un fiddle" />

Vous devriez voir votre sortie en bas de l'écran. Sympa, non ?  

Essayons d'imprimer d'autres choses. Ajoutez des lignes de code supplémentaires pour :
1. Afficher des nombres en mettant des nombres dans les parenthèses (par exemple `Console.WriteLine(42);`). Pas besoin de guillemets.
2. Combiner du texte (par exemple `Console.WriteLine("Salut " + "Sally");`)

{{% notice tip %}}
### Avez-vous remarqué que toutes les instructions que vous avez tapées s'affichent sur des lignes différentes ?

Parfois, nous voulons écrire sur la même ligne. Nous utilisons un code légèrement différent, `Console.Write` au lieu de `Console.WriteLine`.

Ajoutez deux lignes de code :
```csharp
Console.Write("J'aime manger ");
Console.Write("des pommes.");
```

Et essayez.
{{% /notice %}}

{{% notice warning %}}
### !! Important !! Parfois, vous ne pouvez pas simplement mettre des caractères entre " "

En mettant des caractères entre `" "` dans une instruction d'impression, il peut arriver que l'ordinateur soit confus quant aux caractères à afficher.

Par exemple, comment dire à l'ordinateur d'afficher un symbole `"` ?

Si vous tapez `Console.WriteLine(""");`, vous obtiendrez une erreur parce que l'ordinateur ne peut pas identifier où le texte se termine !

Au lieu de cela, certains caractères doivent être <b>échappés</b> en ajoutant un `\` devant.

```csharp
Console.WriteLine("\"");  // cela affiche "
```
{{% /notice %}}