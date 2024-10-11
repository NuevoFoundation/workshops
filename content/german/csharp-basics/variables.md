---
title: "Variablen und Datentypen"
description: "Einführung in Typen und Variablen in C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## Variablen: Benenne es!

Im ersten Übungsteil haben wir gelernt, verschiedene Anweisungen mit `Console.WriteLine()` und `Console.Write()` auszugeben.

Obwohl es großartig ist, eine Zahl oder einen Satz auszugeben, haben wir ihnen keine Bedeutung gegeben, und wenn wir den Satz oder die Zahl erneut verwenden wollten, müssten wir sie erneut eintippen.

In C# führen wir das Konzept einer **Variablen** für Daten ein. Eine Variable speichert ein Datenstück mit einem Namen.

Zum Beispiel kann es eine Variable namens `myName` geben, der der Wert `"Ann"` zugewiesen ist. Eine andere Variable könnte `age` heißen und es wird die Zahl `12` zugewiesen.

## Was für ein Typ!

Wie erstellen wir diese Variablen in C#, um Daten zu speichern?

Bevor wir lernen, wie man Variablen erstellt, müssen wir das Konzept des **Datentyps** in C# verstehen, oder einfach kurz **Typ**. Typ in C# beschreibt, was gespeichert wird. Wenn Sie eine Zahlvariable haben, kann sie nur Zahlen enthalten, keine Sätze oder Symbole. Jede Variable hat ihren eigenen Typ, der kontrolliert, welche Art von Daten sie halten kann.

Zum Beispiel könnten wir eine Variable namens `age` haben, die die Zahl `12` speichert. Wenn Sie versuchen, das Wort `"twelve"` in `age` zu speichern, wird ein Fehler erzeugt, weil es nur etwas über Zahlen weiß.

In C#, um eine Variable zu erstellen, die ganze Zahlen speichert, verwenden Sie den Typ `int`. Wir deklarieren eine `int`-Variable namens `age` mit dem Wert `3` mit der folgenden Codezeile:

```
int age = 12;
```
Im Allgemeinen deklarieren wir eine Variable im Format: `[Datentyp] [Variablenname] = [Daten];`.
{{% notice note %}}
Die folgenden sind die wichtigen Datentypen, die in C# eingebaut sind:

**Typ** | **Beschreibung** | **Beispiele**
--------|-----------|----------
`int` | ganze Zahl | `20`, `30`, `35`
`char` | Zeichen wie ein Symbol oder ein einzelner Buchstabe | `'A'`,`'b'`, `'('`, `']'`
`string` | eine Folge von `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | boolescher Wert, hat entweder den Wert `true` oder `false` | `true`, `false`
`double` | Bruchzahlen | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Um in unserem vorherigen Beispiel diese Variablen in C# zu deklarieren, geben wir Folgendes ein:

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

Die letzte Variable ist eine interessante. Sie kann nur einen Wert von `true` oder `false` haben. Wir werden sehen, dass dies in den fortgeschritteneren Teilen dieses Workshops sehr hilfreich sein kann.

## Spiele mit Variablen

Schauen wir uns an, was wir mit Variablen machen können.

Im folgenden .NET Fiddle-Frame, klonen Sie das Fiddle und versuchen Sie, diese Zeilen einzugeben und **auszuführen**:

```C#
int age = 10;
Console.WriteLine(age); // gibt 10 aus
age = 12; // weist der Variable age den Wert 12 zu
Console.WriteLine(age); // gibt 12 aus
```
Wir können einer Variablen einen Wert zuweisen, sie referenzieren und dann den Wert ändern.  

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## Was für ein Typ -- Hilf Patrick!

Patrick 🐥 ist kein Meister im Umgang mit Datentypen! Er vermischt sie oft, wenn er Variablen deklariert. Lass uns ihm helfen, seine Fehler im .NET Fiddle unten zu beheben.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>
