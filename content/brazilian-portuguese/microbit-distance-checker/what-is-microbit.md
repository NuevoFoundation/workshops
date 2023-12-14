---
title: "O que é um micro:bit?"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

## O que é um micro:bit?

Um micro:bit é um minicomputador programável! Ele pode ser codificado a partir de qualquer navegador da web em várias linguagens como javaScript, Python, Scratch e Blocks. Para nossa sessão de hoje, usaremos blocos MakeCode.

Seu micro:bit possui os seguintes recursos físicos:

- 25 LEDs programáveis ​​individualmente
- 2 botões programáveis
- Pinos de conexão física
- Sensores de movimento (acelerômetro e bússola)
- Comunicação sem fio via rádio bluetooth
- Interface USB

<!---![Imagem de micro:bits simulados com o rádio em destaque](../img/simulatorStart.png) --->
<img src="../img/microbit-hardware-access.jpg" alt="microbit components" style="width:800px;"/>

Se quiser saber mais sobre cada componente individual e todos os recursos que acompanham seu micro:bit, você pode clicar [aqui](https://micro:bit.org/guide/features/).

Vá em frente e retire o micro:bit e o resto dos componentes da bolsa. Você deve ter um micro:bit, 2 baterias, um cabo micro USB e o suporte da bateria (a caixa preta com os fios vermelho e preto saindo dela). Se você estiver faltando alguma coisa ou precisar de ajuda, sinta-se à vontade para perguntar a um dos instrutores!

## Usando o Simulador

Embora não seja tão divertido quanto ter o hardware físico real, você também pode usar o simulador para ver seu código funcionando. Procure as imagens de micro:bits off no lado esquerdo da tela. Caso não os veja, procure o símbolo ">" à esquerda e clique nele para exibir o simulador. Nos micro:bits simulados, encontre a antena de rádio Bluetooth. Parece uma onda quadrada amarela:

<!---![componentes de microbits](../img/microbit-hardware-access.jpg) --->
<img src="../img/simulatorStart.png" alt="Image of simulated micro:bits with the radio highlighted" style="width:500px;"/>

Se você passar o cursor do mouse sobre esta antena em forma de onda, a intensidade real do sinal aparecerá ao lado dela. Você pode então clicar na antena e arrastar o cursor do mouse para a esquerda para diminuir a intensidade do sinal ou para a direita para aumentá-la. Se você obtiver um sinal forte o suficiente (`força > -67`), o outro micro:bit será atualizado para mostrar uma cara carrancuda. Enfraqueça o sinal novamente para fazer o micro:bit sorrir.

<!---![Semeando RSSI](../img/showingRSSI.png) --->
<img src="../img/showingRSSI.png" alt="Sowing RSSI" style="width:300px;"/> 
<!---![Imagem do simulador triste](../img/sadSimulator.png) --->
<img src="../img/sadSimulator.png" alt="Image of sad simulator" style="width:300px;"/>

Agora, vamos começar a codificar...