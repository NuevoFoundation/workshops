```markdown
---
title: "Variablen und Datentypen"
description: "Einführung in Typen und Variablen in C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## Variablen: Benenne es!

In der ersten Übung haben wir gelernt, verschiedene Aussagen mit `Console.WriteLine()` und `Console.Write()` auszugeben.

Auch wenn es toll ist, eine Zahl oder einen Satz auszugeben, haben wir ihnen noch keine Bedeutung gegeben. Und wenn wir den Satz oder die Zahl erneut verwenden wollten, müssten wir ihn erneut eingeben.

In C# führen wir das Konzept einer **Variable** für Daten ein. Eine Variable speichert ein Stück Daten mit einem Namen.

Zum Beispiel kann es eine Variable namens `myName` geben, die den Wert `"Ann"` zugewiesen bekommt. Eine andere Variable könnte `age` heißen und die Zahl `12` enthalten.

## Was ist der Typ!

Wie erstellen wir also Variablen in C#, um Daten zu speichern?

Bevor wir lernen, wie man Variablen erstellt, müssen wir das Konzept des **Datentyps** in C# verstehen, oder kurz **Typ**. Ein Typ in C# beschreibt, was gespeichert wird. Wenn du eine Zahlenvariable hast, kann sie nur Zahlen enthalten, keine Sätze oder Symbole. Jede Variable hat ihren eigenen Typ, der festlegt, welche Art von Daten sie enthalten kann.

Zum Beispiel könnten wir eine Variable namens `age` haben, die die Zahl `12` speichert. Wenn du versuchst, das Wort `"twelve"` in `age` zu speichern, wird ein Fehler generiert, da die Variable nur Zahlen kennt.

In C# wird für eine Variable, die ganze Zahlen speichert, der Typ `int` verwendet. Wir deklarieren eine `int`-Variable namens `age` mit dem Wert `3` mit folgender Codezeile:

```
int age = 12;
```
Im Allgemeinen deklarieren wir eine Variable im Format: `[Datentyp] [Variablenname] = [Daten];`.
{{% notice note %}}
Die folgenden sind wichtige Datentypen, die in C# eingebaut sind:

**Typ** | **Beschreibung** | **Beispiele**
--------|-----------|----------
`int` | Ganzzahl | `20`, `30`, `35`
`char` | Zeichen wie ein Symbol oder ein einzelner Buchstabe | `'A'`,`'b'`, `'('`, `']'`
`string` | eine Sequenz von `char` | `"Hallo"`, `"Bonjour"`, `"Hola"`
`bool` | Boolean, hat den Wert entweder `true` oder `false` | `true`, `false`
`double` | Bruchzahlen | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Anhand unseres vorherigen Beispiels deklarieren wir diese Variablen in C#, indem wir Folgendes schreiben:

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

Die letzte Variable ist eine interessante. Sie kann nur den Wert `true` oder `false` haben. Wir werden sehen, dass dies in den fortgeschritteneren Abschnitten dieses Workshops sehr hilfreich sein kann.

## Spiele mit Variablen

Schauen wir uns an, was wir mit Variablen machen können.

Im unten eingebetteten .NET Fiddle-Rahmen: Erstelle eine Kopie des Fiddle, gib diese Zeilen ein und **führe den Code aus**:

```C#
int age = 10;
Console.WriteLine(age); // gibt 10 aus
age = 12; // weist der Variablen age den Wert 12 zu
Console.WriteLine(age); // gibt 12 aus
```
Wir können einer Variablen einen Wert zuweisen, sie referenzieren und dann den Wert ändern.  

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" title="Interaktive Übung zu C#-Variablen" frameborder="0"></iframe>

## Was der Typ -- Hilf Patrick!

Patrick 🐥 ist kein Meister der Datentypen! Er hat sie oft durcheinandergebracht, wenn er Variablen deklariert hat. Lass uns ihm helfen, seine Fehler im folgenden .NET Fiddle zu beheben.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" title="Interaktive Übung zu C#-Datentypen" frameborder="0"></iframe>
```