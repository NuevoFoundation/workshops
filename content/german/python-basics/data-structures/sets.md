```markdown
---
title: "Mengen"
draft: false
weight: 3
---

Genau wie eine Liste ist eine Menge eine Sammlung von Elementen. Der Unterschied zwischen einer Menge und einer Liste besteht darin, dass eine Menge keine Duplikate enthalten kann. Wenn du also 5 Schokoladen hast und sie in eine Menge legst, bleibt dir nur 1 Schokolade übrig, da Duplikate entfernt werden. 😢

<a href = "https://www.youtube.com/watch?v=mLIuHU5Sj5w">
<img src="../../img/sets_example.jpg" width="500" alt="Bild von zwei Kreisen mit Schach und Tischtennis im linken Kreis, Fußball und Cricket-Schläger im rechten Kreis, und Basketball sowie Badminton in beiden Kreisen, wo sie sich überschneiden" />
</a>

Auf dem obigen Bild repräsentiert die linke Seite **<font color="#b00020">Indoor-Spiele</font>** (Schach & Tischtennis), während die rechte Seite **<font color="#2e6b2e">Outdoor-Spiele</font>** (Cricket & Fußball) darstellt. Die Mitte stellt den gemeinsamen Teil dieser beiden Mengen dar. Dies sind die Spiele, die sowohl drinnen als auch draußen gespielt werden können (Basketball & Badminton). Der mittlere Teil wird auch als Schnittmenge zwischen zwei Mengen bezeichnet.

{{% notice tip %}}
Eine Menge wird durch die Verwendung der `set()`-Funktion oder durch das Platzieren aller Elemente in einer geschweiften Klammer erstellt.
{{% /notice %}}

```python
indoorGames = set(["Schach", "Tischtennis", "Basketball", "Badminton"])
outdoorGames = {"Cricket", "Fußball", "Basketball", "Badminton"}
print('** Indoor-Spiele **')
print(indoorGames)
print('** Outdoor-Spiele **')
print(outdoorGames)
```

**Ausgabe**
```
** Indoor-Spiele **
set(["Schach", "Tischtennis", "Basketball", "Badminton"])
** Outdoor-Spiele **
set(["Cricket", "Fußball", "Basketball", "Badminton"])
```

### Vereinigung von Mengen
Wenn wir zwei Mengen wie oben haben, enthält die Vereinigung dieser beiden Mengen die Spiele beider Mengen. Das Ergebnis wird eine neue Menge sein. Duplikate werden entfernt.

Das Symbol für die Vereinigung ist `|`.

```python
allGames = indoorGames | outdoorGames
print('** Alle Spiele **')
print(allGames)
```

**Ausgabe**
```
** Alle Spiele **
set(["Schach", "Tischtennis", "Basketball", "Badminton", "Cricket", "Fußball"])
```


### Schnittmenge von Mengen
Die Schnittmenge von zwei Mengen ist die Menge, die sowohl Indoor- als auch Outdoor-Spiele enthält.

Das Symbol für die Schnittmenge ist `&`.

```python
commonGames = indoorGames & outdoorGames
print('** Gemeinsame Spiele **')
print(commonGames)
```


**Ausgabe**
```
** Gemeinsame Spiele **
set(["Basketball", "Badminton"])
```

### Differenz von Mengen
Die Differenz von zwei Mengen ist die Menge, die Spiele aus einer Menge enthält, die nicht in der anderen Menge vorhanden sind.

Das Symbol für die Differenz ist `-`.

```python
indoorOnlyGames = indoorGames - outdoorGames
print('** Nur Indoor-Spiele **')
print(indoorOnlyGames)
```

**Ausgabe**
```
** Nur Indoor-Spiele **
set(["Schach", "Tischtennis"])
```

### Elemente einer Menge drucken
Du kannst die Elemente einer Menge nicht wie bei einer Liste mit einer Elementnummer ausgeben. Die Elemente einer Menge haben keine feste Reihenfolge. 

Daher kannst du nicht etwas wie `indoorGames[0]` oder `indoorGames[1]` machen, wie du es bei einer Liste kannst. Du kannst jedoch die Elemente einer Menge mit einer `for`-Schleife durchgehen.

```python
for g in indoorGames:
  print(g)
```

**Ausgabe**
```
Schach
Tischtennis
Basketball
Badminton
```

### Elemente zu einer Menge hinzufügen
Wir können die `.add`-Funktion verwenden, um ein neues Spiel zu einer Menge hinzuzufügen. 
```python
indoorGames.add("Carrom")
print('** Indoor-Spiele **')
print(indoorGames)
```


**Ausgabe**
```
** Indoor-Spiele **
set(["Schach", "Tischtennis", "Basketball", "Badminton", "Carrom"])
```

### Elemente aus einer Menge entfernen
Wir können die `.discard`-Funktion verwenden, um ein Element aus der Menge zu entfernen. 
```python
indoorGames.discard("Schach")
print('** Indoor-Spiele **')
print(indoorGames)
```

**Ausgabe**

```
** Indoor-Spiele **
set(["Tischtennis", "Basketball", "Badminton", "Carrom"])
```
{{% notice note %}}
Wenn du ein Element entfernst, das nicht in der Menge vorhanden ist, erhältst du keinen Fehler. Auf der anderen Seite würdest du bei dem Versuch, ein nicht vorhandenes Element aus einer Liste zu entfernen, einen `ValueError` bekommen!
{{% /notice %}}

### Herausforderung
Lass uns die gleiche Übung, die wir gerade mit Listen und Tupeln gemacht haben, jetzt mit Mengen ausprobieren.

Beginne mit der unten stehenden Liste von Früchten. Gib die Liste der Früchte aus und frage den Benutzer bei jeder Frucht, ob er sie mag. Wenn er sie mag, behalte sie. Wenn nicht, entferne sie von der Liste. Frage den Benutzer anschließend, eine Frucht hinzuzufügen, die in der Liste fehlt. Füge sie der Liste hinzu und gib die Anzahl der Früchte aus, die der Benutzer mag.

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/i7wzei96" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```