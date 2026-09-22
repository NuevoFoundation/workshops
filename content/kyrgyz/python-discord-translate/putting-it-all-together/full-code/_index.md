---
title: "Толук Бот Код"
draft: false
weight: 5
---

Бул жерде баары толук бириктирилип жазылган `bot.py` файл! Өзүңүздүн котормо ботту иштетүү үчүн бул кодду толугу менен көчүрүп алыңыз.

## Толук bot.py Файлы

```python
import discord
from discord.ext import commands
from discord import app_commands
import requests

# МААНИЛҮҮ: Өзүңүздүн бот токенди жазыңыз (купуя сактаңыз!)
TOKEN = "<tokenиңиз бул жерге>"

# Бул ким кайсы тилди каалаларын эстеп калат
user_languages = {}

# Ботго билдирүүлөрдү окууга уруксат берүү
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Бот {bot.user} катары онлайн!")
    try:
        synced = await bot.tree.sync()
        print(f"{len(synced)} команда түзүлдү.")
    except Exception as e:
        print(f"Ката: {e}")

def detect_language(text):
    """Тексттин кайсы тилде экенин аныктайт."""
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
    """Текстти бир тилден экинчи тилге которуу."""
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

@bot.tree.command(name="hello", description="Салам айтат!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"Салам {interaction.user.display_name}!")

@bot.tree.command(name="register_language", description="Сиздин сүйлөгөн тилиңизди тандаңыз")
@app_commands.describe(language="Билдирүүлөрдү кайсы тилге которууну каалайсыз?")
@app_commands.choices(language=[
    app_commands.Choice(name="Мен Англисче сүйлөйм", value="en"),
    app_commands.Choice(name="Мен Испанча сүйлөйм", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "Англисче" if language.value == "en" else "Испанча"
    await interaction.response.send_message(
        f"Түшүндүм! Сиз {lang_name} сүйлөйт экенсиз. Демек, билдирүүлөрдү {lang_name} тилине котором!",
        ephemeral=True
    )

@bot.tree.command(name="my_language", description="Тандалган тилди текшериңиз")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "Англисче" if lang == "en" else "Испанча"
        await interaction.response.send_message(f"Сиздин тилиңиз: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("Сиз тил тандаган жоксуз! /register_language командасын колдонуңуз", ephemeral=True)

@bot.tree.command(name="stop_translation", description="Автоматтык которууларды токтотуңуз")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("Которууларды алууну токтоттуңуз.", ephemeral=True)
    else:
        await interaction.response.send_message("Сиз мурда которууларды алчу эмессиз!", ephemeral=True)

@bot.tree.command(name="translate", description="Англис ↔ Испанча тилдерди кол менен которуу")
@app_commands.describe(
    phrase="Которуу үчүн эмне керек?",
    translate_to="англис же испан (демейки: испан)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    await interaction.response.defer(thinking=True)
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "Испанча"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "Англисче"
    else:
        await interaction.followup.send("Сураныч, 'англис' же 'испан' тандаңыз")
        return
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("Которуу ишке ашкан жок. Сервер иштеп жатабы?")

@bot.event
async def on_message(message):
    # Бот билдирүүлөрдү өткөрүп жиберүү
    if message.author.bot:
        return
    # Өтө кыска билдирүүлөрдү өткөрүп жиберүү
    if len(message.content.strip()) < 3:
        return
    # Тилге катталган эч ким жок болсо өткөрүү
    if not user_languages:
        return

    # Тилди аныктоо
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Катталган колдонуучуларды текшерүү
    for uid, preferred_lang in user_languages.items():
        # Билдирүүнүн авторун өткөрүп жиберүү
        if uid == message.author.id:
            continue
        # Эгер алар ушул эле тилди сүйлөшсө өткөрүү
        if detected_lang == preferred_lang:
            continue

        # Которуу жана жеке билдирүү жиберүү
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
