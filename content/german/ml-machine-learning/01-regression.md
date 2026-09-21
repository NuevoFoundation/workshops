---
title: "Was ist Regression?"
description: "Bringen Sie Computern bei, Ergebnisse vorherzusagen."
prereq: "Python"
icon: ""
draft: false
weight: 1
---

# Was ist Regression?
Regression ist eine Technik, um die Beziehung zwischen einer Funktion (unabhängigen Variablen) und einer Vorhersage (abhängigen Variablen) zu modellieren. Sie hilft uns zu verstehen, wie sich der Wert einer abhängigen Variablen basierend auf dem Wert der unabhängigen Variablen ändert. Richtig angewandt hilft sie uns, Werte vorherzusagen 😯!

<!-- TODO: Diagramm hinzufügen, um das untenstehende Bild zu ersetzen. -->
|![Regression](../resources/regression.png)|
|:--:|
|Regression|

Regression ist eine leistungsstarke Technik, mit der wir eine Linie oder eine Kurve finden können, die zu den uns vorliegenden Daten passt. Durch die Regression können wir `mathematische Modelle` erstellen oder wiederverwenden, die zeigen, wie die abhängigen und unabhängigen Variablen zusammenhängen. [Mathematische Modelle](https://www.youtube.com/watch?v=xHtsuOB-TPw) sind nützlich, weil sie uns helfen, ein System zu verstehen und Vorhersagen basierend auf den Variablen des Systems zu treffen. Manchmal passt das gewählte mathematische Modell möglicherweise nicht gut zu den Daten, sodass wir nach einem besseren Modell suchen müssen, das die Muster erfasst, die wir sehen.

## Beispiel 1: Wie wissen wir, ob es regnen wird?
Immer wenn Sie Ihr Telefon benutzen, eine Nachrichtensendung sehen oder einfach im Internet fragen: "Wie hoch ist die Regenwahrscheinlichkeit heute?", verwenden Meteorologen mathematische Modelle, um vorherzusagen, ob es regnen könnte. Sie fragen sich vielleicht: Welche `Variablen` werden bei diesen mathematischen Modellen berücksichtigt? Reicht der Geruch von Regen aus?

{{% expand "**Welche Variablen sollten Sie berücksichtigen, um zu wissen, ob es regnen wird?**"%}}

- Temperatur &rarr; Ist es heiß, kalt oder genau richtig?
- Höhe &rarr; Abhängig davon, wie hoch Sie sich im Vergleich zum Boden befinden, können Orte kühler oder wärmer werden.
- Standort &rarr; Wo Sie sich befinden, ist wichtig. (z. B. Wald, Strand, Gebirgszug, Wüste usw.)
- Luftfeuchtigkeit &rarr; Fühlen Sie, dass die Luft schwer ist? Gibt es genug Wasser in der Luft, damit es regnen kann?
- Jahreszeit &rarr; In welchem Monat befinden wir uns? Welche Jahreszeit haben wir gerade?
- Und viele, viele mehr!

Es gibt viele weitere Variablen, die berücksichtigt werden müssen, wenn wir glauben, dass es eine Regenwahrscheinlichkeit gibt. Am Ende ist die "**Regenwahrscheinlichkeit**" die abhängige Variable, während die anderen oben genannten Eigenschaften die unabhängigen Variablen sind. Die Regenwahrscheinlichkeit hängt also von den Werten der anderen Variablen ab.
{{% /expand %}}

### Übung 1
Angenommen, jemand möchte basierend auf der Fläche einer Form herausfinden, welche Art von Form er hat. 

1. Ist das überhaupt möglich? Kann jemand anhand der Fläche wissen, welche Form er hat?
{{% expand "**Klicken, um die Antwort anzuzeigen**" %}}  
***Nein***, wie Sie schnell erraten können, gibt es keine Beziehung zwischen der **Fläche** und der Art der Figur, die eine Form haben kann.

Beispielsweise hat ein Quadrat mit einer Seitenlänge von 3 eine Fläche von 9.

<h3>
\[
    3 \cdot 3 = 9
\]
</h3>

Aber das gilt auch für ein Dreieck mit einer Breite von 6 und einer Höhe von 3.
<h3>
\[
    (6 \cdot 3)/2 = 9
\]
</h3>

{{% /expand %}}
<br>

2. Wenn die Fläche keine gute Variable oder Eigenschaft ist, um die Art der Form zu verstehen, die wir haben können. Welche Beziehung könnten wir verwenden, um zu wissen, welche Form es ist?
{{% expand "**Klicken, um die Antwort anzuzeigen**" %}}  

***Die Anzahl der **Seiten**! Mit zunehmender Anzahl der Seiten kann man die Art der Form bestimmen.***

Wenn Sie bemerkt haben, haben wir in unserer Tabelle eine lineare Beziehung aufgebaut, die als X=Y dargestellt werden kann.

X &rarr; **die Anzahl der Seiten**  
Y &rarr; **Art der Form**

Da haben Sie es, Sie haben Ihr erstes maschinelles Lernmodell erstellt!
{{% /expand %}}
<br>

Ein Modell ist im Fall unseres vorherigen Beispiels einfach eine Funktion, die entwickelt wurde, um eine Beziehung zwischen unserer abhängigen Variablen und den unabhängigen Variablen herzustellen. Zum Beispiel können Funktionen wie Linien (y = ax + b), Parabeln (y = a(x -h)^2), kubische Kurven (y=ax^3+bx^2+cx+d) und viele andere als Modelle verwendet werden.

### Wie stellen Sie sicher, dass Ihr Modell zu den Daten passt?

Wenn wir mit einem bereits existierenden maschinellen Lernmodell Analysen durchführen, müssen wir sicherstellen, dass das ausgewählte Modell zweckmäßig ist und die Daten in gewisser Weise repräsentiert. Auf dem untenstehenden Bild sehen Sie, dass die Datenpunkte eine Parabel darstellen. Es ist sehr wahrscheinlich, dass das Modell, das wir verwenden müssen, ein parabolisches Modell ist, also etwas wie...

<h2>
\[
    y = a(x -h)^2
\]
</h2>

Wenn Sie ein parabolisches Modell verwenden, müssen Sie wissen, wo die Scheitelpunkte der Parabel landen, um vorherzusagen, wo ein neuer Punkt liegen wird. Sie könnten ein Modell ausführen, ohne Scheitelpunkte festzulegen, und wie das Bild "Under-Fitting" enden, oder es mit zu vielen Scheitelpunkten einrichten und wie das Bild "Over-Fitting" aussehen. Wir möchten es genau richtig einstellen, damit unser Modell die Daten "passt" und neue Datenpunkte mithilfe des Modells dargestellt werden können.
 
<!-- TODO: Diagramm hinzufügen, um das untenstehende Bild zu ersetzen. -->
|![Fitting Data Example](../resources/fitting-data-example.png)|
|:--:|
|Bild 1: Under-Fitting und Over-Fitting|

Sie müssen immer sicherstellen, dass das Modell, das Sie zur Darstellung Ihrer Daten wählen, zu Ihrer Arbeit passt. Andernfalls können zwei Probleme auftreten:
- **Under-Fitting**
    
    Dies tritt auf, wenn Sie keine Beziehung in den Daten finden können, die Sie erhalten haben. Dies ist oft der Fall, wenn nicht genügend Daten zur Verfügung stehen.

- **Over-Fitting**
    
    Wenn Sie versuchen, jeden möglichen Wert in Ihren Daten zu berücksichtigen, selbst solche, die nichts repräsentieren. Indem Sie dies tun, könnten Sie Werte aufnehmen, die **Ausreißer** sind und nicht die Realität der Dinge darstellen.