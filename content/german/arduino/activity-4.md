```markdown
---
title: "Aktivität 4 - LCD-Anzeige"
draft: false
weight: 7
---

## Verdrahtungsdiagramm

Da du nun das Ausgeben von Signalen an LEDs gemeistert hast, werfen wir einen Blick darauf, wie Texte mit einer einfachen Anzeige dargestellt werden können. Es wird nur 1 Widerstand (5K) verwendet, um die Helligkeit der Anzeige zu begrenzen. Versuche, dies gemäß dem Diagramm ohne spezifische Anweisungen zu verkabeln.

![Alt Text: Verdrahtungsdiagramm für Elegoo und LCD-Anzeige](../img/LCD-wiring.png)

## Der Code:
``` c++
//www.elegoo.com
//2016.12.9

/*
  LiquidCrystal Library - Hallo Welt

 Demonstriert die Verwendung eines 16x2 LCD-Displays. Die LiquidCrystal
 Bibliothek funktioniert mit allen LCD-Anzeigen, die mit dem
 Hitachi HD44780 Treiber kompatibel sind. Es gibt viele davon, und man
 erkennt sie normalerweise an der 16-Pin-Schnittstelle.

 Dieses Sketch druckt "Hello World!" auf die LCD-Anzeige
 und zeigt die Zeit an.

  Der Schaltkreis:
 * LCD RS Pin zu digitalem Pin 7
 * LCD Enable Pin zu digitalem Pin 8
 * LCD D4 Pin zu digitalem Pin 9
 * LCD D5 Pin zu digitalem Pin 10
 * LCD D6 Pin zu digitalem Pin 11
 * LCD D7 Pin zu digitalem Pin 12
 * LCD R/W Pin zu Masse
 * LCD VSS Pin zu Masse
 * LCD VCC Pin zu 5V
 * 10K Widerstand:
 * Enden zu +5V und Masse
 * Schleifer zum LCD VO Pin (Pin 3)

 Bibliothek ursprünglich am 18. Apr 2008 hinzugefügt
 von David A. Mellis
 Bibliothek am 5. Jul 2009 modifiziert
 von Limor Fried (http://www.ladyada.net)
 Beispiel am 9. Jul 2009 hinzugefügt
 von Tom Igoe
 am 22. Nov 2010 modifiziert
 von Tom Igoe

 Dieser Beispielcode ist gemeinfrei.

 http://www.arduino.cc/en/Tutorial/LiquidCrystal
 */

// Bibliothekscode einbeziehen:
#include <LiquidCrystal.h>

// Initialisiere die Bibliothek mit den Nummern der Schnittstellenpins
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

void setup() {
  // Richte die Anzahl der Spalten und Reihen des LCDs ein:
  lcd.begin(16, 2);
  // Zeige eine Nachricht auf der LCD-Anzeige an.
  lcd.print("Hallo, Welt!");
}

void loop() {
  // Setze den Cursor auf Spalte 0, Zeile 1
  // (Hinweis: Zeile 1 ist die zweite Reihe, da das Zählen bei 0 beginnt):
  lcd.setCursor(0, 1);
  // Zeige die Anzahl der Sekunden seit dem Neustart an:
  lcd.print(millis() / 1000);
}
```
```