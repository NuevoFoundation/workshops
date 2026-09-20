---
title: "Methoden"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 
## Prioritätswarteschlangen

Eine `PriorityQueue` wird verwendet, wenn Objekte basierend auf ihrer Priorität verarbeitet werden sollen. In diesem Fall möchten wir die Warteschlange nach der Zeit sortieren, die der Kunde bereits gewartet hat. Es ist bekannt, dass eine Warteschlange das First-In-First-Out-Prinzip verwendet, doch manchmal müssen die Elemente der Warteschlange nach Priorität verarbeitet werden – genau dann kommt die `PriorityQueue` ins Spiel. Die `PriorityQueue` basiert auf einem Prioritäts-Heap. Die Elemente der Prioritätswarteschlange werden entweder nach der Natürlichen Ordnung oder durch einen Comparator angeordnet, der bei der Erstellung der Warteschlange angegeben wird, je nachdem, welcher Konstruktor verwendet wird.  

Bevor wir eine Warteschlange erstellen können, müssen wir die Klasse `PriorityQueue` `importieren`. Um uns das Leben zu erleichtern, können wir stattdessen ein `*` verwenden, um alle Klassen in der Bibliothek zu importieren. Das sieht folgendermaßen aus:

```js javascript
// Importiert PriorityQueue, unter anderem
import java.util.*; 
```
Es gibt mehrere Methoden, die auf einer Prioritätswarteschlange verwendet werden können, und falls Sie interessiert sind, können Sie die Methoden gerne selbst nachschlagen. Wir werden uns jedoch nur auf die wichtigsten Methoden konzentrieren: `add()`, `peek()` und `poll()`.

<hr>

## Erstellen einer Prioritätswarteschlange
    
```js javascript
Queue<Integer> orders = new PriorityQueue<>();
```

Es gibt verschiedene Möglichkeiten, die Prioritätswarteschlange zu ordnen, und es liegt an Ihnen, zu entscheiden, wie Sie sie implementieren möchten.

<hr>

## Elemente hinzufügen

Sie können ein Element mit der Methode `add()` zu einer Warteschlange hinzufügen. Die `PriorityQueue` wird die Elemente automatisch für Sie sortieren. Standardmäßig erfolgt dies in der natürlichen Reihenfolge eines Objekts, aber Sie können dies an Ihre Bedürfnisse anpassen.

```js javascript
add(1);
add(2);
add(3);

// Erstellt eine Warteschlange mit den Elementen [1, 2, 3]
```

<hr>

## Elemente abrufen

`peek()` gibt das oberste Element zurück, ohne es zu entfernen.

```js javascript
queue.peek();

// Gibt 1 zurück
// Warteschlange enthält [1, 2, 3]
```

<hr>

## Elemente entfernen

`poll()` gibt das oberste Element zurück und entfernt es aus der Warteschlange.

```js javascript
queue.poll();

// Gibt 1 zurück
// Warteschlange enthält [2, 3]
```

<hr>

Mit diesen drei Methoden im Hinterkopf, werfen wir einen Blick auf ein Beispiel.

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // Hauptmethode
    public static void main(String args[]) {
        // Erstellen einer leeren Prioritätswarteschlange
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();
 
        // Hinzufügen von Elementen zur pQueue mit add()
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // Ausgeben des obersten Elements der Prioritätswarteschlange
        System.out.println(pQueue.peek());
 
        // Ausgeben des obersten Elements und Entfernen 
        // aus der Prioritätswarteschlange
        System.out.println(pQueue.poll());
 
        // Ausgeben des obersten Elements erneut
        System.out.println(pQueue.peek());
    }
}
```

Wir haben also drei Kunden mit verschiedenen Wartezeiten: `10`, `30` und `60`. Was denken Sie, was der Compiler ausgeben wird?

Schauen wir uns den Code genauer an. In der ersten Zeile rufen wir `pQueue.peek()` auf. Was macht `peek()`? Peek gibt einfach das oberste Element zurück. Was ist das oberste Element? Da die Warteschlange bereits sortiert ist, sollte das kleinste Element `10` gedruckt werden.

Wie sieht es mit `pQueue.poll()` aus? Es sollte genau dasselbe tun wie `peek` zuvor, aber jetzt entfernt es das oberste Element aus der Warteschlange, in diesem Fall `10`.

Was passiert, wenn wir `peek()` erneut aufrufen? Da `10` jetzt nicht mehr existiert, wird `30` das neue oberste Element sein.

Das endgültige Ergebnis könnte so aussehen:

```js javascript
10
10
30
```

Moment mal! Wollten wir nicht, dass die Personen, die am längsten in der Warteschlange gewartet haben, zuerst oben in der Warteschlange stehen? Es sieht so aus, als ob die Warteschlange die kleinsten Elemente zuerst ausgibt, aber was wir eigentlich wollen, ist das größte Element zuerst. Um dies zu erreichen, müssen wir die Warteschlange einfach anders instanziieren. `Collections.reverseOrder()` kehrt die Reihenfolge unserer Warteschlange um. So sieht das aus!

```js javascript
PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
```
Jetzt sollte unsere Implementierung korrekt sein.

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // Hauptmethode
    public static void main(String args[]) {
        // Erstellen einer leeren Prioritätswarteschlange
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
 
        // Hinzufügen von Elementen zur pQueue mit add()
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // Ausgeben des obersten Elements der Prioritätswarteschlange
        System.out.println(pQueue.peek());
 
        // Ausgeben des obersten Elements und Entfernen 
        // aus der Prioritätswarteschlange
        System.out.println(pQueue.poll());
 
        // Ausgeben des obersten Elements erneut
        System.out.println(pQueue.peek());
    }
}
```

Zwischenfrage: Was wird jetzt von dieser `pQueue` ausgegeben?

Antwort:
```js javascript
60
60
30
```