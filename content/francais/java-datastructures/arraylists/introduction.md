```markdown
---
title: "Introduction"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

Nous avons appris ce qu'étaient les tableaux et même exploré les tableaux multidimensionnels. Malheureusement, les tableaux présentent de nombreuses limitations et peuvent parfois être difficiles à utiliser. Une des limitations des tableaux est leur taille explicite. Si un tableau ne peut stocker que 10 éléments, vous ne pourrez y stocker que jusqu'à 10 éléments. Les `ArrayList`s sont une structure de données fantastique avec une taille dynamique, ce qui signifie que vous pouvez ajouter ou retirer des éléments à tout moment. Il existe bien d'autres fonctionnalités que les `ArrayList`s offrent, ce qui en fait des structures de données très puissantes.

![image](../img/arraylist.png)

Avant de créer un `ArrayList`, nous devrons importer la classe `ArrayList`. Cela ressemblera à ceci :

```js javascript
import java.util.ArrayList; // importer la classe ArrayList
```

Rappelez-vous, notre objectif est de créer un `ArrayList` qui suit la commande du client. Nous pouvons le faire de cette manière :

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
    }
}
```

Comme vous pouvez le voir, tout comme les tableaux, nous devons déclarer le type de données que le `ArrayList` contiendra. Dans ce cas, nous indiquerons qu'il contient des `String`, puisque les éléments du menu sont des chaînes de caractères `String`.

Pour ajouter des éléments à une commande, nous utilisons la méthode `add()`. Si le client commande chez Burger King et souhaite un combo avec un Whopper, des nuggets de poulet et des frites, votre méthode pourrait ressembler à ceci :

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
    }
}
```

Si nous souhaitons obtenir le premier élément d'un `ArrayList`, nous pouvons utiliser la méthode `get()` ainsi que le numéro d'index de l'élément de la manière suivante :

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.get(0));
        // Affiche Whopper
  }
}
```

Il existe de nombreuses autres méthodes que vous pouvez utiliser avec un `ArrayList`, mais ceci est un aperçu de ce qu'un `ArrayList` peut réaliser. Les méthodes seront détaillées dans la page suivante.
```