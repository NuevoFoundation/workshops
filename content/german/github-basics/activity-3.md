```markdown
---
title: "Raum 3: Das Portal der Pull-Request"
description: "Lerne, Änderungen hochzuladen und eine Pull-Request zu erstellen."
difficulties: ["mittel"]
weight: 3
---

Eine massive Tür blockiert deinen Weg, mit der Aufschrift "Pull Request" darüber. Ein Schild besagt: "Um diese Tür zu öffnen, müssen deine Änderungen überprüft werden."

## Deine Mission

1. Lade deine lokalen Änderungen in dein geforktes Repository hoch.
2. Erstelle eine Pull-Request für das ursprüngliche `CodeDungeon/escape-room` Repository.

## Anweisungen

1. Lade deine Änderungen hoch:

```
git push origin main
```

2. Gehe zu deinem geforkten Repository auf GitHub.
3. Klicke auf "Contribute" und dann auf "Open pull request".
4. Fülle den Titel mit "Solution for Room 2" aus und gib eine kurze Beschreibung an.
5. Klicke auf "Create pull request".

{{< notice info >}}
**Hinweis:** Behalte deine Pull-Request im Auge. Die Wächter des Dungeons (die Repository-Betreuer) werden sie überprüfen und möglicherweise Änderungen anfordern!
{{< /notice >}}

{{< expand "Prozess der Pull-Request" >}}

**Änderungen hochladen**
Lade zunächst deine lokalen Änderungen in dein Remote-Repository hoch:

```
git push origin main
```


**Pull-Request erstellen**
1. Gehe zu deinem Fork auf GitHub
2. Klicke auf den Tab "Pull requests"
3. Klicke auf "New pull request"
4. Stelle sicher, dass das Basis-Repository das Original ist und das Head-Repository dein Fork
5. Klicke auf "Create pull request"

**Auf Bewertung warten**
Nach der Erstellung der Pull-Request:
1. Warte darauf, dass die Betreuer deine Änderungen überprüfen
2. Gehe auf eventuell bereitgestelltes Feedback ein
3. Lade neue Commits hoch, um die Pull-Request bei Bedarf zu aktualisieren

{{< /expand >}}

Sobald du deine Pull-Request erstellt hast, gib deren Nummer ein, um fortzufahren:

<label for="finput">Eingabefeld für Pull-Request-Nummer:</label><br>
<input type="text" id="finput" name="finput"><br>
```