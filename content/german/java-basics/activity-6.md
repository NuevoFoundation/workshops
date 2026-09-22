```markdown
---
title: "Objekt und Klassen"
description: "Einführung in Objekt und Klasse in Java."
date: 2021-10-13T00:00:00Z
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ejXgw0qchDg" title="Java-Objekte und Klassen Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Was ist ein Objekt und eine Klasse?

Ein Objekt ist eine Sache (Nomen), die bestimmte Eigenschaften besitzt und bestimmte Aufgaben ausführen kann. Eine Klasse ist die Vorlage oder Definition für dieses Objekt.

Ein Beispiel ist eine Person. Eine Person ist eine Klasse. Eine Person kann bestimmte Eigenschaften haben, die sie von einer anderen Person unterscheiden. Sie kann blaue Augen haben, 30 Jahre alt sein usw. Eine Person kann auch bestimmte Aufgaben ausführen. Sie kann gehen, sie kann sprechen usw.

Ein Java-Objekt ist eine Instanz einer Java-Klasse. In diesem Fall ist "Bea" eine "Person". "Bea" hat braune Augen, das ist eine Eigenschaft (oder Datenfeld) von "Bea". "Bea" kann Englisch sprechen. "Bea" kann Spanisch sprechen. Das sind Methoden, die "Bea" ausführen kann.

## Erstellen einer Klasse!

Java ist eine <b>objektorientierte</b> Programmiersprache, was bedeutet, dass alles in Java mit einem <b>Objekt</b> und einer <b>Klasse</b> (der Vorlage für das Objekt) verbunden ist.

Zum Einstieg: Die Codezeile, die wir verwendet haben, um Aussagen aus Aktivität 1 zu drucken, ist tatsächlich ein Methodenaufruf einer vordefinierten Klasse namens `System`!

```java
System.out.println("Hello World");
```

1. `System` ist eine Klasse, die sich mit Benutzereingaben und Ausgaben beschäftigt.
2. `out` ist eine Variable in der Klasse `System` vom Typ `PrintStream`.
3. `println()` ist eine Methode, die in der Klasse `PrintStream` definiert ist.

<br />

Eine weitere Klasse, mit der wir in den vorherigen Übungen interagiert haben, ist `String`. Die Klasse `String` definiert Regeln dafür, wie sich eine Liste von Zeichen verhalten sollte.

Mit der folgenden Codezeile haben wir ein `String`-Objekt namens `name` erstellt, das die Regeln der Klasse `String` verwendet:

```java
String name = "Patrick";
```

<br />

`System`, `PrintStream` und `String` sind vordefinierte Klassen in Java. Wir sind jedoch nicht auf diese vordefinierten Klassen beschränkt, und wir können tatsächlich unseren eigenen Datentyp erstellen, indem wir eine Klasse schreiben! Dies ist praktisch für Entwickler, um spezifische Objekte mit bestimmten Eigenschaften und Verhaltensweisen zu erstellen. Der Zugriff auf diese benutzerdefinierten Typen ermöglicht es uns, einzigartige Programme zu erstellen.

Lass uns die verschiedenen Bestandteile einer Klasse unten kennenlernen:

{{% notice note %}}
### Klasse
Eine Klasse ist eine Vorlage oder ein Prototyp eines neuen Objekttyps. Im Allgemeinen enthält eine Klasse drei wichtige Teile: (1) Datenfelder/Instanzvariablen (2) Konstruktor (3) Methoden.

<img src="../images/class.png" height="400" alt="Eine Klasse als Entwurf für ein Objekt enthält Instanzvariablen/Datenfelder, die Daten/Eigenschaften im Objekt darstellen, Konstruktoren, die Methoden sind, um Objekte der Klasse zu erstellen, und Methoden, die das Verhalten des Objekts ermöglichen." /> 

**Element** | **Beschreibung** | **Beispiel**
---|---|---
**Datenfelder/Instanzvariablen** | Variablen, die ein Objekt dieser Klasse verwenden kann, um das Objekt zu beschreiben | Die Klasse Person hat Felder wie Augenfarbe, Alter, Größe.
**Konstruktor** | Methode, die aufgerufen wird, um ein Objekt aus dieser Klasse zu erstellen | Es kann mehrere Konstruktoren pro Klasse geben
**Methoden** | Methoden, die ein Objekt dieser Klasse aufrufen kann, um bestimmte Aufgaben auszuführen | Die Klasse Person hat Methoden wie sprechen und gehen.

Zum Beispiel:

```java
public class SampleClass{
    // (1) Datenfelder/Instanzvariablen
    private String name; // Beispiel

    // (2) Konstruktor
    public SampleClass(){
        name = "Beispiel";
    }
    // (3) Methoden
    public sampleMethod(){}
}
```

{{% /notice %}}

## Probier es aus 🐥!

Lass uns eine Klasse `Bird` erstellen, um Patrick 🐥 und alle seine Vogelfreunde darzustellen, indem wir die Schritte unten befolgen! 
**Hinweis:** Für diese Übung wirst du in Bird.java arbeiten und nicht in Main.java.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsBird" target="_blank">Replit starten</a>

### Zuerst definieren wir den Namen der Klasse im Format `public` `class` `Name`.

```java
public class Bird{}
```

<br />

### Als Nächstes deklarieren wir alle Felder der Bird-Klasse: Species, Name, Hobby, Age, LoveMusic.

Jedes Feld wird im Format deklariert: `private` `Datentyp` `Name` `;`.

1. Wir deklarieren alle 5 Felder als `private` in der Klasse `Bird`. Dies stellt sicher, dass auf diese Daten nur innerhalb dieser Klasse zugegriffen werden kann.

2. Lass uns den geeigneten Typ für jedes Feld identifizieren:

- `species` sollte ein `String` sein, der z.B. "Ente", "Schwan", "Eule" speichert.
- `name` sollte ein `String` sein, der z.B. "Patrick" speichert.
- `hobby` sollte ein `String` sein, der z.B. "Basketball spielen" speichert.
- `age` sollte ein `int` sein, der z.B. 25 speichert.
- `loveMusic` sollte ein `boolean` sein, der entweder true oder false speichert.

Zum Beispiel, um `species` als privates Feld der Klasse `Bird` zu deklarieren, würdest du `private String species;` verwenden.

3. Vervollständige die Erstellung der anderen 4 Felder der Bird-Klasse!

<br/>

### Drittens erstellen wir den Konstruktor für die Klasse `Bird`. 

In der Regel ist der Konstruktor die Methode, die alle Felder einer Klasse initialisiert. Er hat das Format `public` `Klassenname` `(Parameter)`. Da wir 5 Felder in dieser Klasse haben, nimmt der Konstruktor 5 Parameter/Inputs entgegen.

```java
public Bird(String speciesInput, String nameInput, String hobby