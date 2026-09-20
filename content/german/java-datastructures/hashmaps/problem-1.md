---
title: "Problem 1: Grundlagen von HashMap"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

## Aufgabe 1: Verwenden einer Hashmap zur Organisation von Daten

Es ist eine Party! Ein Kunde veranstaltet eine große Geburtstagsparty für mehr als 20 Personen! Jeder hat seine eigene Bestellung. Um die chaotischen Bestellungen zu organisieren, entscheidest du dich, eine HashMap mit `String`s zu erstellen. Der Name des Geburtstagskindes ist Isabella, aber ihr Name fehlt in der Liste. Kannst du herausfinden, was Isabella bestellt hat?

{{% notice tip %}}
1. Erinnerst du dich an die Methoden der HashMap?
2. Sieh dir das Beispiel unten an!
{{% /notice%}}

```js javascript
// Beispiel einer aktuellen HashMap
HashMap<String, String> order = new HashMap<String, String>();

// Schlüssel, Wert
order.put("Justin", "Sprite");
order.put("George", "Coke");
order.put("Sam", "Fanta");
order.put("Eva", "Coke");
order.put("Olivia", "Coke");
...
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/HashMapGet" target="_blank">Launch Replit</a>