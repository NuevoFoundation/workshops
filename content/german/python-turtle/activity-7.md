---
title: "Aktivität 7 - Zeichnen einer Figur 8"
date: 2019-07-25T13:24:17-07:00
weight: 10
draft: false
---

<img src="../media/turtle_circles.png" alt="Zeichnen einer Figur 8" width="25%"/>

Großartig! Jetzt machen wir eine Figur 8 als ersten Schritt zur Erstellung einer Mandala-Blume! Eine Figur 8 besteht einfach aus zwei gegenüberliegenden Kreisen.

Ein Kreis ist eine runde Form, die wie ein Ring oder ein Reifen aussieht. Der Radius ist der Abstand von der Mitte des Kreises zu seinem Rand. Er hilft dir zu verstehen, wie groß der Kreis ist, da er zeigt, wie weit es vom Zentrum zum Rand ist.

Dazu können wir die Methode `turtle.circle(x)` verwenden, wobei `x` ein ganzzahliger Wert ist, der als Radius des Kreises dient. (Du erinnerst dich vielleicht, dass `2 * Radius` die Breite des Kreises angibt.) Der Radius als **Argument** bedeutet, dass wir entscheiden können, wie groß oder klein der Kreis sein soll.

``` python
  import turtle
  turtle.circle(20)
```

Im obigen Beispiel ist der Kreis 40 Pixel breit und wird im Gegenuhrzeigersinn gezeichnet. Wenn das Argument von `turtle.circle()` negativ ist, wird der Kreis im Uhrzeigersinn und somit entgegengesetzt zur ursprünglichen Version gezeichnet.

Nutze diese Informationen, um eine neue Funktion namens `figure_8()` zu erstellen, die eine Figur 8 zeichnet.

<iframe src="https://trinket.io/embed/python/e87cb9f3b9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>