---
title: "Commentaires"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 2
---

## Commentaires

Les développeurs ont souvent besoin de collaborer avec d'autres développeurs. Les commentaires sont un moyen simple pour les développeurs d'écrire des notes dans le code et de communiquer avec les autres. Les commentaires sont ignorés par l'ordinateur ; ainsi, ils constituent également un moyen facile d'empêcher l'ordinateur d'exécuter certaines lignes de code. Il existe deux façons de créer des commentaires :

1. Pour commenter une seule ligne, placez `//` devant une ligne de code. Par exemple :

```csharp
// Ceci est un commentaire sur une seule ligne.
```

2. Pour commenter plusieurs lignes en même temps, indiquez le début du commentaire avec `/*` et la fin du commentaire avec `*/`. Par exemple :

```csharp
/* Ceci est un commentaire sur plusieurs lignes.
   Cette ligne fait également partie du commentaire. */
```

Pour supprimer un commentaire (ou décommenter une ligne), il suffit de supprimer les caractères `//` pour un commentaire sur une seule ligne, ou de retirer les caractères `/*` et `*/` pour un commentaire sur plusieurs lignes.

{{% notice tip %}}

## Travailler ensemble

1. Placez `//` devant `Console.WriteLine("Hello World");`. Après avoir appuyé sur **run**, vérifiez que `Hello World` ne s'affiche pas dans la console.
2. Supprimez le `//` et entourez à la place `Console.WriteLine("Hello World");` avec `/*` et `*/`. Vérifiez que `Hello World` n'est toujours pas affiché dans la console après avoir appuyé sur **run**.
3. Supprimez à la fois les caractères `/*` et `*/`, et appuyez sur **run**. `Hello World` devrait maintenant s'afficher dans la console.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/pdWOTp" title="Commentaires - éditeur .NET Fiddle" frameborder="0"></iframe>

Tout au long de l'activité d'aujourd'hui, vous verrez divers commentaires sur plusieurs lignes et des commentaires `// TODO`. Ces commentaires nous guideront pour compléter le jeu Devinez le Mot, alors assurez-vous de bien comprendre comment commenter et décommenter du code.

{{% /notice %}}