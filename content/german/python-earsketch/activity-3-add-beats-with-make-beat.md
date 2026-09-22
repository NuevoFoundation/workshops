```markdown
---
title: "Aktivität 3 - Füge Beats zu deinem Song mit makeBeat hinzu"
description: "Kopfhörer einrichten"
prereq: "Python-Grundlagen: Funktionen"
difficulties: ["mittel"]
weight: 7
draft: false
---

Lass uns versuchen, interessante Beats zu deinem Song hinzuzufügen! Wir werden die Funktion `makeBeat` verwenden.

Bevor wir die Funktion `makeBeat` nutzen, lassen Sie uns verstehen, wie `Strings` funktionieren.

## Strings

Alles, was du in **Anführungszeichen** siehst, wird als **String** bezeichnet. Ein String ist einfach eine Abfolge von Zeichen (egal, ob es sich um Buchstaben, Zahlen oder Symbole handelt). Zum Beispiel ist `"hello world"` ein String.

Für `makeBeat` werden wir die folgenden drei Arten von Beats kombinieren, um einen interessanten Beat für unseren Song zu erstellen:

- `"0"` spielt den Ton für eine Note.
- `"-"` pausiert (d. h. erzeugt Stille) für eine Note.
- `"+"` bindet (d. h. hält) den Klang oder die Stille für eine zusätzliche Note.

Die `makeBeat`-Funktion nimmt an, dass wir Beats erstellen möchten, die 16 Noten pro Takt abdecken. Um es einfacher zu machen, erstellen wir Beats mit Strings, die genau 16 Zeichen lang sind. Obwohl du auch Strings einer beliebigen Länge verwenden kannst, funktioniert dies am besten, wenn ihre Länge ein Vielfaches von 16 ist (d. h. 16, 32, 48 usw.).

Hier sind einige Beispiele für gültige Beats:

- `"0+------0+------"`: spielt 2 Töne pro Takt, und jeder Ton dauert 2 Noten, gefolgt von 6 Noten Pause.

<figure>
    <audio
        controls
        src="../audio/makebeat1.mp3">
            Teste das Audio, um zu prüfen, ob dein Browser das Audio-Element unterstützt. Wenn du das Audio nicht abspielen kannst, unterstützt dein Browser dieses Element vermutlich nicht.
            <code>audio</code>-Element.
    </audio>
</figure>

- `"0-0-0-0-0-0-0-0-"`: spielt 8 Töne pro Takt, und jeder Ton dauert 1 Note.

<figure>
    <audio
        controls
        src="../audio/makebeat2.mp3">
            Teste das Audio, um zu prüfen, ob dein Browser das Audio-Element unterstützt. Wenn du das Audio nicht abspielen kannst, unterstützt dein Browser dieses Element vermutlich nicht.
            <code>audio</code>-Element.
    </audio>
</figure>

- `"0++0++0++0++0-0-"`: spielt 6 Töne in einem Swing-Muster.

<figure>
    <audio
        controls
        src="../audio/makebeat3.mp3">
            Teste das Audio, um zu prüfen, ob dein Browser das Audio-Element unterstützt. Wenn du das Audio nicht abspielen kannst, unterstützt dein Browser dieses Element vermutlich nicht.
            <code>audio</code>-Element.
    </audio>
</figure>

Jetzt ist es an der Zeit, Beats in deinen Song einzufügen!

## Aktivität 3

1. Stelle sicher, dass der Cursor in deinem Programm unter den `fitMedia()`-Funktionen steht.

2. Scrolle durch die **API**-Liste auf der linken Seite des Code-Editors und finde die erste `makeBeat()`-Funktion.

<img src="../img/screenshot-find-makebeat.png" height="400"/>

3. Klicke auf das **Einfügen**-Symbol in der rechten Ecke von `makeBeat()`, um die Funktion unter der `fitMedia`-Funktion einzufügen.

<img src="../img/icon-paste.png"/>

4. Wenn du die Funktion einfügst, erzeugt Earsketch wieder einige `Parameter`, die wir später ersetzen müssen.

<img src="../img/screenshot-makebeat.png" />

Du kannst eigene Werte für die folgenden Parameter angeben:

- `sound` - Navigiere zum **Sounds**-Bereich. Klicke auf **GENRES** und dann auf den **MAKEBEAT**-Filter. Finde einen Klang, der dir gefällt.

<img src="../img/screenshot-makebeat-sounds.png" height="400"/>

- `track` - Wähle eine beliebige positive ganze Zahl als Spurennummer. Achte darauf, dass es eine Spurennummer ist, die du noch nicht verwendet hast.
- `start` - Gib an, bei welchem Takt der Beat starten soll.
- `beat` - Gib den gewünschten Beat als `String` an, der idealerweise 16 Zeichen lang sein sollte.

Falls du dir unsicher bist, welche Werte du wählen sollst, versuche Folgendes:

- `makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")`

Füge danach noch ein paar weitere `makeBeat`-Funktionen zu deinem Song hinzu. Versuche, mindestens zwei weitere `makeBeat`-Funktionen hinzuzufügen.

Dein Code sollte jetzt etwa so aussehen:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")
```
```