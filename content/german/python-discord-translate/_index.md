---
title: "Discord: Aufbau eines Übersetzer-Bots"
description: "Lerne fortgeschrittene Python-Konzepte wie Bibliotheken und APIs mit Discord-Integration"
date: 2025-09-15T10:11:00-07:00
prereq: "Python-Grundlagen"
difficulties: ["mittelstufe"]
language: "python"
topics: ["programmier-grundlagen"]
icon: "fab fa-python"
draft: false
---

## Überblick
Willkommen zum Kurs **Python: Aufbau eines Discord-Übersetzer-Bots**!

{{< alert theme="info" >}}
<img src="media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi sagt:</strong> Bereit, etwas Großartiges zu programmieren? Wir werden einen Bot bauen, der Sprachbarrieren überwindet – wie ein superintelligenter Freund, der Nachrichten sofort übersetzt. Machen wir das Internet freundlicher, eine Übersetzung nach der anderen.
{{< /alert >}}

![Nuvi](media/NF_mascot.jpg)
Nuvi hat gerade einen neuen Discord-Server erstellt, damit all seine Freunde aus der ganzen Welt gemeinsam abhängen, Ideen austauschen und kreative Projekte planen können. Es gibt nur ein Problem: Nicht alle sprechen dieselbe Sprache. Einige Freunde schreiben auf Englisch, andere auf Spanisch, wieder andere auf Portugiesisch, Koreanisch oder Chinesisch. Gespräche werden unterbrochen, einige Leute fühlen sich ausgeschlossen, und Nuvi möchte, dass sich alle einbezogen fühlen.

Also hat Nuvi eine Idee: einen **Übersetzer-Bot** bauen, der direkt auf dem Discord-Server lebt. Du wirst mit einfachen Slash-Befehlen beginnen und den Bot dann dahingehend verbessern, dass Benutzer ihre bevorzugte Sprache (Englisch oder Spanisch) registrieren und automatisch private (DM) Übersetzungen erhalten, wann immer jemand in der anderen Sprache schreibt. Um das zu ermöglichen, wird Nuvi (und Du!) lernen, wie man:

{{< alert theme="warning" >}}
<img src="media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Achtung:</strong> Keine Sorge, wenn einige dieser Begriffe neu für Dich sind. Wir werden alles Schritt für Schritt erklären. Am Ende wirst Du sehen, wie sich die Teile wie ein Puzzle zusammenfügen.
{{< /alert >}}

- Python-Code mit Discord verbinden, indem ein Bot-Benutzer erstellt wird
- Nachrichten sicher empfangen (mit den richtigen Intents)
- Einen lokalen Übersetzungsdienst (LibreTranslate) einrichten
- Analysieren, ob eine Nachricht auf Englisch oder Spanisch ist
- Nachrichten automatisch für registrierte Benutzer übersetzen
- Übersetzungen privat senden, damit der Kanal übersichtlich bleibt
- Immer noch einen manuellen `/translate` Befehl als Rückfallmöglichkeit anbieten

Am Ende wirst Du einen funktionierenden Bot haben, der Menschen mit unterschiedlichen Sprachen hilft, miteinander zu kommunizieren. Du schreibst nicht nur Code – Du baust eine Brücke zwischen Freunden.

### Fahrplan
1. Einrichtung: Voraussetzungen & Discord-Grundlagen
2. Den Bot erstellen: Registrierung + minimaler Slash-Befehl
3. Lokale Übersetzung betreiben: LibreTranslate starten + Tests durchführen
4. Alles zusammenfügen: Erkennen, Übersetzen, Sprachpräferenzen registrieren
5. Erweiterungsziele: Persistenz (Benutzersprachen speichern), weitere Befehle

### Glossar
- **Endpoint:** Eine spezifische URL auf einem Server, die eine Aufgabe ausführt (z. B. `/translate`).
- **Intent:** Eine Berechtigungsflagge, die Discord mitteilt, welche Ereignisse Dein Bot empfangen darf.
- **Slash-Befehl:** Ein strukturierter Befehl, der mit `/` beginnt und von Discord validiert und automatisch vervollständigt wird.
- **Übersetzungsserver:** Der lokale LibreTranslate-Prozess, der Texte erkennt und übersetzt.
- **Persistenz (Erweiterung):** Speichern der Sprachpräferenzen der Benutzer, damit diese nach einem Neustart erhalten bleiben.

Bereit, Nuvi zu helfen? Lass uns Schritt für Schritt loslegen.