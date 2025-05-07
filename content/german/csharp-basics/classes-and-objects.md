---
title: "Klassen und Objekte"
description: "Einführung in Klassen und Objekte in C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## Was ist ein Objekt und was ist eine Klasse?

Ein Objekt ist ein Ding (Nomen), das bestimmte Eigenschaften hat und bestimmte Aufgaben ausführen kann. Eine Klasse ist der Bauplan oder die Definition für dieses Objekt, wenn es erstellt wird.

Ein Beispiel ist eine Person. Eine Person ist eine Art Klasse. Eine Person kann bestimmte Merkmale haben, die sie von einer anderen Person unterscheiden. Sie kann blaue Augen haben, 15 Jahre alt sein usw. Eine Person kann auch bestimmte Aufgaben ausführen, sie kann gehen, reden usw.

Ein C#-Objekt ist eine Instanz einer C#-Klasse. In diesem Fall ist "Bea" eine "Person". "Bea" hat braune Augen. Dies ist eine Eigenschaft (oder ein Datenfeld) von "Bea". "Bea" kann Englisch sprechen. "Bea" kann Spanisch sprechen. Dies sind Methoden, die "Bea" ausführen kann.

## Eine Klasse erstellen!

C# ist eine **objektorientierte** Programmiersprache, was bedeutet, dass alles in C# mit einem **Objekt** und einer **Klasse** (dem Bauplan für das Objekt) verbunden ist.

Als Einstieg: Der Programmcode, den wir verwendet haben, um Anweisungen aus Aktivität 1 zu drucken, ist tatsächlich ein Methodenaufruf aus einer vordefinierten Klasse namens `System`!

```csharp
Console.WriteLine("Hello World");
```

1. `Console` ist eine Klasse, die sich mit Benutzereingaben und -ausgaben befasst.
3. `WriteLine()` ist eine Methode, die in der Klasse `Console` definiert ist.

Eine weitere eingebaute Klasse, mit der wir in den vorherigen Übungen interagiert haben, ist `string`. Die `string`-Klasse definiert Regeln, wie sich eine Liste von Zeichen verhalten soll.

Mit der folgenden Zeile haben wir ein `string`-Objekt namens `name` erstellt, das die Regeln der `string`-Klasse verwendet:

```csharp
string name = "Patrick";
```

`Console` und `string` sind vordefinierte Klassen in C#. Wir sind jedoch nicht auf diese vordefinierten Klassen beschränkt und können tatsächlich unseren eigenen Datentyp erstellen, indem wir eine Klasse schreiben! Dies ist nützlich für Programmierer, um spezifische Objekte mit bestimmten Attributen und Verhaltensweisen zu erstellen. Der Zugriff auf diese benutzerdefinierten Typen ermöglicht es uns, verschiedene Programme zu erstellen.

Lassen Sie uns unten mehr über die verschiedenen Teile einer Klasse erfahren:

{{% notice note %}}
### Klasse
Eine Klasse ist ein Bauplan oder Prototyp für eine neue Art von Objekt. Im Allgemeinen enthält eine Klasse drei wichtige Teile:

<img src="../images/class.png" height="400" alt="Ein Klassenbauplan für ein Objekt enthält Instanzvariablen/Datenfelder, die Daten/Attribute im Objekt sind, Konstruktoren, die Methoden sind, die das Objekt der Klasse erstellen, und Methoden, die Verhaltensmöglichkeiten für das Objekt sind."/> 

**Element** | **Beschreibung** | **Beispiel**
---|---|---
**Datenfelder/Instanzvariablen** | Variablen, auf die ein Objekt dieser Klasse Zugriff hat und die das Objekt beschreiben | Zum Beispiel könnte eine Person-Klasse Felder wie eyeColor, age, height haben.
**Konstruktor** | Methode, die automatisch aufgerufen wird, wenn ein Objekt dieser Klasse erstellt wird, Konstruktoren haben den gleichen Namen wie die Klasse | Es kann mehr als einen Konstruktor pro Klasse geben
**Methoden** | Methoden für das Objekt dieser Klasse, um bestimmte Aufgaben auszuführen | Eine Person-Klasse könnte Methoden wie reden und gehen haben.

Beispiel:

```csharp
public class Person{
    // (1) Datenfelder/Instanzvariablen
    private String name; // Beispiel
    private int age;
    private int height;

    // (2) Konstruktor - Konstruktoren haben den gleichen Namen wie die Klasse
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) Konstruktor - es kann mehr als einen geben
    public Person( String nameInput, int ageInput, int heightInput)
    {
        name = nameInput;
        age = ageInput;
        height = heightInput;
    }

    // (3) Methoden
    public void talk()
    {
        Console.WriteLine($"Hello from {name