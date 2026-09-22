---
title: "Aktivität 3 - Organisiere deinen Song mit Funktionen"
description: "Kopfhörer einrichten"
prereq: "Python-Grundlagen: Funktionen"
difficulties: ["mittel"]
weight: 7
draft: true
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/cApCvf3hoiQ" title="Aktivität 3 - Organisiere deinen Song mit Funktionen - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

In EarSketch werden Funktionen hauptsächlich genutzt, um die verschiedenen Abschnitte eines Songs zu organisieren. Die häufigste musikalische Form ist A-B-A, bei der jeder Abschnitt vier Takte lang ist und die A-Abschnitte sich vom B-Abschnitt klanglich unterscheiden.

Jetzt, da wir gelernt haben, wie man Funktionen verwendet, lasst uns versuchen, mit ihrer Hilfe unsere Songs besser zu organisieren.

1. Definiere deine Funktion mit einem `startMeasure`-Parameter und einem `endMeasure`-Parameter.
2. Platziere die Sounds, die die Funktion repräsentieren soll, unterhalb der Funktionsdefinition.
3. Versuche, mehrere Abschnitte eines Songs (Verse, Chorus, Intro usw.) zu erstellen und definiere sie mit deinen Funktionen. Wenn du dies nicht tust und stattdessen nur mehrere `fitMedia`-Aufrufe verwendet, wirst du feststellen, dass dein Programm lang und schwer verständlich wird. Um zu vermeiden, dass die Projektdatei zu groß wird, verwende Funktionen!

Dein Code sollte nun etwa so aussehen:

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