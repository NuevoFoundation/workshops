---
title: "Pixel auf einem Bild"
draft: false
weight: 4
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WvDHBwyM6_U" title="Pixel auf einem Bild - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pixel

Pixel sind kleine Farbflächen auf einem Bildschirm. Bilder werden durch Pixel auf dem Bildschirm gebildet. Wir können Pixel manipulieren, indem wir den **RGB-Wert** ändern, was im Wesentlichen bedeutet, den Rot-, Grün- oder Blauwert jedes Pixels zu verändern. Wenn wir ein Bild auf einem Bildschirm sehen, besteht es aus unzähligen winzigen Pixeln in vielen Farben, die nebeneinander angeordnet sind. Jedes dieser winzigen Pixel hat jedoch eine einzelne Farbe an einer eindeutigen Position im Bild.

<div style="width:80%;padding-left:20%;">
    <table>
        <td>
            <img src="../../media/nuvi.png" alt="Nuvi-Charakter" width="100%">
        </td>
        <td>
            <img src="../../media/pixel-nuvi.png" alt="Nuvi-Charakter als Pixel dargestellt" width="100%">
        </td>
    </table>
</div>

Lass uns in die Erstellung von Bildern eintauchen. Vergiss nicht, dass wir in den vorherigen Abschnitten gelernt haben, wie man Bilder in Python mit dem Pillow-Modul öffnet und speichert!

## Bilder mit Pixeln erstellen

```python
# Nicht vergessen, Image zu importieren
from PIL import Image

Image.new(mode, size)
Image.new(mode, size, color)
```

`Image.new()` erstellt ein neues Bild mit dem angegebenen Modus und der Größe (optional auch mit der Farbe). Hier können wir `RGB` als Modus verwenden. Die Größe ist ein `(Breite, Höhe)`-Wert des Bildes. Farbe ist die RGB-Farbe der Pixel. Wir können auch Farbnamen anstelle von RGB-Werten verwenden. Wenn du keinen Farbwert angibst, wird das Bild mit Schwarz gefüllt.

## Schauen wir uns ein paar Beispiele an

```python
# Nicht vergessen, Image zu importieren
from PIL import Image
img = Image.new('RGB', (200,100),(100,100,100))
img.save('pil_grey.png')
```
Die Variable `img` speichert das PNG-Bild, das so aussieht: 

<img src="../../media/grey.png" alt="Bild zeigt erstes Pixel-Beispiel" width="40%">

```python
# Nicht vergessen, Image zu importieren
from PIL import Image
img=Image.new('RGB', (200,100),"black")
img.save('pil_black.png')
```
Hier erzeugt die Angabe `black` als RGB-Farbe ein PNG-Bild, das so aussieht:

<img src="../../media/black.png" alt="Bild zeigt zweites Pixel-Beispiel" width="40%">

## Einen Pixel in einem Bild ändern 

Was ist, wenn wir einem Bild einen weiteren Pixel hinzufügen möchten? 

Die Funktion `img.putpixel( (x,y), (r, g, b))` fügt dem Bild einen neuen Pixel an der angegebenen Position und mit der angegebenen Farbe hinzu. Die Position ist ein `(Breite, Höhe)`-Wert, der den Standort dieses Pixels im Bild angibt. Die Farbe ist die RGB-Farbe dieses Pixels.

## Schauen wir uns ein Beispiel an

```python
# Nicht vergessen, Image zu importieren
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
img.putpixel( (100,50), (0, 0, 0))
img.save('pil_black-dot.png')
```

Nachdem ein 200x100 gelbes Bild erstellt wurde, fügt die Funktion `putpixel` einen winzigen kleinen Punkt in die Mitte dieses gelben Blocks ein. Dies ist ein kleiner einzelner Pixel – tatsächlich so klein, dass du das Bild vergrößern musst, um ihn wirklich zu sehen!

<img src="../../media/black-dot.png" alt="Bild zeigt drittes Pixel-Beispiel" width="40%">