---
title: "Über Arrays iterieren"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 6
---

Einer der häufigsten Array-Operationen ist das Iterieren über die Werte und das Verarbeiten jedes einzelnen auf irgendeine Weise. Lassen Sie uns einige der einfachsten Möglichkeiten besprechen, dies zu erreichen:

## Array.forEach()
Die Methode `forEach()` ruft eine Funktion (eine Callback-Funktion. In diesem Fall eine Funktion namens `printBr`) einmal für jedes Array-Element auf.

Die an `forEach` übergebene Funktion wird einmal für jedes Element im Array ausgeführt, wobei das Array-Element als Argument an die Funktion übergeben wird. Nicht zugewiesene Werte werden in einer `forEach`-Schleife nicht iteriert.

**Syntax:**
```javascript
arrayName.forEach(functionName);
```

<b>Beispiel:</b>
![#Bild nicht gefunden](../../img/foreach.png)