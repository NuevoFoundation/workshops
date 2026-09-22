```markdown
---
title: "Python: EarSketch - Antwortschlüssel"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies sind Beispielantworten für den EarSketch-Workshop. Da EarSketch ein kreativer Musik-Workshop ist, gibt es viele gültige Antworten. Die von Ihnen gewählten Soundclips, Tempi und Spurnummern sind Ihnen überlassen. Ihr Code ist korrekt, wenn er ohne Fehler ausgeführt wird und Musik produziert! Die unten angegebenen Beispiele entsprechen dem Beispielcode, der in jeder Aktivität gezeigt wird.
{{% /notice %}}

## Aktivität 1: Tempo einstellen und Sounds hinzufügen

Stellen Sie ein Tempo ein und fügen Sie einen Sound mit `fitMedia()` hinzu:

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

**Was jedes Parameter bedeutet:**

| Parameter | Wert | Bedeutung |
|-----------|------|-----------|
| Soundclip | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | Der Audioclip, der abgespielt wird (stöbern Sie im Clip-Fenster, um Clips zu finden). |
| Spur | `3` | Auf welcher Spur der Sound platziert wird (jede positive Ganzzahl). |
| Anfang | `1` | Der Takt, in dem der Sound beginnt. |
| Ende | `17` | Der Takt, in dem der Sound endet. |

{{% notice tip %}}
**Häufige Frage von Schülern:** „Welches Tempo soll ich wählen?“

Jede Zahl zwischen 45 und 220 funktioniert. Hier einige Richtlinien:
- **80–90**: Hip-Hop, Trap
- **100–130**: Pop, House
- **140–180**: Drum & Bass, Dubstep
{{% /notice %}}

## Aktivität 2: Erstelle ein Lied (Mehrere Sounds)

Fügen Sie vier verschiedene Audioclips auf verschiedenen Spuren hinzu:

```python
from earsketch import *

setTempo(120)
fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
fitMedia(YG_TRAP_BASS_9, 4, 1, 9)
```

{{% notice tip %}}
**Wichtiges Konzept:** Jeder `fitMedia()`-Aufruf sollte eine andere Spurnummer verwenden. Dadurch bleibt alles übersichtlich und verschiedene Sounds können gleichzeitig abgespielt werden. Spur 1 spielt einen Sound, Spur 2 einen anderen usw.
{{% /notice %}}

## Aktivität 3: Mit Funktionen organisieren

Verwenden Sie Funktionen, um Abschnitte eines Lieds in einem A-B-A-Muster zu erstellen:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# Abschnitt A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# Abschnitt B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
```

**Wie die A-B-A-Struktur funktioniert:**

| Takte | Abschnitt | Aufgerufene Funktion |
|-------|-----------|----------------------|
| 1–9 | A | `sectionA(1, 9)` |
| 9–17 | B | `sectionB(9, 17)` |
| 17–25 | A (Wiederholung) | `sectionA(17, 25)` |

{{% notice tip %}}
**Häufige Frage von Schülern:** „Warum Funktionen verwenden, anstatt mehr fitMedia-Aufrufe zu schreiben?“

Funktionen ermöglichen es Ihnen, eine Gruppe von Sounds wiederzuverwenden, ohne alle `fitMedia`-Aufrufe zu kopieren. Um Abschnitt A zweimal abzuspielen, rufen Sie einfach `sectionA()` mit verschiedenen Start-/Endtakten auf, anstatt sechs `fitMedia`-Aufrufe zu schreiben.
{{% /notice %}}

## Aktivität 4: Effekte hinzufügen

Verwenden Sie `setEffect()` um einen Delay-Effekt hinzuzufügen:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# Abschnitt A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# Abschnitt B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
```

**Parameter von setEffect (Version mit 4 Parametern):**

| Parameter | Wert | Bedeutung |
|-----------|------|-----------|
| Spur | `2` | Die Spur, auf die der Effekt angewendet wird (verwenden Sie `0` für die Masterspur/alle Spuren). |
| Typ | `DELAY` | Der Effekt-Typ. |
| Einstellung | `DELAY_FEEDBACK` | Welche Einstellung angepasst wird. |
| Wert