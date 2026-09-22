```markdown
---
title: "Laden Sie das Vogelbild und ändern Sie den Bildschirmtext"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

Zuerst laden wir Flappy und platzieren ihn auf dem Bildschirm.

Fügen Sie den folgenden Befehl in die Datei [Datei: load-sprites.js] ein:
      ```
      game.load.image('bird','assets/bird.png');
       ```
       
### Zusammenarbeit

Im Replit-Fenster unten haben wir den Code mit der Zeile `game.load.image('bird', 'assets/bird.png');` begonnen.

![alt text](../img/loadbird.png "Bild zum Hinzufügen des Vogels in der Datei")

In Ihrer Konsole sollten Sie einen Jsappy-Vogel sehen, nachdem Sie **ausführen** und dann die Leertaste gedrückt haben:

![alt text](../img/loadbird_output.png "Vogelbild in der Ausgabe")

## Bildschirmtext ändern

Ändern wir den Text auf dem Startbildschirm:

Fügen Sie den folgenden Befehl in die Datei [Datei: start-screen.js] ein:
     var text = game.add.text(0, 0, "Press Space to Start", textOptions);
     
### Zusammenarbeit

Im Replit-Fenster unten haben wir den Code mit der Zeile `var text = game.add.text(0, 0, "Press Space to Start", textOptions);` begonnen.

![alt text](../img/startscreen.png "Bild zum Hinzufügen des Vogels in der Datei")

In Ihrer Konsole sollten Sie `Press Space to Start` sehen, nachdem Sie **ausführen** gedrückt haben:

![alt text](../img/startscreen_output.png "Vogelbild in der Ausgabe")
```