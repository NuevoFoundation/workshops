---
title: "Code und Interaktivität"
date: 2026-09-14T00:00:00-07:00
draft: false
weight: 9
---

Workshops sind interaktiv. Die Teilnehmenden sollten in der Lage sein, Code auszuführen, Ergebnisse zu sehen und zu experimentieren. Diese Anleitung beschreibt, wie man Code-Editoren und interaktive Elemente einbettet.

## Inline-Codeblöcke

Für Code-Beispiele, die von den Teilnehmenden gelesen, aber nicht direkt ausgeführt werden, verwenden Sie klassische Markdown-umrahmte Codeblöcke mit Sprachhinweisen:

````markdown
```python
print("Hallo, Welt!")
```
````

Unterstützte Sprachen sind unter anderem `python`, `html`, `css`, `javascript`, `csharp`, `java`, `sql`, `bash` und viele mehr.

## Eingebettete Code-Editoren

Für Aktivitäten, bei denen Teilnehmende Code schreiben und ausführen, können Sie einen interaktiven Editor einbetten. Hier sind die Plattformen, die wir verwenden:

### Replit

Am besten geeignet für Python, JavaScript und allgemeine Programmierung. Verwenden Sie die Domain `replit.com` für neue Einbettungen (ältere Workshops könnten noch `repl.it` verwenden, das weiterhin umleitet).

```html
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/python-basics" target="_blank">Replit starten</a>
```

Oder direkt einbetten:

```html
<iframe height="600" width="100%" src="https://replit.com/@nuevofoundation/python-basics" title="Code und Interaktivität - Replit Editor" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
```

Hinweis: Ältere Workshops enthalten `?lite=true` in den Replit-URLs. Dieser Parameter ist nicht mehr aktiv und kann in neuen Einbettungen weggelassen werden.

### Codebunga

Fügen Sie keine neuen Trinket-Links oder Einbettungen hinzu. Bestehende Trinket-Integrationen bleiben vorübergehend im Repository und sind als `TODO-IDE-Replace` gekennzeichnet, bis eine Migration zu unterstützten Browser-IDEs abgeschlossen ist.

Legacy-Beispiel:

```html
<iframe src="https://codebunga.com/embed/7s5rkuud" title="Code und Interaktivität - Codebunga Editor" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```

### .NET Fiddle

Am besten geeignet für C#-Programme.

```html
<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/abc123" title="Code und Interaktivität - .NET Fiddle Editor" frameborder="0"></iframe>
```

### CodePen

Am besten geeignet für HTML/CSS/JavaScript-Webprojekte. In diesem Repository wird CodePen typischerweise als Link-Schaltfläche und nicht als Inline-Einbettung verwendet:

```html
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">Probier es aus!</a>
```

## Interaktive HTML-Elemente

Für benutzerdefinierte Interaktivität (Quiz, Drag-and-Drop, Buttons) können Sie rohes HTML direkt in Markdown verwenden (Hugos `unsafe` Rendering ist für diese Seite aktiviert). Alternativ können Sie das `rawhtml` Shortcode verwenden:

```
{{</* rawhtml */>}}
<button onclick="alert('Richtig!')">Klicke mich</button>
{{</* /rawhtml */>}}
```

Damit können beliebiges HTML, CSS und JavaScript in einer Workshop-Seite genutzt werden.

## Struktur von Herausforderungen

Eine gute Aktivität folgt diesem Muster:

1. **Erklären** Sie kurz das Konzept
2. **Zeigen** Sie ein Beispiel mit einem Codeblock
3. **Fordern** Sie die Lernenden auf, ihren eigenen Code zu schreiben
4. **Hinweis** mit einem Notice-Shortcode:

```
{{% notice tip %}}
Denken Sie daran, Klammern zu verwenden, wenn Sie eine Funktion aufrufen!
{{% /notice %}}
```

## Tipps

- Stellen Sie immer einen **funktionierenden Ausgangspunkt** bereit, damit die Lernenden keinen leeren Editor vor sich haben
- Testen Sie alle eingebetteten Links vor dem Einreichen.
- Setzen Sie `height="600"` als Ausgangspunkt für eingebettete Editoren und passen Sie es nach Bedarf an
- Fügen Sie einen funktionierenden Fallback-Link unterhalb der iframes hinzu, falls das Einbetten blockiert wird, wie z. B.: "Editor nicht sichtbar? Öffnen Sie ihn in einem neuen Tab."
- Halten Sie Code-Beispiele kurz und fokussiert. Falls ein Beispiel mehr als 20 Zeilen hat, sollten Sie in Betracht ziehen, es in Schritte zu unterteilen.

## Siehe auch

- [Formatierung](../formatting) — Visuelle Shortcodes (Hinweise, Buttons, Notices, Erweiterungen)
- [Tags und Metadaten](../tags-and-metadata) — Frontmatter-Felder für alle Seitentypen