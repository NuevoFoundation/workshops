```markdown
---
title: "Aktivität 2: PandoraBots Einrichten"
draft: false
weight: 5
---

## AIML
Wir werden AIML verwenden, um unseren Chatbot zu erstellen. AIML steht für **Artificial Intelligence Markup Language**. Wenn du jemals HTML benutzt hast, um eine Website zu erstellen, wirst du feststellen, dass AIML sehr ähnlich aussieht. Bevor wir mit dem Schreiben von AIML beginnen können, müssen wir ein Konto bei PandoraBots erstellen.
<img src="../img/chat_Alice.png" alt="Illustration der ALICE-Chatbot-Figur" width="20%" />

## PandoraBots
Gehe zu [https://www.pandorabots.com/](https://www.pandorabots.com/) und klicke auf **Sign Up**. Gib eine E-Mail-Adresse und ein Passwort ein, um ein Konto zu erstellen. Alternativ kannst du dich mit einem Konto von Google, Facebook, Twitter oder GitHub registrieren. Wähle, falls erforderlich, die Option für die kostenlose Testversion.

## Einen neuen Bot erstellen
Nachdem du dich registriert hast, solltest du eine Seite sehen, die so aussieht:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="Startseite für ein neues Konto bei PandoraBots" width="40%"/></p>

Um einen neuen Bot zu erstellen, klicke auf die Schaltfläche „+“ neben „My Bots“ im Navigationsbereich. Gib dem Bot einen Namen und klicke auf „Create Bot“.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="Erstellen eines neuen Bots auf PandoraBots" width="40%"/></p>

## Bot bearbeiten
Sobald du einen neuen Bot erstellt hast, wird der Name des Bots im Navigationsbereich angezeigt. Klicke auf **Edit** unter dem Namen deines Bots und wähle dann **Code Editor**, um zum Editor zu gelangen.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="Bearbeiten eines Bots bei PandoraBots" width="40%"/></p>

Der Editor ist der Ort, an dem du AIML-Dateien und Kategorien schreiben wirst, damit du und andere mit deinem Bot sprechen können.

Verwende das Datei-Menü, um eine neue AIML-Datei mit dem Namen „greetings“ zu erstellen.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="Hinzufügen einer neuen Datei bei PandoraBots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="Hinzufügen einer neuen Datei bei PandoraBots" width="40%"/></p>

## Hello World

Kopiere den Code für die folgende Kategorie in den Texteditor zwischen die Start-Tags ```<aiml>``` und End-Tags ```</aiml>```:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Wenn du fertig bist, speichere deine Datei über das Menü „File“.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="Hinzufügen einer neuen Datei bei PandoraBots" width="40%"/></p>

## Deinen Bot testen
Das Chat-Widget ermöglicht es dir, mit deinem Bot zu sprechen. Klicke auf das „Sprechblasen“-Symbol in der unteren rechten Ecke, um mit deinem Bot zu chatten. Gib `Hello` ein, und du solltest die Antwort erhalten, die du gerade programmiert hast: `„Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="Hinzufügen einer neuen Datei bei PandoraBots" width="40%"/></p>
```