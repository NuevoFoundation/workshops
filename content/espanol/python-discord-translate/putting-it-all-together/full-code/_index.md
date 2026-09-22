---
title: "Código completo del bot"
draft: false
weight: 5
---

¡Aquí está el archivo completo `bot.py` con todo junto! Puedes copiar este código completo para que tu bot de traducción funcione.

## Archivo completo bot.py

```python
import discord
from discord.ext import commands
from discord import app_commands
import requests

# IMPORTANTE: Reemplaza con el token real de tu bot (¡manténlo en secreto!)
TOKEN = "<your token here>"

# Esto recuerda qué idioma quiere cada usuario
user_languages = {}

# Permitir que el bot lea mensajes
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Bot está en línea como {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"Sincronizados {len(synced)} comandos.")
    except Exception as e:
        print(f"Error: {e}")

def detect_language(text):
    """Determina si el texto está en inglés o español."""
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
    """Traduce texto de un idioma a otro."""
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

@bot.tree.command(name="hello", description="¡Dice hola!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"¡Hola {interaction.user.display_name}!")

@bot.tree.command(name="register_language", description="Elige qué idioma hablas")
@app_commands.describe(language="¿A qué idioma quieres que se traduzcan los mensajes?")
@app_commands.choices(language=[
    app_commands.Choice(name="Yo hablo inglés", value="en"),
    app_commands.Choice(name="Yo hablo español", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "inglés" if language.value == "en" else "español"
    await interaction.response.send_message(
        f"¡Entendido! Hablas {lang_name}, así que traduciré los mensajes a {lang_name} para ti.",
        ephemeral=True
    )

@bot.tree.command(name="my_language", description="Ver qué idioma elegiste")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "inglés" if lang == "en" else "español"
        await interaction.response.send_message(f"Tu idioma: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("¡No has elegido un idioma aún! Usa /register_language", ephemeral=True)

@bot.tree.command(name="stop_translation", description="Deja de recibir traducciones automáticas")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("Ya no recibirás traducciones.", ephemeral=True)
    else:
        await interaction.response.send_message("¡No estabas recibiendo traducciones de todas formas!", ephemeral=True)

@bot.tree.command(name="translate", description="Traducir manualmente Inglés ↔ Español")
@app_commands.describe(
    phrase="¿Qué deseas traducir?",
    translate_to="inglés o español (por defecto: español)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    await interaction.response.defer(thinking=True)
    target = (translate_to or "español").lower()
    if target in ("español", "es"):
        from_lang, to_lang, label = "en", "es", "Español"
    elif target in ("inglés", "en"):
        from_lang, to_lang, label = "es", "en", "Inglés"
    else:
        await interaction.followup.send("Por favor, elige 'inglés' o 'español'")
        return
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("Falló la traducción. ¿Está funcionando el servidor?")

@bot.event
async def on_message(message):
    # Omitir mensajes del bot
    if message.author.bot:
        return
    # Omitir mensajes muy cortos
    if len(message.content.strip()) < 3:
        return
    # Omitir si nadie se ha registrado
    if not user_languages:
        return

    # Determinar el idioma
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Revisar cada usuario registrado
    for uid, preferred_lang in user_languages.items():
        # Omitir al autor del mensaje
        if uid == message.author.id:
            continue
        # Omitir si ya hablan este idioma
        if detected_lang == preferred_lang:
            continue

        # Traducir y enviar DM
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
                original_lang_name = "inglés" if detected_lang == "en" else "español"
                target_lang_name = "inglés" if preferred_lang == "en" else "español"
                dm_text = (
                    f"**Traducción** ({original_lang_name} -> {target_lang_name})\n"
                    f"**Original:** {message.content}\n"
                    f"**Traducción:** {translation}\n"
                    f"*De {message.author.display_name} en #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # Ignorar fallos al enviar DM

if not TOKEN:
    raise RuntimeError("Falta