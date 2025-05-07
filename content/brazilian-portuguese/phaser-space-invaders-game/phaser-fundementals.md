---
title: "Fundamentos de Phaser"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 3
---

## Parte 1: A variável de configuração

Vamos rever alguns dos fundamentos do Phaser, um framework de jogos que usa HTML e JavaScript para criar jogos para a web! Isso é o que você aprenderá a usar neste workshop.

Vá para `game.js`. Todo jogo Phaser começará com uma variável que armazena as configurações do jogo (geralmente chamada de config como temos aqui).

```javascript
var config = {
  type: Phaser.AUTO,
  width: 512,
  height: 544,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],

	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
};
```

Nesta variável, você notará que definimos uma variedade de características do nosso jogo, como largura, altura e cor de fundo. Também definimos as cenas que usaremos (mais informações sobre as cenas um pouco mais tarde). Você também pode criar um jogo sem cenas e simplesmente colocar todo o código no arquivo `game.js`.

Você também notará que definimos a física do jogo no Config. No design de jogos, a física é um dos aspectos mais essenciais que definem a “sensação” de um jogo. Por exemplo, a física saltitante de Mario faz com que ele "pareça Mario". Para o nosso jogo, você pode ver que usamos física “arcade”, um tipo de física no Phaser que é muito simples de usar. Observe também que em nossa Física definimos Gravidade como 0, porque nosso jogo é um Space Shooter, então não precisamos de nenhuma gravidade puxando nossos personagens para baixo.

No final de `game.js`, você pode ver que passamos a variável de configuração para uma variável de jogo, algo que também é quase sempre necessário em um jogo Phaser.

## Parte 2: Cenas

Agora, vamos finalmente falar um pouco sobre as cenas. Uma cena é essencialmente um estado de jogo no qual o usuário está operando. É melhor compreendido com um exemplo:

Vejamos a famosa franquia de jogos Pokémon. Quando você joga, muitas vezes você estará vagando pelo mundo. Ao encontrar um treinador ou um Pokémon selvagem na grama alta, você entra em um cenário diferente para poder lutar. Depois de terminar a batalha, você pode abrir seu mapa para ver aonde precisa ir - isso também abrirá uma cena diferente. Essas três cenas funcionam de forma completamente diferente e têm sua própria mecânica anexada. Quando você sai do mapa, o jogo muda as cenas para o mundo onde você vagueia como jogador. E assim que você entra na batalha, você muda para o cenário da batalha. Você pode ver como a criação desses três estados de jogo seria completamente diferente - a batalha requer um menu, o mundo requer um espaço 2D e um jogador, e o mapa é essencialmente um gráfico interativo. Nós os separamos em cenas porque todas elas devem ser criadas de maneira completamente diferente.

Você pode pensar no usuário movendo-se entre as cenas enquanto joga. Eles usam apenas uma cena por vez, e cada uma é quase como seu próprio minijogo (embora geralmente haja uma cena principal que não é exatamente “mini”).

{{% notice info %}}

Tecnicamente, poderíamos usar uma única cena para todos esses três estados do jogo se quiséssemos (como você divide um jogo em cenas ficará a critério do designer do jogo). É fisicamente possível fazê-lo. No entanto, criar cenas separadas tornará a codificação significativamente mais fácil (neste caso, não consigo nem imaginar como você poderia amontoá-las em uma sem simplesmente colocar o visual de uma em cima da outra).
{{% /notice %}}

Aqui está outro exemplo de uma forma muito comum de usar cenas: uma tela de título.

![Tela de título do jogo Outliers](../media/title-game.png)

A primeira cena exibe simplesmente uma tela de título que geralmente contém itens como configurações, carregamento de um arquivo salvo e muito mais. Assim que o jogador clicar em jogar, ele será transferido para uma cena diferente, onde jogará o jogo.

Isso é exatamente o que vamos fazer. A Cena 1 conterá uma tela de título e a Cena 2 conterá nossa jogabilidade real. Assim, a Cena 2 terá a maior parte do código e será onde você fará a maior parte do seu trabalho.

# Parte 3: Tela Infinita

Ao iniciar o jogo no replit, você verá uma tela em branco na tela onde eventualmente colocará as coisas. No entanto, você está vendo apenas uma parte da tela total – na verdade, a tela é infinita em todas as direções. A tela se comporta da mesma maneira em todas as seções - isso significa que os objetos podem se mover e ser colocados em partes da tela que o usuário não pode ver. Isso se tornará importante porque, para o nosso jogo, não queremos que as coisas realmente saiam da tela, então precisamos vincular nossos objetos dentro da tela ou excluí-los se eles saírem.
