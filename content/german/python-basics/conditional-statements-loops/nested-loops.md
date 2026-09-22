---
title: "Verschachtelte Schleifen"
description: "Erweiterte Anwendungen von Schleifen"
date: 2020-07-16T00:00:00Z
weight: 4
---


### Verschachtelte Schleifen
*Verschachtelte Schleifen* bauen auf dem auf, was wir über For-Schleifen und While-Schleifen in der vorherigen Übung gelernt haben. Es könnte hilfreich sein, die <a href="../loops/" target="blank">Seite zu For-Schleifen und While-Schleifen</a> noch einmal zu überprüfen, bevor wir fortfahren.

In diesem Abschnitt verwenden wir eine Schleife innerhalb einer anderen, was als *verschachtelte Schleife* bezeichnet wird.
<hr/>

### Verschachtelte While-Schleifen
```python
#Das ist das Format für eine verschachtelte While-Schleife
while expressionA:
    while expressionB:
        statement(B)
    statement(A)
```
In der oben angezeigten `while`-Schleife wird der gesamte Block übersprungen, wenn expressionA den Wert `False` ergibt. Wenn expressionA den Wert `True` ergibt, wird die innere While-Schleife überprüft und expressionB ausgewertet. Ergibt expressionB den Wert `True`, wird statement(B) ausgeführt. Wenn expressionB den Wert `False` ergibt, überspringen wir die innere While-Schleife und springen zu statement(A).

Wenn expressionA den Wert `False` ergibt, wird keine der Aussagen ausgeführt; statement(A) und statement(B) werden beide nur dann ausgeführt, wenn sowohl expressionA als auch expressionB den Wert `True` ergeben.

Werfen wir einen Blick auf ein Beispiel für eine verschachtelte While-Schleife.
```python
#Das ist das Beispiel für eine verschachtelte While-Schleife.
x = 0
y = 0
#Das Folgende ist unsere äußere Schleife
while x < 3:
    #Drucken, falls "x < 3" True ergibt
    print("Durchlaufe äußere While-Schleife, x ist", x, "y ist", y, sep = " ")
    #Das Folgende ist unsere innere Schleife
    while y < 5:
        #Drucken, falls "y < 5" True ergibt
        print("Durchlaufe innere While-Schleife, x ist", x, "y ist", y, sep = " ")
        y += 1
    #Der folgende Code wird nach Abschluss jeder inneren Schleife ausgeführt.
    x += 1
    y = 0
```
Das ist die Ausgabe unseres Beispiels.

```output
Durchlaufe äußere While-Schleife, x ist 0 y ist 0
Durchlaufe innere While-Schleife, x ist 0 y ist 0
Durchlaufe innere While-Schleife, x ist 0 y ist 1
Durchlaufe innere While-Schleife, x ist 0 y ist 2
Durchlaufe innere While-Schleife, x ist 0 y ist 3
Durchlaufe innere While-Schleife, x ist 0 y ist 4
Durchlaufe äußere While-Schleife, x ist 1 y ist 0
Durchlaufe innere While-Schleife, x ist 1 y ist 0
Durchlaufe innere While-Schleife, x ist 1 y ist 1
Durchlaufe innere While-Schleife, x ist 1 y ist 2
Durchlaufe innere While-Schleife, x ist 1 y ist 3
Durchlaufe innere While-Schleife, x ist 1 y ist 4
Durchlaufe äußere While-Schleife, x ist 2 y ist 0
Durchlaufe innere While-Schleife, x ist 2 y ist 0
Durchlaufe innere While-Schleife, x ist 2 y ist 1
Durchlaufe innere While-Schleife, x ist 2 y ist 2
Durchlaufe innere While-Schleife, x ist 2 y ist 3
Durchlaufe innere While-Schleife, x ist 2 y ist 4
```

#### Fragen
Kannst du herausfinden, wie sich die Werte von x und y ändern, und erklären, warum das so ist?

(**Hinweis**: Wie oft durchlaufen wir die äußere und innere Schleife jeweils?)

<hr/>

### Herausforderung Eins
Versuche, die Ganzzahlen in der verschachtelten While-Schleife zu ändern und die Ausgaben vorherzusagen. Führe dann den Code aus und beobachte die Ausgaben. Stimmen sie mit deinen Vorhersagen überein?

<iframe title="Herausforderung Eins - Codebunga" src="https://codebunga.com/embed/wgwzwt4z" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br/><br/>
<hr/>

### Verschachtelte For-Schleifen

```python
#Das ist das Format für eine verschachtelte For-Schleife
for variableA in rangeA:
   for variableB in rangeB:
      statements(B)
   statements(A)
```
In der oben angezeigten `for`-Schleife wird der gesamte Block übersprungen, wenn variableA nicht in rangeA ist. Wenn variableA in rangeA ist, wird zur inneren For-Schleife gewechselt. Ist variableB in rangeB, wird statement(B) ausgeführt. Ist variableB nicht in rangeB, überspringen wir die innere For-Schleife und setzen die äußere Schleife fort.

Wenn variableA nicht in rangeA ist, wird keine der Aussagen ausgeführt; statement(B) und statement(A) werden beide nur dann ausgeführt, wenn variableA in rangeA und variableB in rangeB sind.

Schauen wir uns ein Beispiel an.

```python
#Das ist das Beispiel für eine verschachtelte For-Schleife
#Das Folgende ist unsere äußere Schleife
for n in range(0, 3):
    #Das Folgende ist unsere innere Schleife
    for m in range(0, 3):
        #Drucken, falls m in range(0, 3) ist
        print("(", n, ",", m, ")", end = " ")
    #Drucken, falls n in range(0, 3) ist
    print("")
```
Das ist die Ausgabe unseres Beispiels.

```output
( 0 , 0 ) ( 0 , 1 ) ( 0 , 2 ) 
( 1 , 0 ) ( 1 , 1 ) ( 1 , 2 ) 
( 2 , 0 ) ( 2 , 1 ) ( 2 , 2 ) 
```

#### Fragen
Kannst du versuchen, das Druckmuster zu erklären?

(**Hinweis**: Wie oft durchlaufen wir die äußere und innere Schleife jeweils?)

<hr/>

