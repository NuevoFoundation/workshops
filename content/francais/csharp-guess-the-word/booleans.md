---
title: "Booleans"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 8
---

## Booléens

**Les booléens** sont des déclarations `true` ou `false`. Contrairement aux chaînes de caractères ou aux nombres, les booléens stockent des affirmations de vérité : ce que je dis est-il vrai ou faux ? Par exemple, si je demande : "Êtes-vous un robot ?", cette question produit un résultat `true` ou `false`, que nous appelons un **booléen**. Dans ce cas, puisque vous n'êtes pas un robot (espérons-le !), nous produirons `false`.

Nous pouvons également utiliser des opérateurs mathématiques pour créer des expressions booléennes. Voici quelques exemples ; cependant, notez les symboles inhabituels pour "égal à" et "différent de" :

| Opérateur | Description              | Opérateur | Description                |
| --------- | ------------------------ | --------- | -------------------------- |
| `<`       | Inférieur à             | `>`       | Supérieur à               |
| `<=`      | Inférieur ou égal à     | `>=`      | Supérieur ou égal à       |
| `==`      | Égal à                  | `!=`      | Différent de               |

Comme d'habitude, utilisez `Console.WriteLine` pour afficher vos résultats :

```csharp
Console.WriteLine(10 < 8);
Console.WriteLine((3 * 6) == (32 - 14));
```

![alt text height="600px" width="70%"](../media/booleans-intro.png "Affichage des booléens")

{{% notice tip %}}

## Travailler ensemble

Essayez de deviner les réponses aux expressions suivantes. Utilisez `Console.WriteLine` pour vérifier vos réponses.

- `54 < (10 + 32)`
- `(37 / 5) == 7`
- `"Hello" + "World" == "Hello World"`
- `false == false`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Booléens - Éditeur .NET Fiddle" frameborder="0"></iframe>

{{% /notice %}}