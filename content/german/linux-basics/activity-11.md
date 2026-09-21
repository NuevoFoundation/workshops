---
title: "Aktivität 11 - Dateien speichern und schützen"
description: "Verwenden Sie Linux-Befehle, um Dateien zu komprimieren und zu archivieren."
date: 2022-09-23
prereq: "Keine."
difficulties: ["mittel"]
weight: 14
---

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Vielen Dank, dass Sie uns geholfen haben, meine Maschine zu reparieren! Jetzt lassen Sie uns alles in einem schönen Paket zusammenfassen.
    </div>
</div>

### Sichern Sie Ihre Dateien, damit sie nicht wieder manipuliert werden

`tar` ist ein Befehl, der Archivdateien erstellt und extrahiert.

{{% notice info %}}
Ein Archiv ist eine Sammlung von Archivdateien. Eine Archivdatei enthält die komprimierten Daten von einer oder mehreren Dateien.

`zip` ist ein Befehl, der eine Reihe von Dateien komprimiert. Das Format lautet: `zip [Name der ZIP-Datei] [Dateinamen, die gezippt werden sollen]`

{{% /notice %}}

Das Format lautet: `tar [Dateinamen]`.

| Flags | Verwendung                          |
| :---- | :---------------------------------- |
| -c    | erstellt Archiv                     |
| -x    | extrahiert Archiv                   |
| -f    | erstellt Archiv mit gegebenem Dateinamen |

Verwenden Sie `tar`, um Ihr Verzeichnis mit `files` zu sichern! Sie sollten ein Archiv mit dem Namen `files.tar.gz` erstellen.

![tar-Befehl](../images/Act11.png?classes=border,shadow)