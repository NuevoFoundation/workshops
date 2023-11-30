---
title: "Transmitindo um sinal"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

## Ligando o rádio

Hoje usaremos o rádio Bluetooth no seu micro:bit para descobrir a que distância você está de outros micro:bits. A primeira coisa que precisamos fazer é ligar o rádio e sintonizá-lo em um canal. Clique na seção que diz Rádio. É a seção rosa que fica em quinto lugar a partir do topo. Escolha "grupo de conjunto de rádio 1" e arraste-o para o bloco azul "on start" na área de trabalho. Certifique-se de usar o mesmo número de grupo que todos os outros. Se você usar números de grupo diferentes, seus micro:bits não conseguirão se comunicar entre si. Seu espaço de trabalho deve ficar parecido com o abaixo depois de terminar:

![Menu MakeCode mostrando a seção Rádio selecionada](../img/radioMenu.png)
![Área de trabalho MakeCode mostrando o bloco "grupo de conjunto de rádio" no bloco "on start"](../img/setRadioGroup.png)

## Transmitindo um sinal

Agora que nossos micro:bits estão configurados para escutar, precisamos enviar um sinal para eles captarem. Clique na seção Rádio novamente. Desta vez, arraste o bloco “radio send number 0” para o bloco azul “forever” em sua área de trabalho. Isso fará com que seu micro:bit envie continuamente esse número para qualquer dispositivo que esteja ouvindo no mesmo grupo.

![Área de trabalho MakeCode mostrando o bloco "número de envio de rádio" no bloco "para sempre"](../img/radioSendNumber.png)
