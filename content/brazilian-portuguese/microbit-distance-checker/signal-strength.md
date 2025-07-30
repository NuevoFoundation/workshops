---
title: "Interpretanto um sinal de força"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

Agora que nosso micro:bit sabe quão forte é o sinal que está recebendo, precisamos usar isso para descobrir o quão próximos estamos. Clique na seção Lógica e pegue o bloco "se verdadeiro então / senão". Arraste-o para dentro do bloco de rádio recebido, logo abaixo de onde definimos a variável forca. Volte para a seção Lógica e arraste a comparação 0 = 0 em cima do verdadeiro na linha "se verdadeiro então". Seu código deve ficar assim:

![Ambiente de trabalho com a instrução if/then/else adicionada ao bloco de evento](../img/addedLogic.png)

Agora, vamos ensinar ao nosso micro:bit como saber se estamos a 2 metros de distância. Abra o menu de variáveis e selecione a bolha que diz apenas "forca" e arraste-a para cima do primeiro zero no nosso bloco if, para que fique `se forca = 0 então`. Agora, clique no sinal de igual (=) para aparecer uma lista de símbolos diferentes. Escolha o símbolo de maior que (>). Por fim, clique no último zero na nossa instrução if e substitua por `-67`. Seu bloco rosa "ao receber rádio" deve ficar assim:

![Ambiente de trabalho com a instrução if/then/else adicionada ao bloco de evento](../img/completedCondition.png)

Você pode estar se perguntando: "Por que -67? Parece um número aleatório." -67 dBm (decibel-miliwatts) é o nível de potência que já medimos anteriormente quando dois micro:bits estão a 2 metros de distância. Diferentes rádios Bluetooth, como o do seu celular, podem ter uma força diferente na mesma distância. Quanto mais próximo de 0 estiver o sinal, mais forte ele é e mais perto você está do outro rádio. Um sinal mais distante de 0 é mais fraco, o que significa que você provavelmente também está mais longe do rádio.

Isso significa que, se o sinal que recebemos for mais forte que -67 dBm (`forca > -67`), nossos micro:bits estão a menos de 2 metros um do outro. Mas se o sinal for mais fraco que isso, nossos rádios devem estar a mais de 2 metros de distância.
