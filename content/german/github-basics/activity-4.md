---
title: "Raum 4: Das Merge-Labyrinth"
description: "Navigieren Sie durch die Herausforderungen von Code-Review und Merging."
difficulties: ["mittel"]
weight: 4
---

Sie befinden sich in einem Raum mit einem komplexen Labyrinth auf dem Boden. Wege kreuzen und verzweigen sich, was die gelegentlichen Herausforderungen beim Zusammenführen von Code von Ihrer lokalen Kopie zur remote gehosteten Version darstellt.

## Ihre Mission

1. Überprüfen Sie Kommentare zu Ihrem Pull-Request.
2. Nehmen Sie notwendige Änderungen vor und aktualisieren Sie Ihren Pull-Request.
3. Nach der Freigabe führen Sie den Pull-Request zusammen.

## Anweisungen

1. Überprüfen Sie Ihren Pull-Request auf Kommentare zur Überprüfung.
2. Falls Änderungen verlangt werden:
   - Nehmen Sie die Änderungen lokal vor
   - Committen Sie die Änderungen
   - Pushen Sie sie zu Ihrem Fork
3. Der Pull-Request wird automatisch aktualisiert.
4. Nach Genehmigung klicken Sie auf "Pull request zusammenführen" in der GitHub-Benutzeroberfläche.

{{< notice warning >}}
**Wichtig:** Kommunikation ist der Schlüssel! Wenn Sie sich über die angeforderten Änderungen unsicher sind, zögern Sie nicht, im Kommentarbereich des Pull-Requests nachzufragen.
{{< /notice >}}

{{< mermaid >}}
graph TD
    A[PR-Kommentare überprüfen] -->|Änderungen erforderlich| B(Lokale Änderungen vornehmen)
    B --> C(Änderungen committen)
    C --> D(Änderungen pushen)
    D --> E{PR genehmigt?}
    E -->|Ja| F(PR zusammenführen)
    E -->|Nein| A
    A -->|Keine Änderungen erforderlich| E
{{< /mermaid >}}

Nachdem Sie den Pull-Request erfolgreich zusammengeführt haben, welche Nachricht haben Sie gesehen? Geben Sie sie unten ein, um fortzufahren:

<label for="finput">Eingabefeld für die Merge-Nachricht:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "Tipp" >}}
Die gesuchte Nachricht lautet üblicherweise etwas wie "Pull request successfully merged and closed."
{{< /expand >}} 