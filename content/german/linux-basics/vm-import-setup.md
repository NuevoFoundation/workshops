---
title: "Verwendung von virtuellen Maschinen Teil 2"
description: "Fortsetzung des Einführungskurses zur Nutzung virtueller Maschinen"
date: 2022-09-23
difficulties: ["mittel"]
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ffcyyJXEhwY" title="Verwendung von virtuellen Maschinen Teil 2 - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Hervorragende Arbeit bei der Vorbereitung der Host-Umgebung! Jetzt laden wir das Image des gehackten Computers als eine VM.
    </div>
</div>

## Was ist ein Image?

`Images` gibt es in verschiedenen Arten. Wir haben Fotografien, die ebenfalls als Images bezeichnet werden. Computer-Images sind sehr ähnlich. Beide sind Momentaufnahmen von einem bestimmten Zeitpunkt. Wir werden mit einer Kopie eines Computers arbeiten, der sich seltsam verhält. Keine Sorge, das wird deinem Computer nicht schaden! Denke daran, dass das Betriebssystem in einer `Sandbox` läuft und somit deinen Computer nicht beeinflussen kann.

## Kali Linux einrichten

### Das Image herunterladen

`OS-Images` machen es einfach, exakte Kopien von Computern zu übertragen.  
VirtualBox verwendet die Dateiendung `.ova` für ihre Maschinen-Images. Dies ist ähnlich wie das Speichern von Dokumenten als `.docx` oder von Fotografien als `.png`.

Lass uns unsere Kopie des Computers herunterladen! Klicke auf den Link unten, um den Download zu starten.  
Die meisten OS-Images sind recht groß (~8GB), aber unseres ist nur ~3GB groß. Der Download könnte trotzdem ein paar Minuten dauern.

<a class="my-2 mx-4 btn btn-info" href="https://nuevofoundation-my.sharepoint.com/:f:/g/personal/beatris_mendezgandica_nuevofoundation_org/EqwR5wQyp9xEpYoP524regQB6rnwgyJBMULhuGIzyMj_4w?e=yg6rFv" target="_blank">
Download-Link
</a>

### Die virtuelle Maschine importieren

Nun, da du das Maschinen-Image heruntergeladen hast, ist es an der Zeit, es einzurichten!

#### Schritt 1

In der VirtualBox-Anwendung können wir unsere Images _importieren_. Klicke auf die Schaltfläche "Importieren", um loszulegen!

![VirtualBox Import-Schaltfläche](../images/import-01.PNG?classes=border,shadow)

#### Schritt 2

Das Appliance, das wir importieren möchten, ist die `.ova`-Datei, die du zuvor heruntergeladen hast. Klicke auf das kleine Ordnersymbol mit dem grünen Pfeil nach oben. Dies öffnet ein Fenster, in dem du die `.ova`-Datei suchen und auswählen kannst.

![VirtualBox Importbildschirm](../images/import-02.PNG?classes=border,shadow)

#### Schritt 3

Nun hast du die .ova-Datei ausgewählt. Klicke auf "Öffnen". Danach klicke auf dem Bildschirm "Appliance importieren" auf "Weiter".

![VirtualBox Importbildschirm](../images/import-03.PNG?classes=border,shadow)

#### Schritt 4

Der letzte Schritt! Im Feld "Name" kannst du der Maschinenkopie einen neuen Namen geben – es ist deine eigene VM! Stelle sicher, dass die Option "USB-Controller" **nicht** ausgewählt ist. Deaktiviere sie. Für die MAC-Adressen-Politik ist es ratsam sicherzustellen, dass "Neue MAC-Adressen für alle Netzwerkadapter generieren" ausgewählt ist. Zum Schluss klicke auf "Importieren"!

![VirtualBox Importbildschirm](../images/import-05.PNG?classes=border,shadow)

**Hinweis:** Es erscheint ein Pop-up mit der geschätzten Zeit für den Abschluss des Imports.  
Normalerweise dauert dies etwa 5 Minuten, kann aber von deinem Computer abhängen und etwas länger dauern.

![VirtualBox Importbildschirm](../images/import-06.JPG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Jetzt können wir die infizierte Maschine starten und mit unseren Untersuchungen beginnen!
    </div>
</div>