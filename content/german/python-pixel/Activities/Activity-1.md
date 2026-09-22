---
title: "Aktivität 1: Erstelle eine Farbtafel"
prereq: "Python-Grundlagen, Python-Bildbearbeitung: Ein Bild öffnen, Python-Pixel: Farben und Pixel"
difficulties: ["mittel"]
date: 2026-04-25T00:00:00-07:00
weight: 1
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nz3Uz4kBoUU" title="Aktivität 1: Erstelle eine Farbtafel - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Beispiel für eine einfache Farbtafel

Hier ist ein Beispiel, wie man eine Farbtafel mit der Farbe Rot, einer Breite von 60 und einer Länge von 30 erstellt.

```python
# Dies ist das Beispiel zur Erstellung einer Farbtafel.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
```
<img src="../../media/whileloopbefore.png" alt="Bild zeigt das erste Beispiel der Aktivität" width="60%">

## Erstelle deine eigene Farbtafel!

Wähle deine Lieblingsfarbe und erstelle eine Farbtafel, mit der du spielen kannst! Hier sind einige Beispiel-Farben, die du auswählen kannst, aber du kannst auch deine eigene Farbe wählen.

<img src="../../media/Color-chart.png" alt="Farbtabelle zeigt Beispiel-RGB-Farben" width="30%">

<!-- Für Barrierefreiheit, verwende dieses HTML-Label -->
<label for="colorpicker">Du kannst den Farbwähler verwenden, um eine Farbe auszuwählen:</label>
<input type="color" id="colorpicker">

{{% notice warning %}}
 Um dein Bild zu sehen, klicke bitte in die obere linke Ecke (wo "Dateien" steht) und dann auf die Bilddatei, um das Ergebnis zu sehen.
<div style="width:70%">
    <table>
        <td>
            <img src="../../media/open-file1.png" alt="Klicke auf Dateien im linken Panel" width="100%">
        </td>
        <td>
            <img src="../../media/open-file2.png" alt="Klicke auf die Bilddatei, um die Ergebnisse zu sehen" width="100%">
        </td>
    </table>
</div>
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity1" target="_blank">Replit starten</a>