---
title: "Opérateurs Booléens"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 9
---

## Opérateurs Booléens

Vous pouvez également connecter des expressions booléennes ensemble en utilisant les opérateurs `&&` (ET) et `||` (OU). Par exemple, supposons que je demande : "Êtes-vous un humain et Nuvi est-il un robot ?" Le mot "et" connecte les deux questions vraies ou fausses ensemble. Dans ce cas, puisque c'est vrai que vous êtes un humain, et c'est également vrai que Nuvi est un robot, alors le résultat global est `true`.

Voici un tableau décrivant ce qui se passe lorsque nous connectons des booléens ensemble :

| Expression       | Résultat | Expression                            | Résultat |
| ---------------- | -------- | ------------------------------------- | -------- |
| `true && true`   | `true`   | <code>true &#124;&#124; true</code>   | `true`   |
| `true && false`  | `false`  | <code>true &#124;&#124; false</code>  | `true`   |
| `false && true`  | `false`  | <code>false &#124;&#124; true</code>  | `true`   |
| `false && false` | `false`  | <code>false &#124;&#124; false</code> | `false`  |

En résumé, `&&` exige que les deux expressions booléennes soient vraies, tandis que `||` nécessite seulement qu'une des deux expressions booléennes soit `true`. Voici quelques exemples supplémentaires :

- `(5 < 8) && (9 != 10)` produit `true` puisque à la fois `5` est inférieur à `8` et `9` est différent de `10`.
- `(8 <= 2) || ("h" + "e" == "he")` produit `true` puisque `"h" + "e"` donne `"he"`, même si `8` n'est pas inférieur ou égal à `2`.
- `(6 != 2 * 3) || (8 < 2 * 4)` produit `false` puisque à la fois `6` n'est pas différent de `2 * 3`, et `8` n'étant pas inférieur à `2 * 4`, produisent `false`.

![alt text height="600px" width="70%"](../media/booleans-advanced.png "Combinaison des booléens")

{{% notice tip %}}

## Travailler Ensemble

Essayez de deviner les réponses aux expressions suivantes. Utilisez `Console.WriteLine` pour afficher les réponses.

- `(9 < 10) && (12 => 11)`
- `(15 - 2 == 11) || (4 % 3 != 2)`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Opérateurs Booléens - éditeur .NET Fiddle" frameborder="0"></iframe>

{{% /notice %}}