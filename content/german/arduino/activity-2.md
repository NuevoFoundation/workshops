```markdown
---
title: "Aktivität 2 - Joystick mit Serialausgabe"
draft: false
weight: 5
---

## Verkabelung des Joysticks

Nachdem Sie nun verstanden haben, wie wir das System dazu bringen können, Signale aus dem Programm (Ausgänge) bereitzustellen und diese zur Steuerung von LEDs verwenden können, schauen wir uns an, wie wir dynamische Eingaben in das System bekommen. Für diese Aktivität werden wir eine Joystick-Eingabe verwenden, ähnlich denjenigen, die in Videospielkonsolen verwendet werden.

![Alt Text: Verkabelungsdiagramm des Joystick-Moduls](../img/act2_Joystick.png)

1. Verbinden Sie ein Ende eines Jumper-Kabels mit GND am Joystick und das andere mit GND am Elegoo.
2. Verbinden Sie ein Ende eines Jumper-Kabels mit +5V am Joystick und das andere mit 5V am Elegoo.
3. Verbinden Sie ein Ende eines Jumper-Kabels mit VRx am Joystick und das andere mit A0 (analoger Pin 0) am Elegoo.
4. Verbinden Sie ein Ende eines Jumper-Kabels mit VRy am Joystick und das andere mit A1 (analoger Pin 1) am Elegoo.
5. Verbinden Sie ein Ende eines Jumper-Kabels mit SW am Joystick und das andere mit 2 (digitaler Pin 2) am Elegoo.
6. Schließen Sie das Arduino-Board über USB an Ihren PC an und öffnen Sie die Arduino IDE-Anwendung.

## Erkennen und Ausgeben von analogen Eingaben

Für unsere Programme werden wir erneut Beispielcode verwenden. Diesmal holen wir den Code direkt von der Website von Elegoo. Kopieren Sie den folgenden Code in Ihre Arduino IDE.

``` c++
//www.elegoo.com
//2016.12.09

// Arduino-Pinnummern
const int SW_pin = 2; // digitaler Pin, der mit dem Switch-Ausgang verbunden ist
const int X_pin = A0; // analoger Pin, der mit dem X-Ausgang verbunden ist
const int Y_pin = A1; // analoger Pin, der mit dem Y-Ausgang verbunden ist

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Schalter:  ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("X-Achse: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Y-Achse: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");
  delay(500); 
}
```

7. Klicken Sie nun auf die Upload-Schaltfläche, um das Programm auf den Arduino hochzuladen.
8. Klicken Sie auf die Schaltfläche „Serial Monitor“ oben rechts im Bildschirm, um die Konsole anzuzeigen.
![Alt Text: Screenshot der Arduino IDE, der die Position der Serial-Monitor-Schaltfläche zeigt](../img/SerialMonitor-button.png)
9. Beobachten Sie, wie sich die X- und Y-Werte ändern, wenn Sie den Joystick bewegen.
```