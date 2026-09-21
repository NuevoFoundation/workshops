---
title: "Konfidenzintervall"
description: "Lernen Sie, wie Computer Ergebnisse vorhersagen können."
prereq: "Python"
icon: ""
draft: false
weight: 3
---

Im letzten Abschnitt konnten wir den Koeffizienten und den Schnittpunkt unserer linearen Gleichung mit Hilfe eines Beispieldatensatzes von 30 zufällig ausgewählten Mitarbeitern ermitteln.

<h3>
\[
    Schnittpunkt = 25792.20
\]
\[
    Koeffizient = 9449.96
\]
\[
    GEHALT = 9449.96(XP) + 25792.20 + ε
\]
</h3>

Aber das brachte eine weitere Frage auf: Ist das **Gehalt** WIRKLICH mit der **Erfahrung in Jahren** eines Mitarbeiters verbunden? Ist die Beziehung zwischen diesen beiden Variablen stark genug, um zu behaupten, dass sie zusammenhängen? Sind 30 zufällig ausgewählte Mitarbeiter wirklich ausreichend, um das zu bestimmen? Wie können wir sicher sein, dass dies die korrekten Werte sind?

Sie müssen sich daran erinnern, dass Sie die Werte gefunden haben, indem Sie mit einer kleinen Stichprobe gearbeitet haben, die aus einer viel größeren Mitarbeiterzahl gezogen wurde. Da wir nur eine Stichprobe zum Testen haben, sind die Werte für den **Koeffizienten** und den **Schnittpunkt** unsicherer.

Was können wir tun, um sicherzustellen, dass die Werte gültig sind?

{{% expand "**Zum Anzeigen der Antwort klicken**" %}}

Wir müssen das lineare Modell mit mehr zufälligen Stichproben ausführen.

{{% /expand %}}

# Übung 1: Überprüfung mit weiteren Stichproben

Stellen Sie sich vor, Sie konnten über 10.000 Datensätze von Mitarbeitern in Ihrem Unternehmen finden 😯! Das ist fantastisch, denn in der Welt des maschinellen Lernens gilt: Je mehr Daten Sie haben, desto bessere Ergebnisse können Sie erzielen. Jetzt nehmen wir 30 zufällige Datensätze aus diesen über 10.000 Datensätzen und prüfen, ob sich die Werte für den Schnittpunkt und den Koeffizienten von den ursprünglichen Stichproben unterscheiden. Führen Sie im Replit-Fenster unten den Code beliebig oft aus, und beachten Sie, wie die Werte für den **Schnittpunkt** und den **Koeffizienten** dem, was wir zuvor berechnet haben, recht ähnlich sind.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e1.py" target="_blank">Replit starten</a>

Warum passiert das? Warum sind die Werte für den **Schnittpunkt** und den **Koeffizienten** jedes Mal unterschiedlich? Warum ist die ursprüngliche Stichprobenlinie (d.h. die grüne Linie) der blauen Linie (d.h. der neuen Stichprobenlinie) sehr nahe?

{{% expand "**Zum Anzeigen der Antwort klicken**" %}} 
Das liegt daran, dass jedes Mal, wenn Sie das Programm ausführen, eine zufällige Stichprobe von 30 Datensätzen ausgewählt wird. Bei jeder zufälligen Stichprobe werden beide Werte unterschiedlich sein. Aber das Gute daran ist, dass alle diese Werte aus demselben Datensatz stammen.

{{% /expand %}}

Fragen Sie sich nun, wie **zuversichtlich** Sie sind, dass die Werte für **Schnittpunkt** und **Koeffizient** tatsächlich die vorhandenen Daten darstellen?

# Konfidenzintervalle

Das vorherige Beispiel lehrt uns, dass, wenn Sie mit zufälligen Stichproben aus einem größeren Datensatz arbeiten, die Werte für **Schnittpunkt** und **Koeffizient** in einem Bereich fallen. Wir wissen, dass der tatsächliche Wert zwischen zwei Werten liegen muss, aber wir wissen nicht, welche das sind! Dies wird als [Konfidenzintervall](https://www.geeksforgeeks.org/confidence-intervals-for-machine-learning/) bezeichnet.

Wenn Sie den Code aus **Übung 1** mehrmals ausführen, können Sie feststellen, dass der **Koeffizient** sich jedes Mal ändert, aber beachten Sie, wie er selten unter 9000 fällt oder über 10000 hinausgeht. Was ist der Unterschied zwischen all den möglichen **Koeffizienten**, die wir durch mehrfaches Ausführen des Codes finden können? Welcher Wert ist das? Dies wird als **Standardfehler** bezeichnet.

**[Standardfehler](https://www.statology.org/standard-error-regression/)** - die durchschnittliche Entfernung, die die Werte von der Regressionslinie abweichen.

# Beispiel 2: Den Standardfehler finden

Wir können die [StatsModels](https://www.statsmodels.org/stable/index.html)-Bibliothek verwenden, um alle möglichen Werte aus unserer linearen Regression zu erhalten. Führen Sie den Replit unten aus, und Sie sollten eine Ausgabe wie folgt sehen:

|![Statmodels Ergebnis](../resources/finding_stderror.png)|
|:--:|
|Zusammenfassung der Statsmodel-Ausführung|

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e2.py" target="_blank">Replit starten</a>

Schauen wir uns innerhalb der Tabelle den Standardfehler an, der als Wert **stderr** gekennzeichnet ist. In diesem Fall beträgt er **409.40**. Das bedeutet, dass für jede zufällige Stichprobe der Wert des **Koeffizienten** oder der **Steigung** unserer Linie um 409.40 variieren wird, oder mit anderen Worten:

"Das Gehalt eines Mitarbeiters kann um $409.40 variieren."

# Beispiel 3: Die Normalverteilung

Nehmen wir einen Schritt zurück und fragen uns: Von den Koeffizienten oder Steigungen, die wir in "Beispiel 2" sehen können, wie wahrscheinlich ist es, dass sie sich wiederholen, wenn das Programm für andere Stichproben ausgeführt wird?

Maschinelles Lernen verwendet viele Statistiken, um die Werte zu bestimmen, die wir erhalten haben. In der Welt der Statistik gibt es ein Diagramm, das verwendet wird, um die `Wahrscheinlichkeit` eines Werts in den Daten zu messen. Dies wird als `Normalverteilung` oder `Glockenkurve` bezeichnet und sieht folgendermaßen aus:

|![Normalverteilung](../resources/normal_distribution.png)|
|:--:|
|Abbildung #: Normalverteilung oder Glockenkurve|

Nehmen wir folgendes Beispiel: Wie wahrscheinlich ist es, eine sehr kleine Person zu sehen? Wie wahrscheinlich ist es, eine sehr große Person zu sehen?

Wenn wir diese Beziehung mit einer Glockenkurve herstellen, erhalten wir so etwas:

|![Normalverteilung](../resources/normal_distribution_height.png)|
|:--:|
|Abbildung #: Normalverteilung oder Glockenkurve mit der Körpergröße von Personen.|

Wie Sie sehen können, ist es sehr