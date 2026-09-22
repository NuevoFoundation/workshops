```markdown
---
title: "Vorhersagen machen"
prereq: "Python"
icon: ""
draft: false
weight: 5
---

# Das Modell trainieren

Damit unser Modell Werte vorhersagen kann, müssen wir es trainieren. Aber wie machen wir das? Nun, wir haben es schon getan 😉!

Ein Modell zu trainieren bedeutet, zu überprüfen, ob es eine gute Beziehung zwischen den Daten gibt und ob unser Modell zu den Daten passt.

Das haben wir erreicht, indem wir sichergestellt haben, dass R<sup>2</sup> nahe bei 1 liegt. Was wir jetzt tun müssen, ist den Datensatz mit über 10.000 Einträgen zu verwenden, um einen Trainings- und Testdatensatz zu erstellen. Der Trainingsdatensatz wird eine Zufallsstichprobe sein, anstatt der ursprünglichen 30 Datenpunkte, die wir hatten. Laut der Universität von Texas in El Paso ist das Ziehen einer Stichprobe von 30 % die ideale Methode, um ein genaues Modell zu erstellen. Wenn du mehr darüber erfahren möchtest, klicke hier: ([Warum 70/30- oder 80/20-Verhältnis zwischen Trainings- und Testdatensätzen](https://scholarworks.utep.edu/cs_techrep/1209/))

Mit der zunehmenden Anzahl an Mitarbeitern wird auch der Datensatz wachsen und der Wert von R<sup>2</sup> sich verändern. Wir müssen dies jedes Mal tun, wenn der Datensatz mit über 10.000 Mitarbeitern wächst, um sicherzustellen, dass unser Modell dem aktuellen Stand entspricht.

# Vorhersagen machen

Im unten stehenden Replit kannst du sehen, wie der Code einen "Trainingsdatensatz" und einen "Testdatensatz" erstellt, indem die Daten aus der Datei mit über 10.000 Einträgen aufgeteilt und Vorhersagen für beide Datensätze generiert werden.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e1.py" target="_blank">Replit starten</a>

Wie du sehen kannst, ist die erzeugte Vorhersagelinie in beiden Diagrammen für die Trainings- und Testdatensätze sehr ähnlich. Du kannst auch sehen, dass R<sup>2</sup> für beide Datensätze fast identisch oder manchmal vollkommen identisch ist.

Du kannst jetzt den unten stehenden Code verwenden und die Variable `experience` nach Belieben ändern. Das Diagramm wird das vorhergesagte Gehalt basierend auf der eingegebenen Erfahrung anzeigen.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e2.py" target="_blank">Replit starten</a>
```