```markdown
---
title: "Übung 2 - Implementierung eines Binär-Heap"
difficulties: ["mittel"]
weight: 10
draft: false
---

Ein Binär-Heap ist eine wichtige Datenstruktur, die häufig zur Implementierung eines Datentyps namens Prioritätswarteschlange verwendet wird. Er wird auch konzeptionell im Sortieralgorithmus Heapsort genutzt. Sein charakteristisches Merkmal ist seine `O(1)`-Abfrage für den größten oder kleinsten Wert innerhalb seines Inhalts, je nachdem, um welche Art von Heap es sich handelt.

## Die Theorie

Der Binär-Heap ist konzeptionell ein vollständiger Binärbaum. Das bedeutet, dass Knoten in der Reihenfolge von Ebenen zum Baum hinzugefügt werden und die Tiefe des Baums nur dann wächst, wenn in der tiefsten Baumebene kein Platz mehr ist.

Zusätzlich zu dieser strukturellen Einschränkung folgt er der Heap-Ordnungseigenschaft: Die Kinder eines Knotens müssen einen größeren oder kleineren Wert haben als der Knoten selbst. In einem **Min-Heap** müssen die Kinder größere Werte haben. In einem **Max-Heap** müssen die Kinder kleinere Werte haben. Dies bedeutet effektiv, dass die Wurzel das größte Element im Heap enthalten muss.

Das folgende ist ein Beispiel für einen Max-Binär-Heap, auf den wir uns in dieser Übung konzentrieren werden.

![Beispiel für Binär-Heap](../resources/e2-01.png "Max-Binär-Heap-Beispiel")

Man sieht, dass jeder Knoten zwei oder keine Kinder hat, außer dem Knoten ganz rechts. Die Knoten werden von links nach rechts gefüllt, bevor eine neue Reihe begonnen wird. Alle Kinder sind kleiner als ihr Elternknoten.

{{% notice note %}}
Duplikate können in diesem Schema leicht behandelt werden. Wir müssten sicherstellen, dass alle Kinder tatsächlich kleiner oder gleich ihrem Elternknoten sind.
{{% /notice %}}

Wir können ein Array verwenden, um diese Datenstruktur darzustellen. Ein Knoten `i` kann über seinen Index `i` zugegriffen werden. Um auf sein linkes Kind zuzugreifen, multiplizieren wir mit 2. Um auf sein rechtes Kind zuzugreifen, multiplizieren wir mit 2 und addieren 1. Das folgende Diagramm veranschaulicht dies:

![Binär-Heap-Array](../resources/e2-02.png "Bild eines Binär-Heaps und seines entsprechenden Arrays")

### Hinzufügen zu einem Binär-Heap

Um ein Element hinzuzufügen, fügen wir es zunächst an der nächsten verfügbaren Stelle hinzu. Danach „korrigieren“ wir nachträglich alle Probleme, die dadurch verursacht wurden, indem wir es nach oben schieben und Knoten austauschen, bis es eine stabile Position erreicht, d.h. sein Elternknoten ist größer oder gleich sich selbst.

Das Diagramm unten zeigt den Prozess, wie `34` zu dem Beispiel-Binär-Heap hinzugefügt wird.
1. Wir fügen `34` vorläufig in den letzten verfügbaren Steckplatz ein (grüner Kreis, Schritt 1).
2. Danach vergleichen wir mit seinem Elternknoten (blauer Pfeil) und stellen fest, dass `34 > 19`. Daher tauschen wir die beiden Knoten aus.
3. In Schritt 2 vergleichen wir mit `85` und stellen fest, dass `34 < 85`, was darauf hinweist, dass wir fertig sind.

![Hinzufügen zu einem Binär-Heap](../resources/e2-03.png "Illustration des Prozesses zum Hinzufügen zu einem Binär-Heap")

### Entfernen des Maximums aus dem Heap

Ein Max-Binär-Heap muss auch `removeMax` unterstützen, womit das größte Element im Heap entfernt wird. Glücklicherweise ist das größte Element einfach die Wurzel; Allerdings müssen wir die Probleme beheben, die durch das neue entstandene Loch verursacht werden.

Um dieses Loch zu füllen, nehmen wir das letzte Element und füllen es in den obersten Steckplatz. Wie zuvor korrigieren wir nachträglich alle dadurch verursachten Probleme. Wir führen wiederholt Abwärts-Tausche mit dem kleineren Kind durch, bis es eine stabile Position im Heap erreicht.

Das Diagramm unten zeigt, wie ein Max entfernt wird.
1. Die Wurzel wird entfernt und durch das Element ersetzt, das sich am rechten Ende der untersten Reihe befindet.
2. In Schritt 1 vergleichen wir `19` und `42`. Da `42` das größere der beiden ist, vergleichen wir `12` und `42` (blauer Pfeil) und stellen fest, dass `12 < 42`. Daher tauschen wir `12` mit `42`.
3. Wir wiederholen den Prozess für Schritt 2. Wir stellen fest, dass `28` das größere der beiden Kinder ist, und da `12 < 28`, tauschen wir erneut.
4. Schließlich erreichen wir in Schritt 3 eine stabile Position.

![Entfernen des Maximums aus einem Binär-Heap](../resources/e2-04.png "Illustration des Prozesses zum Entfernen des Maximums aus einem Binär-Heap")

## Die Implementierung

In unserer Implementierung beginnen die Indizes bei `1`, um etwas Rechenaufwand zu sparen. Die Wurzel des Binär-Heaps befindet sich also in `heap.__arr[1]` anstelle von `heap.__arr[0]`. Alle Funktionen haben Kommentare zu ihrer Funktion in `binary_heap.h`.

Die Implementierung **wird** mit doppelten Elementen getestet, stelle also sicher, dass diese korrekt behandelt werden. Auch wenn der Heap eine feste Größe hat, werden die Daten im Heap gespeichert. Stelle sicher, dass die Daten freigegeben (`free`) werden!

{{% notice tip %}}
Die Funktionen `createHeap` und `heapPrint` wurden bereits getestet und funktionieren korrekt.
{{% /notice %}}

Dein Ziel ist es, `make test` auszuführen und keine Fehler zu haben. Nutze alle dir zur Verfügung stehenden Werkzeuge wie `gdb`, `valgrind` usw. Viel Erfolg!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-2" target="_blank">Replit starten</a>
```