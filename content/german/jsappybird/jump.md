---
title: "Den Vogel springen lassen & Schwerkraft hinzufügen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

### Was sollen wir mit dem Vogel machen?

Lassen wir ihn springen:

Fügen Sie den folgenden Befehl in die Datei [File: create-game.js] ein:
     spaceKey.onDown.add(jump, this);

### Zusammenarbeit

Im Replit-Fenster unten haben wir den Code mit der Zeile `spaceKey.onDown.add(jump, this);` gestartet.

![alt text](../img/jump.png "Bild, um Springen hinzuzufügen")

In Ihrer Konsole sollten Sie einen Jsappy-Vogel sehen, der springt, nachdem Sie **run** gedrückt haben:

![alt text](../img/jump_output.png "Bild eines springenden Vogels")

## Schwerkraft hinzufügen
### Zusammenarbeit

Im Replit-Fenster unten haben wir den Code mit der Zeile `bird.body.gravity.y = 900;` gestartet.

![alt text](../img/gravity.png "Bild, um dem Vogel Schwerkraft hinzuzufügen")

In Ihrer Konsole sollten Sie einen JSappy-Vogel sehen, der mit Schwerkraft springt, nachdem Sie **run** gedrückt haben:

![alt text](../img/jump_output.png "Vogel springt mit Schwerkraft")