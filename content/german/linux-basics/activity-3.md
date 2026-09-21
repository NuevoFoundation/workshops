---
title: "Aktivität 3 - Aktuelles Verzeichnis erkunden"
description: "Verwenden Sie Linux-Befehle, um den Inhalt des aktuellen Verzeichnisses anzuzeigen"
date: 2022-09-23
difficulties: ["mittelschwer"]
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/dSsed9cR9QI" title="Activity 3 - Explore Current Directory - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Wie erkundet man das Verzeichnis?

Um die Dateien im aktuellen Verzeichnis anzuzeigen, verwenden wir den Befehl `ls`. Es bedeutet „List“ (Liste).

Probieren Sie es aus:

```
ls
```

![ls-Befehl](../images/03_ls-command.png?classes=border,shadow)

### Wie erhalte ich mehr Informationen über die Dateien in diesem Verzeichnis?

Probieren Sie es aus:

```
ls -l
```
<img src="../images/../images/03_ls-l.png" height="500" alt="ls -l Befehl"/>

Das Flag `-l` im obigen Befehl teilt `ls` mit, die Informationen in langer Form aufzulisten.

## Welche Informationen werden angezeigt?

Lassen Sie uns die oberste Zeile des obigen Beispiels von links nach rechts untersuchen, für das Verzeichnis `Videos`:

![ls -l Befehl erklärt](../images/03_ls-l-numbers.png?classes=border,shadow)

1. <span style="color:green">grün</span>: die Datei-Berechtigungen. Das erste Zeichen `d` zeigt an, dass **Videos** ein Verzeichnis ist. Wäre es ein `-`, würde das bedeuten, dass **Videos** eine Datei ist.
2. <span style="color:red">rot</span>: die Anzahl der **Links** für diese Datei. Das Verzeichnis **Videos** hat 2 _Links_.
3. <span style="color:purple">lila</span>: der Benutzer, dem diese Datei gehört. Benutzer `nuvi` ist der Besitzer des **Videos**-Verzeichnisses.
4. <span style="color:white;background-color:#232b36">weiß</span>: die Gruppe, zu der diese Datei gehört. Hier gehört das Verzeichnis **Videos** zur Gruppe `nuvi`.
5. <span style="color:#ffc000">gelb</span>: die Größe der Datei in **Bytes**. Die Größe des Verzeichnisses **Videos** beträgt 4096 Bytes.
6. <span style="color:#ed7d31">orange</span>: Datum und Uhrzeit, an dem die Datei erstellt wurde.
7. <span style="color:#2e75b6">blau</span>: Name des Verzeichnisses.