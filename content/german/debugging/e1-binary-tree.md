```markdown
---
title: "Übung 1 - Binärbaum-Implementierung"
difficulties: ["mittlere Schwierigkeit"]
weight: 9
draft: false
---

Der Binärbaum gehört zu den einfachsten Datenstrukturen in der Informatik und die darin verwendeten Ideen sind äußerst nützlich. Er speichert sortierbare Daten und bietet eine optimale Laufzeit von O(log n) für das Suchen, Hinzufügen und Entfernen von Elementen. Diese Leistung hängt jedoch stark von der Reihenfolge ab, in der Elemente hinzugefügt oder entfernt werden, was seine Verwendung auf akademische Diskussionen beschränkt.

## Die Theorie

Ein Binärbaum besteht aus vielen Knoten, die miteinander verbunden sind. Jeder Knoten hat einen Elternknoten, das heißt seinen Vorgänger, und bis zu zwei Kindknoten. Ein Knoten, der keine Kinder hat, wird als Blatt bezeichnet.

In einem **verwurzelten** Binärbaum wird ein Knoten als Wurzel spezifiziert, was bedeutet, dass er keinen Elternknoten hat. Im Diagramm unten ist Knoten A der Elternknoten von den Knoten B und C. Ebenso ist B der Elternknoten von D und E. A ist die Wurzel, und D, E, F und G sind Blätter.

![Binärbaum Grundlagen](../resources/e1-01.png "Binärbaum-Graph, der die Wurzel, Blätter, Eltern und linke sowie rechte Kinder zeigt.") 

Der Binärbaum ist eine rekursive Datenstruktur. Jeder Knoten kann 0-2 Kinder und 1 Elternknoten enthalten. Wir können uns auf einen bestimmten Teilbaum des ursprünglichen Binärbaums beschränken, ohne uns zu viele Gedanken über den gesamten Baum als Ganzes zu machen, und dieser Teilbaum ist selbst ein gültiger Binärbaum.

### Nutzung des Binärbaums

Wir können einen Binärbaum verwenden, um Informationen über die Reihenfolge einer Liste zu speichern. Jeder Knoten kann einen Wert speichern, und seine Kinder müssen wie folgt angeordnet sein:
- Das linke Kind muss einen kleineren Wert als sein Elternknoten haben.
- Das rechte Kind muss einen größeren Wert als sein Elternknoten haben.
- Doppelte Werte können entweder links oder rechts gespeichert werden. Es ist jedoch wichtig sicherzustellen, dass Duplikate konsistent gespeichert werden. Wenn Duplikate beispielsweise links gespeichert werden, dürfen sie nur dort gespeichert werden, und umgekehrt für die rechte Seite.

Das folgende Diagramm zeigt einen Beispiel-Binärbaum. Beachte, dass die linken Kinder alle kleiner als ihr Elternknoten sind, während die rechten Kinder größer sind. Abgesehen von dieser Ordnungs-Eigenschaft gibt es keine strikte Anforderung an die Form des Baums.

![Binärbaum Beispiel 1](../resources/e1-02.png "Ein Beispiel eines Binärbaums, bei dem die linken Kinder alle kleiner als ihr Elternknoten sind, während die rechten Kinder größer sind.") 

### Hinzufügen zu einem Binärbaum

Um ein Element hinzuzufügen, müssen wir herausfinden, wo es in den Baum passt. Dazu führen wir eine **Baumdurchquerung** durch. Die Idee ist, sich von Knoten zu Knoten zu bewegen, bis wir eine "Stelle" für das hinzuzufügende Element finden. Wir beginnen zunächst bei der Wurzel. Dann vergleichen wir den Wert an der Wurzel mit dem hinzuzufügenden Element. Ist das Element größer, gehen wir zum rechten Kind. Ansonsten gehen wir zum linken.

Diesen Prozess können wir wiederholen, bis wir einen Knoten finden, der der neue Elternknoten des hinzuzufügenden Elements sein kann. Das Diagramm unten verdeutlicht das Hinzufügen der Zahl 7 zu einem Binärbaum.

![Binärbaum Hinzufügen](../resources/e1-03.png "Diagramm, das den Prozess zum Hinzufügen der Zahl 7 zu einem Binärbaum veranschaulicht.")

1. Im ersten Schritt (blau) vergleichen wir `10` und `7`. Da `7 < 10`, gehen wir zum linken Kind.
2. Im zweiten Schritt (grün) vergleichen wir `5` und `7`. Da `7 > 5`, gehen wir zum rechten Kind, nur um festzustellen, dass `5` kein rechtes Kind besitzt! Daher können wir `7` an dieser Stelle einfügen.

### Entfernen aus einem Binärbaum

Das Entfernen eines Elements ist etwas komplizierter. Zunächst müssen wir das zu entfernende Element finden. Sobald wir es jedoch entfernt haben, müssen wir das „Loch“ im Baum wieder auffüllen. Wir können das entstandene Loch nicht einfach mit einem beliebigen Element auffüllen; wir müssen die Ordnungs-Eigenschaft des Binärbaums beibehalten. Ein passendes Element dafür ist das tiefste, ganz links stehende Element des rechten Teilbaums des Lochs.

Das Diagramm unten zeigt das Entfernen von Elementen in verschiedenen Fällen. Die gepunkteten Linien zeigen an, dass die Verbindung möglicherweise vorhanden ist oder nicht. So existiert im zweiten Fall beispielsweise der blaue Elternknoten nicht, wenn der zu entfernende Knoten die Wurzel des Baums ist.
- Im ersten Fall hat der Knoten keine Kinder – wir können ihn gefahrlos entfernen, ohne Probleme.
- Im zweiten Fall hat der Knoten 1 Kind auf der linken oder rechten Seite. Wir können das Kind an die frühere Stelle des Knotens verschieben. Dies funktioniert sowohl auf der linken als auch auf der rechten Seite.
- Im dritten Fall hat der Knoten 2 Kinder. Es gibt einige Möglichkeiten, dies zu handhaben, aber die Methode, die wir verwenden, besteht darin, das kleinste Element des rechten Teilbaums zu nehmen und es in das „Loch“ einzufügen, das wir erzeugen werden. Wenn dieses Element ein rechtes Kind (den grünen Knoten) hat, müssen wir diesen Knoten verschieben, sodass sein früherer Elternknoten (orange) zum Eltern dieses Kindes wird.

![Binärbaum Entfernen](../resources/e1-04.png "Diagramm, das die 3 Fälle des Entfernens eines Elements aus einem Binärbaum veranschaulicht.")

Der dritte Fall ist schwierig korrekt umzusetzen, da es viele Randfälle gibt. Beispielsweise könnte der kleinste Wert des rechten Teilbaums tatsächlich das rechte Kind selbst sein. Oder das minimale Kind könnte kein rechtes Kind enthalten.

## Die Implementierung

Das Nuevo-Team hat eine Implementierung für den Binärbaum erstellt. Der Programmierer war jedoch nachlässig und hat seine Arbeit nicht überprüft, sodass Fehler und Bugs vorhanden sind! **Dein Ziel ist es, alle Tests bestehen zu lassen.**

* Um den Code zu debuggen, kannst du den Befehl `make debug` verwenden. Damit werden die benötigten Debug-Dateien im Verzeichnis `debug/` neu generiert und `gdb` für dich ausgeführt.
* Um `valgrind` zu verwenden, kannst du den Befehl `make valgrind` nutzen. Dadurch wird dein Code neu kompiliert und `valgrind` mit den entsprechenden Argument