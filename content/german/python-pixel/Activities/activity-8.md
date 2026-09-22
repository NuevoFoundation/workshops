---
title: "Aktivität 8: Drehen Sie Ihr Bild"
date: 2026-04-25T00:00:00-07:00
prereq: "Python-Grundlagen, Python-Pixel: Farben und Pixel, Python-Bildbearbeitung: Öffnen eines Bildes"
difficulties: ["mittelstufe"]
weight: 8
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jx_b8111WW0" title="Activity 8: Flip your image - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In diesem Abschnitt lernen wir, wie man Ihr Bild mit Hilfe von Pixeln dreht.

### Beispiel - Drehen Sie Ihr Bild auf den Kopf

Lassen Sie uns die Katze auf den Kopf stellen.  
<img src="../../media/cat.png" alt="Originales Katzenbild" width="50%">

{{% notice note %}}

Das Drehen des Bildes auf den Kopf ist dasselbe wie das Erstellen eines symmetrischen Bildes in Bezug auf die `horizontale Mittellinie`, die die schwarze Linie im folgenden Bild darstellt.

{{% /notice %}}

<img src="../../media/cathori.png" alt="Katzenbild horizontal gedreht" width="50%">

```python
# Wir müssen das PIL-Paket importieren, um mit Pixeln zu arbeiten.
from PIL import Image

# Öffnen Sie das Katzenbild
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Erstellen Sie ein neues Bild mit derselben Breite und Höhe
newimg = Image.new('RGB', (width,height))

# Setzen Sie die Pixel für das neue Bild
for i in range(width): # Für jede Spalte
    for j in range(height): # Für jede Zeile
        heightNew = height - 1 - j # Die neue Höhenposition des Pixels ermitteln.
        color = img.getpixel( (i, heightNew) ) # Die Farbe vom Originalbild abrufen
        newimg.putpixel((i,j),color) # Die Farbe in das neue Bild setzen

newimg.save("Mycat.png")
```

Wow! Das ist unsere neue Katze nach dem Drehen.

<img src="../../media/flipcat.png" alt="Katzenbild auf den Kopf gedreht" width="50%">

Wie haben wir herausgefunden, wie man `heightNew` setzt? Im obigen Code haben wir:

`heightNew = height - 1 - j`

Dies ist der Schlüsselpunkt, um die Katze auf den Kopf zu stellen. Hier nehmen wir die Höhe des Bildes, ziehen 1 ab und ziehen dann die aktuelle Pixel-Höhenposition (j) ab. Wir ziehen 1 ab, weil die Indizierung bei Computern bei '0' statt bei '1' beginnt. Durch das Abziehen der aktuellen Pixel-Höhenposition erhalten wir die Position, an der das neue Pixel sein soll.

Sie können einige einfache Bilder per Hand zeichnen, um sich dies zu veranschaulichen.

Denken Sie daran, unser ursprünglicher Code lautet hauptsächlich:

```python
width = img.size[0]
height = img.size[1]

# Erstellen Sie ein neues Bild mit derselben Breite und Höhe
newimg = Image.new('RGB', (width,height))

# Setzen Sie die Pixel für das neue Bild
for i in range(width): # Für jede Spalte
    for j in range(height): # Für jede Zeile
        heightNew = height - 1 - j # Die neue Höhenposition des Pixels ermitteln.
        color = img.getpixel( (i, heightNew) ) # Die Farbe vom Originalbild abrufen
        newimg.putpixel((i,j),color) # Die Farbe in das neue Bild setzen
```

Versuchen Sie zum Beispiel, diesen Code auf die folgende 4x4-Buchstabengruppe anzuwenden:

<img src="../../media/table.png" alt="Pixel-Koordinaten-Referenztabelle" width="15%">

Erstellen Sie dann die symmetrische Ausgabe in Bezug auf die horizontale Mittellinie und vergleichen Sie sie mit der vorherigen Ausgabe. Sind sie identisch?

### Herausforderung - Drehen Sie Ihre Katze von links nach rechts

Jetzt sind Sie dran! Drehen Sie Ihre Katze von links nach rechts!  

{{% notice note %}}

Das Drehen des Bildes von links nach rechts ist dasselbe wie das Erstellen eines symmetrischen Bildes in Bezug auf die `vertikale Mittellinie`.

Achten Sie auf die Variable `widthNew` und überlegen Sie sorgfältig, wie Sie sie setzen sollten.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity8" target="_blank">Replit öffnen</a>