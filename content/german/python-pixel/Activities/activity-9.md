```markdown
---
title: "Aktivität 9: Dein Bild rotieren"
date: 2026-04-25T00:00:00-07:00
prereq: "Python-Grundlagen, Python-Pixel: Farben und Pixel, Python-Bildbearbeitung: Ein Bild öffnen"
difficulties: ["mittel"]
weight: 9
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/m0d9NT0MEPE" title="Activity 9: Rotate your image - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In diesem Abschnitt lernen wir, wie du dein Bild mithilfe von Pixeln drehen kannst.

### Beispiel - Dein Bild um 180 Grad im Uhrzeigersinn drehen

Lass uns unsere Katze um 180 Grad im Uhrzeigersinn drehen.
<img src="../../media/cat.png" alt="Originales Katzenbild" width="50%">

```python
# Wir müssen das PIL-Paket importieren, um Manipulationen mit Pixeln zu ermöglichen.
from PIL import Image

# Das Katzenbild öffnen
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Ein neues Bild mit derselben Breite und Höhe erstellen
newimg = Image.new('RGB',(width,height) )

# Die Pixel für das neue Bild festlegen
for i in range(width): # Für jede Spalte
    for j in range(height): # Für jede Zeile
        # Beachte, wie wir unseren neuen Höhenwert heightNew berechnen.
        heightNew = height - 1 - j
        
        # Beachte, wie wir unseren neuen Breitenwert widthNew berechnen.
        widthNew = width - 1 - i

        color = img.getpixel((widthNew, heightNew)) # Die Farbe vom Originalbild holen
        newimg.putpixel((i,j),color) # Die Farbe ins neue Bild einfügen

newimg.save("Mycat.png")
```

Wow! Das ist unsere neue Katze nach der Rotation.
<img src="../../media/catrot.png" alt="Gedrehtes Katzenbild" width="50%">

{{% notice note %}}

Achte darauf, wie heightNew und widthNew berechnet werden. Denke sorgfältig über diese Variablen nach und versuche, sie dir zu veranschaulichen.

Wende die Berechnungen beispielsweise auf die folgende 4x4-Buchstabentabelle an:

<img src="../../media/table.png" alt="Pixel-Koordinaten-Referenztabelle" width="15%">

Drehe sie dann um 180 Grad im Uhrzeigersinn und vergleiche sie mit der vorherigen Ausgabe. Stimmen beide überein?
{{% /notice %}}


### Aufgabe - Drehe deine Katze um 90 Grad gegen den Uhrzeigersinn

Jetzt bist du an der Reihe! Drehe deine Katze um 90 Grad gegen den Uhrzeigersinn!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity9" target="_blank">Replit starten</a>

{{% showanswer Fortgeschritten %}}

Das Pillow-Modul hat Funktionen, die die obigen Schritte vereinfachen können! Dafür schauen wir uns die `rotate()`-Funktion von `Pillow Image` an.

Die Rotate-Funktion arbeitet mit Winkeln. Zum Beispiel wird durch `rotate(45)` dein Bild um 45 Grad gekippt. Mit `rotate(90)` wird dein Bild um 90 Grad gedreht.

Lass uns das ausprobieren! Wir drehen das Bild, bevor wir es speichern:

```python
    image = Image.open("cat.jpg")
    image.rotate(90)
    image.save("myCat.jpg")
```

Hmm, das Bild scheint sich nicht gedreht zu haben. Warum? Nun, das geöffnete Bild wird in der Variablen `image` gespeichert. Wenn wir das Bild drehen, speichern wir das gedrehte Bild jedoch nicht in einer Variablen ab. Deshalb wird das gedrehte Bild nicht gesichert.

So sollte es richtig aussehen:

```python
    image = Image.open("cat.jpg")
    image = image.rotate(90)
    image.save("myCat.jpg")
```

Aufgabe: Kannst du dieses Bild vollständig drehen? Kannst du das Bild 3/4 der Drehung vollenden, ohne einen Winkel > 180 zu verwenden? (Tipp: Versuche, negative Winkelwerte zu benutzen!)

Komplett gedreht sieht mein Bild so aus:

<img src="../../media/upside_down.png" alt="Katze steht kopfüber" width="50%">
</br>
{{% /showanswer %}}
```