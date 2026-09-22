---
title: "Aktivität 6 - Eine SCHLECHTE Datei"
description: "Verwende Linux-Befehle zum Suchen"
date: 2022-09-23
difficulties: ["mittel"]
weight: 9
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/OaXi1GN_93U" title="Aktivität 6 - Eine SCHLECHTE Datei - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Ich weiß, dass ich eine Datei namens secret-message.txt mit einem meiner Lieblingszitate darin hatte. "Tu es. Oder tu es nicht. Es gibt keinen Versuch." Kannst du mir helfen, sie zu finden?
    </div>
</div>

### Nach einem Muster in einer Datei suchen?

`grep` (**g**lobal search for **r**egular **e**xpression and **p**rint the result) ist ein Befehl, der verwendet wird, um Text in Dateien zu durchsuchen. Es gibt verschiedene Flags oder Optionen, die die Nutzung verändern können.

Das Format lautet: `grep [flag] “[pattern]” [filename]`.

| Flags | Verwendung                                                        |
| :---- | :---------------------------------------------------------------- |
| -c    | Um die Anzahl der Dateien mit dem Muster zu erhalten.             |
| -i    | Um die Suche nicht gross-/kleinschreibungssensitiv zu machen. „uNiX“ ist dasselbe wie „unix“. |
| -n    | Gibt übereinstimmende Zeilen und deren Zeilennummern zurück.       |
| -R    | Durchsuche alle Dateien im aktuellen Verzeichnis.                 |

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Lass uns diesen Befehl üben, um meine Datei secret-message.txt zu finden!
    </div>
</div>

Probier den folgenden Befehl aus:

```
cd
grep -R "Tu es. Oder tu es nicht. Es gibt keinen Versuch."
```

![grep-Befehl](../images/Act6.1.png?classes=border,shadow)

---

### Warum sieht die Datei secret-message so aus?

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Ein Foto von Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Erinnerst du dich an die Datei, die wir mit dem seltsamen Namen gesehen haben? Sie hieß malware.sh. Wir sollten sie noch einmal finden und genauer ansehen. Ich glaube, die Hacker haben diese hinterlassen!
    </div>
</div>

`find` ist ein Befehl, der verwendet wird, um eine Datei mit bestimmten Parametern in einem Verzeichnis oder einer Region von Dateien zu suchen. Es kann auf verschiedene Weise verwendet werden, einschließlich:

- Suche nach einer Datei mit einem bestimmten Dateinamen  
  Das Format lautet: `find [directory] -name [filename]`
- Suche nach allen Dateien mit einer bestimmten Dateiendung (z. B. Textdateien, die mit .txt enden)  
  Das Format lautet: `find [directory] -name *.txt`

Verwenden Sie den `find`-Befehl, um die Datei im aktuellen Verzeichnis zu suchen. Gibt es einen Befehl, den wir verwenden können, um herauszufinden, welches das aktuelle Verzeichnis ist?

![find-Befehl](../images/Act6.2.png?classes=border,shadow)