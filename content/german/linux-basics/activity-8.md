---
title: "Aktivität 8 - Was ist anders?"
description: "Verwenden von Linux-Befehlen zum Vergleich von Dateien"
date: 2022-09-23
difficulties: ["mittelschwer"]
weight: 11
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/fAI1kyAoVTA" title="Activity 8 - What&#x27;s different? - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Schauen wir uns die geheime Nachricht an, um sicherzustellen, dass diese seltsame Datei `malware.sh` nichts daran geändert hat!
    </div>
</div>

## Unterschiede

Kennen wir einen Befehl, der uns helfen kann, den Speicherort der Datei `secret-message.txt` zu finden?

![find command](../images/Act8.1.png?classes=border,shadow)

Wechseln wir in dieses Verzeichnis und überprüfen wir das Zitat „Do. Or do not. There is no try.“ von früher. Erinnerst du dich, welcher Befehl uns hierbei helfen kann?

![grep command](../images/Act8.2.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Diese Datei enthält normalerweise gute und lustige Zitate, aber es scheint viele Änderungen gegeben zu haben. Sollten wir sie mit einer bekannten guten Version vergleichen?
    </div>
</div>

Schauen wir nach, ob es möglicherweise Backups der geheimen Nachricht im Verzeichnis gibt. Gehe in das Dokumentenverzeichnis und versuche:

```
ls -la
```

{{% notice tip %}}
Das Flag `-a` zeigt alle Einträge an, einschließlich versteckter Dateien.
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Hast du neue Dateien gefunden? Notiere die Änderungen!
    </div>
</div>

## Vergleiche die Datei secret-message.txt mit der Backup-Datei

`diff` ist ein Befehl, der verwendet wird, um zwei Dateien zu vergleichen und herauszufinden, was hinzugefügt, geändert und gelöscht wurde.  
Das Format lautet: `diff [Dateiname] [Vergleichsdateiname]`

{{% notice info %}}
Fun Fact: Wenn du `diff --help` ausführst, wird eine Ausgabe mit Informationen zur Nutzung des `diff`-Tools angezeigt, einschließlich Optionen, die mit dem Tool verwendet werden können.
{{% /notice %}}

Überprüfe die Unterschiede zwischen den beiden Dateien. Wie viele Unterschiede hast du gefunden? Schreibe sie in die Datei, die du erstellt hast!

{{% notice tip %}}

### Eine bessere Möglichkeit, die Unterschiede zu sehen

`vimdiff` ist ein Befehl, der ein Fenster öffnet, in dem die Dateien in separaten Tabs angezeigt werden, wobei die Unterschiede hervorgehoben werden.

Probiere `vimdiff`, um die Unterschiede zwischen den Dateien besser zu visualisieren.
{{% /notice %}}