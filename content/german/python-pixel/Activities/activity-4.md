---
title: "Aktivität 4: Einfachen Filter erstellen"
date: 2026-04-25T00:00:00-07:00
prereq: "Python Grundlagen, Python Pixels: Farben und Pixel, Python Bildbearbeitung: Ein Bild öffnen"
difficulties: ["mittel"]
weight: 4
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/jA6xNqAhb1o" title="Aktivität 4: Einfachen Filter erstellen - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Jetzt, da wir mehr über Pixel und Bilder wissen, können wir damit beginnen, zu lernen, wie man seinen eigenen Filter für ein Bild entwirft. Lassen Sie uns einige Beispiele anschauen, wie man einen einfachen Filter für ein Bild erstellt.

### Beispiel für einen blauen Filter

<img src="../../media/cat.png" alt="Originales Katzenbild" width="50%">
Wir möchten dem süßen Kätzchen oben einen blauen Filter hinzufügen. Schauen wir uns an, wie wir das erreichen können.

```python
# Wir müssen das PIL-Paket importieren, um mit Pixeln arbeiten zu können.
from PIL import Image

# Das Katzenbild öffnen
img = Image.open("cat.png")

# Den blauen Filter hinzufügen
for i in range(img.size[0]): # Für jede Spalte
    for j in range(img.size[1]): # Für jede Zeile
        color = img.getpixel((i,j))
        img.putpixel((i,j),(0, 0, color[2])) # Die Farbe entsprechend einstellen

# Das Katzenbild nach dem Filtern speichern
img.save("Mycat.png")
```

Wow! Das ist unser Kätzchen nach dem blauen Filter.
<img src="../../media/bluefiltercat.png" alt="Katzenbild mit blauem Filter angewendet" width="50%">

{{% notice tip %}}
Wie funktioniert das? Schauen wir uns die Schleife an:

```python
for i in range(img.size[0]): # Für jede Spalte
    for j in range(img.size[1]): # Für jede Zeile
        color = img.getpixel((i,j)) # Die aktuelle Pixel-Farbe holen
        img.putpixel((i,j),(0, 0, color[2])) # Die Farbe entsprechend einstellen
```

Wir gehen durch das Bild, Spalte für Spalte und Zeile für Zeile, um jedes Pixel abzurufen. Danach wird der aktuelle Farbwert des Pixels geholt. Um einen blauen Filter auf dieses Pixel anzuwenden, setzen wir einfach die 'Rot'- und 'Grün'-Werte des RGB-Farbmodells auf 0. Dadurch bleiben nur die 'Blau'-Werte übrig!

{{% /notice %}}


### Herausforderung - Erstellen Sie Ihren eigenen Filter

Folgen Sie dem oben gezeigten Beispiel und versuchen Sie, eigene Filter mit verschiedenen Farben zu erstellen.
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity4" target="_blank">Replit starten</a>

Überlegen und probieren Sie abschließend, wie Sie einen Graufilter erstellen könnten. Im nächsten Abschnitt werden wir besprechen, wie man einen Graufilter erstellt.