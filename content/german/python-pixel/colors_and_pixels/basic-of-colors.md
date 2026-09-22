---
title: "Grundlagen der Farben"
draft: false
weight: 3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/-ior2GcSYa4" title="Grundlagen der Farben - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Grundlagen der Farben
Haben Sie sich jemals gefragt, wie die Bilder, die Sie online sehen, ihre Farben erhalten? Tatsächlich verwenden Computer den *RGB-Modus*, um Farben darzustellen.

## RGB-Format
In Python folgen wir einem speziellen Format, wenn wir Farben definieren:
(R, G, B), wobei "R", "G" und "B" ganze Zahlen sind. "R" steht für eine gewisse Menge an <span style="color:red; font-weight:bold"> Rot</span>, "G" für eine gewisse Menge an <span style="color:green; font-weight:bold"> Grün</span> und "B" für eine gewisse Menge an <span style="color:blue; font-weight:bold"> Blau</span>. 

 Die Farbe, die durch (R, G, B) dargestellt wird, ergibt sich aus der "Mischung" verschiedener Mengen von Rot, Grün und Blau.

<!-- Für Barrierefreiheit nutzen Sie dieses HTML-Label -->
<label for="colorpicker">Sie können auf die Zeile unten klicken und die gewünschten Farben auf dem Farbbrett auswählen, um deren RGB-Werte zu beobachten:</label>
<input type="color" id="colorpicker">

{{% notice tip %}}
*Was bedeutet "Farbmischung"?*

Hier verwenden wir verschiedene Mengen von Rot-, Grün- und Blaulicht, um eine neue Lichtfarbe zu erzeugen. Genau wie wir beim Malen unterschiedliche Mengen an Farbpigmenten verwenden, mischen wir hier verschiedene Mengen an Licht, um verschiedene Lichtfarben zu erstellen. Pigmente nutzen die Primärfarben Rot, Gelb und Blau, während Computer die Primärfarben Rot, Grün und Blau verwenden.

Dieses Bild zeigt sehr ungefähr, wie sich Farben mischen:
<img src="../../media/colors.svg.png" alt="Farbdarstellung, die zeigt, wie Rot-, Grün- und Blaulicht zusammen gemischt werden" width="50%">

Genau wie wir nicht zu viel Pigment verwenden sollten, gibt es auch bei der Darstellung von Farben Grenzen. Der maximale Wert, den wir verwenden können, um jede Farbmenge darzustellen, ist 255, und der minimale Wert ist 0. Dies wird im RGB-Modus definiert.

In allen folgenden Materialien bedeutet "Farbe" die "Farbe des Lichts."
{{% /notice %}}

## FAQ
1. Welche Farbe stellt (0, 0, 0) dar?

<center>
<label for="colorpickerQ1">Probieren Sie es aus:</label> </br>
<input type="color" id="colorpickerQ1"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Antwort anzeigen" %}}
Schwarz. Alle Farben haben 0 %. (Es gibt hier keine Farbe. Die ganze Welt ist so dunkel. Es ist schwarz!)
<img src="../../media/black.png" alt="Schwarzes Farbmuster" width="40%">
</br>
{{% /showanswer %}}

2. Welche Farbe stellt (255, 255, 255) dar?

<center>
<label for="colorpickerQ2">Probieren Sie es aus:</label> </br>
<input type="color" id="colorpickerQ2"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Antwort anzeigen" %}}
Weiß. 255 zeigt an, dass Sie 100 % jeder Farbe verwenden, was gesättigt ist. (Wenn alle Farben gesättigt sind, erhalten Sie Weiß.)
<img src="../../media/white.png" alt="Weißes Farbmuster" width="40%">
</br>
{{% /showanswer %}}

3. Welche Farbe stellt (100, 100, 100) dar?

<center>
<label for="colorpickerQ3">Probieren Sie es aus:</label> </br>
<input type="color" id="colorpickerQ3"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Antwort anzeigen" %}}
Grau. 100 / 255 % = 39,2 %. Sie erhalten Grau, indem Sie 39,2 % Rot, 39,2 % Blau und 39,2 % Grün kombinieren.
<img src="../../media/grey.png" alt="Graues Farbmuster" width="40%">
</br>
{{% /showanswer %}}

*Hinweis: Keine Sorge, wenn Sie hier verwirrt sind – wir werden diese Ideen später in Python-Code-Aktivitäten im Workshop genauer erklären.*
<br/><br/>

## Eingebaute Farben

In Python sind die am häufigsten verwendeten Farben bereits für Sie vorbereitet. Wenn Sie sich auf eine Farbe beziehen möchten, verwenden Sie einfach:
```python
color = 'color name'
```
Zum Beispiel:
Rot:
```python
color = 'red'
# Der folgende Code zeigt Ihnen die Farbe, die Sie erhalten.
# Sie können diese Zeilen vorerst überspringen; wir werden sie auf der nächsten Seite genauer erklären!
img = Image.new('RGB', (60, 30), color)
img.save('red.png')
img.show('red.png')
```
Das Folgende ist Ihr Ergebnis:
<img src="../../media/whileloopbefore.png" alt="Beispiel eines Rot-Ausgabeformats" width="60%">
Erstaunlich! Sie erhalten Rot!