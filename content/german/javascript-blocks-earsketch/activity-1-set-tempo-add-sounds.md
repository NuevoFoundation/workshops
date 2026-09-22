---
title: "Aktivität 1 - Tempo festlegen & Sounds hinzufügen"
date: 2019-07-23T11:45:38-07:00
weight: 3
draft: false
---

Lass uns den bestehenden Code genauer anschauen und verstehen, was er bedeutet.

<img src="../img/screenshot-setup-complete.png" height="400"/>

Die Funktion `setTempo()` ermöglicht es dir, das Tempo des gesamten Projekts festzulegen. Tempo ist die Geschwindigkeit, mit der ein Musikstück gespielt wird. Durch das Ändern des Projekttempos können verschiedene Musikstile erstellt werden. Versuche, das Tempo deiner `setTempo`-Funktion zu ändern, indem du die Zahl im Block änderst, und beobachte, was passiert! Stelle sicher, dass die Zahl zwischen 45 und 220 liegt. Unten findest du einige Vorschläge für Tempi, die du verwenden kannst.

<img src="../img/img-tempo1.png" height="200"/>

Nun, da unser Tempo eingestellt ist, ist es Zeit, Sounds hinzuzufügen. Um dies zu tun, müssen wir die Funktion `fitMedia()` verwenden. Wir werden den neuen Code unterhalb des `setTempo()`-Funktionsblocks platzieren.

## Aktivität 1

1. Finde den lila `fitMedia()`-Block auf der linken Seite des Code-Editors.
2. Ziehe den `fitMedia()`-Block und platziere ihn unterhalb des `setTempo`-Blocks.
3. Du wirst vielleicht bemerken, dass, wenn der Block hinzugefügt wird, Earsketch einige Platzhaltertexte einfügt, die wir später ersetzen müssen. Diese Platzhaltertexte werden auch als `Parameter` bezeichnet.

<img src="../img/screenshot-parameters.png" height="100"/>

Wir werden jeden dieser Texte durch einen gültigen Wert ersetzen.

- `sound` - Navigiere zum „Sounds“-Bereich und finde einen Sound, der dir gefällt. Klicke auf „sound“ im `fitMedia()`-Funktionsblock und drücke dann die Schaltfläche „Paste“ neben dem Sound, den du hinzufügen möchtest. Der Name des Sounds sollte jetzt im `fitMedia()`-Block erscheinen.
- `trackNumber` - Nutze das Dropdown-Menü, um eine beliebige positive ganze Zahl als Track-Nummer auszuwählen. Für dieses Beispiel wähle `1`.
- `start/end` - Diese Parameter sind positive ganze Zahlen, die in Takten gemessen werden. Ein Takt ist ein Zeitabschnitt, der mit einer bestimmten Anzahl von Schlägen korreliert. Versuche, `start` auf `1` und `end` auf `9` einzustellen.

Dein Code sollte nun ungefähr so aussehen:

<img src="../img/screenshot-fit-media.png" height="400"/>

{{% notice warning %}}

Achte darauf, dass die Funktionsblöcke und Texte korrekt platziert sind.

{{% /notice %}}

5. Sobald du deine eigenen Parameter eingegeben hast, drücke auf "run" und klicke dann auf "play", um deinen Audio-Clip anzuhören!

   - **Wenn du roten Text siehst, bist du auf Fehler gestoßen! Bitte frage nach Hilfe.** Die Funktion `fitMedia()` ist das Rückgrat des Musikmachens in Earsketch. Wir werden diese Funktion oft verwenden, also stelle sicher, dass du alle offenen Fragen zu ihrer Nutzung klärst!

{{% notice info %}}

Die **Digitale Audio Workstation** (DAW) ist der Bereich, in dem die Sounds erscheinen. Sie befindet sich oben in der Mitte deines EarSketch-Fensters. Im Folgenden siehst du ein Beispiel dafür, wie verschiedene Abschnitte eines Songs in der DAW aussehen könnten.

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}