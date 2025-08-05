---
title: "Atividade 8 - Fazendo os Inimigos Atirarem"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 15
---

Agora vamos fazer com que os inimigos atirem de volta no jogador.  
Cada inimigo vai atirar **aleatoriamente**, e a dificuldade (que mais tarde vai aumentar a cada nível) é definida por **com que frequência** eles atiram.

O disparo do inimigo é bem parecido com o do jogador. Vamos criar um arquivo `enemyBeam.js` muito parecido com o `playerBeam.js`, mudando apenas alguns nomes de variáveis e valores:  

<img src="../media/9/enemy_bullet.png" alt="enemy_bullet" style="width:950px;"/>

Vamos usar o mesmo sprite e animação para os tiros do jogador e dos inimigos.  
Porém, na implementação, vamos criar **um grupo separado** para os projéteis dos inimigos:

<img src="../media/9/enemy_projectiles.png" alt="enemy_projectiles" style="width:950px;"/>

Também precisamos criar uma variável de **dificuldade** para o jogo (explicaremos mais sobre ela depois, mas por enquanto ela vai garantir que o inimigo atire):

<img src="../media/9/add_diff.png" alt="add_diff" style="width:950px;"/>

{{% notice hint %}}
* Recomendamos definir `difficulty` como **1000**.  
* Nesse caso, o número aleatório vai de 1 até 1000. Somente se o número sorteado for **1**, o inimigo atira.  
* Se você definir `difficulty` como **1**, o inimigo vai atirar continuamente.
{{% /notice %}}

Para fazer os inimigos atirarem aleatoriamente, vamos criar um método `enemyShoot()`:

<img src="../media/9/enemyShoot.png" alt="enemyShoot" style="width:950px;"/>

E chamá-lo dentro do método `update()`:

<img src="../media/9/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

Isso cria novos projéteis de inimigos numa taxa aleatória.

---

Depois, precisamos atualizar os projéteis dos inimigos, garantindo que cada disparo seja removido quando sair da tela.

Você precisa atualizar o código dos disparos no `enemyBeam.js` da mesma forma que fez no `playerBeam.js`:

<img src="../media/9/update.png" alt="update_player_shoot again" style="width:950px;"/>

Também é necessário atualizar cada projétil de inimigo na **Scene 2**, de forma semelhante à atualização dos projéteis do jogador:

<img src="../media/9/update_enemy_projectiles.png" alt="update_enemy_projectiles" style="width:950px;"/>

---

No final, a jogabilidade deve ficar parecida com isto:  
![enemyShoot](../media/9/enemy-shoot.gif)
