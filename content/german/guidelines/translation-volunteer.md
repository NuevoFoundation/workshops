---
title: "Leitfaden für Übersetzungsfreiwillige"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 6
---

Vielen Dank, dass Sie dazu beitragen, Workshops für mehr Kinder weltweit zugänglich zu machen! Dieser Leitfaden erklärt, wie Sie einen bestehenden Workshop in eine neue Sprache übersetzen können.

## Bevor Sie anfangen

1. Überprüfen Sie, ob der Workshop bereits in Ihrer Zielsprache existiert. Durchsuchen Sie das `content/`-Verzeichnis nach Sprachordnern:

| Ordner | Sprache |
|--------|---------|
| `content/english/` | Englisch |
| `content/espanol/` | Spanisch |
| `content/brazilian-portuguese/` | Brasilianisches Portugiesisch |
| `content/korean/` | Koreanisch |
| `content/francais/` | Französisch |
| `content/german/` | Deutsch |
| `content/simplified-chinese/` | Vereinfachtes Chinesisch |
| `content/traditional-chinese/` | Traditionelles Chinesisch |
| `content/kyrgyz/` | Kirgisisch |

2. Öffnen Sie ein [Translation Request Issue](https://github.com/NuevoFoundation/workshops/issues/new) auf GitHub, damit andere wissen, woran Sie arbeiten.

## Wie Übersetzungen funktionieren

Jede Sprache hat ihr eigenes Verzeichnis unter `content/`. Die Ordnerstruktur innerhalb jeder Sprache spiegelt die englische Version wider:

```
content/
  english/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
  espanol/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
```

## Schritt für Schritt

### 1. Kopieren Sie den englischen Workshop

Kopieren Sie den gesamten englischen Workshop-Ordner in Ihr Zielsprachen-Verzeichnis:

```bash
cp -r content/english/python-basics content/espanol/python-basics
```

### 2. Übersetzen Sie den Inhalt

Für jede `.md`-Datei:

- **Übersetzen** Sie alle sichtbaren Texte (Titel, Absätze, Anweisungen, Hinweise)
- **Behalten** Sie alle Hugo-Frontmatter-Schlüssel auf Englisch (`title`, `date`, `draft`, `weight`, etc.)
- **Übersetzen** Sie die Frontmatter-Werte (`title: "Python: Grundlegende Konzepte"`)
- **Behalten** Sie alle Codebeispiele auf Englisch (Code ist universell)
- **Übersetzen** Sie Kommentare im Code, falls vorhanden
- **Unverändert lassen** Sie alle Dateipfade, Bildreferenzen und Hugo-Shortcodes
- **Übersetzen** Sie den Alt-Text von Bildern in die Zielsprache

### 3. Bilder bearbeiten

- **Geteilte Bilder** (Screenshots von Code, Diagramme): Kopieren Sie den englischen `img/`- oder `media/`-Ordner in Ihre Übersetzung. Bilddateien sind sprachunabhängig.
- **Textlastige Bilder** (Bilder mit englischem Text): Erstellen Sie nach Möglichkeit lokalisierte Versionen. Falls nicht, behalten Sie die englische Version und vermerken Sie dies in Ihrem PR.
- **Alt-Text**: Übersetzen Sie den Alt-Text immer in die Zielsprache. Screenreader verwenden die Spracheinstellung der Seite.

### 4. Lokal testen

```bash
hugo server -D
```

Navigieren Sie zu Ihrem übersetzten Workshop und überprüfen Sie:
- Alle Seiten laden fehlerfrei
- Bilder werden korrekt angezeigt
- Navigation funktioniert (TOC, Weiter/Zurück)
- Codebeispiele sind intakt

### 5. Ihren PR einreichen

- Titel: `Translation: [workshop-name] to [language]`
- Beschreibung: Listen Sie alle übersetzten Dateien auf und erwähnen Sie Bilder, die noch englischen Text enthalten
- Stellen Sie sicher, dass Sie den **gesamten Workshop**, nicht nur die Startseite, übersetzen

## Tipps

- Arbeiten Sie den Workshop durch, wie es ein Schüler tun würde. Wenn etwas in der Übersetzung nicht verständlich ist, formulieren Sie es um.
- Halten Sie Sätze kurz und klar. Diese Workshops richten sich an Kinder im Alter von 8 bis 18 Jahren.
- Bei Unsicherheiten zu einem Fachbegriff behalten Sie den englischen Begriff und fügen eine kurze Erklärung in der Zielsprache hinzu.
- Übersetzen Sie die Workshop-Namen in URLs oder Ordnernamen nicht – diese müssen für das Hugo-Routing auf Englisch bleiben.

## Sprachspezifische Hinweise

### Spanisch

- Verwenden Sie **tú**-Verbkonjugationen für eine breite lateinamerikanische Verständlichkeit (nicht voseo)
- Übersetzen Sie Code-Kommentare, aber behalten Sie Variablen- und Funktionsnamen auf Englisch
- Fachbegriffe wie "string", "loop", "function" können auf Englisch bleiben und bei ihrer ersten Erwähnung kurz auf Spanisch erklärt werden