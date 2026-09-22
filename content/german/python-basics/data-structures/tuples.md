---
title: "Tupel"
draft: false
weight: 2
---

Ein Tupel ist ebenfalls eine geordnete Sammlung von Elementen, genau wie Listen, jedoch sind Tupel unveränderlich. Das heißt, die Elemente eines Tupels können nach der Zuweisung nicht mehr verändert werden (im Gegensatz zu Listen, bei denen das möglich ist). Diese unveränderliche Natur macht Tupel sehr nützlich, wenn Sie möchten, dass Ihre Daten während des gesamten Programms nicht verändert werden. Darüber hinaus werden Tupel häufig verwendet, um Elemente verschiedener Datentypen zu speichern. Während Listen mit eckigen Klammern (`[]`) definiert werden, kann ein Tupel erstellt werden, indem alle Elemente in runde Klammern `()` gesetzt und durch Kommas getrennt werden. 

```python
# Erstellung eines Tupels mit zwei Elementen vom Typ String
my_tuple = ('apple', 'orange')
```

{{% notice note %}}

Tupel können auch ohne runde Klammern erstellt werden. Es ist jedoch eine gute Praxis, sie zu verwenden.

{{% /notice %}}

Tupel können auch Elemente verschiedener Typen enthalten.

```python
# Ein Tupel mit Elementen verschiedener Datentypen
my_tuple = ('apple', 1, 4.5)
```

### Zugriff auf die Elemente eines Tupels

Wir können auf die Elemente eines Tupels zugreifen, indem wir Indizes in eckigen Klammern `[]` verwenden, genau wie bei Listen. Ebenfalls, genau wie bei Listen, beginnt der Index bei `0`. 

```python
# Erstellung eines Tupels mit drei Elementen vom Typ String
my_tuple = ('apple', 'orange', 'mango')

print(my_tuple[0]) ## gibt apple aus
print(my_tuple[2]) ## gibt mango aus
```

### Zwei Tupel kombinieren

Wir können zwei Tupel mit dem Operator `+` kombinieren.

```python
fruits = ('apple', 'orange', 'mango')
numbers = (1, 2, 3)

# Kombinieren der Tupel fruits und numbers
combined_tuple = fruits + numbers

print(combined_tuple) ## gibt ('apple', 'orange', 'mango', 1, 2, 3) aus
```

### Länge eines Tupels

Die Funktion `len(tuple)` gibt die Anzahl der im Tupel enthaltenen Elemente zurück.

```python
fruits = ('apple', 'orange', 'mango')

print(len(fruits))  ## gibt 3 aus
```

### Ein Tupel neu zuweisen

Da Tupel unveränderlich sind, können wir ein Element eines Tupels nicht ändern. `fruits[0] = 'lemon'` würde also einen Fehler verursachen, da wir hier versuchen, das Element an der Position `0` des Tupels 'fruits' zu ändern. 
Wir können jedoch einem Tupel einen neuen Wert zuweisen (das gesamte Tupel ersetzen).

```python
my_tuple = ('apple', 'orange', 'mango')

print(my_tuple)  ## gibt ('apple', 'orange', 'mango') aus

# Neuzuweisung von my_tuple
my_tuple = (1, 2, 3) 

print(my_tuple)  ## gibt (1, 2, 3) aus
```

### Löschen eines Tupels

Wir können ein Tupel vollständig mit dem Schlüsselwort `del` löschen.

```python
fruits = ('apple', 'orange', 'mango')

print(fruits)  ## gibt ('apple', 'orange', 'mango') aus

# Löschen von fruits
del fruits 

print(fruits)  ## Gibt einen FEHLER aus, da das Tupel fruits nicht mehr vorhanden ist 
```

### Herausforderung
Versuchen wir dieselbe Übung, die wir mit Listen gemacht haben, aber diesmal mit Tupeln.

Beginnen Sie mit der unten stehenden Liste von Früchten. Geben Sie die Liste der Früchte aus und fragen Sie für jede Frucht den Benutzer, ob er sie mag. Wenn er sie mag, behalten Sie sie. Wenn nicht, entfernen Sie sie aus der Liste. Bitten Sie den Benutzer anschließend, eine Frucht hinzuzufügen, die in der Liste fehlt. Fügen Sie sie der Liste hinzu und geben Sie die Anzahl der Früchte aus, die dem Benutzer gefallen.

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe title="Herausforderung - Codebunga" src="https://codebunga.com/embed/f25jnzdr" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>