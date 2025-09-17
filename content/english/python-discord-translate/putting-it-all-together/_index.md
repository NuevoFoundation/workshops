---
title: "Putting It All Together"
draft: false
weight: 4
---

Nuvi’s assistant bot is online and the local translator engine works. Now it’s time to fuse them: in this final section, we'll combine the local translation library with your Discord bot so messages can cross the language gap in Nuvi’s server.


---

## 1. Goal
Add a new slash command `/translate` that sends text to your local LibreTranslate server (running at `http://127.0.0.1:5000`) and replies with the translated result.

## 2. Prerequisites Checklist
Make sure you have these ready first:
- LibreTranslate server running (see Run LibreTranslate Locally) — ideally only English/Spanish loaded if you used `--load-only en,es`.
- Your bot working with `/hello`.
- `libretranslate` and `requests` installed in your environment (in `requirements.txt`).

## 3. Add Auto-Translation Features
Open your `bot.py` and add the new auto-translation functionality. Below your existing `/hello` command, add these helper functions and new commands:

```python
# Function to ask LibreTranslate: "What language is this text?"
def detect_language(text):
    try:
        # Send the text to our translation server to detect the language
        data = {"q": text}
        response = requests.post("http://127.0.0.1:5000/detect", json=data, timeout=5)
        result = response.json()
        
        # The server gives us back a list. We want the first (most likely) answer
        if result and len(result) > 0:
            language = result[0]["language"]
            # Only care about English (en) or Spanish (es)
            if language in ["en", "es"]:
                return language
        return None
    except:
        return None

# Function to translate text from one language to another
def translate_text(text, from_language, to_language):
    try:
        # Send translation request to our local server
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

# Command for users to pick their language
@bot.tree.command(name="register_language", description="Choose your language for auto-translation")
@app_commands.describe(language="Pick English or Spanish")
@app_commands.choices(language=[
    app_commands.Choice(name="English", value="en"),
    app_commands.Choice(name="Spanish", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    # Remember this user's language choice
    user_languages[interaction.user.id] = language.value
    
    # Tell them it worked
    lang_name = "English" if language.value == "en" else "Spanish"
    await interaction.response.send_message(
        f"✅ Got it! You'll get {lang_name} translations in your DMs!", 
        ephemeral=True
    )

# Command to check what language you picked
@bot.tree.command(name="my_language", description="See what language you chose")
async def my_language(interaction: discord.Interaction):
    user_id = interaction.user.id
    
    if user_id in user_languages:
        lang = user_languages[user_id]
        lang_name = "English" if lang == "en" else "Spanish"
        await interaction.response.send_message(f"Your language: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("You haven't picked a language yet! Use /register_language", ephemeral=True)

# Command to stop getting translations
@bot.tree.command(name="stop_translation", description="Stop getting auto-translations")
async def stop_translation(interaction: discord.Interaction):
    user_id = interaction.user.id
    
    if user_id in user_languages:
        del user_languages[user_id]  # Remove them from our notebook
        await interaction.response.send_message("✅ You won't get translations anymore.", ephemeral=True)
    else:
        await interaction.response.send_message("You weren't getting translations anyway!", ephemeral=True)

# This runs every time someone sends a message
@bot.event
async def on_message(message):
    # Don't respond to other bots (including ourselves!)
    if message.author.bot:
        return
    
    # Ignore very short messages
    if len(message.content.strip()) < 3:
        return
    
    # If nobody signed up for translations, don't bother
    if not user_languages:
        return
    
    # What language is this message?
    detected_lang = detect_language(message.content)
    
    # We only handle English and Spanish
    if detected_lang not in ["en", "es"]:
        return
    
    # Check each person who signed up for translations
    for user_id, preferred_lang in user_languages.items():
        # Don't translate for the person who wrote the message
        if user_id == message.author.id:
            continue
        
        # Don't translate if the message is already in their language
        if detected_lang == preferred_lang:
            continue
        
        # Translate the message to their preferred language
        translation = translate_text(message.content, detected_lang, preferred_lang)
        
        if translation:
            # Send them a private message with the translation
            user = bot.get_user(user_id)
            if user:
                try:
                    # Create a nice-looking message
                    original_lang_name = "English" if detected_lang == "en" else "Spanish"
                    target_lang_name = "English" if preferred_lang == "en" else "Spanish"
                    
                    message_to_send = f"🌐 **Translation** ({original_lang_name} → {target_lang_name})\n"
                    message_to_send += f"**Original:** {message.content}\n"
                    message_to_send += f"**Translation:** {translation}\n"
                    message_to_send += f"*From {message.author.display_name} in #{message.channel.name}*"
                    
                    await user.send(message_to_send)
                except:
                    # If we can't send a DM, just skip this user
                    pass
```

