---
title: "Phaser-Grundlagen"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 3
---

## Teil 1: Die Config-Variable

Lass uns einige der Grundlagen von Phaser durchgehen, einem Spiele-Framework, das HTML und JavaScript verwendet, um Spiele fürs Web zu erstellen! Genau das wirst du in diesem Workshop lernen.

Gehe zu `game.js`. Jedes Phaser-Spiel beginnt mit einer Variablen, die die Konfigurationen des Spiels speichert (oft als `config` benannt, wie wir es hier gemacht haben).

```javascript
var config = {
  type: Phaser.AUTO,
  width: 512,
  height: 544,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],

	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
};
```

In dieser Variablen siehst du, dass wir verschiedene Eigenschaften unseres Spiels definiert haben, wie die Breite, die Höhe und die Hintergrundfarbe. Wir haben auch die Szenen definiert, die wir verwenden werden (mehr Informationen zu Szenen später). Du kannst auch ein Spiel ohne Szenen erstellen und einfach den gesamten Code in die Datei `game.js` schreiben.

Du wirst auch feststellen, dass wir die Physik des Spiels in der Config festlegen. In der Spieleentwicklung ist die Physik einer der wichtigsten Aspekte, die das „Gefühl“ eines Spiels definieren. Zum Beispiel verleihen die federnden Bewegungen in Mario dem Spiel ein charakteristisches „Mario-Gefühl“. Für unser Spiel kannst du sehen, dass wir „Arcade“-Physik verwenden, eine Art von Physik in Phaser, die sehr einfach zu nutzen ist. Außerdem beachten wir, dass wir in unserer Physik die Gravitation auf 0 setzen, da unser Spiel ein Space-Shooter ist und wir keine Gravitationskraft benötigen, die unsere Charaktere nach unten zieht.

Am Ende der Datei `game.js` kannst du sehen, dass wir die Config-Variable an eine Spielvariable übergeben – etwas, das in einem Phaser-Spiel fast immer erforderlich ist.

## Teil 2: Szenen

Nun wollen wir endlich ein wenig über Szenen sprechen. Eine Szene ist im Wesentlichen ein Spielzustand, in dem sich der Benutzer befindet. Das versteht man am besten an einem Beispiel:

Nehmen wir die berühmte Spielreihe Pokémon. Wenn du spielst, bist du oft in der Spielwelt unterwegs. Wenn du einem Trainer oder einem wilden Pokémon im hohen Gras begegnest, wechselst du in eine andere Szene, um zu kämpfen. Nachdem du den Kampf beendet hast, kannst du deine Karte öffnen, um zu sehen, wohin du gehen musst – das öffnet ebenfalls eine andere Szene. Diese drei Szenen funktionieren vollständig unterschiedlich und haben ihre eigenen Mechaniken. Wenn du die Karte schließt, wechselt das Spiel zurück zur Welt-Szene, in der du als Spieler herumlaufen kannst. Und wenn du in den Kampf gehst, wechselst du in die Kampf-Szene. Du siehst, wie unterschiedlich diese drei Spielzustände erstellt werden müssen – der Kampf benötigt ein Menü, die Welt eine 2D-Umgebung und einen Spieler, und die Karte ist im Wesentlichen ein interaktives Diagramm. Wir trennen diese Szenen, weil sie alle völlig unterschiedlich erstellt werden müssen.

Man kann sich vorstellen, dass der Benutzer beim Spielen zwischen den Szenen wechselt. Er nutzt dabei nur eine Szene gleichzeitig, und jede ist fast wie ein eigenes Minispiel (obwohl es normalerweise eine Hauptszene gibt, die nicht unbedingt „mini“ ist).

{{% notice info %}}

Technisch gesehen könnten wir eine einzelne Szene für alle drei Spielzustände verwenden, wenn wir wollten (wie du ein Spiel in Szenen aufteilst, liegt am Spieledesigner). Es ist theoretisch möglich. Allerdings macht die Erstellung separater Szenen das Programmieren erheblich einfacher (in diesem Fall kann ich mir kaum vorstellen, wie man sie in einer einzigen Szene unterbringen könnte, ohne einfach nur die visuellen Elemente übereinander zu legen).
{{% /notice %}}

Ein weiteres sehr häufiges Beispiel für die Verwendung von Szenen ist ein Titelbildschirm:

![Titelbildschirm des Spiels Outliers](../media/title-game.png)

Die erste Szene zeigt einfach einen Titelbildschirm, der oft Dinge wie Einstellungen, das Laden eines Spielstands und mehr enthält. Sobald der Spieler auf "Spielen" klickt, wird in eine andere Szene gewechselt, in der das eigentliche Spiel stattfindet.

Genau das werden wir auch machen. Szene 1 wird einen Titelbildschirm enthalten, und Szene 2 wird unser tatsächliches Gameplay enthalten. Somit wird Szene 2 den Großteil des Codes beinhalten, und dort wirst du hauptsächlich arbeiten.

# Teil 3: Unendliche Zeichenfläche

Wenn du das Spiel im Replit startest, siehst du einen leeren Bereich auf deinem Bildschirm, auf dem du später Objekte platzieren wirst. Du siehst dabei jedoch nur einen Teil der gesamten Leinwand – eigentlich ist die Leinwand in alle Richtungen unendlich groß. Die Leinwand verhält sich in allen Bereichen gleich – das bedeutet, dass Objekte bewegt und in Teile der Leinwand platziert werden können, die der Benutzer nicht sehen kann. Das wird wichtig, denn für unser Spiel möchten wir nicht, dass Dinge wirklich außerhalb des Bildschirms landen, also müssen wir unsere Objekte innerhalb des Bildschirms begrenzen oder löschen, wenn sie ihn verlassen.