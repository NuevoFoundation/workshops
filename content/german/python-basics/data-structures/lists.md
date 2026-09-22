---
title: "Listen"
draft: false
weight: 1
---

Listen sind geordnete Sammlungen von Elementen und können als durch Kommas getrennte Werte innerhalb von eckigen Klammern `[]` geschrieben werden. Wie wir in unserer Lektion über Schleifen gesehen haben, können Listen aus beliebigen Datentypen bestehen, z. B. Strings oder Ganzzahlen.

```python
#Erstellen einer Liste mit 5 Früchten
fruits = ['orange', 'apple', 'banana', 'apple', 'mango']
```

Wenn Sie auf ein bestimmtes Element einer Liste zugreifen möchten, können Sie dies tun, indem Sie Indizes (Positionen) innerhalb von eckigen Klammern verwenden. Das erste Element hat den Index (Position) `0`, und die Liste geht bis `Anzahl der Elemente in der Liste - 1`. Eine Liste mit 6 Elementen hat also Indizes von 0 bis 5.

```python
#Erstellen einer Liste mit 5 Früchten
fruits = ['orange', 'apple', 'banana', 'apple', 'mango']

#Element an Index 2 ausgeben
print(fruits[2])     ##es gibt banana aus
```

**Index** | **Element**
-------|-------
0 | orange
1 | apple
2 | banana
3 | apple
4 | mango

{{% notice note %}}

Wie Sie in diesem Beispiel sehen können, können Listen doppelte Elemente enthalten.

{{% /notice %}}

In Python müssen Listen nicht alle denselben Datentyp haben, sodass eine einzelne Liste eine Kombination aus Strings und Zahlen enthalten kann.

```python
#Listen können auch unterschiedliche Datentypen haben
my_list = ['candy', 10, 2.5]
```

### Länge der Liste

Sie können die Länge der Liste mit der Funktion `len(list)` ermitteln, wobei der Listenname als Parameter übergeben wird.

```python
length = len(fruits)  ##length = 5
```

### Ein Element zur Liste hinzufügen

Sie können Elemente zu einer Liste mit der Funktion `append`, `list.append(x)` hinzufügen, wobei `list` der Name der Liste ist und `x` das Element ist, das Sie anhängen möchten. Es fügt das Element am Ende der Liste hinzu.

```python
#Vorher ist die Liste ['orange', 'apple', 'banana', 'apple', 'mango']
fruits.append('lemon')
#Nun ist die Liste ['orange', 'apple', 'banana', 'apple', 'mango', 'lemon']
```

### Ein Element an einem bestimmten Index einfügen

Wenn Sie steuern möchten, wo Sie ein neues Element einfügen, können Sie ein Element an einer bestimmten Position einer Liste mit der Funktion `list.insert(i, x)` einfügen. Hierbei ist `list` der Name der Liste, `i` der Index, an dem Sie das Element einfügen möchten, und `x` ist das hinzuzufügende Element. Beachten Sie: Dies verschiebt alle Elemente ab Position `i` um einen Index nach hinten.

```python
fruits.insert(1, 'guava')
#Nun ist die Liste ['orange', 'guava', 'apple', 'banana', 'apple', 'mango', 'lemon']
```

### Ein Element aus der Liste entfernen

Die Funktion `list.remove(x)` sucht nach der ersten Instanz des angegebenen Elements `x` und entfernt es aus der Liste.

```python
fruits.remove('apple')
#Nun ist die Liste ['orange', 'guava', 'banana', 'apple', 'mango', 'lemon']
```

{{% notice note %}}

`list.remove(x)` wirft einen ValueError, wenn das Element `x` nicht in der Liste vorhanden ist.

Beachten Sie auch, dass die zweite Instanz von `'apple'` noch in der Liste enthalten ist.

{{% /notice %}}

### Ein Element an einer bestimmten Position entfernen

Die Funktion `list.pop(i)` entfernt das Element am Index `i`.

```python
fruits.pop(0)
#Nun ist die Liste ['guava', 'banana', 'apple', 'mango', 'lemon']
```

{{% notice note %}}

Wenn Sie keinen Index angeben, entfernt `list.pop()` das letzte Element aus der Liste.

{{% /notice %}}

### Die Elemente der Liste umkehren

Mit der Funktion `list.reverse()` werden die Elemente der Liste umgekehrt.

```python
fruits.reverse()
#Nun ist die Liste ['lemon', 'mango', 'apple', 'banana', 'guava']
```

### Das minimale und maximale Element der Liste ermitteln

Die Funktion `min(list)` gibt das minimale Element der Liste zurück, und das maximale Element kann mit der Funktion `max(list)` ermittelt werden. Wenn Ihre Liste aus Zahlen besteht, gibt sie die niedrigste bzw. höchste Zahl in der Liste zurück. Wenn Ihre Liste aus Strings besteht, gibt sie das alphabetisch erste bzw. letzte Element zurück.

```python

my_list = [4, 1, 2, 5, 3]  ## Definieren einer neuen Liste mit Ganzzahlen

print(min(my_list)) ## gibt 1 aus, das minimale Element von my_list
print(max(my_list)) ## gibt 5 aus, das maximale Element von my_list

```
{{% notice note %}}

Wenn Ihre Liste eine Mischung aus Strings und Zahlen ist, führen die Funktionen `min` und `max` zu einem Fehler.

{{% /notice %}}

### Herausforderung

Versuchen wir es jetzt selbst. Beginnen Sie mit der unten stehenden Liste von Früchten. Geben Sie die Liste der Früchte aus und fragen Sie für jede Frucht den Benutzer, ob er sie mag. Wenn er sie mag, behalten Sie sie. Wenn nicht, entfernen Sie sie aus der Liste. Fragen Sie anschließend den Benutzer, welche Frucht in der Liste fehlt. Fügen Sie diese Frucht der Liste hinzu und geben Sie die Anzahl der Früchte aus, die dem Benutzer gefallen.

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/cv4h3m89" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Tipp: Sie müssen den Integer `length` mithilfe der Funktion `str(int)` in einen String umwandeln.