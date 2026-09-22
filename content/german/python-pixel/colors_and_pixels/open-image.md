---
title: "Ein Bild öffnen"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 2
---

Um ein Bild zu ändern, müssen wir ein Bild öffnen. Wir können dazu das `Pillow Image` Modul verwenden, das wir gerade in der Einrichtung importiert haben.  
Suchen wir uns zunächst einige Bilder, die wir öffnen können. Finde ein Bild deiner Wahl und lade es herunter. Sobald du es heruntergeladen hast, navigiere zurück zu deinem Replit-Fenster und lade dein Bild hoch, indem du auf die drei Punkte klickst und 'Datei hochladen' auswählst.

Zum Beispiel, um die Datei cat.jpg hochzuladen:

<img src="../../media/upload_file.png" alt="Bild zeigt, wie man eine Datei hochlädt" width="60%">

Sobald du die Datei hochgeladen hast, solltest du die JPG-Datei auf der linken Seite sehen. Beachte, dass dein Bild möglicherweise eine andere Dateierweiterung hat.

Der nächste Schritt besteht darin, dieses Bild im Code zu öffnen. Es gibt Funktionen im `Pillow Image` Modul, die wir importiert haben, die dies ermöglichen.

Um das heruntergeladene Bild zu öffnen und anzuzeigen, mache Folgendes:

```python
    image = Image.open("cat.jpg")
    image.save("myCat.jpg")
```

Wenn du ein anderes Bild verwendest, stelle sicher, dass du den Namen der Datei in die Anführungszeichen setzt. Der obige Code öffnet das JPG-Bild und speichert es in der Variable image. Um zu überprüfen, ob die Variable `image` tatsächlich das Bild enthält, können wir es als neues Bild speichern. Auf diese Weise wird das Bild im Fenster angezeigt.

Drücke auf "Run" und sieh dir dein Bild an! Mein Bild sieht so aus:

<img src="../../media/cat.png" alt="Beispielbild einer Katze" width="50%">