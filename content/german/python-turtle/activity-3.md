---
title: "Aktivität 3 - Zeichnen eines Hexagons"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

![Schildkröte, Hexagon-Animation](https://media.giphy.com/media/TDLqC61A5uOAO8WwnJ/giphy.gif)

Großartige Arbeit! Du hast gerade deine erste Form in Python mit Turtle gezeichnet! Nun lass uns den bereits geschriebenen Code, der ein Quadrat zeichnet, ein wenig ändern, um stattdessen ein Hexagon zu zeichnen. Schließlich ist Alex eine Biene, und er muss Hexagone zeichnen, um seine erste Wabe zu bauen.

Ein Hexagon ist eine Form mit sechs Seiten und sechs Winkeln. Hexagone sind faszinierende Formen, die wir oft in der Natur sehen! Zum Beispiel nutzen Bienen Hexagone, um ihre Waben zu bauen, weil diese Form sehr effizient ist; sie verwendet die geringste Menge an Material, um das meiste Honig zu halten. 

Um dir beim Zeichnen eines Hexagons zu helfen, überlege dir, wie viele Seiten ein Hexagon hat. Lass uns nun herausfinden, um wie viele Grad sich die Schildkröte drehen sollte.

{{% expand "**Tipp:**" %}} 
Erinnere dich: Wenn du 360 Grad durch die Anzahl der Drehungen teilst, die du für eine Form machen musst, erhältst du den Winkel, den du drehen musst.
{{% /expand %}}
<br/>

{{% expand "**Antwort anzeigen:**" %}} 
Die Schildkröte muss sich 6 Mal drehen, um das Hexagon zu zeichnen. Also, 360 Grad ÷ 6 Drehungen = 60 Grad pro Drehung.
{{% /expand %}}
<br/>

Als hilfreiche Erinnerung, hier ist der Code, der verwendet wurde, um ein Dreieck zu erstellen:

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

<iframe src="https://trinket.io/embed/python/e82295e92f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>