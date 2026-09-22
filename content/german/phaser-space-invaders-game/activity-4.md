---
title: "Aktivität 4 - Hinzufügen von Feinden"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 11
---

Jetzt erstellen wir einige Feinde, gegen die unser Spieler kämpfen kann! Laden wir zuerst ein Sprite Sheet für unsere Feinde in Szene 1, so wie wir es für den Spieler gemacht haben. Verwende dieselbe Syntax wie beim Laden des Spielers, aber benutze einen anderen Namen, `assets/enemies.png` als Quelle für das Sprite Sheet, und eine frameWidth und frameHeight von 16:

<!--- ![load_sprite](../media/5/load_sprite.png) --->
<img src="../media/5/load_sprite.png" alt="load_sprite" style="width:950px;"/>

Außerdem erstelle eine weitere Animation in Szene 1, genauso wie du die Animation des Spielers erstellt hast (du kannst dieselben Argumente für `frameRate` und `repeat` verwenden, aber denke daran, `enemies` für `frames` zu verwenden):

<!--- ![create_sprite](../media/5/create_sprite.png) --->
<img src="../media/5/create_sprite.png" alt="create_sprite" style="width:950px;"/>

Dieses Spiel wird viele Feinde verwenden, die identisch aussehen und sich sehr ähnlich verhalten. Um das Codieren zu vereinfachen, nutzen wir ein Konzept in Phaser namens Gruppe, um alle unsere Feinde auf einmal zu steuern. Eine Gruppe ist genau das, wonach es klingt - eine Gruppe von Objekten. Wir können auf diese Gruppe verweisen, wenn wir Änderungen für jedes Mitglied vornehmen möchten.

Wir deklarieren unsere Feindesgruppe so:

```javascript
this.enemies = this.physics.add.group();
```

Das wird eine Gruppe namens `enemies` erstellen.

Jetzt platzieren wir unsere Feinde auf dem Bildschirm. Um das zu erleichtern, verwenden wir eine weitere Hilfsmethode namens `createEnemies()` (die bereits erstellt wurde, aber noch leer ist):

<!--- ![create_enemies](../media/5/create_enemies.png) --->
<img src="../media/5/create_enemies.png" alt="create_enemies" style="width:950px;"/>

Rufe diese Methode nun in der `create()`-Methode auf, anstatt in der `update()`-Methode, wie wir es für die Spielerbewegung getan haben, da wir den Feind nur einmal beim Start des Spiels erzeugen wollen:

<!--- ![enemies_move](../media/5/enemies_move.png) --->
<img src="../media/5/enemies_move.png" alt="enemies_move" style="width:950px;"/>

Die Syntax zum Erstellen einer Feindesvariable "enemy" an der Koordinate (X, Y), mit dem `enemies` Sprite Sheet und innerhalb der zuvor deklarierten `enemies` Gruppe sieht so aus:

```javascript
var enemies = this.enemies.create(X, Y, 'enemies');
```

## Aktivität 1: Platzieren eines Feindes

Probiere es aus, indem du eine (X, Y)-Koordinate auswählst und diese Codezeile in die createEnemies()-Methode einfügst. Du musst auch die Animation direkt nach der Erstellung des Feindes abspielen (dies geschieht ebenfalls in der createEnemies()-Methode).
![declare](../media/5/enemy-one.PNG)  
Es sollte in etwa so aussehen (mit möglicherweise einer anderen Position - dieser Feind wurde auf (300, 100) platziert).

## Aktivität 2: Platzieren von weiteren Feinden

Nun fügen wir ein paar weitere Feinde hinzu. Füge in derselben Methode einige neue Feinde hinzu, sei aber vorsichtig, da jede Feindesvariable, die du innerhalb desselben Gültigkeitsbereichs erstellst, einen anderen Variablennamen haben muss.
![declare](../media/5/enemy-multiple.PNG)

## Aktivität 3: Platzieren eines Blockes von Feinden

Nun, da du den Dreh raus hast, versuchen wir etwas Herausforderndes und erstellen die Feinde in diesem Blockmuster, das unten gezeigt wird. Es gibt jedoch einen Haken: Tue dies, OHNE jeden Feind mit einer einzelnen Zeile zu deklarieren.

`TIPP: Verwende eine verschachtelte For-Schleife`  
![declare](../media/5/enemy-block.PNG)