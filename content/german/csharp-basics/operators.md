```markdown
---
title: "Operatoren"
description: "Einführung in Operatoren und Durchführung von Operationen auf Variablen in C#."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Mathe machen: Arithmetische Operatoren

Im letzten Übung haben wir über Variablen gelernt und wie wir Werte einer Variable eines bestimmten Typs zuweisen können, wie zum Beispiel:

```C#
int age = 3;  // Deklariere Variable age vom Typ int mit Wert 3
age = 4;      // Weise 4 der Variable age zu
```

Betrachtet man den obigen Code, wird im Wesentlichen 1 zum Wert der Variable `age` hinzugefügt.

In C# können wir mit **arithmetischen Operatoren** direkt mathematische Operationen auf Variablen durchführen: `+`, `-`, `*`, `/`, `%`.
Zum Beispiel können wir den Additionsoperator `+` verwenden, um 1 zu `age` hinzuzufügen:

```c#
int age = 3;  // Deklariere Variable age vom Typ int mit Wert 3
age = age + 1;// Addiere 1 zu age
```

{{% notice note %}}
Die folgenden sind die arithmetischen Operatoren in C#:

**Operator** | **Beschreibung** | **Beispiel**
------|------|--------
`+` | Addition | `1 + 1 = 2`
`-` | Subtraktion | `2 - 1 = 1`
`*` | Multiplikation | `3 * 3 = 9`
`/` | Division | `9 / 3 = 3`
`%` | Modulus/Rest | `10 % 4 = 2`

**Hinweis**: Wenn beide Operanden einer Division Ganzzahlen sind, ist das Ergebnis ebenfalls eine Ganzzahl. Zum Beispiel, `10 / 4` ergibt 2, nicht 2.5, da wir den Rest verwerfen. Wenn einer der Operanden ein Double ist, wird das Ergebnis ein Double.

**Hinweis**: Verwenden Sie den Modulus-Operator (`%`), um den Rest der Division zu erhalten.

{{% /notice %}}

{{% notice tip %}}
Der Additionsoperator (`+`) wird bei Strings als Konkatenationsoperator verwendet. Zum Beispiel:

`String name = "Patric" + "k";` ist dasselbe wie `String name = "Patrick";`
{{% /notice %}}

### Anweisungen
1. Nutze das folgende Programm, um die arithmetischen Operatoren zu üben. Ändere die Zahlen, um die Antworten zu sehen.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/dUSTOt" frameborder="0"></iframe>

## Vergleiche: Relationale Operatoren

Als nächstes lernen wir, wie man Zahlen mit **relationalen Operatoren** vergleicht.

Genau wie in der Mathematik können wir Zahlen mit `>`, `<`, `>=`, `<=` vergleichen. Zum Beispiel: `(3 > 2)` ist `true`, ein boolescher Wert.

{{% notice note %}}
Die folgenden sind die relationalen Operatoren in C#:

**Operator** | **Beschreibung** | **Beispiel**
------| ------| ------
`==` | gleich | `(3 == 3)` ist `true`
`!=` | ungleich | `(3 != 3)` ist `false`
`>` | größer als | `(3 > 2)` ist `true`
`<` | kleiner als | `(3 < 2)` ist `false`
`>=` | größer als oder gleich | `(3 >= 2)` ist `true`
`<=` | kleiner als oder gleich | `(2 <= 2)` ist `true`

Hinweis: `==` und `!=` können nur bei Daten des gleichen Typs verwendet werden. Zum Beispiel:
```csharp
int x=3; 
double y=3.0; 
x==y; // Dies würde einen Fehler erzeugen, da x und y unterschiedliche Typen haben.
```

{{% /notice %}}

{{% notice tip %}}
Ein Gleichheitszeichen weist einem Wert einer Variablen zu. Zwei Gleichheitszeichen vergleichen die Werte von zwei Elementen.

```csharp
age = 3;  // Setzt den Wert von age auf 3
age == 3; // Überprüft, ob der Wert von age 3 ist
```
{{% /notice %}}

### Vergleichsübung

1. Nutze das folgende Programm, um die Vergleichsoperatoren zu üben. Ändere die Zahlen,