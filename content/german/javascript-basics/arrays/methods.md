```markdown
---
title: "Methoden"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 8
---

Methoden repräsentieren Aktionen, die wir mit dem Array ausführen möchten. Sie können verwendet werden, um das Verhalten zu ändern oder bestimmte Operationen mit dem Array durchzuführen.

Um es einfacher zu machen, bieten Arrays viele Methoden. Lass uns einige der grundlegenden Methoden durchgehen, damit du eine Vorstellung davon bekommst, wie sie aussehen.

{{% notice note %}}

#### Wie unterscheiden sie sich von Eigenschaften?

**Eigenschaften** sind im Wesentlichen Informationen, die ein Array besitzt. **Methoden** sind das, was ein Array tun kann.

{{% /notice %}}

## Concat()

Fügt zwei oder mehr Arrays zusammen und gibt ein neues Array zurück.

**Syntax:**
```javascript
var value = arrayName1.concat(arrayName2);
```

**Beispiel:**
![#Kann Bild nicht finden](../../img/concat.png)

## Push()
Fügt ein oder mehrere Elemente am Ende eines Arrays hinzu und gibt die resultierende Länge des Arrays zurück.

**Syntax:**
```javascript
var value = arrayName.push(newElement);
```

**Beispiel:**
![#Kann Bild nicht finden](../../img/push.png)

## Pop()
Entfernt das letzte Element eines Arrays und gibt dieses Element zurück.

**Syntax:**
```javascript
var value = arrayName.pop();
```

<b>Beispiel:</b>
![#Kann Bild nicht finden](../../img/pop.png)

## Shift()

Entfernt das erste Element eines Arrays und gibt dieses Element zurück.

**Syntax:**
```javascript
var value = arrayName.shift();
```

**Beispiel:**
![#Kann Bild nicht finden](../../img/shift.png)

# Unshift()

Fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

**Syntax:**
```javascript
var value = arrayName.unshift(newElement);
```

**Beispiel:**
![#Kann Bild nicht finden](../../img/unshift.png)

## Sort()

Sortiert die Elemente eines Arrays direkt und gibt eine Referenz auf das Array zurück.

**Syntax:**
```javascript
var value = arrayName.sort();
```

**Beispiel:**
![#Kann Bild nicht finden](../../img/sort.png)

# Reverse()

Vertauscht die Elemente eines Arrays direkt: Das erste Array-Element wird zum letzten und das letzte wird zum ersten. Es gibt eine Referenz auf das Array zurück.

**Syntax:**
```javascript
var value = arrayName.reverse();
```

**Beispiel:**
![#Kann Bild nicht finden](../../img/reverse.png)
```