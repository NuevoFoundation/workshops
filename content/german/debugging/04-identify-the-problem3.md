---
title: "Schritt 1 - Das Problem finden (Teil 3)"
difficulties: ["mittel"]
weight: 5
draft: false
---

## Debugger

Das Debuggen von Code ist ein so weit verbreitetes und häufig auftretendes Problem, dass komplette Programme entwickelt wurden, um anderen Programmierern dabei zu helfen, effizienter zu debuggen. Diese Programme werden treffend als **Debugger** bezeichnet, und es gibt viele Debugger, die mit der Programmiersprache C arbeiten. Lassen Sie uns `gdb`, einen gängigen Debugger für die Befehlszeile, näher betrachten.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Replit starten</a>

Für unsere Beispiele verwenden wir den <a href="https://www.youtube.com/watch?v=SLauY6PpjW4" target="_blank">QuickSort</a>-Algorithmus.

**QuickSort** ist ein Algorithmus, der ein Array sortiert, indem zuerst ein Element des Arrays als `Pivot` ausgewählt wird.

Als Nächstes werden die Elemente nach einer der folgenden Bedingungen organisiert:
- Elemente, die kleiner als der Pivot sind.
- Elemente, die größer als der Pivot sind.

Nachdem die Sortierung abgeschlossen ist, wird derselbe Prozess rekursiv auf die oberen und unteren Partitionen des Arrays angewendet, wobei der Pivot als Mittelpunkt dient.

{{% notice note %}}
Unsere Version von QuickSort geht davon aus, dass das linke Element das "größere" Element und das rechte Element der Pivot innerhalb der Partition ist.
{{% /notice %}}

|![QuickSort unter Verwendung des rechten Elements als Pivot.](../resources/debugging_process_quicksort.svg "Mehrstufiger Prozess des QuickSort unter Verwendung des rechten Elements als Pivot.")|
|:--:|
|Abbildung 1: QuickSort mit dem rechten Element als Pivot und der Annahme, dass das linke Element das 'größere' Element ist.|

[GDB (GNU Project Debugger)](https://sourceware.org/gdb/) ist ein leistungsstarker Debugger, mit dem Sie Programme von der Befehlszeile aus debuggen können, was in Fällen nützlich ist, in denen Sie keinen Zugriff auf eine grafische Benutzeroberfläche (GUI) haben.

Um effektiv zu debuggen, ist es wichtig, zu verstehen, wie das Programm funktioniert. Unsere QuickSort-Implementierung verwendet eine rekursive Implementierung von QuickSort und führt die Sortierung durch, wenn das aktuelle Element kleiner ist als der Pivot und davon ausgegangen wird, dass das erste Element das "größere" Element ist. Die eigentliche Sortierung erfolgt in der Funktion `partition`.

### Schritte zum Debuggen mit GDB
#### Programm kompilieren
1. Öffnen Sie die **Shell**-Registerkarte und kompilieren Sie das Programm:

```bash
make Quicksort
```

{{% notice note %}}
Beim Kompilieren des Programms werden die Flags `-g` und `-Og` verwendet. Der erste sagt dem Compiler, **Debugging-Informationen** hinzuzufügen. Ohne diese Anweisung könnte `gdb` das Programm nicht debuggen. Der zweite Flag weist den Compiler an, das Programm so zu optimieren, dass die Ablaufstruktur des Programms nicht beeinträchtigt wird. Ohne `-Og` könnte der Compiler möglicherweise Teile Ihres Codes wegoptimieren, was die Effektivität des Debuggers erheblich beeinträchtigen würde.

Es ist wichtig, den zweiten Flag zu beachten. Beim Debuggen sollten Sie **IMMER** sicherstellen, dass der Compiler nur minimale Optimierungen an Ihrem Code vornimmt, da Optimierungen die Funktionsweise Ihres Codes drastisch verändern können!
{{% /notice %}}

#### Programm ausführen
1. Geben Sie den Befehl `gdb examples/Quicksort` ein. Damit starten Sie die GDB-Befehlszeilenschnittstelle. Um ein Programm mit `gdb` zu debuggen, können Sie `gdb <Name des Programms>` verwenden.

2. Vergewissern Sie sich, dass GDB anzeigt, dass es `Reading symbols from ./examples/Quicksort...` liest; andernfalls haben Sie das Programm nicht an GDB angehängt.

3. Sie können GDB mit dem Befehl `quit` (oder einer beliebigen Abkürzung davon, z. B. `q`) wie bei der normalen Befehlszeile beenden.

Sie sollten etwa Folgendes sehen:

|![Ausführung von GDB auf der Datei „Quicksort“.](../resources/w4-01.png "Screenshot der Konsole nach dem Start von GDB auf der Datei „Quicksort“.")|
|:--:|
|Abbildung 2: Ausführung von GDB auf der Datei „Quicksort“.|

#### Programm debuggen

Um das Programm zu debuggen, müssen wir es aus GDB heraus ausführen.

1. Geben Sie den Befehl `run` (oder `r`) ein. Dadurch wird das Programm wie über die normale Befehlszeile ausgeführt.
   
```bash
(gdb) run
```

Das Programm gibt zunächst die Inhalte des zu sortierenden Arrays aus: ein Array mit unsortierten Zahlen. Anschließend führt es den Sortieralgorithmus aus und gibt schließlich das sortierte Array aus. Sie können sehen, wie sich das Array während der Sortierung verschiebt!

Es scheint jedoch, dass die Sortierung nicht wie beabsichtigt funktioniert.

Nutzen wir eines der wichtigsten Werkzeuge, die Debugger bieten: **Breakpoints**. Ein Breakpoint weist den Debugger an, das Programm anzuhalten, wann immer es diese bestimmte Codezeile während der Ausführung erreicht. Dies ermöglicht es Ihnen, in Echtzeit zu sehen, was innerhalb des Programms passiert. Beachten Sie, dass der Debugger die Codezeile, auf der sich der Breakpoint befindet, erst ausführt, nachdem Sie die Programmausführung fortgesetzt haben.

Lassen Sie uns zunächst herausfinden, wo die Sortierung aller Elemente erfolgt. Wissen Sie, wo diese erfolgt?
{{% expand "***Antwort***" %}}
Die Sortierung findet innerhalb der `for`-Schleife und am Ende des Prozesses statt, wenn der Pivot mit dem "größeren" Element getauscht wird.
{{% /expand %}}
<br/>

2. Setzen Sie mit der Syntax `break <Dateiname:Zeile>` einen Breakpoint, wo die Sortierung stattfindet.
{{% expand "***Antwort***" %}}
```bash
(gdb) break quicksort.c:27
``` 
{{% /expand %}}
<br/>

3. Führen Sie das Programm mit `run` aus und beobachten Sie, wie das Programm anhält, wenn es den Breakpoint erreicht.

4. Während das Programm pausiert ist, können Sie die Werte der Variablen einsehen. Testen Sie einige `print`-Befehle, um Ausdrücke auszuwerten. Hier ist ein Beispiel zur Verwendung von Print-Anweisungen:
```bash
# Sie können den Wert einer Variablen ausgeben
