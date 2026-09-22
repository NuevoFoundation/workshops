---
title: "micro:bit: Programmieren mit Mini-Computern"
description: "Mit MicroBits JavaScript und Hardware lernen"
date: 2019-07-23T14:54:53-07:00
download: "https://github.com/NuevoFoundation/workshops/tree/master/content/microbit"
draft: true
hidden: true
icon: "fas fa-microchip"
language: "blocks"
topics: ["hardware"]
prereq: "Keine"
difficulties: ["Anfänger", "Mittelstufe"]
---

### Eine Einführung in JavaScript und Hardware mit [MicroBits](https://microbit.org/guide/)

![alt text width="5%"](https://media.giphy.com/media/1nOL7s74KmSk0zDlDD/giphy.gif "Logo de Nuevo - Nuvi")

## Die Grundlagen

## Was ist JavaScript?

JavaScript ist eine von vielen Programmiersprachen und wird als die Programmiersprache des Internets betrachtet. Es wird verwendet, um das Verhalten von Webseiten zu steuern, wie z. B. Mausklicks, Pop-Up-Fenster, Datenflüsse und viele andere Funktionen.

## Variablen

Variablen sind Container in deinem Code, die eine einzelne Zahl, ein Wort oder andere Informationen speichern können. Diese Informationen können verwendet und geändert werden, indem man später im Programm auf die Variable zugreift. Das bedeutet, dass du deinen Code anweist, auf die gespeicherten Informationen zuzugreifen.

Mit wenigen Ausnahmen können Variablen beliebig benannt werden und Buchstaben, Ziffern, Unterstriche und Dollarzeichen enthalten. ABER sie dürfen keine Leerzeichen enthalten und sollten immer mit einem Buchstaben beginnen.

Variablen können unterschiedliche Datentypen speichern. Werfen wir einen Blick auf die grundlegenden.

## Die Datentypen

### Ganzzahlen

Ganzzahlen sind Zahlen ohne Dezimalstellen. Zum Beispiel: `3`, `100`, `6000`, `-3` und so weiter!

```javascript
// Dies ist ein Kommentar, Kommentare beschreiben, was dein Code macht
// Unten sind verschiedene Beispiele für Variablen

// Beispiele für Ganzzahlen (Zahlen ohne Dezimalstellen):

var a = 5;
var b = 10;
var c = 15;
```

### Dezimalzahlen

Dezimalzahlen sind Zahlen mit Dezimalstellen, z. B. `0.5`, `1.5` und so weiter.

```javascript
// Beispiele für Dezimalzahlen-Variablen:

var x = 0.5;
var y = 1.5;
var z = 2.0;
```

### Strings

Strings sind einfach, was Programmierer Wörter nennen. Wenn es dir hilft, dir zu merken, dass Strings Wörter sind, denke an sie als eine "Zeichenkette". Strings können alles wie deinen Namen oder den Namen deines Lieblingshaustieres sein.

Strings werden durch "Anführungszeichen" eingeschlossen.

```javascript
// String (eines oder mehrere Wörter, auch bekannt als "Zeichenkette") Variablenbeispiele:
// String-Werte werden von "Anführungszeichen" umgeben

var firma = "Mein Unternehmen";
var kurs = "Programmieren mit Micro:Bits!";
var botschaft = "Programmieren macht so viel Spaß!";
```

### Zeichen

Zeichen sind einzelne Buchstaben. Sie werden durch 'einzelne Anführungszeichen' eingeschlossen.

```javascript
// Charakter (ein einzelner Buchstabe) Variablenbeispiel:
// Charakterwerte werden von 'einzelnen Anführungszeichen' umgeben

var buchstabe = 'A';
```

### Booleans

Manchmal möchten Programmierer überprüfen, ob bestimmte Bedingungen wahr oder falsch sind. Diese Informationen werden im Boolean-Datentyp gespeichert.

Falls du dich fragst, warum sie Boolean heißen: Ein Mann namens George Boole hat sie erfunden.

```javascript
// Boolean (wahr oder falsch) Variablenbeispiel

var koennenSchweineFliegen = false;
var programmierenIstCool = true;
```

## Mathematische Operationen

Ah ja, unser aller Liebling – Computer sind im Wesentlichen Taschenrechner, also sollte es selbstverständlich sein, dass wir Mathe in unseren JavaScript-Programmen anwenden können. Hier einige Beispiele:

### Addition

```javascript
var a = 13;
var b = 10;
var c = a + b;     // c = 25
c += a;            // c = 40
c++;               // c = 41
```

### Subtraktion

```javascript
var a = 15;
var b = 10;
var c = a - b;     // c = 5
c -= a;            // c = -10
c--;               // c = -11
```

### Multiplikation

```javascript
var a = 2;
var b = 5;
var c = a * b;     // c = 10
c *= a;            // c = 20
```

### Division

```javascript
var a = 20;
var b = 2;
var c = a / b;     // c = 10
c /= a;            // c = 5
```

### Modulo

Ah ja, der sieht kompliziert aus, ist es aber nicht. Der Modulo-Operator gibt einfach den Rest der Division an. Zum Beispiel: `10 % 2 = 0`, weil bei der Division von 10 durch 2 kein Rest übrig bleibt.

```javascript
var d = 10 % 2;   // d = 0
var e = 5 % 2;    // e = 1
```

### Ausdrücke Ausgeben

Manchmal möchtest du, dass dein Computer Texte oder Daten deiner Variablen anzeigt. Dafür nutzen wir `print`-Befehle.

```javascript
console.log("Das wird in der Konsole angezeigt, aber nicht auf der Webseite.");
alert("Dies wird als Pop-Up-Meldung angezeigt.");

var benutzerAntwort = prompt("Dies wird als Pop-Up mit einem Eingabefeld für den Benutzer angezeigt.");
```

### Bedingungen und Logische Operatoren

Bedingungen, meistens `if`-Anweisungen genannt, werden verwendet, um festzulegen, welcher Code ausgeführt werden soll, abhängig vom Wert deiner Variablen oder anderen Bedingungen.

```javascript
// Bedingungen
if (true) {
  // Dieser Abschnitt wird ausgeführt
}
if (false) {
  // Dieser Abschnitt wird nicht ausgeführt
}

var alter = 10;
if (alter < 18) {
  // Wenn das Alter kleiner als 18 ist
  print("Du bist noch nicht erwachsen! :( ");
}
```

### Schleifen

Und zu guter Letzt haben wir Schleifen. Diese erlauben es dir, Teile deines Codes zu wiederholen, bis eine bestimmte Bedingung erfüllt ist.

Die Funktion `alert()` in den untenstehenden Codeausschnitten zeigt ein Pop-Up an, das den übergebenen Parameter anzeigt.

```javascript
// while-Schleife - zählt