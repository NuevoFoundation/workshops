---
title: "Faça o pássaro pular e adicione gravidade"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

### O que devemos fazer com o pássaro?

Vamos fazê-lo pular:

Adicione o comando abaixo no arquivo [File: create-game.js]
     spaceKey.onDown.add(jump, this);

### Trabalhando juntos

Na janela Replit abaixo, iniciamos o código com a linha `spaceKey.onDown.add(jump, this);`.

![texto alternativo](../img/jump.png "imagem para adicionar salto para baixo")

No seu console você deverá ver um pássaro Jsappy pulando depois de pressionar **run**:

![texto alternativo](../img/jump_output.png "Imagem de um pássaro saltando")

## Adicione gravidade
### Trabalhando juntos

Na janela Replit abaixo, iniciamos o código com a linha `bird.body.gravity.y = 900;`.

![texto alternativo](../img/gravity.png "imagem para adicionar gravidade ao pássaro")

No seu console você deverá ver um pássaro JSappy pulando com a gravidade depois de pressionar **run**:

![texto alternativo](../img/jump_output.png "pássaro pulando com gravidade")

