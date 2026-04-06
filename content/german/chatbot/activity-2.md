---
title: "Aktivität 2: Einrichtung von PandoraBots"
draft: false
weight: 5
---

## AIML
Wir werden AIML verwenden, um unseren Chatbot zu erstellen. AIML steht für **Artificial Intelligence Markup Language**. Wenn du jemals HTML verwendet hast, um eine Website zu erstellen, wirst du feststellen, dass AIML sehr ähnlich aussieht. Bevor wir anfangen können, AIML zu schreiben, müssen wir uns ein Konto bei PandoraBots erstellen.
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## Pandorabots
Gehe zu [https://www.pandorabots.com/](https://www.pandorabots.com/) und klicke auf **Anmelden**. Gib eine E-Mail-Adresse und ein Passwort ein, um ein Konto zu erstellen. Alternativ kannst du dich mit einem Konto von Google, Facebook, Twitter oder Github anmelden. Wenn du dazu aufgefordert wirst, wähle die kostenlose Testversion aus.

## Einen neuen Bot erstellen
Nachdem du dich angemeldet hast, solltest du eine Seite sehen, die so aussieht:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="Startseite für neue Konten auf PandoraBots" width="40%"/></p>

Um einen neuen Bot zu erstellen, verwende die Taste „+“ neben „My Bots“ im Navigationsbereich. Gib ihm einen Namen und klicke auf „Create Bot“.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="Erstellen eines neuen Bots bei PandoraBots" width="40%"/></p>

## Bot bearbeiten
Nachdem du einen neuen Bot erstellt hast, erscheint der Name des Bots im Navigationsbereich. Klicke auf **Edit** unter dem Namen deines Bots und wähle dann **Code Editor**, um zum Editor zu gelangen.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="Bearbeiten eines Bots bei PandoraBots" width="40%"/></p>

Im Editor kannst du AIML-Dateien und Kategorien schreiben, die es dir und anderen ermöglichen, mit deinem Bot zu sprechen. 

Verwende das Dateimenü, um eine neue AIML-Datei namens „greetings“ zu erstellen.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="Hinzufügen einer neuen Datei bei PandoraBots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="Hinzufügen einer neuen Datei bei PandoraBots" width="40%"/></p>

## Hello World

Kopiere den Code für die folgende Kategorie in den Texteditor zwischen die Anfangs-Tags ```<aiml>``` und die End-Tags ```</aiml>```:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Nachdem du fertig bist, speichere deine Datei über das „File“-Dropdown-Menü.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="Hinzufügen einer neuen Datei bei PandoraBots" width="40%"/></p>

## Deinen Bot testen
Das Chat-Widget ermöglicht es dir, mit deinem Bot zu sprechen. Klicke auf das „Chatblasen“-Symbol unten rechts, um mit deinem Bot zu sprechen. Gib `Hello` ein, und du solltest die Antwort erhalten, die du gerade programmiert hast: `“Hello, world!”`.

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="Hinzufügen einer neuen Datei bei PandoraBots" width="40%"/></p>