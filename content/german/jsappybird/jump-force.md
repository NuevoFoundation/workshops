---
title: "Lassen Sie den Vogel mit Kraft springen und mit Rotation fallen"
date: 2020-07-29T13:24:17-07:00
draft: false
weight: 4
---

Fügen wir dem Vogel Kraft hinzu

Fügen Sie den folgenden Befehl in die Datei [Datei: create-game.js] ein:
    bird.body.velocity.y = -350;
    
{{% notice tip %}}

## Zusammenarbeit

Im Replit-Fenster unten haben wir den Code mit der Zeile `bird.body.velocity.y = -350;` begonnen.

![alt text](../img/jump_force.png "Bild zur Hinzufügung von Gravitation für den Vogel")

In Ihrer Konsole sollten Sie einen JSappy-Vogel sehen, der mit Kraft springt, nachdem Sie **run** gedrückt haben:

![alt text](../img/jump_output.png "Vogel springt mit Gravitation")

{{% /notice %}}

## Bonusaktivität

Lassen Sie den Vogel nach oben und vorne springen:

Fügen Sie den folgenden Befehl in die Datei [Datei: create-game.js] ein:
    bird.body.velocity.x = 100;

# Vogel fallen mit Rotation

Fügen wir dem Vogel Rotation hinzu:

Fügen Sie den folgenden Befehl in die Datei [Datei: update-game.js] ein:
    if (bird.angle < 50) {
       bird.angle += 1;
    }

## Kommentare:

`If` ist ein bedingter Block, in dem wir den Winkel des Vogels prüfen. Wenn er kleiner als 50 ist, führen wir die Bedingung aus.
   -bird.angle+=1;

{{% notice tip %}}

## Zusammenarbeit

Im Replit-Fenster unten haben wir den Code mit der Zeile `bird.angle += 1;` begonnen.

![alt text](../img/rotate.png "Bild zur Hinzufügung von Rotation für den Vogel")

In Ihrer Konsole sollten Sie einen JSappy-Vogel sehen, der sich mit einem Winkel dreht, nachdem Sie **run** gedrückt haben:

![alt text](../img/rotate_output.png "Vogel dreht sich")

{{% /notice %}}