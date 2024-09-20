---
title: "Operatoren"
description: "Stellt Operatoren vor und führt Operationen an Variablen in C# durch."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Lass uns Mathe machen: Arithmetische Operatoren

Im letzten Übung haben wir über Variablen gelernt und wie wir Werte einer Variablen eines bestimmten Typs zuweisen können, wie zum Beispiel:

```C#
int alter = 3;  // Deklariere Variable alter vom Typ int mit Wert 3
alter = 4;      // Weise 4 der Variable alter zu
```

Schaut man sich den obigen Code an, so fügt er im Grunde 1 zum Wert der Variablen `alter` hinzu. 

Und in C#, können wir direkt mit **arithmetischen Operatoren**: `+`, `-`, `*`, `/`, `%` Rechenoperationen an Variablen durchführen.
Zum Beispiel können wir den Additionsoperator `+` verwenden, um 1 zu `alter` hinzuzufügen:

```c#
int alter = 3;  // Deklariere Variable alter vom Typ int mit Wert 3
alter = alter + 1; // Füge 1 zu alter hinzu
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

**Hinweis**: Wenn beide Operanden der Division Ganzzahlen sind, ist das Ergebnis ebenfalls eine Ganzzahl. Zum Beispiel liefert `10 / 4` 2, nicht 2.5, da der Rest verworfen wird. Wenn einer der Operanden ein double ist, ist das Ergebnis ein double.

**Hinweis**: Verwenden Sie den Modulus-Operator (`%`), um den Rest der Division zu erhalten.

{{% /notice %}}

{{% notice tip %}}
Der Additionsoperator (`+`) wird bei Strings als Konkatenationsoperator verwendet. Zum Beispiel:

`String name = "Patric" + "k";` ist dasselbe wie `String name = "Patrick";`
{{% /notice %}}

### Anweisungen
1. Verwenden Sie das Programm unten, um die Verwendung der arithmetischen Operatoren zu üben. Ändern Sie die Zahlen, um die Antworten zu sehen.

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
`>=` | größer oder gleich | `(3 >= 2)` ist `true`
`<=` | kleiner oder gleich | `(2 <= 2)` ist `true`

Hinweis: `==` und `!=` können nur auf Daten desselben Typs angewendet werden. Zum Beispiel:
```csharp
int x=3; 
double y=3.0; 
x==y; // Dies würde einen Fehler erzeugen, da x und y unterschiedliche Typen haben.
```

{{% /notice %}}

{{% notice tip %}}
Ein Gleichheitszeichen weist einen Wert zu. Zwei Gleichheitszeichen vergleichen die Werte zweier Elemente.

```csharp
alter = 3;  // setzt den Wert von alter auf 3
alter == 3; // überprüft, ob der Wert von alter 3 ist
```
{{% /notice %}}

### Vergleichsübung

1. Verwenden Sie das Programm unten, um die Verwendung der Vergleichsoperatoren zu