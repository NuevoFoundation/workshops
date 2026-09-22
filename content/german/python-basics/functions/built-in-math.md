```markdown
---
title: "Eingebaute Mathematikfunktionen"
date: 2019-07-28T11:45:38-07:00
draft: false
weight: 3
---

Python bietet eine Reihe wichtiger eingebauter Funktionen, die wir verwenden können, ohne die Funktionsdefinition bereitzustellen. In diesem Abschnitt lernen wir einige der eingebauten Mathematikfunktionen kennen, mit denen Sie mathematische Aufgaben mit Zahlen durchführen können.

Die Funktionen `max()` und `min()` liefern uns die größten und kleinsten Werte in einer Liste:

```python
x = min(20, 10, 50, 25)		#x = 10
print(x)
y = max(20, 10, 50, 25)		#y = 50
print(y)
```

Die Funktion `abs()` liefert uns den absoluten (positiven) Wert einer Zahl:

```python
x = abs(-34)		         #x = 34
print(x)
y = abs(90)			         #y = 90
print(y)
```

Die Funktion `pow(a, b)` liefert uns den Wert von `a` hoch `b` (a<sup>b</sup>):

```python
x = pow(3,4)		        #x = 81
print(x)
```

### Herausforderung

Lassen Sie uns alles zusammenfügen! Schaffen wir ein Programm, das 5 Zahlen vom Benutzer annimmt und den Wert des Minimums dieser Zahlen, hoch Maximum, ausgibt. Zum Beispiel, bei den Zahlen 2, 7, 4, 11, 9 sollte 2<sup>11</sup> zurückgegeben werden. Bonuspunkte, wenn Sie das Programm in Funktionen unterteilen können!

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/3sw68wix" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```