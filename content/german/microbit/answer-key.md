```markdown
---
title: "Micro:Bit - Antwortschlüssel"
date: 2026-04-28T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies ist ein Lehreranleitungsleitfaden für den Micro:Bit-Workshop. Der Workshop ist hauptsächlich ein geführtes Tutorial mit integriertem Codebeispielen anstelle von Lückentextaufgaben. Dieser Antwortschlüssel fasst alle Schlüsselkonzepte, Codebeispiele, erwarteten Ergebnisse aus dem Tutorial und Beispielprojekte für den offenen Abschnitt "Jetzt bist du dran" zusammen.
{{% /notice %}}

## Grundlagen von JavaScript

### Variablen und Datentypen

Der Workshop führt fünf Datentypen ein. Hier eine Zusammenfassung mit Beispielen:

| Datentyp | Beschreibung | Beispiel |
|----------|--------------|----------|
| Integer (Ganzzahl) | Ganze Zahlen (ohne Dezimalstellen) | `var a = 5;` |
| Double (Gleitkommazahl) | Zahlen mit Dezimalstellen | `var x = 0.5;` |
| String (Zeichenkette) | Text (in Anführungszeichen) | `var company = "My company";` |
| Character (Zeichen) | Einzelnes Zeichen (in einfachen Anführungszeichen) | `var letter = 'A';` |
| Boolean (Boolescher Wert) | Wahr- oder Falsch-Werte | `var codingIsCool = true;` |

**Wichtige Regeln für Bezeichnernamen (Variablennamen):**
- Können Buchstaben, Ziffern, Unterstriche und Dollarzeichen enthalten
- Dürfen keine Leerzeichen enthalten
- Müssen mit einem Buchstaben beginnen

### Mathematische Operationen

| Operation | Operator | Beispiel | Ergebnis |
|-----------|----------|----------|----------|
| Addition | `+` | `var c = 13 + 10;` | `c = 23` |
| Subtraktion | `-` | `var c = 15 - 10;` | `c = 5` |
| Multiplikation | `*` | `var c = 2 * 5;` | `c = 10` |
| Division | `/` | `var c = 20 / 2;` | `c = 10` |
| Modulo | `%` | `var d = 10 % 2;` | `d = 0` |

**Hinweis:** Die Workshopquelle zeigt `c = a + b; // c = 25`, aber 13 + 10 = 23. Dies ist ein Tippfehler in der Originalversion des Workshops.

**Kurzoperatoren:**
- `c += a;` addiert `a` zu `c`
- `c -= a;` subtrahiert `a` von `c`
- `c *= a;` multipliziert `c` mit `a`
- `c /= a;` dividiert `c` durch `a`
- `c++` erhöht um 1, `c--` verringert um 1

**Hinweis:** Das Divisionsbeispiel im Workshop zeigt in den Kommentaren `c /= a; // c = 5`, aber das tatsächliche Ergebnis ist `0.5` (10 geteilt durch 20). Lehrer sollten auf diese Diskrepanz achten.

### Ausgabe-Anweisungen

```javascript
// Anzeige in der Browser-Konsole (nicht sichtbar auf der Webseite)
console.log("Hello!");

// Anzeige als Pop-up-Fenster
alert("Hello!");

// Pop-up mit Eingabefeld - speichert die Antwort des Nutzers
var userResponse = prompt("What is your name?");
```

### Bedingte Anweisungen

```javascript
var age = 10;
if (age < 18) {
  print("You're not an adult yet! :( ");
}
```

**Hinweis:** Der Workshop verwendet `print()` in diesem Beispiel, was kein Standard-JavaScript für Browser ist. In MakeCode wäre das Äquivalent `basic.showString()`. In einem Browser verwenden Sie stattdessen `console.log()` oder `alert()`. Außerdem enthält die Erklärung im Workshop einen Tippfehler: Es steht "If age is less than 10", aber die Bedingung überprüft `age < 18`.

### Schleifen

```javascript
// while-Schleife - zählt von 10 herunter
var count = 10;
while (count > 0) {
  alert(count);
  count--;
}

// for-Schleife - zählt von 10 herunter
for (var i = 10; i > 0; i--) {
  alert(i);
}
```

**Wichtig:** Eine endlose Schleife `while (true)` wird einen Browser einfrieren. Auf dem micro:bit ist `basic.forever()` das sichere Äquivalent für kontinuierliche Ausführung.

**Zusätzlich:** Die Anweisung `break;` kann eine Schleife sofort beenden und die Ausführung zur Zeile nach der Schleife weiterleiten.

## Micro:bit-Einrichtung

### Überblick über die Hardware

Der micro:bit hat:
- 25 individuell programmierbare LEDs (5×5 Feld)
- 2 programmierbare Tasten (A und B)
- Physische Verbindungspins
- Bewegungssensoren (Beschleunigungsmesser und Kompass)
- Drahtlose Kommunikation (Bluetooth und Radio)
- USB-Schnittstelle

### Verbindung mit einem Computer

1. Schließen Sie den micro:bit mit dem USB-Kabel an
2. Er erscheint als Laufwerk namens `MICROBIT` im Datei-Explorer
3. Um Programme zu laden: Kopieren Sie `.hex`-Dateien auf das MICROBIT-Laufwerk (oder Rechtsklick → Senden an → MICROBIT)
4. Die gelbe LED auf der Rückseite blinkt, während der Code heruntergeladen wird

### MakeCode-Editor

Die Programmierumgebung befindet sich unter [makecode.microbit.org](https://makecode.microbit.org/). Schüler können zwischen Block- und JavaScript-Ansichten wechseln.

## Ergebnisse aus den Tutorials

### Tutorial "Blinkendes Herz"

Die Schüler folgen dem integrierten MakeCode-Tutorial. Das erwartete Ergebnis:

```javascript
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
```

**Was es macht:** Wechselt zwischen einer großen und einer kleinen Herz-Ikone auf dem LED-Display hin und her und erzeugt eine Animation, die wie ein schlagendes Herz aussieht.

### Tutorial "Micro Chat"

Die Schüler folgen dem integrierten MakeCode-Tutorial. Das erwartete Ergebnis:

```javascript
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello")
    basic.showString("Hello")
})
input.onButtonPressed(Button.B, function () {
