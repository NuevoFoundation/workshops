---
title: "Aktivität 1 - Benutzerkonto Bestimmen"
description: "Verwenden Sie einen Linux-Befehl, um festzustellen, welcher Benutzer Sie sind"
date: 2022-09-23
difficulties: ["mittel"]
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/XAtCQ9S1vSI" title="Aktivität 1 - Benutzerkonto Bestimmen - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Nun befinden wir uns in der Kommandozeile. Lassen Sie uns einen einfachen Befehl testen, der uns das Benutzerkonto anzeigt.
    </div>
</div>

## Was sind Benutzerkonten?

Jeder Benutzer in Linux hat ein Benutzerkonto. Diese dienen dazu, jeden Benutzer eindeutig zu identifizieren.

Zum Beispiel, nehmen wir an, Sie und Ihr Freund Nuvi teilen sich einen Computer. Sie und Nuvi könnten separate Benutzerkonten erstellen, um nachzuverfolgen, welche Dateien wem gehören, und um sicherzustellen, dass keiner von Ihnen versehentlich etwas Wichtiges ändert.

## Wie finde ich heraus, welches Konto ich benutze?

Der Linux-Befehl `whoami` verrät Ihnen, welches Konto Sie verwenden. Probieren Sie es aus!

```
whoami
```

<!---![home directory](../images/01_whoami.png?classes=border,shadow) --->
<img src="../images/01_whoami.png" alt="home directory" style="width:600px;"/>

In unserem obigen Beispiel gibt die Terminalausgabe den Namen unseres Benutzers aus: `nuvi`.

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Jetzt, da wir überprüft haben, wer wir sind, finden wir als Nächstes heraus, wo wir uns befinden.
    </div>
</div>