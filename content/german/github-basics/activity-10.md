---
title: "Zimmer 10: Das Deployment-Refugium"
description: "Lerne, dein Projekt mit GitHub Pages zu deployen."
difficulties: ["mittel"]
weight: 10
---

Du betrittst den letzten Raum und siehst einen gigantischen Bildschirm, auf dem eine Webseite angezeigt wird, sowie schwebende "Deploy"-Buttons. Eine triumphierende Stimme verkündet: "Veröffentliche deinen Sieg, damit ihn alle sehen können!"

## Deine Mission

1. GitHub Pages für dein Repository aktivieren.
2. Eine einfache index.html-Datei erstellen.
3. Die Datei hochladen und deine veröffentlichte Seite anschauen.

## Anleitung

1. Gehe in deinem Repository zum Tab "Settings".
2. Scrolle nach unten zum Bereich "GitHub Pages".
3. Wähle unter "Source" den Branch aus, den du deployen möchtest (normalerweise `main`).
4. Erstelle in deinem lokalen Repository eine `index.html`-Datei im Hauptverzeichnis.
5. Füge dieser Datei HTML-Code hinzu, wie zum Beispiel:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Meine GitHub Pages Seite</title>
     </head>
     <body>
       <h1>Hallo, GitHub Pages!</h1>
       <p>Ich habe das GitHub Adventure Game abgeschlossen!</p>
     </body>
   </html>
    ```

6. Committe und pushe diese Datei zu deinem Repository.
7. Warte ein paar Minuten, damit GitHub deine Anfrage verarbeiten kann. Besuche danach deine Seite unter https://<username>.github.io/<repository-name>, wobei <username> dein GitHub-Benutzername und <repository-name> der Name deines Repositorys ist.

{{< notice info >}}
Hinweis: Es kann ein paar Minuten dauern, bis deine Seite nach dem Pushen der Änderungen veröffentlicht wird.
{{< /notice >}}

{{< mermaid >}}
graph TD
A[GitHub Pages aktivieren] --> B(index.html erstellen)
B --> C(Commit und push)
C --> D{Seite veröffentlicht?}
D -->|Ja| E[Seite anschauen]
D -->|Nein| F[Ein paar Minuten warten]
F --> D
{{< /mermaid >}}

Nachdem deine Seite veröffentlicht wurde, wie lautet der Titel deiner Webseite? Du findest ihn oben in deinem Browser, wenn du die Seite besuchst. Gib ihn unten ein:

<label for="finput">Eingabefeld für den Webseiten-Titel:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
Herzlichen Glückwunsch, GitHub-Meister! Du hast alle Herausforderungen gemeistert und deinen Sieg veröffentlicht. Du hast das GitHub Adventure Game erfolgreich abgeschlossen!
{{< /notice >}}