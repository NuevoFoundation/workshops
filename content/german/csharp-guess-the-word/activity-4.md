---
title: "Aktivität 4 - Alles zusammenführen"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 13
---

## Aktivität 4

Diese Aktivität besteht aus vier Teilen. Dies ist eine großartige Gelegenheit, Ihr Wissen über Kommentare, Zahlen, Variablen und das Lesen von der Konsole anzuwenden, um die 4 Aktivitäten abzuschließen. Einige Hintergrundinformationen zu jeder Aktivität sind unten angegeben, und Hinweise sind im Code bereitgestellt. Nach jedem Teil drücken Sie **run** und stellen Sie sicher, dass im Konsolenfenster keine Fehler vorliegen.

### Aktivität 4.1

Zuerst fügen wir unserem Spiel mehr Code hinzu. Finden Sie die beiden Codezeilen, die mit `TODO (ACTIVITY 4.1)` beginnen (eine befindet sich ungefähr in Zeile 60, die andere in Zeile 130). Löschen Sie beide Codezeilen vollständig. Dies aktiviert das Hauptverhalten des Spiels, wie das Überprüfen, ob der vom Spieler geratene Buchstabe im zu erratenden Wort vorkommt.

Leider scheint das Spiel nach dem Drücken von **run** nicht auf Benutzereingaben zu warten und rät stattdessen ständig `'C'`! Das ist nicht gut, also beheben wir dies im nächsten Teil.

### Aktivität 4.2

Wenn der Spieler einen Buchstaben rät, müssen wir den geratenen Buchstaben erfassen und in einer Variable speichern. Die Variable wird verwendet, um zu überprüfen, ob der Buchstabe im zu erratenden Wort vorkommt. Verwenden Sie `Console.ReadLine`, um auf die Benutzereingabe zu warten, und speichern Sie die Benutzereingabe in der Eingabevariable. Hinweis: Wir haben die Variable `input` bereits deklariert, daher müssen Sie nicht das Schlüsselwort `var` verwenden.

Um zu überprüfen, ob Sie dies korrekt gemacht haben, drücken Sie **run**. Sie sollten jetzt in der Lage sein, einen Buchstaben in die Konsole einzugeben.

### Aktivität 4.3

Jedes Mal, wenn ein Buchstabe korrekt geraten wird, müssen wir die Anzahl der korrekt geratenen Buchstaben erhöhen (um eins hinzufügen). Verwenden Sie die Variable `lettersRevealed`, um die Anzahl der korrekt geratenen Buchstaben zu ändern. 
Drücken Sie **run**, um sicherzustellen, dass keine Fehler auftreten. Wir haben auch etwas Code bereitgestellt, um den Wert der Variable `lettersRevealed` zu Testzwecken auszugeben. Stellen Sie sicher, diesen Code zu löschen, wenn Sie mit dem Testen fertig sind, da wir diese Information nicht an den Spieler weitergeben möchten!

### Aktivität 4.4

Jedes Mal, wenn ein Buchstabe falsch geraten wird, verliert der Spieler ein Leben. Verringern Sie (ziehen Sie eins ab) die Anzahl der Leben mit der Variable `lives`. Wir werden dem Spieler auch mitteilen, wie viele Leben ihm noch verbleiben, indem wir die Anzahl der verbleibenden Leben in die Konsole ausgeben, wenn er einen falschen Buchstaben rät.
Überprüfen Sie, ob Sie dies korrekt gemacht haben, indem Sie **run** drücken, einen falschen Buchstaben raten und sicherstellen, dass die korrekte Anzahl verbleibender Leben in der Konsole angezeigt wird.

{{% notice info %}}

### Interessante Tatsache - Bugs

Erinnern Sie sich an **Aktivität 4.1**, dass wir nach dem Entkommentieren von Code ein unerwartetes Verhalten erlebt haben. Alle Probleme oder unerwarteten Verhaltensweisen im Programm werden als **"Bugs"** bezeichnet. Wir haben den in **Aktivität 4.1** eingeführten Bug behoben, indem wir in **Aktivität 4.2** Benutzereingaben eingeführt haben.

Auch wenn Sie alles in den vorherigen Teilen korrekt implementiert haben, wird nach einer Weile ein weiteres Problem auftreten, wenn Sie weiterspielen. Was ist es? Wir werden diesen Fehler in **Aktivität 6** beheben.

{{% /notice %}}