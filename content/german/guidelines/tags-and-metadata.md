---
title: "Tags und Metadaten"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 10
---

Jede Workshop-Seite verwendet YAML-Frontmatter, um zu steuern, wie sie auf der Website angezeigt wird. Dieser Leitfaden erklärt jedes Feld und dessen Verwendung.

## Erforderliches Frontmatter

Jede Markdown-Datei benötigt mindestens:

```yaml
---
title: "Seitentitel"
date: 2026-09-16T00:00:00-07:00
draft: false
---
```

| Feld | Zweck | Beispiel |
|-------|---------|---------|
| `title` | Titelanzeige in der Navigation und im Seitenkopf | `"Python: Grundlagen"` |
| `date` | Datum der letzten Aktualisierung (auf der Website angezeigt) | `2026-09-16T00:00:00-07:00` |
| `draft` | `false` für veröffentlicht, `true` für in Bearbeitung | `false` |

## Felder für die Workshop-Startseite

Die `_index.md`-Datei eines Workshops unterstützt zusätzliche Felder:

```yaml
---
title: "Python: Grundlagen"
description: "Lerne die Grundlagen von Python, einschließlich Variablen, Schleifen und Funktionen"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["programmierungsgrundlagen"]
difficulties: ["anfänger"]
prereq: "Keine"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

| Feld | Zweck | Werte |
|-------|---------|--------|
| `description` | Kurze Zusammenfassung, die in Listen angezeigt wird | Freitext |
| `language` | Filter für Programmiersprachen | Ein Token aus `data/taxonomy.yaml` |
| `topics` | Themenfilter | Ein oder mehrere Tokens aus `data/taxonomy.yaml` |
| `difficulties` | Schwierigkeitsfilter | Ein oder mehrere Tokens aus `data/taxonomy.yaml` |
| `prereq` | Voraussetzungen | `"Keine"` oder Workshop-Name |
| `hidden` | Ausblenden aus der Navigation | `true` / `false` |
| `alwaysopen` | TOC-Erweiterungs-Verhalten | `false` (bevorzugt) |
| `icon` | Font Awesome Icon für die Startseite | Siehe Icons unten |
| `weight` | Sortierreihenfolge in der Navigation | Zahl (kleiner = zuerst) |

Die Felder `language`, `topics` und `difficulties` bestimmen, wie ein Workshop auf der Registerkarte „Workshops“ in den Filtern angezeigt wird. Verwende nur die kontrollierten Werte in `data/taxonomy.yaml`. Unbekannte Werte erstellen keine neuen Filteroptionen.

Beispiel:

```yaml
language: "javascript"
topics: ["spiele", "web"]
difficulties: ["anfänger"]
```

## Häufige Icons

Die Startseite zeigt ein Icon für jeden Workshop an. Verwende [Font Awesome](https://fontawesome.com/icons)-Klassen im `icon`-Feld des Frontmatters:

| Klasse | Geeignet für |
|-------|----------|
| `fab fa-python` | Python-Workshops |
| `fab fa-html5` | HTML/Web-Workshops |
| `fab fa-js` | JavaScript-Workshops |
| `fas fa-laptop-code` | Allgemeines Coding |
| `fas fa-microchip` | Hardware / Arduino |
| `fas fa-shield-alt` | Sicherheits-Workshops |
| `fas fa-database` | SQL / Daten-Workshops |
| `fas fa-code` | Allgemein (Standard) |
| `fas fa-gamepad` | Spiele-Workshops |
| `fas fa-music` | Musik / Audio |

## Felder für Aktivitätsseiten

Aktivitätsseiten sind einfacher:

```yaml
---
title: "Aktivität 1: Hello World"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 3
---
```

## Felder für Lösungsschlüssel

Lösungsschlüssel sollten in der Navigation versteckt sein:

```yaml
---
title: "Python: Grundlagen - Lösungsschlüssel"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 15
hidden: true
---
```

## Das Datumsfeld

Das `date`-Feld wird in der Fußzeile jeder Seite auf der Website angezeigt. Aktualisiere es, wann immer du wesentliche Änderungen an einer Seite vornimmst, damit die Besucher wissen, dass der Inhalt aktuell ist.

Format: `YYYY-MM-DDTHH:MM:SS-07:00` (ISO 8601 mit Zeitzone) oder `YYYY-MM-DD` (nur Datum).

## YAML-Tipps

- Lege Zeichenfolgenwerte immer in doppelte Anführungszeichen, wenn sie Doppelpunkte enthalten: `title: "Python: Grundlagen"`
- Boolesche Werte benötigen keine Anführungszeichen: `draft: false`
- Verwende keine Tabs — YAML erfordert Leerzeichen für Einrückungen
- Frontmatter muss sich zwischen `---`-Begrenzern ganz oben in der Datei befinden.