---
title: "Aktivität 7 - Was ist mit der Datei falsch?"
description: "Verwenden Sie Linux-Befehle, um die Datei zu lesen, ohne sie zu öffnen"
date: 2022-09-23
difficulties: ["mittelstufe"]
weight: 10
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/tgciAD4hbyU" title="Aktivität 7 - Was ist mit der Datei falsch? - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Malware kann gefährlich sein! Öffnen Sie sie nicht sofort! Verwenden wir stattdessen die Befehlszeile, um einen Blick darauf zu werfen.
    </div>
</div>

{{% notice warning %}}
Bei Dateien, bei denen wir uns nicht sicher sind, sollten wir einen Blick darauf werfen, um nicht versehentlich einen Virus zu öffnen.
{{% /notice %}}

### Wie können wir die ersten Zeilen der Datei sehen?

Manchmal reicht es aus, den Anfang einer Datei zu betrachten. Der Befehl `head` zeigt die ersten Zeilen einer Datei an.  
Das Format lautet: `head [Dateiname]`

{{% notice tip %}}
Wenn Sie das -n-Flag hinzufügen, können Sie angeben, wie viele Zeilen Sie betrachten möchten.  
Das Format lautet: `head -n [Zeilenanzahl] [Dateiname]`
{{% /notice %}}

Versuchen Sie, die ersten 5 Zeilen der Datei `malware.sh` anzusehen!

![head-Befehl](../images/Act7.1.png?classes=border,shadow)

### Wie können wir die letzten Zeilen der Datei sehen?

Manchmal reicht es aus, das Ende einer Datei zu betrachten. Der Befehl `tail` zeigt die letzten Zeilen einer Datei an.  
Das Format lautet: `tail [Dateiname]`

{{% notice tip %}}
Wenn Sie das -n-Flag hinzufügen, können Sie angeben, wie viele Zeilen Sie betrachten möchten.  
Das Format lautet: `tail -n [Zeilenanzahl] [Dateiname]`
{{% /notice %}}

Versuchen Sie, die letzten 5 Zeilen der Datei `malware.sh` anzusehen!

![tail-Befehl](../images/Act7.2.png?classes=border,shadow)

### Wie können wir die gesamte Datei ansehen?

Manchmal reichen die ersten und letzten Zeilen der Datei nicht aus, und wir müssen den gesamten Inhalt sehen, um zu verstehen, was die Datei macht und wie wir darauf reagieren sollen.  
Schauen wir uns den gesamten Inhalt der Datei `malware.sh` an!

`cat` zeigt den gesamten Inhalt einer Datei an.  
Das Format lautet: `cat [Dateiname]`

{{% notice tip %}}
`less` und `more` sind Befehle, die ähnlich wie `cat` funktionieren.

#### Der more-Befehl

`more` ist ein Befehl, der für größere Dateien gedacht ist. Er zeigt so viele Zeilen wie möglich an, und dann drücken Sie Enter, um den nächsten Abschnitt der Datei zu sehen, bis Sie das Ende erreicht haben.  
Das Format lautet: `more [Dateiname]`

![more-Befehl](../images/Act7.3.png?classes=border,shadow)

#### Der less-Befehl

`less` ist ein Befehl, der nützlich ist, um zwischen verschiedenen Abschnitten einer Datei hin- und herzugehen. Er funktioniert ähnlich wie `more`, aber Sie verwenden die Pfeiltasten nach oben und unten, um von einem Abschnitt zum nächsten zu navigieren. Um den Befehl zu beenden, drücken Sie ‘q’.  
Das Format lautet: `less [Dateiname]`

![less-Befehl](../images/Act7.4.png?classes=border,shadow)
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Was denken Sie, macht die Datei malware.sh? Fügen Sie es Ihrem Bericht hinzu!
    </div>
</div>