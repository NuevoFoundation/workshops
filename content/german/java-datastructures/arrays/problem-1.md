```markdown
---
title: "Problem 1: Array Grundlagen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---
<!--<link rel="stylesheet" href="../../style.css">-->

## Aufgabe 1: Ausgeben

Wir haben ein Array mit bestehenden Restaurants in unserem System erstellt! Wir brauchen deine Hilfe, um alles auszugeben, damit wir keine doppelten Restaurants aufnehmen.

{{% notice tip %}}
1. Verwende eine `for`-Schleife, um den Inhalt des Arrays auszugeben.
2. Verwende die Methode `length()`, um die Größe des Arrays zu ermitteln.
3. Schau dir das folgende Beispiel an.
{{% /notice%}}

Wenn uns das folgende Array gegeben ist:

```js javascript
String[] restaurants = { "Burger King", "Chipotle", "Panda Express", "McDonalds" };
```

sollte die Antwort so ausgegeben werden:

```js javascript
String answer = "Burger King,Chipotle,Panda Express,McDonalds";
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-1-getRestaurant" target="_blank">Replit starten</a>

## Aufgabe 2: Elemente ändern

Oh nein! McDonalds hat kein Essen mehr! Ändere die Restaurantliste, bevor die Leute anfangen, bei McDonalds zu bestellen, und enttäuscht sind, weil kein Essen verfügbar ist. Glücklicherweise ist "Pizza Hut" bereit zu helfen! Ersetze McDonalds durch Pizza Hut im Index.

{{% notice tip %}}
1. Starte
2. Finde zuerst den Index von McDonalds
3. Denke an die Anführungszeichen um `"Pizza Hut"`
4. Schau dir das folgende Beispiel an!
{{% /notice%}}

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "McDonalds"};
//ersetze "McDonalds" mit "Pizza Hut"

```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-2-insertRestaurant" target="_blank">Replit starten</a>
```