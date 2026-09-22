```markdown
---
title: "Schreiben eines einfachen Bots"
draft: false
weight: 2
---

Nuvi hat jetzt eine registrierte Bot-Identität. Als Nächstes: Lass ihn tatsächlich reagieren. Mit deinem Projektordner, der virtuellen Umgebung und der Starterdatei baust du eine **minimale Bot-Grundlage**. Diese erste Version zeigt nur, dass die Verbindung funktioniert. Wir aktivieren auch jetzt eine Berechtigung (`message_content`), damit spätere Seiten die automatische Übersetzung hinzufügen können, ohne die Einrichtung erneut besuchen zu müssen.

In diesem Teil wirst du:

1. `discord.py` zu `requirements.txt` hinzufügen und installieren (VS Code UI – kein Terminal-Tippen erforderlich)
2. Einen einfachen Bot schreiben, der auf den Slash-Befehl `/hello` reagiert
3. Die Nachrichteninhaltsabsicht (`message_content intent`) aktivieren (später für die automatische Übersetzung benötigt)
4. Den Bot ausführen und testen

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi sagt:</strong> Dein erstes Ziel ist es, zu sehen, dass der Bot online geht – die Übersetzung kommt später. Kleine Erfolge halten die Motivation aufrecht!
{{< /alert >}}

---

## 1. Füge die discord.py-Bibliothek hinzu und installiere sie (Mit requirements.txt + VS Code UI)
Wir deklarieren zuerst die Abhängigkeit und lassen dann VS Code sie in deiner virtuellen Umgebung installieren.

### 1.a Füge sie zu requirements.txt hinzu
1. Öffne `requirements.txt` in deinem Projekt.
2. Füge diese Zeile hinzu (die Datei kann vorerst nur das enthalten):
```text
discord.py
```
3. Speichere die Datei.

### 1.b Installation über das UI des Umgebungsmanagers
1. Öffne die Python-Ansichtserweiterung (Python-Symbol in der Aktivitätsleiste) und stelle sicher, dass die richtige Umgebung (z. B. `.venv`) ausgewählt ist.
2. Wähle das Symbol "Pakete" (es sieht aus wie eine Box), das ein Dropdown anzeigt. Wähle nun "Projektabhängigkeiten installieren".
![Projektabhängigkeiten installieren](../../media/dependencies.png)
3. Klicke auf das Kontrollkästchen für "requirements.txt" und klicke auf "Ok".
![requirements.txt auswählen](../../media/requirements.png)
4. Warte, bis `discord.py` in der Liste der installierten Pakete erscheint.
![discord.py installiert](../../media/discord-installed.png)

## 2. Schreibe den Bot-Code
Öffne `bot.py` und ersetze beliebigen Platzhaltercode durch Folgendes. (Dir wird ein `user_languages`-Dictionary auffallen – dies ist ein „Platzhalter-Notizbuch“, das wir tatsächlich nutzen werden, wenn wir Registrierung und automatische Übersetzung bald hinzufügen.)

```python
import discord
from discord.ext import commands

TOKEN = "<your token here>"

# Hier merken wir uns, welche Sprache jeder Benutzer möchte.
# Es ist wie ein Notizbuch: user_languages[user_id] = "en" oder "es"
user_languages = {}

# Discord mitteilen, dass unser Bot Nachrichten lesen muss (nicht nur Befehle)
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Bot ist online als {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"Synchronisiert: {len(synced)} Befehle.")
    except Exception as e:
        print(f"Fehler: {e}")

@bot.tree.command(name="hello", description="Sagt Hallo!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"Hallo {interaction.user.display_name}! Viel Spaß beim Programmieren!")

if not TOKEN:
    raise RuntimeError("Bot-Token fehlt. Füge es oben in der Datei hinzu.")

bot.run(TOKEN)
```

### Was dies bewirkt:
- Importiert die Discord-Bibliothek, sodass du keine Netzwerke neu erfinden musst.
- Richtet „Intents“ ein und aktiviert frühzeitig `message_content` (zukünftige automatische Übersetzung muss Nachrichten lesen).
- Erstellt und startet eine Bot-Verbindung.
- Registriert einen Slash-Befehl `/hello`, um zu zeigen, dass die Befehls-Synchronisation funktioniert.
- Nutzt `user_languages = {}` als einfachen Speicher, den wir später ausfüllen.
- Antwortet mit einer persönlichen Begrüßung, wenn `/hello` ausgeführt wird.
- Sicherheitscheck: hält an, wenn das Token fehlt.

<details>
<summary><strong>-> Fortgeschrittene Details (Klicke, um mehr über die verwendeten fortgeschrittenen Konzepte zu erfahren. Völlig optional!)</strong></summary>

**async / await**: Diese Schlüsselwörter ermöglichen es Python, andere Aufgaben auszuführen, während es wartet (z. B. auf eine Antwort von Discord), sodass dein Bot nicht einfriert.

**Event (@bot.event)**: Dekoratoren wie `@bot.event` sagen der Bibliothek: „Führe diese Funktion aus, wenn ein bestimmtes Ereignis eintritt“ (hier: wenn der Bot bereit ist).

**Slash-Befehle (`@bot.tree.command`)**: Diese erstellen moderne Befehle, die erscheinen, wenn Benutzer `/` in Discord tippen. Sie werden bei den Discord-Servern registriert und könnten etwas Zeit zur Synchronisation benötigen.

**Interaction**: Stellt einen Benutzer dar, der einen Slash-Befehl verwendet. `interaction.user` gibt dir die Person, und `interaction.response.send_message(...)` sendet eine Antwort.

**Bot vs Client**: `commands.Bot` fügt hilfreiche Befehlsfunktionen (wie Befehlsbäume) auf dem niedrigeren Discord-Client hinzu.

**Intents**: Berechtigungen, die Discord mitteilen, welche Daten du möchtest (Nachrichten, Mitglieder usw.). Weniger sorgen für einen einfacheren und sichereren Bot.

**Exceptions (try / except)**: Der `try:`-Block führt Code aus, der fehlschlagen könnte; `except Exception as e:` fängt Fehler ab, sodass dein Bot sie protokollieren kann, anstatt abzustürzen.

</details>

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Warnung:</strong> Der Einfachheit halber zeigen wir das Token direkt. In echten Projekten sollten Geheimnisse in Umgebungsvariablen oder einem sicheren Tresor gespeichert werden.
{{< /alert >}}

---

## 3. Führe den Bot aus
1. Öffne `