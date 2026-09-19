```markdown
---
title: "Operatoren"
description: "Hier werden Operatoren eingeführt und Operationen mit Variablen in C# durchgeführt."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Lass uns Mathematik machen: Arithmetische Operatoren

Im letzten Kapitel haben wir über Variablen gelernt und wie wir Werte einer Variablen eines bestimmten Typs zuweisen können. Zum Beispiel:

```C#
int age = 3;  // Deklariere die Variable age vom Typ int mit dem Wert 3
age = 4;      // Weise der Variablen age den Wert 4 zu
```

Im obigen Code wird im Wesentlichen der Wert der Variablen `age` um 1 erhöht.

In C# können wir mit **arithmetischen Operatoren** auch direkt mathematische Operationen mit Variablen durchführen: `+`, `-`, `*`, `/`, `%`.
Zum Beispiel können wir den Additionsoperator `+` verwenden, um `age` um 1 zu erhöhen:

```c#
int age = 3;  // Deklariere die Variable age vom Typ int mit dem Wert 3
age = age + 1;// Erhöhe age um 1
```

{{% notice note %}}
Die folgenden sind die arithmetischen Operatoren in C#:

**Operator** | **Beschreibung** | **Beispiel**
------|------|--------
`+` | Addition | `1 + 1 = 2`
`-` | Subtraktion | `2 - 1 = 1`
`*` | Multiplikation | `3 * 3 = 9`
`/` | Division | `9 / 3 = 3`
`%` | Modulo/Rest | `10 % 4 = 2`

**Hinweis**: Wenn beide Operanden einer Division ganze Zahlen (Integer) sind, ist das Ergebnis ebenfalls eine ganze Zahl (Integer). Zum Beispiel ergibt `10 / 4` den Wert 2, nicht 2.5, da der Rest verworfen wird. Wenn einer der Operanden ein `double` ist, wird das Ergebnis ebenfalls ein `double`.

**Hinweis**: Mit der Modulo-Operation (`%`) wird der Rest einer Division berechnet.

{{% /notice %}}

{{% notice tip %}}
Der Additions-Operator (`+`) wird für Strings als Verkettungs-Operator verwendet. Zum Beispiel:

`String name = "Patric" + "k";` ist dasselbe wie `String name = "Patrick";`
{{% /notice %}}

### Anweisungen
1. Nutze das nachstehende Programm, um den Umgang mit den arithmetischen Operatoren zu üben. Ändere die Zahlen, um die Ergebnisse zu sehen.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/dUSTOt" title="Interaktive Übung zu arithmetischen Operatoren in C#" frameborder="0"></iframe>

## Vergleiche: Relationale Operatoren

Als Nächstes lernen wir, wie man Zahlen mit **relationalen Operatoren** vergleicht.

Wie in der Mathematik können wir Zahlen mit `>`, `<`, `>=`, `<=` vergleichen. Beispielsweise ist `(3 > 2)` `wahr`, ein Boolescher Wert.

{{% notice note %}}
Die folgenden sind die relationalen Operatoren in C#:

**Operator** | **Beschreibung** | **Beispiel**
------| ------| ------
`==` | gleich | `(3 == 3)` ist `wahr`
`!=` | ungleich | `(3 != 3)` ist `falsch`
`>` | größer als | `(3 > 2)` ist `wahr`
`<` | kleiner als | `(3 < 2)` ist `falsch`
`>=` | größer oder gleich | `(3 >= 2)` ist `wahr`
`<=` | kleiner oder gleich | `(2 <= 2)` ist `wahr`

Hinweis: `==` und `!=` können nur für Daten desselben Typs verwendet werden. Zum Beispiel:
```csharp
int x=3; 
double y=3.0; 
x==y; // Dies würde einen Fehler verursachen, da x und y verschiedene Datentypen haben.
```

{{% /notice %}}

{{% notice tip %}}
Eins gleich Zeichen (`=`) weist einer Variablen einen Wert zu. Zwei gleiche Zeichen (`==`) vergleichen die Werte von zwei Elementen.

```csharp
age = 3;  // setzt den Wert von age auf 3
age == 3; // prüft, ob der Wert von age 3 ist
```
{{% /notice %}}

### Vergleichsübung

1. Nutze das nachstehende Programm, um den Umgang mit den Vergleichsoperatoren zu üben. Ändere die Zahlen, um die Ergebnisse zu sehen.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/tZs8tb" title="Interaktive Übung zu Vergleichsoperatoren in C#" frameborder="0"></iframe>

## Prüfungsergebnisse!

Patrick 🐥 und vier seiner Mitschüler hatten gerade eine Musikprüfung in dieser Klasse. Das sind die Noten ihrer Prüfungen: Patrick(88), Tom(89), Mary(95), Chris(84), Jen(92).

Wir möchten einen Notenbericht für die gesamte Klasse erstellen. 

Dieser Bericht enthält die Noten der einzelnen Schüler, den durchschnittlichen Klassenscore und die Angabe, ob der Klassendurchschnitt über 60, 70, 80 oder 90 liegt (`wahr` oder `falsch`), wie folgt:

```
---------------------------
   Musik-Notenbericht    
---------------------------

Schülernoten:          
- Patrick: ...
- Tom: ...
...

Klassendurchschnitt: ...
- Durchschnitt über 60: ...
- Durchschnitt über 70: ...
- Durchschnitt über 80: ...
- Durchschnitt über 90: ...
```

Lass uns das mit Hilfe von Operatoren schreiben 🎵!

{{% notice note %}}

### Anweisungen:

1. Identifiziere alle Variablen in den Ausgabetexten und deklariere sie ab Zeile 12 mit dem richtigen Datentyp und Wert. Beachte, dass es insgesamt 10 Variablen gibt, und `average` ist bereits für dich deklariert.

   Hinweis: Zum Beispiel sollte die Variable `patrickGrade` in Zeile 13 wie folgt deklariert und initialisiert werden: `int patrickGrade = 88;`.

2. Berechne den korrekten Klassendurchschnitt und weise ihn der Variablen `average` unter Verwendung von **arithmetischen Operatoren** wie `+`, `-`, `*`, `/`, `%` zu. Achte darauf, Klammern um die Gesamtpunktzahl zu setzen.

   Beachte, dass eine Durchschnittsnote `(Gesamtpunktzahl)` / `(Anzahl der Schüler)` ist.

