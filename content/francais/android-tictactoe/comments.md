---
title: "Commentaires"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 6
---
Les développeurs ont souvent besoin de collaborer avec d'autres développeurs. Les commentaires sont un moyen simple pour les développeurs d'écrire des notes dans le code et de communiquer avec les autres. Les commentaires sont ignorés par l'ordinateur ; ainsi, ils constituent également une méthode simple pour indiquer à l'ordinateur de ne pas exécuter certaines lignes de code. Il existe deux manières de créer des commentaires :

1. Pour commenter une seule ligne, placez `//` devant une ligne de code. Par exemple :

```kotlin
// Ceci est un commentaire sur une seule ligne.
```

2. Pour commenter plusieurs lignes à la fois, indiquez le début du commentaire avec `/*` et la fin du commentaire avec `*/`. Par exemple :

```kotlin
/* Ceci est un commentaire multi-lignes.
Cette ligne fait également partie du commentaire. */
```

Pour supprimer un commentaire (ou décommenter une ligne), il suffit de supprimer `//` pour un commentaire sur une seule ligne, ou les caractères `/*` et `*/` pour un commentaire multi-lignes.

{{% notice tip %}}
## Travailler ensemble

1. Tapez `//` devant `Toast.makeText(this, "Welcome to Tic-Tac-Toe”, Toast.LENGTH_LONG).show()`. Après avoir appuyé sur le bouton de lecture (►), vérifiez que `Welcome to Tic-Tac-Toe` ne s'affiche pas à l'écran.
2. Supprimez les `//` et, à la place, entourez `Toast.makeText(this, "Welcome to Tic-Tac-Toe”, Toast.LENGTH_LONG).show()` de `/*` et de `*/`. Vérifiez que `Welcome to Tic-Tac-Toe` n'est toujours pas imprimé sur la console après avoir appuyé sur le bouton de lecture (►).
3. Supprimez à la fois `/*` et `*/`, puis appuyez sur le bouton de lecture (►). `Welcome to Tic-Tac-Toe` devrait maintenant être imprimé sur la console.  
   Tout au long des puzzles d'aujourd'hui, vous verrez divers commentaires multi-lignes et des commentaires `// PUZZLE` (comme celui pour le Puzzle 2). Ces commentaires nous guideront pour compléter le jeu Tic-Tac-Toe, alors assurez-vous de bien comprendre comment commenter et décommenter du code.

{{% /notice %}}