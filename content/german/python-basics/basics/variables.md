```markdown
---
title: "Variablen"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 4
--- 

In einer vorherigen Übung haben wir gelernt, verschiedene Inhalte mit `print("")` auszugeben. Während es großartig ist, eine Zahl oder einen Satz auszugeben, haben wir ihnen keine Bedeutung zugewiesen. Variablen sind einfach Namen, die wir Werten wie Zeichenketten, Zahlen und Booleans geben können. Hier ist, wie man in Python eine Variable namens s erstellt. Wir sagen, s ist eine Zeichenkette mit dem Wert `"Hello, World!"`. 

```python
s = "Hello, World!"
x = 88
happy = True
```
Drücke auf Ausführen. 

![Screenshot, wie das Variablen-Beispiel in Codebunga aussieht](../../img/variables.png "Bild, wie Variablen in Codebunga aussehen")

Beachte, dass Variablen nicht in die Konsole ausgegeben werden. Stattdessen speichert die Variable einfach die Zeichenkette, Zahl oder den Boolean im Speicher des Computers. Wir können diese Variablen in anderen Anweisungen verwenden. Zum Beispiel würde der folgende Code `"Hello Nuevo Foundation"` in die Konsole ausgeben:

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1 + " " + str2)
```

Du kannst auch folgendes tun, um Zeichenketten zusammen mit Leerzeichen zwischen den Wörtern auszugeben.

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1, str2)
```
## Was für ein Typ!

Bevor wir lernen, wie man Variablen erstellt, müssen wir das Konzept des **Datentyps** verstehen. Der Typ beschreibt, was in der Box gespeichert wird.

Python ist eine dynamisch typisierte Sprache, das bedeutet, im Gegensatz zu Sprachen wie Java musst du den Typ der Variablen nicht angeben, bevor du ihr einen Wert zuweist. Und wenn du z. B. einen Integer in der Box hast und ihn entfernst, um eine Zeichenkette hineinzulegen, erlaubt dir Python das. Aber du musst die Variable basierend auf ihrem Typ verwenden.


{{% notice note %}}
Die folgenden sind die wichtigen Datentypen:

**Typ** | **Beschreibung** | **Beispiele**
--------|-----------|----------
`integer` | Ganzzahl | `20`, `30`, `35`
`string` | eine Folge von `Zeichen` | `"Hello"`, `"Bonjour"`, `"Hola"`
`boolean` | hat entweder den Wert `True` oder `False` | `True`, `False`
`float` | Bruchzahlen | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Lass uns die drei Variablen aus dem ersten Beispiel erneut betrachten und ihre Datentypen identifizieren. `s` ist eine Zeichenkette, `x` ist ein Integer und `happy` ist ein Boolean.

### Herausforderung

- Erstelle zwei neue Variablen: Eine Variable namens `comp`, die die Zeichenkette `"Computer"` speichert. 
- Eine Variable namens `five`, die die Zahl `5` speichert.

Verwende anschließend die Variablen und das, was du in den vorherigen Aktivitäten gelernt hast, um Folgendes in die Konsole auszugeben. Du _musst_ die Variablen verwenden!

    Computer
    5
    ComputerComputer
    10
    ComputerComputerComputer
    15

{{% notice tip %}}

Hinweis: Wenn du feststeckst, erwäge den Einsatz des Operators `+`. Denke daran, dass du die Variablen **comp** und **five** mehrfach in derselben Zeile verwenden kannst!

{{% /notice %}}

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/eceyb8yx" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```