---
title: "Atividade 1 - Colocar o Fundo e a Nave do Jogador"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 6
---

Esta atividade terá duas partes: carregar o **fundo do jogo** e carregar a **nave** que o jogador vai controlar (por enquanto, ela será apenas uma imagem fixa).  
Para ambas as partes, o método é bem parecido: primeiro carregamos a imagem no jogo na **Scene 1** e depois a tornamos visível na **Scene 2**.  
Você pode pensar na Scene 1 como o local onde enviamos a imagem para o jogo e na Scene 2 como o local onde criamos e exibimos o que foi enviado.

---

## Parte 1: O Fundo

Vamos começar pelo fundo.  
Novamente, para adicionar imagens ao jogo, primeiro as carregamos na **Scene 1** e depois as colocamos no jogo na **Scene 2**.  

Vá até o **Passo 1** na função `preload()` em `Scene1.js`:

<img src="../media/3/step1.png" alt="background part 1" style="width:950px;"/>

Agora, carregue a imagem do fundo no `preload()`.

Para revisar:
* Nada acontecerá logo após completar essa linha, pois você está apenas carregando a imagem para uso futuro, não exibindo-a ainda.
* `imageID` é o nome que você dá à imagem.
* `imagePosition` é o caminho da imagem.  
  (Exemplo: para uma imagem chamada `example.png` na pasta `assets`, o caminho será `assets/example.png`)

Depois, vá para os **Passos 1 e 2** na função `create()` em `Scene2.js`.  
Cada passo exige uma linha de código, totalizando 2 linhas:

<img src="../media/3/background_section.png" alt="background_section" style="width:950px;"/>

Carregue a página e veja se o fundo está funcionando!  
Seu console à direita deve ficar assim:

<img src="../media/3/after_add_image.png" alt="background_after_add_image" style="width:950px;"/>

---

## Parte 2: A Nave do Jogador

Agora vamos fazer praticamente a mesma coisa, mas com sintaxe diferente, pois a nave do jogador é uma **spritesheet** em vez de uma imagem comum (você verá o motivo na próxima atividade).

Para esta parte, vá até o **Passo 2** na função `preload()` em `Scene1.js`:

<img src="../media/3/step2.png" alt="background player ship step2" style="width:950px;"/>

* `SpriteID` e `SpritePosition` funcionam do mesmo jeito que `imageID` e `imagePosition`.
* `FrameWidth` será **32** e `FrameHeight` será **48**.

Agora, vá até a seção do **player** em `Scene2.js`:

<img src="../media/3/player_section.png" alt="background player_section" style="width:950px;"/>

{{% notice hint %}}
Se a seção do jogador estiver preenchida corretamente, mas a nave não aparecer na tela, tente alterar os valores de **x** e **y**, pois ela pode estar fora da área visível!
{{% /notice %}}

Depois de adicionar a nave do jogador, seu console deverá ficar assim:

<img src="../media/3/after_add_player.png" alt="background after_add_player" style="width:950px;"/>
