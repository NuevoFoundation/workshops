---
title: "Problem 1: Grundlagen einer Warteschlange"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 
<!--<link rel="stylesheet" href="../../style.css">-->

## Aufgabe 1: Warteschlange für neue Bestellungen leeren

Ein neues Restaurant wurde zu Nuevo Eats hinzugefügt! Neue Bestellungen strömen herein und die Warteschlange ist mit Bestellungen überflutet! Die Beliebtheit der verschiedenen Tacos wuchs schnell und das Restaurant ist überlastet. Finde eine Möglichkeit, alle Elemente zu löschen, um das Restaurant zu entlasten!

{{% notice tip %}}
1. Wie kannst du durch die Warteschlange iterieren?
2. Versuche, die Warteschlange beim Durchgehen zu leeren!
3. Schau dir das Beispielmenü an!
{{% /notice%}}

```js javascript
// Dies verwendet eine Liste als Organisator für die Warteschlange.
Queue<String> orders = new PriorityQueue<>();

orders.add("Fish Taco");
orders.add("Beef Taco");
orders.add("Chicken Taco");
orders.add("Fish Taco");
orders.add("Beef Taco");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Clear" target="_blank">Launch Replit</a>

## Aufgabe 2: Verwenden der Prioritätswarteschlange zur Ermittlung des Mindestpreises

Ein Restaurant verwendet eine Prioritätswarteschlange, um Bestellungen zu verwalten. Das Restaurant möchte Bestellungen anhand ihrer Preise einsehen, um besser vorzubereiten, welche Mahlzeiten sie zubereiten. Insbesondere möchten sie in der Lage sein, den n-ten Mindestpreis in ihrer Liste zu finden. Schreibe eine Funktion, die ihre Warteschlange von Bestellungen überprüft und den n-ten Mindestpreis zurückgibt.

{{% notice tip %}}
1. Wie stellst du sicher, dass die Liste in der richtigen Reihenfolge ist?
2. Was macht es am einfachsten, den Mindestpreis zu finden?
3. Was, wenn sie nach dem 5. Mindestpreis (oder niedrigsten Preis) suchen?
{{% /notice%}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Min" target="_blank">Launch Replit</a>