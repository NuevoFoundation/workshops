 ---
title: "Interpretando a força do sinal"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

Agora que nosso micro:bit sabe quão forte é o sinal recebido, precisamos usar isso para descobrir o quão perto estamos. Clique na seção Logic e pegue o bloco "if true then / else". Arraste-o para dentro do bloco radio received, logo abaixo de onde definimos a variável de força. Volte para a seção Logic e arraste a comparação 0 = 0 sobre o verdadeiro na linha "if true then". Seu código agora deve ficar assim:

![Espaço de trabalho com instrução if/then/else adicionada ao bloco de eventos](../img/addedLogic.png)

A seguir, diremos ao nosso computador micro:bit como saber se estamos separados por 6 pés. Abra o menu de variáveis ​​e selecione a bolha que diz apenas "força" e arraste-a para cima do primeiro zero em nosso bloco if para que diga `if strength = 0 then`. Agora, clique no sinal de igual (=) para fazer aparecer uma lista de símbolos diferentes. Escolha o símbolo maior que (>). Por último, clique no último zero em nossa instrução if e substitua-o por `-67`. Seu bloco rosa "on radio received" agora deve ficar assim:

![Espaço de trabalho com instrução if/then/else adicionada ao bloco de eventos](../img/completedCondition.png)

Você deve estar se perguntando: "Por que -67? Parece um número aleatório." -67 dBm (isso é decibéis-miliwatts) é o nível de potência que já medimos antes do tempo quando dois micro:bits estão separados por 6 pés (1,83 metro). Diferentes rádios Bluetooth, como o do seu telefone, podem ter intensidades diferentes à mesma distância. Quanto mais próximo o seu sinal estiver de 0, mais forte ele será e mais próximo você estará do outro rádio. Uma intensidade de sinal mais distante de 0 é mais fraca, o que significa que provavelmente você também está mais longe do rádio.

Isso significa que se o sinal que recebermos for mais forte que -67 dBm (`strenght > -67`), nossos rádios micro:bit estarão a menos de 6 pés de distância um do outro. Mas se o sinal for mais fraco que isso, nossos rádios deverão estar separados por mais de 6 pés.
