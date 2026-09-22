---
title: "Python: Grundlagen – Lösungsheft"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies sind Beispielantworten. Viele Herausforderungen haben mehrere gültige Antworten, besonders diejenigen, die Sie auffordern, eigene Beispiele zu erstellen. Ihre Lösung ist richtig, wenn sie die erwartete Ausgabe erzeugt!
{{% /notice %}}

## Grundlagen

### Ausgabe auf der Konsole – Aufgabe 1

```python
print("Hello, World!")
```

Ausgabe:
```
Hello, World!
```

### Ausgabe auf der Konsole – Aufgabe 2

Fügen Sie eine zweite `print`-Anweisung mit beliebigem Text hinzu:

```python
print("Hello, World!")
print("Ich lerne gerade Python!")
```

### Variablen – Aufgabe

Verwenden Sie `comp = "Computer"` und `five = 5`, um die folgende Ausgabe zu erzeugen:

```python
comp = "Computer"
five = 5
print(comp)
print(five)
print(comp + comp)
print(five + five)
print(comp + comp + comp)
print(five + five + five)
```

Ausgabe:
```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

### Eingaben von der Konsole – Aufgabe

```python
print("Willkommen!")
print("Wie kann ich Ihnen heute helfen?")
value = input()
print("Sie haben gefragt: " + value + "?")
print("Ich kenne die Antwort auf " + value + " nicht. Auf Wiedersehen!")
```

Beispielausgabe (wenn der Benutzer "Was ist Python" eingibt):
```
Willkommen!
Wie kann ich Ihnen heute helfen?
Sie haben gefragt: Was ist Python?
Ich kenne die Antwort auf Was ist Python nicht. Auf Wiedersehen!
```

## Datentypen

### Strings – Aufgabe 1

Verbinden Sie Ihren Vor- und Nachnamen:

```python
first = "Nuevo"
last = "Foundation"
print(first + " " + last)
```

Ausgabe:
```
Nuevo Foundation
```

### Strings – Aufgabe 2

Drei Möglichkeiten, "Nuevo Foundation" mit genau zwei `+`-Symbolen auszugeben:

```python
print("Nuevo" + " " + "Foundation")
print("Nuevo " + "Foun" + "dation")
print("Nue" + "vo Foundati" + "on")
```

Es gibt viele richtige Lösungen! Jede Kombination, die "Nuevo Foundation" mit genau zwei `+`-Symbolen erzeugt, ist korrekt.

### Zahlen – Aufgabe 1

```python
print(2 - 19)
print((3 + 5) * 6)
print((13 + 5 * 8) / (6 - (3 + 7)))
```

Ausgabe:
```
-17
48
-13.25
```

Rechenweg für den dritten Ausdruck:
- Zähler: 13 + (5 * 8) = 13 + 40 = 53
- Nenner: 6 - (3 + 7) = 6 - 10 = -4
- Ergebnis: 53 / -4 = -13.25

### Zahlen – Aufgabe 2

{{% notice warning %}}
Im Workshoptext steht `"527 time 199 is: __"` – dies scheint ein Tippfehler für "times" im ursprünglichen Workshop zu sein. Die Lösung unten entspricht genau dem Workshoptext.
{{% /notice %}}

```python
print("527 time 199 is: " + str(527 * 199))
```

Ausgabe:
```
527 time 199 is: 104873
```

Denken Sie daran, `str()` zu verwenden, um die Zahl in eine Zeichenkette umzuwandeln, bevor sie mit `+` kombiniert wird.

### Wahrheitswerte (Booleans) – Aufgabe 1

{{% notice warning %}}
Der zweite Ausdruck im Workshop-Code hat eine falsch platzierte Klammer: `print((3 + 5) * 6) == (65 - 17)`. Dies gibt `48` aus, zeigt aber nicht das boolesche Ergebnis. Die korrigierte Version unten platziert den Vergleich innerhalb von `print()`.
{{% /notice %}}

```python
print(5 + 8 < 10)
print((3 + 5) * 6 == (65 - 17))
```

Ausgabe:
```
False
True
```

- 5 + 8 = 13, und 13 < 10 ist `False`
- (3 + 5) * 6 = 48, und 65 - 17 = 48, daher ist 48 == 48 `True`

### Wahrheitswerte – Aufgabe 2

```python
print(54 < (10 + 32))
print((37 / 5) != 7)
print("Hello" + "World" == "Hello World")
print(False == False)
```

Ausgabe:
```
False
True
False
True
```

- 54 < 42 ist `False`
- 37 / 5 = 7.4, und 7.4 != 7 ist `True`
- "Hello" + "World" = "HelloWorld" (ohne Leerzeichen!), daher ist "HelloWorld" == "Hello World" `False`
- False == False ist `True`

### Wahrheitswerte – Theoriefragen

```python
print((11 - 2 < 10) and (7 + 3 > 10))
print((True or 3 < 1) and (False or 3 > 1))
```

Ausgabe:
```
False
True
```

- (11 - 2 < 10) = (9 < 10) = `True`, (7 + 3 > 10) = (10 > 10) = `False`. True `and` False = `False`
- (True `or` False) = `True`, (False `or` True) = `True`. True `and` True = `True`

### Wahrheitswerte – Aufgabe 3

Diese Aufgabe ist offen gestaltet. Hier sind einige Beispielausdrücke, die Sie ausprobieren können:

```python
print(100 > 99)           # True
print(len("hallo") == 5)  # True
print(10 % 3 == 0)        # False (10 geteilt durch 3 hat den Rest 1)
print(not True)           # False
```

Jeder gültige boolesche Ausdruck ist korrekt!

## Kontrollstrukturen und Schleifen

### Kontrollstrukturen – Aufgabe

```python
print("Wie heißt du?")
name = input()
if name == "Nuvi":
    print("Das ist auch mein Name!")
else:
    print("Schön, dich kennenzulernen, " + name + "!")
```

Ihr Name und die Antworten können unterschiedlich sein. Wichtig ist der `if`/`else`-Aufbau.

### Else-if-Str