---
title: "Aktivität 4 - Notizen machen üben"
description: "Linux-Befehle verwenden, um ein neues Verzeichnis zu erstellen"
date: 2022-09-23
difficulties: ["mittel"]
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/h9qokQeLREI" title="Aktivität 4 - Notizen machen üben - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Als Cybersecurity-Ingenieur ist es wichtig, viele Notizen zu machen. Diese sind hilfreich, um später zu verstehen, wie der Hack passiert ist. Lass uns unseren Arbeitsbereich erweitern!
    </div>
</div>

### Was, wenn ich ein neues Verzeichnis erstellen möchte?

Um das Erstellen eines neuen Verzeichnisses zu üben, verwende den Befehl `mkdir` (bedeutet "Make Directory") im folgenden Format: `mkdir neuer_verzeichnisname`.

Erstellen wir ein Verzeichnis namens `files`, indem wir den folgenden Befehl eingeben:

```
mkdir files
```

<!---![ls-l command](../images/04_mkdir.PNG?classes=border,shadow) --->
<img src="../images/04_mkdir.PNG" alt="mkdir-Befehl" style="width:600px;"/>

Wie du sehen kannst, erscheint jetzt, wenn `ls -l` ausgeführt wird, ein zusätzliches Verzeichnis namens `files`.

### Was kannst du mit diesen Dateien machen?

Ein Beispiel dafür, wie man eine Datei oder ein Verzeichnis manipulieren kann, ist das Verschieben an einen anderen Ort. Dies wird mit dem Verschiebebefehl `mv` erreicht. Üben wir, indem wir das Verzeichnis `Music` in das Verzeichnis `Documents` verschieben.

Gebe den unten aufgeführten Befehl ein:

```
mv Music/ Documents/
```

Gebe jetzt noch einmal `ls -l` ein und betrachte die Ausgabe.

![ls-l command](../images/04_mv_music_dir.png?classes=border,shadow)

Du solltest sehen, dass das Verzeichnis `Music` nicht mehr angezeigt wird, da es in das Verzeichnis `Documents` verschoben wurde.

{{% notice tip %}}
Wir können sehen, dass es in `Documents` verschoben wurde, indem wir den Befehl `ls` mit einem zusätzlichen Verzeichnispfad verwenden.

```
ls -l Documents/
```

{{% /notice %}}

Üben wir `mv` ein weiteres Mal, indem wir es zurück verschieben.

Probiere es aus:

```
mv Documents/Music/ .
```

Dies verschiebt das Verzeichnis `Music` aus dem Verzeichnis `Documents` zurück in unser aktuelles Verzeichnis, das mit `.` bezeichnet wird. Der Punkt, oder Dot, wird in Befehlen verwendet, um das aktuelle Verzeichnis zu bezeichnen. Wenn du noch einmal `ls -l` eingibst, siehst du, dass `Music` in dieses Verzeichnis zurückgekehrt ist.

<img src="../images/../images/03_ls-l.png" height="500" alt="ls -l-Befehl"/>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Großartig, du weißt jetzt, wie du Dateien verschieben kannst. Wir werden dieses Wissen bald nutzen, um uns von dem Hack zu erholen.
    </div>
</div>

### Was, wenn ich eine neue Datei erstellen möchte?

Um eine Datei zu erstellen, können wir den Befehl `touch` verwenden. Der `touch`-Befehl erstellt eine leere Datei ohne Daten.

Probiere den folgenden Befehl aus, um eine Datei namens `file1` zu erstellen:

```
touch file1
```

<!---![ls-l command](../images/04_touch.PNG?classes=border,shadow) --->
<img src="../images/04_touch.PNG" alt="touch-Befehl" style="width:600px;"/>

Wenn wir jetzt `ls -l` eingeben, können wir sehen, dass die Datei erstellt wurde.

### Was, wenn ich Daten zur Datei hinzufügen möchte?

Eine leere Datei hat nicht viel Nutzen, also fügen wir einige Daten hinzu, z. B. unseren Namen.
Um die Datei zu bearbeiten, verwenden wir den Befehl `vim`. Vim ist ein Editor, der es uns ermöglicht, Daten in einer Datei hinzuzufügen, zu entfernen und zu ändern.

Gebe den folgenden Befehl ein, um `file1` zu bearbeiten:

```
vim file1
```

<!---![ls-l command](../images/04_vim.PNG?classes=border,shadow) --->
<img src="../images/../images/04_vim.PNG" height="500" alt="vim-Befehl"/>

Jetzt befinden wir uns im Vim-Editor. Drücke `i`, um den Einfügemodus zu aktivieren. Gib nun `nuvi` ein und drücke `esc`, um den Einfügemodus zu verlassen. Gebe schließlich `:wq` ein und drücke Enter. Der Doppelpunkt zeigt Vim an, dass du einen Befehl eingibst. Das `w` und `q` bedeuten, dass du die vorgenommenen Änderungen speichern und den Editor verlassen möchtest.

{{% notice warning %}}
Um `vim` zu verlassen, drücke `esc` und gebe dann `:wq` ein. Dies wirst du jedes Mal benötigen, wenn du `vim` öffnest!
{{% /notice %}}

![ls-l command](../images/04_vim_after.PNG?classes=border,shadow)

<img src="../images/04_vim_after.PNG" alt="vim danach" style="width:600px;"/>

Gib noch einmal `ls -l` ein und du kannst sehen, dass `file1` nun 5 Bytes Inhalt hat, statt 0 wie vorher.

