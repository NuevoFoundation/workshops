## Conectando Nosso LED Piscante

Para a sua introdução a este sistema, vamos ligar e desligar um LED. A partir disso, podemos entender o básico da circuitaria e como nosso programa pode executar e manipular componentes.

![Alt Text: Diagrama de fiação para o LED](../img/act1_LED1.png)

1. Conecte o fio longo (ânodo) do seu LED ao pino 25J e o fio curto (cátodo) em qualquer lugar da linha azul [-].
2. Conecte um resistor de 220 com uma perna no 25H e a outra em qualquer lugar da linha vermelha [+].
3. Conecte uma extremidade de um fio jumper em qualquer lugar na mesma linha vermelha [+] na Protoboard do Passo 2 e a outra em 5V no Elegoo.
4. Conecte uma extremidade de um fio jumper em 31Z na Protoboard e a outra em GND (terra) no Elegoo.
5. Conecte a placa do Arduino via USB ao seu PC e abra o aplicativo Arduino IDE.

{{% notice info %}}
Codificar os fios por cores é comum e realmente útil! Aqui, usamos vermelho para carga positiva e preto para carga negativa, mas a cor não importa desde que você consiga se lembrar do que é o quê.
{{% /notice %}}

## Abrindo o Código de Exemplo do LED

6. Clique em Arquivo -> Exemplos -> 01.Basics -> Blink

![Alt Text: Imagem mostrando como encontrar o código de exemplo Blink](../img/Blink-sample-code.png)

7. Agora, clique no botão de upload para implantar o programa no Arduino.

{{% notice info %}}
EXTRA: Observe o momento em que o LED liga e desliga. O que você acha que poderia mudar no programa para modificar esse tempo?
Se você disse o número 1000 em delay (1000); você está CERTO!
Mude esse número (não se esqueça de clicar no botão de upload novamente).
Notou alguma diferença? Por que você acha que 1000 é 1 segundo? Quanto tempo seriam 10 minutos? Por quê?

{{% /notice %}}