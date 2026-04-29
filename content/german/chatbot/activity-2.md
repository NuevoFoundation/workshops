```markdown
---
title: "Aktivität 2: Einrichten von PandoraBots"
draft: false
weight: 5
---

## AIML
Wir verwenden AIML, um unseren Chatbot zu erstellen. AIML steht für **Artificial Intelligence Markup Language**. Wenn du jemals HTML zur Erstellung einer Website verwendet hast, wirst du feststellen, dass AIML sehr ähnlich aussieht. Bevor wir anfangen können, AIML zu schreiben, müssen wir ein Konto bei PandoraBots erstellen.
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## PandoraBots
Gehe zu [https://www.pandorabots.com/](https://www.pandorabots.com/) und klicke auf **Sign Up** (Registrieren). Gib eine E-Mail-Adresse und ein Passwort ein, um ein Konto zu erstellen. Alternativ kannst du dich mit einem Konto von Google, Facebook, Twitter oder Github registrieren. Wähle ggf. die kostenlose Testversion aus.

## Einen neuen Bot erstellen
Nachdem du dich registriert hast, solltest du eine Seite sehen, die so aussieht:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="Startseite eines neuen Kontos auf PandoraBots" width="40%"/></p>

Um einen neuen Bot zu erstellen, benutze die “+”-Schaltfläche neben „My Bots“ im Navigationsbereich. Gib ihm einen Namen und klicke auf „Create Bot“.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="Einen neuen Bot auf PandoraBots erstellen" width="40%"/></p>

## Bot-Bearbeitung
Sobald du einen neuen Bot erstellt hast, erscheint der Name des Bots im Navigationsbereich. Klicke auf **Edit** unter dem Namen deines Bots und wähle dann **Code Editor**, um zum Editor zu navigieren.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="Bearbeiten eines Bots auf PandoraBots" width="40%"/></p>

Im Editor schreibst du AIML-Dateien und Kategorien, die es dir und anderen ermöglichen, mit deinem Bot zu interagieren. 

Verwende das Dateimenü, um eine neue AIML-Datei namens greetings (Begrüßungen) zu erstellen.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="Eine neue Datei auf PandoraBots hinzufügen" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="Eine neue Datei auf PandoraBots hinzufügen" width="40%"/></p>

## Hello World
Kopiere den Code für die folgende Kategorie in den Texteditor zwischen die Start-Tags ```<aiml>``` und die End-Tags ```</aiml>```:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Nachdem du fertig bist, speichere deine Datei über das Dropdown-Menü „File“.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="Eine neue Datei auf PandoraBots speichern" width="40%"/></p>

## Deinen Bot testen
Das Chat-Widget ermöglicht es dir, mit deinem Bot zu sprechen. Klicke auf das "Chatblasen"-Symbol unten rechts, um mit deinem Bot zu sprechen. Gib `Hello` ein, und du solltest die Antwort erhalten, die du gerade codiert hast: `“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="Mit deinem Bot auf PandoraBots chatten" width="40%"/></p>
```