---
title: "Conditionnels"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
Nous pouvons utiliser les instructions `if` pour exécuter un bloc de code uniquement si certaines conditions sont remplies.

Par exemple :

```kotlin
if (isRainingOutside == true) {
    takeUmbrella = true;
} else {
    takeUmbrella = false;
}
```

Pour notre jeu, nous devrions utiliser des instructions `if` pour déterminer si un joueur a 3 correspondances verticales, horizontales ou diagonales.

À l'intérieur des `()` à côté de `if`, vous devez spécifier une _expression booléenne_. Les **booléens** sont des déclarations `true` ou `false`. Nous pouvons exploiter cela dans notre instruction `if`. Si l'expression est `true`, le code à l'intérieur des `{ }` est exécuté. Si l'expression est `false`, le code à l'intérieur des `{ }` après l'instruction `else` est exécuté.

Vous pouvez également connecter les **expressions booléennes** entre elles en utilisant les opérateurs `&&` (ET) et `||` (OU).

Regardez la fonction `CheckWinner()` dans `MainActivity.kt` et réfléchissez à ce que font toutes les instructions `&&` connectées.