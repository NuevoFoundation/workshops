---
title: "Operationen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/NQXV586afr8" title="Operationen - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Erstellen eines Arrays

Arrays werden verwendet, um mehrere Werte in einer einzigen Variablen zu speichern, anstatt für jeden Wert separate Variablen zu deklarieren. Um ein Array zu deklarieren, definieren Sie den Variablentyp mit eckigen Klammern.

```js javascript
String[] restaurants;
```
Wir haben nun eine Variable deklariert, die ein Array von Strings enthält. Um Werte hinzuzufügen, können wir ein Array-Literal verwenden – die Werte in einer durch Kommas getrennten Liste innerhalb von geschweiften Klammern platzieren:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
```

Um ein Array von Ganzzahlen zu erstellen, könnten Sie folgendes schreiben:

```js javascript
int[] myNum = {10, 20, 30, 40};
```
<hr>

## Zugreifen auf Elemente eines Arrays

Auf ein Array-Element greifen Sie zu, indem Sie die Indexnummer verwenden. Diese Anweisung greift auf den Wert des ersten Elements in "restaurants" zu:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);

// Das System gibt "Burger King" aus
```

<hr>

## Ändern eines Elements eines Arrays

Um den Wert eines bestimmten Elements zu ändern, verwenden Sie die Indexnummer:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);
// Das System gibt "Burger King" aus

restaurants[0] = "McDonalds";
System.out.println(restaurants[0]);
// Das System gibt jetzt "McDonalds" aus
```

<hr>

## Die Länge eines Arrays herausfinden

Um herauszufinden, wie viele Elemente ein Array enthält, verwenden Sie die Eigenschaft `length`:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants.length);
// Das System gibt 4 aus
```
<hr>

## Durch ein Array iterieren

Sie können die Elemente des Arrays mit der `for`-Schleife durchlaufen und die Eigenschaft `length` verwenden, um anzugeben, wie oft die Schleife ausgeführt werden soll. Das folgende Beispiel gibt alle Elemente im Array "restaurants" aus:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
for (int i = 0; i < restaurants.length; i++) {
    System.out.println(restaurants[i]);
}

// Ausgabe:
// Burger King
// Chipotle
// Panda Express
// Subway
```