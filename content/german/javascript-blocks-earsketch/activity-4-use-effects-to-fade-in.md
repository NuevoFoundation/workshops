---
title: "Aktivität 4 - Effekte verwenden, um einzublenden"
date: 2019-07-23T11:45:38-07:00
weight: 6
draft: false
---

Da du nun einen Effekt in deinem Song hast, lass uns versuchen, die Einführung unseres Songs einzublenden.

In Aktivität 3 haben wir die Funktion `setEffect` verwendet, um einen Effekt für die gesamte Dauer eines Songs auf einen speziellen Track anzuwenden. Aber was, wenn du möchtest, dass nur ein bestimmter Abschnitt deines Songs einen Effekt hat? Verwende die Funktion `setEffect` mit zusätzlichen Parametern!

<img src="../img/screenshot-seteffect2.png" height="30"/>

- `startValue`: Der Anfangswert, der auf den Parameter angewendet wird
- `start`: Der Takt, bei dem der Anfangswert gesetzt wird
- `endValue`: Der Endwert des Parameters
- `end`: Der Takt, bei dem der Endwert gesetzt wird

Diese Version von `setEffect` ermöglicht es uns, *Automation* für einen spezifischen Teil unseres Songs zu nutzen. Automation ist eine Methode, um den Wert eines Effekts im Laufe der Zeit zu ändern. Eine Anwendung der Automation ist, einen Song ein- oder auszublenden. Dafür müssen wir das **GAIN**-`parameter`-Volume im **VOLUME**-`effectType` über die Zeit anpassen. Wenn wir zum Beispiel den `startValue` auf -60 db und den `endValue` auf 0 db setzen, wird es so klingen, als ob unser Song im Laufe der Zeit eingeblendet wird. Um den Startpunkt und die Länge des Effekts anzupassen, müssen die Parameter `start` und `end` angegeben werden.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## Füge eine weitere setEffect-Funktion in deinen Song ein

1. Füge einen weiteren `setEffect`-Block in deinen Code ein, stelle aber sicher, dass der Block 7 Parameter enthält.
2. Wähle im Dropdown-Feld VOLUME für `effectType` aus.
3. Wähle im Dropdown-Feld GAIN für `parameter` aus.
4. Wenn du möchtest, dass sich etwas anhört, als würde es eingeblendet werden, muss die Lautstärke des Sounds sehr niedrig beginnen und allmählich ansteigen. Setze dazu `startValue` auf einen sehr niedrigen Wert (z. B. -60) und `endValue` auf einen höheren Wert (z. B. 0).

{{% notice tip %}}
*Tipp:* Die Lautstärke wird in Dezibel gemessen. Je positiver eine Zahl ist, desto lauter wird es. Versuche außerdem, 0 Dezibel nicht zu überschreiten.
{{% /notice %}}

5. Setze Werte für die Parameter `start` und `end`, um anzugeben, wann der Einblendeffekt beginnen und enden soll.

Dein Code sollte jetzt etwa so aussehen:

<img src="../img/screenshot-set-effect-2.png" height="400"/>