```markdown
---
title: "Arduino - Antwortschlüssel"
date: 2024-07-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies ist eine Lehrerreferenz für den Arduino Light Game-Workshop. Der Workshop führt Schüler durch 4 Hardwareaktivitäten mit einem Arduino UNO und dem Elegoo Starter Kit. Sämtlicher Code wird im Workshop bereitgestellt, daher konsolidiert dieser Antwortschlüssel die vollständigen Lösungen, erklärt wichtige Konzepte und weist auf einen Fehler im Quellcode hin, den Lehrer beachten sollten.
{{% /notice %}}

## Aktivität 1: Blinkende LED

### Verkabelungsübersicht

1. Lange LED-Anode an Pin 25J, kurze Kathode an die blaue [-] Schiene
2. 220 Ohm Widerstand von 25H zur roten [+] Schiene
3. Jumperkabel von der roten [+] Schiene zur 5V auf dem Arduino
4. Jumperkabel von der blauen [-] Schiene (31Z) zu GND auf dem Arduino
5. Arduino über USB verbinden

### Code

Schüler laden das integrierte Beispiel: **File > Examples > 01.Basics > Blink**

Der folgende Code ist der funktionale Kern des integrierten Blink-Beispiels. Das vollständige Beispiel, das von den Schülern geladen wird, enthält zusätzliche Kommentare und Quellenangaben.

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

### Wichtige Konzepte

- `setup()` läuft einmal, wenn der Arduino eingeschaltet wird
- `loop()` läuft unendlich wiederholt
- `pinMode()` legt fest, ob ein Pin INPUT oder OUTPUT ist
- `digitalWrite()` schaltet einen Pin auf HIGH (ein) oder LOW (aus)
- `delay(1000)` pausiert für 1000 Millisekunden (1 Sekunde)

### Antwort auf die Extra-Challenge

Im Workshop wird gefragt: "Was könnten Sie ändern, um die Timing-Einstellungen zu ändern?" Antwort: Ändern Sie die Zahl in `delay(1000)`. Zum Beispiel bewirkt `delay(500)`, dass die LED doppelt so schnell blinkt. 1000 Millisekunden = 1 Sekunde, also sind 10 Minuten = 600000 Millisekunden.

## Aktivität 2: Joystick mit Serial-Ausgabe

### Verkabelungsübersicht

1. Joystick GND an Arduino GND
2. Joystick +5V an Arduino 5V
3. Joystick VRx an Analog-Pin A0
4. Joystick VRy an Analog-Pin A1
5. Joystick SW an digitalen Pin 2
6. Arduino über USB verbinden

### Code

```c++
//www.elegoo.com
//2016.12.09

// Arduino-Pinnummern
const int SW_pin = 2; // digitaler Pin verbunden mit der Schalterausgabe
const int X_pin = A0; // analoger Pin verbunden mit der X-Ausgabe
const int Y_pin = A1; // analoger Pin verbunden mit der Y-Ausgabe

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

### Wichtige Konzepte

- `Serial.begin(9600)` startet die serielle Kommunikation mit 9600 Baudrate
- `Serial.print()` sendet Text an den Serial-Monitor (Klicken Sie auf das Lupensymbol in der Arduino-IDE)
- `analogRead()` liest einen Wert zwischen 0 und 1023 von einem Analog-Pin
- `digitalRead()` liest HIGH (1) oder LOW (0) von einem digitalen Pin
- `digitalWrite(SW_pin, HIGH)` aktiviert den internen Pull-up-Widerstand an Pin 2, sodass der Schalter HIGH liest, wenn nicht gedrückt, und LOW, wenn gedrückt
- Joystick-Mittelstellung beträgt ungefähr X=490, Y=490

### Erwartete Serial-Ausgabe

Wenn der Joystick zentriert ist, sollten die Schüler Werte nahe dem Folgenden sehen:
```
Schalter:  1
X-Achse: 490
Y-Achse: 490
```

Das Bewegen des Joysticks ändert die X- und Y-Werte (Bereich 0-1023). Das Drücken des Joystick-Buttons ändert den Schalterwert von 1 zu 0.

## Aktivität 3: Joystick und LEDs

### Verkabelungsübersicht

Diese Aktivität kombiniert den Joystick und 4 farbige LEDs (blau, gelb, rot, grün) sowie eine fünfte LED an Pin 7 für den Button. Die vollständige Verkabelung umfasst 25 Schritte, die im Workshop detailliert beschrieben werden. Wichtige Verbindungen:

| Komponente | Arduino-Pin |
|------------|-------------|
| Joystick VRx | A0 |
| Joystick VRy | GND |
| Joystick SW | Digitaler Pin 2 |
| Joystick +5V | Breadboard rote [+] Schiene |
| Joystick GND | Breadboard blaue [-] Schiene |
| Blaue LED | Digitaler Pin 11 |
| Gelbe LED | Digitaler Pin 10 |
| Rote LED | Digitaler Pin 9 |
| Grüne LED | Digitaler Pin 8 |
| Button-LED | Digitaler Pin 7 |

### Code

{{% notice warning %}}
**Workshop-Quellcode-Fehler:** Der Code verwendet Variablen `joyX` und `joyY`, die nie deklariert werden. Der Code wird in der vorliegenden Fassung nicht kompiliert. Lehrer sollten vor der Funktion `setup()` die fehlenden Variablen-Deklarationen hinzufügen, wie unten gezeigt.

Zudem verbindet der Verkabelungsschritt 4 des Workshops VRy mit GND statt mit einem Analog-Pin. Dies scheint ein Verkabelungsfehler zu sein – der Code erwartet ein Y-Achsen-Signal von `analogRead(joyY)`, was erfordert, dass VRy mit A1 verbunden ist (wie in Aktivität 2). Lehrer sollten VRy stattdessen mit A1 verbinden, damit der Code ordnungsgemäß funktioniert.
{{% /notice %}}

{{% notice info %}}
**Fehlende Verkabelung für Pin-