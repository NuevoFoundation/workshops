---
title: "Atividade 6 - Reiniciando o Player Após Ser Destruído"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 13
---

Fizemos alguns inimigos bastante sólidos, mas agora há algo errado - eles não fazem nada com você! Especificamente, eles não podem machucar você de forma alguma. Vamos mudar isso. No jogo final, haverá duas maneiras de ser danificado: sendo atingido por um laser inimigo ou tocando diretamente no inimigo. Vamos começar com o último, pois é um pouco mais fácil.

A colisão é relativamente fácil no Phaser.

Vamos primeiro importar uma planilha de sprites de explosão e implementar sua animação na Cena 1:

<!--- ![carregar_sprite](../media/7/load_sprite.png)--->
<img src="../media/7/load_sprite.png" alt="carregar_sprite" style="width:950px;"/>

<!--- ![criar_sprite](../media/7/create_sprite.png)--->
<img src="../media/7/create_sprite.png" alt="criar_sprite" style="width:950px;"/>

Esta será uma explosão que ocorrerá quando o jogador for destruído!

O Phaser possui maneiras muito convenientes de lidar com colisões entre objetos. Podemos simplesmente adicionar a linha abaixo ao método create() na Cena 2:

```javascript
this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
```

<!--- ![overlap ao player](../media/7/overlap_hurtPlayer.png)--->
<img src="../media/7/overlap_hurtPlayer.png" alt="overlap ao player" style="width:950px;"/>

O que esta linha faz é chamar o método harmPlayer() quando `this.player` e um membro do grupo `this.enemies` se sobrepõem. Ele chamará o HurtPLayer com `this.player` e `this.enemies` como argumentos.

Esta linha fará com que o método hurtPlayer() seja chamado quando o jogador e um objeto no grupo inimigo se tocam com as variáveis ​​​​do jogador e do inimigo passadas para o método como argumentos. Agora vamos criar o método hurtPlayer():

<!--- ![hurtPlayer](../media/7/function.png)--->
<img src="../media/7/function.png" alt="hurtPlayer" style="width:950px;"/>

Primeiro iremos destruir o inimigo e desabilitar o jogador para as `etapas 4 e 5` com estas linhas:

```javascript
enemy.destroy();
player.disableBody(true, true);
```

Isso faz com que o inimigo e o jogador desapareçam (o inimigo foi excluído, mas o jogador fica invisível e não interativo). Agora vamos fazer o jogador reviver após uma pequena pausa (a pausa permite ao jogador algum tempo para reagir ao dano). Para esta pausa, usaremos outro temporizador (como fizemos para mudar a direção do inimigo) no `passo 7`. A sintaxe será a mesma, mas chamaremos a função resetPlayer(), teremos um atraso menor e também não faremos loop no temporizador.

Depois de criar o temporizador, vamos trabalhar no método `resetPlayer()`:

<!--- ![reset_player](../media/7/resetPlayer.png)--->
<img src="../media/7/resetPlayer.png" alt="reset_player" style="width:950px;"/>

Primeiro, escolha uma coordenada de respawn e altere o valor (X, Y) do jogador para este local (ainda podemos alterar a localização da nave assim porque ela ainda existe, apenas está desativada). Em seguida, habilite o player com esta linha:

```javascript
this.player.enableBody(true, x, y, true, true);
```

Depois de implementar isso, a colisão deverá ficar assim:
![colisão](../media/7/respawn-first.gif)

A seguir, vamos criar um novo objeto de explosão editando `explosion.js`:

<!--- ![explosion](../media/7/explosion.png)--->
<img src="../media/7/explosion.png" alt="explosion" style="width:950px;"/>

Observe que ele estende Phaser.GameObjects.Sprite.Isso nos permitirá usar o construtor desta classe por meio de herança. O parâmetro do nosso objeto Projétil é simplesmente a cena e dois números (x e y) - mais tarde você verá que passamos pela própria Cena 2. Podemos usar esta cena para acessar tudo dentro dela. Tudo o que este arquivo fará é criar um objeto que reproduzirá a animação da explosão no local especificado. Todo o código que esta classe precisa está contido no construtor e há apenas 2 linhas de código que você precisa preencher.

Agora, vá para o método `hurtPlayer()` em `scene2.js`：

<!--- ![criar_explosion](../media/7/create_explosion.png)--->
<img src="../media/7/create_explosion.png" alt="criar_explosion" style="width:950px;"/>

{{% notice hint %}}
Você criará dois objetos de explosão:

* Um com a cena e as coordenadas do jogador como parâmetros,
* O outro com a cena e as coordenadas do inimigo como parâmetros.
{{% /notice %}}

A seguir, observe como o renascimento do jogador é um tanto repentino. Faremos essa transição mais suave com uma interpolação (tween) depois de gerarmos o jogador:

<!--- ![resetar_tween](../media/7/reset_tween.png)--->
<img src="../media/7/reset_tween.png" alt="resetar_tween" style="width:950px;"/>

Uma interpolação é essencialmente uma ferramenta que permite animar um recurso ou característica de um objeto. Por exemplo, neste caso, estamos animando o alfa do jogador (também conhecido como visibilidade). Começaremos definindo o alfa do jogador para 0,5 e, em seguida, usaremos a interpolação para animá-lo para visibilidade total e normal.

```javascript
var tween = this.tweens.add({
    targets: this.player,
    y: config.height - 64,
    ease: 'Power1',
    duration: 1500,
    repeat: 0,
    onComplete: function(){
        this.player.alpha = 1;
    },
    callbackScope: this
});
```

Agora finalmente terminamos! Agora nossa animação de renascimento do jogador parece muito mais limpa!

![colisão](../media/respawn-second.gif)
