```yaml
---
title: "Zahlen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---
```

Der Computer kann auch Mathematik. Verwende `print()`, um das Ergebnis der mathematischen Ausdrücke auszugeben. Für Zahlen sind keine Anführungszeichen erforderlich! Im Gegensatz zu Strings kannst du mit Zahlen rechnen.

```python
print(7-3)  #gibt 4 aus
print(5 * -6 + 7)   #gibt -23 aus
print(24 * (8-3) / 6)   #gibt 20.0 aus
```

{{% notice note %}}
In Python 3 gibt der `/`-Operator immer ein Dezimalergebnis zurück. Um eine Ganzzahl-Division auszuführen (bei der der Rest verworfen wird), verwende stattdessen `//`.

Zum Beispiel:

`15 / 4` ergibt `3.75`  
`15 // 4` ergibt `3`

{{% /notice %}}

Du kannst auch versuchen, die mathematischen Symbole zu verwenden, um eigene Ausdrücke zu erstellen!

| Symbol          | Verwendung     | Symbol      | Verwendung    |
| --------------- | -------------- | ----------- | ------------- |
| `+`             | Addieren       | `*`         | Multiplizieren | 
| `-`             | Subtrahieren   | `/`         | Dividieren     |

### Herausforderung 1

Versuche, die Antworten zu den folgenden Ausdrücken mit Python herauszufinden. Gib das Ergebnis aus (<b>achte darauf, keine Klammern zu vergessen</b>):

- 2 - 19  
- (3 + 5) * 6  
- (13 + 5 * 8) / (6 - (3 + 7))  

### Herausforderung 2

Kannst du diese Aussage ausgeben? `"527 mal 199 ergibt: __"`

Du wirst die Leerstelle mit der Antwort auf `(527 * 199)` ausfüllen. Wenn du einen String und eine Zahl zusammen ausgeben möchtest, musst du die Zahl zuerst in einen String umwandeln.

Hier ein Beispiel: <font color="#005a9c">print</font>(`"Hallo, Welt!"` + str(5))

{{% notice tip %}}

Mit `str(5)` wird die Zahl in den String `"5"` umgewandelt. Etwas von einem Typ in einen anderen umzuwandeln, nennt man "Casting".

{{% /notice%}}

{{% notice info %}}

#### Fun Fact: Zufallszahlen

So kannst du eine Zufallszahl zwischen 1 (einschließlich) und 10 (einschließlich) ausgeben:

```python
# Diese Zeile importiert die benötigte Bibliothek
from random import randint
# Diese Zeile gibt eine Zufallszahl zwischen 1 (einschließlich) und 10 (einschließlich) aus
print(randint(1,10))
```

Möchtest du mehr wissen? Bitte um Hilfe oder stöbere im Internet herum! Jeder Programmierer liebt Suchmaschinen!

Insbesondere kannst du versuchen zu verstehen, was die Wörter <font color="#005a9c">from</font> und <font color="#005a9c">import</font> bedeuten. Auf diese Wörter kommen wir später im Projekt zurück.

{{% /notice %}}

<iframe title="Fun Fact: Zufallszahlen - Codebunga" src="https://codebunga.com/embed/nuthi3gj" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>