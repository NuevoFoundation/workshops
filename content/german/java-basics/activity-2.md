```markdown
---
title: "Variablen und Typen"
description: "Einführung in Typen und Variablen in Java."
date: 2021-10-13T00:00:00Z
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/KE0fNb-hTKE" title="Video über Java-Variablen und Typen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Variablen: Gib ihnen einen Namen!

Im letzten Abschnitt haben wir gelernt, verschiedene Ausgaben mit `System.out.print()` zu drucken.

Auch wenn es toll ist, eine Zahl oder einen Satz auszugeben, haben wir ihnen noch keine Bedeutung gegeben.

In Java führen wir das Konzept einer **Variable** für Daten ein. Eine Variable ist wie eine Box, die ein Datenelement mit einem Namen speichert.

Zum Beispiel kann es eine Variable namens `myName` geben, die `"Patrick"` speichert, eine andere Variable namens `loveMusic`, die `true` speichert, und eine weitere Variable namens `age`, die `3` speichert. So wie im Bild unten:

<img src="../images/variable.png" height="200" alt="3 Boxen. Die erste Box hat weißen Text außen, myName, und weißen Text innen, 'Patrick'. Die zweite Box hat weißen Text außen, loveMusic, und weißen Text innen, true. Die dritte Box hat weißen Text außen, age, und weißen Text innen, 3."/>

## Was ist der Typ!

Wie erstellen wir diese Boxen oder Variablen in Java, um Daten zu speichern?

Bevor wir lernen, wie man Variablen erstellt, müssen wir das Konzept des **Typs** in Java lernen. Typ in Java beschreibt, was in der Box gespeichert wird. Wenn du eine Box für ganze Zahlen hast, wird sie nur ganze Zahlen enthalten, keine Sätze oder Symbole. Jede Variable hat ihren eigenen Typ, der sie darauf beschränkt, eine bestimmte Art von Daten zu speichern.

Zum Beispiel sollte die Variable namens `age`, die die Zahl `3` speichert, ganze Zahlen enthalten, nicht Sätze oder Symbole. 

In Java hat eine Variable, die ganze Zahlen speichert, den Typ `int`. Und wir deklarieren eine `int`-Variable namens `age` mit der Daten `3` mit der folgenden Zeile Code:

```java
int age = 3;
```

Generell deklarieren wir eine Variable im Format: `[Datentyp] [Variablenname] = [Daten];`.
{{% notice note %}}
Die folgenden sind wichtige Datentypen, die in Java eingebaut sind:

**Typ** | **Beschreibung** | **Beispiele**
--------|----------------|--------------
`int` | Ganze Zahl | `20`, `30`, `35`
`char` | Zeichen wie ein Symbol oder ein Einzelbuchstabe | `'A'`,`'b'`, `'('`, `']'`
`String` | Eine Abfolge von `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`boolean` | Hat einen Wert von entweder `true` oder `false` | `true`, `false`
`double` | Dezimalzahlen | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Lass uns die drei Variablen, über die wir gesprochen haben, nochmals betrachten und ihre Datentypen identifizieren. 

<img src="../images/dataType.png" height="200" alt="3 Boxen. Die erste Box hat weißen Text außen, myName, und weißen Text innen, 'Patrick'. Roter Pfeil zeigt auf eine Box mit Texttyp String. Die zweite Box hat weißen Text außen, loveMusic, und weißen Text innen, true. Roter Pfeil zeigt auf eine Box mit Texttyp boolean. Die dritte Box hat weißen Text außen, age, und weißen Text innen, 3. Roter Pfeil zeigt auf eine Box mit Texttyp int"/> 

Um diese Variablen in Java zu deklarieren, schreiben wir das folgende:

```java
String name = "Patrick";
int age = 10;
boolean loveMusic = true;
```

## Was ist der Typ -- Hilf Patrick!

Patrick 🐥 ist kein Meister der Datentypen! Er verwechselt sie oft, wenn er Variablen deklariert. Lass uns ihm helfen, seinen Fehler zu beheben:

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsDataType" target="_blank">Replit starten</a>

{{% notice tip %}}
Indem du Daten in Variablen speicherst, kannst du diese Daten später verwenden oder ändern, indem du sie auf andere Daten des gleichen Typs festlegst. Zum Beispiel:

```java
int age = 10;
System.out.println(age); // gibt 10 aus
age = 11; // weist der Variablen age die Daten 11 zu
System.out.println(age); // gibt 11 aus
```

{{% /notice %}}

## Was ist der Typ -- Zahlen verfolgen!

Betrachte nun den folgenden Code. Was denkst du, wird die Ausgabe sein? Verfolge die Werte jeder Variablen selbst und teste es dann unten aus!

```java
double x = 2.3;
double y = 10.0;
int z = 4;

x = y;
y = x;
z = 0;
z = z;
System.out.println("x: " + x + " y: " + y + " z: " + z );
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsVariable" target="_blank">Replit starten</a>

{{% notice tip %}}
#### Erklärung des Beispiels
In den Zeilen 1-3 deklarieren wir die Variablen und legen die Anfangswerte für `x` (2.3), `y` (10.0) und `z` (4) fest. 
In Zeile 4 setzen wir `x` auf den Wert von `y` (10.0). 
In Zeile 5 setzen wir `y` auf den Wert von `x`, das gerade auf 10.0 gesetzt wurde (10.0). 
In Zeile 6 setzen wir `z` auf 0.
In Zeile 7 setzen wir `z` auf den Wert von `z`, welcher 0 ist (0).
{{% /notice %}}
```