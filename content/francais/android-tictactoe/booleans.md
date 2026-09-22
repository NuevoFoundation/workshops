```markdown
---
title: "Booleans"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 9
---
Les booléens sont des affirmations vraies ou fausses. Contrairement aux chaînes de caractères ou aux nombres, les booléens stockent des déclarations de vérité : est-ce que ce que je dis est vrai ou faux ? Par exemple, si je demande : "Es-tu un robot ?", cette question produit un résultat vrai ou faux que nous appelons un booléen. Dans ce cas, puisque tu n'es pas un robot (espérons-le !), nous produirions "false". Nous pouvons également utiliser des opérateurs mathématiques pour créer des expressions booléennes. Voici quelques exemples, cependant, remarquez les symboles inhabituels pour "égal à" et "différent de" :

| Opérateur | Description           | Opérateur | Description                |
| --------- | --------------------- | --------- | -------------------------- |
| `<`       | Moins que             | `>`       | Plus grand que             |
| `<=`      | Moins que ou égal à   | `>=`      | Plus grand ou égal à       |
| `==`      | Égal à                | `!=`      | Pas égal à                 |

Comme d'habitude, utilisez `System.out.println` pour afficher vos résultats :

```kotlin
System.out.println(10 < 8);
System.out.println((3 * 6) == (32 - 14));
```
{{% notice tip %}}
## Travailler ensemble

Supprimez tout le texte `System.out.println` dans votre code. Essayez de deviner les réponses aux expressions suivantes. Utilisez `System.out.println` pour vérifier vos réponses.

- 54 < (10 + 32)
- (37 / 5) == 7
- "Hello" + "World" == "Hello World"
- false == false
{{% /notice %}}

## Opérateurs Booléens

Vous pouvez également connecter des expressions booléennes ensemble en utilisant les opérateurs `&&` (ET) et `||` (OU). Par exemple, supposons que je demande : "Es-tu un humain, et Nuvi est-il un robot ?" Le mot "et" connecte les deux questions vrai-faux ensemble. Dans ce cas, puisqu'il est vrai que tu es un humain, et qu'il est également vrai que Nuvi est un robot, le résultat global est `true`. Voici un tableau qui décrit ce qui se passe lorsque nous connectons des booléens ensemble :  

| Expression                  | Résultat  | Expression                             | Résultat |
| --------------------------- | --------- | -------------------------------------- | -------- |
| <code>true && true</code>   | `true`    | <code>true &#124;&#124; true</code>    | `true`   |
| <code>true && false</code>  | `false`   | <code>true &#124;&#124; false</code>   | `true`   |
| <code>false && true</code>  | `false`   | <code>false &#124;&#124; true</code>   | `true`   |
| <code>false && false</code> | `false`   | <code>false &#124;&#124; false</code>  | `false`  | 

Pour résumer, `&&` exige que les deux expressions booléennes soient vraies, tandis que `||` exige seulement qu'une des deux expressions booléennes soit vraie. Voici quelques exemples supplémentaires :

- `(5 < 8) && (9 != 10)` produit `true` car à la fois 5 est inférieur à 8 et 9 n'est pas égal à 10.
- `(6 != 2 * 3) || (8 < 2 * 4)` produit `false` car à la fois 6 n'est pas différent de 2 * 3, et 8 n'est pas inférieur à 2 * 4 produisent `false`.
```