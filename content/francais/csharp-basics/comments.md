---
title: "Commentaires"
description: "Introduire des commentaires en C#."
date: 2024-09-16T00:00:00Z
weight: 3
---

## Ajouter un Commentaire

Lors de la création d'un programme en C#, vous pouvez ajouter des notes en utilisant les commentaires sur une seule ligne avec `//` ou des commentaires multi-lignes utilisant `/*` et `*/` (Remarque : Les instructions dans les activités précédentes étaient écrites en tant que commentaires).

De plus, ajouter des commentaires n’affectera en rien le programme. Vous pouvez donc répartir des commentaires dans votre code pour documenter son fonctionnement, que ce soit pour vous ou pour d'autres développeurs.

```c#
     // exemple de commentaire sur une seule ligne

     /* exemple
      * de commentaire
      * multi-ligne */
```

## Jouez avec les Commentaires

Dans le cadre .NET Fiddle ci-dessous, ajoutez un commentaire sur une seule ligne et un commentaire multi-ligne à votre programme.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" title="Exercice interactif sur les commentaires en C#" frameborder="0"></iframe>

{{% notice tip %}}

Vous pouvez commenter votre code afin que l'ordinateur ne l'exécute pas.

```c#
Console.Write("J'aime manger");
// Console.Write("des pommes.");
```

Cela écrira "J'aime manger" dans la console mais n'écrira pas "des pommes".
{{% /notice %}}