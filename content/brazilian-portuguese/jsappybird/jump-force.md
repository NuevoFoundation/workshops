---
title: "Faça o pássaro pular com força e cair com rotação"
date: 2020-07-29T13:24:17-07:00
draft: false
weight: 4
---

Vamos adicionar força ao pássaro

Adicione o comando abaixo no arquivo [File: create-game.js]
    bird.body.velocity.y = -350;
    
{{% notice tip %}}

## Trabalhando juntos

Na janela Replit abaixo, iniciamos o código com a linha `bird.body.velocity.y = -350;`.

![texto alternativo](../img/jump_force.png "imagem para adicionar gravidade ao pássaro")

No seu console você deverá ver um pássaro JSappy pulando com força depois de pressionar **run**:

![texto alternativo](../img/jump_output.png "pássaro pulando com gravidade")

{{% /notice %}}

## Atividade bônus

Vamos fazer o pássaro pular para cima e para frente:

Adicione o comando abaixo no arquivo [File: create-game.js]
    bird.body.velocity.x = 100;

# Pássaro caindo com rotação

Vamos adicionar rotação ao pássaro:

Adicione o comando abaixo no arquivo [File: update-game.js]
    if (bird.angle < 50) {
       bird.angle += 1;
    }

## Comentários:

`If` é um bloco condicional onde verificamos o ângulo do pássaro e se for menor que 50 estamos executando a condição.
   -bird.angle+=1;

{{% notice tip %}}

## Trabalhando juntos

Na janela Replit abaixo, iniciamos o código com a linha `bird.angle +=1;`.

![texto alternativo](../img/rotate.png "imagem para adicionar rotação ao pássaro")

No seu console você deverá ver um pássaro Jsappy girando em um ângulo depois de pressionar **run**:

![texto alternativo](../img/rotate_output.png "pássaro girando")

{{% /notice %}}

