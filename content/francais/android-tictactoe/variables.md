---
title: "Variables"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
Les variables sont simplement des noms que nous pouvons attribuer à des valeurs telles que des chaînes de caractères, des nombres et des booléens. Nous utilisons des variables pour stocker des informations afin que l'ordinateur puisse les garder en mémoire. Les variables sont créées en utilisant le type de la variable et le nom de la variable. Ensuite, vous pouvez attribuer à cette variable l'information que vous voulez stocker en utilisant `=` et le contenu.

Regardez les variables en haut de `MainActivity.kt`.

```kotlin
    var Player1 = ArrayList<Int>()
    var Player2 = ArrayList<Int>()
    var ActivePlayer = 1
    var setPlayer = 1
    var colorBlue = Color.rgb(0, 161, 241)
    // PUZZLE 3
    var colorGreen = Color.BLACK
```

- `Player1` contient les valeurs des coups du Joueur 1 dans le jeu.
- `Player2` contient les valeurs des coups du Joueur 2 dans le jeu.
- `ActivePlayer` garde une trace de celui à qui c'est le tour.
- `setPlayer` contient la valeur pour déterminer si le jeu est Joueur contre Joueur ou Joueur contre Ordinateur.
- `colorBlue` et `colorGreen` contiennent les valeurs des couleurs des joueurs.