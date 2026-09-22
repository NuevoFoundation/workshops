---
title: "Aktivität 7: Den Hintergrund eines Bildes ändern"
prereq: "Python-Grundlagen, Python Bildbearbeitung: Ein Bild öffnen, Python Pixel: Farben und Pixel"
difficulties: ["mittel"]
date: 2026-04-25T00:00:00-07:00
weight: 7
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/zdi2R_EK6QA" title="Aktivität 7: Den Hintergrund eines Bildes ändern - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In diesem Abschnitt lernen wir, wie man den einfachen Hintergrund eines Bildes mithilfe von Pixeln ändern kann.

### Beispiel - Hintergrundfarbe ändern

Ändern wir die Hintergrundfarbe von Nuvi zu Pink.
<img src="../../media/nuevo.png" alt="Logo von Nuevo Foundation" width="25%">

```python
from PIL import Image

# Öffne das Nuvi-Bild
img = Image.open("nuevo.png")

width = img.size[0]
height = img.size[1]
 
# Erstelle ein neues Bild mit Breite und Höhe
newimg = Image.new('RGB',(width,height))

# Die Pixel für das neue Bild setzen
colorpink = (244,114,208) 
coloryellow = img.getpixel((0,0))
for i in range(width):    
    for j in range(height):    
        color = img.getpixel((i,j)) # Farbe vom Originalbild abrufen
        if color == coloryellow: # Wenn es gelb ist, dann:
            newimg.putpixel((i,j),colorpink) # Ändere die Farbe zu Pink
        else:
            newimg.putpixel((i,j),color) # Andernfalls bleibt die Farbe gleich

newimg.save("nuevopink.png")
```

Wow! Das ist unser neues Nuvi nach dem Ändern des Hintergrunds.
<img src="../../media/nuevopink.png" alt="Logo von Nuevo Foundation mit pinkem Hintergrund" width="25%">


### Herausforderung - Hintergrund nach deiner Wahl ändern

Jetzt bist du an der Reihe: Ändere Nuvis Hintergrund in eine beliebige Farbe! 

{{% notice warning %}}
Um dein Bild zu sehen, klicke bitte auf die obere linke Ecke (wo „Dateien“ steht) und dann auf die Bilddatei, um das Ergebnis zu sehen.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity7" target="_blank">Replit starten</a>