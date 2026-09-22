---
title: "Modellanpassung"
prereq: "Python"
icon: ""
draft: false
weight: 4
---

# Passt unser Modell?

Denken Sie daran, dass die lineare Gleichung, die wir erstellt haben, einen Zufallsfehlerwert (**ε**) enthält.

<h3>
\[
    GEHALT = 9449.96(ERFAHRUNG) + 25792.20 + ε
\]
</h3>

Da **ε** ein Fehlerwert ist, den wir nicht bestimmen können, müssen wir uns folgende Fragen stellen:

1. Wie gut repräsentiert unser Modell die Realität, oder wie gut `passt` unser Modell zu den Daten, die wir haben?
2. Wie können wir wissen, ob **Berufserfahrung** tatsächlich einen Einfluss auf das **Gehalt** hat?

Es gibt viele Möglichkeiten, dies herauszufinden, aber in der Welt des maschinellen Lernens und der Statistik gibt es einen Wert, den wir verwenden können. Dieser Wert wird als **R-Squared** oder **R<sup>2</sup>** bezeichnet.

[R-Squared](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/regression-and-correlation/coefficient-of-determination-r-squared.html#:~:text=6%20See%20Also-,Definition,line%20approximates%20the%20actual%20data.) - ist ein Maß, das Informationen über die Güte der Anpassung eines Modells liefert. Im Kontext der Regression ist es ein statistisches Maß dafür, wie gut die Regressionslinie die tatsächlichen Daten approximiert. Als Faustregel gilt: Wenn der Wert von **R<sup>2</sup>** nahe bei 1 liegt, bedeutet das, dass das mathematische Modell, das wir gewählt haben, eine gute Anpassung aufweist oder die tatsächlichen Werte in unseren Daten wirklich approximiert.

## Übung 1: R-Squared finden

Die Datei `Experience_vs_Salary-More_Data` enthält über 10.000+ Einträge, in denen Sie das Gehalt und die Jahre der Erfahrung von Mitarbeitern Ihres Unternehmens sehen können. Der Replit-Code unten nimmt die anfängliche Stichprobe von 30 Mitarbeitern und berechnet den Standardfehler sowie den R<sup>2</sup>-Wert.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/04-e1.py" target="_blank">Replit starten</a>

Wie Sie sehen können, beträgt der Wert von R<sup>2</sup> 0.973. Wenn uns nun jemand fragt, ob es einen Zusammenhang in unseren Daten gibt, können wir sagen: "Wir sind zu 97,3% sicher, dass die Berufserfahrung eines Mitarbeiters mit dem Gehalt, das er erhält, zusammenhängt."

Ich empfehle Ihnen, die Variable 'sample_size' auf einen größeren oder kleineren Wert zu ändern, um zu sehen, wie sich der R<sup>2</sup>-Wert verändert.

Jetzt gehen wir weiter und machen einige Vorhersagen!