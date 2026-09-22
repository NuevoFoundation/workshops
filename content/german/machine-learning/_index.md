---
title: "Python: Maschinelles Lernen"
description: "Grundlagen des Maschinellen Lernens"
prereq: "Keine"
draft: false
language: "python"
topics: ["ai"]
difficulties: ["anfänger"]
---

## Lernen wir etwas über maschinelles Lernen, um die Gesamtbewertungen von Spielern im FIFA-Videospiel zu evaluieren

Maschinelles Lernen ist die Wissenschaft, die *Algorithmen* und *Modelle* untersucht, die es Computern ermöglichen, Dinge zu erkennen, Entscheidungen zu treffen und sogar Ergebnisse vorherzusagen, ohne explizite Anweisungen zu erhalten. Ein Beispiel dafür ist das Gespräch mit Ihrem Telefonassistenten wie Siri oder Cortana. Maschinelles Lernen hilft dabei, Ihre Stimme in Text zu übersetzen und weiterzuverstehen, was Sie angefragt haben. Ist das nicht erstaunlich?

Heute zeigen wir Ihnen, wie Sie einem Computer Schritt für Schritt beibringen können, die Gesamtbewertungen für Fußballspieler basierend auf ihren Attributen zu evaluieren.  

Los geht's!

## Ein bisschen Hintergrundwissen

Nehmen wir an, es gibt eine Formel, um die "Gesamtbewertungen" von Fußballspielern durch EA Sports (den Entwickler von FIFA 2019) zu berechnen. Mit dieser Formel könnten wir leicht die Gesamtbewertungen für jeden Spieler berechnen, auch wenn er/sie nicht im Spiel ist. Das Problem ist jedoch, dass wir nicht genau wissen, wie diese Formel aussieht. <br>
Wir kennen die *Eingabe*, die aus den Spielerattributen besteht, und die *Ausgabe*, die die Gesamtbewertungen darstellt. Dann können wir einen Ansatz namens "Regression" verwenden, um die Formel basierend auf der Eingabe/Ausgabe zu "schätzen".

Heute verwenden wir ein einfaches Modell namens Lineare Regression. 
Angenommen, die Formel, die die Gesamtbewertungen eines Fußballspielers berechnet, lautet \( y = f(x)\)
\[
    f(x) = ax + b
\]
Die lineare Regression zielt darauf ab, \(a\) und \(b\) zu bestimmen. Die Formel (f(x)) wird in der Welt des maschinellen Lernens als „Modell“ bezeichnet, und der Prozess des Lösens/Schätzens des Modells wird als „Training“ des Modells bezeichnet. Sobald wir das Modell trainiert haben, können wir damit die Zielvariable \(y\) für neue Daten vorhersagen.

Zurück zu unserer Geschichte: Wenn wir nur eine Variable \(x\) haben, sollte es einfach sein, \(f(x)\) zu schätzen. Jeder sollte in der Lage sein, das mit Stift und Papier zu lösen. Wenn jedoch \(x\) eine lange Liste von Attributen von Fußballspielern wie Schnelligkeit, Kraft, Pässen, Tackling ist, wird es komplizierter. Die Formel sollte dann in folgende Form umgeschrieben werden:
\[
    f(x_1, x_2, ..., x_n) = a_1 * x_1 + a_2 * x_2 + ... + a_n * x_n + b
\]
Dann müssen wir das Modell mit vielen hochwertigen Daten füttern, um das Modell näher an die "echte" Formel zu bringen. Los geht's!


## Inhaltsverzeichnis

<details close>
<summary>Inhaltsverzeichnis</summary>
{{% children /%}}
</details>