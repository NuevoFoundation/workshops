---
title: "Atividade 1 - Coloque o Plano de Fundo e a Nave do Jogador"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 6
---

Esta atividade terá duas partes: colocar o fundo do jogo e colocar a nave que o jogador eventualmente controlará (será apenas uma imagem que não se move por enquanto). Para ambas as atividades, o método será muito semelhante: primeiro carregaremos a imagem no jogo na Cena 1 e depois a tornaremos visível na Cena 2. Você pode pensar na Cena 1 como sendo usada para carregar a imagem no jogo e a Cena 2 sendo usada para criar coisas que carregamos.

## Parte 1: O Plano de Fundo

Vamos começar com o plano de fundo. Novamente, para adicionar imagens ao jogo, primeiro iremos carregá-las na Cena 1 e depois colocá-las em nosso jogo na Cena 2. Primeiro vá para a Etapa 1 na função `preload()` em `Scene1.js`:

<!---![plano de fundo parte 1](../media/3/step1.png) --->
<img src="../media/3/step1.png" alt="plano de fundo parte 1" style="width:950px;"/>

Agora, carregue a imagem de fundo em preload().

Para revisão,
* Nada acontecerá após você completar esta linha porque você está simplesmente carregando a imagem para uso futuro, não a colocando em algum lugar.

* `imageID` é o nome que você dá à imagem.

* `imagePosition` é a posição da imagem.
(uma imagem chamada example.png na pasta assets, imagePosition será assets/example.png)

Em seguida, vá para a Etapa 1 e Etapa 2 na função `create()` em `Scene2.js`. Cada etapa exigirá uma linha de código, criando 2 linhas no total:

<!---![seção_plano_de_fundo](../media/3/background_section.png) --->
<img src="../media/3/background_section.png" alt="seção_plano_de_fundo" style="width:950px;"/>

Tente carregar a página e veja se o plano de fundo está funcionando! Seu console à direita deve ficar assim:

<!---![depois_da_adição_da_imagem](../media/3/after_add_image.png) --->
<img src="../media/3/after_add_image.png" alt="plano_de_fundo_depois_da_adição_da_imagem" style="width:950px;"/>

## Parte 2: A Nave do Jogador

Faremos quase a mesma coisa com o jogador, mas com sintaxe diferente porque a nave do jogador é uma spritesheet em vez de uma imagem normal (você verá o porquê na próxima atividade).

Para esta parte você executará a Etapa 2 na função `preload()` em `Scene1.js`:

<!---![plano de fundo jogador nave passo2](../media/3/step2.png) --->
<img src="../media/3/step2.png" alt="plano de fundo jogador nave passo2" style="width:950px;"/>


* `SpriteID` e `SpritePosition` funcionam da mesma forma com imageID e imagePosition.

* `FrameWidth` será 32 e `FrameHeight` será 48.

e a `player section` em `Scene2.js`:

<!--- ![player_section](../media/3/player_section.png) --->
<img src="../media/3/player_section.png" alt="plano de fundo player_section" style="width:950px;"/>

{{% notice hint %}}

Se a seção do jogador foi preenchida corretamente, mas o jogador não aparece na tela. Tente alterar x e y, o jogador pode estar fora da tela!

{{% /notice %}}

Depois de adicionar a nave do jogador, seu console deverá ficar assim:

<!--- ![depois_de_adicionar_jogador](../media/3/after_add_player.png) --->
<img src="../media/3/after_add_player.png" alt="plano de fundo depois_de_adicionar_jogador" style="width:950px;"/>
