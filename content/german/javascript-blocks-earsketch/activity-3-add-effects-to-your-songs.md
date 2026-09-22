---
title: "Aktivität 3 - Effekte zu deinem Song hinzufügen"
date: 2019-07-23T11:45:38-07:00
weight: 5
draft: false
---

## Effekte in EarSketch

**Effekte** ermöglichen es dem Produzenten, den Klang des Audioclips in einen ganz individuellen Sound zu verwandeln. Ähnlich wie wir `fitMedia()` verwendet haben, um neue Audioclips hinzuzufügen, müssen wir die Funktion `setEffect()` verwenden, um spezifische Effekte für jeden Audioclip zu definieren. Es ist wichtig zu beachten, dass mehrere Effekte auf demselben Track angewendet werden können. Dies ermöglicht es dem Produzenten, mehrere Effekte zu kombinieren. EarSketch verfügt über zahlreiche eingebaute Effekte. Um alle Effekte zu referenzieren, besuche diesen [Link](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) und stelle sicher, dass im Navigationsbereich der *Curriculum*-Bereich ausgewählt ist.

Bevor wir damit beginnen, Effekte zu unserem Song hinzuzufügen, sehen wir uns die Bestandteile der beiden `setEffect`-Funktionen genauer an:

<img src="../img/screenshot-seteffect1.png" height="30"/>

- `track`: Die Tracknummer, auf die der Effekt angewendet wird. Hinweis: Um einen Effekt auf den Master-Track anzuwenden, verwende 0 als Wert für den Track. Der Master-Track ist dort, wo alle Audios gemeinsam abgespielt werden. Dies ist eine einfache Möglichkeit, einen Effekt auf alle verarbeiteten Sounds anzuwenden.
- `effectType`: Der spezifische Effekt, der verwendet wird.
- `effectParameter`: Die Einstellung für den verwendeten Effekt.
- `effectValue`: Der Wert, der auf den `effectParameter` angewendet wird.
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

## Funktion setEffect zu deinem Song hinzufügen

Jetzt, da wir mit dem Einsatz von Effekten vertrauter sind, können wir einen Effekt zu unserem Song hinzufügen.

1. Finde den Funktionsblock `setEffect`. Es gibt zwei `setEffect`-Blöcke; wähle den obersten aus. Ziehe den Block in das Skript und füge ihn unter den bereits vorhandenen Codeblöcken ein.
2. Wir müssen die Parameter durch unsere eigenen Werte ersetzen. Verwende das Dropdown-Menü, um `track` durch 2 (oder eine beliebige Zahl deiner Wahl) zu ersetzen.
3. Verwende das Dropdown-Menü, um die verschiedenen Effekte auszuwählen, die für den Parameter `effectType` verfügbar sind. Wähle DELAY als `effectType`.
4. Jetzt, da wir unseren `effectType` ausgewählt haben, benötigen wir einen `parameter`. Wähle DELAY_FEEDBACK als `parameter`.
5. Für den letzten Parameter gib einen gültigen Wert ein. Da wir DELAY_FEEDBACK ausgewählt haben, müssen wir eine Zahl zwischen -120,0 und -1,0 angeben. Beispiel: Verwende -6,0 als deinen Effektwert für DELAY_FEEDBACK.

Dein Code sollte jetzt in etwa so aussehen:

<img src="../img/screenshot-set-effect-1.png" height="400"/>