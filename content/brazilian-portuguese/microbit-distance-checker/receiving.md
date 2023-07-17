---
title: "Recebendo a Mensagem"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

Agora que estamos enviando mensagens e ouvindo-as, precisamos usar essa informação para descobrir quão próximos ou distantes estão nossos micro:bits. Para fazer isso, precisamos saber a intensidade do sinal que estamos recebendo. Volte para a seção Rádio e desta vez arraste o bloco "no rádio recebido (receivedNumber)" e arraste-o para um local vazio em sua área de trabalho. Não deve estar dentro de nenhum outro bloco.

Este bloco diz ao nosso micro:bit para fazer algo sempre que recebe um número enviado de outro micro:bit.

![Bloco "No rádio recebido" adicionado ao espaço de trabalho](../img/onRadioReceived.png)

Em seguida, clique na seção vermelha Variáveis e clique em "Criar uma variável...". Na caixa de texto, digite "força" como nome da nova variável e clique em "Ok ✔".

![Menu MakeCode mostrando a seção Variáveis selecionada](../img/makeVariable.png)
![A janela pop-up do nome da variável](../img/variableModal.png)

Agora, volte ao menu Variáveis e arraste "definir força para 0" dentro do bloco rosa "no rádio recebido (receivedNumber)". Em seguida, volte ao menu Rádio e arraste "pacote recebido (força do sinal)" em cima de `0️` em "definir força para 0️". Quando terminar, seu espaço de trabalho deve ficar mais ou menos assim:

![Espaço de trabalho com on start, forever e blocos de pacotes recebidos preenchidos](../img/savedRSSI.png)

As variáveis são simplesmente lugares onde podemos armazenar informações com um nome amigável para deixar claro o que está armazenado dentro delas. Então, ao criar uma variável chamada `strength`, o que estamos fazendo é reservar um espaço para armazenar um valor, no caso a intensidade do sinal medido da mensagem que recebemos. Podemos simplesmente usar o nome `strength` em qualquer lugar que quisermos para verificar o valor atual interno ou compará-lo com outra coisa. Se recebermos uma nova mensagem posteriormente com um sinal mais forte ou mais fraco, o valor de `strength` será atualizado para esse novo valor automaticamente. Daí o bloco "no rádio recebido": toda vez que recebemos uma nova mensagem, o valor de `strength` é atualizado para a última intensidade de sinal sem que você tenha que fazer nada manualmente.