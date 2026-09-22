```markdown
---
title: "Schleifen"
draft: false
weight: 2
---

## Schleifen in Python

Wenn du eine Aufgabe mehrmals wiederholen möchtest, bietet Python eine einfache Möglichkeit dafür durch Schleifen.  
Es gibt zwei grundlegende Arten von Schleifen in Python: `for`-Schleifen und `while`-Schleifen.

### For-Schleifen

For-Schleifen durchlaufen eine Sequenz. Angenommen, du möchtest eine einfache Aufgabe 5 Mal wiederholen. So würde das aussehen:

Die folgende For-Schleife durchläuft jede Zahl in der Liste [1,2,3,4,5] und weist ihr den Wert `x` zu. Anschließend wird der Code innerhalb der Schleife ausgeführt.

```python
for x in [1,2,3,4,5]:    
    print("Wir sind in Schleife Nummer",x)
```

<iframe title="For-Schleifen - Codebunga" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Was ist, wenn du eine Aufgabe 10 Mal wiederholen möchtest? 100 Mal? 1000 Mal??

Es wäre schwierig, eine Liste mit 1000 Zahlen zu schreiben [1,2,3,4,5,6,..........,998,999,1000]. Es gibt eine Funktion, die diese Liste für dich erstellen kann.

Hier ist ein Beispiel, wie die Liste mit der Funktion `range` erstellt wird:

Der untenstehende Code erstellt eine Liste, die bei 1 beginnt und bei 10 endet:  
```
range(1,11)
```  
Probiere jetzt, die Liste [1,2,3,4,5] im obigen Beispiel durch diese `range`-Funktion zu ersetzen!  

Die Liste in der For-Schleife muss übrigens nicht nur Zahlen enthalten, sie kann alles sein! Hier ist ein weiteres Beispiel, was du damit machen kannst:

```python
fruits = ["apfel","banane","orange"]

for x in fruits:
    print(x)
```

<iframe title="For-Schleifen - Codebunga 2" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### While-Schleifen

While-Schleifen sind ähnlich wie For-Schleifen, aber anstatt eine Sequenz zu durchlaufen, wiederholen sie sich, solange eine bestimmte Bedingung erfüllt ist.  
Zum Beispiel erstellen wir eine While-Schleife, die sich 5 Mal wiederholt:

```python
count = 0

while count < 5:
    print("Der aktuelle Wert von count ist", count)
    count += 1  # Das ist das gleiche wie count = count + 1
```

<iframe title="While-Schleifen - Codebunga" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Wie du siehst, wird der gesamte Code unterhalb der While-Schleife ausgeführt, solange die Variable `count` kleiner als 5 ist.

Aufgepasst! Stelle sicher, dass die Bedingung irgendwann `False` wird, sonst wird die Schleife unendlich weiterlaufen.

### Break-Anweisungen

Du hast bereits gelernt, dass For-Schleifen und While-Schleifen eine Sequenz durchlaufen, bis sie das Ende erreichen oder bis eine Bedingung erfüllt ist.

Es gibt eine weitere Möglichkeit, diese Schleifen vorzeitig zu beenden – und zwar mit der `break`-Anweisung. Diese ermöglicht es dir, Schleifen vorzeitig zu verlassen, egal ob sie eine For-Schleife oder eine While-Schleife sind.

Hier ist ein Beispiel für die Verwendung von `break` innerhalb einer While-Schleife:

```python
count = 0

while True:  # Dadurch läuft die While-Schleife für immer! Es sei denn, irgendwo in der Schleife wird ein Break angegeben.
    print("count ist", count)
    
    if (count == 10): # Wenn count gleich 10 ist, verlasse die While-Schleife
        print("Die Schleife wird beendet!")
        break
    
    count += 1  # Das bedeutet count = count + 1
```

<iframe title="Break-Anweisungen - Codebunga" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Herausforderungen

1. Gegeben eine Liste von Lebensmitteln, schreibe ein Programm, das "Ich mag [Name des Lebensmittels]" ausgibt, es sei denn, es handelt sich um das Lieblingsessen, welches du am Anfang erfragst:

```python
foodList = ["äpfel", "eis", "pizza", "bananen", "karotten", "kürbis", "gurken", "sandwich", "haferflocken", "kekse", "kuchen", "spinat", "kale"]
```

2. Gegeben eine große Liste wie die untenstehende, schreibe ein Programm, das eine bestimmte Zahl aus dieser Liste finden kann:

```python
numList = [69, 430, 363, 80, 166, 476, 250, 38, 84, 405, 41, 302, 480, 57, 155, 17, 350, 87, 313, 36, 191, 367, 163, 167, 185, 93, 131, 314, 444, 452, 47, 457, 28, 21, 405, 350, 241, 121, 411, 152, 244, 207, 199, 371, 193, 4, 286, 482, 496, 283, 23, 466, 8, 84, 47, 231, 112, 329, 328, 85, 208, 161, 42, 251, 277, 207, 496, 3, 137, 138, 436, 447, 442, 313, 479, 464, 191, 19, 78, 333, 480, 36, 378, 232, 438, 451, 139, 444, 392, 75, 245, 151, 225, 50, 369, 49, 73, 325, 430, 335]
```  

Beispielsweise kannst du den Benutzer auffordern, eine Zahl in die Konsole einzugeben und dann ausgeben, ob sie gefunden wurde.  
Hinweis