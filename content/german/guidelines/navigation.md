---
title: "Navigation"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 8
---

Hugo verwendet Frontmatter-Metadaten in jeder Markdown-Datei, um zu steuern, wie Seiten in der Seitennavigation erscheinen. Dieser Leitfaden deckt die wichtigsten Einstellungen ab.

## Seitenreihenfolge mit Gewicht

Das Feld `weight` steuert die Reihenfolge der Seiten in der linken Seitenleiste und im Inhaltsverzeichnis. Kleinere Zahlen erscheinen zuerst.

```yaml
---
title: "Aktivität 1: Einstieg"
weight: 3
---
```

**Empfohlene Gewichtsschema:**

| Seitentyp              | Gewicht | Beispiel         |
|------------------------|---------|------------------|
| `_index.md` (Landing Page) | 1       | Workshop-Intro   |
| Setup / Voraussetzungen | 2       | Benötigte Tools  |
| Aktivitäten            | 3, 4, 5... | Aktivität 1, 2, 3 |
| Lösungsschlüssel       | 15+      | In der Navigation versteckt |

Lassen Sie Lücken zwischen den Gewichten der Aktivitäten, falls später Seiten eingefügt werden sollen (z. B. verwenden Sie 3, 5, 7 anstelle von 3, 4, 5).

## Steuerung des Inhaltsverzeichnisses

### Eingeklapptes Inhaltsverzeichnis (bevorzugt)

Workshops sollten mit einer sichtbaren Einführungsgeschichte und einer eingeklappten Aktivitätenliste beginnen:

```yaml
---
title: "Python: Grundlagen"
alwaysopen: false
---
```

Mit `alwaysopen: false` erscheinen die Unterseiten als einklappbarer Baum in der Seitenleiste. Die Teilnehmenden können Sektionen erweitern, während sie fortschreiten.

### Ausgeklapptes Inhaltsverzeichnis

Für sehr kurze Workshops (3 oder weniger Aktivitäten) könnten alle Sektionen sichtbar sein:

```yaml
---
title: "Kurzer Workshop"
alwaysopen: true
---
```

## Seiten ausblenden

### Versteckte Seiten (gebaut, aber nicht in der Navigation)

Verwenden Sie `hidden: true` für Seiten, die existieren sollen, aber nicht in der Seitenleiste erscheinen. Teilnehmende können dennoch über einen direkten Link darauf zugreifen.

```yaml
---
title: "Lösungsschlüssel"
hidden: true
---
```

Häufige Anwendungsfälle: Lösungsschlüssel, Notizen für Trainer, Bonusinhalte.

### Entwurfsseiten (nicht im Produktionsmodus erstellt)

Verwenden Sie `draft: true` für Seiten in Arbeit, die nicht auf der Live-Seite erscheinen sollen:

```yaml
---
title: "Unfertiger Workshop"
draft: true
---
```

Entwurfsseiten erscheinen nur, wenn `hugo server -D` ausgeführt wird (das `-D`-Flag schließt Entwürfe ein).

## Das Children-Shortcode

Um eine Liste von Unterseiten auf einer Landing Page anzuzeigen, verwenden Sie das `children`-Shortcode innerhalb eines einklappbaren Details-Elements:

```html
<details>
<summary>Inhaltsverzeichnis</summary>
{{% children /%}}
</details>
```

Dies rendert ein sauberes, einklappbares Inhaltsverzeichnis, das von den Teilnehmenden bei Bedarf erweitert werden kann. Einige bestehende Workshops verwenden `<details open>` für eine standardmäßig ausgeklappte Ansicht.

## Template für Workshop-Landing Page

Hier ist ein vollständiges Frontmatter-Beispiel für `_index.md`:

```yaml
---
title: "Python: Grundlagen"
description: "Lerne die Grundlagen von Python"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["programmiergrundlagen"]
difficulties: ["anfänger"]
prereq: "Keine"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

## Tipps

- Testen Sie Navigationsänderungen lokal mit `hugo server -D`, bevor Sie etwas einreichen
- Vergewissern Sie sich, dass Lösungsschlüssel als `hidden: true` markiert sind, damit die Teilnehmenden sie nicht sehen können
- Halten Sie die Gewichtsnummern innerhalb eines Workshops konsistent
- Falls Sie Seiten neu ordnen, aktualisieren Sie alle Gewichte, um Lücken oder Überschneidungen zu vermeiden