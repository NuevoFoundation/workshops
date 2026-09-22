---
title: "Aktivität 10: Ein Meme erstellen!"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 10
prereq: "Python-Grundlagen, Python Pixel: Farben und Pixel, Python Bildbearbeitung: Ein Bild öffnen"
difficulties: ["mittel"]
---

Eine weitere Sache, die wir tun können, um unser Bild zu verbessern, ist das Hinzufügen von Text. Das können wir mit dem Modul `Pillow ImageDraw` erreichen. Wir importieren das oben in unserer Datei zusammen mit unseren anderen Importanweisungen.

```python
    from PIL import Image
    from PIL import ImageFilter
    from PIL import ImageDraw
```

Um Text hinzuzufügen, müssen wir das gleiche Bild, das wir vorher verwendet haben, erneut zeichnen. Das machen wir, indem wir die Funktion `draw()` verwenden, die ein Bildobjekt als Eingabe erhält. Sobald das Bild gezeichnet ist, können wir mit der Methode `text()` den Text zum Bild hinzufügen. Der Text wird basierend auf den angegebenen Koordinaten gezeichnet. Die Funktion erfordert zwei Pflichtparameter: die xy-Koordinaten und den gewünschten Text.

Zum Beispiel:

```python
    drawnImage = ImageDraw.Draw(img)
    drawnImage.text((200,20), "Wenn du bemerkst, dass du Python in einer Stunde gelernt hast.")
    drawnImage.save("myCatWithText.jpg")
```

Mein Bild sieht jetzt so aus:
<img src="../../media/meme.png" alt="verschwommene schwarz-weiße Katze kopfüber mit dem Text `Wenn du bemerkst, dass du Python in einer Stunde gelernt hast.`" width="50%">

### Herausforderung – Die Schriftart ändern
Wie du siehst, ist der Text in dem oben erstellten Bild in einer kleinen, standardmäßigen Schriftart dargestellt. Es gibt weitere Parameter innerhalb der Methode `text()`, die du verwenden kannst. Schaue dir die [Dokumentation](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.PIL.ImageDraw.ImageDraw.text) an und versuche, die Schriftart, die Schriftgröße und die Farbe des Textes zu ändern!

{{% notice note %}}

Hierfür musst du eine .ttf-Datei (auch als Schriftartdatei bekannt) aus dem Internet herunterladen! Frag nach Hilfe, falls du Fragen hast.

{{% /notice %}}