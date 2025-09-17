---
title: "Full Bot Code"
draft: false
weight: 5
---

Here's the complete `bot.py` file with everything put together! You can copy this entire code to get your translation bot working.

## Complete bot.py File

```python
import discord
from discord.ext import commands
from discord import app_commands
import requests

# IMPORTANT: Replace with your actual bot token (keep it secret!)
TOKEN = "<your token here>"

# This remembers who wants what language
user_languages = {}

# Let the bot read messages
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Bot is online as {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"Synced {len(synced)} commands.")
    except Exception as e:
        print(f"Error: {e}")

def detect_language(text):
    """Figure out if text is English or Spanish."""
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
    """Translate text from one language to another."""
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

@bot.tree.command(name="hello", description="Says hello!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"Hello {interaction.user.display_name}!")

@bot.tree.command(name="register_language", description="Choose what language you speak")
@app_commands.describe(language="What language do you want messages translated TO?")
@app_commands.choices(language=[
    app_commands.Choice(name="I speak English", value="en"),
    app_commands.Choice(name="I speak Spanish", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "English" if language.value == "en" else "Spanish"
    await interaction.response.send_message(
        f"Got it! You speak {lang_name}, so I'll translate messages into {lang_name} for you!",
        ephemeral=True
    )

@bot.tree.command(name="my_language", description="See what language you chose")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "English" if lang == "en" else "Spanish"
        await interaction.response.send_message(f"Your language: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("You haven't picked a language yet! Use /register_language", ephemeral=True)

@bot.tree.command(name="stop_translation", description="Stop getting auto-translations")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("You won't get translations anymore.", ephemeral=True)
    else:
        await interaction.response.send_message("You weren't getting translations anyway!", ephemeral=True)

@bot.tree.command(name="translate", description="Manually translate English ↔ Spanish")
@app_commands.describe(
    phrase="What do you want to translate?",
    translate_to="english or spanish (default: spanish)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    await interaction.response.defer(thinking=True)
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "Spanish"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "English"
    else:
        await interaction.followup.send("Please choose 'english' or 'spanish'")
        return
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("Translation failed. Is the server running?")

@bot.event
async def on_message(message):
    # Skip bot messages
    if message.author.bot:
        return
    # Skip super short messages
    if len(message.content.strip()) < 3:
        return
    # Skip if nobody signed up
    if not user_languages:
        return

    # Figure out the language
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Check each signed-up user
    for uid, preferred_lang in user_languages.items():
        # Skip the message author
        if uid == message.author.id:
            continue
        # Skip if they already speak this language
        if detected_lang == preferred_lang:
            continue

        # Translate and send DM
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
                original_lang_name = "English" if detected_lang == "en" else "Spanish"
                target_lang_name = "English" if preferred_lang == "en" else "Spanish"
                dm_text = (
                    f"**Translation** ({original_lang_name} -> {target_lang_name})\n"
                    f"**Original:** {message.content}\n"
                    f"**Translation:** {translation}\n"
                    f"*From {message.author.display_name} in #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # Ignore DM failures

if not TOKEN:
    raise RuntimeError("Missing bot token")

bot.run(TOKEN)
```

## What Each Section Does

| Lines | What It Does |
|-------|--------------|
| 1-5 | Import the stuff we need |
| 7-8 | Token and user storage |
| 10-13 | Set up the bot with message reading |
| 15-22 | Bot startup code |
| 24-38 | `detect_language()` function |
| 40-53 | `translate_text()` function |
| 55-57 | `/hello` command |
| 59-70 | `/register_language` command |
| 72-80 | `/my_language` command |
| 82-90 | `/stop_translation` command |
| 92-110 | `/translate` manual command |
| 112-156 | `on_message` auto-translation |
| 158-161 | Start the bot |

## Before You Run This

Make sure you have:
1. Your bot token from Discord (replace `<your token here>`)
2. LibreTranslate running (`libretranslate --load-only en,es`)
3. Message Content Intent enabled in Discord Developer Portal
4. `discord.py` and `requests` installed

## Commands Your Bot Will Have

- `/hello` - Test if the bot works
- `/register_language` - Sign up for translations
- `/my_language` - Check your settings
- `/stop_translation` - Stop getting translations
- `/translate` - Manually translate something

## Testing Checklist

After running your bot:
- [ ] Type `/hello` - Bot should respond
- [ ] Use `/register_language` to pick a language
- [ ] Have a friend pick the other language
- [ ] Send messages and check for DM translations
- [ ] Try `/translate phrase:"test"`
- [ ] Test `/stop_translation` to opt out

{{< alert theme="success" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="80" style="float:right;margin:0 0 8px 12px;" />
<strong>Congratulations!</strong> You've built a complete translation bot! Nuvi and friends can now chat across language barriers!
{{< /alert >}}
