---
title: "Registrierung Deines Discord-Bots"
draft: false
weight: 1
---

Nuvi kann keinen Übersetzer bereitstellen, ohne eine offizielle „Identität“. Bevor du deinem Bot echtes Verhalten beibringst, musst du einen Bot-Benutzer im Entwicklerportal von Discord erstellen. Dadurch erhältst du ein **Token** (ein geheimes Passwort), das dein Code zum Einloggen verwendet.

### 1. Öffne das Entwicklerportal
Öffne das [Discord-Entwicklerportal](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications%3Fnew_application%3Dtrue) und melde dich mit deinem Discord-Konto an (oder erstelle ein Konto, falls du noch keins hast).

### 2. Eine neue Anwendung erstellen
Klicke auf **New Application**.
- Gib ihr einen kurzen, eindeutigen Namen (Beispiel: `Nuevo Translator Bot`).
- Aktiviere das Kästchen für die Nutzungsbedingungen und klicke anschließend auf **Create**.

![Neue Anwendung erstellen](../../media/discord-bot-name.png)

### 3. Einen Bot-Benutzer hinzufügen
Auf der Seite deiner Anwendung:
- Klicke im linken Menü auf **Bot**.
- Klicke auf **Add Bot** → **Yes, do it!**
- (Optional) Gib ihm ein Icon und einen Spitznamen.

### 4. Kopiere das Bot-Token (Aber halte es geheim!)
Bleibe auf der Bot-Seite:
- Klicke auf **Reset Token** oder **Copy Token**.
- Dieser lange String ist wie ein Passwort für deinen Bot.
- Teile es niemals öffentlich mit.

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Warnung:</strong> Wenn jemand dein Token erhält, kann er die Kontrolle über deinen Bot übernehmen. Solltest du feststellen, dass es durchgesickert ist, setze es sofort zurück.
{{< /alert >}}

### 5. Aktiviere die Nachrichtentext-Absicht (Wichtig für Übersetzungen!)
Immer noch auf der **Bot**-Seite:
- Scrolle herunter zu **Privileged Gateway Intents**.
- Schalte den Schalter für **Message Content Intent** auf EIN.
- Dies erlaubt deinem Bot, Nachrichten zu lesen (erforderlich für automatische Übersetzungen).

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Warnung:</strong> Ohne aktivierte Message Content Intent kann dein Bot keine Nachrichten lesen, sodass die automatische Übersetzung nicht funktioniert.
{{< /alert >}}

### 6. Lade deinen Bot auf einen Server ein
- Klicke auf **OAuth2 → URL Generator**.
- Unter **Scopes** aktiviere: `bot` und `applications.commands`.
- Unter **Bot Permissions** wählst du nur das Notwendige aus (fang einfach an: `Read Messages/View Channels`, `Send Messages`).
- Kopiere die generierte URL, füge sie in deinen Browser ein, wähle einen Server, den du besitzt oder verwaltest, und autorisiere.

Dein Bot ist nun registriert und auf deinem Server hinzugefügt! Er wird jedoch erst online sein, wenn du deinen Python-Code mit dem Token ausführst. Sobald er online ist, kannst du anfangen, ihn in den Übersetzungshelfer zu verwandeln, den Nuvi braucht.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi-Tipp:</strong> Wenn die Einladungs-URL fehlschlägt, überprüfe noch einmal, ob sowohl die `bot`- als auch `applications.commands`-Scopes ausgewählt sind.
{{< /alert >}}