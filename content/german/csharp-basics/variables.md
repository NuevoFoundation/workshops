---
title: "Variablen und Datentypen"
description: "Typen und Variablen in C# einführen."
date: 2024-09-16T00:00:00Z
weight: 4
---

## Variablen: Benenne es!

Im ersten Übungsbeispiel haben wir gelernt, verschiedene Anweisungen mit `Console.WriteLine() und Console.Write()` auszugeben.

Es ist zwar großartig, eine Zahl oder einen Satz auszugeben, aber wir haben ihnen keine Bedeutung gegeben, und wenn wir den Satz oder die Zahl erneut verwenden wollten, müssten wir sie erneut eingeben.

In C# führen wir die Idee einer **Variable** für Daten ein. Eine Variable speichert ein Stück Daten mit einem Namen.

Zum Beispiel könnte es eine Variable namens `myName` geben, die den Wert `"Ann"` zugewiesen bekommt. Eine andere Variable könnte `age` heißen und die Zahl `12` zugewiesen bekommen.

## Was für ein Typ!

Wie erstellen wir diese Variablen in C#, um Daten zu speichern?

Bevor wir lernen, wie man Variablen erstellt, müssen wir das Konzept des **Datentyps** in C# verstehen, oder einfach **Typ**. Ein Typ in C# beschreibt, was gespeichert wird. Wenn Sie eine Zahlenvariable haben, kann sie nur Zahlen enthalten, keine Sätze oder Symbole. Jede Variable hat ihren eigenen Typ, der kontrolliert, welche Art von Daten sie halten kann.

Zum Beispiel könnten wir eine Variable namens `age` haben, die die Zahl `12` speichert. Wenn Sie versuchen, das Wort `"twelve"` in `age` zu speichern, wird ein Fehler generiert, da es nur Zahlen kennt.

In C#, um ganze Zahlen zu speichern, verwenden wir den Typ `int`. Wir deklarieren eine `int` Variable namens `age` mit den Daten `3` mit dem Code:

```
int age = 12;
```
Im Allgemeinen deklarieren wir eine Variable im Format: `[Datentyp] [Variablenname] = [Daten];`.
{{% notice note %}}
Die folgenden sind die wichtigen Datentypen, die in C# integriert sind:

**Typ** | **Beschreibung** | **Beispiele**
--------|-----------|----------
`int` | Ganzzahl | `20`, `30`, `35`
`char` | Zeichen wie ein Symbol oder ein einzelner Buchstabe | `'A'`,`'b'`, `'('`, `']'`
`string` | eine Folge von `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | Boolean, hat den Wert entweder `true` oder `false` | `true`, `false`
`double` | Bruchzahlen | `2.0`, `3.14`, `9.33`

{{% /notice %}}

In unserem vorherigen Beispiel, um diese Variablen in C# zu deklarieren, geben wir folgendes ein:

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

Die letzte Variable ist eine interessante. Sie kann nur den Wert `true` oder `false` haben. Wir werden sehen, dass dies in den fortgeschritteneren Abschnitten dieses Workshops sehr hilfreich sein kann.

## Mit Variablen spielen

Schauen wir mal, was wir mit Variablen machen können.

Im .NET Fiddle Frame unten, forken Sie das Fiddle und versuchen Sie, diese Zeilen einzugeben und **führen Sie aus**:

```C#
int age = 10;
Console.WriteLine(age); // gibt 10 aus
age = 12; // weist der Variable age den Wert 12 zu
Console.WriteLine(age); // gibt 12 aus
```
Wir können einer Variable einen Wert zuweisen, auf sie verweisen und dann den Wert ändern.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## Was für ein Typ -- Hilf Patrick!

Patrick 🐥 ist kein Meister der Datentypen! Er hat sie oft verwechselt, wenn er Variablen deklariert. Lassen Sie uns ihm helfen, seine Fehler im .NET Fiddle unten zu beheben.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>