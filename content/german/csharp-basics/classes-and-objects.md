```markdown
---
title: "Klassen und Objekte"
description: "Einführung in Klassen und Objekte in C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## Was ist ein Objekt und was ist eine Klasse?

Ein Objekt ist ein Ding (ein Substantiv), das bestimmte Eigenschaften hat und bestimmte Aufgaben ausführen kann. Eine Klasse ist der Bauplan oder die Definition für dieses Objekt, wenn es erstellt wird.

Ein Beispiel ist eine Person. Eine Person ist eine Art von Klasse. Eine Person kann bestimmte Eigenschaften haben, die sie von einer anderen Person unterscheiden. Sie kann blaue Augen haben, 15 Jahre alt sein usw. Eine Person kann auch bestimmte Aufgaben ausführen. Sie kann gehen, sprechen usw.

Ein C#-Objekt ist eine Instanz einer C#-Klasse. In diesem Beispiel ist „Bea“ eine „Person“. „Bea“ hat braune Augen. Dies ist eine Eigenschaft (oder ein Datenfeld) von „Bea“. „Bea“ kann Englisch sprechen. „Bea“ kann Spanisch sprechen. Dies sind Methoden, die „Bea“ ausführen kann.

## Eine Klasse erstellen!

C# ist eine **objektorientierte** Programmiersprache, was bedeutet, dass alles in C# mit einem **Objekt** und einer **Klasse** (dem Bauplan für das Objekt) verbunden ist.

Um anzufangen, ist die Codezeile, die wir verwendet haben, um Anweisungen aus den Aktivitäten auszugeben, tatsächlich ein Methodenaufruf aus einer vordefinierten Klasse namens `System`!

```csharp
Console.WriteLine("Hello World");
```

1. `Console` ist eine Klasse, die sich mit Benutzereingaben und Ausgaben befasst.
3. `WriteLine()` ist eine in der Klasse `Console` definierte Methode.

Eine weitere eingebaute Klasse, mit der wir in den vorherigen Übungen interagiert haben, ist `string`. Die `string`-Klasse definiert eine Reihe von Regeln, wie sich eine Liste von Zeichen verhalten sollte.

Mit der folgenden Codezeile haben wir ein `string`-Objekt namens `name` erstellt, das die in der `string`-Klasse definierten Regeln verwendet:

```csharp
string name = "Patrick";
```

`Console` und `string` sind vordefinierte Klassen in C#. Wir sind jedoch nicht auf diese vordefinierten Klassen beschränkt, sondern können tatsächlich unseren eigenen Datentyp erstellen, indem wir eine Klasse schreiben! Dies ist nützlich für Programmierer, um spezifische Objekte mit bestimmten Attributen und Verhaltensweisen zu erstellen. Die Verfügbarkeit dieser benutzerdefinierten Typen ermöglicht es uns, individuelle Programme zu erstellen.

Lernen wir unten die verschiedenen Teile einer Klasse kennen:

{{% notice note %}}
### Klasse
Eine Klasse ist ein Bauplan oder Prototyp für eine neue Art von Objekt. Im Allgemeinen enthält eine Klasse drei wichtige Teile: 

<img src="../images/class.png" height="400" alt="Ein Klassenbauplan für ein Objekt enthält Instanzvariablen/Datenfelder, die Daten/Eigenschaften des Objekts sind; Konstruktor, der Methoden sind, die das Objekt der Klasse erstellen; und Methoden, die mögliche Verhaltensweisen des Objekts darstellen."/> 

**Element** | **Beschreibung** | **Beispiel**
---|---|---
**Datenfelder/Instanzvariablen** | Variablen, auf die ein Objekt dieser Klasse Zugriff hat und die das Objekt beschreiben | Zum Beispiel könnte eine Person-Klasse die Felder eyeColor, age, height haben.
**Konstruktor** | Methode, die automatisch aufgerufen wird, wenn ein Objekt aus dieser Klasse erstellt wird. Konstruktoren haben den gleichen Namen wie die Klasse | Es kann mehr als einen Konstruktor pro Klasse geben
**Methoden** | Methoden für das Objekt dieser Klasse, um bestimmte Aufgaben auszuführen | Eine Person-Klasse könnte Methoden wie talk und walk haben.  

Zum Beispiel:

```csharp
public class Person {
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
        Console.WriteLine($"Hello from {name}");
    }
}
```

{{% /notice %}}

## Probieren Sie es aus 🐥!

Erstellen wir eine Klasse `Bird`, um Patrick 🐥 und all seine Vogel-Freunde zu repräsentieren, indem wir die untenstehenden Schritte befolgen! 

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/OH5XQO" title="Interaktive Übung zur C# Bird-Klasse" frameborder="0"></iframe>

### Zuerst beginnen wir mit der Definition des Klassennamens im Format `public` `class` `name`.

```csharp
public class Bird{}
```

<br />

### Zweitens deklarieren wir alle Felder der Bird-Klasse: species, name, hobby, age, loveMusic.

Jedes Feld wird im Format: `Zugriffs-Spezifikator` `Datentyp` `Name` `;` deklariert.

1. Wir deklarieren alle 5 Felder als `private` in der Klasse `Bird`. Dies stellt sicher, dass diese Felder nur innerhalb dieser Klasse zugänglich sind.

2. Lassen Sie uns den entsprechenden Typ für jedes Feld identifizieren:

- `species` sollte ein `String` sein, der z.B. speichert: "Ente", "Schwan", "Eule".
- `name` sollte ein `String` sein, der z.B. speichert: "Patrick".
- `hobby` sollte ein `String` sein, der z.B. speichert: "Basketball spielen".
- `age` sollte ein `int` sein, der z.B. speichert: 25.
- `loveMusic` sollte ein `bool` sein, der entweder true oder false speichert.

Zum Beispiel, um `species` als privates Feld der Klasse `Bird` zu deklarieren, würden Sie `private String species;` schreiben.

3. Vervollständigen Sie die Erstellung der anderen 4 Felder der Bird-Klasse!

### Drittens, erstellen wir den Konstruktor für die Klasse `Bird`. 

Ein Konstruktor ist in der Regel die Methode, die allen Feldern in einer Klasse Wert zuweist. Er hat das Format `public` `Klassenname` `(Parameter)`. Da wir 5 Felder in dieser Klasse haben, wird der Konstruktor 