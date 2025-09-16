---
title: "Putting It All Together"
draft: false
weight: 4
---

## Overview

In this final section, we'll combine the local translation library with your Discord bot to add the translation to your Discord server!

<details open>
<summary>Topics</summary>
{{% children /%}}
</details>

---

## 1. Goal
Add a new slash command `/translate` that sends text to your local LibreTranslate server (running at `http://127.0.0.1:5000`) and replies with the translated result.

## 2. Prerequisites Checklist
Make sure you have these ready first:
- LibreTranslate server running (see Run LibreTranslate Locally) — ideally only English/Spanish loaded if you used `--load-only en,es`.
- Your bot working with `/hello`.
- `libretranslate` and `requests` installed in your environment (in `requirements.txt`).

## 3. Add a Translate Command
Open your `bot.py` and add the following imports near the top (keep existing ones):
```python
import requests
```

Then, below your existing `/hello` command, add:
```python
from discord import app_commands  # add near top if not already imported

@bot.tree.command(name="translate", description="Translate English ↔ Spanish")
@app_commands.describe(
    phrase="The words you want translated",
    translate_to="Type english or spanish (defaults to spanish)"
)
async def translate_command(
    interaction: discord.Interaction,
    phrase: str,
    translate_to: str | None = None
):
    await interaction.response.defer(thinking=True)  # Lets Discord know we're working

    # Decide direction. Default is English -> Spanish.
    target_choice = (translate_to or "spanish").strip().lower()
    if target_choice in ("spanish", "es"):
        source_lang, target_lang = "en", "es"
        label = "Spanish"
    elif target_choice in ("english", "en"):
        source_lang, target_lang = "es", "en"
        label = "English"
    else:
        await interaction.followup.send("translate-to must be 'english' or 'spanish'.")
        return

    payload = {
        "q": phrase,
        "source": source_lang,
        "target": target_lang,
        "format": "text"
    }

    try:
        resp = requests.post("http://127.0.0.1:5000/translate", json=payload, timeout=45)
        resp.raise_for_status()
        data = resp.json()
        translated = data.get("translatedText", "<no translation returned>")
        await interaction.followup.send(f"{label}: {translated}")
    except requests.exceptions.RequestException as e:
        await interaction.followup.send("Translation failed (server offline?).")
        print(f"Translation error: {e}")
```

## 4. Full Example 
Here is what `bot.py` might look like now
```python
import discord
from discord.ext import commands
import requests

TOKEN = "<your token here>"

bot = commands.Bot(command_prefix="!", intents=discord.Intents.default())

@bot.event
async def on_ready():
	print(f"Logged in as {bot.user} (ID: {bot.user.id})")
	print("Syncing commands...")
	try:
		synced = await bot.tree.sync()
		print(f"Synced {len(synced)} command(s).")
	except Exception as e:
		print(f"Sync error: {e}")

@bot.tree.command(name="hello", description="Says hello!")
async def hello_command(interaction: discord.Interaction):
	await interaction.response.send_message(f"Hello {interaction.user.display_name}!")

from discord import app_commands

@bot.tree.command(name="translate", description="Translate English ↔ Spanish")
@app_commands.describe(
    phrase="The words you want translated",
    translate_to="Type english or spanish (defaults to spanish)"
)
async def translate_command(
    interaction: discord.Interaction,
    phrase: str,
    translate_to: str | None = None
):
    await interaction.response.defer(thinking=True)

    # Default direction is English -> Spanish.
    target_choice = (translate_to or "spanish").strip().lower()
    if target_choice in ("spanish", "es"):
        source_lang, target_lang = "en", "es"
        label = "Spanish"
    elif target_choice in ("english", "en"):
        source_lang, target_lang = "es", "en"
        label = "English"
    else:
        await interaction.followup.send("translate-to must be 'english' or 'spanish'.")
        return

    payload = {"q": phrase, "source": source_lang, "target": target_lang, "format": "text"}
    try:
        resp = requests.post("http://127.0.0.1:5000/translate", json=payload, timeout=10)
        resp.raise_for_status()
        data = resp.json()
        translated = data.get("translatedText", "<no translation>")
        await interaction.followup.send(f"{label}: {translated}")
    except requests.exceptions.RequestException:
        await interaction.followup.send("Translation failed. Is the server running?")

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
Quick note: When using a slash command you *don’t* have to type `phrase:` yourself. Discord pops up boxes (fields). Just:
1. Type `/translate`
2. In the first box (phrase) type your text. Leave the second box empty to translate to Spanish, or set it to `english` to reverse.

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
| Empty translation | Ensure you used `q`, `source`, `target`, `format` keys; server might not have that language model. |

## 8. Extension Ideas
- Support more languages (add them to server with `--load-only en,es,fr,de` and extend the mapping list).
- Auto-detect source language (call LibreTranslate `/detect` endpoint first, then translate).
- Cache recent translations to reduce duplicate requests.
- Add ephemeral error details only visible to the user who ran the command.
- Rate limit or cooldown to prevent spam.
- Add a `/languages` command to list what your server loaded.

You now have a working translation pipeline: Discord → Your Bot → Local API → Discord. Great job!
