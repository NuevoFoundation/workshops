---
title: "LibreTranslate lokal ausführen"
draft: false
weight: 1
---

Nuvi möchte schnelle, private Übersetzungen – also hostest du das Übersetzungs-"Hirn" direkt auf deinem Rechner.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi sagt:</strong> Lokal bleiben bedeutet keine Internetverzögerung und mehr Datenschutz für Übungsprojekte.
{{< /alert >}}

## 1. Füge es zu requirements.txt hinzu
Öffne die `requirements.txt`-Datei deines Projekts und füge (oder überprüfe, ob diese Zeilen vorhanden sind) hinzu:
```text
libretranslate
requests
```
Speichere die Datei.

### Installation über das VS Code-Terminal
Um das Terminal zu öffnen, kannst du:
- Das Menü nutzen: Ansicht → Terminal
- ODER die Tastenkombination drücken: `Strg+`` (Gravis-Akzent-Taste, normalerweise über Tab). Auf macOS ist es `Cmd+``.
- ODER die Terminal-Registerkarte / das Plus (+) Symbol oben im Panelbereich anklicken.

1. Stelle sicher, dass deine virtuelle Umgebung ausgewählt ist (schau nach `.venv` in der unteren Statusleiste). Falls nicht, wähle sie aus.
2. Öffne ein neues Terminal in VS Code (``Strg+``).
3. Führe aus:
```pwsh
pip install -r requirements.txt
```
4. Warte, bis die Installation ohne Fehler abgeschlossen ist.
5. (Optional) Zeige die installierten Pakete zur Überprüfung an:
```pwsh
pip show libretranslate
```

---

## 2. LibreTranslate lokal ausführen
Starte den Server im Terminal (lasse dieses Fenster beim Testen geöffnet):

```bash
libretranslate --load-only en,es
```
Dadurch wird der Server mit Unterstützung zum Übersetzen von Englisch und Spanisch gestartet – die beiden Sprachen, die Nuvi zuerst unterstützen möchte.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvis Tipp:</strong> Benötigst du später mehr Sprachen? Starte ohne `--load-only` neu oder füge Codes hinzu (z.B. `--load-only en,es,fr`).
{{< /alert >}}

Beim ersten Start kann es einige Minuten dauern, da Sprachdaten heruntergeladen werden.

![LibreTranslate startet](../../media/libretranslate-starting.png)

Sobald der Vorgang abgeschlossen ist, öffne einen Browser mit der Adresse:
```
http://127.0.0.1:5000
```
Du solltest eine einfache Seite sehen. Um die vom Server unterstützten Sprachen zu sehen, besuche:
```
http://127.0.0.1:5000/languages
```

---

## 3. Fehlerbehebung
| Problem | Lösung |
|---------|--------|
| `No module named libretranslate` | Stelle sicher, dass sich im Terminal der Text (.venv) befindet, oder bitte einen Erwachsenen um Hilfe. |
| Server startet und beendet sich sofort | Lies den Fehltext; installiere neu oder versuche es erneut. |
| Kann 127.0.0.1:5000 nicht öffnen | Stelle sicher, dass der Server noch läuft; überprüfe die Firewall. |
| Erste Übersetzung ist langsam | Die Modelle werden noch geladen. Warte einen Moment. |
| Ausgabe ist leer / seltsam | Stelle sicher, dass du POST mit den Schlüsseln verwendet hast: `q`, `source`, `target`, `format`. |
| Port ist bereits belegt | Verwende einen anderen Port: `python -m libretranslate --port 5001` und aktualisiere die URL. |

---