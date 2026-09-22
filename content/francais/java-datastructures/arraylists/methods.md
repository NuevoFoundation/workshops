---
title: "Méthodes"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

## Modification des éléments

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.set(1, "Coke");
        // Cela remplace le premier élément (nuggets de poulet) par un Coca à la place
    }
}
```
En utilisant `set()`, vous pouvez définir l'élément à l'indice spécifié sur un nouvel élément.

<hr>

## Suppression des éléments

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.remove(2);
        // Supprime les frites de l'ArrayList
    }
}
```
À l'instar de `set()`, la méthode `remove()` supprime un élément à un numéro d'indice spécifié.

<hr>

## Obtenir la taille d'une ArrayList

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.size());
        // Affiche la taille de l'ArrayList, dans ce cas : 3
    }
}
```
`size()` retourne la taille de l'`ArrayList`.

<hr>

## Itérer sur les éléments

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        for (int i = 0; i < order.size(); i++) {
            System.out.println(order.get(i));
        }
        // Résultats affichés :
        // Whopper
        // Chicken Nugget
        // Fries
    }
}
```

En utilisant une combinaison de la boucle `for` et de la méthode `get`, nous pouvons parcourir l'`ArrayList` et afficher chaque élément à chaque indice.