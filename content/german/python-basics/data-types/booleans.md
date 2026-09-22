```markdown
---
title: "Booleans"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

Booleans sind <font color="#005a9c">Wahr</font> oder <font color="#005a9c">Falsch</font> Aussagen. Anders als Zeichenketten oder Zahlen speichern <b>Booleans</b> Wahrheitswerte: Ist das, was ich sage, wahr oder falsch?

Zum Beispiel, wenn ich sage: "Du bist ein Roboter", kann ein Boolean speichern, ob diese Aussage wahr ist. In diesem Fall, da du kein Roboter bist (hoffentlich!), würde <font color="#005a9c">Falsch</font> gespeichert.

Was sind die Boolean-Antworten auf diese Fragen über dich?

1. Ich bin ein Mensch. _______
2. Ich habe 25 Finger. _______
3. Ich mag Kekse. _______
4. Meine Lieblingsfarbe ist Blau. ______

Die häufigsten Formen von Boolean-Operatoren sind Vergleiche wie kleiner als oder größer als. Wie diese in Python geschrieben werden, ist unten aufgeführt.

| Operator | Beschreibung         | Operator | Beschreibung              |
| -------- | --------------------- | -------- | ------------------------ |
| `<`      | Kleiner als           | `>`      | Größer als               |
| `<=`     | Kleiner oder gleich   | `>=`     | Größer oder gleich       |
| `==`     | Gleich                | `!=`     | Nicht gleich             |

### Herausforderung 1
Wie üblich, verwende `print`, um die Ergebnisse der folgenden Ausdrücke auszugeben:

```python
print(5 + 8 < 10)
print(((3 + 5) * 6) == (65 - 17))
```

Die erste Aussage sollte <font color="#005a9c">Falsch</font> zurückgeben. Und die zweite sollte <font color="#005a9c">Wahr</font> zurückgeben.

![alt text](../../img/booleans.png "Bild des obigen Beispiels, das zeigt, dass die erste falsch und die zweite wahr ist.") 

### Herausforderung 2
Versuche, die Antworten auf die folgenden Ausdrücke mit `print` auszugeben. Wenn die Ergebnisse für eine dieser Aussagen keinen Sinn ergeben, frage bitte um Hilfe! 

- 54 < (10 + 32)
- (37 / 5) != 7
- "Hello" + "World" == "Hello World"
- <font color="#005a9c">Falsch</font> == <font color="#005a9c">Falsch</font>

### Herausforderung 3 
Versuche, eigene Ausdrücke zu erstellen! 

### Spaßfakt: Booleans mit AND- und OR-Operatoren verbinden

Du kannst Boolean-Ausdrücke auch mit dem AND- und OR-Operator verbinden. Hier ist eine Tabelle, die beschreibt, was passiert, wenn wir Booleans miteinander verbinden:

Ausdruck       | Ergebnis 
---------------|----------
<font color="#005a9c">Wahr</font> und <font color="#005a9c">Wahr</font>  | <font color="#005a9c">Wahr</font>
<font color="#005a9c">Wahr</font>  und <font color="#005a9c">Falsch</font> | <font color="#005a9c">Falsch</font>
<font color="#005a9c">Falsch</font> und <font color="#005a9c">Wahr</font> | <font color="#005a9c">Falsch</font>
<font color="#005a9c">Falsch</font> und <font color="#005a9c">Falsch</font> | <font color="#005a9c">Falsch</font>
<font color="#005a9c">Wahr</font>  oder <font color="#005a9c">Wahr</font>  | <font color="#005a9c">Wahr</font>
<font color="#005a9c">Wahr</font>  oder <font color="#005a9c">Falsch</font> | <font color="#005a9c">Wahr</font>
<font color="#005a9c">Falsch</font> oder <font color="#005a9c">Wahr</font>  | <font color="#005a9c">Wahr</font>
<font color="#005a9c">Falsch</font>  oder <font color="#005a9c">Falsch</font> | <font color="#005a9c">Falsch</font>

Zusammengefasst verlangt AND, dass beide Boolean-Ausdrücke wahr sind, während OR nur einen der beiden Boolean-Ausdrücke als wahr benötigt. Hier sind einige weitere Beispiele:

- (5 < 8) und (9 != 10) ergibt <font color="#005a9c">Wahr</font>, da sowohl 5 kleiner als 8 ist, als auch 9 nicht gleich 10 ist.
- (8 <= 2) oder ("h" + "e" == "he") ergibt <font color="#005a9c">Wahr</font>, da "h" + "e" zu "he" führt, obwohl 8 nicht kleiner oder gleich 2 ist.
- (6 != 2 * 3) oder (8 < 2 * 4) ergibt <font color="#005a9c">Falsch</font>, da sowohl 6 nicht ungleich 2 * 3 ist als auch 8 nicht kleiner als 2 * 4 ist. Beide ergeben <font color="#005a9c">Falsch</font>.

#### Was denkst du, ergeben die folgenden Ausdrücke?

- (11-2 < 10) und (7+3 > 10)
- (<font color="#005a9c">Wahr</font> oder 3 < 1) und (<font color="#005a9c">Falsch</font> oder 3 > 1)

<iframe title="Was denkst du, ergeben die folgenden Ausdrücke? - Codebunga" src="https://codebunga.com/embed/c2vqd36f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```