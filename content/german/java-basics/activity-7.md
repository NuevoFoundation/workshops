```markdown
---
title: "Datenstrukturen (Array & ArrayList)"
description: "Einführung in grundlegende Datenstrukturen in Java."
date: 2021-10-13T00:00:00Z
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/x2hcvJjiH_g" title="Java arrays and ArrayLists video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

In den vorherigen Übungen haben wir gelernt, dass Variablen es uns ermöglichen, auf ein Stück Daten zuzugreifen und diese zu speichern. Aber was ist, wenn wir eine Menge ähnlicher Daten speichern möchten? Gibt es einen guten Weg, sie zu organisieren, ohne mehrere Variablen zu deklarieren?

In der Programmierung sind **Datenstrukturen** Elemente, die es Programmierern ermöglichen, mehrere Datenstücke desselben Typs zu speichern. Die Verwendung von Datenstrukturen ist eine effiziente Methode, um große Datenmengen zu speichern und darauf zuzugreifen. In dieser Übung werden wir zwei Datenstrukturen kennenlernen, die in Java verwendet werden: **Array** und **ArrayList**.

Während ein Array eine feste Länge hat, ist die ArrayList variabel und die Größe der Datenstruktur kann verändert werden. Beginnen wir mit einem Blick auf Arrays!

## Array

Nehmen wir an, wir möchten Patricks 🐥 5 Lieblingsfilme speichern. Anstatt 5 Variablen zu erstellen, können wir alle 5 Datenstücke in einem Array speichern, unserer ersten Datenstruktur!

Um Daten in einem Array zu speichern, gehen wir wie folgt vor:

1. Zuerst deklarieren wir ein Array, indem wir einen Datentyp und die Größe (Anzahl der speicherbaren Daten) angeben.

```java
String topMovies[] = new String[5]; // Erstelle ein Array vom Typ String mit der Größe 5.
```

2. Wir gehen durch das Array (gehen durch alle Datenplätze) und weisen jedem Platz einen Wert zu. 

Beachten Sie, dass wir auf das Array mit seinem Namen und einem Index zugreifen (`0`, um das erste Element zu erreichen, `1` für das zweite usw.).
```java
topMovies[0] = "Birds Of Prey";
topMovies[1] = "The Birds";
topMovies[2] = "Angry Birds";
topMovies[3] = "Bird Box";
topMovies[4] = "The Secret Life of Pets";
// Das Array topMovies speichert jetzt "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" in der Reihenfolge
```
{{% notice info %}}
### Warum beginnt die Array-Indizierung in Java bei 0?

Es ist verlockend und vernünftig zu denken, dass man beim Zugriff auf das erste Element eines Arrays bei Index 1 beginnen sollte.

Wenn der Computer jedoch den Code `arr[1]` liest, denkt er nicht daran, das „erste“ Element von `arr` abzurufen.

Tatsächlich liest der Computer `arr[1]` als das Element, das mit „1 Entfernung vom Beginn des Arrays“ abgerufen werden soll.

Mit anderen Worten: Der Index ist tatsächlich ein Speicheroffset. Um auf das erste Element zuzugreifen, müssen wir das Element vom „0-Offset“ ausgehend vom Beginn des Arrays abrufen (z. B. `arr[0`]).
{{% /notice %}}

{{% notice tip %}}
### Eine alternative Möglichkeit, ein Array zu erstellen:
Wenn wir bereits alle Datenstücke für ein Array kennen, können wir das Array in einer Zeile erstellen, indem wir alle Daten zwischen `{` und `}` auflisten.

Beispiel:

```java
String topMovies[] = {"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"};
```

Genau wie beim Initialisieren der Daten mit ihrem Index können wir auch auf jedes einzelne Datenstück zugreifen oder es ändern.

Beispiel:

```java
String movie1 = topMovies[0]; // movie1 hat den Wert "Birds Of Prey"
```

{{% /notice %}}

Es ist oft nützlich zu wissen, wie viele Elemente sich in einem Array befinden, nachdem es erstellt wurde (zum Beispiel, um auf das letzte Element des Arrays zuzugreifen). Wir können die Anzahl der Elemente im Array mit dem Feld `length` des Arrays feststellen, indem wir `array_name.length` eingeben.

Beispiel:

```java
int numOfMovie = topMovies.length; // numOfMovie hat den Wert 5
```

<br/>

### Übung: Schreibe eine Methode `printArr()`, die ein Array als Eingabe erhält und alle Elemente des Arrays in der Reihenfolge ausgibt 
(Tipp: Nutze eine Schleife und `.length`, um zu helfen).

Nach dem Klicken auf `Run` sollte das Programm Folgendes ausgeben:

```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsArray" target="_blank">Replit starten</a>

## ArrayList

ArrayList ist eine weitere beliebte Datenstruktur in Java. `ArrayList` ist eine Klasse, die mit Arrays implementiert wurde. Sie ähnelt einem Array darin, dass Benutzer Daten über einen Index abrufen, speichern und ändern können.

Man erstellt eine ArrayList, indem man einen Namen und den Typ zwischen `<` und `>` angibt.
Beispiel:

```java
ArrayList<String> topMoviesList = new ArrayList<String>();
```

Um Elemente hinzuzufügen, nutzen wir die Methode `add()` auf der ArrayList.
Beispiel:

```java
topMoviesList.add("Birds Of Prey");
topMoviesList.add("The Birds");
topMoviesList.add("Angry Birds");
topMoviesList.add("Bird Box");
topMoviesList.add("The Secret Life of Pets");
// Die ArrayList speichert jetzt "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" in der Reihenfolge
```

Um auf ein Element an einem bestimmten Index zuzugreifen, verwenden wir die Methode `get()`. Beachten Sie, dass Java eine 0-basierte Indizierung verwendet. Um also auf das erste Element in einer ArrayList zuzugreifen, nutzen wir die Methode `get(0)`.
Beispiel:

```java
String movie1 = topMoviesList.get(0); // movie1 hat den Wert "Birds Of Prey"
```

Um die Anzahl der Elemente in der ArrayList zu erhalten, nutzen wir die Methode `size()`.
Beispiel:

```java
int numOfMovie2 = topMoviesList.size(); // numOfMovie2 hat den Wert 5
```

<br/>

Wie bereits kurz erwähnt, der entscheidende Unterschied