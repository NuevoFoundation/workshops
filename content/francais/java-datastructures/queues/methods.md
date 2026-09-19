```yaml
---
title: "Méthodes"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 
## Files d'attente avec priorités

Une `PriorityQueue` est utilisée lorsque les objets doivent être traités en fonction de leur priorité. Dans ce cas, nous souhaitons trier la file d'attente en fonction du temps d'attente de chaque client. On sait qu'une file d'attente suit l'algorithme Premier Entré, Premier Sorti (First-In-First-Out), mais parfois, les éléments de la file doivent être traités selon leur priorité ; c'est là qu'intervient la `PriorityQueue`. La `PriorityQueue` est basée sur un tas de priorités. Les éléments de la file avec priorités sont ordonnés selon leur ordre naturel, ou selon un comparateur (Comparator) défini lors de la construction de la file, en fonction du constructeur utilisé.

Avant de créer une file d'attente, nous devons importer la classe `PriorityQueue`. Pour simplifier, nous pouvons utiliser un `*` pour importer toutes les classes de la bibliothèque. Cela ressemblera à ceci :

```js javascript
// Importe PriorityQueue, parmi d'autres classes
import java.util.*; 
```
Il existe plusieurs méthodes à utiliser avec une file avec priorités. Si cela vous intéresse, vous pouvez chercher ces méthodes par vous-même. Cependant, nous allons uniquement parler des méthodes les plus importantes pour l'instant : `add()`, `peek()`, et `poll()`.

<hr>

## Création d'une file avec priorités
    
```js javascript
Queue<Integer> orders = new PriorityQueue<>();
```

Il existe plusieurs façons d'ordonner une file d'attente prioritaire, et c'est à vous de décider comment vous souhaitez l'implémenter.

<hr>

## Ajouter des éléments

Vous pouvez ajouter des éléments à une file à l'aide de la méthode `add()`. La `PriorityQueue` triera automatiquement les éléments pour vous. Par défaut, l'ordre utilisé est l'ordre naturel des objets, mais vous pouvez le modifier selon vos besoins.

```js javascript
add(1);
add(2);
add(3);

// Crée une file avec les éléments [1, 2, 3]
```

<hr>

## Accéder aux éléments

La méthode `peek()` renvoie l'élément supérieur sans le supprimer.

```js javascript
queue.peek();

// Retourne 1
// La file contient [1, 2, 3]
```

<hr>

## Supprimer des éléments

La méthode `poll()` renvoie l'élément supérieur et le supprime de la file.

```js javascript
queue.poll();

// Retourne 1
// La file contient [2, 3]
```

<hr>

Avec ces trois méthodes en tête, examinons un exemple.

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // Méthode principale
    public static void main(String args[]) {
        // Création d'une file avec priorités vide
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();
 
        // Ajout d'éléments à la pQueue avec add()
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // Impression de l'élément supérieur de la PriorityQueue
        System.out.println(pQueue.peek());
 
        // Impression de l'élément supérieur et suppression
        // de cet élément dans la PriorityQueue
        System.out.println(pQueue.poll());
 
        // Impression de l'élément supérieur de nouveau
        System.out.println(pQueue.peek());
    }
}
```

Nous avons donc trois clients avec des temps d'attente différents : `10`, `30`, et `60`. Que pensez-vous que le compilateur affichera ?

Analysons un peu le code. Pour la première ligne, nous appelons `pQueue.peek()`. Que fait `peek()` ? Peek retourne simplement l'élément en haut de la file. Quel est cet élément ? Puisqu'il est déjà trié, cela imprimera le plus petit élément, qui est `10`.

Qu'en est-il de `pQueue.poll()` ? Eh bien, cela devrait faire exactement la même chose que `peek()`, sauf qu'il supprime maintenant l'élément supérieur de la file, qui est `10`.

Que se passe-t-il si nous appelons `peek()` de nouveau ? Maintenant que `10` n'existe plus, le nouvel élément supérieur sera `30`.

Donc, la sortie finale devrait ressembler à ceci :

```js javascript
10
10
30
```

Attendez ? Nous voulions que les personnes qui attendent le plus longtemps soient en haut de la file, n'est-ce pas ? Il semblerait que la file affiche les éléments les plus petits en premier, mais en réalité, nous voulons plutôt les éléments les plus grands. Pour y parvenir, il suffit d'instancier la file différemment. `Collections.reverseOrder()` inversera simplement l'ordre de la file. Comme ceci !

```js javascript
PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
```
Maintenant, notre implémentation devrait être solide.

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // Méthode principale
    public static void main(String args[]) {
        // Création d'une file avec priorités vide
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
 
        // Ajout d'éléments à la pQueue avec add()
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // Impression de l'élément supérieur de la PriorityQueue
        System.out.println(pQueue.peek());
 
        // Impression de l'élément supérieur et suppression
        // de cet élément dans la PriorityQueue
        System.out.println(pQueue.poll());
 
        // Impression de l'élément supérieur de nouveau
        System.out.println(pQueue.peek());
    }
}
```

Question de vérification : que va maintenant afficher cette `pQueue` ?

Réponse :
```js javascript
60
60
30
```