---
title: "Alles Zusammenfügen"
draft: false
weight: 4
---

Dein Bot ist online und LibreTranslate funktioniert. Jetzt kombinieren wir beides, damit Nuvis Freunde in verschiedenen Sprachen chatten können!

## Was Du Erstellen Wirst

Dein Bot wird ein **Übersetzungshilfe**-Bot, der:
- Ermittelt, in welcher Sprache die Leute schreiben
- Nachrichten automatisch für jene übersetzt, die es brauchen
- Übersetzungen privat verschickt (damit der Chat nicht unübersichtlich wird)
- Einen Backup-Befehl `/translate` hat, für den Fall der Fälle

{{< alert theme="info" >}}
<img src="../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi sagt:</strong> Keine Sorge, wenn das viel erscheint! Wir haben es in kleinere, leicht verständliche Abschnitte unterteilt.
{{< /alert >}}

## Bevor Du Startest

Stelle sicher, dass du:
- LibreTranslate laufen hast (mit Englisch & Spanisch)
- Deinen Bot online hast (der Befehl `/hello` funktioniert)
- Das `requests`-Paket installiert hast
- Den Message Content in Discord aktiviert hast (damit dein Bot Nachrichten lesen kann)

## Was Du Am Ende Hast

Dein Bot wird diese Befehle haben:
- `/register_language` - Für Übersetzungen anmelden
- `/my_language` - Eigene Einstellungen überprüfen
- `/stop_translation` - Übersetzungen stoppen
- `/translate` - Etwas manuell übersetzen

## Teste Deinen Bot

Nachdem alles erstellt ist:

1. **Freunde anmelden**: Lasse Freunde verschiedene Sprachen auswählen
2. **Nachrichten senden**: Sieh, wie Übersetzungen in DMs erscheinen
3. **Manuellen Modus ausprobieren**: Teste `/translate` mit beliebigen Sätzen
4. **Abmelden**: Stelle sicher, dass `/stop_translation` funktioniert

## Brauchst Du Hilfe?

| Problem | Wo Du Nachsehen Sollst |
|---------|-------------------------|
| Sprache kann nicht erkannt werden | [Funktion zur Spracherkennung](detect-language-function/) |
| Übersetzung funktioniert nicht | [Funktion zur Textübersetzung](translate-text-function/) |
| Anmeldung funktioniert nicht | [Registrierungsbefehle](registration-commands/) |
| Keine automatischen Übersetzungen | [Nachrichtenverarbeitung](message-handling-and-translate/) |
| Kompletter Code | [Kompletter Bot Code](full-code/) |

---
