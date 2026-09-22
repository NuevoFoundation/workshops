---
title: "Código Completo do Bot"
draft: false
weight: 5
---

Aqui está o arquivo completo `bot.py` com tudo junto! Você pode copiar todo esse código para fazer seu bot de tradução funcionar.

## Arquivo Completo bot.py

```python
import discord
from discord.ext import commands
from discord import app_commands
import requests

# IMPORTANTE: Substitua pelo seu token real do bot (mantenha-o em segredo!)
TOKEN = "<your token here>"

# Isso guarda quem quer qual idioma
user_languages = {}

# Permite que o bot leia mensagens
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Bot está online como {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"Sincronizados {len(synced)} comandos.")
    except Exception as e:
        print(f"Erro: {e}")

def detect_language(text):
    """Descobrir se o texto está em inglês ou espanhol."""
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
    """Traduzir texto de um idioma para outro."""
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

@bot.tree.command(name="hello", description="Diz olá!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"Olá {interaction.user.display_name}!")

@bot.tree.command(name="register_language", description="Escolha o idioma que você fala")
@app_commands.describe(language="Qual idioma você quer que as mensagens sejam traduzidas PARA?")
@app_commands.choices(language=[
    app_commands.Choice(name="Eu falo inglês", value="en"),
    app_commands.Choice(name="Eu falo espanhol", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "Inglês" if language.value == "en" else "Espanhol"
    await interaction.response.send_message(
        f"Entendido! Você fala {lang_name}, então vou traduzir mensagens para o {lang_name} para você!",
        ephemeral=True
    )

@bot.tree.command(name="my_language", description="Veja qual idioma você escolheu")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "Inglês" if lang == "en" else "Espanhol"
        await interaction.response.send_message(f"Seu idioma: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("Você ainda não escolheu um idioma! Use /register_language", ephemeral=True)

@bot.tree.command(name="stop_translation", description="Pare de receber traduções automáticas")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("Você não receberá mais traduções.", ephemeral=True)
    else:
        await interaction.response.send_message("Você já não estava recebendo traduções!", ephemeral=True)

@bot.tree.command(name="translate", description="Traduza manualmente Inglês ↔ Espanhol")
@app_commands.describe(
    phrase="O que você quer traduzir?",
    translate_to="inglês ou espanhol (padrão: espanhol)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    await interaction.response.defer(thinking=True)
    target = (translate_to or "espanhol").lower()
    if target in ("espanhol", "es"):
        from_lang, to_lang, label = "en", "es", "Espanhol"
    elif target in ("inglês", "en"):
        from_lang, to_lang, label = "es", "en", "Inglês"
    else:
        await interaction.followup.send("Por favor, escolha 'inglês' ou 'espanhol'")
        return
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("A tradução falhou. O servidor está ativo?")

@bot.event
async def on_message(message):
    # Ignorar mensagens do bot
    if message.author.bot:
        return
    # Ignorar mensagens muito curtas
    if len(message.content.strip()) < 3:
        return
    # Ignorar se ninguém se registrou
    if not user_languages:
        return

    # Descobrir o idioma
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Verificar cada usuário registrado
    for uid, preferred_lang in user_languages.items():
        # Ignorar o autor da mensagem
        if uid == message.author.id:
            continue
        # Ignorar se eles já falam esse idioma
        if detected_lang == preferred_lang:
            continue

        # Traduzir e enviar DM
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
                original_lang_name = "Inglês" if detected_lang == "en" else "Espanhol"
                target_lang_name = "Inglês" if preferred_lang == "en" else "Espanhol"
                dm_text = (
                    f"**Tradução** ({original_lang_name} -> {target_lang_name})\n"
                    f"**Original:** {message.content}\n"
                    f"**Tradução:** {translation}\n"
                    f"*De {message.author.display_name} no canal #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # Ignorar falhas de DM

if not TOKEN:
    raise RuntimeError("F