## 4. Full Example 
Here is what the complete `bot.py` file looks like with auto-translation:
```python
import discord
from discord.ext import commands
from discord import app_commands
import requests

TOKEN = "<your token here>"

# This is where we remember which language each user wants
# It's like a notebook: user_languages[user_id] = "en" or "es"
user_languages = {}

# Tell Discord our bot needs to read messages (not just commands)
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

# Function to ask LibreTranslate: "What language is this text?"
def detect_language(text):
    try:
        # Send the text to our translation server to detect the language
        data = {"q": text}
        response = requests.post("http://127.0.0.1:5000/detect", json=data, timeout=5)
        result = response.json()
        
        # The server gives us back a list. We want the first (most likely) answer
        if result and len(result) > 0:
            language = result[0]["language"]
            # Only care about English (en) or Spanish (es)
            if language in ["en", "es"]:
                return language
        return None
    except:
        return None

# Function to translate text from one language to another
def translate_text(text, from_language, to_language):
    try:
        # Send translation request to our local server
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

# Keep the original hello command
@bot.tree.command(name="hello", description="Says hello!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"Hello {interaction.user.display_name}!")

# Command for users to pick their language
@bot.tree.command(name="register_language", description="Choose your language for auto-translation")
@app_commands.describe(language="Pick English or Spanish")
@app_commands.choices(language=[
    app_commands.Choice(name="English", value="en"),
    app_commands.Choice(name="Spanish", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    # Remember this user's language choice
    user_languages[interaction.user.id] = language.value
    
    # Tell them it worked
    lang_name = "English" if language.value == "en" else "Spanish"
    await interaction.response.send_message(
        f"✅ Got it! You'll get {lang_name} translations in your DMs!", 
        ephemeral=True
    )

# Command to check what language you picked
@bot.tree.command(name="my_language", description="See what language you chose")
async def my_language(interaction: discord.Interaction):
    user_id = interaction.user.id
    
    if user_id in user_languages:
        lang = user_languages[user_id]
        lang_name = "English" if lang == "en" else "Spanish"
        await interaction.response.send_message(f"Your language: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("You haven't picked a language yet! Use /register_language", ephemeral=True)

# Command to stop getting translations
@bot.tree.command(name="stop_translation", description="Stop getting auto-translations")
async def stop_translation(interaction: discord.Interaction):
    user_id = interaction.user.id
    
    if user_id in user_languages:
        del user_languages[user_id]  # Remove them from our notebook
        await interaction.response.send_message("✅ You won't get translations anymore.", ephemeral=True)
    else:
        await interaction.response.send_message("You weren't getting translations anyway!", ephemeral=True)

# Keep the original manual translate command
@bot.tree.command(name="translate", description="Manually translate English ↔ Spanish")
@app_commands.describe(
    phrase="What do you want to translate?",
    translate_to="english or spanish (default: spanish)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    await interaction.response.defer(thinking=True)

    # Figure out what language to translate to
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang = "en", "es"
        label = "Spanish"
    elif target in ("english", "en"):
        from_lang, to_lang = "es", "en"
        label = "English"
    else:
        await interaction.followup.send("Please choose 'english' or 'spanish'")
        return

    # Do the translation
    result = translate_text(phrase, from_lang, to_lang)
    
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("Translation failed. Is the server running?")

# This runs every time someone sends a message
@bot.event
async def on_message(message):
    # Don't respond to other bots (including ourselves!)
    if message.author.bot:
        return
    
    # Ignore very short messages
    if len(message.content.strip()) < 3:
        return
    
    # If nobody signed up for translations, don't bother
    if not user_languages:
        return
    
    # What language is this message?
    detected_lang = detect_language(message.content)
    
    # We only handle English and Spanish
    if detected_lang not in ["en", "es"]:
        return
    
    # Check each person who signed up for translations
    for user_id, preferred_lang in user_languages.items():
        # Don't translate for the person who wrote the message
        if user_id == message.author.id:
            continue
        
        # Don't translate if the message is already in their language
        if detected_lang == preferred_lang:
            continue
        
        # Translate the message to their preferred language
        translation = translate_text(message.content, detected_lang, preferred_lang)
        
        if translation:
            # Send them a private message with the translation
            user = bot.get_user(user_id)
            if user:
                try:
                    # Create a nice-looking message
                    original_lang_name = "English" if detected_lang == "en" else "Spanish"
                    target_lang_name = "English" if preferred_lang == "en" else "Spanish"
                    
                    message_to_send = f"🌐 **Translation** ({original_lang_name} → {target_lang_name})\n"
                    message_to_send += f"**Original:** {message.content}\n"
                    message_to_send += f"**Translation:** {translation}\n"
                    message_to_send += f"*From {message.author.display_name} in #{message.channel.name}*"
                    
                    await user.send(message_to_send)
                except:
                    # If we can't send a DM, just skip this user
                    pass

if not TOKEN:
    raise RuntimeError("Missing bot token")

bot.run(TOKEN)
```

