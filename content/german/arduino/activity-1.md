```markdown
---
title: "Aktivität 1: Blinkende LED"
draft: false
weight: 4
---

## Verkabelung unserer blinkenden LED

Für Ihre Einführung in dieses System werden wir eine LED ein- und ausschalten. Dadurch können wir die Grundlagen der Schaltungstechnik erlernen und verstehen, wie unser Programm Komponenten steuern und manipulieren kann.

![Alt Text: Verkabelungsdiagramm für die LED](../img/act1_LED1.png)

1. Verbinden Sie den langen Anschluss (Anode) Ihrer LED mit Pin 25J und den kurzen Anschluss (Kathode) irgendwo in der blauen [-]-Linie.
2. Verbinden Sie einen 220-Ohm-Widerstand mit einem Bein in 25H und das andere irgendwo in der roten [+]-Linie.
3. Verbinden Sie ein Ende eines Jumperkabels mit einem beliebigen Punkt in derselben roten [+]-Linie auf dem Breadboard wie in Schritt 2 und das andere mit 5V auf der Elegoo-Platine.
4. Verbinden Sie ein Ende eines Jumperkabels mit 31Z auf dem Breadboard und das andere mit GND (Masse) auf der Elegoo-Platine.
5. Schließen Sie die Arduino-Platine über USB an Ihren PC an und öffnen Sie die Arduino IDE-Anwendung.

{{% notice info %}}
Das Farbcodieren von Kabeln ist üblich und wirklich hilfreich! Hier haben wir rot für die positive Ladung und schwarz für die negative Ladung verwendet, aber die Farbe spielt keine Rolle, solange Sie sich merken können, was was ist.
{{% /notice %}}

## Öffnen des LED-Beispielcodes

6. Klicken Sie auf Datei -> Beispiele -> 01.Basics -> Blink

![Alt Text: Bild, das zeigt, wie der Blink-Beispielcode gefunden wird](../img/Blink-sample-code.png)

7. Klicken Sie nun auf die Upload-Schaltfläche, um das Programm auf den Arduino hochzuladen.

{{% notice info %}}  
ZUSATZ: Beachten Sie das Timing, wann die LED ein- und ausgeschaltet wird. Was könnten Sie Ihrer Meinung nach im Programm ändern, um dieses Timing zu modifizieren?  
Wenn Sie sagten, die Zahl 1000 in `delay(1000);`, haben Sie RECHT!  
Ändern Sie diese Zahl (vergessen Sie nicht, erneut auf die Upload-Schaltfläche zu klicken).  
Merken Sie einen Unterschied? Warum, glauben Sie, ist 1000 gleich 1 Sekunde? Wie lange wären 10 Minuten? Warum?  

{{% /notice %}}
```