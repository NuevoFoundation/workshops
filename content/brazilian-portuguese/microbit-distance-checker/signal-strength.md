---
title: "Interpretando a intensidade do sinal"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

Agora que nosso micro:bit sabe o quão forte é o sinal que recebeu, precisamos usar isso para descobrir o quão perto estamos. Clique na seção Lógica e pegue o bloco "if true then / else". Arraste-o para dentro do bloco de rádio recebido, logo abaixo de onde definimos a variável de intensidade. Volte para a seção Lógica e arraste a comparação 0 = 0 sobre o verdadeiro na linha "se verdadeiro, então". Seu código agora deve ficar assim:

![Espaço de trabalho com instrução if/then/else adicionada ao bloco de eventos](../img/addedLogic.png)

Em seguida, diremos ao nosso computador micro:bit como saber se estamos a 2 metros de distância. Abra o menu de variáveis e selecione a bolha que diz apenas "força" e arraste-a para cima do primeiro zero em nosso bloco if para que diga `se força = 0 então'. Agora, clique no sinal de igual (=) para fazer aparecer uma lista de diferentes símbolos. Escolha o símbolo maior que (>). Por fim, clique no último zero em nossa instrução if e substitua-o por `-67`. Seu bloco rosa "no rádio recebido" agora deve ficar assim:

![Espaço de trabalho com instrução if/then/else adicionada ao bloco de eventos](../img/completedCondition.png)

Você pode estar se perguntando: "Por que -67? Parece um número aleatório." -67 dBm (que é decibel-miliwatts) é o nível de potência que já medimos antes do tempo quando dois micro:bits estão separados por 6 pés. Diferentes rádios Bluetooth, como o do seu telefone, podem ter uma intensidade diferente na mesma distância. Quanto mais próximo seu sinal estiver de 0, mais forte ele será e mais próximo você estará do outro rádio. Uma força de sinal mais distante de 0 é mais fraca, o que significa que você provavelmente também está mais longe do rádio.

Isso significa que se o sinal que recebemos for mais forte que -67 dBm (`força > -67`), nossos rádios micro:bit estarão a menos de 2 metros de distância um do outro. Mas se o sinal for mais fraco do que isso, nossos rádios devem estar a mais de 2 metros de distância.