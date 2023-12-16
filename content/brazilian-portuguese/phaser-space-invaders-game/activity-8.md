---
title: "Atividade 8 - Configurando o inimigo para atirar"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 15
---

Agora faremos os inimigos atirarem de volta no jogador. Cada inimigo atirará aleatoriamente, e a dificuldade (que posteriormente será aumentada a cada nível) é definida pela frequência com que eles atiram aleatoriamente.

O feixe inimigo é bastante semelhante ao feixe do jogador. Faremos novamente um arquivo `enemyBeam.js` muito semelhante com quase o mesmo código de `playerBeam.js`, mas com nomes de variáveis ​​​​e números diferentes:

<!--- ![bala_inimigo](../media/9/enemy_bullet.png)--->
<img src="../media/9/enemy_bullet.png" alt="bala_inimigo" style="width:950px;"/>

Compartilharemos sprite e animação para os feixes do jogador e os feixes do inimigo. No entanto, durante a implementação, você criará um grupo separado para projéteis inimigos:

<!--- ![projéteis_inimigos](../media/9/enemy_projectiles.png)--->
<img src="../media/9/enemy_projectiles.png" alt="projéteis_inimigos" style="width:950px;"/>

Também precisamos criar uma dificuldade para este jogo (explicaremos mais sobre a `dificuldade` mais tarde, mas por enquanto, a `dificuldade` garantirá que o inimigo atire):

<!--- ![add_diff](../media/9/add_diff.png)--->
<img src="../media/9/add_diff.png" alt="add_diff" style="width:950px;"/>

{{% notice hint %}}
* Recomendamos definir a dificuldade para 1000.
* Se você definir a dificuldade para 1000, o número aleatório será escolhido de 1 a 1000. Somente se o número aleatório for 1 o inimigo atirará.
* O inimigo atirará continuamente se você tentar a dificuldade 1.
{{% /notice %}}

Para fazer os inimigos atirarem aleatoriamente, primeiro criaremos um método `enemyShoot()`:

<!--- ![enemyShoot](../media/9/enemyShoot.png)--->
<img src="../media/9/enemyShoot.png" alt="enemyShoot" style="width:950px;"/>

e chame-o no método `update()`:

<!--- ![update_player_shoot](../media/9/update_player_shoot.png)--->
<img src="../media/9/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

que cria um novo projétil inimigo a uma taxa aleatória especificada.

Então, precisamos atualizar os projéteis inimigos. Precisamos ter certeza de que cada feixe foi excluído.

Você terá que atualizar os feixes inimigos em `enemyBeam.js` como fez em `playerBeam.js`:

<!--- ![atualização](../media/9/update.png)--->
<img src="../media/9/update.png" alt="update_player_shoot novamente" style="width:950px;"/>

Você também precisa atualizar cada projétil inimigo na Cena 2, que é semelhante à forma como atualizamos os projéteis:

<!--- ![update_projectiles](../media/9/update_enemy_projectiles.png)--->
<img src="../media/9/update_enemy_projectiles.png" alt="update_enemy_projectiles" style="width:950px;"/>

No final, a jogabilidade deve ser mais ou menos assim:
![tiroInimigo](../media/9/enemy-shoot.gif)
