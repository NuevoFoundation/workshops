---
title: "Aktivität 1 - Tempo einstellen & Sounds hinzufügen"
description: "Einrichten der Kopfhörer"
prereq: "Python-Grundlagen: Print, Kommentare, Funktionen"
difficulties: ["mittel"]
weight: 5
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/INHMwQoni-M" title="Aktivität 1 - Tempo einstellen &amp; Sounds hinzufügen - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Lass uns einen genaueren Blick auf den vorhandenen Code werfen und verstehen, was er bedeutet.

<img src="../img/screenshot-setup-complete.png" height="400"/>

Die Funktion `setTempo()` ermöglicht es dir, das Tempo des Projekts festzulegen. Tempo ist die Geschwindigkeit, mit der ein Musikstück gespielt wird. Wenn du das Tempo eines Projekts änderst, kannst du verschiedene Musikstile kreieren. Probiere aus, das Tempo deiner `setTempo`-Funktion zu ändern, indem du die Zahl im Block variierst, und beobachte, was passiert! Bitte achte darauf, dass die Zahl zwischen 45 und 220 liegt. Hier sind einige Vorschläge für mögliche Tempi:

<img src="../img/img-tempo1.png" height="200"/>

Nun, da unser Tempo festgelegt ist, ist es an der Zeit, Sounds hinzuzufügen. Dazu verwenden wir die Funktion `fitMedia()`. Wir platzieren den neuen Code direkt unter der `setTempo()`-Funktion.

## Aktivität 1

1. Stelle sicher, dass sich der Cursor in deinem Programm unter den `setTempo()`-Funktionen befindet.

<img src="../img/screenshot-cursor.png" height="200"/>

2. Scrolle durch die **API**-Liste auf der linken Seite des Code-Editors und finde die Funktion `fitMedia()`.

<img src="../img/screenshot-find-fitmedia.png" height="400"/>

3. Klicke auf das **Einfügen**-Symbol in der rechten Ecke von `fitMedia()`, um die Funktion direkt unterhalb der `setTempo`-Funktion einzufügen.

<img src="../img/icon-paste.png"/>

4. Du wirst vielleicht bemerken, dass beim Einfügen der Funktion Platzhaltertexte generiert werden, die später ersetzt werden müssen. Diese Platzhaltertexte nennt man `Parameter`.

<img src="../img/screenshot-fitmedia.png" />

Du kannst eigene Werte für die folgenden Parameter festlegen:

- `sound` - Navigiere zum Bereich \'Sounds\' und suche dir einen Sound aus, der dir gefällt.
- `track` - Wähle eine beliebige positive Ganzzahl als Tracknummer.
- `start/end` - Diese Parameter sind in Takten angegeben. Ein Takt ist ein Zeitabschnitt, der mit einer spezifischen Anzahl von Beats korreliert.

Wenn du dir unsicher bist, welche Werte du wählen sollst, probiere Folgendes aus:

- `fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)`

Dein Code sollte jetzt ungefähr so aussehen:

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

{{% notice warning %}}
Stelle sicher, dass die Groß-/Kleinschreibung des Funktionsaufrufs korrekt ist. Die meisten Programmiersprachen, einschließlich Python, sind case-sensitive. Das bedeutet, dass das Hinzufügen von Großbuchstaben eine andere Funktion aufrufen könnte als erwartet. Zum Beispiel: `fitMedia()` ist nicht dasselbe wie `FitMedia()`.
{{% /notice %}}

6. Nachdem du deine Parameter eingegeben hast, drücke auf "Run" und dann auf "Play", um deinen Audioclip anzuhören!

<img src="../img/icon-play.png" />

- **Falls du roten Text siehst, sind Fehler aufgetreten! Bitte frage um Hilfe.** Die Funktion `fitMedia()` bildet das Rückgrat beim Musikmachen in Earsketch. Wir werden diese Funktion oft verwenden, daher stelle sicher, dass du alle offenen Fragen dazu klärst!

{{% notice info %}}

Digital Audio Workstation (DAW) ist der Bereich, in dem die Sounds erscheinen. Er befindet sich oben in der Mitte des EarSketch-Fensters. Folgendes ist ein Beispiel dafür, wie verschiedene Abschnitte eines Songs in der DAW dargestellt werden können.

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}