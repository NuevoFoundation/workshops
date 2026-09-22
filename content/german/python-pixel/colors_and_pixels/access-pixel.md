---
title: "Greifen Sie auf Pixel in einem Bild zu"
draft: false
weight: 5
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ydP3GVHLGR0" title="Access pixels on image - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Mehr über Pixel

Wir haben bereits gelernt, wie man ein Bild mit reinen Farben erstellt und ein Pixel in einem Bild ändert. Jetzt lernen wir, wie man Pixel in bestehenden Bildern identifiziert.

* Für Informationen darüber, wie man Listen und Tupel in Python verwendet, finden Sie mehr auf diesen Seiten: 
<a href="../../../python-basics/data-structures/" target="blank">Datenstrukturen</a>

## Bilddaten abrufen 

```python
# Denken Sie daran, Image zu importieren
from PIL import Image
Image.size
Image.size[0]
Image.size[1]
```
`Image.size` liefert einen `(Breite, Höhe)`-Wert eines Bildes. `Image.size[0]` gibt die Breite des Bildes und `Image.size[1]` die Höhe des Bildes an.

## Sehen wir uns ein Beispiel an

```python
# Denken Sie daran, Image zu importieren
from PIL import Image
img=Image.new('RGB', (200,100),(100,100,100))
# Lassen Sie uns die Bilddetails ausgeben:
print(img.size) 
print(img.size[0])
print(img.size[1])
```

Der obige Code gibt aus:  
```  
(200, 100)  
200  
100  
```
Hier hat das Bild die Größe 200x100. Die Breite beträgt 200, die Höhe 100.

## Pixelinformationen abrufen

`img.getpixel(x,y)` liefert einen Farbwert an einer bestimmten Position. Die Position ist ein `(Breite, Höhe)`-Wert dieses Pixels. Die Farbe ist die RGB-Farbe dieses Pixels.

## Sehen wir uns ein Beispiel an

```python
# Denken Sie daran, Image zu importieren
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))
# Lassen Sie uns die Pixelfarbe ausgeben
print(color)
```

Der obige Code gibt aus:   
```
(255, 255, 0)
```

## RGB-Wert eines Pixels abrufen 

Jede RGB-Farbe liefert einen Tupelwert `(rot, grün, blau)` eines Pixels. `Color[0]` gibt den Rotwert des Pixels, `Color[1]` den Grünwert des Pixels und `Color[2]` den Blauwert des Pixels an.

#### Sehen wir uns ein Beispiel an

```python
# Denken Sie daran, Image zu importieren
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))

# Lassen Sie uns den RGB-Wert eines Pixels ausgeben
print(color[0])
print(color[1])
print(color[2])
```

Der obige Code gibt aus:   
```
255
255
0
```
Hier ist der RGB-Wert wie folgt aufgeschlüsselt: Rot hat einen Wert von 255, Grün hat einen Wert von 255 und Blau hat einen Wert von 0.  