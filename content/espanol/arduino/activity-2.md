---
title: "Actividad 2 - Joystick con Salida Serial"
draft: false
weight: 5
---

## Conexión del Joystick

Ahora que entiendes cómo podemos hacer que el sistema proporcione señales desde el programa (salidas) y usar esas señales para controlar LEDs, veamos cómo podemos incorporar entradas dinámicas en el sistema. Para esta actividad utilizaremos una entrada de joystick, similar a los que se usan en consolas de videojuegos.

![Texto Alternativo: Diagrama de conexión para módulo de joystick](../img/act2_Joystick.png)

1. Conecta un extremo de un cable jumper al pin GND del joystick y el otro extremo al pin GND del Elegoo.
2. Conecta un extremo de un cable jumper al pin +5V del joystick y el otro extremo al pin 5V del Elegoo.
3. Conecta un extremo de un cable jumper al pin VRx del joystick y el otro extremo al pin A0 (pin analógico 0) del Elegoo.
4. Conecta un extremo de un cable jumper al pin VRy del joystick y el otro extremo al pin A1 (pin analógico 1) del Elegoo.
5. Conecta un extremo de un cable jumper al pin SW del joystick y el otro extremo al pin 2 (pin digital 2) del Elegoo.
6. Conecta la placa Arduino mediante USB a tu PC y abre la aplicación Arduino IDE.

## Reconocer e imprimir entradas analógicas
Una vez más, usaremos código de ejemplo para nuestros programas. Esta vez lo obtendremos directamente de la página web de Elegoo. Copia el siguiente código en tu Arduino IDE.
``` c++
//www.elegoo.com
//2016.12.09

// Números de pines de Arduino
const int SW_pin = 2; // pin digital conectado a la salida del interruptor
const int X_pin = A0; // pin analógico conectado a la salida X
const int Y_pin = A1; // pin analógico conectado a la salida Y

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Interruptor:  ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("Eje X: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Eje Y: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");
  delay(500); 
}
```
7. Ahora, haz clic en el botón de subida para enviar el programa al Arduino.
8. Haz clic en el botón “Serial Monitor” en la parte superior derecha de la pantalla para mostrar la consola.
![Texto Alternativo: Captura de pantalla del Arduino IDE mostrando la ubicación del botón de monitor serial](../img/SerialMonitor-button.png)
9. Observa cómo los valores de X e Y cambian cuando mueves el joystick.