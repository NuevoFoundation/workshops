---
title: "Einfache Lineare Regression"
description: "Bringen Sie Computern das Vorhersagen von Ergebnissen bei."
prereq: "Python"
icon: ""
draft: false
weight: 2
---

# Was ist einfache lineare Regression?

Die einfache lineare Regression zielt darauf ab, eine Korrelation zwischen zwei Variablen zu finden und mathematische Gleichungen abzuleiten, die die Beziehung zwischen einer abhängigen und einer unabhängigen Variable erklären. Mit der einfachen linearen Regression möchten wir im Allgemeinen die folgenden Schlussfolgerungen ziehen:

1. Gibt es eine **Beziehung** zwischen den Variablen, die wir haben?

    Sie können die Beziehung zwischen Einkommen und Ausgaben, Erfahrung und Gehalt oder Feuchtigkeit und Temperatur bestimmen. Aber es gibt zum Beispiel KEINE Beziehung zwischen der Größe eines Schülers und dessen Prüfungsergebnissen.

2. Können wir damit **Werte vorhersagen**?

    Mit Regression können wir das Modell trainieren und herausfinden, ob wir Werte mit Sicherheit vorhersagen können. Können wir das Wissen über die Beziehung nutzen, um neue Werte vorherzusagen?
    
    Beispiel: Wie wird das Wetter morgen? Wie viel wird meine Bäckerei in diesem Jahr im Vergleich zum letzten Jahr verkaufen? Wie hoch wird mein Gehalt sein, wenn ich fünf Jahre Berufserfahrung habe?

# Rollen der Variablen

In der einfachen linearen Regression können Variablen eine von zwei Rollen übernehmen.

1. **Abhängige Variable**

    Die Variable, deren Wert wir vorhersagen oder prognostizieren möchten. Sie wird als **abhängig** bezeichnet, da ihr Wert von etwas anderem abhängt. Wir nennen diese Variable **y**.

2. **Unabhängige Variablen**

    Dies ist die Variable, die wir kontrollieren oder ändern können, um die abhängige Variable zu beeinflussen. Wir nennen diese Variable **x**.

    Beispiel: Wenn ein Apfel 1,00 $ kostet und Sie 10 davon kaufen, beträgt der Gesamtpreis 10,00 $. Die abhängige Variable hier ist der `Gesamtpreis`, während die unabhängige Variable die Anzahl der Äpfel ist, die Sie kaufen möchten.

# Das mathematische Modell der einfachen linearen Gleichung

Wenn wir die einfache lineare Regression verwenden, nennen wir sie **linear**, weil das mathematische Modell eine gerade Linie in einer 2D-Ebene darstellt. Denke einen Moment lang darüber nach.

Was ist die mathematische Gleichung für eine gerade Linie?

{{% expand "**Zum Anzeigen der Antwort klicken**" %}}

Diese Gleichung kommt dir vielleicht sehr bekannt vor. Wenn ja, handelt es sich um die allgemeine Gleichung für eine gerade Linie.

<h1>
\[
    y = ax + b
\]
</h1>

- **x** ist die unabhängige Variable.
- **y** ist die abhängige Variable.
- **a** ist die Steigung der Linie.
- **b** ist der Schnittpunkt oder der Wert von **y**, wenn **x = 0** ist.

Gemäß dieser Gleichung werden wir erläutern, wie mathematische Modelle der einfachen linearen Regression berechnen und neue Werte vorhersagen.

{{% /expand %}}

# Praktische Beispiele aus der realen Welt

In der realen Welt verhält sich Datenmaterial manchmal nicht linear und weicht von unseren Erwartungen ab. Auf den ersten Blick könnte es scheinen, dass Daten keine Beziehung zueinander haben. Im Fall der einfachen linearen Regression sucht man nach Daten, die zumindest ein gewisses lineares Muster aufweisen.

Angenommen, du arbeitest als `Datenanalyst*in` in der Personalabteilung eines Unternehmens mit über 10.000 Mitarbeitenden. Dein Chef möchte wissen, ob die Berufserfahrung eines Mitarbeitenden etwas mit seinem Gehalt zu tun hat. Natürlich kannst du, da du ein*e `Datenanalytiker*in` bist, die Mitarbeitendendatenbank checken und schnell Folgendes überprüfen:

1. Wie hoch ist ihr aktuelles Gehalt? 
2. Wie viele Jahre Berufserfahrung hat die Person?

Angenommen, du kannst Daten von 30 zufällig ausgewählten Mitarbeitenden extrahieren, die folgendermaßen aussehen:

|Mitarbeiter-ID|Jahre an Erfahrung|Gehalt|
|:--:|:--:|:--:|
|1|1,1|39343|
|2|1,3|46205|
|3|1,5|37731|
|4|2,0|43525|
|5|2,2|39891|
|6|2,9|56642|
|7|3,0|60150|
|8|3,2|54445|
|...|...|...|
|26|9,0|105582|
|27|9,5|116969|
|28|9,6|112635|
|29|10,3|122391|
|30|10,5|121872|

Nachdem du die Tabelle überprüft hast, plottest du alle diese Werte in ein 2D-Streudiagramm und erhältst ein Bild wie dieses:

|![Erfahrung vs. Gehalt](../resources/Years_vs_Salary.png)|
|:--:|
|Streudiagramm: Jahre der Erfahrung vs. Gehalt.|

Wie du sehen kannst, ähneln die Punkte _einigermaßen_ einer Linie. Zeichnen wir eine imaginäre Linie und prüfen, ob wir durch alle Punkte hindurchgehen können.

|![Erfahrung vs. Gehalt mit Trendlinie](../resources/Years_vs_Salary_with_trendline.png)|
|:--:|
|Streudiagramm: Jahre der Erfahrung vs. Gehalt mit Linie.|

Wie du siehst, verläuft die Linie nicht durch **ALLE** Punkte, sie kommt jedoch ziemlich nah heran. Was bedeutet das? Warum sind in manchen Fällen die Punkte nah oder weit entfernt von unserer imaginären Linie?

Bisher wissen wir:

1. Die Daten folgen einem **linearen** Muster.
2. Die Daten haben zwei wichtige Variablen, **GEHALT** und **BERUFSERFAHRUNG**. Das bedeutet, wir können beginnen, sie wie eine lineare Gleichung zu **modellieren**.

**Frage:** Wir wissen, dass **GEHALT** und **BERUFSERFAHRUNG** unsere Variablen sind, aber welche ist die abhängige und welche die unabhängige Variable?  
{{% expand "**Zum Anzeigen der Antwort klicken**" %}}

- **BERUFSERFAHRUNG (XP)** ist unsere unabhängige Variable.
- **GEHALT** ist unsere abhängige Variable.

Wenn wir diese in unsere lineare Gleichung einsetzen, erhältst du Folgendes:

<h1>
\[
    GEHALT = a(XP) + b
\]
</h1>

Mit einer Gleichung wie dieser sagen wir: "Die Berufserfahrung hat direkten Einfluss auf das Gehalt eines Mitarbeitenden".

{{% /expand %}}

# Die Möglichkeit von Fehlern

Wie bereits erwähnt, sind Daten möglicherweise nicht immer konsistent und können sich unterschiedlich verhalten. Das bedeutet, dass unsere