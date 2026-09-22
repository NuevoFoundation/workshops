---
title: "Positionierung in Phaser"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 5
---

## Text platzieren

Jetzt lernst du, wie man Dinge in Phaser positioniert. Schau dir den folgenden Repl an.

Fangen wir damit an, wie man Text platziert!

```javascript
message = this.add.text(20, 10, "Hello World!", {
	font: "25px Arial",
	fill: "white"
});
```

Diese Codezeilen erstellen eine Variable namens "message". Diese Variable fügt den Text "Hello World" an die (X, Y)-Koordinate (20, 10) im Spielfenster hinzu. Der Code legt außerdem fest, dass der Text weiß, in der Schriftart Arial und in der Schriftgröße 25 px erstellt wird.

Füge diese Zeile in deine `create()`-Methode am unteren Ende der Seite ein und prüfe, ob sie in deinem Spielfenster angezeigt wird.

{{% notice note %}}

1. Beim Erstellen von Text ist der Variablenname nicht der Text, der auf dem Bildschirm angezeigt wird – der Text wird in Anführungszeichen gesetzt.
2. Diese Syntax kann auch verwendet werden, um Text einzufügen, der in einer String-Variable gespeichert ist.

{{% /notice %}}

{{% notice warning %}}

### Hilfe! Mein Spielfenster ist sehr klein!

Keine Sorge, es ist eigentlich relativ groß, aber Repl minimiert es standardmäßig. Du kannst die Fensteransicht vergrößern, indem du die Balken dazwischen verschiebst.

{{% /notice %}}

## Einen Hintergrund platzieren

Texte sind sehr einfach, aber wenn wir unsere eigenen benutzerdefinierten Sprites für das Spiel verwenden möchten (was fast immer der Fall ist), müssen wir den Sprite zuerst in `preload()` laden, bevor wir seinen Standort in `create()` angeben.

Fangen wir damit an, einen Hintergrund zu erstellen. Füge diesen Code in deine `preload()`-Methode ein.

```javascript
this.load.image('background', 'assets/sky.png');
```

Dies lädt das Bild einfach in das Spiel. Als Nächstes fügen wir dieses Bild dem Spiel mit `create()` hinzu:

```javascript
this.add.image(400, 300, 'sky');
```

Diese Zeile platziert das Bild einfach an der Koordinate (400, 300). Probier es aus und schau, ob dein Hintergrund nicht mehr ein schwarzer Bildschirm ist!

{{% notice note %}}

Die Koordinate (400, 300) bezieht sich auf den Punkt, an dem wir das mittlere Pixel unseres Bildes platzieren. Das bedeutet, dass (400, 300) das Zentrum des Bildes ist. Wir platzieren das Bild hier, damit es wie ein Hintergrund den gesamten Bildschirm abdeckt.

{{% /notice %}}

## Einen Charakter platzieren

Als Nächstes setzen wir einen Charakter in unsere Welt.

Der Code, der in die Funktion `preload()` eingefügt wird, sieht so aus:

```javascript
this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48
});
```

Dieser Code benötigt etwas mehr Details, weil es sich um ein Spritesheet und nicht um einen einfachen Sprite handelt. Spritesheets sehen so aus:  
![dude](../media/example-dude.png)  
Das ist das Spritesheet für unseren Charakter. Spritesheets sind im Wesentlichen eine Sammlung von Sprites eines einzelnen Charakters oder Objekts in verschiedenen Positionen. Wenn sie nacheinander abgespielt werden, erzeugen sie Animationen für unser Spiel (was wir im nächsten Kapitel genauer erläutern). Obwohl für uns offensichtlich ist, dass es sich um eine Sammlung von Bildern desselben Charakters handelt, kann der Computer dies nicht so leicht erkennen. Aus diesem Grund benötigen wir eine spezifischere Syntax, um dem Computer mitzuteilen, wie groß jedes Charakter-Sprite im Spritesheet ist (in diesem Fall 32x48).

Die Syntax zum Platzieren dieses Spritesheets in `create()` ist nahezu identisch mit der Verwendung eines Bildes, enthält jedoch ein physics-Tag:

```javascript
dude = this.physics.add.sprite(250, 200, 'dude');
```

In dieser Zeile erstellen wir die Variable "dude", die das erste Bild im Spritesheet an der Koordinate (250, 200) hinzufügt. Das Bild bekommt den Namen "dude."

In dieser Zeile ist "player" der Name einer erstellten Variable. 250 und 200 sind die X- und Y-Koordinaten, an denen wir den Sprite platzieren; er wird also an der Koordinate (250, 200) des Bildschirms platziert. "dude" ist der Name unseres Sprites, wird jedoch in dieser Lektion nicht weiter von Bedeutung sein.

Versuche, den Charakter hinzuzufügen! Siehst du den Charakter auf deinem Bildschirm?

{{% notice note %}}

1. Um den Charakter sehen zu können, MUSS die Variable "dude" in `create()` nach dem Hintergrund erstellt werden. Das liegt daran, dass der Code von oben nach unten gelesen wird. Wenn der Charakter vor dem Hintergrund platziert wird, legt der Computer den Hintergrund über den Charakter, wodurch dieser für den Benutzer unsichtbar wird.
2. Der Charakter "dude" sollte nach links schauen, da Spritesheets beim ersten Platzieren immer mit dem ersten Eintrag im Blatt gestartet werden und unser "dude" im ersten Bild nach links schaut.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorPlacingThings" target="_blank">Replit starten</a>