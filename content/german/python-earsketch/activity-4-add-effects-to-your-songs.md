```markdown
---
title: "Aktivität 4 - Effekte zu deinem Song hinzufügen"
description: "Kopfhörer einrichten"
weight: 8
prereq: "Python Grundlagen: Print, Kommentare, Funktionen"
difficulties: ["mittel"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/vryYSBvwnIY" title="Aktivität 4 - Effekte zu deinem Song hinzufügen - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Effekte in EarSketch

**Effekte** ermöglichen es dem Produzenten, den Klang des Audioclips in einen einzigartigen Sound zu verwandeln. Ähnlich wie wir `fitMedia()` verwendeten, um neue Audioclips hinzuzufügen, müssen wir die Funktion `setEffect()` verwenden, um bestimmte Effekte für jeden Audioclip zu definieren. Es ist wichtig zu beachten, dass mehrere Effekte auf denselben Track angewendet werden können. Dadurch kann der Produzent mehrere Effekte kombinieren. Earsketch hat viele integrierte Effekte. Um alle Effekte zu sehen, besuche diesen [Link](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) und stelle sicher, dass das *Curriculum*-Fenster auf der rechten Seite des Bildschirms angezeigt wird.

Bevor wir beginnen, Effekte zu unserem Song hinzuzufügen, schauen wir uns die Bestandteile der beiden `setEffect`-Funktionen genauer an:

![](../img/screenshot-seteffect1.png)

- `track`: Die Track-Nummer, auf die der Effekt angewendet wird. Hinweis: Um einen Effekt auf den Master-Track anzuwenden, verwende 0 als Wert für `track`. Der Master-Track ist der Track, auf dem alle Audioquellen zusammen abgespielt werden. Dies ist eine einfache Möglichkeit, einen Effekt auf alle Sounds anzuwenden, die verarbeitet werden.
- `type`: Der spezifische Effekt, der verwendet wird.
- `parameter`: Die Einstellung des verwendeten Effekts.
- `value`: Der Wert, der auf den Effektparameter angewendet wird.

<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.3%;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>

<div class="row">
  <div class="column">
    <img src="../img/Robot_2_Pink.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_1_Green.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_2_Blue.PNG" width="45%">
  </div>
</div>

## Füge die Funktion setEffect zu deinem Song hinzu

Da wir jetzt mit Effekten vertrauter sind, lass uns einen Effekt zu unserem Song hinzufügen.

1. Scrolle im API-Browser auf der linken Seite zur `setEffect` API.
2. Füge einen `setEffect`-Funktionsaufruf in deinen Code ein, indem du das Paste-Symbol verwendest.
3. Wir müssen die Parameter mit unseren eigenen Werten ersetzen. Gib einen Integer-Wert für `track` ein. Lass uns 2 verwenden.
4. Für die restlichen Effektparameter klicke auf **Öffnen** neben der `setEffect` API, und du wirst einen Link zu "Every Effect Explained in Detail" sehen. Klicke darauf, um diesen Abschnitt auf der rechten Seite deines Fensters zu öffnen.

<img src="../img/screenshot-seteffect-open.png" height="400"/>

<img src="../img/screenshot-seteffect-explain.png" width="200"/>

5. Du wirst feststellen, dass Earsketch viele verschiedene Variationen von Effekten hat. Standardmäßig solltest du Abschnitt 10.1 BANDPASS auf der rechten Seite sehen. Für jetzt verwenden wir DELAY aus Abschnitt 10.4 als `type` in unserem `setEffect`-Funktionsaufruf.
6. Jetzt, da wir unseren `type` ausgewählt haben, benötigen wir einen `parameter`. Navigiere zu Abschnitt 10.4 auf der rechten Seite, um die verschiedenen unterstützten Parameter für DELAY zu sehen. Hier ist ein Bild dieses Abschnitts. Wir empfehlen die Verwendung von DELAY\_FEEDBACK.

![Parameter-Effektbild](../img/screenshot-effect-parameter.png)

7. Für den letzten Parameter gib einen gültigen Wert ein. Da wir DELAY\_FEEDBACK gewählt haben, müssen wir eine Zahl zwischen -120,0 und -1,0 angeben (wie im Bild oben gezeigt). Beispiel: Verwende -6,0 als deinen Effektwert für DELAY\_FEEDBACK.

Dein Code sollte jetzt etwa so aussehen:

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
```
```