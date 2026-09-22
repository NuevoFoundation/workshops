```markdown
---
title: "Exercice 3 - La Transformation de Burrows-Wheeler"
difficulties: ["intermédiaire"]
weight: 11
draft: false
---

La transformation de Burrows-Wheeler (BWT) est un algorithme utilisé dans la compression de données. Il prend en entrée une chaîne de caractères et produit une chaîne encodée, qui regroupe généralement les caractères similaires ensemble.

## La Théorie

L'algorithme est relativement simple et facile à comprendre.

1. Prenez la chaîne d'entrée et extrayez toutes ses transformations rotationnelles. (Voir image).
2. Triez les rotations dans l'ordre lexicographique croissant.
3. Prenez la dernière colonne de la transformation triée ; c'est la sortie.

![Transformation de Burrows-Wheeler](../resources/e3-01.png "Les 3 étapes de la transformation de Burrows-Wheeler")

Dans le diagramme ci-dessus, nous utilisons la chaîne `banana` comme exemple. Le `\0` est un symbole utilisé pour indiquer la fin de la chaîne (comme le caractère terminateur null en C), mais il est lexicographiquement le plus GRAND caractère lorsqu'on le compare aux autres.

Une façon efficace d'implémenter la transformation BWT est d'utiliser une structure de données appelée tableau des suffixes. Pour créer un tableau des suffixes, nous commençons par prendre tous les suffixes d'une chaîne d'entrée et leur attribuons un numéro. Ensuite, nous trions les suffixes par ordre lexicographique.

![Tableaux des Suffixes](../resources/e3-02.png "Étapes de création d'un tableau des suffixes")

En utilisant `Nuevo\0` comme exemple, nous prenons d'abord ses suffixes et les listons. Puis, nous les trions dans l'ordre lexicographique, avec `\0` comme caractère terminateur null jouant le rôle de plus grand caractère. Enfin, nous prenons l'index de la première lettre de chaque suffixe et les plaçons dans un tableau. Par exemple, l'index de la lettre `N` dans `Nuevo\0` est `0`, tandis que l'index de `e` est `2`. Comme ils sont les plus petits par ordre alphabétique, ils occupent respectivement les emplacements 0 et 1 du tableau.

Nous pouvons considérer les suffixes comme des rotations pour la transformation de Burrows-Wheeler ! Tout ce que nous devons faire est d'ajouter le *préfixe* que nous avons "coupé" à la fin de la chaîne. Ainsi, `evo\0` devient `evo\0Nu` lorsque nous voulons considérer le suffixe comme une rotation. Ensuite, si nous faisons cela pour tous les suffixes, nous obtenons les rotations triées nécessaires pour la transformation de Burrows-Wheeler.

![Suffixes en Rotations](../resources/e3-03.png "Tableau des rotations triées à partir des suffixes pour la transformation de Burrows-Wheeler")

Un point clé est que nous n'avons pas réellement besoin de stocker les rotations, car l'index dans le tableau des suffixes nous donne déjà ces informations. Si `suffix_array[i] == 0`, alors nous savons que la rotation que nous examinons est `Nuevo\0`. Si `suffix_array[i] == 3`, alors la rotation que nous examinons est `vo\0Nue`. Vous pouvez penser qu'on effectue une rotation de `N` espaces à droite dans le cas où `suffix_array[i] == N`. L'illustration ci-dessus démontre cela.

Ainsi, avec cela en tête, nous pouvons obtenir le dernier caractère de la rotation simplement en prenant `suffix_array[i]` et en soustrayant 1, puis en effectuant une opération de modulo sur la longueur totale du tableau des suffixes pour obtenir l'index de la chaîne d'origine que nous cherchons. Cela nous donne la transformation de Burrows-Wheeler pour toute chaîne donnée.

## L'Implémentation

La stratégie d'implémentation que nous utilisons est celle que nous avons soulignée ci-dessus : construire un tableau des suffixes, puis prendre les indices, soustraire 1, puis effectuer une opération modulo sur la longueur de la chaîne (y compris le terminateur null).

Nous avons implémenté le tableau des suffixes et avec cela, la transformation de Burrows-Wheeler. Cependant, nous étions fatigués à ce moment-là et avons laissé passer plusieurs bugs. Cet exercice peut être délicat car il implique beaucoup d'indexation et de réflexion sur la façon de les utiliser astucieusement. Comme indice pour corriger les erreurs, la plupart des bugs sont centrés sur le tableau des suffixes et son utilisation.

{{% notice tip %}}
Le caractère terminateur null peut perturber l'impression de vos chaînes. Dans cet exercice, vous devez imprimer la chaîne transformée caractère par caractère, car le caractère terminateur null fera que la fonction `printf` s'arrête d'imprimer après l'avoir rencontré. Le code suivant imprimera le résultat de l'appel à `bwt(dest, src)`, où `STR_LEN` est la longueur statique de la chaîne **y compris le terminateur null**.
```c
for(int i = 0; i < STR_LEN; ++i) {
    printf("%c", dest[i]);
}
```
Notez que `strlen()` renvoie la longueur de la chaîne, sans le terminateur null.

Un dernier conseil : `%` en C n'est **pas** l'opérateur modulo ! C'est l'opérateur reste. Peut-être que c'est la raison pour laquelle certains indexages sont incorrects...
{{% /notice %}}

Toutes les fonctions sont documentées dans `bwt.h`. Utilisez tous les outils comme gdb et valgrind à votre avantage. Bonne chance !

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-3" target="_blank">Lancer Replit</a>
```