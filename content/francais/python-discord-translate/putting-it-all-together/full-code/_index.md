```yaml
---
title: "Code Complet du Bot"
draft: false
weight: 5
---

Voici le fichier complet `bot.py` avec tout rassemblé ! Vous pouvez copier ce code complet pour faire fonctionner votre bot de traduction.

## Fichier Complet bot.py

```python
import discord
from discord.ext import commands
from discord import app_commands
import requests

# IMPORTANT : Remplacez par le vrai jeton de votre bot (gardez-le secret !)
TOKEN = "<your token here>"

# Ceci mémorise les langues des utilisateurs
user_languages = {}

# Permet au bot de lire les messages
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Le bot est en ligne en tant que {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"{len(synced)} commandes synchronisées.")
    except Exception as e:
        print(f"Erreur : {e}")

def detect_language(text):
    """Détermine si le texte est en anglais ou en espagnol."""
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
    """Traduit un texte d'une langue vers une autre."""
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

@bot.tree.command(name="hello", description="Dis bonjour !")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"Bonjour {interaction.user.display_name} !")

@bot.tree.command(name="register_language", description="Choisissez la langue que vous parlez")
@app_commands.describe(language="Dans quelle langue souhaitez-vous que les messages soient traduits ?")
@app_commands.choices(language=[
    app_commands.Choice(name="Je parle anglais", value="en"),
    app_commands.Choice(name="Je parle espagnol", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "anglais" if language.value == "en" else "espagnol"
    await interaction.response.send_message(
        f"Compris ! Vous parlez {lang_name}, je traduirai donc les messages en {lang_name} pour vous !",
        ephemeral=True
    )

@bot.tree.command(name="my_language", description="Voir la langue que vous avez choisie")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "anglais" if lang == "en" else "espagnol"
        await interaction.response.send_message(f"Votre langue : {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("Vous n'avez pas encore choisi de langue ! Utilisez /register_language", ephemeral=True)

@bot.tree.command(name="stop_translation", description="Arrêtez de recevoir des traductions automatiques")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("Vous ne recevrez plus de traductions.", ephemeral=True)
    else:
        await interaction.response.send_message("Vous ne receviez déjà aucune traduction !", ephemeral=True)

@bot.tree.command(name="translate", description="Traduisez manuellement anglais ↔ espagnol")
@app_commands.describe(
    phrase="Que voulez-vous traduire ?",
    translate_to="anglais ou espagnol (par défaut : espagnol)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    await interaction.response.defer(thinking=True)
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "Espagnol"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "Anglais"
    else:
        await interaction.followup.send("Veuillez choisir 'anglais' ou 'espagnol'")
        return
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label} : {result}")
    else:
        await interaction.followup.send("La traduction a échoué. Le serveur fonctionne-t-il ?")

@bot.event
async def on_message(message):
    # Ignore les messages du bot
    if message.author.bot:
        return
    # Ignore les messages très courts
    if len(message.content.strip()) < 3:
        return
    # Ignore si personne n'est inscrit
    if not user_languages:
        return

    # Détermine la langue
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Vérifie chaque utilisateur inscrit
    for uid, preferred_lang in user_languages.items():
        # Ignore l'auteur du message
        if uid == message.author.id:
            continue
        # Ignore si l'utilisateur parle déjà cette langue
        if detected_lang == preferred_lang:
            continue

        # Traduit et envoie un DM
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
                original_lang_name = "Anglais" if detected_lang == "en" else "Espagnol"
                target_lang_name = "Anglais" if preferred_lang == "en" else "Espagnol"
                dm_text = (
                    f"**Traduction** ({original_lang_name} -> {target_lang_name})\n"
                    f"**Original :** {message.content}\n"
                    f"**Traduction :** {translation}\n"
                    f"*De {message.author.display_name} dans #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # Ignore les erreurs de DM

if