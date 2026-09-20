---
title: "Eigenschaften"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

Array-Eigenschaften oder -Merkmale sind eine Möglichkeit, die Attribute des Arrays zu beschreiben. Beispiele sind: die Gesamtanzahl der Elemente, der Wert an einem bestimmten Index usw...

Hier ist eine Liste der Eigenschaften des Array-Objekts zusammen mit deren Beschreibung.

## Constructor()

Gibt eine Referenz auf die Array-Funktion zurück, die das Objekt erstellt hat.

**Syntax:**
```javascript
arrayName.constructor;
```

**Beispiel:**
![#Bild nicht gefunden](../../img/constructor.png)

## Index()

Diese Eigenschaft repräsentiert den nullbasierten Index des Treffers im String. Index bietet eine Möglichkeit, auf Elemente zuzugreifen oder diese basierend auf ihrer Position im Array zu ändern.

### Zugriff auf ein Array-Element über den Index:

**Syntax:**
```javascript
var value = arrayName[index];
```

**Beispiel:**
![#Bild nicht gefunden](../../img/indexaccess.png)

### Modifikation eines Array-Elements über den Index:

**Syntax:**
```javascript
arrayName[index] = newValue;
```

**Beispiel:**
![#Bild nicht gefunden](../../img/indexmodify.png)

## Length() 
Gibt die Anzahl der Elemente in einem Array wieder.

**Syntax:**
```javascript
var length = arrayName.length;
```

**Beispiel:**
![#Bild nicht gefunden](../../img/length.png)