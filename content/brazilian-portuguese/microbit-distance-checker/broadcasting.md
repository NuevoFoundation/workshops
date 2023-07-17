---
title: "Transmitindo um sinal"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

## Ligando o Rádio

Hoje usaremos o rádio Bluetooth em seu micro:bit para descobrir a que distância você está de outros micro:bits. A primeira coisa que precisamos fazer é ligar o rádio e sintonizá-lo em um canal. Clique na seção que diz Rádio. É a seção rosa que é a quinta a partir do topo. Escolha "radio set group 1" e arraste-o para o bloco azul "on start" na área de trabalho. Certifique-se de usar o mesmo número de grupo que todos os outros. Se você usar números de grupo diferentes, seus micro:bits não poderão se comunicar. Seu espaço de trabalho deve se parecer com o abaixo depois que você terminar:

![Menu MakeCode mostrando a seção Radio selecionada](../img/radioMenu.png)
![Espaço de trabalho MakeCode mostrando o bloco "radio set group" no bloco "on start"](../img/setRadioGroup.png)

## Transmitindo um sinal

Agora que nossos micro:bits estão configurados para ouvir, precisamos enviar um sinal para eles captarem. Clique na seção Rádio novamente. Desta vez, arraste o bloco "número de envio de rádio 0" para o bloco azul "para sempre" em sua área de trabalho. Isso fará com que seu micro:bit envie continuamente esse número para qualquer dispositivo que esteja ouvindo no mesmo grupo.

![Espaço de trabalho MakeCode mostrando o bloco "número de envio de rádio" no bloco "para sempre"](../img/radioSendNumber.png)