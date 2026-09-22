---
title: "JavaScript: Grundlagen - Antwortenschlüssel"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies ist ein Referenzleitfaden für Lehrer:innen für den Workshop "JavaScript Grundlagen". Er fasst alle Codebeispiele mit ihren erwarteten Konsolenausgaben zusammen, sodass Sie während des Unterrichts alles auf einer Seite nachschlagen können. Die Schüler:innen nutzen [playcode.io](https://playcode.io) als Entwicklungsumgebung.
{{% /notice %}}

## Setup-Checkliste für die Entwicklungsumgebung

Vor dem Start sollten die Schüler:innen:
1. [playcode.io](https://playcode.io) öffnen
2. Alle Dateien außer **script.js** schließen
3. Alles in script.js löschen
4. Den **Live-Modus** ausschalten (einmal auf die Live-Schaltfläche klicken)

## While-Schleifen

### Einfache Zählerschleife (läuft 8 Mal)

```javascript
let i = 0;
while (i < 8) {
  console.log(i);
  i++;
}
```

Ausgabe:
```
0
1
2
3
4
5
6
7
```

{{% notice tip %}}
**Häufige Schülerfrage:** "Warum wird 0-7 anstelle von 1-8 ausgegeben?"

Weil `i` bei 0 startet und `i++` nach dem `console.log` ausgeführt wird. Wenn Sie 1-8 möchten, starten Sie mit `let i = 1` und verwenden Sie `i <= 8`.
{{% /notice %}}

### Schlüsselkonzept: `i++`

`i++` ist eine Kurzform für `i = i + 1`. Es erhöht den Zähler um 1 bei jeder Schleife. Ohne diese Anweisung läuft die Schleife für immer (Endlosschleife).

## Variablen und Datentypen

### Drei Möglichkeiten, Variablen zu deklarieren

```javascript
var x = 5;    // ältere Methode (Funktionsbereich)
let y = 6;    // moderne Methode (Blockbereich, kann geändert werden)
const z = 11; // Konstante (kann nach der Zuweisung nicht mehr geändert werden)
```

Ausgabe (bei Protokollierung):
```javascript
console.log(x); // 5
console.log(y); // 6
console.log(z); // 11
```

### String-Beispiele

```javascript
let animal = "Elefant";
let alphabet = "abc";
let name = "John";
console.log(animal);
console.log(typeof animal);
```

Ausgabe:
```
Elefant
string
```

### Zahlen-Beispiele

```javascript
let age = 16;
let weight = 7.5;
console.log(age);
console.log(weight);
console.log(typeof age);
```

Ausgabe:
```
16
7.5
number
```

### Boolean-Beispiele

```javascript
let truth = true;
let lie = false;
console.log(truth);
console.log(lie);
console.log(typeof truth);
```

Ausgabe:
```
true
false
boolean
```

### Undefined-Beispiel

```javascript
let x = undefined;
console.log(x);
console.log(typeof x);
```

Ausgabe:
```
undefined
undefined
```

### Objekt-Beispiele

```javascript
const person = {firstName: "John", lastName: "Doe"};
const cars = ["Saab", "Volvo", "BMW"];
const date = new Date("2022-03-25");

console.log(person);
console.log(cars);
console.log(typeof person);
```

Ausgabe:
```
{firstName: "John", lastName: "Doe"}
["Saab", "Volvo", "BMW"]
object
```

### Der `typeof` Operator

```javascript
console.log(typeof "Amy");    // "string"
console.log(typeof 0);        // "number"
console.log(typeof (3));      // "number"
console.log(typeof (3 + 4));  // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof [1, 2]);   // "object"
```

{{% notice tip %}}
**Häufige Schülerfrage:** "Warum ist der `typeof` eines Arrays `object` und nicht `array`?"

In JavaScript sind Arrays eine spezielle Art von Objekten. Um zu prüfen, ob etwas ein Array ist, verwenden Sie `Array.isArray([1, 2])`, welches `true` zurückgibt.
{{% /notice %}}

## Arrays

### Arrays erstellen

```javascript
// Alle drei Methoden erzeugen dasselbe Array:
let fruits1 = new Array("Apfel", "Orange", "Mango");
let fruits2 = Array("Apfel", "Orange", "Mango");
let fruits3 = ["Apfel", "Orange", "Mango"];

console.log(fruits3);
console.log(fruits3.length);
```

Ausgabe:
```
["Apfel", "Orange", "Mango"]
3
```

### Eigenschaften von Arrays

#### Zugriff per Index

```javascript
let fruits = ["Apfel", "Orange", "Mango"];
console.log(fruits[0]); // erstes Element
console.log(fruits[1]); // zweites Element
console.log(fruits[2]); // drittes Element
```

Ausgabe:
```
Apfel
Orange
Mango
```

{{% notice tip %}}
**Häufige Schülerfrage:** "Warum beginnt das erste Element bei 0?"

Array-Indizes beginnen in den meisten Programmiersprachen bei 0. Also ist `fruits[0]` das erste Element, `fruits[1]` das zweite und so weiter.
{{% /notice %}}

#### Änderung per Index

```javascript
let fruits = ["Apfel", "Orange", "Mango"];
fruits[1] = "Banane";
console.log(fruits);
```

Ausgabe:
```
["Apfel", "Banane", "Mango"]
```

#### Länge-Eigenschaft

```javascript
let fruits = ["Apfel", "Orange", "Mango"];
console.log(fruits.length);
```

Ausgabe:
```
3
```

#### Konstruktor-Eigenschaft

```javascript
let fruits = ["Apfel", "Orange", "Mango"];
console.log(fruits.constructor);
```

Ausgabe:
```
function Array() { [native code] }
```

### Array-Iteration (forEach)

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(item) {
  console.log(item);
});
```

Ausgabe:
```
1
2
3
4
5
```

### Array-Methoden

#### concat() - Arrays verbinden

```javascript
let arr1 = ["A", "B"];
let arr2 = ["C", "D"];
let result =