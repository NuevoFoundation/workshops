## Conheça o Arduino IDE

Baixe e instale o Arduino IDE em:

* Microsoft Store (instalação mais rápida) - <https://www.microsoft.com/store/productId/9NBLGGH4RSD8>
* ou no site do Arduino <https://www.arduino.cc/en/Main/Software> (escolha a versão mais recente)

Assim que o software for instalado em seu computador, abra-o. Este é o Arduino IDE e é o lugar onde toda a programação acontecerá. Reserve algum tempo para olhar ao redor e se familiarizar com ele.

![Alt Text: Imagem rotulada do Arduino IDE](../img/ArduinoIDE-labeled.png)
*<https://www.makerspaces.com/simple-arduino-projects-beginners/>*

1. Barra de menu: dá acesso às ferramentas necessárias para criar e salvar sketches do Arduino.
2. Botão Verificar: compila o código e verifica se há erros de grafia ou sintaxe.
3. Botão Enviar: envia o código para a placa conectada, como o Arduino Uno neste caso. As luzes na placa piscarão rapidamente durante o envio.
4. Novo Sketch: abre uma nova janela contendo um sketch em branco.
5. Nome do Sketch: quando o sketch é salvo, o nome do sketch é exibido aqui.
6. Abrir Sketch Existente: permite abrir um sketch salvo ou um dos exemplos armazenados.
7. Salvar Sketch: isso salva o sketch que você tem aberto no momento.
8. Monitor Serial: quando a placa está conectada, isso exibirá as informações seriais do seu Arduino.
9. Área de código: esta área é onde você compõe o código do sketch que diz à placa o que fazer.
10. Área de mensagem: esta área informa o status sobre ação de salvar, compilar código, erros e mais.
11. Console de texto: mostra os detalhes de mensagens de erro, tamanho do programa que foi compilado e informações adicionais.
12. Placa e Porta Serial: informa qual placa está sendo usada e a que porta serial ela está conectada.

## Conecte o seu Arduino

Neste ponto, você está pronto para conectar o seu Arduino ao seu computador. Conecte uma extremidade do cabo USB ao Arduino Uno e a outra extremidade à porta USB do seu computador.

Assim que a placa estiver conectada, você precisará ir em Ferramentas, depois em Placa e, finalmente, selecionar Arduino Uno.

![Alt Text: Captura de tela do Arduino IDE mostrando como selecionar o tipo de placa](../img/board-select.png)

Em seguida, você deve informar ao Arduino qual porta está usando em seu computador.

Para selecionar a porta, vá em Ferramentas, em Porta e selecione a porta que diz Arduino.

![Alt Text: Captura de tela do Arduino IDE mostrando como selecionar a porta COMM](../img/COMM-port.png)