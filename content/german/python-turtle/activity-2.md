---
title: "Aktivität 2 - Code mit Schleifen vereinfachen"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kGhMGdqqV-w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Super! Du hast ein Quadrat gezeichnet. Aber bemerkst du, dass wir dieselben Zeilen immer wieder schreiben? Wir mussten die Anweisungen zum Zeichnen einer Linie und zum Linksabbiegen 4 Mal wiederholen. Wäre es nicht toll, wenn wir die Anweisungen einmal geben und das Programm bitten könnten, sie 4 Mal zu wiederholen? Keine Sorge, das können wir!

Dafür müssen wir Schleifen verwenden. Schleifen führen einen Satz von Anweisungen mehrmals aus. Lassen Sie uns Schleifen verwenden, um ein Dreieck zu erstellen. Ein Dreieck ist eine Form mit drei Seiten und drei Winkeln. Lass uns ein Dreieck bauen, bei dem die Seiten und die Winkel gleich sind. Wenn du 360 Grad durch die Anzahl der notwendigen Drehungen teilst (was bei einem Dreieck 3 sind), erhältst du den Winkel, den du drehen musst.

Also, 360 Grad ÷ 3 Drehungen = 120 Grad pro Drehung.

Das bedeutet, dass du jedes Mal, wenn du eine Seite des Dreiecks gezeichnet hast, um 120 Grad drehen musst, um bereit zu sein, die nächste Seite zu zeichnen. Wenn du dies drei Mal machst, wirst du dein Dreieck vervollständigen.

Um dies in Aktion zu sehen, hier ist ein Beispielcode, der ein Dreieck zeichnet:

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

Lass uns verstehen, was dieser Code macht. `for i in range(3):` Diese Anweisung teilt dem Programm mit, die Anweisungen in einer Schleife auszuführen. `range(3)` legt fest, wie oft die Schleife läuft (in diesem Fall 3 Mal). Der Buchstabe `i` wird als **Variable** bezeichnet. Er wird verwendet, um nachzuverfolgen, wie oft wir den Inhalt der Schleife ausgeführt haben.

{{% notice warning %}}

## Schwierige Python-Syntax - Teil 1

**Syntax** ist, wie wir Sprachen schreiben, damit sie verständlich sind. Im Englischen haben wir Rechtschreib- und Grammatikregeln, um uns gegenseitig zu verstehen. Ebenso hat die Programmiersprache Python Syntaxregeln, damit der Computer unseren Code verstehen kann.

Zuerst, beachte, dass wir am Ende der Zeile mit `for` einen Doppelpunkt (`:`) hinzugefügt haben; dies bedeutet, dass die nächste Zeile Teil der `for`-Schleife sein wird. Der Computer wird sich beschweren, wenn du den `:` vergisst!

Außerdem haben wir einen Tabulator vor einigen Zeilen des Beispielcodes hinzugefügt. Der Tabulator sagt dem Computer, dass diese Anweisungen als Teil der `for`-Schleife betrachtet werden. 

Um zu sehen, welchen Unterschied dies macht, schau dir den untenstehenden Code an. Weil wir den Tabulator vor `turtle.left(120)` entfernt haben, wird der Code nicht mehr wie erwartet funktionieren. Jetzt wiederholen wir nur `turtle.forward(50)` drei Mal und erhalten eine gerade Linie!

``` python
for i in range(3):
  turtle.forward(50)
turtle.left(120)
```

{{% /notice %}}

Nimm nun den Beispielcode, den wir bereitgestellt haben, und ändere ihn leicht, sodass er anstatt eines Dreiecks ein Quadrat zeichnet. Du kannst als Hinweis darauf zurückblicken, was du in Aktivität 1 gemacht hast.

<iframe src="https://trinket.io/embed/python/892913b49a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>