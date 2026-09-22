---
title: "Testen Sie eine Übersetzung"
draft: false
weight: 2
---

## Testen Sie eine Übersetzung (Kurzes Skript)
Nuvi benötigt den Beweis, dass die Übersetzungsmaschine tatsächlich funktioniert, bevor sie in den Bot integriert wird. Dieses kleine Skript ist dieser Beweis.

Senden wir etwas Text an den Server mittels einer kurzen Python-Datei.

Erstellen Sie eine neue Datei mit dem Namen `test_translate.py`:
```python
import requests

# Test 1: Spracherkennung
print("Teste Spracherkennung...")
detect_payload = {"q": "Hello world!"}
detect_resp = requests.post("http://127.0.0.1:5000/detect", json=detect_payload)
print("Ergebnis der Spracherkennung:", detect_resp.json())

# Test 2: Übersetzung
print("\nTeste Übersetzung...")
translate_payload = {
    "q": "Hello world!",
    "source": "en",
    "target": "es",
    "format": "text"
}
translate_resp = requests.post("http://127.0.0.1:5000/translate", json=translate_payload)
print("Ergebnis der Übersetzung:", translate_resp.json())
```

Führen Sie es aus (stellen Sie sicher, dass der LibreTranslate-Server noch läuft):
1. Öffnen Sie `test_translate.py` im Editor.
1. Klicken Sie auf das Symbol "Run & Debug" (Play-Button mit einem Käfer) auf der linken Seite.
1. Schauen Sie im Debug Console / Terminal Panel nach dem Output.

Sie sollten etwas wie das folgende sehen: `{'translatedText': '¡Hola Mundo!'}`

![Ausgabe im Terminal](../../media/test_terminal.png)

---

### Was passiert hier?
**requests-Bibliothek:** Eine beliebte Python-Hilfsbibliothek, die es einfach macht, mit Websites oder lokalen Servern zu kommunizieren, ohne viel Low-Level-Code schreiben zu müssen.

**Web-Anfrage:** Eine Nachricht, die Ihr Programm an einen Server sendet, um ihn aufzufordern, etwas zu tun (hier: Text zu übersetzen) und eine Antwort zurückzugeben.

**Payload (Nutzdaten):** Die Daten, die Sie zusammen mit einer Anfrage senden. In diesem Skript repräsentiert `payload` die Daten wie den zu übersetzenden Text und die Quell-/Zielsprache, gespeichert als JSON.

**JSON:** Ein einfaches Textformat für Daten. Der Server sendet seine Antwort als JSON, damit verschiedene Programme und Programmiersprachen sie lesen können.

**resp.json():** Dies wandelt die JSON-Antwort vom Server in ein Format um, das Python versteht.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi-Tipp:</strong> Wenn Sie einen Verbindungsfehler erhalten, überprüfen Sie, ob das Server-Terminal noch läuft und die URL `http://127.0.0.1:5000` lautet.
{{< /alert >}}

**Endpoint:** Die spezifische URL (`/translate`) auf dem Server, die eine Aufgabe ausführt – in diesem Fall die Übersetzung.

### Probieren Sie es selbst aus
1. Übersetzen Sie einen anderen Satz.
1. Drehen Sie die Richtung um und übersetzen Sie von Spanisch nach Englisch.
1. Fügen Sie eine weitere Sprache hinzu!


Jetzt kennen Sie jedes Teil! Im nächsten Schritt verbinden Sie diese Idee mit Ihrem Discord-Bot, damit Nuvis Freunde endlich einander verstehen können.