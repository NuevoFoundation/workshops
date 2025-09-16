---
title: "Aktivität 5 - Ein Wabenmuster zeichnen"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

<img src="../media/bee_honeycomb.png" alt="Wabenzeichnung" width="25%" />

Dies ist das Finale! Lassen Sie uns die Wabe erstellen, in der Alex leben wird. Zum Glück ist eine Wabe einfach 6 Sechsecke, also kombinieren wir unser Wissen über Funktionen und Schleifen, um unsere Wabe zu erstellen!

Ein Sechseck ist eine Form mit 6 Seiten. Um eine Wabe zu erstellen, müssen Sie 7 Sechsecke so anordnen, dass sie perfekt ohne Lücken zusammenpassen. Es sieht aus wie ein Sechseck in der Mitte mit 6 Sechsecken, die um das zentrale Sechseck herum angeordnet sind - eines oben, eines unten, eines links oben, eines rechts oben, eines links unten und eines rechts unten.

Denken Sie daran, den Stift anzuheben, um 50 Schritte zur neuen Position zu bewegen und 60 Grad nach rechts zu drehen, um das neue Sechseck zu zeichnen.

In dieser Aktivität erstellen Sie eine neue Funktion namens `draw_honeycomb()`. Innerhalb des Funktionskörpers erstellen Sie eine Schleife, die 6 Mal wiederholt wird. Innerhalb der Schleife müssen wir zuerst ein Sechseck mit unserer zuvor definierten Funktion `draw_hexagon()` zeichnen. Danach bewegen wir die Schildkröte, damit sie das nächste Sechseck zeichnen kann. Dazu muss sich die Schildkröte nach dem Zeichnen jedes Sechsecks **50 Pixel** vorwärts bewegen und dann **60 Grad** nach rechts drehen.

Beachten Sie, dass das Zeichnen der Wabe einige Zeit in Anspruch nehmen kann. Sie können die Geschwindigkeit, mit der die Schildkröte die Wabe zeichnet, ändern, indem Sie die Geschwindigkeit der Schildkröte auf eine Zahl zwischen `1` und `10` setzen, wobei `1` die langsamste und `10` die schnellste ist. Platzieren Sie diesen Code in der Nähe, wo wir die Farbe der Schildkröte ändern.

``` python
turtle.speed(8)
```

<iframe src="https://trinket.io/embed/python/d83811c24a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>