---
title: "Recebendo uma mensagem"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

Agora que estamos enviando mensagens e ouvindo-as, precisamos usar essas informações para descobrir quão próximos ou distantes estão nossos micro:bits. Para fazer isso, precisamos saber quão forte é o sinal que estamos recebendo. Volte para a seção Radio e desta vez arraste o bloco "on radio received (receivedNumber)" e arraste-o para um local vazio em sua área de trabalho. Não deve estar dentro de nenhum outro bloco.

Este bloco diz ao nosso micro:bit para fazer algo sempre que receber um número enviado de outro micro:bit.

![Bloco "On radio received" adicionado ao espaço de trabalho](../img/onRadioReceived.png)

Em seguida, clique na seção vermelha Variáveis ​​e clique em "Make a Variable...". Na caixa de texto, digite “strenght” como o nome da sua nova variável e clique em “Ok ✔”.

![Menu MakeCode mostrando a seção Variables ​​selecionada](../img/makeVariable.png)
![A janela pop-up do nome da variável](../img/variableModal.png)

Agora, volte ao menu Variables ​​​​e arraste "set strenght to 0" dentro do bloco rosa "on radio received (receivedNumber)". Em seguida, volte ao menu Radio e arraste "received packet (signal strength)" em cima de `0️` em "definir intensidade para 0️". Quando terminar, seu espaço de trabalho deverá ser parecido com isto:

![Espaço de trabalho com blocos de pacotes no início, para sempre e recebidos preenchidos](../img/savedRSSI.png)

Variáveis ​​são simplesmente locais onde podemos armazenar informações com um nome amigável para deixar claro o que está armazenado dentro delas. Então, ao criar uma variável chamada `strenght`, o que estamos fazendo é reservar algum espaço para armazenar um valor, neste caso a FORÇA medida do sinal da mensagem que recebemos. Podemos então simplesmente usar o nome `strenght` em qualquer lugar onde quisermos verificar o valor atual interno ou compará-lo com outra coisa. Se recebermos uma nova mensagem posteriormente com um sinal mais forte ou mais fraco, o valor de `strenght` será atualizado automaticamente para esse novo valor. Daí o bloco "on radio received": toda vez que recebemos uma nova mensagem, o valor de `strenght` é atualizado para a intensidade do sinal mais recente sem que você precise fazer nada manualmente.