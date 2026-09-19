---
title: "Nombres"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 7
---

## Nombres

L'ordinateur peut également effectuer des calculs mathématiques classiques que vous voyez à l'école. Utilisez `Console.WriteLine` pour afficher le résultat des expressions mathématiques. Les guillemets ne sont pas nécessaires pour les nombres !

```csharp
Console.WriteLine(5 + 4);
Console.WriteLine(6 * (9 - 7) / 3);
```

![texte alternatif height="600px" width="70%"](../media/numbers-intro.png "Impression des nombres")

Voici la liste complète des symboles mathématiques que vous pouvez utiliser :

| Opérateur | Description    | Opérateur     | Description        |
| --------- | -------------- | ------------- | ------------------ |
| `+`       | Addition       | `\`           | Division           | 
| `-`       | Soustraction   | `%`           | Modulo (reste)     |
| `*`       | Multiplication | `(`,`)`       | Parenthèses        |

{{% notice info %}}

## Fait amusant : Division par ordinateur

L'ordinateur effectue la division différemment de votre calculatrice classique. La division par ordinateur exclut les restes ou les décimales. Par exemple, `15 / 4` donne `3` et non `3.75`.

{{% /notice %}}

{{% notice tip %}}

## Travailler ensemble

Essayez d’afficher les réponses aux expressions suivantes sur la console. Assurez-vous que vos parenthèses sont correctement assorties. Utilisez une calculatrice (ou faites les calculs mentalement) pour vérifier que l'ordinateur a fourni la bonne réponse.

- `2 - 19`
- `(3 + 5) * 6`
- `(13 + 5 * 8) / (6 - (3 + 7))`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Nombres - éditeur .NET Fiddle" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## Fait amusant : Nombres aléatoires

Voici comment afficher un nombre aléatoire entre `1` (inclus) et `10` (exclu) :

```csharp
Random random = new Random();
Console.WriteLine(random.Next(1, 10));
```

Essayez de trouver où nous utilisons `Random` dans le jeu GuessTheWord ! Cependant, les détails de son fonctionnement sont complexes, donc nous ignorons cette discussion.

{{% /notice %}}