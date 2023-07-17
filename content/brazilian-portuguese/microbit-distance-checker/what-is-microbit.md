---
title: "O que é um micro:bit?"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

## O que é um micro:bit?

Um micro:bit é um minicomputador programável! Ele pode ser codificado em qualquer navegador da Web em várias linguagens, como javaScript, Python, Scratch e Blocks. Para nossa sessão de hoje, usaremos blocos MakeCode.

Seu micro:bit tem as seguintes características físicas:

- 25 LEDs programáveis individualmente
- 2 botões programáveis
- Pinos de conexão física
- Sensores de movimento (acelerômetro e bússola)
- Comunicação sem fio via rádio bluetooth
- Interface USB

<!---![Imagem do micro:bits simulado com o rádio destacado](../img/simulatorStart.png) --->
<img src="../img/microbit-hardware-access.jpg" alt="microbit components" style="width:800px;"/>

Se você quiser saber mais sobre cada componente individual e todos os recursos que acompanham seu micro:bit, clique [aqui](https://micro:bit.org/guide/features/).

Vá em frente e retire o micro:bit e o restante dos componentes da bolsa. Você deve ter um micro:bit, 2 baterias, um cabo micro USB e o suporte da bateria (a caixa preta com os fios vermelho e preto saindo dela). Se estiver faltando alguma coisa ou precisar de ajuda, sinta-se à vontade para perguntar a um dos instrutores!

## Usando o Simulador

Embora não seja tão divertido quanto ter o hardware físico real, você também pode usar o simulador para ver seu código funcionando. Procure as imagens de micro:bits off no lado esquerdo da tela. Se você não os vir, procure o símbolo ">" à esquerda e clique nele para exibir o simulador. Nos micro:bits simulados, encontre a antena de rádio Bluetooth. Parece uma onda quadrada amarela:

<!---![componentes microbit](../img/microbit-hardware-access.jpg) --->
<img src="../img/simulatorStart.png" alt="Imagem de micro:bits simulados com o rádio destacado" style="width:500px;"/>

Se você passar o cursor do mouse sobre essa antena em forma de onda, a intensidade real do sinal aparecerá ao lado dela. Você pode clicar na antena e arrastar o cursor do mouse para a esquerda para diminuir a intensidade do sinal ou para a direita para aumentá-la. Se você obtiver um sinal forte o suficiente (`força > -67`), o outro micro:bit será atualizado para mostrar uma carranca. Enfraqueça o sinal novamente para fazer o micro:bit sorrir.

<!---![Semeando RSSI](../img/showingRSSI.png) --->
<img src="../img/showingRSSI.png" alt="Semeando RSSI" style="width:300px;"/> 
<!---![Image of sad simulator](../img/sadSimulator.png) --->
<img src="../img/sadSimulator.png" alt="Imagem do triste simulador" style="width:300px;"/>

Agora vamos codificar...