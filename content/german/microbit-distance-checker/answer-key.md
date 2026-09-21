---
title: "micro:bit Abstandsmesser - Antwortschlüssel"
date: 2024-07-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies ist eine Lehrerreferenz für den micro:bit Wireless Social Distancing Workshop. Der Workshop führt Schüler Schritt für Schritt durch den Bau eines vollständigen Projekts mit MakeCode-Blöcken. Dieser Antwortschlüssel enthält den vollständigen, finalen Code (sowohl in blockbasierter Beschreibung als auch in JavaScript), erklärt die Schlüsselkonzepte und enthält Leitfäden zur Fehlersuche.
{{% /notice %}}

## Gesamtlösung

### Finaler Code (JavaScript-Äquivalent)

Dies ist das vollständige Programm, das Schüler im Laufe der Workshop-Aktivitäten erstellen:

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (strength > -67) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let strength = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
```

### Finaler Code (Blockbeschreibung)

Für Lehrkräfte, die die blockbasierte Ansicht bevorzugen:

| Blockposition | Block | Einstellungen |
|---------------|-------|---------------|
| **on start**  | `radio set group` | Gruppe: `1` |
| **forever**   | `radio send number` | Zahl: `0` |
| **on radio received (receivedNumber)** | `set strength to` | `received packet signal strength` |
| (innerhalb des Empfangsblocks) | `if strength > -67 then` | Zeige Icon: trauriges Gesicht |
| (ansonsten) | `else` | Zeige Icon: fröhliches Gesicht |

**Was es macht:** Jeder micro:bit sendet kontinuierlich ein Funksignal. Wenn ein Signal von einem anderen micro:bit empfangen wird, wird die Signalstärke überprüft. Ist das Signal stärker als -67 dBm (was bedeutet, dass die micro:bits weniger als 6 Fuß / 2 Meter voneinander entfernt sind), zeigt es ein trauriges Gesicht an. Ist das Signal schwächer (was bedeutet, dass sie weit genug auseinander sind), zeigt es ein fröhliches Gesicht.

## Schritt-für-Schritt-Erklärung

### Schritt 1: Was ist ein micro:bit (Seite 1)

Dies ist eine Einführung. Es wird kein Code geschrieben. Hauptpunkte:

- Eigenschaften des micro:bits: 25 LEDs, 2 Tasten, IO-Pins, Kompass, Beschleunigungssensor, Bluetooth
- Schüler packen ihre Hardware aus: micro:bit, 2 Batterien, USB-Kabel, Batteriefach
- **Simulator:** Schüler ohne Hardware können den MakeCode-Simulator mit zwei virtuellen micro:bits nebeneinander verwenden. Die Radioantenne (gelbes Quadrat) kann geklickt und gezogen werden, um Änderungen der Signalstärke zu simulieren.
- Signalstärkeschwelle im Simulator: `stärke > -67` zeigt das traurige Gesicht

### Schritt 2: Ein Signal senden (Seite 2)

**In diesem Schritt hinzugefügter Code:**

```javascript
// beim Start
radio.setGroup(1)

// dauerhaft
basic.forever(function () {
    radio.sendNumber(0)
})
```

**Schlüsselkonzepte:**
- `radio set group 1` wird im "on start"-Block platziert, sodass es einmal ausgeführt wird, wenn der micro:bit eingeschaltet wird
- Alle micro:bits müssen dieselbe Gruppennummer verwenden, um zu kommunizieren
- `radio send number 0` wird im "forever"-Block eingefügt, um kontinuierlich zu senden
- Die tatsächlich gesendete Zahl (0) spielt in diesem Projekt keine Rolle; wir achten nur auf die Signalstärke

### Schritt 3: Eine Nachricht empfangen (Seite 3)

**In diesem Schritt hinzugefügter Code:**

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let strength = 0
```

**Schlüsselkonzepte:**
- Der `on radio received`-Block wird jedes Mal ausgelöst, wenn der micro:bit eine Zahl von einem anderen micro:bit empfängt
- Eine **Variable** namens `stärke` wird erstellt, um die empfangene Signalstärke zu speichern
- `received packet signal strength` gibt den RSSI-Wert (Received Signal Strength Indicator) aus 
- Variablen sind benannte Container, die Informationen speichern und später verwendet und aktualisiert werden können

### Schritt 4: Signalstärke interpretieren (Seite 4)

**In diesem Schritt hinzugefügter Code:**

```javascript
if (strength > -67) {
    // zu nah - weniger als 6 Fuß entfernt
} else {
    // sicherer Abstand - mehr als 6 Fuß entfernt
}
```

**Schlüsselkonzepte:**
- -67 dBm ist die vorab gemessene Signalstärke in 6 Fuß (2 Metern) Entfernung für Bluetooth-Signale des micro:bits
- Signalstärke näher bei 0 = stärkeres Signal = kürzere Distanz
- Signalstärke weiter von 0 entfernt (negativer) = schwächeres Signal = größere Distanz
- `stärke > -67` bedeutet, dass die Geräte **näher** als 6 Fuß beieinander sind (stärkeres Signal als die Schwelle)

**Häufige Schülerfrage:** "Warum -67?" Weil -67 dBm die gemessene Stärke des Signals war, wenn sich zwei micro:bits 6 Fuß voneinander entfernt befanden. Unterschiedliche Bluetooth-Radios können bei gleichen Entfernungen unterschiedliche Werte haben.

### Schritt 5: Anzeige aktivieren (Seite 5)

**In diesem Schritt hinzugefügter Code:**

```javascript
if (strength > -67) {
    basic.showIcon(IconNames.Sad)    // zu nah
} else {
    basic.showIcon(IconNames.Happy)  // sicherer Abstand
}
```

**Schlüsselkonzepte:**
- Trauriges Gesicht = zu nah (weniger als 6 Fuß)
- Fröhliches Gesicht = sicherer Abstand (6 Fuß oder mehr)
- Icons befinden sich im Reiter "Basic" in MakeCode

Für eine visuelle Referenz des finalen Blockcodes, siehe den Screenshot am Ende der Seite [Lighting it up](../light-it-up).

### Schritt 6: Code herunterladen (Seite 6)

Es wird kein neuer Code geschrieben. Diese Seite behandelt:

1. **Pairing:** USB-Verbindung, klicke auf `...` neben Download, wähle "Gerät koppeln", wähle "BBC micro:bit CMSIS-DAP", dann Verbinden
2. **Herunterladen:** K