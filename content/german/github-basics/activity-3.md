---
title: "Raum 3: Das Pull Request Portal"
description: "Lerne, Änderungen zu pushen und einen Pull Request zu erstellen."
difficulty: "Mittlere"
weight: 3
---

# Raum 3: Das Pull Request Portal

{{< figure src="../images/room3_pull_request.jpg" title="Eine massive Tür steht vor dir, mit 'Pull Request' darüber" >}}

Eine massive Tür versperrt den Weg, mit "Pull Request" darüber. Ein Schild besagt: "Um diese Tür zu öffnen, müssen deine Änderungen überprüft werden."

## Deine Mission

1. Schiebe deine lokalen Änderungen in dein geforktes Repository.
2. Erstelle einen Pull Request zum originalen `CodeDungeon/escape-room` Repository.

## Anweisungen

1. Push deine Änderungen:

```
git push origin main
```

2. Gehe zu deinem geforkten Repository auf GitHub.
3. Klicke auf "Beitragen" und dann auf "Pull Request öffnen".
4. Fülle den Titel mit "Lösung für Raum 2" aus und gib eine kurze Beschreibung.
5. Klicke auf "Pull Request erstellen".

{{< notice info >}}
**Hinweis:** Behalte deinen Pull Request im Auge. Die Wächter des Dungeons (Repository-Maintainer) werden ihn überprüfen und möglicherweise Änderungen anfordern!
{{< /notice >}}

{{< expand "Prozess des Pull Requests" >}}

**Änderungen Pushen**  
Zuerst schiebe deine lokalen Änderungen in dein Remote-Repository:

```
git push origin main
```

**Pull Request Erstellen**  
1. Navigiere zu deinem Fork auf GitHub
2. Klicke auf den Tab "Pull requests"
3. Klicke auf "Neuen Pull Request"
4. Stelle sicher, dass das Basis-Repository das Original ist und das Kopf-Repository dein Fork ist
5. Klicke auf "Pull Request erstellen"

**Auf Überprüfung Warten**  
Nach der Erstellung des Pull Requests:
1. Warte, bis die Maintainer deine Änderungen überprüfen
2. Bearbeite das Feedback, das sie geben
3. Füge neue Commits hinzu, um den Pull Request bei Bedarf zu aktualisieren

{{< /expand >}}

Sobald du deinen Pull Request erstellt hast, gebe seine Nummer ein, um fortzufahren:

[Eingabefeld für die Pull Request-Nummer]

{{< notice info >}}
Hinweis: Das tatsächliche Eingabefeld und die Verschlüsselungsfunktionalität müssten separat implementiert werden, da Hugo dies nicht von Haus aus bietet.
{{< /notice >}}