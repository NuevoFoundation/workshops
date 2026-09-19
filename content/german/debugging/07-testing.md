---
title: "Schritt 3 - Testen"
difficulties: ["mittel"]
weight: 8
draft: false
---

Du hast die Lösung(en) für deinen Bug implementiert. Natürlich ist das Erste, was du tust, deinen Code neu zu kompilieren und auszuführen. Wenn alles richtig aussieht, hast du den Bug behoben! Für kleinere Projekte funktioniert das ziemlich gut. Größere Projekte könnten schwieriger sein, da es oft viel länger dauert, sie zu kompilieren. Typischerweise verfügen solche Projekte über automatisierte Tests, die nach Updates im Code automatisch ausgeführt werden, sodass sich Programmierer nicht allzu viele Gedanken über diesen Schritt machen müssen (außer den Programmierern, die die Tests erstellen!).

Beim Testen weißt du bereits oder hast eine gute Vorstellung davon, wo der Bug auftreten wird. Daher möchtest du in deinen Tests gezielt diesen Code ausführen, um sicherzustellen, dass er korrekt ist. Testen ist so wichtig, dass eine ganze Methodologie der Softwareentwicklung darauf basiert (Testbasierte Entwicklung)!

Manchmal kann das Beheben eines Bugs einen anderen Bug verursachen, was als _Regression_ bezeichnet wird. Es ist völlig normal, dass es manchmal mehrere Iterationen zur Fehlerbehebung braucht!

## Unit Tests
Beginne deine Tests immer klein. Diese Idee stammt aus wissenschaftlichen Experimenten: Wenn du die Anzahl der Faktoren (unabhängigen Variablen), die im Spiel sind, reduzierst, kannst du die Ursache leichter eingrenzen. Diese Tests nennen sich Unit Tests. Anstatt zu testen, ob das gesamte Programm oder ein Teil davon funktioniert, betrachtet ein Unit Test einen spezifischen Teil. Ein Unit Test könnte eine Funktion aufrufen, die keine anderen Funktionen aufruft, um zu überprüfen, ob sie den korrekten/erwarteten Wert ausgibt.

Zum Beispiel: Angenommen, du hast eine Taschenrechner-App, die Zahlen addieren, subtrahieren, multiplizieren und dividieren kann. Du könntest einen Unit Test schreiben, um nur die Additionsfunktion zu testen, indem du ihr 2 Zahlen gibst und prüfst, ob sie den richtigen Wert zurückgibt.  

## Integration Tests
Erst wenn deine Unit Tests erfolgreich waren, solltest du mit Integrationstests beginnen. Integrationstests untersuchen, wie mehrere Komponenten deines Programms zusammenarbeiten, um zu überprüfen, ob sie den korrekten/erwarteten Wert ausgeben. Ein Integrationstest könnte eine Funktion aufrufen, die viele andere Funktionen aufruft oder viele unterschiedliche Teile des Programms beeinflusst.

Nur weil deine Unit Tests funktionieren, heißt das nicht, dass deine Integrationstests erfolgreich sind. Du könntest beispielsweise einen Integrationstest für deine Taschenrechner-App schreiben, indem du eine Reihe von mathematischen Operationen testest, wie zum Beispiel Addition gefolgt von Multiplikation, und dann das Ergebnis überprüfst.