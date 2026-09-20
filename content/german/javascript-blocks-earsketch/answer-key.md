---
title: "Blocks: EarSketch - Lösungsschlüssel"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies ist eine Lehrerressource für den JavaScript Blocks EarSketch-Workshop. Der Workshop verwendet Drag-and-Drop-Blöcke, aber jeder Block generiert darunter JavaScript-Code. Dieser Lösungsschlüssel zeigt den äquivalenten JavaScript-Code für jede Aktivität, damit Lehrkräfte die Arbeit der Schülerinnen und Schüler überprüfen können. Da es sich um einen kreativen Musikworkshop handelt, gibt es viele gültige Antworten. Ihr Code ist korrekt, wenn er ohne Fehler ausgeführt wird und Musik erzeugt!
{{% /notice %}}

## Aktivität 1: Tempo einstellen und Sounds hinzufügen

Ziehe einen `fitMedia()`-Block unter den `setTempo`-Block und fülle die Parameter aus:

**Äquivalenter JavaScript-Code:**
```javascript
setTempo(120);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 1, 1, 9);
```

**Block-Parameter:**

| Parameter | Wert | Wie einstellen |
|-----------|------|----------------|
| Sound | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | Klicke auf "Sound" im Block und füge aus der Sound-Auswahl ein |
| Spur | `1` | Dropdown verwenden |
| Start | `1` | Start-Takt |
| Ende | `9` | End-Takt |

## Aktivität 2: Erstelle einen Song (Mehrere Sounds)

Füge vier `fitMedia()`-Blöcke hinzu, je einen auf einer anderen Spur:

**Äquivalenter JavaScript-Code:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
```

{{% notice tip %}}
**Wichtiges Konzept für Schüler:innen:** Jeder `fitMedia()`-Block sollte eine andere Spur-Nummer verwenden. Das hält die Sounds geordnet und ermöglicht, dass mehrere Sounds gleichzeitig abgespielt werden.
{{% /notice %}}

## Aktivität 3: Effekte hinzufügen

Ziehe einen `setEffect()`-Block (die Version mit 4 Parametern) unter die `fitMedia()`-Blöcke:

**Äquivalenter JavaScript-Code:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
```

**`setEffect`-Parameter (Version mit 4 Parametern):**

| Parameter | Wert | Bedeutung |
|-----------|------|-----------|
| Spur | `2` | Welche Spur (Verwende `0` für alle Spuren/Master) |
| Effekt-Typ | `DELAY` | Auswahl aus Dropdown-Menü |
| Parameter | `DELAY_FEEDBACK` | Auswahl aus Dropdown-Menü |
| Wert | `-6.0` | Bereich: -120,0 bis -1,0 |

## Aktivität 4: Fade-In mit Effekten

Ziehe den `setEffect()`-Block mit 7 Parametern, um einen Lautstärke-Fade-In zu erstellen:

**Äquivalenter JavaScript-Code:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3);
```

**`setEffect`-Parameter (Version mit 7 Parametern):**

| Parameter | Wert | Bedeutung |
|-----------|------|-----------|
| Spur | `0` | Master-Spur (alle Sounds) |
| Effekt-Typ | `VOLUME` | Lautstärkeregelung |
| Parameter | `GAIN` | Lautstärkeneinstellung |
| Startwert | `-60` | Fast stumm (in Dezibel) |
| Start-Takt | `1` | Beginn des Fade-In |
| Endwert | `0` | Normale Lautstärke |
| End-Takt | `3` | Ende des Fade-In |

{{% notice tip %}}
**Wie der Fade-In funktioniert:** Die Lautstärke beginnt bei -60 dB (fast stumm) in Takt 1 und steigt bis 0 dB (normale Lautstärke) in Takt 3. Je negativer die Dezibelzahl, desto leiser ist der Sound. Überschreiten Sie nicht 0 dB.
{{% /notice %}}

## EarSketch Schnellreferenz

| Block | Zweck | Schlüsselparameter |
|-------|-------|--------------------|
| `setTempo(bpm)` | Geschwindigkeit des Songs einstellen | 45-220 BPM |
| `fitMedia(clip, track, start, end)` | Sound hinzufügen | Auswahl aus der Sound-Palette |
| `setEffect(track, type, param, value)` | Effekt hinzufügen | Auswahl von Typ/Parameter aus Dropdown-Menüs |
| `setEffect(track, type, param, startVal, start, endVal, end)` | Effekt automatisieren | Für Fade-In/Fade-Out |