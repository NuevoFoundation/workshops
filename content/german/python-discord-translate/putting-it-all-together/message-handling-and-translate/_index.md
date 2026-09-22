```markdown
---
title: "Nachrichtenverarbeitung & Übersetzungsbefehl"
draft: false
weight: 4
---

Hier geschieht die Magie! Der Bot überwacht jede Nachricht und übersetzt sie automatisch für Personen, die es benötigen. Außerdem gibt es einen Backup-Befehl `/translate`.

## Den Bot Nachrichten lesen lassen

Zuerst benötigen wir die Berechtigung, Nachrichten zu lesen:

```python
# Discord sagen, dass wir Nachrichten lesen möchten
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)
```

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi-Maskottchen" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Warnung:</strong> Aktiviere die "Message Content Intent"-Einstellung im Discord Developer Portal, sonst kann der Bot keine Nachrichten lesen.
{{< /alert >}}

## Der Auto-Übersetzungscode

Dieser Code läuft jedes Mal, wenn jemand eine Nachricht sendet:

```python
@bot.event
async def on_message(message):
    # Bot-Nachrichten nicht übersetzen
    if message.author.bot:
        return
    
    # Sehr kurze Nachrichten überspringen (weniger als 3 Buchstaben)
    if len(message.content.strip()) < 3:
        return
    
    # Wenn sich niemand registriert hat, abbrechen
    if not user_languages:
        return

    # Feststellen, welche Sprache diese Nachricht hat
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Überprüfen, wer sich registriert hat
    for uid, preferred_lang in user_languages.items():
        # Eigene Nachrichten nicht senden
        if uid == message.author.id:
            continue
        
        # Überspringen, wenn sie diese Sprache bereits sprechen
        if detected_lang == preferred_lang:
            continue

        # Übersetzen!
        translation = translate_text(message.content, detected_lang, preferred_lang)
        if translation:
            # Benutzer finden
            user = bot.get_user(uid)
            if user is None:
                try:
                    user = await bot.fetch_user(uid)
                except:
                    continue
            if not user:
                continue
            
            # DM senden
            try:
                original_lang_name = "English" if detected_lang == "en" else "Spanish"
                target_lang_name = "English" if preferred_lang == "en" else "Spanish"
                dm_text = (
                    f"**Übersetzung** ({original_lang_name} -> {target_lang_name})\n"
                    f"**Original:** {message.content}\n"
                    f"**Übersetzung:** {translation}\n"
                    f"*Von {message.author.display_name} in #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # Falls DM fehlschlägt, einfach überspringen
```

### Schritt-für-Schritt-Erklärung

1. **Unnötige Nachrichten filtern**:
   - Bot-Nachrichten überspringen (keine Endlosschleifen!)
   - Kurze Nachrichten überspringen (wie "ok" oder "hi")
   - Abbrechen, wenn niemand registriert ist

2. **Sprache analysieren**:
   - Mit `detect_language()` die Sprache herausfinden
   - Übersetzen nur, wenn es Englisch oder Spanisch ist

3. **Benutzer durchlaufen**:
   - Jeden registrierten Benutzer überprüfen
   - Nachrichten des Absenders überspringen
   - Benutzer überspringen, die die Sprache bereits sprechen

4. **Übersetzungen senden**:
   - In ihre bevorzugte Sprache übersetzen
   - Auf Discord finden
   - Ihnen eine Nachricht mit der Übersetzung senden

## Der manuelle `/translate` Befehl

Manchmal möchte man einfach etwas schnell übersetzen:

```python
@bot.tree.command(name="translate", description="Manuell Englisch ↔ Spanisch übersetzen")
@app_commands.describe(
    phrase="Was möchtest du übersetzen?",
    translate_to="englisch oder spanisch (Standard: spanisch)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    # Zeige "Denken...", während gearbeitet wird
    await interaction.response.defer(thinking=True)
    
    # Feststellen, in welche Richtung übersetzt werden soll
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "Spanisch"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "Englisch"
    else:
        await interaction.followup.send("Bitte wähle 'englisch' oder 'spanisch'")
        return
    
    # Übersetzung durchführen
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("Übersetzung fehlgeschlagen. Läuft der Server?")
```

### Coole Funktionen

- **Beidseitig**: Englisch -> Spanisch oder Spanisch -> Englisch
- **Intelligenter Standard**: Ohne Angabe wird Spanisch angenommen
- **Zeigt "Denken"**: Damit man weiß, dass der Bot arbeitet
- **Hilfreiche Fehler**: Es wird angegeben, was schiefgelaufen ist

## Wie die Direktnachricht aussieht

Wenn jemand "¡Buenos días amigos!" schreibt, erhalten englischsprachige Benutzer diese Nachricht:

```
**Übersetzung** (Spanisch -> Englisch)
**Original:** ¡Buenos días amigos!
**Übersetzung:** Good morning friends!
*Von UserName in #general*
```

## Alles testen

### Auto-Übersetzung testen
1. Person A: `/register_language` -> wählt Spanisch
2. Person B: `/register_language` -> wählt Englisch
3. Person A schreibt: "Hello everyone!"
   - Person B erhält eine spanische Übersetzung per DM
4. Person B schreibt: "¡Gracias!"
   - Person A erhält eine englische Übersetzung per DM

### Manuelle Übersetzung testen
```
/translate phrase:"Hello world"
-> Spanisch: ¡Hola Mundo!

/translate phrase:"Buenos dias" translate_to:english
-> Englisch: Good morning

/translate phrase:"How are you?"
-> Spanisch: ¿Cómo estás?
```


## Häufige Probleme

| Problem            | Ursache                       | Lösung                       |
|--------------------|-------------------------------|------------------------------|
| Keine Auto-Übersetzung | "Message Content Intent" ist deaktiviert | Auf dem Developer Portal aktivieren |
| Keine DMs erhalten | Benutzer hat DMs deaktiviert  | Benutzer muss Server-DMs erlauben |
| Langsame Übersetzungen | Server ist ausgelastet      | Geduld haben oder LibreTranslate neu starten |
| Bot