---
title: "Variablen und Datentypen"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

Um eine Variable in JavaScript zu erstellen, haben Sie 3 Möglichkeiten.

1. Verwendung von `var` (kurz für variable) so:
```javascript
var x = 5;
var y = 6;
var z = x + y;
```

2. Verwendung von `let` so:
```javascript
let x = 5;
let y = 6;
let z = x + y;
```

3. Verwendung von `const` (kurz für konstant) so:
```javascript
const x = 5;
const y = 6;
```
Es ist wichtig zu beachten, dass eine Konstante sich nicht ändert. Das bedeutet, dass diese Werte an das gebunden sind, was sie zu Beginn eingestellt sind.

Sie können `var`, `let` und `const` verwenden, um jede der verschiedenen Datentypen in JavaScript zu halten. Dies wird als _dynamische Typen_ bezeichnet.

JavaScript hat 8 verschiedene Datentypen:
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- Object
- BigInt

Wir werden die wichtigsten durchgehen: String, Number, Boolean, Undefined und Object!

## String
Strings können aus Wörtern oder einer Gruppe von Buchstaben bestehen.

```javascript
// String-Beispiele
let animal = "Elefant";
let alphabet = "abc";
let name = "John";
```

## Number
Zahlen können für alle Arten von Zahlen (klein und groß!) verwendet werden. Das heißt, bis Sie wirklich große Zahlen benötigen, dann brauchen Sie eine spezielle Variable namens bigint (aber das ist ein Thema für ein anderes Mal).
  
```javascript
// Zahlenbeispiele
let age = 16;
let weight = 7.5;
```

## Boolean
Booleans repräsentieren wahre und falsche Werte, also wie das Lügen und die Wahrheit sagen.
  
```javascript
// Boolean-Beispiele
let truth = true;
let lie = false;
let x = true;
let y = false;
```

## Undefined
Undefined bedeutet, dass die Variable keinen Wert hat (da 0 technisch gesehen ein Wert ist)!

```javascript
// Undefined-Beispiel
let x = undefined;
```

## Object
Ein Objekt in JavaScript ist etwas komplizierter. Es kann ein integriertes Objekt wie ein Array, Datum, Karten, Sets und mehr sein, oder es kann ein benutzerdefiniertes Array sein, was bedeutet, dass es eine beliebige Gruppe von Daten sein kann.

```javascript
const person = {firstName:"John", lastName:"Doe"};

// Array-Objekt:
const cars = ["Saab", "Volvo", "BMW"];

// Datum-Objekt:
const date = new Date("2022-03-25");

// Benutzerdefiniertes Objekt (in diesem Fall Vor- und Nachnamen)
const person = {firstName:"John", lastName:"Doe"};
```

## Wenn Sie sich nicht sicher sind, welcher Typ eine Variable ist...
Verwenden Sie den `typeof` Operator! Wenn Sie den `typeof` Operator mit einer Variable ausführen, sagt er Ihnen, was es ist:

```javascript
typeof "Amy" // gibt "string" zurück
typeof 0 // gibt "number" zurück
typeof (3) // gibt "number" zurück (die Klammern bewirken nichts)
typeof (3 + 4) // gibt "number" zurück
```