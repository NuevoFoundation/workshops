---
title: "Aktivität 1 - Hintergrund und Spieler-Schiff platzieren"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 6
---

Diese Aktivität besteht aus zwei Teilen: den Hintergrund des Spiels laden und das Schiff laden, das der Spieler schließlich steuern wird (das zu diesem Zeitpunkt nur ein unbewegliches Bild sein wird). Für beide Aktivitäten ist die Methode sehr ähnlich: Zuerst laden wir das Bild in das Spiel in Szene 1 hoch und machen es dann in Szene 2 sichtbar. Du kannst dir vorstellen, dass Szene 1 zum Hochladen des Bildes in das Spiel verwendet wird und Szene 2 zum Erstellen von Objekten, die wir hochgeladen haben.

## Teil 1: Der Hintergrund

Beginnen wir mit dem Hintergrund. Wie bereits erwähnt, laden wir Bilder zuerst in Szene 1 hoch und platzieren sie dann in Szene 2 im Spiel. Gehe zuerst zu Schritt 1 in der `preload()`-Funktion in der Datei `Scene1.js`:

<!---![background part 1](../media/3/step1.png) --->
<img src="../media/3/step1.png" alt="Hintergrund Teil 1" style="width:950px;"/>

Lade nun das Hintergrundbild in `preload()`.

Zur Wiederholung:
* Nichts wird passieren, nachdem du diese Zeile ausgefüllt hast, da du das Bild nur für die zukünftige Verwendung lädst und noch nicht platzierst.

* `imageID` ist der Name, den du dem Bild gibst.

* `imagePosition` ist die Position des Bildes.
(Ein Bild namens example.png im Ordner assets, imagePosition wäre dann assets/example.png)

Als Nächstes gehe zu Schritt 1 und Schritt 2 in der `create()`-Funktion in der Datei `Scene2.js`. Jeder Schritt benötigt eine Zeile Code, also insgesamt zwei Zeilen:

<!---![background_section](../media/3/background_section.png) --->
<img src="../media/3/background_section.png" alt="Hintergrund Abschnitt" style="width:950px;"/>

Versuche, die Seite zu laden, und prüfe, ob der Hintergrund funktioniert! Deine Konsole rechts sollte in etwa so aussehen:

<!---![after_add_image](../media/3/after_add_image.png) --->
<img src="../media/3/after_add_image.png" alt="Hintergrund nach Bild hinzufügen" style="width:950px;"/>

## Teil 2: Das Spieler-Schiff

Wir werden fast das Gleiche mit dem Spieler machen, aber mit einer anderen Syntax, da das Schiff des Spielers ein Spritesheet statt eines normalen Bildes ist (du wirst im nächsten Abschnitt sehen, warum).

Für diesen Teil bearbeitest du Schritt 2 in der `preload()`-Funktion in der Datei `Scene1.js`:

<!---![background player ship step2](../media/3/step2.png) --->
<img src="../media/3/step2.png" alt="Hintergrund Spieler-Schiff Schritt 2" style="width:950px;"/>

* `SpriteID` und `SpritePosition` funktionieren genauso wie `imageID` und `imagePosition`.

* `FrameWidth` sollte 32 und `FrameHeight` sollte 48 sein.

Und bearbeite den `player section` in `Scene2.js`:

<!--- ![player_section](../media/3/player_section.png) --->
<img src="../media/3/player_section.png" alt="Hintergrund Spieler Abschnitt" style="width:950px;"/>

{{% notice hint %}}

Wenn der Spieler-Abschnitt korrekt ausgefüllt wurde, der Spieler jedoch nicht auf dem Bildschirm angezeigt wird, versuche die Werte für x und y zu ändern – der Spieler könnte sich außerhalb des sichtbaren Bereichs befinden!

{{% /notice %}}

Nachdem du das Spieler-Schiff hinzugefügt hast, sollte deine Konsole so aussehen:

<!--- ![after_add_player](../media/3/after_add_player.png) --->
<img src="../media/3/after_add_player.png" alt="Hintergrund nach Spieler hinzufügen" style="width:950px;"/>