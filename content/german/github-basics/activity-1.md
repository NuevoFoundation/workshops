---
title: "Raum 1: Die Gabelung"
description: "Beginnen Sie Ihr Abenteuer, indem Sie ein Repository forken und klonen."
difficulties: ["Anfänger"]
weight: 1
---

Du erwachst in einem schwach beleuchteten Raum. Ein Sockel in der Mitte hält ein leuchtendes GitHub-Logo. Eine Stimme hallt: "Um weiterzukommen, musst du den Weg vor dir verzweigen."

Mit "Weg" meint die Stimme ein GitHub-Repository. Ein Fork erstellt eine Kopie des Repositorys in deinem Konto, wodurch du Änderungen vornehmen kannst, ohne die Originalkopie zu beeinflussen.

## Deine Mission

1. Erstelle ein GitHub-Konto (falls du noch keines besitzt).
2. Forke das Repository: `https://github.com/VerisimilitudeX/escape-room`
3. Klone dein geforktes Repository auf deinen lokalen Rechner.

## Anweisungen

1. Besuche GitHub und melde dich an oder registriere dich.
2. Gehe zur Repository-URL und klicke oben rechts auf die Schaltfläche "Fork".
3. Nachdem du das Repository geforkt hast, klicke auf die grüne Schaltfläche "Code" und kopiere die URL.
4. Öffne dein Terminal und führe die folgenden Befehle aus:

   ```pwsh
   git clone <DEIN_GEFORKTES_REPO_URL>
   cd escape-room
   ```

{{% notice tip %}}
**Tipp:** Schau dir die Datei `README.md` in deinem geklonten Repository an. Sie enthält einen geheimen Code, um den nächsten Raum zu öffnen!
{{% /notice %}}

{{< expand "Brauchst du Hilfe?" >}}
Falls du nicht weiterkommst, probiere diese Schritte aus:

1. Stelle sicher, dass du bei GitHub angemeldet bist.
2. Überprüfe, ob du zur korrekten Repository-URL navigiert hast.
3. Wenn du Schwierigkeiten mit den Git-Befehlen hast, stelle sicher, dass [git](https://git-scm.com/downloads) auf deinem System installiert ist.
{{< /expand >}}

Wenn du bereit bist weiterzugehen, gib den gefundenen geheimen Code ein:

<label for="finput">Eingabefeld für den geheimen Code:</label><br>
<input type="text" id="finput" name="finput"><br>