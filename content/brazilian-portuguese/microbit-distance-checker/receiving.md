---
title: "Recebendo uma mensagem"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

Agora que estamos enviando mensagens e ouvindo por elas, precisamos usar essa informação para descobrir a distância entre os micro:bits. Para isso, precisamos saber quão forte é o sinal que estamos recebendo. Volte para a seção Rádio e, desta vez, arraste o bloco "ao receber rádio (receivedNumber)" para um espaço vazio no seu ambiente de trabalho. Ele não deve estar dentro de nenhum outro bloco.

Esse bloco diz ao nosso micro:bit para fazer algo sempre que receber um número enviado de outro micro:bit.

![Bloco "ao receber rádio" adicionado ao ambiente de trabalho](../img/onRadioReceived.png)

Em seguida, clique na seção vermelha Variáveis e depois em "Criar uma variável...". Na caixa de texto, digite "forca" como o nome da sua nova variável e clique em "Ok ✔".

![Menu MakeCode mostrando a seção Variáveis selecionada](../img/makeVariable.png)
![A janela pop-up para nome da variável](../img/variableModal.png)

Agora, volte ao menu Variáveis e arraste "definir forca como 0" para dentro do bloco rosa "ao receber rádio (receivedNumber)". Depois volte ao menu Rádio e arraste "pacote recebido (força do sinal)" em cima do `0️` em "definir forca como 0️". Quando terminar, seu ambiente de trabalho deve ficar assim:

![Ambiente de trabalho com blocos on start, forever e pacote recebido preenchidos](../img/savedRSSI.png)

Variáveis são simplesmente lugares onde podemos armazenar informações com um nome amigável para deixar claro o que está guardado ali. Então, ao criar uma variável chamada `forca`, estamos reservando um espaço para armazenar um valor, neste caso a força do sinal medida da mensagem recebida. Podemos então usar o nome `forca` em qualquer lugar que quisermos verificar o valor atual ou compará-lo com outra coisa. Se recebermos uma nova mensagem depois com um sinal mais forte ou mais fraco, o valor de `forca` é atualizado automaticamente para esse novo valor. Por isso o bloco "ao receber rádio": toda vez que recebemos uma nova mensagem, o valor de `forca` é atualizado para a força do sinal mais recente sem que você precise fazer nada manualmente.
