---
title: "Sprache Erkennen Funktion"
draft: false
weight: 1
---

Diese Funktion erkennt, ob eine Nachricht auf Englisch oder Spanisch geschrieben ist. Es ist so, als hätte man jemanden, der sofort sagen kann, welche Sprache er hört!

## Die `detect_language()` Funktion

Hier ist der Code, der LibreTranslate fragt: „Welche Sprache ist das?“:

```python
def detect_language(text):
    """Frage LibreTranslate, welche Sprache dieser Text ist (en/es)."""
    try:
        data = {"q": text}
        response = requests.post("http://127.0.0.1:5000/detect", json=data, timeout=5)
        result = response.json()
        if result and len(result) > 0:
            language = result[0]["language"]
            if language in ["en", "es"]:
                return language
        return None
    except requests.exceptions.Timeout:
        return None
    except requests.exceptions.ConnectionError:
        return None
    except Exception:
        return None
```

## Wie es funktioniert

1. **Text senden**: Wir schicken die Nachricht an LibreTranslate.
2. **Antwort erhalten**: LibreTranslate sagt uns, welche Sprache es vermutet.
3. **Überprüfen**: Wir arbeiten nur mit Englisch (`en`) oder Spanisch (`es`).
4. **Probleme behandeln**: Wenn etwas schiefgeht, geben wir `None` zurück (was bedeutet „Ich weiß es nicht“).

## Was der Bot damit macht

Wenn jemand eine Nachricht sendet, dann:
- Verwendet der Bot diese Funktion, um die Sprache zu erkennen.
- Überspringt Nachrichten, die nicht auf Englisch oder Spanisch sind.
- Entscheidet, wer eine Übersetzung benötigt.

## Beispiel

Wenn jemand „Hello world“ tippt, schickt LibreTranslate so etwas zurück:
```json
[
  {
    "language": "en",
    "confidence": 0.95
  }
]
```

Die Funktion entnimmt daraus `"en"` und gibt es zurück.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi-Tipp:</strong> Starte LibreTranslate mit `--load-only en,es`, damit es nur Englisch und Spanisch lädt. So startet es schneller.
{{< /alert >}}

## Häufige Probleme

| Was ist falsch | Wie löst man das? |
|----------------|-------------------|
| Gibt immer `None` zurück | Prüfe, ob LibreTranslate läuft |
| Erkennt die Sprache falsch | Versuche, längere Nachrichten einzugeben |
| Dauert zu lange | Der 5-Sekunden-Timeout könnte zu kurz sein |