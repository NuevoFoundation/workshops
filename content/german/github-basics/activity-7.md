---
title: "Raum 7: Die Automatisierungs-Allee"
description: "Nutzen Sie die Kraft von GitHub Actions, um Ihren Workflow zu automatisieren."
difficulties: ["fortgeschritten"]
weight: 7
---

Sie betreten einen Raum, der vor Aktivität summt. Zahnräder drehen sich und Förderbänder bewegen sich, ein Symbol für automatisierte Prozesse. Ein holografisches Display erwacht zum Leben: „Automatisieren Sie Ihren Weg zum Sieg!“

## Ihre Mission

1. Erstellen Sie einen einfachen GitHub Actions-Workflow.
2. Lösen Sie den Workflow aus, indem Sie eine Änderung an Ihr Repository pushen.
3. Sehen Sie sich die Ergebnisse des automatisierten Prozesses an.

## Anweisungen

1. Erstellen Sie in Ihrem lokalen Repository ein neues Verzeichnis namens `.github/workflows`.
2. Erstellen Sie in diesem Verzeichnis eine Datei mit dem Namen `hello-world.yml`.
3. Fügen Sie der Datei folgenden Inhalt hinzu:

   ```yaml
   name: Hello World Workflow
   on: [push]
   jobs:
     say-hello:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Say Hello
           run: echo "Hello, GitHub Actions!"

    ```
4. Committen Sie diese Datei und pushen Sie sie in Ihr GitHub-Repository.
Gehen Sie auf die Registerkarte „Actions“ in Ihrem GitHub-Repository, um den Workflow-Lauf zu sehen.

{{< notice warning >}}
Hinweis: GitHub Actions können leistungsstarke Tools zur Automatisierung sein, aber achten Sie auf die Nutzungslimits bei kostenlosen Accounts.
{{< /notice >}}
{{< mermaid >}}
graph TD
A[Workflow-Datei erstellen] --> B(Commit und Push)
B --> C{Workflow ausgelöst?}
C -->|Ja| D[Ergebnisse ansehen]
C -->|Nein| E[Workflow-Datei auf Fehler prüfen]
E --> B
{{< /mermaid >}}

Nachdem Ihr Workflow erfolgreich ausgeführt wurde, was war die Ausgabe des Schritts „Say Hello“? Geben Sie es unten ein:

<label for="finput">Eingabefeld für Workflow-Ausgabe:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "Tipp" >}}
Die Ausgabe sollte genau das sein, was Sie im echo-Befehl in Ihrer Workflow-Datei angegeben haben.
{{< /expand >}}

{{< notice success >}}
Fantastische Arbeit! Sie haben Ihren ersten Prozess mit GitHub Actions automatisiert. Weiter zur nächsten Herausforderung!
{{< /notice >}}