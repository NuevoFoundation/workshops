---
title: "Bedingte Anweisungen"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 1
---

Jetzt, da wir die Grundlagen von Ausgabebefehlen, Variablen und der Eingabe von Benutzerdaten kennen, können wir all diese großartigen Fähigkeiten mit bedingten Anweisungen kombinieren. Bedingte Anweisungen ermöglichen es dem Computer, basierend auf dem **Wert** eines Ausdrucks **Entscheidungen** zu treffen. Im echten Leben verwenden wir ständig bedingte Anweisungen, um Entscheidungen zu treffen! Zum Beispiel: Wenn es draußen regnet, benutze ich einen Regenschirm. In diesem Beispiel habe ich das Wetter draußen bewertet und da es geregnet hat, habe ich die sequentielle Entscheidung getroffen, einen Regenschirm zu benutzen.

Welche bedingten Anweisungen fallen dir ein, die du im Alltag verwendest?

# Wenn-Anweisungen

Wir beginnen mit einer Wenn-Anweisung in ihrer einfachsten Form! Wenn man sich das Beispiel aus dem echten Leben ansieht, erkennt man bestimmte Wörter, die auch in Programmiersprachen verwendet werden. **Wenn** es draußen regnet, benutze ich einen Regenschirm. `if` (wenn) sagt uns, dass wir eine Entscheidung treffen müssen. Regnet es? Diese Frage nennt man den Ausdruck. Wenn es regnet, benutze ich einen Regenschirm. Das ist eine Anweisung, die gilt, wenn der Ausdruck wahr ist.

```python
if (expr):
    statement
```

Wir sehen oben drei verschiedene Teile:

1. If – dies teilt dem Computer mit, dass wir eine Entscheidung basierend auf dem Ausdruck innerhalb der Klammern treffen.
2. Expr – dies stellt den Ausdruck dar, den wir bewerten. Wenn der Ausdruck "wahr" ist, wird der Computer die Wenn-Anweisung betreten und die Anweisung ausführen.
3. Statement – was der Computer ausführt, wenn der Ausdruck "wahr" ist.

```python
x = 0
y = 5

if (x<y):       # wahr
    print('ja')
if (y<x):       # falsch
    print('ja')
if (x == 10):   # falsch
    print('ja')
```

Lassen wir uns das obige Beispiel aufschlüsseln und prüfen, warum einige Anweisungen "wahr" oder "falsch" sind.

Wir haben zwei Variablen `x` und `y`, und ihnen wird jeweils ein Wert zugewiesen. In der ersten Wenn-Anweisung prüfen wir, ob der Wert von `x` kleiner ist als der Wert von `y`. Da `0` kleiner ist als `5`, ist dies wahr! Daher wird die erste `if`-Anweisung "ja" ausgeben.

Wir sehen jedoch, dass `y` nicht kleiner ist als `x`, daher evaluiert dies zu `falsch`. Der innere Teil der `if`-Anweisung wird also nicht ausgeführt. Dasselbe gilt für die Prüfung, ob `x` gleich `10` ist. Wir sehen, dass `x` gleich `0` ist, daher ist dieser Ausdruck `falsch`, und der innere Teil der `if`-Anweisung wird nicht ausgeführt.

# Sonst-Anweisungen

Jetzt, da wir wissen, wie man Wenn-Anweisungen verwendet, um bedingt eine einzelne Anweisung oder mehrere Anweisungen auszuführen, sehen wir, was wir `sonst` noch tun können!

Manchmal muss man eine Bedingung bewerten, um entsprechend zu handeln, wenn sie `wahr` ist, aber wenn sie `falsch` ist, handelt man anders. Hier ist die einfachste Form der `else`-Anweisung.

```python
if (expr):
    statement1
else: 
    statement2
```    

Das ist wirklich wie die `if`-Anweisung! Wenn jedoch die `if`-Anweisung `falsch` ist (nicht wahr), wird das Programm automatisch die `statement2` innerhalb der `else`-Anweisung ausführen.

Ein Beispiel aus dem echten Leben wäre: Wenn ich hungrig bin, esse ich. Sonst (mit anderen Worten, ich bin nicht hungrig), esse ich nicht. Schauen wir uns das im Python-Code an!

```python
if (hungry):
    eat
else:
    dont_eat
```

### Herausforderung

Lassen wir uns alles, was wir bisher gelernt haben, zusammenfügen! Mal sehen, ob wir ein Programm erstellen können, das den Benutzer nach seinem Namen fragt. Der Benutzer kann seinen Namen in die Konsole eingeben. Dann kann der Computer entscheiden, ob sein Name gleich deinem Namen ist, und eine Antwort ausgeben. Andernfalls wird eine andere Antwort ausgegeben!

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/y8b9pj44" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Tipp: Gehe die verschiedenen Pfade durch, die ein Computer nehmen kann! Stelle sicher, dass du die Bedingungen für `if` und `else` identifizierst.