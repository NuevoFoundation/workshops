---
title: "Erstellen eines neuen Workshops"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 2
---

Diese Anleitung führt Sie durch den Prozess, einen neuen Workshop von der Idee bis zur Pull-Request zu erstellen. Bevor Sie beginnen, schließen Sie die Einrichtung unter [Erste Schritte](../getting-started/) (Git, Hugo, Fork) ab und lesen Sie die Übersicht zur [Site-Architektur](../site-architecture/).

## Unsere Philosophie

Workshops der Nuevo Foundation sollten sich wie **geführte Abenteuer** anfühlen, nicht wie Lehrbücher. Jeder Workshop erzählt eine Geschichte, die die Schüler*innen in ihrem eigenen Tempo verfolgen können. Die besten Workshops sind:

- **Handlungsgetrieben**: Schüler*innen folgen einer Figur auf einer Mission (Benji, der Hund, benötigt eine Website; Alex, die Biene, benötigt eine Bienenwabe; DJ Nuvi benötigt ein Hit-Mixtape)
- **Personalisierbar**: Schüler*innen können das Thema einfach an ihre Interessen anpassen (z. B. ihr Haustier statt Benji, ihr Land statt Costa Rica)
- **Selbstgesteuert**: Klar und verständlich genug, dass Schüler*innen selbstständig arbeiten können, auch wenn der/die Lehrer*in nicht zur Verfügung steht
- **Progressiv**: Die Aktivitäten bauen nach und nach aufeinander auf, ein Konzept nach dem anderen
- **Spaßig**: Ermutigender Ton, Maskottchen-Charaktere, visuelle Belohnungen und ein feierlicher Abschluss am Ende

## Lernen von unseren besten Workshops

Studieren Sie diese erstklassigen Workshops, bevor Sie Ihren eigenen erstellen:

### Web-Grundlagen (HTML/CSS) — [content/english/web-basics/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/web-basics)

- **Thema**: Helfen Sie Benji, dem Hund (vertrieben durch Hurrikan Harvey), ein neues Zuhause zu finden, indem Sie eine Website für ihn erstellen.
- **Warum es funktioniert**: emotionale Bindung, YouTube-Video auf jeder Seite, CodePen-Einbettungen für sofortiges Codieren, Aktivität 5 ermöglicht es Schüler*innen, ihre eigene Seite zu erstellen, und kann auf GitHub Pages veröffentlicht werden
- **Schlüsselstruktur**: Erzählung → Konzept → Video → Referenztabelle → Praktische Übung

### Python Turtle — [content/english/python-turtle/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-turtle)

- **Thema**: Helfen Sie Alex, der Biene, eine Wabe mit Python-Zeichnungen zu erstellen.
- **Warum es funktioniert**: 11 YouTube-Videos, Embedded-Codebunga-IDE, visuelle Ergebnisse (Schüler*innen SEHEN, wie ihr Code Formen zeichnet), progressive Komplexität (Linie → Quadrat → Sechseck → Wabe → Mandala-Blume)
- **Schlüsselstruktur**: Beschreibung der Geschichte → Video → Code-Beispiel → Interaktive Codebunga → Herausforderung

### EarSketch (Python und JS-Blöcke) — [content/english/python-earsketch/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-earsketch)

- **Thema**: Helfen Sie DJ Nuvi, ein Hit-Mixtape mit Code zu produzieren.
- **Warum es funktioniert**: Schüler*innen HÖREN ihren Code (Musik!), unmittelbares akustisches Feedback, professionelles Tool (Georgia Tech), kreative Freiheit bei der Soundauswahl
- **Schlüsselstruktur**: Musikkonzept → Code-Konzept → Erstellen → Hören → Verbessern

## Erstellen eines Workshops mit Copilot

Dieses Repository enthält die `workshop-builder`-Fähigkeit für GitHub Copilot CLI.  
Die Fähigkeit liest diese Leitlinien, studiert einen relevanten vorhandenen Workshop, verwendet das Vorlagen-Skript, schreibt den Inhalt und führt die Veröffentlichungsprüfungen durch.

Starten Sie die Copilot CLI vom Stammverzeichnis des Repositorys aus:

```bash
copilot
```

Falls die Fähigkeit hinzugefügt wurde, während Copilot bereits lief, laden Sie die Projekt-Fähigkeiten erneut:

```text
/skills reload
```

Überprüfen Sie, ob Copilot sie erkannt hat:

```text
/skills info workshop-builder
```

Fügen Sie dann den Namen der Fähigkeit und die Workshop-Beschreibung in die Eingabeaufforderung ein:

```text
Use the /workshop-builder skill to create a 45-minute beginner Python
workshop for ages 10–13. It should run in the browser and teach variables,
input, and if statements through a robot rescue story.
```

Die Fähigkeit verwendet einen Standardfragebogen, um Informationen wie den Titel, die Zielgruppe, die Dauer, die bisherigen Programmierkenntnisse, die Lernziele, die Programmiersprache, das Lieferformat (Präsenz- oder Onlinekurs), die Anzahl der Aktivitäten, die Geschichte und besondere Anforderungen zu erfassen. Fehlende Informationen werden gesammelt, bevor die Dateien erstellt werden. Falls die gewünschte Anzahl an Aktivitäten die verfügbare Zeit überschreiten könnte, warnt die Fähigkeit bezüglich der Schätzung, hält sich jedoch an die Wunschanzahl des Nutzers.

Copilot kann die Fähigkeit auch automatisch auswählen, wenn die Anfrage klar danach fragt, einen Workshop der Nuevo Foundation zu erstellen, zu überarbeiten oder zu überprüfen.

## Schritt 1: Gerüst für Ihren Workshop erstellen

Nutzen Sie das Scaffold-Skript, um die richtige Verzeichnisstruktur und Vorlagendateien zu generieren. Erstellen Sie Workshop-Dateien nicht manuell — das Scaffold stellt sicher, dass Hugo-Frontmatter, Dateinamen und Verzeichnislayout korrekt sind.

**Voraussetzung:** Python 3.7 oder neuer. Überprüfen Sie dies mit `python --version` (oder `python3 --version` auf macOS/Linux).

Führen Sie dies in der Wurzel des `workshops`-Repositorys aus:

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" \
  --coding-language python --topics programming-basics
```

Verwenden Sie `--dry-run`, um zu sehen, was erstellt würde, ohne Dateien zu schreiben:

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" \
  --coding-language python --topics programming-basics --dry-run
```

Dies generiert die Standard-Grundstruktur:

```
content/english/my-workshop/
├── _index.md          ← Landing-Seite (Einführung, Voraussetzungen, Inhaltsverzeichnis)
├── activity-1.md      ← Erste Aktivität
├── activity-2.md      ← Zweite Aktivität
├── activity-3.md      ← Dritte Aktivität
├── answer-key.md      ← Lösungsschlüssel (aus Navigation ausgeblendet)
└── media/
    └── .gitkeep       ← Ordner für Screenshots und Bilder
```

### Optionen für Gerüst