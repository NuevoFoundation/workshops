---
title: "Aktivität 2: Einrichtung von PandoraBots"
draft: false
weight: 5
---

## AIML
Wir werden AIML verwenden, um unseren Chatbot zu erstellen. AIML steht für **Artificial Intelligence Markup Language**. Falls Sie jemals mit HTML eine Website erstellt haben, werden Sie feststellen, dass AIML sehr ähnlich aussieht. Bevor wir AIML schreiben können, müssen wir ein Konto bei PandoraBots erstellen.
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## Pandorabots
Gehen Sie zu [https://www.pandorabots.com/](https://www.pandorabots.com/) und klicken Sie auf **Sign Up**. Geben Sie eine E-Mail-Adresse und ein Passwort ein, um ein Konto zu erstellen. Alternativ können Sie sich mit einem Konto von Google, Facebook, Twitter oder Github registrieren. Falls Sie dazu aufgefordert werden, wählen Sie die Option für die kostenlose Testversion.

## Einen neuen Bot erstellen
Nachdem Sie sich registriert haben, sollten Sie eine Seite sehen, die so aussieht:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="neue Konto-Landing-Page auf pandorabots" width="40%"/></p>

Um einen neuen Bot zu erstellen, nutzen Sie die Schaltfläche „+“ neben My Bots im Navigationsbereich. Geben Sie ihm einen Namen und klicken Sie auf „Create Bot“.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="Erstellen eines neuen Bots auf pandorabots" width="40%"/></p>

## Bot bearbeiten
Nachdem Sie einen neuen Bot erstellt haben, erscheint der Name des Bots im Navigationsbereich. Klicken Sie auf **Edit** unter dem Namen Ihres Bots und wählen Sie dann **Code Editor**, um zum Editor zu gelangen.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="Bearbeiten eines Bots auf pandorabots" width="40%"/></p>

Der Editor ist der Ort, an dem Sie AIML-Dateien und Kategorien schreiben, damit Sie und andere mit Ihrem Bot kommunizieren können.

Nutzen Sie das Dateimenü, um eine neue AIML-Datei namens greetings zu erstellen.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="Hinzufügen einer neuen Datei auf pandorabots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="Hinzufügen einer neuen Datei auf pandorabots" width="40%"/></p>

## Hallo Welt

Kopieren Sie den Code für die folgende Kategorie in den Texteditor zwischen die Start-Tags ```<aiml>``` und die End-Tags ```</aiml>```:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Speichern Sie nach Abschluss die Datei über das „File“-Dropdown-Menü.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="Hinzufügen einer neuen Datei auf pandorabots" width="40%"/></p>

## Testen Ihres Bots
Das Chat-Widget ermöglicht es Ihnen, mit Ihrem Bot zu kommunizieren. Klicken Sie auf das Symbol mit den "Chatblasen" in der unteren rechten Ecke, um mit Ihrem Bot zu sprechen. Geben Sie `Hello` ein, und Sie sollten die Antwort erhalten, die Sie gerade programmiert haben, `“Hello, world!”`.

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="Hinzufügen einer neuen Datei auf pandorabots" width="40%"/></p>