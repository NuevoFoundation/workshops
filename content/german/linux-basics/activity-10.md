---
title: "Aktivität 10 - Lass uns bewegen und ersetzen"
description: "Verwende Linux-Befehle, um Dateien zu verschieben und zu kopieren"
date: 2022-09-23
difficulties: ["mittelstufe"]
weight: 13
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/LPcQW4oGK6g" title="Activity 10 - Let&#x27;s move and replace - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Großartig, jetzt, da die bösartige Datei der Hacker uns keine Kopfschmerzen mehr bereitet, lass uns die alte Datei wiederherstellen, damit alles wieder reibungslos läuft.
    </div>
</div>

### Wie man die geheimen Nachricht repariert

Der Befehl `mv` kann auch verwendet werden, um die Zieldatei durch die Quelldatei zu ersetzen.  
Das Format lautet: `mv [Quell-Dateiname] [Ziel-Dateiname]`.

Ersetze die vermasselte geheime Nachricht durch das zuvor gefundene Backup.  
Verschiebe die Datei in das neue Verzeichnis, das wir erstellt haben.

![mv Befehl](../images/Act10.1.png?classes=border,shadow)

---

### Deine Dateien sichern

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Die Backupdatei war hilfreich, um die manipulierte Datei zu reparieren. Lass uns die Dateien in unserem Verzeichnis sichern.
    </div>
</div>

`cp` ist ein Befehl, der eine Datei von einem Ort an einen anderen kopiert.  
Das Format lautet: `cp [Quell-Dateiname] [Ziel-Dateiname]`.

Erstelle eine Kopie der erstellten Datei und der Datei `secret-message.txt`.

![cp Befehl](../images/Act10.2.png?classes=border,shadow)