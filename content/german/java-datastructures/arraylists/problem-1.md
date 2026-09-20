---
title: "Problem 1: ArrayList Grundlagen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/unwrTbTILmA" title="Problem 1: ArrayList Basics - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

## Aufgabe 1: Einfügen

Der Taco-Truck ist jetzt die Straße runter verfügbar! Die neuen Mitarbeiter haben Schwierigkeiten, den Überblick über alle verschiedenen Bestellungen zu behalten. Hilf ihnen, die Artikel mithilfe von `ArrayList`s zu organisieren!

```js javascript
/*
Dan bestellt bei seinem Lieblings-Taco-Laden:
    - 2 Bestellungen von "Carne Asada"
    - 4 Bestellungen von "Carnitas"
    - 1 Bestellung von "Pollo"
    - 2 Bestellungen von "Birria"

    Gib eine ArrayList mit all diesen Elementen in dieser Reihenfolge zurück.
*/
```

{{% notice tip %}}
1. Wie kannst du Artikel zur Liste hinzufügen?
2. Was möchte Dan in der Bestellung?
{{% /notice %}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DInsert?lite=true" title="Problem 1: ArrayList Basics - Replit editor 1"></iframe>

## Aufgabe 2: Elemente abrufen

Ein Restaurant, das chinesisches Essen verkauft, hat gerade in der Nähe eröffnet. Eine große Anzahl von Bestellungen ist gerade eingegangen, und der Manager hat Schwierigkeiten, den Überblick zu behalten, sodass sie alles in einer `ArrayList` gespeichert haben. Hilf dabei, das Programm zu beenden, um den angegebenen String an einem bestimmten Index zurückzugeben.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Hotdog"); 

// Gibt "Pizza" zurück, da es das 0. Element im Menü ist
item = find(menu, 0);
```

{{% notice tip %}}
1. Wie kannst du durch die Liste iterieren?
2. Schau dir das Beispielmenü an!
{{% /notice%}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DFind?lite=true" title="Problem 1: ArrayList Basics - Replit editor 2"></iframe>

## Aufgabe 3: Elemente entfernen

Das gleiche chinesische Restaurant hat einen Fehler in seinem Code! Bestellungen wurden zufällig dupliziert, und die `ArrayList` sind mit Kopien von Bestellungen gefüllt. Hilf dem Besitzer, indem du ein Programm schreibst, um die ersten `n` Vorkommen einer bestimmten Bestellung in der `ArrayList` zu entfernen.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Pizza");
menu.add("Pizza");
menu.add("Hotdog"); 

// Entferne die ersten beiden Pizza-Bestellungen
item = remove(menu,"Pizza", 2);

// Das Menü wird nun das folgende Array sein: {"Hotdog", "Hamburger", "Pizza", "Hotdog"}
```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DRemove?lite=true" title="Problem 1: ArrayList Basics - Replit editor 3"></iframe>