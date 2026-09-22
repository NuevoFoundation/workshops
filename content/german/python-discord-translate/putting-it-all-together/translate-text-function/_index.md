---
title: "Funktion zum Übersetzen von Text"
draft: false
weight: 2
---

Diese Funktion übernimmt die eigentliche Übersetzung – sie nimmt Text in einer Sprache und wandelt ihn in eine andere Sprache um!

## Die `translate_text()`-Funktion

Hier ist der Code, der die Magie bewirkt:

```python
def translate_text(text, from_language, to_language):
    """Translate text from one language to another using LibreTranslate."""
    try:
        data = {
            "q": text,
            "source": from_language,
            "target": to_language,
            "format": "text"
        }
        response = requests.post("http://127.0.0.1:5000/translate", json=data, timeout=10)
        result = response.json()
        return result.get("translatedText")
    except:
        return None
```

## Was jeder Teil bedeutet

| Teil | Was er tut | Beispiel |
|------|------------|----------|
| `text` | Der Text, den du übersetzen möchtest | `"Hello world"` |
| `from_language` | Die Sprache, in der der Text aktuell ist | `"en"` (Englisch) |
| `to_language` | Die Sprache, in die du übersetzen möchtest | `"es"` (Spanisch) |

## So funktioniert es

1. **Informationen zusammenstellen**: Wir packen den Text und die Sprachcodes in ein Paket
2. **An LibreTranslate senden**: Fordern die Übersetzung an
3. **Übersetzung erhalten**: LibreTranslate sendet den übersetzten Text zurück
4. **Wenn etwas schiefgeht**: Gibt `None` zurück (bedeutet: "konnte nicht übersetzen")

## Anwendungsbeispiele

### In der automatischen Übersetzung
```python
# Eine Nachricht in die gewünschte Sprache des Benutzers übersetzen
translation = translate_text(message.content, detected_lang, preferred_lang)
if translation:
    # Sende es an ihn!
```

### Im manuellen Befehl
```python
# Englisch zu Spanisch
result = translate_text("Hello", "en", "es")  
# Ergebnis: "Hola"

# Spanisch zu Englisch  
result = translate_text("Gracias", "es", "en")
# Ergebnis: "Thank you"
```

## Was LibreTranslate zurücksendet

Wenn es funktioniert, erhältst du etwas wie:
```json
{
    "translatedText": "Hola mundo"
}
```

## Wenn etwas schiefläuft

Die Funktion gibt `None` zurück, wenn:
- LibreTranslate nicht läuft
- Es Probleme mit der Internetverbindung gibt
- Falsche Sprachcodes verwendet wurden
- Der Text zu lang ist (Timeout nach 10 Sekunden)

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Achtung:</strong> Sehr lange Nachrichten können mehr als 10 Sekunden dauern. Wenn das häufig passiert, kannst du die Timeout-Zeit anpassen!
{{< /alert >}}

## Tipps für den Erfolg

1. **Immer überprüfen, ob es funktioniert hat**: Stelle sicher, dass die Funktion nicht `None` zurückgibt
2. **Die richtigen Codes verwenden**: "en" für Englisch, "es" für Spanisch
3. **Halte Nachrichten angemessen kurz**: Sehr lange Texte brauchen länger
4. **Geduld haben**: Übersetzungen brauchen einen Moment

## Wo der Bot diese Funktion nutzt

Der Bot ruft diese Funktion an zwei Stellen auf:
- **Automatische Übersetzung**: Wenn jemand eine Nachricht in einer anderen Sprache schreibt
- **Manueller Befehl**: Wenn jemand `/translate` verwendet