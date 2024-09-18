---
title: "Aktivität 7 - Zeichnen einer Acht"
date: 2019-07-25T13:24:17-07:00
weight: 10
draft: false
---

<img src="../media/turtle_circles.png" alt="Zeichnen einer Acht" width="25%"/>

Super! Jetzt lassen Sie uns eine Acht zeichnen als ersten Schritt, um eine Mandalablume zu erstellen! Eine Acht besteht aus zwei Kreisen, die einander gegenüberliegen.

Ein Kreis ist eine runde Form, die wie ein Ring oder Reifen aussieht. Der Radius ist die Entfernung von der Mitte des Kreises zu seinem Rand. Er hilft zu verstehen, wie groß der Kreis ist, da er zeigt, wie weit es vom Zentrum bis zum Rand ist.

Dazu können wir die Methode `turtle.circle(x)` verwenden, die eine ganze Zahl `x` als Radius des Kreises nimmt. (Sie erinnern sich vielleicht, dass `2 * Radius` die Breite des Kreises ist.) Den Radius als **Argument** zu haben, bedeutet, dass wir entscheiden können, wie groß oder klein der Kreis sein soll.

``` python
  import turtle
  turtle.circle(20)
```

Im obigen Beispiel ist der Kreis 40 Pixel breit und wird gegen den Uhrzeigersinn gezeichnet. Wenn das Argument von `turtle.circle()` negativ ist, wird der Kreis im Uhrzeigersinn gezeichnet und ist entgegengesetzt zur Originalversion.

Verwenden Sie diese Informationen, um eine neue Funktion namens `figure_8()` zu erstellen, die eine Acht zeichnet.

<iframe src="https://trinket.io/embed/python/e87cb9f3b9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>