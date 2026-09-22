---
title: "JavaScript: JSappy Bird"
description: "Lerne alles über Variablen, Funktionen und Bedingungen, indem du einen Flappy Bird-Klon erstellst."
date: 2019-07-23T10:42:43-07:00
difficulties: ["Anfänger", "Fortgeschritten"]
draft: true
hidden: true
---

![alt text](resources/_gen/images/flappy.png "JSappyBird")

1. **Lade die benötigten Dateien herunter.** <link_here>

Die Vorlage enthält die folgenden Dateien:

- phaser.min.js, das Phaser-Framework v2.4.3.
- index.html, auf der das Spiel angezeigt wird.
- main.js, eine Datei, in der wir unseren gesamten Code schreiben werden.
- assets/, ein Verzeichnis mit 2 Bildern.
- Activity 1.js
- Activity 2.js
- Activity 3.js

Die Datei index.html ist die Hauptseite für unser Flappy Bird-Spiel, das auch unsere zwei JavaScript (`.js`)-Dateien verwendet. Die Datei **phaser.min.js** ist das Spiele-Framework, das wir für die Erstellung von Browser-Games verwenden. Die andere Datei ist **main.js**, die unsere gesamte JavaScript-Logik enthalten wird. Die drei Aktivitätsdateien helfen dir, dein Spiel funktionsfähig zu machen. Die Teile, die du hinzufügen musst, sind mit 🐤🐤🐤 markiert.

Viel Spaß!

### Variablen

Variablen sind einfach Namen, die wir Werten wie Strings, Zahlen und Wahrheitswerten (Booleans) geben können. Wir verwenden Variablen, um Informationen zu speichern, damit der Computer sie nachverfolgen kann. Variablen werden durch das Schlüsselwort `var` und den Namen der Variablen erstellt. Anschließend kannst du die Variable mithilfe eines `=` mit den Informationen zuweisen, die du speichern möchtest.

Zum Beispiel:

```js
var world = "Hallo Welt";
var x = 88;
var happy = true;
```

Du kannst den Wert, auf den der Name verweist, auch ändern, wie hier:

```js
var x = 4;
x = 10;
```

In diesem Beispiel wird die Variable `x` zuerst auf 4 gesetzt und dann auf 10 neu zugewiesen.

Der folgende Code erstellt ein neues Phaser-Spielobjekt und speichert es in einer Variablen, um es für unser Spiel zu verwenden.

```js
var game = new Phaser.Game(800, 600);
```

## Aktivität 1: Nutzen wir Booleans und boolesche Ausdrücke

### Bedingungen

Wir können `if`-Anweisungen verwenden, um einen Codeblock nur dann auszuführen, wenn bestimmte Bedingungen erfüllt sind.

Zum Beispiel:

```js
if (isRainingOutside == true) {
  takeUmbrella = true;
}
```

Innerhalb der `()` neben `if` solltest du einen _booleschen Ausdruck_ angeben. **Booleans** sind `true`- oder `false`-Aussagen. Wir können dies in unserer `if`-Anweisung verwenden. Wenn der Ausdruck `true` ist, wird der Code in `{ }` ausgeführt.

Wir können auch boolesche Ausdrücke verwenden, um zu überprüfen, ob eine Zahl in einem bestimmten Bereich liegt:

![Vergleichsoperatoren](https://imgur.com/F9gGHiI.png)

Du kannst **boolesche Ausdrücke** auch mit dem Operator `&&` (UND) und `||` (ODER) verbinden.

![alt text](resources/_gen/images/statements.png "statements")

`&&` erfordert, dass beide _booleschen Ausdrücke_ `true` sind, während `||` nur eine der beiden _booleschen Ausdrücke_ als `true` erfordert.

Zum Beispiel:

```js
// ergibt true, da sowohl 5 kleiner als 8 als auch 9 ungleich 10 ist.

(1 < 100 &&
  (5 != 10)(
    // ergibt true, da mindestens ein Ausdruck true ist
    5 == 5
  )) ||
  10 > 20;
```

#### Öffne `Activity 1.js`, wo du eine Bedingung hinzufügen wirst, die überprüft, dass der Vogel sich zwischen der oberen Bildschirmgrenze (y = 0) und der unteren Bildschirmgrenze (y = 490) befindet!

## Aktivität 2: Fügen wir nun eine Funktion hinzu, die bewirkt, dass der Vogel springt

### Funktionen

**Eine Funktion kann als Aufgabe betrachtet werden.** Einige Aufgaben sind kurz und einfach wie das Addieren von `1 + 1` oder das Ausdrucken von `„Hallo Welt!”`. Funktionen können verwendet werden, um dieselben Aufgaben mehrfach auszuführen. In diesem Fall werden wir eine Funktion schreiben, um den Vogel springen zu lassen!

„Springen“ in diesem Spiel bedeutet einfach das Ändern der _y-Position_ des Vogels.

#### Öffne `Activity 2.js`, wo wir eine Funktion namens `jump` hinzufügen.\*\*

Das können wir mit dieser Anweisung in der `jump`-Funktion tun:

```js
bird.body.velocity.y = -300;
```

Der Wert kann angepasst werden, je nachdem, wie hoch du möchtest, dass der Vogel springt! Probiere verschiedene Werte aus, um zu sehen, wie sich die Sprunghöhe des Vogels ändert, wenn du die Leertaste drückst.

Jetzt kann dein Vogel durch die Luft fliegen!

## Aktivität 3: Lasst uns Hindernisse hinzufügen

Momentan hat dein Vogel nichts, dem er auf dem Bildschirm ausweichen muss, was das Spiel zu einfach macht! Wir können den Schwierigkeitsgrad erhöhen, indem wir Hindernisse zum Ausweichen hinzufügen! Dazu musst du Bedingungen und Schleifen verwenden. Wir haben bereits Bedingungen behandelt, daher erklären wir jetzt Schleifen.

### Schleifen

Schleifen werden verwendet, um einen Codeblock mehrfach auszuführen. Es gibt viele Arten von Schleifen, aber für dieses Projekt wirst du eine `for`-Schleife verwenden.

`For`-Schleifen haben diese Struktur:

```js
for (Anweisung 1; Anweisung 2; Anweisung 3) {
  // Codeblock, der ausgeführt wird
}
```

- Anweisung 1 wird einmal vor der Ausführung des Codes innerhalb der `{ }` ausgeführt.
- Anweisung 2 definiert die Bedingung, bei der die Schleife aufhören soll zu laufen.
- Anweisung 3 wird bei jeder Iteration der Schleife ausgeführt.

Zum Beispiel:

```js
var sum = 0;
for (var i = 0; i < 7; i += 1) {
  sum = sum + 1;
}
```

Nachdem dieser Code ausgeführt wurde, hat `sum` den Wert 6. Das liegt daran, dass die Schleife 6 Mal `1` zu der Variablen hinzugefügt hat.
Du wirst bemerken, dass wir in der ersten Anweisung in der Schleife eine Variable namens `i` erstellt