---
title: "Code Voraussetzungen"
draft: false
weight: 2
---

Nuvi kann noch keinen Übersetzer-Bot einladen – es gibt noch keine eingerichtete Code-Umgebung! Lassen Sie uns Ihren Computer vorbereiten. Sie installieren Python, richten eine virtuelle Umgebung ein (eine sichere „Blase“ für die Pakete Ihres Projekts), installieren VS Code (Ihren Code-Editor) und erstellen die Starterdateien. Sobald dieses Fundament bereit ist, beginnen Sie mit dem Schreiben des Bots, der allen hilft, sich gegenseitig zu verstehen.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi sagt:</strong> Wählen Sie Python 3.10, damit die Übersetzerteile reibungslos installiert werden können – zukünftige Aktualisierungen sind einfacher, wenn jetzt alles funktioniert!
{{< /alert >}}

## 1. Python installieren
Installieren Sie **Python 3.10** (eine 3.10.x-Version, wie 3.10.14) von der offiziellen Website.
- Windows & macOS: https://www.python.org/downloads/
- (Einige Chromebooks benötigen möglicherweise den Linux-Modus; fragen Sie einen Erwachsenen oder Lehrer.)

Warum 3.10? Einige der Bibliotheken, die wir für Discord und Übersetzungen verwenden, funktionieren derzeit am besten (oder ausschließlich) mit Python 3.10. Die Verwendung einer neueren Version (wie 3.11 oder 3.12) kann Installationsfehler verursachen.

Sie sollten etwas wie `Python 3.10.x` sehen.

## 2. VS Code installieren (und die Python-Tools)

VS Code ist ein kostenloser, schülerfreundlicher Code-Editor, in dem Sie Ihren Bot schreiben und starten werden; er bietet intelligente automatische Vervollständigung, Fehlerhinweise und eine einfache Möglichkeit, Python zu verwalten.

{{<button href="https://code.visualstudio.com" theme="info">}}Download VS Code{{< /button >}}

Nachdem VS Code installiert ist, fügen wir die Python-Tools hinzu:
1. Öffnen Sie VS Code und gehen Sie zur Ansicht "Erweiterungen" (Klicken Sie auf das Symbol für Erweiterungen in der Aktivitätsleiste an der Seite oder drücken Sie `Strg+Umschalt+X`).
![Extensions view icon](../../media/extensions.png)
1. Suchen Sie nach `Python` (Herausgeber: Microsoft) und klicken Sie auf „Installieren“. Dadurch werden einige hilfreiche Tools installiert, die wir während des Workshops verwenden werden. ![Python VSCode extension page](../../media/python-extension.png)
1. Installieren Sie die Funktion „Python Environment Manager“, falls dazu aufgefordert wird – sie ist in den neuesten Versionen der Python-Erweiterung enthalten.
1. Starten Sie VS Code neu, falls dies erforderlich ist.

Sie sollten jetzt das Python-Erweiterungssymbol in Ihrer Seitenleiste sehen.
![Python extension symbol](../../media/python-symbol.png)

## 3. Erstellen Sie einen Projektordner
Wählen Sie einen Ort, den Sie leicht finden können, wie Ihre Dokumente oder den Desktop.
Beispiel für einen Ordnernamen: `discord-translator-bot`.
Öffnen Sie den Ordner in VS Code (Datei → Ordner öffnen).

## 4. Erstellen Sie eine virtuelle Umgebung
Eine virtuelle Umgebung hält Ihr Projekt von anderen Projekten getrennt und macht es einfacher, alle Python-Dateien auf Ihrem Computer zu organisieren. Die Python-Erweiterung von VS Code kann diese für Sie erstellen und auswählen.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi Tipp:</strong> Wenn die Erstellung der Umgebung stecken bleibt, warten Sie eine Minute, bevor Sie es erneut versuchen – Python richtet nur Ihr isoliertes Labor ein.
{{< /alert >}}

1. Um die Umgebung zu erstellen, suchen Sie in der Seitenleiste nach dem Python-Symbol und klicken Sie darauf: ![Python VSCode extension icon](../../media/sidebar.png)
1. Klicken Sie auf das Dropdown-Menü „venv“. Es sollte etwas erscheinen wie „Keine Umgebung gefunden, klicken Sie, um zu erstellen“. Klicken Sie darauf.
1. Dies sollte ein Dropdown-Menü in der Nähe der oberen Leiste einblenden, in dem „Wählen Sie den Modus der Umgebungs-Erstellung“ steht. Wählen Sie „Schnellerstellen“.
![Create environment dropdown](../../media/create-env.png)
1. Es sollte nun ein kleines Ladefenster erscheinen, das anzeigt, dass die virtuelle Umgebung erstellt wird. Dies kann ein paar Minuten dauern.
![Creating virtual environment](../../media/loading-env.png)
1. Sobald dies abgeschlossen ist, sollten Sie, wenn Sie erneut auf das Python-Symbol in der Seitenleiste klicken und das Dropdown-Menü „venv“ ansehen, sehen, dass die virtuelle Umgebung erstellt und ausgewählt wurde.
![Virtual environment created and selected](../../media/venv-created.png)

## 5. Erstellen Sie Starterdateien
Erstellen Sie in dem Projektordner folgende Dateien:
```
bot.py
requirements.txt
```

### bot.py
Hier wird der gesamte Code für Ihren Bot enthalten sein. Fügen Sie vorerst nur diesen Startcode hinzu:
```python
print("Bot project ready. We'll add Discord code soon!")
```

### requirements.txt 
Diese Datei kann vorerst leer bleiben. Später werden Sie die Namen der Python-Bibliotheken, die Ihr Bot benötigt, in diese Datei hinzufügen, damit sie einfach installiert werden können.

## 6. Führen Sie das Bot-Skript aus
1. In der Seitenleiste sollte sich auch ein Symbol "Ausführen und Debuggen" befinden (ein Play-Button mit einem Käfer). Wenn bot.py im Haupteditor geöffnet ist, klicken Sie auf das Symbol und dann auf die Schaltfläche „Ausführen und Debuggen“ oben in der Seitenleiste.
![Run and Debug icon](../../media/run-and-debug.png)

1. Wählen Sie im Dropdown-Menü, das erscheint, „Python-Debugger“ aus.
![Select Python debugger](../../media/debugger.png)

1. Wählen Sie in den Debug-Konfigurationen „Python-Datei“ aus.
![Select Python File](../../media/select-python.png)

1. Durch erneutes Klicken auf „Ausführen und Debuggen“ sollte das Skript ausgeführt werden, und Sie sollten die Ausgabe im Terminal unten sehen!
![Output in terminal](../../media/terminal.png)

---