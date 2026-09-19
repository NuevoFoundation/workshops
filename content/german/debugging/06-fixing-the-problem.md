---
title: "Schritt 2 - Das Problem beheben"
difficulties: ["mittel"]
weight: 7
draft: false
---

Sobald Sie herausgefunden haben, was den Fehler verursacht, können Sie darüber nachdenken, wie Sie den Fehler beheben können. Compilerfehler sind relativ einfach - meistens gibt der Compiler Ihnen viele Hinweise, wie Sie ihn beheben können. Wenn Sie es allein durch die Compiler-Ausgabe nicht herausfinden können, können Sie sich an das Internet wenden. Die Wahrscheinlichkeit ist hoch, dass jemand vor Jahren dasselbe Problem hatte und die Frage bereits in einem Forum wie [StackOverflow](https://stackoverflow.com/) gestellt hat.

Wenn es darum geht, Laufzeitfehler zu beheben, hängt es von der Anwendung ab, die Sie debuggen. Sie müssen überlegen, was Ihr Programm tut, was es tun soll und wie Sie den Code schreiben müssen, damit es das tut, was Sie beabsichtigen.

Zum Beispiel kann man einen Speicherfehler im Allgemeinen dadurch beheben, dass man sicherstellt, dass das Programm nur auf Speicher zugreift, zu dem es berechtigt ist. Der offensichtliche Ansatz ist, zu überprüfen, wo Speicherzugriffe stattfinden. Das Dereferenzieren von Zeigern und/oder die Verwendung von Array-Indizes sind in der Regel die Bereiche, in denen diese Probleme auftreten. Wie im letzten Abschnitt gezeigt, ist ein Tool wie `valgrind` ebenfalls wertvoll, um Speicherlecks und mögliche Fehlerstellen im Programm zu identifizieren.

Um ein Programm zu reparieren, das sich seltsam verhält, ist der erste Ansatz, zu prüfen, ob Ihr Algorithmus oder Ihre Strategie angemessen erscheint. Der nächste Schritt ist sicherzustellen, dass Ihr Programm den Algorithmus tatsächlich korrekt umsetzt. Oft ist ein komplexer Algorithmus schwierig korrekt umzusetzen. Es gibt viele Implementierungen von sicheren Algorithmen in der Cybersicherheit, aber viele von ihnen enthalten fehlerhafte Umsetzungen, die sie unsicher machen!

Das Wichtigste ist, die richtigen Fragen zu finden, die Sie sich beim Debuggen stellen müssen. *Rubber Duck Coding* beinhaltet, dass der Programmierer einem Gummienten laut erklärt, was er tut. Wenn man sich selbst dabei reden hört, kann man dabei Fehlerquellen aufdecken.

Leider ist das Beheben eines Fehlers oft extrem spezifisch für das jeweilige Programm. Es ist schwierig, mehr als allgemeine Vorschläge anzubieten.

{{% notice note %}}
Es gibt viele Tools, die Ihnen dabei helfen können, ein Problem zu identifizieren – _Linters_ sind für die meisten Programmiersprachen verfügbar und können Syntaxfehler wie Formatierungsprobleme, fehlende Klammern und falsch geschriebene Schlüsselwörter erkennen.

Mit dem Fortschritt der Künstlichen Intelligenz (KI) können Tools wie Github Copilot ebenfalls Vorschläge zur Behebung Ihrer Fehler geben. Denken Sie jedoch daran, dass KI-Antworten auch falsch sein können, daher sollten Sie stets Ihren eigenen Urteilsvermögen einsetzen!

{{% /notice %}}