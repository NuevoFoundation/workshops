---
title: "Problem 1: Stack-Grundlagen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 

## Aufgabe 1: Umkehrung mit Stack

Oh nein! Ein neuer Praktikant wurde eingestellt und hat die Liste der Restaurants durcheinandergebracht! Die Eingaben der Restaurants sind in **umgekehrter** Reihenfolge! Zum Glück ist der Stack die perfekte Datenstruktur dafür. Kannst du einen neuen Stack in der richtigen Reihenfolge erstellen?

{{% notice tip %}}
1. Denke daran, dass der Stack nach dem Prinzip Last In First Out (LIFO; wie bei einem Stapel von Tellern) funktioniert.  
2. Wie sieht der ursprüngliche Stack aus?
{{% /notice%}}

```js javascript
// Beispiel des aktuellen Stacks
Stack<String> restaurants = new Stack<>();

restaurants.push("McDonalds");
restaurants.push("Carls Jr.");
restaurants.push("Burger King");
restaurants.push("Chipotle");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackReverse" target="_blank">Replit starten</a>

## Aufgabe 2: Historie speichern

Ein weiterer praktischer Nutzen des Stacks ist die Undo-Funktion. Viele Programme verfügen heutzutage über einen Rückgängig-Button, um die zuletzt vorgenommenen Änderungen zu verfolgen. Der Stack ist die perfekte Datenstruktur dafür! Kannst du eine Funktion erstellen, um die letzte Änderung rückgängig zu machen? Zum Beispiel:

```js javascript
// Beispiel des aktuellen Stacks
Stack<String> myOrder = new Stack<>();

restaurants.push("Getränk");
restaurants.push("Pommes");
restaurants.push("Pizza");
restaurants.push("Pizza");

// Der Benutzer hat eine zusätzliche Pizza bestellt! Wie kannst du diese letzte Änderung rückgängig machen?

Stack.undo() // Entferne die zuletzt hinzugefügte Push-Operation
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackUndo" target="_blank">Replit starten</a>