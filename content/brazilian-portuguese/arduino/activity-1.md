---
title: "Atividade 1: LED piscante"
draft: false
weight: 4
---

## Fiação do nosso LED piscante

Para sua introdução a este sistema, vamos ligar e desligar um LED. A partir disso, podemos obter o básico da eletrônica e como nosso programa pode executar e manipular componentes

![Alt Text: Diagrama de fiação para o LED](../img/act1_LED1.png)

1. Conecte o terminal longo (ânodo) do seu LED ao pino 25J e o terminal curto (cátodo) em qualquer lugar na linha azul [-].
2. Conecte um resistor de 220 com uma perna em 25H e a outra em qualquer lugar na linha vermelha [+].
3. Conecte uma extremidade de um fio de jumper em qualquer lugar na mesma linha vermelha [+] na placa de ensaio como no Passo 2 e a outra em 5V no Elegoo.
4. Conecte uma extremidade de um fio de jumper em 31Z na placa de ensaio e a outra em GND (terra) no Elegoo.
5. Conecte a placa Arduino via USB ao seu PC e abra o aplicativo Arduino IDE.

{{% notice info %}}
A codificação de cores dos fios é comum e muito útil! Aqui usamos vermelho para carga positiva e preto para carga negativa, mas a cor não importa desde que você possa lembrar o que é o quê.
 {{% /notice %}}

## Abrindo o código de amostra do LED

6. Clique em arquivo -> Exemplos -> 01.Basics -> Piscar

![Alt Text: Imagem mostrando como encontrar o código de exemplo do Blink](../img/Blink-sample-code.png)

7. Agora clique no botão de upload para implantar o programa no Arduino

{{% notice info %}}
EXTRA: Observe o tempo de ligar e desligar o LED. O que você acha que poderia mudar no programa para modificar esse timing?
Se você disse o número 1000 em atraso (1000); Tens razão!
Altere esse número (não se esqueça de pressionar o botão de upload novamente).
Notou alguma diferença? Por que você acha que 1000 é 1 segundo? Quanto tempo seriam 10 minutos? Porquê?

{{% /notice %}}
