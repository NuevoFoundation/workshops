---
title: "Einführung"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 1
---

Arrays sind eine Datenstruktur, in der jedes ihrer Elemente in einer nummerischen Sequenz angeordnet ist und jedes Element über seine Positionsnummer referenziert wird. In Java ist jedes dieser Elemente eines bestimmten Typs (`String`, `int`, `double` usw.) und die Indizierung beginnt bei Null. Das bedeutet, dass das erste Element in einem Array bei `0` beginnt, das zweite Element bei `1` und so weiter.

![image](../img/array.png)

Hier sind einige wichtige Begriffe, die Sie kennen sollten, bevor wir weiter über Arrays sprechen.

- Die Anzahl der Elemente in einem Array wird als **Länge** des Arrays bezeichnet.
- Der Typ der einzelnen Elemente in einem Array wird als **Basistyp** des Arrays bezeichnet.
- Die Positionsnummer eines Elements in einem Array wird als **Index** dieses Elements bezeichnet.

Für unsere Zwecke möchten wir ein Array erstellen, das alle verschiedenen Restaurants in unserer App enthalten kann. Angenommen, unser Programm muss die Namen von tausend verschiedenen Restaurants verarbeiten. Wir benötigen eine Möglichkeit, alle Daten zu sortieren und zu bearbeiten. Ohne eine Array-Datenstruktur müssten wir das Problem lösen, indem wir tausend verschiedene Variablen für jedes Restaurant erstellen. Und wenn wir etwas Einfaches tun wollten, wie z. B. die Namen jedes Restaurants ausgeben, müssten wir 1000 `print`-Statements einfügen. Dies zu bewältigen, wäre eine große Herausforderung.

Im Gegensatz dazu ermöglichen es Arrays, die gleichen Aktionen in nur einem einzigen Schritt auszuführen. Das Array ist einfach eine einzige Variable, die aber alle 1000 Restaurants in sich enthält.

![image](../img/array2.png)

Die **Länge** des Arrays wäre 1000, da es 1000 einzelne Namen gibt. Der **Basistyp** des Arrays wäre `String`, da die Elemente im Array Strings sind. Der erste Name würde sich an **Index** `0` im Array befinden, der zweite Name an Index `1` und so weiter bis hin zum tausendsten Namen an Index `999`.