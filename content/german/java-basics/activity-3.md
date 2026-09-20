---
title: "Operatoren"
description: "Einführung in Operatoren und Durchführung von Operationen auf Variablen in Java."
date: 2021-10-13T00:00:00Z
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/wP8-F1nBPcg" title="Video über Java-Operatoren" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Lass uns rechnen: Arithmetischer Operator

Im letzten Kapitel haben wir etwas über Variablen gelernt und wie wir Werte einer Variablen eines bestimmten Typs zuweisen können, wie zum Beispiel:

```java
int age = 3;  // Deklariert die Variable age vom Typ int mit dem Wert 3.
age = 4;      // Weist der Variable age den Wert 4 zu.
```

Der obige Code fügt im Wesentlichen 1 zum Wert der Variable `age` hinzu.

Und in Java können wir direkt mit **arithmetischen Operatoren** auf Variablen Rechenoperationen durchführen: `+`, `-`, `*`, `/`, `%`.
Zum Beispiel können wir den Additionsoperator `+` benutzen, um 1 zu `age` hinzuzufügen:

```java
int age = 3;  // Deklariert die Variable age vom Typ int mit dem Wert 3.
age = age + 1; // Addiert 1 zu age.
```

{{% notice note %}}
Die folgenden sind die arithmetischen Operatoren in Java:

**Operator** | **Beschreibung** | **Beispiel**
------|------|--------
`+` | Addition | `1 + 1 = 2`
`-` | Subtraktion | `2 - 1 = 1`
`*` | Multiplikation | `3 * 3 = 9`
`/` | Division | `9 / 3 = 3`
`%` | Modulus/Restwert | `10 % 4 = 2`

**Hinweis**: Wenn beide Operanden der Division Ganzzahlen sind, wird das Ergebnis ebenfalls eine Ganzzahl sein. Zum Beispiel gibt `10 / 4` den Wert 2 zurück, nicht 2.5, da der Rest verworfen wird. Wenn einer der Operanden vom Typ `double` ist, wird das Ergebnis ein `double`.

**Hinweis**: Beim Modulus-Operator wird der Rest der Division ermittelt.
{{% /notice %}}

{{% notice tip %}}
Addieren (`+`) wird bei Strings als Konkatenationsoperator verwendet. Zum Beispiel:

`String name = "Patric" + "k";` ist dasselbe wie `String name = "Patrick";`
{{% /notice %}}

### Anweisungen
1. Nutze das folgende Programm, um die Verwendung der arithmetischen Operatoren zu üben. Ändere die Zahlen, um die Ergebnisse zu sehen.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOperatorsPractice" target="_blank">Replit starten</a>

## Vergleiche: Relationale Operatoren

Als Nächstes lernen wir, wie man Zahlen mit **relationalen Operatoren** vergleicht.

Genau wie in der Mathematik können wir Zahlen vergleichen mit `>`, `<`, `>=`, `<=`. Zum Beispiel: `(3 > 2)` ergibt `true`, einen booleschen Wert.

{{% notice note %}}
Die folgenden sind die relationalen Operatoren in Java:

**Operator** | **Beschreibung** | **Beispiel**
------| ------| ------
`==` | gleich | `(3 == 3)` ergibt `true`
`!=` | nicht gleich | `(3 != 3)` ergibt `false`
`>` | größer als | `(3 > 2)` ergibt `true`
`<` | kleiner als | `(3 < 2)` ergibt `false`
`>=` | größer oder gleich | `(3 >= 2)` ergibt `true`
`<=` | kleiner oder gleich | `(2 <= 2)` ergibt `true`

Hinweis: `==` und `!=` können nur für Daten desselben Typs verwendet werden. Zum Beispiel:
```java
int x=3; 
double y=3.0; 
x==y; // Dies würde einen Fehler erzeugen, da x und y unterschiedliche Typen haben.
```

{{% /notice %}}

{{% notice tip %}}
Die Verwendung von einem Gleichheitszeichen weist einer Variablen einen Wert zu. Die Verwendung von zwei Gleichheitszeichen vergleicht die Werte zweier Elemente.

```java
age = 3;  // Setzt den Wert von age auf 3.
age == 3; // Prüft, ob der Wert von age 3 ist.
```
{{% /notice %}}

### Vergleich üben

1. Nutze das folgende Programm, um die relationalen Operatoren zu üben. Ändere die Zahlen, um die Ergebnisse zu sehen.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsComparisonPractice" target="_blank">Replit starten</a>

## Prüfungsstatistik!

Patrick 🐥 und 4 seiner Klassenkameraden hatten gerade eine Musikprüfung in ihrem Kurs. Das sind die Noten der Prüfung: Patrick (88), Tom (89), Mary (95), Chris (84), Jen (92).

Wir möchten einen Notenstatistikbericht für die gesamte Klasse erstellen.

Dieser Bericht listet die Note jedes Schülers, den Klassendurchschnitt und ob der Klassendurchschnitt über 60, 70, 80, 90 liegt (`true` oder `false`), wie im folgenden Beispiel:

```
---------------------------
     Musiknoten-Bericht    
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

Lasst uns dies mit Hilfe von Operatoren schreiben 🎵!

{{% notice note %}}

### Anweisungen:

1. Erkenne alle Variablen in den Druckausgaben und deklariere sie ab Zeile 12 mit dem richtigen Datentyp und Wert. Beachte, dass es insgesamt 10 Variablen gibt und `average` bereits für dich deklariert wurde.

   Hinweis: Zum Beispiel sollte die Variable `patrickGrade` ab Zeile 13 als `int patrickGrade = 88;` deklariert und zugewiesen werden.

2. Berechne den richtigen Klassendurchschnitt und weise ihn der Variable `average` zu, indem du **arithmetische Operatoren** wie `+`, `-`, `*`, `/`, `%` verwendest.

   Beachte, dass der Durchschnitt `(Gesamtpunktzahl)`/`(Anzahl der Schüler)` ist.

