---
title: "Schritt 1 - Das Problem finden (Teil 2)"
difficulties: ["mittel"]
weight: 4
draft: false
---

## Laufzeitfehler

Kompilierfehler sind eine Sache, aber **Laufzeitfehler und Bugs** sind eine andere. Während der Compiler Ihnen leicht sagen kann, wo Sie suchen sollen, werden Laufzeitfehler durch die Ausführung Ihres Programms verursacht. Wir müssen verstehen, was das Programm tut, wenn der Fehler auftritt:
- Welche Variablen werden verwendet?
- Welche Anweisung wird aufgerufen? 
- Fehlt eine Aussage, die wir benötigt hätten?

In kleineren Anwendungen können wir **Ausgabeanweisungen (print statements)** im Code verwenden, um schnell den Status des Programms zu überprüfen. Ausgabeanweisungen sind ein schneller und einfacherer Weg, um während der Laufzeit in ein Programm zu schauen, und mit etwas Glück können Sie den Bug ohne viel Aufwand finden.

## Binäre Suche

Einer der einfacheren Algorithmen, die Sie lernen werden oder bereits gelernt haben, ist die **binäre Suche**, die es Ihnen ermöglicht, ein Element in einer sortierten Liste in logarithmischer Zeit zu suchen. Die Idee ist, die Mitte der sortierten Liste zu überprüfen und zu sehen, ob sie mit dem gesuchten Element übereinstimmt; wenn wir das Element finden, ist der Algorithmus beendet. Ist das Element größer, durchsuchen wir die obere Hälfte der Liste. Andernfalls durchsuchen wir die untere Hälfte der Liste. Dieser Vorgang wird so lange wiederholt, bis wir das gesuchte Element gefunden haben.

|![Suche nach der Zahl 7 in einer geordneten Liste von 10 Zahlen mit Hilfe der Binären Suche](../resources/binary_search.svg "Ein Diagramm zeigt den Suchprozess zum Finden der Zahl 7 in einer geordneten Liste von Zahlen von 1 bis 10 mit der Binären Suche.")|
|:--:|
|Suche nach der Zahl **7** in einer geordneten Liste von **10** Zahlen mit Binärer Suche|

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Replit starten</a>

Unser Programm wird Sie bitten, nach einem Namen anhand der Position zu suchen, an der er sich befindet. 

Öffnen Sie das **Shell** im Replit-Programm und kompilieren Sie das Programm:
``` bash
make BinarySearch
```

Führen Sie das Programm so aus:
``` bash
./examples/BinarySearch
```

Sie sollten eine Liste mit Namen und den dazugehörigen Nummern sehen. Suchen Sie Emily, indem Sie im Eingabefeld die Zahl 6 eingeben und `Enter` drücken.

|![Suche nach Amy](../resources/debugging_process_searching_for_amy.svg "Ein Screenshot einer Konsole, die eine Liste von Namen und ihren zugehörigen Nummern zeigt. 'Nummer: 5, Name: Amy' ist hervorgehoben.")|
|:--:|
|Suche nach Amy.|

Führen Sie das Programm jetzt erneut aus und suchen Sie die Nummer für `Ramona`. Das Programm stürzt mit der Fehlermeldung `Segmentation fault (core dumped)` ab! 😮

Wenn Sie mit einem solchen Problem konfrontiert sind, sollten Sie sich fragen: Was ist das Verhalten des Fehlers?
Segmentation Fault-Fehler sind üblicherweise ein Zeichen für eines der folgenden Probleme:
- Zugriff auf ein Array außerhalb der Grenzen.
- Dereferenzierung eines NULL-Zeigers.
- Speicher- / Stapelüberläufe.

Für weitere Informationen schauen Sie sich [Liste der häufigsten Gründe für Segmentation Faults in C](https://www.tutorialspoint.com/List-of-Common-Reasons-for-Segmentation-Faults-in-C-Cplusplus#:~:text=List%20of%20Common%20Reasons%20for%20Segmentation%20Faults%20in,7%20Stack%20overflow%208%20Writing%20to%20read-only%20memory) an.

Schauen wir uns nun den Code an, der die binäre Suche implementiert:

1. Die Funktion `binary_search()` nimmt drei Argumente: das Array der Elemente, die Länge des Arrays und die Zahl, die wir suchen. Sie ruft dann die rekursive Funktion `rbin_search()` auf.

2. `rbin_search()` führt die binäre Suche rekursiv aus und gibt den Index des Elements zurück, falls es gefunden wird. Andernfalls gibt sie `-1` zurück.

Eine **rekursive Funktion** zerlegt ein Problem in eine Reihe kleinerer Probleme, indem sie sich selbst aufruft. Dadurch wird das Problem mit einer Anzahl von **Basisfällen** leichter lösbar. Eine rekursive Funktion, die nicht terminiert, hat üblicherweise Probleme in einem der folgenden Bereiche:

1. Die Basisfälle sind unvollständig. 
2. Die rekursiven Aufrufe sind falsch gesetzt.

Lassen Sie uns mit dem Debuggen beginnen!

## Verwendung von Print-Anweisungen

Das Einfügen von `print`-Anweisungen in Ihrem Code ist eine einfache, aber manchmal effektive Methode, um herauszufinden, ob Ihr Code wie vorgesehen funktioniert. Überprüfen Sie, ob die Funktion `rbin_search()` korrekt funktioniert, indem Sie Druckanweisungen einfügen, um zu sehen, wie sich die Werte ändern.

{{% expand "***Tipp 1: Was macht das Problem, das wir lösen wollen, kleiner?***" %}} 
- Versuchen Sie, die Ausgabemeldung nach der `middle`-Variablen in der `rbin_search`-Funktion zu platzieren, um zu sehen, wie sich die Werte von `lo`, `hi` und `middle` ändern. Probieren Sie dann, etwas zu suchen. 
|![Einfügen einer Ausgabemeldung, um die Werte "lo", "hi" und "middle" zu überprüfen.](../resources/debugging_process_print_statement.svg "Screenshot eines Codes, der auf Zeile 17 eine Print-Anweisung hinzufügt, die die Werte von 'lo', 'hi' und 'middle' ausgibt.")|
|:--:|
|Einfügen einer Print-Anweisung, um die Werte `lo`, `hi` und `middle` zu überprüfen.|

- Behalten Sie die Werte im Auge, wenn sie ausgegeben werden.
{{% /expand %}}

{{% expand "**Klicken Sie hier, um die Antwort zu zeigen**" %}} 
Der rekursive Aufruf für die Suche in der unteren Hälfte des Arrays sucht stattdessen in der oberen Hälfte.

Um dies zu beheben, müssen die Argumente `lo` und `hi` des Aufrufs von `rbin_search()` zu `lo` und `middle-1` geändert werden.

|![Korrektur des rekursiven Aufrufs für die untere Hälfte.](../resources/debugging_process_fixing_lowerhalf_search.svg "Screenshot des Codes, der Zeile 24 hervorhebt, in der steht: 'return rbin_search(arr, lo, middle