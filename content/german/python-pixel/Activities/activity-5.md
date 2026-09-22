---
title: "Aktivität 5: Fortgeschrittene Filter"
date: 2026-04-25T00:00:00-07:00
prereq: "Python Basics, Python Pixels: Farben und Pixel, Python Bildmanipulation: Bild öffnen"
difficulties: ["mittel"]
weight: 5
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/deYXkPt58co" title="Aktivität 5: Fortgeschrittene Filter - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
  
Im letzten Abschnitt haben wir ein Beispiel für einen blauen Filter gesehen und darüber nachgedacht, wie man einen Graufilter erstellt. Jetzt erstellen wir gemeinsam unseren Graufilter.

### Beispiel – Erstelle einen Graufilter

Lass uns das ursprüngliche Katzenbild unten mit unserem Graufilter verändern!

<img src="../../media/cat.png" alt="Ursprüngliches Katzenbild" width="50%">

```python
# Wir müssen das PIL-Paket importieren, um Manipulationen mit Pixeln zu ermöglichen.
from PIL import Image

# Öffne das Katzenbild
img = Image.open("cat.png")

# Graufilter
for i in range(img.size[0]): # Für jede Spalte:
    for j in range(img.size[1]): # Für jede Reihe
        color = img.getpixel( (i,j)) # Farbe abrufen
        GREY = (color[0] + color[1] + color[2]) // 3 # Pixelwerte mitteln
        img.putpixel((i,j),(GREY, GREY, GREY)) # Farbe entsprechend setzen

# Speichere die Katze nach dem Filtern
img.save("Mycat.png")
```

{{% notice tip %}}
Denke daran: Um einen grauen Pixel zu erzeugen, müssen alle drei Werte von RGB gleich sein. Wenn jedoch jeder Pixel auf denselben zufälligen Wert gesetzt wird (z.B. 200), wird das gesamte Bild grau, anstatt nur einen Filter auf das bestehende Katzenbild zu legen.  

Wie können wir am besten herausfinden, wie man einen Pixel 'grau' macht? Wir können den Durchschnittswert jedes RGB-Werts berechnen. Du kannst // verwenden, um eine ganzzahlige Division durchzuführen, die garantiert, dass das Ergebnis der Durchschnittsberechnung eine ganze Zahl ist. 

{{% /notice %}}

Wow! So sieht unsere Katze nach dem Graufilter aus.
  
<img src="../../media/greyfiltercat.png" alt="Katzenbild mit Graufilter angewendet" width="50%">

### Beispiel – Teilweiser Filter

Nun lass uns darüber nachdenken, wie wir nur einen Teil unserer lieben Katze mit einem Filter versehen können.

```python
# Wir müssen das PIL-Paket importieren, um Manipulationen mit Pixeln zu ermöglichen.
from PIL import Image

# Öffne das Katzenbild
img = Image.open("cat.png")

# Graufilter
for i in range((img.size[0] // 2)): # Für Spalten der ersten Hälfte
    for j in range((img.size[1] // 2)): # Für Reihen der ersten Hälfte
        color = img.getpixel((i,j)) # Farbe abrufen
        GREY = (color[0] + color[1] + color[2]) // 3 # Pixelwerte mitteln
        img.putpixel((i,j),(GREY, GREY, GREY)) # Farbe entsprechend setzen

# Speichere die Katze nach dem Filtern
img.save("Mycat.png")
```

Wow! So sieht unsere Katze nach dem Filter aus. Wir haben nur ein Viertel der Katze in der oberen linken Ecke gefiltert!

<img src="../../media/partialfilter.png" alt="Katzenbild mit teilweise angewendetem Filter" width="50%">

### Herausforderung – Erstelle deinen eigenen teilweisen Filter

Jetzt bist du dran! Filtere mit verschiedenen Filtern einen beliebigen Teil der süßen Katze! Spannend!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity5" target="_blank">Replit starten</a>

{{% showanswer Fortgeschritten %}}

Wäre es nicht schön, wenn wir die obigen Schritte vereinfachen könnten?  Lassen Sie uns dies mit der `Pillow ImageFilter`-Funktion `filter()` und `convert()` tun.

Um die Funktion `filter()` zu verwenden, kannst du den ImageFilter-Typ in den Klammern angeben. Beispielsweise wird `image.filter(ImageFilter.BLUR)` das Bild verschwommen machen. Oder, wenn du stattdessen `ImageFilter.CONTOUR` verwendest, wird ein 'Skizzen'-Effekt zu deinem Bild hinzugefügt.

Zum Beispiel für das obige 'img':

```python
    blurredImage = img.filter(ImageFilter.BLUR) 
    blurredImage.save("myCatBlurred.jpg")
```

Du wirst sehen, dass das gespeicherte Katzenbild verschwommen ist. Probiere einige andere Bildfilter aus, bis du einen findest, der dir gefällt!

Zusätzlich können wir die Funktion `convert()` verwenden, um unser Bild in Schwarz-Weiß umzuwandeln. Um diese Funktion zu verwenden, kannst du den Modus angeben, zu dem du dein Bild konvertieren möchtest. Die gängigsten sind "L", der ein Bild in Graustufen umwandelt, und "RGB", der ein Bild in seinen echten Farben darstellt.

Lass es uns so ausprobieren:

```python
    greyscaleImage = img.convert("L")
    greyscaleImage.save("myCatBW.jpg")
```

Wenn du die Verwischungsfunktion und die Schwarz-Weiß-Konvertierungsfunktion kombinierst, erhältst du etwas wie das hier – perfekt!

<img src="../../media/bw_upside_down.png" alt="Katzenbild verschwommen und schwarz-weiß verkehrt herum" width="50%">
</br>
{{% /showanswer %}}