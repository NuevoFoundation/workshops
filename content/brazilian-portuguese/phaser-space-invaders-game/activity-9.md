---
title: "Atividade 9 - Adicionando pontuação, níveis e vidas"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 16
---

Agora, vamos somar alguns números para quantificar nosso jogo! O mais fácil de implementar é a pontuação. Crie uma variável de texto no canto superior esquerdo da tela que exibe `Pontuação: ` e o valor de uma variável num que armazena a pontuação do jogador.

```javascript
this.scoreText = this.add.text(20, 10, "Pontuação: " + this.score, {
    fonte: "25px Arial",
    preencher: "branco"
});
```

{{% notice hint %}}
Esta linha imprime a variável de pontuação no canto superior esquerdo da tela.

* `20` e `10` são os valores de x e y
* `"score" + this.score` é o valor do texto
{{% /notice %}}

Você pode preencher esta linha neste local depois de criar o valor da pontuação:

<!--- ![create_score](../media/10/create_score.png)--->
<img src="../media/10/create_score.png" alt="create_score" style="width:950px;"/>

Basta adicionar uma variável de pontuação e algum texto à tela que exibe "Pontuação: 'variável de pontuação'". Atualizaremos a função `hitEnemy()` para que o jogador ganhe pontos em sua pontuação se derrotar um inimigo:

<!--- ![hit_enemy_score](../media/10/hit_enemy_score.png)--->
<img src="../media/10/hit_enemy_score.png" alt="hit_enemy_score" style="width:950px;"/>

Agora vamos adicionar níveis. Iremos inicializá-lo da mesma forma que fizemos para a pontuação, mas desta vez iremos imprimi-lo no meio da tela em vez de no canto superior esquerdo:

<!--- ![create_level](../media/10/create_level.png)--->
<img src="../media/10/create_level.png" alt="create_level" style="width:950px;"/>

Faremos os níveis bem simples: sempre que o jogador destruir todos os inimigos, o próximo nível será alcançado, reaparecendo todos os inimigos. Para tornar cada nível mais difícil que o anterior, faremos os inimigos atirarem com mais frequência. Para fazer os inimigos atirarem com mais frequência, vamos criar uma variável de dificuldade e usá-la quando fizermos os inimigos atirarem aleatoriamente.

Com esta configuração, ao alterar a variável de dificuldade, alteramos a frequência com que os inimigos disparam. Uma dificuldade menor tornará o jogo mais difícil porque aumentará a probabilidade de um inimigo atirar.

Agora, para atualizar o nível quando o jogador destruir todos os inimigos, criaremos um método `levelClear()` que atualizará a variável de dificuldade, zerará o cronômetro do inimigo, criará novos inimigos (chamando `createEnemies()`), e atualize o texto do nível na tela:

<!--- ![level_clear](../media/10/level_clear.png)--->
<img src="../media/10/level_clear.png" alt="level_clear" style="width:950px;"/>

Observe como temos que criar um novo cronômetro toda vez que criamos novos inimigos, caso contrário os inimigos e o cronômetro podem não estar sincronizados. Além disso, recomendamos diminuir menos a variável de dificuldade quando chegarmos a 200, porque a dificuldade aumenta muito mais rápido nesse ponto.

Não se esqueça de atualizar levelClear() em `update()`:

<!--- ![update_level_clear](../media/10/update_level_clear.png)--->
<img src="../media/10/update_level_clear.png" alt="update_level_clear" style="width:950px;"/>

Agora, vamos adicionar vidas. Usaremos novamente um método semelhante para inicializá-lo e colocá-lo no canto superior direito da tela:

<!--- ![create_live](../media/10/create_live.png)--->
<img src="../media/10/create_live.png" alt="create_live" style="width:950px;"/>

Agora, para perder uma vida sempre que for atingido, vamos adicionar este código a `hurtPlayer()`:

<!--- ![hurt_player](../media/10/hurt_player.png)--->
<img src="../media/10/hurt_player.png" alt="hurt_player" style="width:950px;"/>

Porém, para que as vidas tenham algum significado, vamos fazer um Game Over quando o jogador perder todas. Começaremos tornando algum texto invisível na tela no método `create()`:

<!--- ![create_game_over](../media/10/create_game_over.png)--->
<img src="../media/10/create_game_over.png" alt="create_game_over" style="width:950px;"/>

Tornaremos este texto visível quando o jogo terminar. Faremos isso no método `hurtPlayer()`:

<!--- ![hurt_player_restart](../media/10/hurt_player_restart.png)--->
<img src="../media/10/hurt_player_restart.png" alt="hurt_player_restart" style="width:950px;"/>

Isso faz com que a personagem não apareça, mostre o texto do jogo e reinicie o jogo se o jogador clicar na tela.

A única coisa agora é que precisamos criar o método `restart()` ao qual este código se refere:

<!--- ![restart_function](../media/10/restart_function.png)--->
<img src="../media/10/restart_function.png" alt="restart_function" style="width:950px;"/>

Isso redefine tudo para reiniciar o jogo

![jogabilidade](../media/10/game-play.gif)
