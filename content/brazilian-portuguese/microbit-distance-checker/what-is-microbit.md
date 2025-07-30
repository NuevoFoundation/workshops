---
title: "O que é micro:bit?"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

## O que é um micro:bit?

Um micro:bit é um microcontrolador programável! Ele pode ser programado a partir de qualquer navegador web em várias linguagens como JavaScript, Python, Scratch e Blocos. Para nossa sessão de hoje, usaremos os Blocos do MakeCode.

Seu micro:bit possui vários recursos e sensores, incluindo:

- 25 LEDs endereçáveis individualmente
- 2 botões físicos
- 2 pinos de entrada/saída (IO)
- Sensor de bússola
- Acelerômetro (sensor de movimento)
- Bluetooth

<!---![Imagem dos micro:bits simulados com o rádio destacado](../img/simulatorStart.png) --->
<img src="../img/microbit-hardware-access.jpg" alt="componentes do microbit" style="width:800px;"/>

Se quiser saber mais sobre cada componente e todos os recursos do seu micro:bit, clique [aqui](https://micro:bit.org/guide/features/).

Pegue o micro:bit e o restante dos componentes da sacola. Você deve ter um micro:bit, 2 pilhas, um cabo micro USB e o suporte de pilhas (a caixa preta com fios vermelho e preto saindo dela). Se estiver faltando algo ou precisar de ajuda, peça a um dos instrutores!

## Usando o Simulador

Embora não seja tão divertido quanto ter o hardware físico, você também pode usar o simulador para ver seu código funcionando. Procure as imagens dos micro:bits no lado esquerdo da tela. Se não as encontrar, procure pelo símbolo ">" à esquerda e clique nele para mostrar o simulador. Nos micro:bits simulados, encontre a antena de rádio Bluetooth. Ela parece uma onda quadrada amarela:

<!---![componentes do microbit](../img/microbit-hardware-access.jpg) --->
<img src="../img/simulatorStart.png" alt="Imagem dos micro:bits simulados com o rádio destacado" style="width:500px;"/>

Se você passar o mouse sobre essa antena em forma de onda, a força real do sinal aparecerá ao lado. Você pode clicar na antena e arrastar o mouse para a esquerda para diminuir a força do sinal ou para a direita para aumentá-la. Se o sinal ficar forte o suficiente (`forca > -67`), o outro micro:bit mostrará uma carinha triste. Enfraqueça o sinal novamente para fazer o micro:bit sorrir.

<!---![Mostrando RSSI](../img/showingRSSI.png) --->
<img src="../img/showingRSSI.png" alt="Mostrando RSSI" style="width:300px;"/> 
<!---![Imagem do simulador triste](../img/sadSimulator.png) --->
<img src="../img/sadSimulator.png" alt="Imagem do simulador triste" style="width:300px;"/>

Agora, vamos programar!