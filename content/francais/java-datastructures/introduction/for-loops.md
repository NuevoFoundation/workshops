---
title: "Boucles For"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/QHM7dmhFP64" title="For Loops - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

Lorsque vous savez exactement combien de fois vous souhaitez parcourir un bloc de code, utilisez une boucle `for` au lieu d'une boucle `while` :

```java
for (initialization; condition; iteration) {
  // bloc de code à exécuter
}
```

- `initialization` est exécutée (une seule fois) avant l'exécution du bloc de code.
- `condition` (comme son nom l'indique) définit la condition pour exécuter le bloc de code.
- `iteration` est exécutée (à chaque fois) après que le bloc de code a été exécuté.

L'exemple ci-dessous affichera les nombres de `0` à `4` :

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

- `initialization` initialise une variable avant le début de la boucle (`int i = 0`).
- `condition` définit la condition pour que la boucle continue à s'exécuter (`i` doit être inférieur à `5`). Si la condition est `true`, la boucle recommencera, si elle est `false`, la boucle se terminera.
- `iteration` augmente une valeur (`i++`) à chaque fois que le bloc de code dans la boucle a été exécuté.

Cet exemple n'affichera que les valeurs paires entre `0` et `10` :

```java
for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
```