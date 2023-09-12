---
title: "Variáveis"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
Variáveis são simplesmente nomes que podemos dar a valores como strings, números e booleanos. Usamos variáveis para armazenar informações para que o computador possa controlá-las. As variáveis são criadas usando o tipo e o nome da variável. Então você pode atribuir essa variável às informações que deseja armazenar usando `=` e o conteúdo.

Observe as variáveis ​​no topo de `MainActivity.kt`.

```kotlin
    var Player1 = ArrayList<Int>()
    var Player2 = ArrayList<Int>()
    var ActivePlayer = 1
    var setPlayer = 1
    var colorBlue = Color.rgb(0, 161, 241)
    // PUZZLE 3
    var colorGreen = Color.BLACK
```

- `Player1` contém os valores dos movimentos do Jogador 1 no jogo.
- `Player2` contém os valores dos movimentos do Jogador 2 no jogo.
- `ActivePlayer` controla de quem é a vez.
- `setPlayer` contém o valor se o jogo é Jogador contra Jogador ou Jogador contra Computador.
- `colorBlue` e `colorGreen` contêm os valores das cores do jogador.
