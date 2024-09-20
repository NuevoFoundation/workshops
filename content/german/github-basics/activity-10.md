---
title: "Raum 10: Die Deployment-Höhle"
description: "Lerne, dein Projekt mit GitHub Pages bereitzustellen."
difficulty: "Mittelstufe"
weight: 10
---

# Raum 10: Die Deployment-Höhle

{{< figure src="../images/room10_pages.jpg" title="Ein Raum mit einem riesigen Bildschirm, der eine Webseite anzeigt und schwebende Bereitstellungstasten" >}}

Du betrittst den letzten Raum und siehst einen riesigen Bildschirm, der eine Webseite anzeigt, sowie schwebende "Deploy"-Tasten. Eine triumphierende Stimme kündigt an: "Stelle deinen Sieg zur Schau!"

## Deine Mission

1. Aktiviere GitHub Pages für dein Repository.
2. Erstelle eine einfache index.html-Datei.
3. Lade die Datei hoch und sieh dir deine bereitgestellte Seite an.

## Anleitung

1. Gehe zum "Einstellungen"-Tab deines Repositories.
2. Scrolle zum Abschnitt "GitHub Pages".
3. Wähle unter "Source" den Branch, den du bereitstellen möchtest (meistens `main`).
4. Erstelle in deinem lokalen Repository eine `index.html`-Datei im Stammverzeichnis.
5. Füge HTML-Code zur Datei hinzu, wie zum Beispiel:

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

6. Committe und pushe diese Datei in dein Repository.
7. Warte einige Minuten, bis GitHub deine Anfrage bearbeitet hat, und besuche dann deine Seite unter https://<username>.github.io/<repository-name>, wobei <username> dein GitHub-Benutzername und <repository-name> der Name deines Repositories ist.
{{< notice info >}}
Hinweis: Es kann ein paar Minuten dauern, bis deine Seite nach dem Hochladen der Änderungen bereitgestellt wird.
{{< /notice >}}
{{< mermaid >}}
graph TD
A[Aktiviere GitHub Pages] --> B(Erstelle index.html)
B --> C(Commit und Push)
C --> D{Seite bereitgestellt?}
D -->|Ja| E[Sieh dir deine Seite an]
D -->|Nein| F[Warte ein paar Minuten]
F --> D
{{< /mermaid >}}
Nachdem deine Seite bereitgestellt ist, wie lautet der Titel deiner Webseite? Du findest ihn oben in deinem Browser, wenn du die Seite besuchst. Gib ihn unten ein:
[Eingabefeld für den Webseitentitel]
{{< notice success >}}
Herzlichen Glückwunsch, GitHub-Meister! Du hast alle Herausforderungen gemeistert und deinen Sieg bereitgestellt. Du hast das GitHub Adventure Game erfolgreich abgeschlossen!
{{< /notice >}}