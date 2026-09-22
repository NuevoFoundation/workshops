---
title: "Aktivität 6: Bild zuschneiden"
prereq: "Python Grundlagen, Python Bildmanipulation: Ein Bild öffnen, Python Pixel: Farben und Pixel"
difficulties: ["mittel"]
date: 2026-04-25T00:00:00-07:00
weight: 6
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/X2AoHSdQOLo" title="Aktivität 6: Bild zuschneiden - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In diesem Abschnitt lernen wir, wie man ein Bild zuschneidet.

### Beispiel - Katze in der Mitte zuschneiden

Nun lasst uns die rechte Hälfte des Katzenbildes zuschneiden.
  
<img src="../../media/cat.png" alt="Originales Katzenbild" width="50%">

```python
# Wir müssen das PIL-Paket importieren, um eine Manipulation mit Pixeln zu ermöglichen.
from PIL import Image

# Öffne das Katzenbild
img = Image.open("cat.png")
width = img.size[0] 
height = img.size[1] 

# Erstelle ein neues Bild mit halber Breite und voller Höhe
newimg = Image.new('RGB', (width // 2, height))

# Setze die Pixel für das neue Bild
for i in range(width // 2):    
    for j in range(height): # Für jede Zeile
        color = img.getpixel((i,j)) # Hole die Farbe aus dem Originalbild
        newimg.putpixel((i,j),color) # Setze die Farbe in das neue Bild

newimg.save("Mycat.png")
```

Wow! Dies ist unsere Katze nach dem Zuschnitt. Wir haben die rechte Hälfte des Bildes zugeschnitten!

<img src="../../media/halfcat.png" alt="Katzenbild, auf die linke Hälfte zugeschnitten" width="25%">

### Beispiel - Den zentralen Bereich zuschneiden

Lasst uns das Katzenbild zuschneiden, sodass nur der mittlere Teil erhalten bleibt!

<img src="../../media/cat.png" alt="Originales Katzenbild" width="50%">

```python
# Wir müssen das PIL-Paket importieren, um eine Manipulation mit Pixeln zu ermöglichen.
from PIL import Image

# Öffne das Katzenbild
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Erstelle ein neues Bild mit halber Breite und halber Höhe
newimg = Image.new('RGB', (width // 2, height // 2))

# Setze die Pixel für das neue Bild
for i in range(width // 4, (width // 4) * 3): # Hole den ersten 1/4 der Breite bis zum letzten 1/4 der Breite    
    for j in range(height // 4, (height // 4) * 3): # Für jede Zeile
        color = img.getpixel((i,j)) # Hole die Farbe aus dem Originalbild
        newimg.putpixel((i - width // 4, j - height // 4), color) # Setze die Farbe in das neue Bild

newimg.save("Mycat.png")
```

Wow! Das ist unsere Katze nach dem Zuschnitt.
<img src="../../media/cropcat.png" alt="Katzenbild mit benutzerdefiniertem Zu-schnitt" width="25%">

### Herausforderung - Bild basierend auf deiner eigenen Wahl zuschneiden

Jetzt bist du an der Reihe, einen beliebigen Teil der süßen Katze zuzuschneiden! Spannend!
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity6" target="_blank">Replit starten</a>