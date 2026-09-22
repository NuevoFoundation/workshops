---
title: "Arduino - Clave de respuestas"
date: 2024-07-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta es una referencia para profesores del taller **Juego de luz con Arduino**. El taller guía a los estudiantes a través de 4 actividades de hardware utilizando un Arduino UNO y el kit de inicio Elegoo. Todo el código está incluido en el taller, así que esta clave de respuestas consolida las soluciones completas, explica conceptos clave y señala un error en el código fuente que los profesores deben tener en cuenta.
{{% /notice %}}

## Actividad 1: LED parpadeante

### Resumen del cableado

1. Conectar el cable largo del LED (ánodo) al pin 25J, y el cable corto (cátodo) al riel azul [-].
2. Resistor de 220 ohm desde 25H al riel rojo [+].
3. Cable jumper del riel rojo [+] al pin 5V en el Arduino.
4. Cable jumper del riel azul [-] (31Z) al pin GND en el Arduino.
5. Conectar el Arduino vía USB.

### Código

Los estudiantes deben cargar el ejemplo integrado: **File > Examples > 01.Basics > Blink**

El siguiente código es el núcleo funcional del ejemplo integrado Blink. El ejemplo completo cargado por los estudiantes incluye comentarios adicionales y atribuciones.

```c++
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

### Conceptos clave

- `setup()` se ejecuta una vez cuando el Arduino se enciende.
- `loop()` se ejecuta repetidamente para siempre.
- `pinMode()` configura un pin como INPUT o OUTPUT.
- `digitalWrite()` establece un pin en HIGH (encendido) o LOW (apagado).
- `delay(1000)` hace una pausa de 1000 milisegundos (1 segundo).

### Respuesta al desafío adicional

El taller pregunta: "¿Qué podrías cambiar para modificar el tiempo?" Respuesta: cambiar el número en `delay(1000)`. Por ejemplo, `delay(500)` hace que el LED parpadee el doble de rápido. 1000 milisegundos = 1 segundo, por lo que 10 minutos = 600000 milisegundos.

## Actividad 2: Joystick con salida serial

### Resumen del cableado

1. GND del joystick al GND del Arduino.
2. +5V del joystick al pin 5V del Arduino.
3. VRx del joystick al pin analógico A0.
4. VRy del joystick al pin analógico A1.
5. SW del joystick al pin digital 2.
6. Conectar el Arduino vía USB.

### Código

```c++
//www.elegoo.com
//2016.12.09

// Números de pines en el Arduino
const int SW_pin = 2; // Pin digital conectado a la salida del interruptor
const int X_pin = A0; // Pin analógico conectado a la salida X
const int Y_pin = A1; // Pin analógico conectado a la salida Y

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

### Conceptos clave

- `Serial.begin(9600)` inicia la comunicación serial a una velocidad de 9600 baudios.
- `Serial.print()` envía texto al Monitor Serial (hacer clic en el ícono de la lupa en el IDE de Arduino).
- `analogRead()` lee un valor entre 0 y 1023 de un pin analógico.
- `digitalRead()` lee HIGH (1) o LOW (0) de un pin digital.
- `digitalWrite(SW_pin, HIGH)` activa la resistencia pull-up interna en el pin 2, de modo que el interruptor lee HIGH cuando no está presionado y LOW cuando está presionado.
- La posición central del joystick es aproximadamente X=490, Y=490.

### Salida serial esperada

Cuando el joystick está centrado, los estudiantes deberían ver valores cercanos a:
```
Interruptor:  1
Eje X: 490
Eje Y: 490
```

Mover el joystick cambia los valores de X e Y (rango 0-1023). Presionar el botón del joystick cambia el Interruptor de 1 a 0.

## Actividad 3: Joystick y LEDs

### Resumen del cableado

Esta actividad combina el joystick y 4 LEDs de colores (azul, amarillo, rojo, verde), además de un quinto LED en el pin 7 para el botón. El cableado completo tiene 25 pasos detallados en el taller. Conexiones clave:

| Componente | Pin de Arduino |
|------------|----------------|
| Joystick VRx | A0 |
| Joystick VRy | GND |
| Joystick SW | Pin digital 2 |
| Joystick +5V | Riel rojo [+] de la protoboard |
| Joystick GND | Riel azul [-] de la protoboard |
| LED azul | Pin digital 11 |
| LED amarillo | Pin digital 10 |
| LED rojo | Pin digital 9 |
| LED verde | Pin digital 8 |
| LED del botón | Pin digital 7 |

### Código

{{% notice warning %}}
**Error en el código fuente del taller:** El código utiliza las variables `joyX` y `joyY` que nunca se declaran. El código no se compilará tal como está escrito. Los profesores deben agregar las declaraciones de variables que faltan, como se muestra a continuación, antes de la función `setup()`.

Además, en el paso 4 del cableado del taller, se conecta VRy a GND en lugar de un pin analógico. Esto parece ser un error de cableado: el código espera una señal en vivo del eje Y desde `analogRead(joyY)`, lo que requiere que VRy esté conectado a A1 (como en la Actividad 2). Los profesores deben conectar VRy a A1 en lugar de GND para que el código funcione correctamente.
{{% /notice %}}

{{% notice info %}}
**Cableado faltante para el LED del pin 7:** El código utiliza el pin 7 como OUTPUT para un LED activado por botón, pero los 25 pasos de cableado del taller no incluyen el