---
title: "Aktivität 10 - Hinzufügen eines Titelbildschirms"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 17
---

Jetzt werden wir die Trennung von Szene 1 und Szene 2 nutzen, indem wir einen Titelbildschirm zu unserem Spiel hinzufügen!

Das ist ganz einfach! Zunächst kommentieren wir die Zeile `startGame()` am Ende von `create()` in `Scene 1` aus. Wir werden die Funktion `startGame()` verwenden, um das Spiel zu starten, anstatt es wie zuvor automatisch zu starten:

<!--- ![startGame()](../media/11/comment_out.png)--->
<img src="../media/11/comment_out.png" alt="startGame auskommentieren" style="width:950px;"/>

Die Konsole wird wieder zu einer schwarzen Leinwand zurückkehren. Um einen Titelbildschirm zu erstellen, müssen wir den Hintergrundbildschirm und etwas Text in der Sektion `start page` von Szene 1 importieren:

<!--- ![start_page](../media/11/start_page.png)--->
<img src="../media/11/start_page.png" alt="start_page" style="width:950px;"/>

Du kannst den Hintergrund nur als Bild in `create()` erstellen, da Bilder nur in `update()`-Funktionen bewegt werden können!

Für die Texte empfehlen wir unterschiedliche `font` und `fills` für den Titeltext und den Starttext.

Jetzt rufen wir die Methode `startGame()` nur auf, wenn der Spieler darauf klickt, um das Spiel zu starten:

<!--- ![on_click](../media/11/on_click.png)--->
<img src="../media/11/on_click.png" alt="on_click" style="width:950px;"/>

Dein Bildschirm sollte etwa so aussehen:
![title_screen](../media/11/title_screen.gif)

## Herzlichen Glückwunsch!

Du hast jetzt alle Lektionen abgeschlossen und dein eigenes Space-Invader-Spiel erstellt! Viel Spaß damit! 👏🏽👏🏽👏🏽