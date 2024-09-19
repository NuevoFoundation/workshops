---
title: "Commentaires"
description: "Introduire des commentaires en C#."
date: 2024-09-16T00:00:00Z
weight: 3
---

## Ajouter un Commentaire

Lors de la création d'un programme C#, nous pouvons prendre des notes en ajoutant un commentaire sur une ligne avec `//` ou un commentaire multi-lignes avec `/*` et `*/` (Remarque : Les instructions des activités précédentes étaient écrites sous forme de commentaires).

De plus, ajouter des commentaires n'affectera pas le programme. Vous pouvez donc ajouter des commentaires dans votre code pour documenter son fonctionnement pour vous et d'autres programmeurs.

```c#
     // exemple de commentaire sur une ligne

     /* exemple
      * de commentaire
      * multi-lignes */
```

## Expérimenter avec les Commentaires

Dans le cadre .NET Fiddle ci-dessous, ajoutez un commentaire sur une ligne et un commentaire multi-lignes à votre programme.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" frameborder="0"></iframe>

{{% notice tip %}}

Vous pouvez commenter votre code pour que l'ordinateur ne l'exécute pas.

```c#
Console.Write("J'aime manger");
// Console.Write("des pommes.");
```

Écrira "J'aime manger" dans la console mais n'écrira pas "des pommes".
{{% /notice %}}