---
title: "Aktivität 3 - Ändere die Tastenbelegung, um das linke Paddle zu bewegen"
date: 2019-07-29T13:24:17-07:00
weight: 5
draft: false
---

Glückwunsch! Du hast nicht nur die Spielfeldgrenze repariert, sondern auch Objekten Farbe hinzugefügt. Jetzt wollen wir sehen, ob du die Tasten für die Bewegung des Paddles ändern kannst.

Dafür müssen wir einen der Parameter ändern, den wir beim Erstellen des linken Paddle-Objekts übergeben haben. Erinnere dich an den Abschnitt "Die Grundlagen - Klasse und Objekt", in dem du die Klasse `Paddle` mit den UP- und DOWN-Tasten als Attribute definiert hast.

Finde `# TODO (ACTIVITY 3)` im Code. Ändere den entsprechenden Attributwert für das linke Paddle so, dass das Drücken der Taste `'s'` das linke Paddle nach unten bewegt. Beachte, dass die Abwärtsbewegung des linken Paddles derzeit durch die Taste `'T'` gesteuert wird.

{{% notice tip %}}

Versuche, die UP-Taste mit einer anderen Taste zu tauschen. Drücke <b>Run</b>, um deine Änderungen zu testen.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">Replit starten</a>

## Fazit

Du hast gerade das Attribut `down_key` in der Klasse `Paddle` geändert, um zu beeinflussen, wie sich das linke Paddle-Objekt auf dem Bildschirm bewegen soll.