## 5. How It Works
| Piece | What it means  |
|-------|--------------------------------|
| `translate_to` option | Lets the user choose direction: default Spanish (en→es) or English (es→en). |
| Normalizing input | `(translate_to or "spanish").strip().lower()` handles missing input and case differences. |
| Language mapping | We decide `source_lang` and `target_lang` depending on the user’s choice. |
| Validation branch | If user types something else (e.g. `german`), we send a helpful error and return. |
| `requests.post(...)` | Sends your text to the local translation server’s `/translate` endpoint. |
| `json=payload` | Tells `requests` to send the Python data as JSON (the format the server expects). |
| `await interaction.response.defer()` | Gives you extra time so Discord doesn’t think the bot froze. |
| `interaction.followup.send(...)` | Sends the final message after the translation is ready. |
| `resp.raise_for_status()` | Throws an error if the server replied with an HTTP error (like 404 or 500). |
| `data.get("translatedText")` | Safely reads the translated string from the JSON response. |
| `timeout=` | Stops the request from hanging forever if the server doesn’t answer. |

## 6. Test the Command
1. Type `/translate`
2. In the first box (phrase) type your text. Leave the second box empty to translate to Spanish, or set it to `english` to reverse.

{{< alert theme="info" >}}
<img src="../media/NF_mascot.jpg" alt="Nuvi mascot" width="70" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi tip:</strong> When using a slash command you *don’t* have to type `phrase:` yourself. Discord pops up boxes (fields) for you.
{{< /alert >}}

Now try these (the lines below show how Discord might display them after you submit— you only typed in the fields):

1. Default English → Spanish: `/translate Hello world` → `Spanish: ¡Hola Mundo!`
2. Spanish → English: `/translate Buenos dias translate-to:english` → `English: Good morning`
3. Another default: `/translate How are you today?`
4. Case doesn’t matter: `/translate hola translate-to:ENGLISH`
5. Invalid option test: `/translate test translate-to:french` → Bot replies with the validation message.

If you *do* type the parameter label manually (e.g. `phrase:Hello world`) it still works, but it’s not required.


## 7. Common Issues
| Problem | Fix |
|---------|-----|
| Slash command not updated | Wait a minute or restart the bot so commands resync. |
| Always says translation failed | Check server running & URL correct (`127.0.0.1:5000`). |
| Invalid translate-to value | Only `english` or `spanish` are accepted (case-insensitive). You’ll get a helpful error if not. |
| Direction seems backwards | Remember: default is English → Spanish. Add `translate-to:english` to reverse. |
| Getting repeated failures | Try a shorter phrase first—long inputs highlight latency or timeout issues. |
| Empty translation | Ensure you used `q`, `source`, `target`, `format` keys; server might not have that language model. |

{{< alert theme="success" >}}
<img src="../media/NF_mascot.jpg" alt="Nuvi mascot" width="80" style="float:right;margin:0 0 8px 12px;" />
You now have a working translation pipeline: Discord → Your Bot → Local API → Discord. Nuvi’s friends can finally read each other’s messages—mission accomplished! From here you can expand to more languages, or even try auto-detecting the source language!
{{< /alert >}}
