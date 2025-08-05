---
title: "Atividade 9 - Adicionando Pontuação, Níveis e Vidas"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 16
---

Agora vamos adicionar alguns números para quantificar nosso jogo!  
O mais fácil de implementar é a **pontuação**. Crie uma variável de texto no canto superior esquerdo da tela que mostre `Score: ` e o valor de uma variável numérica que armazena a pontuação do jogador.

```javascript
this.scoreText = this.add.text(20, 10, "Score: " + this.score, {
    font: "25px Arial",
    fill: "white"
});
```

{{% notice hint %}}
Essa linha exibe a variável de pontuação no canto superior esquerdo da tela.

* `20` e `10` são os valores X e Y  
* `"score" + this.score` é o texto exibido
{{% /notice %}}

Você pode colocar essa linha no código logo depois de criar a variável de pontuação:

<img src="../media/10/create_score.png" alt="create_score" style="width:950px;"/>

Depois, atualize a função `hitEnemy()` para que o jogador ganhe pontos quando destruir um inimigo:

<img src="../media/10/hit_enemy_score.png" alt="hit_enemy_score" style="width:950px;"/>

---

Agora vamos adicionar **níveis**. Vamos inicializar da mesma forma que fizemos com a pontuação, mas dessa vez exibindo o texto no meio da tela:

<img src="../media/10/create_level.png" alt="create_level" style="width:950px;"/>

Os níveis serão simples: sempre que o jogador destruir todos os inimigos, ele avança para o próximo nível, e todos os inimigos são recriados.  
Para deixar cada nível mais difícil que o anterior, vamos criar uma variável **difficulty** que controla com que frequência os inimigos atiram.  
Quanto menor o valor de **difficulty**, mais difícil será o jogo.

Agora, para atualizar o nível quando todos os inimigos forem destruídos, vamos criar um método `levelClear()` que:
- Atualiza a dificuldade  
- Reseta o timer dos inimigos  
- Cria novos inimigos (chamando `createEnemies()`)  
- Atualiza o texto do nível na tela

<img src="../media/10/level_clear.png" alt="level_clear" style="width:950px;"/>

Sempre crie um novo timer quando recriar inimigos, senão eles e o timer podem ficar fora de sincronia.  
Quando chegarmos a **200** de dificuldade, diminua o decremento para que o aumento de dificuldade seja mais suave.

Não esqueça de chamar `levelClear()` no `update()`:

<img src="../media/10/update_level_clear.png" alt="update_level_clear" style="width:950px;"/>

---

Agora vamos adicionar **vidas**. Vamos inicializar de forma parecida e posicionar o texto no canto superior direito da tela:

<img src="../media/10/create_live.png" alt="create_live" style="width:950px;"/>

Para perder uma vida quando for atingido, adicione este código no `hurtPlayer()`:

<img src="../media/10/hurt_player.png" alt="hurt_player" style="width:950px;"/>

Para as vidas terem significado, vamos criar um **Game Over** quando o jogador perder todas as vidas.  
Primeiro, crie um texto invisível na tela dentro do método `create()`:

<img src="../media/10/create_game_over.png" alt="create_game_over" style="width:950px;"/>

Depois, no `hurtPlayer()`, faça esse texto aparecer quando o jogo acabar:

<img src="../media/10/hurt_player_restart.png" alt="hurt_player_restart" style="width:950px;"/>

Isso faz com que o personagem não reapareça, mostra a mensagem de fim de jogo e reinicia o jogo se o jogador clicar na tela.

Por fim, crie o método `restart()` que é chamado nesse processo:

<img src="../media/10/restart_function.png" alt="restart_function" style="width:950px;"/>

Esse método reseta tudo para recomeçar o jogo.

![gameplay](../media/10/game-play.gif)
