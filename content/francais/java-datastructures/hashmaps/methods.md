```yaml
---
title: "Méthodes"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## Hashmaps

Un HashMap peut stocker des éléments sous forme de paires clé/valeur et vous pouvez attribuer ces paires à différents types, tels que des chaînes de caractères ou des entiers.

Comme d’habitude, pour créer un `HashMap`, vous devrez importer la classe HashMap comme suit :

```js javascript
import java.util.HashMap; // importe la classe HashMap

HashMap<String, String> addresses = new HashMap<String, String>();
```
Dans ce cas, nous avons créé un `HashMap` appelé addresses qui stocke des clés de type `String` et des valeurs de type `String`.


## Ajouter des éléments

Pour ajouter des paires clé/valeur dans le HashMap, utilisez la méthode `put()`.

```js javascript
// Importer la classe HashMap
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Créer un objet HashMap appelé capitalCities
        HashMap<String, String> addresses = new HashMap<String, String>();

        // Ajouter des clés et des valeurs (Pays, Ville)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
  }
}
```
Comme vous pouvez le voir, le code ci-dessus insère une paire clé/valeur dans notre HashMap addresses.

## Accéder aux éléments

Pour accéder à un élément dans un `HashMap`, utilisez la méthode `get()`.

```js javascript
// Importer la classe HashMap
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Créer un objet HashMap appelé addresses
        HashMap<String, String> addresses = new HashMap<String, String>();

        // Ajouter des clés et des valeurs (Nom, Adresse)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
                                          
        String junAddress = addresses.get("Jun");
        System.out.println("L'adresse de Jun est : " + junAddress); // affiche l'adresse de Jun
    }
}
```

En utilisant la méthode `get()`, nous appelons `addresses.get("Jun")` et cela renvoie l'adresse de Jun.

Ce sont quelques-unes des méthodes les plus basiques de HashMap. D'autres méthodes peuvent inclure la méthode `remove()`, qui supprime un élément, ou la méthode `size()`, qui renvoie le nombre d'éléments contenus dans le HashMap. Nous fournirons davantage d'exemples pour que vous puissiez les essayer sur la page suivante !
```