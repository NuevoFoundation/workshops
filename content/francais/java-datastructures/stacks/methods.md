```yaml
---
title: "Méthodes"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## Piles

Une pile est similaire à une file d'attente. La seule différence réside dans les noms des méthodes et la manière dont nous récupérons les éléments.

Avant de créer une pile, nous devrons `importer` la classe `stack`. Pour simplifier la tâche, nous pouvons utiliser un `*` afin d'importer toutes les classes de la bibliothèque. Cela ressemblera à ceci.

```js javascript
// Cela importera stack, parmi d'autres classes
import java.util.*;
```
Il existe plusieurs méthodes à utiliser sur une pile. Si cela vous intéresse, vous pouvez rechercher sur Internet plus d'informations sur ces méthodes. Cependant, nous n'allons expliquer ici que les méthodes les plus importantes pour l'instant : `push()`, `peek()` et `pop()`.

<hr>

## Création d'une pile
    
```js javascript
Stack driver = new Stack();
```

<hr>

## Ajouter des éléments

Pour ajouter un élément à la pile, nous pouvons utiliser la méthode `push()`. Cette opération `push()` place l'élément au sommet de la pile.

```js javascript
push(1);
push(2);
push(3);

// Crée une pile avec les éléments [3, 2, 1]
```

<hr>

## Accéder aux éléments

Pour récupérer ou extraire le premier élément de la pile, ou l'élément présent au sommet de la pile, nous pouvons utiliser la méthode `peek()`. L'élément récupéré n'est pas supprimé ou retiré de la pile.

```js javascript
stack.peek();

// Retourne 3
// La pile contient [3, 2, 1]
```

<hr>

## Supprimer des éléments 

Pour retirer un élément de la pile, nous pouvons utiliser la méthode `pop()`. L'élément est retiré et supprimé du sommet de la pile.

```js javascript
stack.pop();

// Retourne 3
// La pile contient [2, 1]
```

<hr>

Avec ces trois méthodes en tête, examinons un exemple.

```js javascript
import java.util.*;
public class Driver {
    public static void main(String []args) {
        // Initialisation par défaut de la pile 
        Stack stack = new Stack(); 
  
        // Ajout des éléments 
        stack.push("Burger King"); 
        stack.push("Subway"); 
        stack.push("Jack in the Box"); 
  
        // Affichage des éléments de la pile 
        System.out.println(stack); 
    }
}
```

Résultat :

```js javascript
["Jack in the Box", "Subway", "Burger King"]
```
```