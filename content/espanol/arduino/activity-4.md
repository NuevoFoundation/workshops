```md
---
title: "Actividad 4 - Pantalla LCD"
draft: false
weight: 7
---

## Diagrama de cableado

Ahora que has dominado la emisión de señales a los LEDs, veamos cómo mostrar texto con una pantalla simple. Solo se utiliza 1 resistencia (5K) para limitar el brillo de la pantalla. Intenta realizar el cableado de acuerdo con el diagrama sin instrucciones específicas.

![Texto alternativo: Diagrama de cableado para Elegoo y pantalla LCD](../img/LCD-wiring.png)

## El Código:
```c++
//www.elegoo.com
//2016.12.9

/*
  Biblioteca LiquidCrystal - Hello World

 Demuestra el uso de una pantalla LCD de 16x2. La biblioteca LiquidCrystal
 funciona con todas las pantallas LCD que sean compatibles con el
 controlador Hitachi HD44780. Hay muchas de ellas disponibles, y por lo general
 se pueden identificar por la interfaz de 16 pines.

 Este programa imprime "Hello World!" en la pantalla LCD
 y muestra el tiempo.

  El circuito:
 * Pin RS del LCD al pin digital 7
 * Pin Enable del LCD al pin digital 8
 * Pin D4 del LCD al pin digital 9
 * Pin D5 del LCD al pin digital 10
 * Pin D6 del LCD al pin digital 11
 * Pin D7 del LCD al pin digital 12
 * Pin R/W del LCD a tierra
 * Pin VSS del LCD a tierra
 * Pin VCC del LCD a 5V
 * Resistencia de 10K:
   * extremos a +5V y tierra
   * terminal deslizante al pin VO del LCD (pin 3)

 Biblioteca originalmente añadida el 18 de abril de 2008
 por David A. Mellis
 biblioteca modificada el 5 de julio de 2009
 por Limor Fried (http://www.ladyada.net)
 ejemplo añadido el 9 de julio de 2009
 por Tom Igoe
 modificado el 22 de noviembre de 2010
 por Tom Igoe

 Este código de ejemplo es de dominio público.

 http://www.arduino.cc/en/Tutorial/LiquidCrystal
 */

// incluir el código de la biblioteca:
#include <LiquidCrystal.h>

// inicializar la biblioteca con los números de los pines de la interfaz
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

void setup() {
  // configurar el número de columnas y filas del LCD:
  lcd.begin(16, 2);
  // Imprimir un mensaje en el LCD.
  lcd.print("Hello, World!");
}

void loop() {
  // establecer el cursor en la columna 0, línea 1
  // (nota: la línea 1 es la segunda fila, ya que las cuentas comienzan en 0):
  lcd.setCursor(0, 1);
  // imprimir el número de segundos desde el reinicio:
  lcd.print(millis() / 1000);
}
```
```