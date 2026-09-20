---
title: "Operationen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

2D-Arrays funktionieren sehr ähnlich wie normale Arrays, und viele der Konzepte oder Methoden, die wir auf Arrays anwenden, gelten auch für multidimensionale Arrays. Zur schnellen Erinnerung hier, wie man ein 2D-Array initialisiert und auf ein Element zugreift:

```js javascript
public static void main(String[] args) { 
    int[][] arr = new int[10][20]; 
    arr[0][0] = 1; 
    System.out.println(arr[0][0]); 
} 
    // Gibt 1 aus
```

Der einzige schwierige Teil, der anfangs möglicherweise nicht ganz klar ist, ist das Iterieren durch ein 2D-Array. Aber auch dies ist recht einfach. Anstelle einer einzelnen `for`-Schleife verwenden wir stattdessen zwei `for`-Schleifen. Hier ist ein kurzes Beispiel, um Ihnen eine Vorstellung zu geben.

```js javascript
public static void main(String[] args) { 
    int[][] arr = new int[10][20]; 
    int num = 0;

    // Iterieren durch das Array von Arrays
    for (int i = 0; i < arr.length; i++) {

        // Iterieren durch ein einzelnes Array innerhalb des 2D-Arrays
        for (int j = 0; j < arr[i].length; j++) {

            // Auf einzelne Werte zugreifen
            arr[i][j] = num;
            num++;
        }
    }
} 
```

Wie Sie sehen, erstellen wir ein leeres Array namens `arr`. Darin befinden sich `10` Arrays, von denen jedes jeweils `20` Elemente enthält. Um durch alle Arrays zu iterieren, verwenden wir eine Standard-`for`-Schleife, genau wie bei einem normalen Array. Der einzige Unterschied besteht jedoch darin, dass wir jetzt eine zweite `for`-Schleife erstellen müssen, die durch das `i`-te Array iteriert. In diesem Beispiel setzen wir einfach `arr[i][j]` auf `num` und inkrementieren `num++`.