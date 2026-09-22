```yaml
---
title: "Métodos"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## Hashmaps

Un HashMap puede almacenar elementos en pares clave/valor, y puedes asignar esos pares a diferentes tipos, como cadenas de texto o enteros.

Como de costumbre, para crear un `HashMap`, tendrás que importar la clase HashMap de esta manera.

```js javascript
import java.util.HashMap; // se importará HashMap

HashMap<String, String> addresses = new HashMap<String, String>();
```
En este caso, creamos un `HashMap` llamado addresses que almacena claves del tipo `String` y valores del tipo `String`.


## Añadiendo elementos

Para añadir pares clave/valor en el HashMap, utiliza el método `put()`.

```js javascript
// Importar la clase HashMap
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Crear un objeto HashMap llamado capitalCities
        HashMap<String, String> addresses = new HashMap<String, String>();

        // Añadir claves y valores (Nombre, Dirección)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
  }
}
```
Como puedes ver, el código anterior inserta un par clave/valor en nuestro HashMap llamado addresses.

## Accediendo a elementos

Para acceder a un elemento en un `HashMap`, utiliza el método `get()`.

```js javascript
// Importar la clase HashMap
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Crear un objeto HashMap llamado addresses
        HashMap<String, String> addresses = new HashMap<String, String>();

        // Añadir claves y valores (Nombre, Dirección)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
                                          
        String junAddress = addresses.get("Jun");
        System.out.println("La dirección de Jun es: " + junAddress); // muestra la dirección de Jun
    }
}
```

Usando el método `get()`, llamamos a `addresses.get("Jun")` y se devuelve la dirección de Jun.

Esos son algunos de los métodos más básicos del HashMap. Otros métodos pueden incluir el método `remove()`, que elimina un elemento, o el método `size()` que devuelve cuántos elementos hay en el HashMap. ¡Daremos más ejemplos para que lo pruebes en la siguiente página!
```