---
title: "Transmitindo um Sinal"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---
## Ligando o Rádio

Vamos usar o rádio Bluetooth do seu micro:bit para descobrir a que distância você está de outros micro:bits. A primeira coisa que precisamos fazer é ligar o rádio e sintonizá-lo em um canal. Clique na seção chamada Rádio. É a seção rosa, a quinta de cima para baixo. Escolha "radio set group 1" e arraste para o bloco azul "on start" no espaço de trabalho. Certifique-se de usar o mesmo número de grupo que todos os outros. Se você usar números de grupo diferentes, seus micro:bits não conseguirão se comunicar. Seu espaço de trabalho deve ficar como o exemplo abaixo depois de terminar:

![Menu do MakeCode mostrando a seção Rádio selecionada](../img/radioMenu.png)
![Espaço de trabalho do MakeCode mostrando o bloco "radio set group" dentro do bloco "on start"](../img/setRadioGroup.png)

## Transmitindo um Sinal

Agora que nossos micro:bits estão configurados para ouvir, precisamos enviar um sinal para eles captarem. Clique novamente na seção Rádio. Desta vez, arraste o bloco "radio send number 0" para dentro do bloco azul "forever" no seu espaço de trabalho. Isso fará com que seu micro:bit envie continuamente esse número para qualquer dispositivo ouvindo no mesmo grupo.

![Espaço de trabalho do MakeCode mostrando o bloco "radio send number" dentro do bloco "forever"](../img/radioSendNumber.png)   