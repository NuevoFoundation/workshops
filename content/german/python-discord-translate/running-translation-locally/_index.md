---
title: "Übersetzung auf deinem Computer ausführen"
draft: false
weight: 3
---

Der Bot von Nuvi kann zwar antworten, aber er kann Freunden noch nicht helfen, einander zu verstehen. In diesem Abschnitt installierst du ein Programm, das Übersetzungen *lokal* auf deinem Computer ausführen kann – ohne dass externe Konten benötigt werden – damit der Bot zu der mehrsprachigen Brücke werden kann, die sich Nuvi vorgestellt hat.

Du wirst es verwenden für:
- Manuelle Tests des `/translate`-Befehls
- Erkennung, ob eine Nachricht auf Englisch oder Spanisch ist (Endpoint `/detect`)
- Automatische Übersetzung von Nachrichten für registrierte Benutzer (Endpoint `/translate`)

Lass uns die Übersetzungs-Engine einrichten, damit der Bot sie nutzen kann.

---

## 1. Was ist LibreTranslate?
LibreTranslate ist ein kostenloses, quelloffenes Übersetzungsprogramm (von der Community entwickelt), das du lokal ausführen kannst. Kein Konto. Kein Cloud-Abonnement. Du gibst Text in einer Sprache ein, und es gibt ihn in einer anderen Sprache zurück.

Warum es für diesen Workshop hilfreich ist:
- Datenschutz: Dein Text bleibt auf deinem Rechner.
- Kontrolle: Du wählst die Sprachen und entscheidest, wann du aktualisieren möchtest.
- Offline-Nutzung: Nachdem die Sprachdaten heruntergeladen wurden, kann es ohne Internetverbindung arbeiten.
- Open Source: Du kannst sehen, wie es funktioniert, oder sogar selbst etwas beitragen.

Stell es dir wie eine kleine lokale Website mit einer **API** vor, die dein Bot für zwei Dinge aufrufen wird:
1. Erkennung der Sprache einer Nachricht (`/detect`)
2. Übersetzung der Nachricht in eine andere Sprache (`/translate`)

Dies ist die Grundlage für das automatische Übersetzungsfeature.

### Was ist eine API?
Eine API ist wie eine Speisekarte für ein Programm. Sie listet die „Endpunkte“ (URLs) auf, die du aufrufen kannst, und was du zurückbekommst. Wenn du die Seite `http://127.0.0.1:5000/translate` mit den richtigen Daten besuchst, antwortet die API von LibreTranslate mit dem übersetzten Text. Dein Bot wird eine **Anfrage senden** (dein Text + Sprachwahl) und eine **Antwort erhalten** (den übersetzten Text) – genau wie beim Bestellen von Essen und dem Erhalt der Mahlzeit.

---



<details open>
<summary>Themen</summary>
{{% children /%}}
</details>