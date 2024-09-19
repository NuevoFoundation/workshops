---
title: "Klassen und Objekte"
description: "Einführung in Klassen und Objekte in C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## Was ist ein Objekt und was ist eine Klasse?

Ein Objekt ist ein Ding (Substantiv), das bestimmte Eigenschaften hat und bestimmte Aufgaben ausführen kann. Eine Klasse ist der Bauplan oder die Definition für dieses Objekt, wenn es erstellt wird.

Ein Beispiel ist eine Person. Eine Person ist eine Art von Klasse. Eine Person kann bestimmte Eigenschaften haben, die sie von einer anderen Person unterscheiden. Sie kann blaue Augen haben, 15 Jahre alt sein usw. Eine Person kann auch bestimmte Aufgaben ausführen. Sie kann gehen, sprechen usw.

Ein C#-Objekt ist eine Instanz einer C#-Klasse. In diesem Fall ist "Bea" eine "Person". "Bea" hat braune Augen. Das ist eine Eigenschaft (oder Datenfeld) von "Bea". "Bea" kann Englisch sprechen. "Bea" kann Spanisch sprechen. Das sind Methoden, die "Bea" ausführen kann.

## Eine Klasse erstellen!

C# ist eine **objektorientierte** Programmiersprache, was bedeutet, dass in C# alles mit einem **Objekt** und einer **Klasse** (dem Bauplan für das Objekt) verbunden ist.

Zum Einstieg: Die Codezeile, die wir verwendet haben, um Anweisungen aus Aktivität 1 zu drucken, ist tatsächlich ein Methodenaufruf aus einer vordefinierten Klasse namens `System`!

```csharp
Console.WriteLine("Hello World");
```

1. `Console` ist eine Klasse, die sich mit Benutzereingaben und -ausgaben befasst.
3. `WriteLine()` ist eine Methode, die in der Klasse `Console` definiert ist.

Eine weitere vordefinierte Klasse, mit der wir in den vorherigen Übungen interagiert haben, ist `string`. Die `string`-Klasse definiert eine Reihe von Regeln, wie eine Liste von Zeichen sich verhalten sollte.

Mit der folgenden Codezeile haben wir ein `string`-Objekt namens `name` mit den in der `string`-Klasse definierten Regeln erstellt:

```csharp
string name = "Patrick";
```

`Console` und `string` sind vordefinierte Klassen in C#. Allerdings sind wir nicht auf diese vordefinierten Klassen beschränkt und können tatsächlich unseren eigenen Datentyp erstellen, indem wir eine Klasse schreiben! Dies ist nützlich für Programmierer, um spezifische Objekte zu erstellen, die bestimmte Attribute und Verhaltensweisen haben. Der Zugriff auf diese vom Benutzer definierten Typen ermöglicht es uns, unterschiedliche Programme zu erstellen.

Lassen Sie uns unten über die verschiedenen Teile einer Klasse lernen:

{{% notice note %}}
### Klasse
Eine Klasse ist ein Bauplan oder Prototyp eines neuen Objekttyps. Im Allgemeinen enthält eine Klasse drei wichtige Teile:

<img src="../images/class.png" height="400" alt="Ein Klassenbauplan für ein Objekt enthält Instanzvariablen/Datenfelder, die Daten/Attribute im Objekt sind, einen Konstruktor, der Methoden enthält, die das Objekt der Klasse erstellen, und Methoden, die mögliche Verhaltensweisen für das Objekt sind."/> 

**Element** | **Beschreibung** | **Beispiel**
---|---|---
**Datenfelder/Instanzvariablen** | Variablen, auf die ein Objekt dieser Klasse Zugriff hat und die das Objekt beschreiben | Zum Beispiel könnte eine Person-Klasse die Felder Augenfarbe, Alter, Größe haben.
**Konstruktor** | Methode, die automatisch aufgerufen wird, wenn ein Objekt dieser Klasse erstellt wird, Konstruktoren haben denselben Namen wie die Klasse | Es kann mehr als einen Konstruktor pro Klasse geben
**Methoden** | Methoden für das Objekt dieser Klasse zur Ausführung bestimmter Aufgaben | Die Person-Klasse könnte Methoden wie sprechen und gehen haben.  

Zum Beispiel:

```csharp
public class Person{
    // (1) Datenfelder/Instanzvariablen
    private String name; // Beispiel
    private int age;
    private int height;

    // (2) Konstruktor - Konstruktoren haben denselben Namen wie die Klasse
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) Konstruktor - Sie können mehr als einen haben
    public Person( String nameInput, int ageInput, int heightInput)
    {
        name = nameInput;
        age = ageInput;
        height = heightInput;
    }

    // (3) Methoden
    public void talk()
    {
        Console