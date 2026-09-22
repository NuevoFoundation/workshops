```markdown
---
title: "Aktivität 5 - Effekte nutzen, um einzublenden"
description: "Kopfhörer einrichten"
weight: 9
prereq: "Python Grundlagen: Print, Kommentare, Funktionen"
difficulties: ["mittleres Niveau"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/VSm6m5p3CUg" title="Aktivität 5 - Effekte nutzen, um einzublenden - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Jetzt, wo du einen Effekt in deinem Song hast, lass uns versuchen, den Einstieg unseres Songs einzublenden.

In Aktivität 4 haben wir die Funktion `setEffect` genutzt, um einem spezifischen Track einen Effekt für die gesamte Dauer des Songs hinzuzufügen, aber was, wenn du nur einen bestimmten Abschnitt deines Songs mit einem Effekt versehen möchtest? Nutze die Funktion `setEffect` mit weiteren Parametern!

<img src="../img/screenshot-seteffect2.png" alt="Code-Schnipsel" width="60%"/>

- `startValue`: Der Startwert, der auf den Parameter angewendet wird
- `start`: Das Maß, bei dem der Startwert gesetzt wird
- `endValue`: Der Endwert des Parameters
- `end`: Das Maß, bei dem der Endwert gesetzt wird

Diese Version der Funktion `setEffect` ermöglicht es uns, *Automation* auf ein spezifisches Stück unseres Songs anzuwenden. Automation ist eine Methode, um den Wert eines Effekts im Laufe der Zeit zu ändern. Eine Anwendung der Automation besteht darin, einen Song einzublenden oder auszublenden. Dafür müssen wir die Lautstärke des **GAIN**-`parameters` im **VOLUME**-`type` über Zeit variieren. Wenn wir zum Beispiel unseren `startValue` bei -60 db und unseren `endValue` bei 0 db definieren, hört es sich so an, als ob unser Song über Zeit eingeblendet wird. Um den Startpunkt und die Dauer des Effekts anzupassen, kannst du die Werte für `start` und `end` spezifizieren.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## Füge eine weitere setEffect-Funktion zu deinem Song hinzu

1. Füge einen weiteren Funktionsaufruf `setEffect` in deinen Code ein, stelle jedoch sicher, dass alle 7 Parameter im Aufruf enthalten sind.
2. Setze den `type` auf VOLUME.
3. Nutze die Referenz "Jeder Effekt im Detail erklärt", um die Parameter zu sehen, die `VOLUME` hat. Um die Lautstärke eines Audioclips anzupassen, wähle den `parameter` GAIN.
4. Wenn wir etwas so klingen lassen möchten, als ob es eingeblendet wird, muss die Lautstärke des Sounds bei null starten und bis ca. 0 Dezibel ansteigen. Um dies zu tun, setze den `effectStartValue` auf einen sehr niedrigen Wert und den `effectEndValue` auf einen höheren Wert.

{{% notice tip %}}
*Tipp:* Lautstärke wird in Dezibel gemessen. Je positiver eine Zahl ist, desto lauter wird sie. Versuche außerdem, 0 Dezibel nicht zu überschreiten.
{{% /notice %}}

5. Setze Werte für `start` und `end`, um zu spezifizieren, wann der Einblendeffekt starten und stoppen soll.

Dein Code sollte nun etwa so aussehen:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, 1, 9)
fitMedia(HOUSE_MAIN_BEAT_002, 4, 1, 9)
fitMedia(HOUSE_ROADS_BASS_001, 5, 1, 9)

fitMedia(Y37_ORGAN_1, 2, 9, 17)
fitMedia(HOUSE_ROADS_BASS_001, 5, 9, 17)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, 9, 17)

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")

setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)
```
```