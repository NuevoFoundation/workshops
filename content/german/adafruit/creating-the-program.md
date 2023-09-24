---
title: "Erstellung des Programms"
description: ""
draft: false
weight: 3
---
Öffne deinen bevorzugten Internetbrowser (z. B. Edge, Firefox, Google Chrome, Internet Explorer) und gehe zu https://aka.ms/oranges. Dein Bildschirm sollte wie folgt aussehen:

![Bild kann nicht geladen werden](../img/adafruit.png?classes=border,shadow)

### Festlegung der Variablen
Heute werden wir Orangen verwenden, um unserem Adafruit zu sagen, wann er Geräusche machen soll. Als erstes müssen wir dem Computer einen Namen für jede Orange geben und wo er nachschauen soll, was die Orange sagt. Den ersten Teil machen wir, indem wir eine Variable definieren. Klicke auf den Abschnitt VARIABLES, er ist rosa und der 7. von oben. Dann definiere eine Variable, indem du auf Make a Variable klickst und ihr einen Namen gibst. Mache das zweimal, hier definieren wir unsere als analog1 und analog2, aber du kannst sie nennen, wie du willst.

![Bild kann nicht geladen werden](../img/1.png?classes=border,shadow)
![Bild kann nicht geladen werden](../img/2.png?classes=border,shadow)
![Bild kann nicht geladen werden](../img/3.png?classes=border,shadow)

### Interpretation von Eingaben
Nun, da wir einen Namen für die Orangen haben, den unser Computer kennt, müssen wir unserem Adafruit mitteilen, wie er sie verstehen kann. Es gibt zwei Arten von Eingängen: digitale und analoge. Lichtschalter und Netzschalter sind Beispiele für digitale Eingänge. Sie sind entweder ein- oder ausgeschaltet, 1en oder 0en. Analoge Eingänge sind wie ein Lichtdimmer oder eine Lautstärketaste. Sie haben mehr Optionen für Werte. Unsere Orangen werden analoge Eingänge sein, und je nachdem, wie sehr wir sie berühren oder zusammendrücken, ändert sich der Wert, den sie an den Adafruit melden.

Klicke erneut auf den Abschnitt Variablen. Diesmal sollte es ein paar mehr Optionen geben, da wir nun unsere beiden Variablen definiert haben. Ziehe einen der "set ___ to __" Blöcke in den grünen "forever" Block in unserem Arbeitsbereich. Ändere mit dem weißen Pfeil nach unten das erste Leerzeichen in "analog1".

![Bild kann nicht geladen werden](../img/4.png?classes=border,shadow)

Als nächstes klicke auf den Abwärtspfeil bei ADVANCED und dann auf PINS. Suche den Block "analog read pin __", er ist der dritte von oben, und füge ihn dort ein, wo die 0 auf unserem Block "set analog1 to 0" ist. Um ihn in diesen Steckplatz einzufügen, ziehe ihn so, dass er über der Null schwebt, prüfe, ob die 0 gelb hervorgehoben ist, und lasse dann die Maus (oder das Touchpad) los. Du solltest sehen, dass sich der Block ausdehnt, um den Block aufzunehmen. Wenn dies nicht der Fall ist, versuche es erneut.

![Bild kann nicht geladen werden](../img/5.png?classes=border,shadow)
![Bild kann nicht geladen werden](../img/6.png?classes=border,shadow)

Danach sollte dein Arbeitsbereich wie oben abgebildet aussehen. Wiederhole diesen Vorgang noch einmal, aber benutze dieses Mal die weißen Abwärtspfeile, um analog2 und A2 auszuwählen. Siehe unten, um zu überprüfen, ob du das richtig gemacht hast.
![Bild kann nicht geladen werden](../img/7.png?classes=border,shadow)

### Erstellung von Schleifen
Nun, da unser Computer weiß, wie er unsere Orangen nennen soll und wie er sie verstehen kann, erstellen wir eine Schleife, die überprüft, wann wir unsere Orange in der Hand halten. Klicke auf den Abschnitt LOGIK und ziehe den Block "If ____ then" heraus, um ihn unter deine Variablenblöcke zu setzen.

![Bild kann nicht geladen werden](../img/8.png?classes=border,shadow)

Zurück zum Beispiel mit dem Lautstärkeregler, um den Vergleich zu verstehen, den wir in unserer Schleife durchführen werden. Jeder Mensch hat einen "Sweet Spot" dafür, wie laut er seine Musik hören möchte, um sie am besten genießen zu können. Dieser Sweet Spot gilt auch für unsere Orangen. Sie geben dem Computer eine Zahl an, wenn sie nur da liegen, und eine niedrigere, wenn wir sie berühren. Der Trick besteht darin, den Punkt dazwischen zu finden, damit wir nur dann Geräusche machen, wenn wir es wollen. 

Um das einzustellen, gehe wieder zum Abschnitt LOGIK und nimm den sechseckigen " __ < __ " Block, der der zweite unter dem Unterabschnitt Vergleich ist. Lege ihn über das "true" im "if __ then"-Block. Beachte die gelbe Markierung, bevor du ihn dort ablegst. Überprüfe deinen Arbeitsbereich in der Abbildung unten.

![Bild kann nicht geladen werden](../img/9.png?classes=border,shadow)

Geben wir nun ein, was wir vergleichen wollen. Gehen zurück zum Abschnitt VARIABLEN, ziehe analog1 heraus und setze es in den ersten Slot. Klicke dann auf den zweiten Slot und gib 40 ein. Diese 40 sollte für die meisten Menschen ein guter Wert sein. Wenn deine Orange am Ende Geräusche macht, ohne dass du es berührst, kannst du zu diesem Schritt zurückkehren und die Zahl erhöhen. Wenn deine Orange kein Geräusch macht, wenn du sie berührst, kannst du die Zahl noch einmal erhöhen. Im Moment lassen wir es einfach bei 40.

![Bild kann nicht geladen werden](../img/10.png?classes=border,shadow)

Jetzt können wir unsere Musik aussuchen! Klicke auf den Abschnitt MUSIK und ziehe den zweiten Block "play _____ until done" in unseren If-Then-Block. Klicke auf den Pfeil nach unten und wähle deine eigenen Klänge aus. 

![Bild kann nicht geladen werden](../img/11.png?classes=border,shadow)

Nun wollen wir diese letzten Schritte für analog2 wiederholen. Wenn du das getan hast, sieht dein Arbeitsbereich wie das Bild unten aus (aber mit deinen Musikoptionen).

![Bild kann nicht geladen werden](../img/12.png?classes=border,shadow)

### Zusätzlicher Spaß mit Lichtern (wenn es die Zeit zulässt)
Der Adafruit-Chip hat viele Lichter! Es macht Spaß, mit ihnen zu spielen, also fügen wir ein bisschen Farbe zu unseren Sounds hinzu, damit wir den Unterschied sehen und hören können, wenn wir unsere Orangen berühren. Klicke auf den Abschnitt LIGHT und ziehe den Block "Set all Pixels to ___" in unsere beiden If-Then-Blöcke. Du solltest sie direkt vor dem Abspielen eines Tons einfügen. Du kannst auf den Farbbereich klicken, um die Farbe zu ändern, die du anzeigen möchtest.

![Bild kann nicht geladen werden](../img/13.png?classes=border,shadow)