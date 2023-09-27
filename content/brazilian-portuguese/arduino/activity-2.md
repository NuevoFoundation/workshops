---
title: "Atividade 2 - Joystick com saída serial"
draft: false
weight: 5
---

## Fiação do joystick

Agora que você entendeu como podemos fazer com que o sistema forneça sinais do programa (saídas) e os use para controlar LEDs, vamos ver como podemos obter entradas dinâmicas no sistema. Para esta atividade utilizaremos uma entrada de joystick, semelhante às utilizadas nas consolas de videojogos.

![Alt Text: Diagrama de fiação para o módulo Joystick](../img/act2_Joystick.png)

1. Conecte uma extremidade de um fio de jumper ao GND no joystick e a outra ao GND no Elegoo.
2. Conecte uma extremidade de um fio de jumper a +5V no joystick e a outra a 5V no Elegoo.
3. Conecte uma extremidade de um fio de jumper ao VRx no joystick e a outra ao A0 (pino analógico 0) no Elegoo.
4. Conecte uma extremidade de um fio de jumper ao VRy no joystick e a outra ao A1 (pino analógico 1) no Elegoo.
4. Conecte uma extremidade de um fio de jumper ao VRy no joystick e a outra ao A1 (pino analógico 1) no Elegoo.
5. Conecte uma extremidade de um fio de jumper ao SW no joystick e a outra a 2 (pino digital 2) no Elegoo.
6. Conecte a placa Arduino via USB ao seu PC e abra o aplicativo Arduino IDE.

## Reconhecer e imprimir entradas analógicas
Usaremos novamente o código de exemplo para nossos programas. Desta vez, vamos obtê-lo a partir do próprio site elegoo. Copie o seguinte para o seu IDE Arduino.
``` c++
//www.elegoo.com
//2016.12.09

// Arduino pin numbers
const int SW_pin = 2; // pino digital conectado à saída do switch
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
7. Agora clique no botão de upload para implantar o programa no Arduino.
8. Clique no botão "Serial Monitor" no canto superior direito da tela para exibir o console.
![Atl Text: Captura de tela do Arduino IDE mostrando a localização do botão do monitor serial](../img/SerialMonitor-button.png)
9. Observe como os valores X e Y mudam quando você move o joystick.
