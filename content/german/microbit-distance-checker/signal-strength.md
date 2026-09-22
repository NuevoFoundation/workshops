---
title: "Interpretation der Signalstärke"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

Jetzt, da unser micro:bit weiß, wie stark das empfangene Signal ist, müssen wir herausfinden, wie nahe wir uns befinden. Klicke auf den Bereich "Logik" und greife den Block „Wenn wahr, dann / sonst“. Ziehe diesen Block in den Block „Beim Empfang einer Nachricht“, direkt unter die Stelle, an der wir die „strength“-Variable setzen. Gehe zurück in den Logik-Bereich und ziehe den Vergleich „0 = 0“ oben auf das „wahr“ in der Zeile „Wenn wahr, dann“. Dein Code sollte nun so aussehen:

![Arbeitsbereich mit hinzugefügtem Wenn/Dann/Sonst-Block im Ereignisblock](../img/addedLogic.png)

Als Nächstes sagen wir unserem micro:bit-Mikrocontroller, wie er feststellen soll, ob wir 6 Fuß (2 Meter) voneinander entfernt sind. Öffne das Variablen-Menü und wähle die Blase aus, die einfach nur „strength“ heißt, und ziehe diese auf die erste Null in unserem „if“-Block, sodass er jetzt sagt: `if strength = 0 then`. Klicke nun auf das Gleichheitszeichen (=), um eine Liste mit verschiedenen Symbolen anzuzeigen. Wähle das Größer-als-Symbol (>) aus. Klicke schließlich auf die letzte Null in unserer „if“-Anweisung und ersetze sie durch `-67`. Dein pinkfarbener „on radio received“-Block sollte jetzt wie folgt aussehen:

![Arbeitsbereich mit abgeschlossenem Wenn/Dann/Sonst-Block im Ereignisblock](../img/completedCondition.png)

Du fragst dich vielleicht: „Warum -67? Das scheint eine zufällige Zahl zu sein.“ -67 dBm (das sind Dezibel-Milliwatt) ist einfach der Signalpegel, den wir bereits im Voraus gemessen haben, wenn zwei micro:bits 6 Fuß voneinander entfernt sind. Unterschiedliche Bluetooth-Radios, wie z. B. das in deinem Handy, könnten bei der gleichen Distanz eine andere Signalstärke aufweisen. Je näher dein Signal an 0 liegt, desto stärker ist es und desto näher bist du am anderen Radio. Eine Signalstärke, die weiter von 0 entfernt ist, bedeutet ein schwächeres Signal, also bist du wahrscheinlich auch weiter vom Radio entfernt.

Das bedeutet, wenn das Signal, das wir erhalten, stärker als -67 dBm ist (`strength > -67`), sind unsere micro:bit-Radios weniger als 6 Fuß voneinander entfernt. Ist das Signal jedoch schwächer, müssen unsere Radios mehr als 6 Fuß voneinander entfernt sein.