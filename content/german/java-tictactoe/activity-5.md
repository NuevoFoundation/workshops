```---
title: "5. (Optional) AI-Zug"
description: "Verwende den Minimax-Algorithmus, um einen Zug für den Computer auszuwählen"
date: 2021-10-14T00:00:00Z
weight: 6
prereq: "Das Spielfeld einrichten!, Eingaben lesen und verarbeiten, das Spielfeld aktualisieren, den Gewinner überprüfen"
difficulties: ["fortgeschritten"]
---

### Lass den Computer denken

Bisher haben wir ein `Random`-Objekt verwendet, um für den Computer zufällige Züge zu generieren. Dadurch ist die Wettbewerbsfähigkeit des Computers recht gering.

In dieser Übung möchten wir die Schwierigkeit des Spiels erhöhen, indem wir optimale Entscheidungen für den Computer treffen.

Das erreichen wir, indem wir künstliche Intelligenz in unser Programm integrieren, und zwar mit dem **Minimax**-Algorithmus (einem klar definierten Verfahren, mit dem Computer Probleme lösen können).

### Minimax-Algorithmus

Minimax ist ein Algorithmus, der in Zweispieler-Spielen verwendet wird, um optimale Entscheidungen für einen Spieler zu treffen.

- Die beiden Spieler werden als <b>Maximierer</b> und <b>Minimierer</b> bezeichnet. Während der Maximierer seine Gewinnchancen maximiert, versucht der Minimierer, seinen Verlust zu minimieren.
- Der Algorithmus analysiert alle möglichen zukünftigen Spielzustände basierend auf dem aktuellen Spielfeld, wobei davon ausgegangen wird, dass sowohl der Maximierer als auch der Minimierer den für sie besten Zug wählen.
- In unserem Fall wählen wir den Computer als Maximierer und den Spieler als Minimierer. Wir versuchen, optimale Entscheidungen für den Computer zu treffen, indem wir seine Gewinnchancen maximieren!

### Wie funktioniert der Minimax-Algorithmus bei TicTacToe?

- Wir analysieren alle möglichen Züge von `"X"` und `"O"` und vergeben Punkte an ein Spielfeld, falls es einen Gewinner oder ein Unentschieden gibt.
- Da wir möchten, dass der Computer mit möglichst wenigen Zügen gewinnt, gestalten wir die Bewertung der Spielfelder wie folgt:

- Wenn der Computer gewinnt, berechnen wir die Punkte mit der Formel `1 * (Anzahl der freien Plätze auf dem Spielfeld + 1)`.
- Wenn der Spieler gewinnt, berechnen wir die Punkte mit der Formel `-1 * (Anzahl der freien Plätze auf dem Spielfeld + 1)`.
- Bei einem Unentschieden beträgt die Punktzahl `0`.
- Indem wir Spielzuständen, in denen der Computer mit weniger Zügen gewinnen kann, höhere Punktzahlen geben, lehren wir unseren Code, die optimale Entscheidung für den Computer zu treffen.

Lassen Sie uns ein Beispiel betrachten:

<img src="../images/minimax.png" height="500" alt="Beispiel möglicher Optionen für einen Sieg im Tic-Tac-Toe, wie im untenstehenden Text beschrieben." /> 

1. In der ersten Reihe betrachten wir die 3 möglichen Züge für den Computer `"O"`, der der Maximierer ist.
2. Wir analysieren alle Spielzustände, bis alle Züge entweder mit einem Sieg des Computers, einem Sieg des Spielers oder einem Unentschieden enden. Dann vergeben wir die entsprechenden Punktzahlen.

   Zum Beispiel gewinnt im zweiten Spielfeld der ersten Reihe der Computer, indem er `"O"` auf Position 8 platziert. Dieser Zustand erhält dann eine Punktzahl von `1 * (Anzahl der freien Plätze auf dem Spielfeld + 1)` = `1 * (2+1)` = `3`.

3. Bei Spielzuständen ohne Gewinner oder Unentschieden wählen wir die kleinste Punktzahl während der Minimierungsrunden (wenn `"X"` einen Zug macht) und die größte Punktzahl während der Maximierungsrunden (wenn `"O"` einen Zug macht).
4. Wenn Sie die Maximierungs-/Minimierungsrunden in der Abbildung oben verfolgen, sollten Sie feststellen, dass der optimale Zug für den Computer darin besteht, `"O"` auf Position 8 zu platzieren, sodass der Computer mit einem Zug vom Ausgangsspielfeld aus gewinnt.

### Aufbau des Codes

In Aktivität-3 haben Sie die Methode `int getComputerMove(String[] curBoard)` geschrieben, um zufällig einen Platz für den Computer zu generieren. Schreiben wir nun eine weitere Methode namens `getComputerMoveAI(String[] curBoard)`, die den optimalen Zug für den Computer liefert, indem sie die Methode `int minimax(String[] curBoard, boolean isMaximizing)` aufruft.

```java
int getComputerMove(String[] curBoard){
    // 1. Diese Methode ruft minimax() für alle möglichen Züge auf, die der Computer auswählen kann
    // 2. sie nimmt den maximalen Wert von ihnen
    // 3. gibt den optimalen Zug zurück
}
int minimax(String[] curBoard, boolean isMaximizing){
    // 1. In der Maximierungsrunde ruft sie minimax() für alle möglichen Züge des Computers, "O", auf und gibt die maximalen Punkte zurück
    // 2. In der Minimierungsrunde ruft sie minimax() für alle möglichen Züge des Spielers, "X", auf und gibt die minimalen Punkte zurück
}
```

{{% notice note %}}

- Die Methode `minimax()` ist eine <b>rekursive Funktion</b>, das heißt, die Funktion ruft sich selbst innerhalb ihrer eigenen Implementierung auf.
- In unserer Methode ruft `minimax()` sich selbst mit verschiedenen möglichen Spielfeldern auf, indem `"X"` oder `"O"` an jeder verfügbaren Position platziert wird. Die Methode wählt entweder die maximale oder minimale Punktzahl, je nachdem, ob es sich um eine Maximierungsrunde handelt.

{{% /notice %}}

### Schreiben der Methode `getComputerMoveAI()`

1. Für jeden verfügbaren Platz auf dem Spielbrett setzen Sie `"O"` auf diesen Platz und ermitteln die Punktzahl für dieses Spielfeld durch Aufruf von `minimax()`. 

{{% notice hint %}}

- Beachten Sie, dass Sie `false` als zweiten Parameter übergeben sollten, da es der Zug des Minimierers wäre.
- Sie sollten diesen Platz nach Ermittlung der Punktzahl wieder auf `" "` zurücksetzen, sodass Sie den ursprünglichen Zustand des Spielbretts während der nächsten Iteration beibehalten.
{{% /notice %}}

2. Verfolgen Sie bei jeder Iteration die höchste Punktzahl und die entsprechende Position auf dem Spielbrett. Geben Sie die Position mit der höchsten Punktzahl zurück.

{{% notice hint %}}

- Verwenden Sie eine Variable namens `bestScore`, die die aktuelle beste Punktzahl speichert und den Anfangswert `Integer.MIN_VALUE` (Minimalwert eines Integers) hat.
- Dies ist eine nützliche Methode, um den maximalen Wert in einer Datenstruktur zu finden. 
Zum Beispiel:

```java
public int getLargestNum() {
    // Der folgende Code findet den maximalen Wert im Array "nums"
    int[] nums = {3, 5, -2, 10};
    int largestNum = Integer.MIN_VALUE;
    for(int i = 