---
title: "Commentaires"
description: "Introduction aux commentaires en C#."
date: 2024-09-16T00:00:00Z
weight: 3
---

## Faire un Commentaire

Lors de la création d'un programme C#, nous pouvons prendre des notes en ajoutant un commentaire sur une ligne avec `//` ou un commentaire multi-ligne avec `/*` et `*/` (Remarque : Les instructions dans les activités précédentes étaient écrites sous forme de commentaires).

De plus, ajouter des commentaires n'affectera en rien le programme. Vous pouvez donc ajouter des commentaires tout au long de votre code pour documenter son fonctionnement pour vous et les autres programmeurs.

```c#
     // commentaire sur une ligne exemple

     /* exemple de
      * commentaire
      * multi-ligne */
```

## Jouer avec les Commentaires

Dans le cadre .NET Fiddle ci-dessous, ajoutez un commentaire sur une ligne et un commentaire multi-ligne à votre programme.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" frameborder="0"></iframe>

{{% notice tip %}}

Vous pouvez commenter votre code pour que l'ordinateur ne l'exécute pas.

```c#
Console.Write("J'aime manger");
// Console.Write("des pommes.");
```

Écrira "J'aime manger" dans la console mais n'écrira pas "des pommes".
{{% /notice %}}

