---
title: "Configurar o PC"
draft: false
weight: 2
---

## Conhecendo o IDE do Arduino

Baixe e instale o IDE do Arduino de:

* a Microsoft Store (instalação mais rápida) - <https://www.microsoft.com/store/productId/9NBLGGH4RSD8>
* ou do site do Arduino <https://www.arduino.cc/en/Main/Software> (escolha a versão mais recente)

Uma vez que o software tenha sido instalado no seu computador, vá em frente e abra-o. Este é o IDE do Arduino e é o local onde toda a programação vai acontecer. Reserve algum tempo para olhar ao redor e se sentir confortável com isso.

![Texto Alt: Imagem rotulada do IDE do Arduino](../img/ArduinoIDE-labeled.png)
*<https://www.makerspaces.com/simple-arduino-projects-beginners/>*

1. Barra de menus: Dá acesso às ferramentas necessárias para criar e salvar esboços Arduino.
2. Botão Verificar: Compila seu código e verifica se há erros de ortografia ou sintaxe.
3. Botão Upload: Envia o código para a placa que está conectada, como o Arduino Uno, neste caso.  As luzes na placa piscarão rapidamente durante o upload.
4. Novo esboço: Abre uma nova janela contendo um esboço em branco.
5. Nome do esboço: Quando o esboço é salvo, o nome do esboço é exibido aqui.
6. Abrir esboço existente: Permite que você abra um esboço salvo ou um dos exemplos armazenados.
7. Salvar esboço: Isso salva o esboço que você tem aberto no momento.
8. Monitor serial: Quando a placa estiver conectada, isso exibirá as informações seriais do seu Arduino
9. Área de Código: Esta área é onde você compõe o código do esboço que diz ao quadro o que fazer.
10. Área de mensagem: Esta área informa o status sobre como salvar, compilar código, erros e muito mais.  
11. Console de texto: Mostra os detalhes de uma mensagem de erro, tamanho do programa que foi compilado e informações adicionais.
12. Placa e porta serial: informa qual placa está sendo usada e a qual porta serial ela está conectada.

## Ligue o seu Arduino

Neste ponto, você está pronto para conectar seu Arduino ao seu computador.  Conecte uma extremidade do cabo USB ao Arduino Uno e, em seguida, a outra extremidade do USB à porta USB do seu computador.

Uma vez que a placa está conectada, você precisará ir para Ferramentas, em seguida, Board e, finalmente, selecione Arduino Uno.

![Alt Text: Screenshot do Arduino IDE mostrando como selecionar o nosso tipo de placa](../img/board-select.png)

Em seguida, você deve informar ao Arduino qual porta você está usando no seu computador.

Para selecionar a porta, vá para Ferramentas e, em seguida, Porta e, em seguida, selecione a porta que diz Arduino.

![Alt Text: Captura de tela do Arduino IDE mostrando como selecionar a porta COMM](../img/COMM-port.png)
