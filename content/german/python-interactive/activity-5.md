---
title: "Aktivität 5 - Analyse der Kundenbestellung"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---
## Vorbedingungen
- <a href="../../python-basics/functions" target="_blank">Funktionen</a>
- <a href="../../python-basics/conditional-statements-loops/loops/" target="_blank">Schleifen</a>

## Analyse der Kundenbestellung
Wir haben die Bestellung des Kunden erhalten und müssen nun einfach berechnen, wie viel seine Bestellung kostet!

### Ein Wörterbuch aus der Kundenbestellung erstellen
Die erste Funktion, die wir schreiben werden, heißt `createDictOrderItems(listOrderItems)` und nimmt die Liste der Artikel in der Kundenbestellung als Parameter. Wir geben ein Wörterbuch mit allen bestellten Artikeln und deren jeweiligen Mengen zurück. Derzeit haben wir nur eine Liste von Zeichenfolgen, die sowohl den Artikelnamen als auch die Menge enthält. Wir müssen diese Informationen jedoch aufteilen und die Menge in einen Ganzzahltyp umwandeln, da es sich um eine Zahl handelt.
  - Erstellen wir zuerst ein leeres Wörterbuch mit dem Titel `dictItems`, das schließlich diese Informationen speichert.
  - Schreiben Sie als Nächstes eine Schleife (Hmm, welche Art von Schleife möchten Sie verwenden?), die alle Artikel in der Liste durchläuft, die wir übergeben haben.
  - In dieser Schleife möchten wir jede Zeichenfolge an dem `"-"` trennen, das sich zwischen dem Artikelnamen und der Menge befindet. Wenn Sie ein anderes Format wie `" : "` oder `" - "` oder eine andere Angabe festgelegt haben, geben Sie das hier an. Das erste Element, das wir durch das Teilen der Zeichenfolge erhalten, ist der Artikelname. Das zweite Element, das wir erhalten, ist die Menge. Konvertieren Sie diese in eine ganze Zahl. Speichern Sie beide Werte in sinnvollen Variablen wie `itemName` und `itemQuantity`.
  - Noch innerhalb der Schleife müssen wir dies nun dem Wörterbuch `dictItems` hinzufügen. Denken Sie jedoch daran, dass ein Kunde technisch gesehen denselben Artikel mehrmals in separaten Bestellposten bestellen kann. Wir müssen dies hier zusammenführen. Wenn der Kunde beispielsweise zweimal Frühlingsrollen-2 bestellt, möchten wir dies als 4 Frühlingsrollen interpretieren. Dazu benötigen wir einen `if`-`else`-Block, in dem, wenn das Wörterbuch bereits den Artikelnamen enthält, diese neue Menge zur bereits mit dem Artikelnamen verknüpften Menge hinzugefügt wird, andernfalls ein neues Schlüssel-Wert-Paar mit dem Artikelnamen und der Menge erstellt wird.
  - Vergessen Sie schließlich nicht, dieses Wörterbuch zurückzugeben, nachdem diese Schleife beendet ist!

### Preise aus dem Wörterbuch berechnen  
Die zweite Funktion, die wir schreiben werden, heißt `computePrices(dictItems)` und nimmt das Wörterbuch, das wir in der letzten Funktion erstellt haben, als Parameter entgegen. Es gibt ein neues Wörterbuch zurück, das jeden Artikelnamen mit dem Preis * Menge verknüpft.
  - Erstellen Sie ein leeres Wörterbuch `dictItemAndPrice`, das den Artikel und den Gesamtpreis für diesen Artikel enthält.
  - Durchlaufen Sie die Elemente im Wörterbuch, das wir gerade übergeben haben. Innerhalb dieser Schleife möchten wir die Artikelmenge von `dictItems` abrufen, da sie den Wert in der Schlüssel-Wert-Paar-Beziehung des Wörterbuchs darstellt. Wir möchten auch auf den Preis des Artikels aus der globalen Variablen `dictMenu` zugreifen. Beachten Sie jedoch, dass dies der erste Wert in der Liste ist, die mit dem Artikelnamen verknüpft ist, und wir entsprechend darauf zugreifen müssen.
  - Multiplizieren Sie diese beiden Zahlen, um den Gesamtpreis für diesen Artikel zu erhalten.
  - Fügen Sie das Schlüssel-Wert-Paar Artikelname und Gesamtpreis dem Wörterbuch `dictItemAndPrice` hinzu.
  - Geben Sie dieses Wörterbuch zurück.

### Den Gesamtpreis der Bestellung berechnen
Die dritte Funktion, die wir erstellen, heißt `computeTotalPrice(dictItemAndPrice)` und nimmt das Wörterbuch, das wir in `computePrices(dictItems)` erstellt haben, als Parameter entgegen. Es gibt den Gesamtpreis der gesamten Bestellung des Kunden zurück.
  - Initialisieren Sie eine Variable `totalPrice` mit `0`, damit wir die Preise jedes Artikels hinzufügen können.
  - Durchlaufen Sie das Wörterbuch `dictItemAndPrice` und addieren Sie jeden der Werte zu `totalPrice`.
  - Geben Sie `totalPrice` auf 2 Dezimalstellen gerundet zurück, indem Sie `round()` verwenden und `2` als zweiten Wert angeben, damit auf die hundertstel Stelle gerundet wird, da wir möchten, dass der endgültige Preis so angezeigt wird.

Alle drei dieser Hilfsfunktionen werden im `main()`-Funktion im `else`-Block in der Reihenfolge aufgerufen, in der wir sie geschrieben haben. Der Rückgabewert der ersten Funktion wird das Argument der zweiten Funktion sein, und der von der zweiten Funktion zurückgegebene Wert wird das Argument der dritten Funktion sein, und schließlich wird das Ergebnis der dritten Funktion in der nächsten Aktivität verwendet! Denken Sie daran, die Ergebnisse der Funktionen explizit in Variablen zu speichern, sodass Sie sie mehrfach verwenden können.