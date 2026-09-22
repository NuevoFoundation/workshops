---
title: "Einführung"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 1
---

Bäume bestehen aus zwei Komponenten: **Kanten** und **Knoten**. Schauen wir uns jede dieser Komponenten etwas genauer an.

### Kanten

Man kann sich eine Kante als die Linie vorstellen, die zwei Knoten verbindet. Kanten verbinden immer genau zwei Knoten. Kanten können Informationen enthalten, müssen dies aber nicht.

### Knoten

Knoten sind einfach Punkte in einem Baum, die bestimmte Daten darstellen. Ein Baum benötigt mindestens einen Knoten, und jeder Knoten kann so viele Kanten haben, wie er möchte, solange er mit einem anderen, unterschiedlichen Knoten verbunden ist.

### Warum Bäume?

Bäume sind sehr einfache Datenstrukturen, die eine Menge Daten speichern können und dennoch eine schnelle Suche ermöglichen. Viele Algorithmen, die das beste Ergebnis ermitteln müssen, organisieren ihre Daten in einem Baum, bevor sie suchen, um ihre Geschwindigkeit zu optimieren. Einige Beispiele für die Anwendung von Bäumen in der realen Welt sind:
* <a href="https://en.wikipedia.org/wiki/Spanning_Tree_Protocol" target="_blank">Spanning Tree Protocol</a> - Ein Protokoll, das grundlegend für die Nutzung des Internets ist,
* <a href="https://en.wikipedia.org/wiki/Binary_search_algorithm" target="_blank">Binäre Suche</a> - Einer der effizientesten Algorithmen, um Daten in einem sortierten Datensatz zu durchsuchen,
* <a href="https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html" target="_blank">TreeMaps</a> - Das Pendant zur HashMap-Datenstruktur in Java, die einen Baum zur Organisation der Daten nutzt.

Manche Bäume haben spezifischere Regeln darüber, wie Daten hinzugefügt und gepflegt werden, was bedeutet, dass es fast immer einen Baum für jedes Szenario gibt.

## Visualisierung von Bäumen

Bäume haben einen sogenannten **Wurzelknoten**, das ist der Knoten, an den der Rest des Baums entweder direkt oder indirekt angeschlossen ist. Wir nennen diese Datenstruktur einen Baum, weil die Knoten vom Wurzelknoten aus verzweigen. Wenn man eine Zeichnung eines Baumes betrachtet, sieht man den Wurzelknoten normalerweise oben, aber das ist nicht immer der Fall!

![image](../img/tree.png)