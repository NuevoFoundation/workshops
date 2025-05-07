---
title: "Atividade 7 - Configurando o jogador para atirar"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 14
---

Agora queremos adicionar uma das partes mais importantes do jogo - atirar nos inimigos! Embora possamos derrotar os inimigos colidindo com eles, isso não será uma boa ideia quando adicionarmos vidas mais tarde. Criaremos um efeito de disparo criando um objeto para o feixe usando um arquivo JavaScript separado (como fizemos para a explosão).

Começaremos com algumas coisas básicas - carregando uma spritesheet e uma animação na Cena 1 para os feixes de armas do jogador:

<!--- ![pré-carregamento_cena1](../media/8/scene1_preload.png)--->
<img src="../media/8/scene1_preload.png" alt="pré-carregamento_cena1" style="width:950px;"/>

A localização da spritesheet é `assets/beam.png` e a largura e altura do quadro é 32:

<!--- ![criar_cena1](../media/8/scene1_create.png)--->
<img src="../media/8/scene1_create.png" alt="criar_cena1" style="width:950px;"/>

Agora na Cena 2 faremos algo semelhante ao que fizemos com os inimigos e criaremos um grupo para os feixes para que possamos manipulá-los facilmente. Crie um grupo e nomeie-o como "projéteis":

<!--- ![projéteis](../media/8/projectiles_step1.png)--->
<img src="../media/8/projectiles_step1.png" alt="projéteis" style="width:950px;"/>

Agora vá para `playerBeam.js`：

<!--- ![construtor_xy](../media/8/constructor_xy.png)--->
<img src="../media/8/constructor_xy.png" alt="construtor_xy" style="width:950px;"/>

Observe que, como `Explosion.js`, ele estende Phaser.GameObjects.Sprite e usa a palavra-chave `super()` em seu construtor. Complete o código no construtor. Isso exigirá que você reproduza a animação do feixe, ative o corpo e defina a velocidade y do feixe para a velocidade desejada.

Agora que abaixamos o básico do feixe, vamos permitir que o jogador atire nele ao clicar na barra de espaço. Semelhante a como criamos uma variável para processar as teclas de ponteiro para o movimento do jogador, criaremos outra variável para processar quando o jogador pressiona a barra de espaço:

<!--- ![controle_espaço](../media/8/control_space.png)--->
<img src="../media/8/control_space.png" alt="controle_espaço" style="width:950px;"/>

Agora vamos criar o método playerShoot():

<!--- ![player_shoot](../media/8/player_shoot.png)--->
<img src="../media/8/player_shoot.png" alt="player_shoot_" style="width:950px;"/>

e chamá-lo no método update() como fizemos para o movePlayer():

<!--- ![atualização_player_shoot](../media/8/update_player_shoot.png)--->
<img src="../media/8/update_player_shoot.png" alt="atualização_player_shoot" style="width:950px;"/>

O método playerShoot verificará se a tecla de espaço foi pressionada e disparará um feixe se tiver. "Disparar um feixe", neste caso, significa criar um objeto playerBeam e adicioná-lo ao grupo de projéteis se o jogador estiver ativo (ainda vivo).

Teste agora! No entanto, há dois grandes problemas aqui - o feixe não causa dano ao inimigo e o feixe continua indefinidamente por causa do canvas infinito do Phaser.
![explosão](../media/8/blast-first.gif)

Vamos corrigir esse segundo problema primeiro. Embora esse problema não afete diretamente a jogabilidade, pode ser um problema potencial porque se o feixe ainda existir fora da tela, significa que o computador terá que perder tempo cuidando dele. Se houver muitos feixes para o computador cuidar, isso pode causar lentidão! O que faremos é usar uma função update em playerBeam.js que destruirá o feixe se ele sair da tela.

A única maneira de fazer essas funções update funcionarem, no entanto, é chamá-las na função update em nossa Cena 2 assim:

```javascript
for(var i = 0; i < this.projectiles.getChildren().length; i++) {
    var beam = this.projectiles.getChildren()[i];
    beam.update();
}
```

Você pode preenchê-lo neste local:

<!--- ![atualização_projéteis](../media/8/update_projectiles.png)--->
<img src="../media/8/update_projectiles.png" alt="atualização_projéteis" style="width:950px;"/>


Agora, para testar isso, podemos simplesmente alterar o valor da altura que o feixe se autodestrói para aquele que está na tela:

<!--- ![player_atualização_bala](../media/8/player_bullet_update.png)--->
<img src="../media/8/player_bullet_update.png" alt="player_atualização_bala" style="width:950px;"/>

O código está funcionando corretamente se o feixe desaparecer na altura específica. Depois de testarmos se o código funciona, podemos simplesmente alterar esse valor para aquele que está acima da tela.

![explosão](../media/8/blast-disappear.gif)

Você pode ver neste gif que o feixe desaparece quando atinge uma altura especificada (usamos 50). Novamente, depois de confirmar que funciona, podemos simplesmente alterar o número 50 para um que esteja um pouco fora da tela (como 10) e saberemos que o código provavelmente ainda está funcionando da mesma forma.

Agora, vamos fazer com que o inimigo seja destruído se for atingido por um raio! Na verdade, podemos fazer isso com uma detecção de sobreposição semelhante à que fizemos para verificar se o jogador está tocando o inimigo:

<!--- ![sobreposição](../media/8/projectiles_step2.png)--->
<img src="../media/8/projectiles_step2.png" alt="sobreposição de projéteis" style="width:950px;"/>

Crie uma linha de código que use a mesma sintaxe da linha que usamos para detectar se o jogador e o inimigo colidiram, mas desta vez verifique se o inimigo e o feixe colidiram.

No entanto, não podemos usar o método machucarPlayer() porque o jogador não está sendo ferido e não queremos que ele reapareça quando o inimigo for atingido. Criaremos uma nova função chamada `hitEnemy()`:

<!--- ![hit_enemy](../media/8/hit_enemy.png)--->
<img src="../media/8/hit_enemy.png" alt="hit_enemy" style="width:950px;"/>

Adicione código ao `hitEnemy()` para que ele crie uma explosão na localização do inimigo e remova o feixe e o inimigo.

No final, o disparo deve ficar assim!
![explosão](../media/8/blast-final.gif)
