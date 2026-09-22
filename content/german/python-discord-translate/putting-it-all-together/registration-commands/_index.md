---
title: "Registrierungsbefehle"
draft: false
weight: 3
---

Diese Befehle ermöglichen es den Nutzern, sich für die automatische Übersetzung anzumelden, ihre Einstellungen zu überprüfen und die Übersetzungen zu deaktivieren.

## Benutzerverwaltung

Der Bot merkt sich, welche Benutzer welche Sprache möchten, indem er ein einfaches Wörterbuch verwendet:

```python
# Dies speichert: user_id -> ihre bevorzugte Sprache ("en" oder "es")
user_languages = {}
```

Man kann sich das wie eine Anmeldung vorstellen, bei der jeder seinen Namen und seine bevorzugte Sprache einträgt!

## Befehl `/register_language`

Dieser Befehl ermöglicht es den Benutzern, die Sprache auszuwählen, die sie sprechen (also die Sprache, in die sie übersetzt bekommen möchten):

```python
@bot.tree.command(name="register_language", description="Wähle deine Sprache aus")
@app_commands.describe(language="In welche Sprache sollen Nachrichten für dich übersetzt werden?")
@app_commands.choices(language=[
    app_commands.Choice(name="Ich spreche Englisch", value="en"),
    app_commands.Choice(name="Ich spreche Spanisch", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "Englisch" if language.value == "en" else "Spanisch"
    await interaction.response.send_message(
        f"Verstanden! Du sprichst {lang_name}, also werde ich Nachrichten für dich ins {lang_name} übersetzen!",
        ephemeral=True
    )
```

### Was daran cool ist
- **Klar verständliche Auswahl**: "Ich spreche Englisch" oder "Ich spreche Spanisch" - keine Verwirrung!
- **Private Antwort**: Nur der Nutzer sieht die Bestätigungsnachricht.
- **Merkt sich die Einstellungen**: Speichert, welche Sprache der Nutzer versteht.

## Befehl `/my_language`

Dieser Befehl zeigt den Benutzern, welche Sprache sie gewählt haben:

```python
@bot.tree.command(name="my_language", description="Zeigt dir, welche Sprache du gewählt hast")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "Englisch" if lang == "en" else "Spanisch"
        await interaction.response.send_message(f"Deine Sprache: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("Du hast noch keine Sprache ausgewählt! Benutze /register_language", ephemeral=True)
```

### Was es macht
- **Zeigt die Einstellung**: Teilt den Benutzern mit, welche Sprache sie gewählt haben.
- **Hilfreiche Erinnerung**: Gibt einen Hinweis, wie sie sich registrieren können, falls sie dies noch nicht getan haben.

## Befehl `/stop_translation`

Mit diesem Befehl können Benutzer die Übersetzungen deaktivieren:

```python
@bot.tree.command(name="stop_translation", description="Automatische Übersetzungen deaktivieren")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("Du erhältst keine Übersetzungen mehr.", ephemeral=True)
    else:
        await interaction.response.send_message("Du hattest ohnehin keine Übersetzungen aktiviert!", ephemeral=True)
```

### Was passiert
- **Entfernt den Benutzer aus der Liste**: Löscht den Eintrag des Benutzers.
- **Bestätigt die Aktion**: Zeigt eine Bestätigungsnachricht.
- **Freundliche Antwort**: Auch wenn der Benutzer nicht registriert war.

## Wie alles zusammen funktioniert

1. **Start**: Niemand ist registriert.
2. **Anmelden**: `/register_language` fügt sie zur Liste hinzu.
3. **Übersetzungen erhalten**: Der Bot prüft die Liste, um zu sehen, wer was benötigt.
4. **Status überprüfen**: `/my_language` zeigt die getroffene Wahl.
5. **Abmelden**: `/stop_translation` entfernt sie.

## Beispiel: Zwei Freunde melden sich an

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi-Tipp:</strong> So würden Maria und John das System nutzen:
{{< /alert >}}

1. **Maria** (spricht Spanisch) gibt ein: `/register_language` und wählt "Ich spreche Spanisch".
   - Jetzt werden für sie englische Nachrichten ins Spanische übersetzt.
   
2. **John** (spricht Englisch) gibt ein: `/register_language` und wählt "Ich spreche Englisch".
   - Jetzt werden für ihn spanische Nachrichten ins Englische übersetzt.

3. **Maria** überprüft: `/my_language`.
   - Bot sagt: "Deine Sprache: Spanisch".
   
4. **John** entscheidet sich abzumelden: `/stop_translation`.
   - Bot sagt: "✅ Du erhältst keine Übersetzungen mehr."

## Gut zu wissen

- **Private Nachrichten**: Alle Antworten sind privat (nur du siehst sie).
- **Zurückgesetzt beim Bot-Neustart**: Die Liste wird nur im Speicher gehalten und nicht in einer Datei gespeichert.
- **Einfach zu ändern**: Einfach `/register_language` erneut mit einer neuen Auswahl ausführen.
- **Kein Spam**: Nur registrierte Personen erhalten Übersetzungen.

## Problemlösung

| Problem | Lösung |
|---------|--------|
| Einstellungen verschwunden | Der Bot wurde möglicherweise neu gestartet - melde dich einfach erneut an |
| Sprache ändern | Führe einfach `/register_language` erneut aus |
| Keine Übersetzungen erhalten | Überprüfe mit `/my_language`, ob du registriert bist |
| Keine DMs erhalten | Überprüfe die Datenschutzeinstellungen in Discord |

---