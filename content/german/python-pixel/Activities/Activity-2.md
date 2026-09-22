---
title: "Aktivität 2: Ändere dein Farbfeld"
date: 2026-04-25T00:00:00-07:00
prereq: "Python-Grundlagen, Python-Pixel: Farben und Pixel, Python-Bildmanipulation: Ein Bild öffnen"
difficulties: ["mittel"]
weight: 2
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WkI5ij6pTWI" title="Aktivität 2: Ändere dein Farbfeld - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Beispiel eins: Eine Diagonale erstellen

```python
#Dies erstellt das ursprüngliche Farbfeld.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#Dies verwendet eine geschachtelte While-Schleife, um das Bild zu ändern.
x = 0
y = 0
while x < 10:
 while y < 20:
   img.putpixel( (x,y), (0, 0, 0))
   x += 1
   y += 1
img.save('pil_red.png')
```

Das ist das Bild vor dem Hinzufügen der Diagonale.
<img src="../../media/whileloopbefore.png" alt="Bild zeigt das erste Beispiel mit While-Schleife" width="60%">

Das ist das Bild nach dem Hinzufügen der Diagonale.
<img src="../../media/whileloopafter.png" alt="Bild zeigt das Ergebnis des ersten Beispiels mit While-Schleife" width="60%">

## Beispiel zwei: Ein Rechteck erstellen

```python
#Dies erstellt das ursprüngliche Farbfeld.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#Dies verwendet eine geschachtelte For-Schleife, um das Bild zu ändern.
for x in range(10, 30):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))
img.save('pil_redmodified.png')
```

Das ist das Bild vor dem Hinzufügen des Rechtecks.
<img src="../../media/whileloopbefore.png" alt="Bild zeigt das erste Beispiel mit For-Schleife" width="60%">

Das ist das Bild nach dem Hinzufügen des Rechtecks.
<img src="../../media/forloopafter.png" alt="Bild zeigt das Ergebnis des ersten Beispiels mit For-Schleife" width="60%">

## Dein eigenes Farbfeld ändern!

Hier sind zwei Vorlagen, die dir bei der Änderung deines Farbfelds helfen.

#### Vorlage eins: Eine Linie hinzufügen

```python
# Vorlage für das Hinzufügen einer Linie
initial_position_x = 0 #hier ändern
initial_position_y = 0 #hier ändern
width = 0 #hier ändern
height = 0 #hier ändern
color = (0,0,0) #hier ändern
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel( (x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

#### Vorlage zwei: Ein Rechteck hinzufügen

```python
# Vorlage für das Hinzufügen eines Rechtecks
initial_position_x = 0 #hier ändern
initial_position_y = 0 #hier ändern
width = 0 #hier ändern
height = 0 #hier ändern
color = (0,0,0) #hier ändern
for x in range(initial_position_x, width+initial_position_x):
  for y in range(initial_position_y, height+initial_position_y):
    img.putpixel( (x,y), color)
img.save('pixel-activity2.png')
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity2" target="_blank">Replit starten</a>