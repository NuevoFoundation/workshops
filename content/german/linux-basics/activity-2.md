---
title: "Aktivität 2 - Benutzerstandort bestimmen"
description: "Verwenden Sie einen Linux-Befehl, um herauszufinden, in welchem Verzeichnis Sie sich derzeit befinden"
date: 2022-09-23
difficulties: ["mittelstufe"]
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/v1XLyLuQQyA" title="Aktivität 2 - Benutzerstandort bestimmen - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Bevor wir die Hacker stoppen können, müssen wir lernen, im Linux-Dateisystem zu navigieren.
    </div>
</div>

## Was ist ein Dateisystem?

Ein Dateisystem ist eine strukturierte Sammlung von Dateien und Daten auf einem Computerlaufwerk. Die oberste Ebene eines Dateisystems wird als "Root" bezeichnet. Sie können sich das als den Anfang des Dateisystems vorstellen.

{{% notice tip %}}
Fun Fact: Dateisysteme werden oft als "Baum" beschrieben. Das liegt daran, dass das Dateisystem wie ein umgedrehter Baum aussieht, bei dem jeder Ordner als Zweig oder Blatt dargestellt wird. Zum Beispiel könnte Ihr Dateisystem wie unten dargestellt aussehen:

<img src="../images/filesystem-tree.png" height="500" alt="Bild eines Dateisystembaums"/>

{{% /notice %}}

Auf einem Windows-Computer können Sie das Dateisystem des Laufwerks "C:\" mit dem "Datei-Explorer" so durchsuchen:

![Bild eines Windows-Datei-Explorers](../images/filesystem-windows.png?classes=border,shadow)

Auf einem Mac können Sie das Home-Dateisystem des Computers im "Finder" wie unten gezeigt durchsuchen:

![Bild des Mac-Datei-Finders](../images/home-folder-mac.jpg?classes=border,shadow)

## Wo befinden Sie sich im Dateisystem?

Wir möchten herausfinden, welches unser aktuelles Arbeitsverzeichnis ("current working directory") ist. Dies ist der Ort im Dateisystem, an dem Sie sich gerade befinden.

Der Linux-Befehl `pwd` zeigt Ihren aktuellen Standort an. Dies steht für "Print Working Directory" ("Arbeitsverzeichnis ausgeben"). Testen Sie es!

```
pwd
```

<!---!![pwd command](../images/02_pwd.png?classes=border,shadow) --->
<img src="../images/02_pwd.png" alt="pwd-Befehl" style="width:700px;"/>

Die oben gezeigte Ausgabe ist `/home/nuvi`, und ihre Bedeutung wird unten erklärt:

- `/`: Dies ist das Symbol für das Root-Verzeichnis dieses Dateisystems.
- `/home`: Dies ist der Pfad des Home-Verzeichnisses, das sich im Root-Verzeichnis befindet.
- `/home/nuvi`: Dies ist der Pfad zum Nuvi-Verzeichnis, das sich im Home-Verzeichnis befindet. Hier endet die Ausgabe, das heißt `/home/nuvi` ist das aktuelle Arbeitsverzeichnis, in dem wir uns befinden.
- Dieser Prozess, durch das Dateisystem zu jedem Verzeichnis zu navigieren, kann in einigen Fällen noch viele weitere Schritte umfassen.
- Der oben gezeigte und beschriebene Pfad wird als <b>absoluter Pfad</b> bezeichnet, da er den Pfad vom aktuellen Verzeichnis bis hinauf zum Root-Verzeichnis angibt.

## Wie navigiere ich im Dateisystem?

Um in ein anderes Verzeichnis zu wechseln, verwenden Sie den Befehl `cd`. Das steht für "Change Directory" ("Verzeichnis wechseln"). Das Format dieses Befehls lautet `cd [Verzeichnisname]`.

<!---![cd command](../images/02_cd.PNG?classes=border,shadow) --->
<img src="../images/02_cd.PNG" alt="cd-Befehl" style="width:700px;"/>

In der oben gezeigten Ausgabe sehen Sie, dass nach erneuter Eingabe von `pwd` das Arbeitsverzeichnis nun "Desktop" ist. Probieren Sie `cd ..`.

Probieren Sie ein weiteres Beispiel für `cd` unten aus:

```
cd ..
```

<!-- ![cd command](../images/02_cdDotDot.PNG?classes=border,shadow) -->
<img src="../images/02_cdDotDot.PNG" alt="cd-Befehl" style="width:700px;"/>

Das `..`, das Sie nach dem cd-Befehl eingeben, führt Sie eine Ebene im Dateisystembaum nach oben. Die Ausgabe von `pwd` zeigt jetzt, dass wir zurückgekehrt sind. Wir haben im Verzeichnis "nuvi" begonnen, sind mit `cd Desktop` den Baum hinunter ins Verzeichnis "Desktop" gewechselt und mit `cd ..` wieder eine Ebene nach oben gegangen.

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Großartige Arbeit! Als Nächstes schauen wir uns an, wie man die Verzeichnisse selbst erkundet.
    </div>
</div>