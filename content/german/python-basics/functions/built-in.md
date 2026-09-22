```markdown
---
title: "Eingebaute Funktionen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

Es gibt viele eingebaute Funktionen in Python, die den Schreibaufwand beim Codieren erheblich erleichtern können. Lassen Sie uns hier einige davon besprechen.

# sort()
Diese Funktion wird verwendet, um die Werte in Datenstrukturen wie Arrays und Listen zu sortieren.
```python
arr = [8,5,1,4,6]
arr.sort()
print('Das sortierte Array ist:', arr)
#Ausgabe: Das sortierte Array ist [1,4,5,6,8]
```

# find()
Gibt die erste Vorkommen des Eingabewerts (Suchmuster) an, das an die `find()`-Funktion im gegebenen String übergeben wird.
```python
str1 = "Hello World"
index = str1.find("World")
print(index) #Ausgabe: 6
```

# len()
`len()` hilft, die Größe der gegebenen Datenstruktur zu ermitteln.
```python
arr = [10,5,4,2,3]
print(len(arr)) #Ausgabe: 5
```

# isdigit()
Diese Funktion gibt `True` zurück, wenn der als Argument übergebene String nur aus Ziffern besteht; ansonsten gibt sie `False` zurück.
```python
s = "123";  
print(s.isdigit()) #Ausgabe: True

s = "Hello World";
print(s.isdigit()) #Ausgabe: False

s = "123Hello"
print(s.isdigit()) #Ausgabe: False, da es Buchstaben zusammen mit Ziffern enthält
```

# reverse()
Diese Funktion wird verwendet, um den Inhalt eines Arrays oder einer Liste umzukehren.
```python
arr = [5, 6, 7, 8, 9];
arr.reverse();
print(arr) #Ausgabe: [9,8,7,6,5]
```

# replace()
Diese Funktion ersetzt das erste an die Funktion übergebene Argument durch das zweite Argument in einem gegebenen String.

```python
initial_str = "My name is Harry. Harry is a good boy."
final_str = initial_str.replace("Harry", "Potter")
print(final_str) #Ausgabe: My name is Potter. Potter is a good boy.
```

# append()
Diese Funktion wird verwendet, um eine Zahl, ein Zeichen oder ein Element eines beliebigen Datentyps an das Ende einer Liste oder eines Arrays hinzuzufügen.
```python
arr = [1,2,3,4,5];
arr.append(6);
print(arr) #Ausgabe: [1,2,3,4,5,6]

arr = ['Harry','Ram',1,2]
arr.append("Jenifer")
print(arr) #Ausgabe: ['Harry','Ram',1,2,'Jenifer']
```

# remove()
Entfernt das erste Vorkommen des übergebenen Arguments im gegebenen Objekt. Wenn versucht wird, ein Element zu entfernen, das nicht in der Liste vorhanden ist, wird eine Ausnahme angezeigt, die besagt, dass das Element nicht in der Liste ist.
```python
arr = [1,1,2,3,3]  
arr.remove(1)  
print(arr) #Ausgabe: [1,2,3,3]

arr.remove(4) #Löst eine Ausnahme aus, dass das Element nicht in der Liste ist
```

### Herausforderung 1
Erstellen Sie ein Array namens `arr`.

- Initialisieren Sie es mit `[1,2,3,4,5]`.

- Fügen Sie die Zahl `6` hinzu und geben Sie es aus.

- Kehren Sie `arr` um und geben Sie es aus.

- Sortieren Sie `arr` und geben Sie es aus.

- Geben Sie die Länge von `arr` aus.

- Entfernen Sie das Element 6 aus `arr` und geben Sie es aus.

- Geben Sie die Länge von `arr` aus.

#### Erwartete Ausgabe
```Ausgabe
    [1,2,3,4,5,6]
    [6,5,4,3,2,1]
    [1,2,3,4,5,6]
    6
    [1,2,3,4,5]
    5
```

### Herausforderung 2
- Initialisieren Sie einen String `s` mit "Hello all.Hello people".

- Finden Sie das Vorkommen des Wortes `Hello` im String `s` und geben Sie es aus.

- Ersetzen Sie das Wort `Hello` durch `Hi` in `s`.

- Überprüfen Sie, ob der String `s` nur aus Ziffern besteht, und geben Sie das Ergebnis aus.

#### Erwartete Ausgabe
```Ausgabe
    0
    Hi all.Hi people.
    False
```

<iframe title="Erwartete Ausgabe - Codebunga" src="https://codebunga.com/embed/pjz7g5n5" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```