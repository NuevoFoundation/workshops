---
title: "Aktivität 5 - Sicherstellen von Benutzerberechtigungen"
description: "Nutzen Sie einen Linux-Befehl, um Ihre Dateien zu sichern"
date: 2022-09-23
difficulties: ["mittel"]
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/D5Y6LH0mBi0" title="Aktivität 5 - Sicherstellen von Benutzerberechtigungen - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Oh nein. Einige unserer Dateien könnten manipuliert worden sein! Lassen Sie uns unsere Notizen, file1, sichern. Wir wollen nicht, dass ein Hacker daran etwas verändert!
    </div>
</div>

### Wie können wir den Zugriff auf unsere Dateien beschränken?

Indem wir Benutzern "Berechtigungen" für Dateien vergeben!

Berechtigungen sind eine Möglichkeit für den Computer, festzulegen, wer Zugriff auf Dateien hat und was er damit tun kann.

In Linux gibt es drei übliche Arten von Zugriff, die ein Benutzer auf eine Datei haben kann: "lesen", "schreiben" oder "ausführen".

{{% notice note %}}

"Lesen"-Zugriff bedeutet, dass ein Benutzer eine Datei öffnen und lesen kann. "Lesen"-Zugriff wird oft mit einem `r`-Symbol bezeichnet.

"Schreiben"-Zugriff bedeutet, dass ein Benutzer eine Datei öffnen und darin schreiben kann. Dies schließt das Umbenennen und das Verschieben einer Datei in ein anderes Verzeichnis des Dateisystems ein. "Schreiben"-Zugriff wird oft mit einem `w`-Symbol bezeichnet.

"Ausführen"-Zugriff bedeutet, dass ein Benutzer versuchen kann, die Datei als Programm auszuführen. "Ausführen"-Zugriff wird oft mit einem `x`-Symbol bezeichnet.

{{% /notice %}}

### Aber wie wissen wir, wie sicher unsere Dateien sind?

Gibt es einen Befehl, den wir bisher gelernt haben und der uns anzeigen kann, wie sicher unsere Dateien sind?  
Zögern Sie nicht, zurückzuschauen, falls nötig!

![ls -l Befehl](../images/Act5.1.png?classes=border,shadow)

Wir sollten diesen Befehl weiterhin verwenden, um zu überprüfen, ob wir die Berechtigungen wie gewünscht geändert haben.

---

### Wie sichern wir die Dateien dann mit Berechtigungen?

```
chmod u=rwx g=rx o=x file1
```

`chmod` ist ein Befehl, der verwendet wird, um die Berechtigungen Ihrer Dateien zu ändern (es steht für "Change Mode") und zwar für die folgenden 3 verschiedenen Benutzergruppen:

- den <b>u</b>ser oder Besitzer der Datei
- die <b>g</b>roup oder die Mitglieder der Gruppe von Personen mit Zugriff auf die Datei
- die <b>o</b>thers oder alle anderen

Diese Gruppen können Berechtigungen für die folgenden Aktionen erhalten:

- <b>r</b>ead (lesen)
- <b>w</b>rite (schreiben)
- e<b>x</b>ecute (ausführen).

---

### Probieren Sie es selbst aus!

Lassen Sie uns nun versuchen, die Berechtigungen unserer Dateien zu ändern. Wir möchten, dass niemand außerhalb unserer Gruppe und außer uns selbst Zugriff auf `file1` hat. Wie würden wir das machen?

![chmod Befehl](../images/Act5.2.png?classes=border,shadow)

#### Fun Fact: Abkürzung!

`chmod` kann auch mit einfachen numerischen Befehlen verwendet werden. Diese Befehle werden folgendermaßen geschrieben:

```
chmod 751 [Dateiname einfügen]
```

Die Werte können verwendet werden, um Benutzern die Berechtigung zum Lesen, Schreiben und Ausführen zu geben.  
Welche Berechtigungen geben die anderen zwei Werte?

| Nummer |         Bedeutung        |
| :----: | :---------------------: |
|   7    | lesen + schreiben + ausführen |
|   6    |       lesen + schreiben      |
|   5    |      lesen + ausführen      |
|   4    |           lesen           |
|   3    |   ausführen + schreiben   |
|   2    |         schreiben         |
|   1    |        ausführen         |
|   0    |    keine Berechtigung     |