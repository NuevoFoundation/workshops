```markdown
---
title: "Methoden"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

## HashMaps

Ein `HashMap` kann Elemente in Schlüssel/Wert-Paaren speichern, und diese Paare können unterschiedlichen Typen wie Strings oder Integern zugewiesen werden.

Wie üblich müssen Sie, um ein `HashMap` zu erstellen, die HashMap-Klasse wie folgt importieren.

```js javascript
import java.util.HashMap; // importiert HashMap

HashMap<String, String> addresses = new HashMap<String, String>();
```
In diesem Fall haben wir ein `HashMap` namens `addresses` erstellt, welches Schlüssel vom Typ `String` und Werte vom Typ `String` speichert.

## Elemente hinzufügen

Um Schlüssel/Wert-Paare in die HashMap einzufügen, verwenden Sie die Methode `put()`.

```js javascript
// Importieren der HashMap-Klasse
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Erstellen eines HashMap-Objekts namens capitalCities
        HashMap<String, String> addresses = new HashMap<String, String>();

        // Hinzufügen von Schlüsseln und Werten (Land, Stadt)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
  }
}
```
Wie Sie sehen können, fügt der obige Code ein Schlüssel/Wert-Paar in das HashMap `addresses` ein.

## Elemente abrufen

Um ein Element in einer `HashMap` abzurufen, verwenden Sie die Methode `get()`.

```js javascript
// Importieren der HashMap-Klasse
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Erstellen eines HashMap-Objekts namens addresses
        HashMap<String, String> addresses = new HashMap<String, String>();

        // Hinzufügen von Schlüsseln und Werten (Name, Adresse)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
                                          
        String junAddress = addresses.get("Jun");
        System.out.println("Juns Adresse ist: " + junAddress); // gibt Juns Adresse aus
    }
}
```

Mit der Methode `get()` rufen wir `addresses.get("Jun")` auf und erhalten die Adresse von Jun.

Das sind einige der grundlegendsten Methoden der HashMap. Weitere Methoden umfassen z. B. die Methode `remove()`, die ein Element entfernt, oder die Methode `size()`, die die Anzahl der Elemente in der HashMap zurückgibt. Im nächsten Abschnitt werden wir Ihnen weitere Beispiele geben, damit Sie es ausprobieren können!
```