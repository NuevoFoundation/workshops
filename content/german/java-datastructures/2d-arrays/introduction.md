```markdown
---
title: "Einführung"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/DZkUUk64mWM" title="Einführung - YouTube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Was ist ein zweidimensionales Array?

Wir haben bereits viel über Arrays gelernt. Wir wissen, dass ein Array viele verschiedene Typen (Integer, Strings, Doppelwerte usw.) speichern kann, aber wie wäre es mit einem Array, das Arrays speichert?

![image](../img/2darray.png)

Ein 2D-Array hat einen Typ wie `int[][]` oder `String[][]`, mit zwei Paaren von eckigen Klammern. Die Elemente eines 2D-Arrays sind in Zeilen und Spalten angeordnet, und der `new`-Operator für 2D-Arrays gibt sowohl die Anzahl der Zeilen als auch die Anzahl der Spalten an. Beispielsweise:

```js javascript
int[][] A;
A = new int[3][4];
```

Damit wird ein 2D-Array aus `int` erstellt, das 12 Elemente enthält, die in 3 Zeilen und 4 Spalten angeordnet sind. Es gibt auch Initialisierungen für 2D-Arrays. Zum Beispiel erstellt diese Anweisung das 3x4-Array, das im Bild unten dargestellt ist:

```js javascript
int[][] A = {    
                {  1,  0, 12, -1 },
                {  7, -3,  2,  5 },
                { -5, -2,  2, -9 }
            };
```

Ein Array-Initializer für ein 2D-Array enthält die Zeilen von `A`, getrennt durch Kommas und eingefasst zwischen geschweiften Klammern. Jede Zeile wiederum ist eine Liste von Werten, getrennt durch Kommas und eingefasst zwischen geschweiften Klammern. Es gibt auch 2D-Array-Literale mit einer ähnlichen Syntax, die überall verwendet werden können, nicht nur in Deklarationen. Zum Beispiel:

```js javascript
A = new int[][] { 
                    {  1,  0, 12, -1 },
                    {  7, -3,  2,  5 },
                    { -5, -2,  2, -9 }
                };
```
                  
All dies lässt sich natürlich auf drei-, vier- und sogar höherdimensionale Arrays erweitern.
```