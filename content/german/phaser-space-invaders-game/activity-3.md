```markdown
---
title: "Aktivität 3 - Hinzufügen von Tastatureingaben zur Spielerbewegung"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 10
---

Jetzt lassen wir unser Schiff bewegen, wenn der Spieler die Tastatur benutzt. Der erste Schritt besteht darin, ein `cursor`-Attribut in der Methode `create()` in `Scene2.js` zu erstellen:

<!--- ![create_cursor_key](../media/4/create_cursor_key.png) --->
<img src="../media/4/create_cursor_key.png" alt="create_cursor_key" style="width:950px;"/>

Der effizienteste Weg, Bewegung zu schaffen, besteht darin, eine Hilfsfunktion zu erstellen, die das `cursor`-Attribut verwendet, um zu prüfen, ob eine Taste auf der Tastatur gedrückt wurde. Wir haben diese Funktion bereits für dich erstellt und sie heißt `movePlayer()`:

<!--- ![move_player_function](../media/4/move_player_function.png) --->
<img src="../media/4/move_player_function.png" alt="move_player_function" style="width:950px;"/>

Wir bewegen dann den Spieler mit dieser Funktion. Wir können diese Funktion in der Methode `update()` aufrufen, sodass wir die Bewegung in jedem Update-Zyklus prüfen (das haben wir auch schon für dich erledigt).

Gehe nun zur Methode `movePlayer()` und schreibe Code, der die Bewegung prüft und den Spieler entsprechend bewegt.

{{% notice hint %}}

* Wir empfehlen eine Bewegungsgeschwindigkeit von 200
* Verwende eine `if`-Anweisung
* Nachdem du die `if`-Anweisungen erstellt hast, wirst du vielleicht feststellen, dass sich dein Spieler weiterhin bewegt, selbst wenn du die Tastatur nicht mehr drückst. Um dies zu beheben, denke nach: Was sollte das Schiff tun, wenn der Spieler die Tastatur nicht mehr drückt?

{{% /notice %}}

Teste es jetzt aus! Du wirst jedoch möglicherweise eine Sache bemerken: Der Spieler kann sich außerhalb des Bildschirms wie folgt bewegen:

<!--- ![bounds](../media/4/player-off.gif) --->
<img src="../media/4/player-off.gif" alt="bounds" style="width:100px;"/>

Dies geschieht, weil Phaser eine unbegrenzte Leinwand verwendet, die auch außerhalb des Sichtfensters des Bildschirms existiert. Wir können dies beheben, indem wir den Spieler mithilfe einer einzigen Codezeile auf den Bildschirm beschränken:

```javascript
this.player.body.setCollideWorldBounds(true); // Spieler kann den Bildschirm nicht verlassen
```

Finde die Methode `create()` in Scene 2:

<!--- ![set_bound](../media/4/set_bound.png) --->
<img src="../media/4/set_bound.png" alt="set_bound" style="width:950px;"/>

Nun, da dein Spieler innerhalb des Bildschirms begrenzt ist, solltest du dein Schiff so bewegen können:

<!--- ![animation spaceship and background](../media/4/player-move-example.gif) --->
<img src="../media/4/player-move-example.gif" alt="animation spaceship and background" style="width:300px;"/>
```