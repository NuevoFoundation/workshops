---
title: "Ein Bildmodul importieren"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 1
--- 

### Einrichtung des Projekts

Um interessante Dinge mit Bildern zu machen, müssen wir einige nützliche Funktionen freischalten. Um diese Funktionen zu erhalten, müssen wir ein Modul importieren. In diesem Fall können wir durch das Importieren des Moduls <b>Pillow</b> einige Funktionen nutzen, die uns helfen, Bilder zu bearbeiten.

Zuerst sollten wir alles aus der Datei main.py löschen. Dann fügen wir die folgenden Anweisungen hinzu:

<pre>
    <font color="blue">from</font> PIL <font color="blue">import</font> Image
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageFilter
</pre>


Sobald Sie auf Ausführen klicken, sollten Sie sehen, dass das Modul in der Konsole installiert wird:

<img src="../../media/installed_module.png" alt="Bild, das zeigt, was Sie sehen sollten, wenn das Modul erfolgreich installiert wurde" width="60%">

Wenn Sie das obenstehende sehen, bedeutet das, dass Sie ein Modul erfolgreich importiert haben! Falls Sie auf Probleme stoßen, bitten Sie bitte um Hilfe, bevor Sie weitermachen.

{{% notice note %}}

Falls Sie neugierig sind, welche Funktionen es im Pillow Image-Modul gibt, finden Sie hier Informationen darüber: https://pillow.readthedocs.io/en/latest/handbook/index.html

{{% /notice %}}