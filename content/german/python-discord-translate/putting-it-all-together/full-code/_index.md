---
title: "Vollständiger Bot-Code"
draft: false
weight: 5
---

Hier ist die komplette `bot.py` Datei mit allem zusammengefasst! Du kannst diesen gesamten Code kopieren, um deinen Übersetzungsbot zum Laufen zu bringen.

## Vollständige bot.py Datei

```python
import discord
from discord.ext import commands
from discord import app_commands
import requests

# WICHTIG: Ersetze dies durch dein tatsächliches Bot-Token (geheim halten!)
TOKEN = "<your token here>"

# Speichert, wer welche Sprache möchte
user_languages = {}

# Ermöglicht dem Bot, Nachrichten zu lesen
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Bot ist online als {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"{len(synced)} Befehle synchronisiert.")
    except Exception as e:
        print(f"Fehler: {e}")

def detect_language(text):
    """Ermittelt, ob der Text auf Englisch oder Spanisch ist."""
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

def translate_text(text, from_language, to_language):
    """Übersetzt Text von einer Sprache in eine andere."""
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

@bot.tree.command(name="hello", description="Sagt Hallo!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"Hallo {interaction.user.display_name}!")

@bot.tree.command(name="register_language", description="Wähle, welche Sprache du sprichst")
@app_commands.describe(language="In welche Sprache möchtest du Nachrichten übersetzen?")
@app_commands.choices(language=[
    app_commands.Choice(name="Ich spreche Englisch", value="en"),
    app_commands.Choice(name="Ich spreche Spanisch", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "Englisch" if language.value == "en" else "Spanisch"
    await interaction.response.send_message(
        f"Verstanden! Du sprichst {lang_name}, also werde ich Nachrichten für dich in {lang_name} übersetzen!",
        ephemeral=True
    )

@bot.tree.command(name="my_language", description="Sieh dir deine ausgewählte Sprache an")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "Englisch" if lang == "en" else "Spanisch"
        await interaction.response.send_message(f"Deine Sprache: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("Du hast noch keine Sprache gewählt! Nutze /register_language", ephemeral=True)

@bot.tree.command(name="stop_translation", description="Stoppe automatische Übersetzungen")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("Du erhältst keine Übersetzungen mehr.", ephemeral=True)
    else:
        await interaction.response.send_message("Du hast ohnehin keine Übersetzungen erhalten!", ephemeral=True)

@bot.tree.command(name="translate", description="Manuelle Übersetzung Englisch ↔ Spanisch")
@app_commands.describe(
    phrase="Was möchtest du übersetzen?",
    translate_to="englisch oder spanisch (Standard: spanisch)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    await interaction.response.defer(thinking=True)
    target = (translate_to or "spanisch").lower()
    if target in ("spanisch", "es"):
        from_lang, to_lang, label = "en", "es", "Spanisch"
    elif target in ("englisch", "en"):
        from_lang, to_lang, label = "es", "en", "Englisch"
    else:
        await interaction.followup.send("Bitte wähle 'englisch' oder 'spanisch'")
        return
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("Übersetzung fehlgeschlagen. Läuft der Server?")

@bot.event
async def on_message(message):
    # Bot-Nachrichten überspringen
    if message.author.bot:
        return
    # Sehr kurze Nachrichten überspringen
    if len(message.content.strip()) < 3:
        return
    # Überspringen, wenn niemand angemeldet ist
    if not user_languages:
        return

    # Sprache ermitteln
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Überprüfen, ob Benutzer angemeldet sind
    for uid, preferred_lang in user_languages.items():
        # Nachrichtenautor überspringen
        if uid == message.author.id:
            continue
        # Überspringen, falls sie dieselbe Sprache sprechen
        if detected_lang == preferred_lang:
            continue

        # Übersetzen und Nachricht senden
        translation = translate_text(message.content, detected_lang, preferred_lang)
        if translation:
            user = bot.get_user(uid)
            if user is None:
                try:
                    user = await bot.fetch_user(uid)
                except:
                    continue
            if not user:
                continue
            try:
                original_lang_name = "Englisch" if detected_lang == "en" else "Spanisch"
                target_lang_name = "Englisch" if preferred_lang == "en" else "Spanisch"
                dm_text = (
                    f"**Übersetzung** ({original_lang_name} -> {target_lang_name})\n"
                    f"**Original:** {message.content}\n"
                    f"**Übersetzung:** {translation}\n"
                    f"*Von {message.author.display_name} in #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # Fehler beim Senden