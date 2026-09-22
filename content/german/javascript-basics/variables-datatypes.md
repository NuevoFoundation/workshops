---
title: "Variablen und Datentypen"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

Um eine Variable in JavaScript zu erstellen, gibt es 3 Optionen.

1. Verwendung von `var` (kurz für Variable) wie folgt:
```javascript
var x = 5;
var y = 6;
var z = x + y;
```

2. Verwendung von `let` wie folgt:
```javascript
let x = 5;
let y = 6;
let z = x + y;
```

3. Verwendung von `const` (kurz für Konstante) wie folgt:
```javascript
const x = 5;
const y = 6;
```
Wichtig ist hier zu verstehen, dass eine Konstante sich nicht ändert. Das bedeutet, dass diese Werte fest mit dem bei der Erstellung gesetzten Wert verbunden sind.

Man kann `var`, `let` und `const` verwenden, um alle verschiedenen Datentypen in JavaScript zu speichern. Dies nennt man _dynamische Typen_.

JavaScript hat 8 unterschiedliche Datentypen:
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- Object
- BigInt

Wir werden die wichtigsten davon durchgehen: String, Number, Boolean, Undefined und Object!

## String
Strings können aus Wörtern oder einer Gruppe von Buchstaben bestehen.

```javascript
// String-Beispiele
let animal = "Elefant";
let alphabet = "abc";
let name = "John";
```

## Number
Zahlen können für alle Arten von Zahlen verwendet werden (kleine und große!). Das gilt, bis Sie wirklich SEHR große Zahlen benötigen, dann brauchen Sie eine spezielle Variable namens BigInt (das ist aber ein Thema für später).

```javascript
// Number-Beispiele
let age = 16;
let weight = 7.5;
```

## Boolean
Booleans repräsentieren wahr und falsch, also so etwas wie die Wahrheit sagen und lügen.

```javascript
// Boolean-Beispiele
let truth = true;
let lie = false;
let x = true;
let y = false;
```

## Undefined
Undefined bedeutet, dass die Variable keinen Wert hat (weil 0 technisch gesehen ein Wert ist)!

```javascript
// Undefined-Beispiel
let x = undefined;
```

## Object
Ein Objekt in JavaScript ist etwas komplexer. Es kann ein eingebautes Objekt wie ein Array, Datum, Maps, Sets und mehr sein, oder es kann ein benutzerdefiniertes Array sein, was bedeutet, dass es jede Gruppe von Daten sein kann.

```javascript
const person = {firstName:"John", lastName:"Doe"};

// Array-Objekt:
const cars = ["Saab", "Volvo", "BMW"];

// Datum-Objekt:
const date = new Date("2022-03-25");

// Benutzerdefiniertes Objekt (in diesem Fall Vor- und Nachname)
const person = {firstName:"John", lastName:"Doe"};
```

## Wenn Sie nicht sicher sind, welchen Typ eine Variable hat...
Verwenden Sie den `typeof`-Operator! Wenn Sie den `typeof`-Operator mit einer Variablen ausführen, wird er Ihnen sagen, was es ist:

```javascript
typeof "Amy" // gibt "string" zurück
typeof 0 // gibt "number" zurück
typeof (3) // gibt "number" zurück (die Klammern bewirken nichts)
typeof (3 + 4) // gibt "number" zurück
```