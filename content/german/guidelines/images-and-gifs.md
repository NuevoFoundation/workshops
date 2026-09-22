---
title: "Bilder und GIFs"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 7
---

Bilder machen Workshops für junge Lernende ansprechender. Befolgen Sie diese Richtlinien, um sicherzustellen, dass Bilder barrierefrei, richtig dimensioniert und plattformübergreifend funktionieren.

## Bildgrößen

Bilder dürfen niemals ohne Breitenbegrenzung belassen werden. Ohne ein `width`-Attribut werden Bilder in ihrer Originalgröße dargestellt, was oft zu groß für den Inhaltsbereich ist.

| Bildtyp | Zielbreite | Beispiel |
|-----------|-------------|---------|
| Vollständige UI-Screenshots (Replit, IDE) | 60% | Replit-Upload-Dialog |
| Code-Ausgabe / Terminal | 70% | dotnetfiddle-Ergebnisse |
| Konzeptdiagramme | 50% | Farbtheorie, Datenstrukturen |
| Fotobeispiele | 40-50% | Python-Pixel-Katzenbilder |
| Kleine Symbole / Abzeichen | 15-25% | Tabellen, kleine Diagramme |
| Dekorative Kunst | 20-30% | Charakterillustrationen |
| Hero-Bilder | 100% | Nur Landing-Page `_index.md` |

**Verwenden Sie Prozentangaben, nicht Pixel.** Prozentuale Breiten sind responsiv und skalieren auf Mobilgeräten und Tablets. Pixel-Breiten können auf kleineren Bildschirmen überlaufen.

```markdown
<!-- Gut: responsiv -->
<img src="../media/screenshot.png" alt="Replit-Code-Editor" width="60%">

<!-- Vermeiden: feste Pixelbreite -->
<img src="../media/screenshot.png" alt="Replit-Code-Editor" width="900px">
```

## Bilder hinzufügen

### Methode 1: Markdown-Syntax

```markdown
![Beschreibung des Bildes](../media/filename.png)
```

### Methode 2: HTML img-Tag (wenn Breitenkontrolle benötigt wird)

```html
<img src="../media/filename.png" alt="Beschreibung des Bildes" width="50%">
```

### Methode 3: Hugo figure Shortcode

```
{{</* figure src="../media/filename.png" alt="Beschreibung" width="50%" */>}}
```

Der `figure` Shortcode umschließt Bilder mit einem `<figure>`-Element. Hinweis: Die meisten bestehenden Workshops verwenden die Markdown- oder HTML-Ansätze oben. Ältere Workshops können `img/` anstelle von `media/` verwenden — beide funktionieren identisch.

## Barrierefreiheit (Alt-Text)

Jedes Bild **muss** einen beschreibenden Alt-Text haben. Dies ist nicht verhandelbar.

| Tun | Nicht tun |
|----|-----------|
| `alt="Replit-Code-Editor zeigt ein Python Hello World-Programm"` | `alt="Screenshot"` |
| `alt="RGB-Farbdiagramm mit roten, grünen und blauen überlappenden Kreisen"` | `alt="Bild"` |
| `alt=""` (für rein dekorative Bilder wie Trennlinien) | `alt="Bild kann nicht geladen werden"` |

Für übersetzte Workshops muss der Alt-Text in der Sprache der Seite sein:
- Englisch: `alt="A friendly chatbot welcoming users"`
- Portugiesisch: `alt="Um chatbot amigavel dando boas-vindas aos usuarios"`
- Koreanisch: `alt="사용자를 환영하는 친근한 챗봇"`

## Dateinamen

- Verwenden Sie **kleine Buchstaben** für Dateierweiterungen: `.png`, `.jpg`, `.gif` (nicht `.PNG`, `.JPG`)
- Verwenden Sie **beschreibende Namen**: `replit-upload-dialog.png` (nicht `img1.png`)
- Verwenden Sie **Bindestriche** zur Worttrennung: `color-theory-diagram.png` (nicht `color_theory_diagram.png`)
- Halten Sie Namen kurz aber aussagekräftig

## Speicherort der Bilder

Neue Workshops sollten ein `media/` Verzeichnis verwenden (das Scaffold-Skript erzeugt dies automatisch). Einige ältere Workshops verwenden stattdessen `img/` — beide funktionieren in Hugo gleichermaßen.

```
content/english/my-workshop/
  _index.md
  activity-1.md
  media/             <-- Bilder hier
    screenshot.png
    diagram.png
```

Verweisen Sie auf Bilder mit relativen Pfaden von der Seite aus. In `_index.md` verwenden Sie `media/image.png`. In Aktivitätsseiten und Antwortschlüsseln verwenden Sie `../media/image.png` (diese werden in Hugo eine Ebene tiefer dargestellt).

{{% notice warning %}}
Hugo löst relative Pfade anhand der **Seiten-URL**, nicht des Speicherortpfads. Für untergeordnete Seiten unter `/workshop/section/activity/` löst der Pfad `../media/file.png` zu `/workshop/media/file.png` auf. Dies ist die korrekte Vorgehensweise. Bitte "korrigieren" Sie diese `../`-Pfade nicht — sie sind absichtlich so angelegt.
{{% /notice %}}

## GIFs

GIFs eignen sich hervorragend, um kurze Interaktionen zu zeigen (Schaltflächenklicks, Elemente ziehen). Beachten Sie dabei:

- **Kurz**: 5-15 Sekunden maximal
- **Klein**: Wenn möglich unter 2 MB (große GIFs verlangsamen die Seitenladezeit)
- **Klar**: Verwenden Sie eine angemessene Bildrate. Bildschirmaufnahmen mit 10-15 fps sind gut geeignet.
- **Barrierefrei**: Fügen Sie einen Alt-Text hinzu, der beschreibt, was im GIF gezeigt wird

Erwägen Sie, stattdessen ein statisches Bild mit einer Beschriftung zu verwenden, wenn die Animation nicht entscheidend für das Verständnis ist.

## Screenshots

Beim Aufnehmen von Screenshots für Workshops:

1. **Schneiden Sie dicht am relevanten Bereich**
2. **Verwenden Sie eine saubere Umgebung** (keine persönlichen Lesezeichen, Benachrichtigungen usw.)
3. **Konsistente Größen** innerhalb eines Workshops (verwenden Sie nicht 1080p und 4K-Screenshots gemischt)
4. **Markieren Sie den relevanten Bereich**, wenn der Screenshot viel Benutzeroberfläche enthält