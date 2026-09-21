---
title: "Aktivität 9 - Entfernen Sie die schlechte Datei"
description: "Verwenden Sie Linux-Befehle, um die schlechte Datei und das Verzeichnis zu entfernen"
date: 2022-09-23
difficulties: ["mittel"]
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mLsJXEIsadE" title="Activity 9 - Remove the Bad File - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Also, malware.sh ist definitiv eine schlechte Datei, die von den Hackern hinterlassen wurde. Wir müssen sie und das Verzeichnis, das sie enthält, entfernen!
    </div>
</div>

## Entferne die schlechte Datei!

`rm` ist ein Befehl, der Dateien entfernt.  
Das Format ist: `rm [Dateiname]`.

{{% notice warning %}}
`rm` entfernt die Datei dauerhaft.
{{% /notice %}}

Entferne die Datei, die unserer Meinung nach die Probleme verursacht. Wie können wir überprüfen, ob die Datei vollständig entfernt wurde?

![Befehl rm](../images/Act9.1.png?classes=border,shadow)

----

## Was tun, wenn wir ein Verzeichnis entfernen müssen?

`rmdir` ist ein Befehl, der ein leeres Verzeichnis entfernen kann.  
Das Format ist: `rmdir [Verzeichnisname]`.

{{% notice warning %}}
`rmdir` entfernt das Verzeichnis dauerhaft.
{{% /notice %}}

Wie kannst du das Verzeichnis entfernen, in dem die schlechte Datei war?

![Befehl rmdir](../images/Act9.2.png?classes=border,shadow)

{{% notice warning %}}
Das Entfernen von Dateien kann eine gefährliche Operation sein, insbesondere unter Linux. Stelle sicher, dass du 100% sicher bist, dass die Datei, die du löschen möchtest, sicher zu entfernen ist. Wenn du versehentlich die falsche Datei entfernst, könntest du dein System beschädigen.
{{% /notice %}}

Erinnerst du dich an den Befehl, um das Verzeichnis, das wir gelöscht haben, wiederherzustellen?

![Befehl mkdir](../images/Act9.3.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Gehen wir jetzt überprüfen, ob wir einen Befehl kennen, um die Datei secret-message.txt wiederherzustellen...
    </div>
</div>