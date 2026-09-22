```markdown
---
title: "Aktivität 3 - Kunden im Restaurant willkommen heißen und Menü anzeigen"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---
## Kunden im Restaurant willkommen heißen und Menü anzeigen
Da wir nun sowohl ein Restaurantbanner haben, um es dem Kunden anzuzeigen, als auch ein Menü in deinem Python-Programm gespeichert, lass uns das Menü dem Kunden anzeigen und ihn willkommen heißen. In dieser Aktivität werden wir zwei Hilfsfunktionen schreiben, um dies zu erreichen.

{{% notice info %}}
## Hilfsfunktionen
Hilfsfunktionen sind Funktionen, die in einer Hauptfunktion aufgerufen werden, die den gesamten Code für dieses Programm ausführt. Jede dieser Hilfsfunktionen arbeitet auf ein einfaches Ziel hin.
{{% /notice %}}

Die erste Hilfsfunktion, die wir schreiben werden, ist `printMenu()`, eine Funktion, die durch das `dictMenu`-Dictionary iteriert und ein Menü ergibt, das wie das unten gezeigte Beispiel aussieht. Da die Werte des `dictMenu` alle Listen sind, bei denen der Preis des Artikels das erste Element ist und die Beschreibung das zweite Element, möchten wir sicherstellen, dass wir beim Ausdrucken der Informationen jedes Artikels jedes Element dieser Liste durch Indexierung abrufen.
Psst: Die Beschreibung des Artikels befindet sich in einer separaten Zeile vom Artikelnamen und Artikelpreis, was sagt dir das?
Pssst: Zwischen jedem Artikel im Menü ist ein Abstand, wie machen wir das...?

Beispielmenü:

-----Menü-----

Cremige Pesto-Pasta ------ $15.99

Penne-Nudeln in einer cremigen Pestosauce, garniert mit schwarzen Oliven und getrockneten Tomaten

Frühlingsrollen ------ $8.0

Gebratene Gemüse wie Kohl und Karotten, gemischt mit Glasnudeln und dünne Streifen von gebratenem Tofu, eingewickelt in eine knusprige äußere Schicht.

Die zweite Hilfsfunktion, die wir schreiben werden, heißt `orderFromRestaurantYN()`, bei der wir Benutzereingaben entgegennehmen, ob sie etwas aus dem Menü bestellen möchten oder nicht. Denk daran, dem Benutzer ein Beispiel zu geben, was er eingeben soll. Ob sie `Y` für Ja und `N` für Nein oder `yes/no` oder `Yes/No` oder `y/n` eingeben; dies muss dem Kunden klar angegeben werden, damit er weiß, was eine gültige Antwort ist.

Nachdem du diese Funktionen geschrieben hast, ruf sie in deiner `main()`-Funktion nach dem Ausdrucken des Restaurantbanners auf.
Wenn du diese Funktionen in `main()` aufrufst, denk daran, dass, solange der Benutzer keine der gültigen Antworten in `orderFromRestaurantYN()` eingibt, wir sagen müssen, dass er seine Antwort nicht in einem gültigen Format eingegeben hat, ihm das Menü erneut zeigen und ihn erneut auffordern zu antworten.
```