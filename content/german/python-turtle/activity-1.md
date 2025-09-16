---
title: "Aktivität 1 - Ein Quadrat zeichnen"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

<img src="../media/bee_square.png" alt="Biene stellt sich ein Quadrat vor" width="25%" />

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/CRJf-LbXAx4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Glückwunsch! Du hast Alex geholfen, eine Linie zu zeichnen! Jetzt wollen wir einen Schritt weiter gehen und Alex helfen, ein Quadrat zu zeichnen. Ein Quadrat ist eine der einfachsten und bekanntesten Formen in der Geometrie. Ein Quadrat hat vier Seiten, die genau gleich lang sind. Wenn wir von "Winkel" sprechen, meinen wir den Raum zwischen zwei Seiten, wo sie sich treffen. In einem Quadrat sind auch alle vier Winkel gleich.

Die Schildkröte muss sich 4 Mal um 90 Grad drehen und jedes Mal die gleiche Anzahl von Schritten gehen, um ein Quadrat zu schaffen.

Hier ist der Trick: Die Summe der Winkel um einen Punkt (wie dort, wo du dich drehst) beträgt immer 360 Grad. Wenn du 360 Grad durch die Anzahl der notwendigen Drehungen teilst (was für ein Quadrat 4 ist), erhältst du den Winkel, den du drehen musst. 
Also, 360 Grad ÷ 4 Drehungen = 90 Grad pro Drehung.

Um ein Quadrat zu zeichnen, müssen wir diesen Schritten folgen:

1. Gehe 50 Schritte vorwärts
2. Drehe dich um 90 Grad nach links
3. Gehe 50 Schritte vorwärts
4. Drehe dich um 90 Grad nach links
5. Gehe 50 Schritte vorwärts
6. Drehe dich um 90 Grad nach links
7. Gehe 50 Schritte vorwärts

Denke daran, `turtle.forward()` zu verwenden, um Linien zu zeichnen. Um dich 90 Grad nach links zu drehen, musst du `90` als Argument an die Methode `turtle.left()` übergeben:

``` python
turtle.left(90)
```

<iframe src="https://trinket.io/embed/python/bfe791bb1e" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>