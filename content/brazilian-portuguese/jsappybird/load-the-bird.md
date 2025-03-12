---
title: "Carregue a imagem do pássaro e altere o texto da tela"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

Primeiramente vamos carregar o Flappy e colocá-lo na tela.

Adicione o comando abaixo no arquivo [File: load-sprites.js]
      ```
      game.load.image('bird','assets/bird.png');
       ```
       
### Trabalhando juntos

Na janela Replit abaixo, iniciamos o código com a linha `game.load.image('bird', 'assets/bird.png');`.

![texto alternativo](../img/loadbird.png "imagem para adicionar o pássaro no arquivo")

No seu console você deverá ver um pássaro Jsappy depois de pressionar **run** e depois a barra de espaço:

![texto alternativo](../img/loadbird_output.png "imagem de pássaro na saída")

## Altere o texto da tela

Vamos alterar o texto da tela inicial:

Adicione o comando abaixo no arquivo [Arquivo: start-screen.js]
     var text = game.add.text(0, 0, "Pressione espaço para iniciar", textOptions);
     
### Trabalhando juntos

Na janela Replit abaixo, iniciamos o código com a linha `var text = game.add.text(0, 0, "Pressione espaço para iniciar", textOptions);`.

![texto alternativo](../img/startscreen.png "imagem para adicionar o pássaro no arquivo")

Em seu console você deverá ver `Pressione espaço para iniciar` depois de pressionar **run**:

![texto alternativo](../img/startscreen_output.png "imagem de pássaro na saída")
