---
title: "Faça o passarinho pular com força & cair rodopiando"
date: 2023-09-11T13:24:17-07:00
draft: false
weight: 4
---

Vamos adicionar força ao passarinho

Escreva o seguinte código no arquivo [File: create-game.js]
    bird.body.velocity.y = -350;
    
{{% notice tip %}}

## Trabalhando Juntos

Na pagina do Replit, como podemos ver abaixo, começamos o código com `bird.body.velocity.y = -350;`.

![alt text](../img/jump_force.png "imagem para adicionar força ao passarinho")

No seu console, você verá um passarinho JSappy pulando com força quando pressionar executar ou **run**:

![alt text](../img/jump_output.png "passarinho pulando com força")

{{% /notice %}}

## Atividade Bônus

Vamos fazer o passarinho pular para cima e para frente:

Escreva o seguinte código no arquivo [File: create-game.js]
    bird.body.velocity.x = 100;

# Passarinho caindo rodopiando

Vamos fazer o passarinho rodopiar enquanto cai:

Escreva o seguinte código no arquivo [File: update-game.js]
    if (bird.angle < 50) {
       bird.angle += 1;
    }

## Comentários:

`If` é um bloco condicional onde verificamos o ângulo do passarinho. Se ele for menor que 50, executamos a condição.
   -bird.angle+=1;

{{% notice tip %}}

## Trabalhando Juntos

Na página do Replit, como podemos ver abaixo, começamos o código com `bird.angle +=1;`.

![alt text](../img/rotate.png "imagem para adicionar rodopio ao passarinho")

No seu console, você verá o passarinho JSappy rodopiando quando pressionar executar ou **run**:

![alt text](../img/rotate_output.png "passarinho rodopiando")

{{% /notice %}}

