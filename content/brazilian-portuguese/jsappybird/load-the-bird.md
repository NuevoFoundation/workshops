---
title: "Carregue a imagem do passarinho e mude o texto da tela"
date: 2023-09-11T13:24:17-07:00
draft: false
weight: 2
---

Primeiro, vamos carregar a imagem do Flappy e mostrá-lo na tela.

Escreva o seguinte código no arquivo [Arquivo: load-sprites.js]:

```js
      game.load.image('bird','assets/bird.png');
```
       
### Trabalhando Juntos

Na pagina do Replit, como podemos ver abaixo, começamos o código com `game.load.image('bird', 'assets/bird.png');`.

![alt text](../img/loadbird.png "imagem para adicionar o passarinho ao arquivo")

Após clicar em **run** ou executar e depois pressionar a barra de espaço, você verá um passarinho Jsappy no seu console:

![alt text](../img/loadbird_output.png "imagem do passarinho no console")

## Mude o texto na tela

Agora, mudaremos o texto da tela inicial:

Escreva o seguinte código no arquivo [Arquivo: start-screen.js]
```js
     var text = game.add.text(0, 0, "Pressione a barra de espaço para iniciar", textOptions);
```
     
### Trabalhando Juntos

Na pagina do Replit, como podemos ver abaixo, começamos o código com `var text = game.add.text(0, 0, "Pressione a barra de espaço para iniciar", textOptions);`.

![alt text](../img/startscreen.png "image to add the bird in the file")

Ao clicar em **run** ou executar, você verá o texto `Pressione a barra de espaço para iniciar` em seu console:

![alt text](../img/startscreen_output.png "imagem do passarinho no console")
