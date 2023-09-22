## Conectando o Joystick

Agora que você entende como podemos fazer o sistema fornecer sinais a partir do programa (saídas) e usá-los para controlar LEDs, vamos ver como podemos obter entradas dinâmicas no sistema. Para esta atividade, usaremos uma entrada de joystick, semelhante às usadas em consoles de videogame.

![Alt Text: Diagrama de fiação para o módulo Joystick](../img/act2_Joystick.png)

1.	Conecte uma extremidade de um fio jumper ao GND do joystick e a outra ao GND do Elegoo.
2.	Conecte uma extremidade de um fio jumper a +5V no joystick e a outra a 5V no Elegoo.
3.	Conecte uma extremidade de um fio jumper a VRx no joystick e a outra a A0 (pino analógico 0) no Elegoo.
4.	Conecte uma extremidade de um fio jumper a VRy no joystick e a outra a A1 (pino analógico 1) no Elegoo.
5.	Conecte uma extremidade de um fio jumper a SW no joystick e a outra a 2 (pino digital 2) no Elegoo.
6.	Conecte a placa Arduino via USB ao seu PC e abra o aplicativo Arduino IDE.

## Reconhecendo e imprimindo entradas analógicas
Usaremos novamente o código de exemplo para nossos programas. Desta vez, pegaremos o código do próprio site da Elegoo. Copie o seguinte para o seu Arduino IDE.
``` c++
//www.elegoo.com
//2016.12.09

// Números dos pinos Arduino
const int SW_pin = 2; // pino digital conectado à saída do interruptor
const int X_pin = A0; // pino analógico conectado à saída X
const int Y_pin = A1; // pino analógico conectado à saída Y

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Switch:  ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("X-axis: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Y-axis: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");
  delay(500); 
}
```
7.	Agora clique no botão de upload para implantar o programa no Arduino.
8.	Clique no botão "Monitor Serial" no canto superior direito da tela para exibir o console.
![Alt Text: Captura de tela do Arduino IDE mostrando a localização do botão de monitor serial](../img/SerialMonitor-button.png)
9.	Observe como os valores de X e Y mudam quando você move o joystick.