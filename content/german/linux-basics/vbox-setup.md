```md
---
title: "Verwendung von Virtuellen Maschinen Teil 1"
description: "Ein einführender Leitfaden zur Verwendung von virtuellen Maschinen"
date: 2022-09-23
difficulties: ["mittel"]
weight: 1
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/zoutwedSLKI" title="Verwendung von Virtuellen Maschinen Teil 1 - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Wir stellen Ihnen eine Kopie des gehackten Computers als virtuelle Maschine zur Verfügung, damit Sie uns helfen können.
    </div>
</div>

{{% notice info %}}

### Was ist eine virtuelle Maschine?

Eine **virtuelle Maschine** (häufig VM genannt) ist eine Computerdatei (genannt `Image`), die sich wie ein tatsächlicher Computer verhält.  
Mit anderen Worten, sie ist ein Computer innerhalb eines Computers. Sie läuft in einem Fenster, wie jedes andere Programm.  
Das bietet Ihnen die gleiche Erfahrung auf einer VM, wie Sie sie auf einem normalen Computer hätten.

Die VM ist vom Rest des Systems `isoliert`, was bedeutet, dass die Software innerhalb einer VM den Computer selbst nicht beeinflussen kann.  
Dies schafft eine ideale Umgebung, um andere Betriebssysteme zu testen, auf virenbefallene Daten zuzugreifen und neue Software oder Anwendungen zu erstellen.
{{% /notice %}}

## Was ist VirtualBox?

VirtualBox ist eine Virtualisierungssoftware, auch `Hypervisor` genannt. Sie ermöglicht es Ihrem Computer, virtuelle Maschinen zu hosten.

## Herunterladen von VirtualBox

Sie können VirtualBox über diesen Link herunterladen:

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://www.virtualbox.org/wiki/Downloads">
Download-Link
</a>

Wenn Sie Windows verwenden: Wählen Sie „Windows Hosts“.  
Wenn Sie macOS verwenden: Wählen Sie „OS X Hosts“.  
Wenn Sie etwas anderes verwenden, empfehlen wir für diesen Workshop die Nutzung von Windows oder macOS. Alles andere liegt außerhalb des Umfangs dieses Workshops.

![VirtualBox Download-Seite](../images/vbox-dlpage-update.PNG?classes=border,shadow)

Führen Sie anschließend das Installationsprogramm aus, das Sie gerade heruntergeladen haben.

Die Standardeinstellungen sind für heute ausreichend! Klicken Sie im Installationsprogramm immer wieder auf "Next".

Bitte beachten Sie, dass es auf der dritten Seite einige Auswahloptionen gibt.
![VirtualBox Installationsoptionen](../images/vbox-install-03.PNG?classes=border,shadow)

Falls Sie diese Warnung sehen, machen Sie sich keine Sorgen, das ist zu erwarten.
![VirtualBox Netzwerk-Warnung](../images/vbox-install-04.PNG?classes=border,shadow)

Wenn Sie bei dieser Seite ankommen, klicken Sie auf "Install", um die Einrichtung abzuschließen.
![VirtualBox Installation](../images/vbox-install-05.PNG?classes=border,shadow)

Wählen Sie abschließend das Kontrollkästchen aus, um VirtualBox nach der Installation zu starten.
![VirtualBox Start nach Installation](../images/vbox-install-06.PNG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Ja! Wir haben die Installation von VirtualBox abgeschlossen. Jetzt können wir loslegen und es nutzen.
    </div>
</div>
```