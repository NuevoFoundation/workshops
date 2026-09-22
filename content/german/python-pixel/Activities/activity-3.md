```markdown
---
title: "Aktivität 3: Herausforderung: Neue Elemente entwerfen"
prereq: "Python-Grundlagen, Python-Bildbearbeitung: Ein Bild öffnen, Python-Pixel: Farben und Pixel"
difficulties: ["mittel"]
date: 2026-04-25T00:00:00-07:00
weight: 3
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/YkxNH1TWjR0" title="Aktivität 3: Herausforderung: Neue Elemente entwerfen - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Mit Schleifen kannst du tatsächlich eigene Elemente auf dem Farbbrett entwerfen. Du kannst dein eigenes Logo oder beliebige Designs auf diesem Farbbrett erstellen. Hier ist ein Beispiel, das wir für dich bereitgestellt haben.


### Beispiel: Erstelle ein N.

```python
#Dies erzeugt das ursprüngliche Farbbrett.
from PIL import Image
img = Image.new('RGB', (60, 30), 'white')

#Dies verwendet eine geschachtelte while-Schleife, um das Farbbrett zu ändern.
#Linke vertikale Linie
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

#Rechte vertikale Linie
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

#Mittlere diagonale Linie
for y in range(5, 25):
  for x in range(10+(y-5), 15+(y-5)):
    img.putpixel( (x,y), (255, 211, 0)) 
img.save('pixel-activity3.png')
```
Ausgabe:
<img src="../../media/Activity3_ex.png" alt="Bild, das das Beispiel der Aktivität 3 zeigt" width="60%">


### Entwirf dein eigenes Element!

{{% notice tip %}}
Du kannst tatsächlich einfache Buchstaben entwerfen, wie H, K, T und so weiter. Du kannst die Farbe eines bestimmten Teils dieser Buchstaben ändern, um sie schöner zu gestalten.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity3" target="_blank">Replit starten</a>
```