```markdown
---
title: "Aktivität 4 - Interagieren mit dem Kunden"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---
## Interagieren mit dem Kunden
Lass uns weiterhin mit dem Kunden interagieren und seine Bestellung aufnehmen! In der Funktion `main()` müssen wir als Nächstes eine leere Liste erstellen, die in der Variablen `listOrderItems` gespeichert wird, sodass alle Artikel, die sie möglicherweise bestellen, hier gespeichert werden.

Nun nutzen wir unser Wissen über if-else-Anweisungen und while-Schleifen, um die Bestellung des Kunden entgegenzunehmen. Wenn der Kunde mit Nein auf die Frage antwortet, ob er etwas von der Speisekarte bestellen möchte, dann gib eine Verabschiedung aus. Andernfalls bitte sie, den ersten Artikel und die Menge, die sie bestellen möchten, in einem bestimmten Format wie z. B. `"(Beispielbestellung: Frühlingsrollen-2)"` einzugeben.

Wir haben den ersten Artikel, den der Kunde bestellen möchte! Naja, das denken wir zumindest... Wir wissen jedoch nicht wirklich, was der Kunde in die `input()`-Funktion eingegeben hat. Vielleicht hat er einfach `"Baa Baa Baa Ba ba banana"` aus dem Minions-Film eingegeben. Oder er hat einen gültigen Menüpunkt eingegeben, dieser ist jedoch nicht in dem vorgegebenen Format. Sie könnten auch geschrieben haben `"Frühlingsrollen : 2"` oder `"Frühlingsrollen -2`, was beides kein gültiges Format ist! Oder sie könnten sogar eine NEGATIVE Menge angegeben haben – der Punkt ist, wir haben keine Ahnung, was der Kunde eingeben könnte, und wir müssen den Kunden und unser Programm vor dieser ungültigen Eingabe schützen.

Schreiben wir also eine Funktion, die die Eingabe des Kunden überprüft, und nennen sie `orderItemChecking(item)`. Beachte, dass wir ihr einen Parameter gegeben haben? Das bedeutet, dass wir den Bestellartikel als Argument an diese Funktion aus der `main()` übergeben müssen. In dieser Funktion wollen wir uns gegen alle möglichen Fallstricke schützen, die im vorherigen Absatz erwähnt wurden.

Tipp: Verwende `if`-Anweisungen, um falsche Eingaben abzufangen.

Tipp: Gib einen booleschen Wert zurück, entweder `True`, wenn die Eingabe gültig ist, oder `False`, wenn die Eingabe ungültig ist.

Tipp: Eine hilfreiche String-Methode, um die Eingabe `orderItemInput` zu analysieren, wäre `str.split()`... Welcher Trennwert sollte verwendet werden?

Da wir jetzt die Eingabe des Kunden überprüfen können, kehren wir zur `main()`-Funktion zurück und fügen eine `while`-Schleife im `else`-Block unterhalb des Aufrufs hin, bei dem der Kunde nach seinem ersten Artikel gefragt wird. Diese `while`-Schleife fordert den Benutzer weiterhin auf, einen gültigen Bestellartikel und die Menge wie zuvor einzugeben, bis `orderItemChecking(item)` `True` zurückgibt. Denke daran, das Ergebnis der `input()`-Funktion in derselben Variablen zu speichern, die du verwendet hast, als du zuerst nach der Eingabe gefragt hast, da die `while`-Schleife sonst nicht fortgesetzt werden kann.

Wenn der Benutzer endlich einen gültigen ersten Bestellartikel eingegeben hat, füge diesen Artikel in die Liste `listOrderItems` ein, die du zuvor erstellt hast.

Da wir erfolgreich einen Artikel erhalten haben, finden wir heraus, ob der Kunde einen weiteren Artikel, zwei weitere Artikel oder sogar mehr bestellen möchte. Um dies zu tun, schreiben wir eine weitere Hilfsfunktion, `isOrderComplete()`, die den Benutzer auffordern wird, entweder Ja oder Nein in einem festgelegten Format ähnlich der Funktion `orderFromRestaurantYN()` einzugeben, bis sie uns eine gültige Antwort geben. Wenn sie Ja sagen, geben wir `True` zurück, um anzuzeigen, dass sie mindestens einen weiteren Artikel bestellen möchten. Andernfalls geben wir `False` zurück, da sie nichts Weiteres bestellen möchten.

Unsere Hilfsfunktionen sind vollständig! Jetzt müssen wir diese Funktionen im `else`-Block der `main()`-Funktion aufrufen. Die Logik für diesen letzten Abschnitt ist im Wesentlichen:

- Solange `isOrderComplete()` `True` ist, bitte den Kunden weiterhin, einen Artikel aus dem Menü und die gewünschte Menge einzugeben.
- Innerhalb dieser `while`-Schleife... Nachdem der Benutzer uns einen Artikel gegeben hat, den er bestellen möchte, überprüfe diesen mit `orderItemChecking(item)`, um festzustellen, ob er eine gültige Eingabe ist oder nicht. Solange es keine gültige Eingabe ist, bitte den Kunden weiterhin, es erneut zu versuchen, bis er erfolgreich einen weiteren Artikel bestellt hat. Stelle sicher, dass du ihnen mitteilst, dass sie eine falsche Eingabe gemacht haben.
- Nachdem die innere while-Schleife beendet ist, was anzeigt, dass der Benutzer einen korrekten Artikel und eine Menge eingegeben hat, füge diesen Artikel in die Liste `listOrderItems` ein, die wir vorher erstellt haben.

Wenn dir dieser Prozess bekannt vorkam, ist das gut! Es ist genau das, was wir getan haben, als wir den Benutzer den ersten Artikel, den er bestellen wollte, eingeben ließen.

Super gemacht! Du hast erfolgreich Benutzereingaben entgegengenommen und überprüft, ob Fehler gemacht wurden – großartig!
```