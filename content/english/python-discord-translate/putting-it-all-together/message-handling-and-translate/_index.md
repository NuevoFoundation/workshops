---
title: "Message Handling & Translate Command"
draft: false
weight: 4
---

This is where the magic happens! The bot watches every message and automatically translates for people who need it. Plus, there's a backup `/translate` command.

## Let the Bot Read Messages

First, we need permission to read messages:

```python
# Tell Discord we want to read messages
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)
```

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70" style="float:right;margin:0 0 6px 10px;" />
<strong>Super Important:</strong> You MUST turn on "Message Content Intent" in the Discord Developer Portal for your bot. Otherwise it can't read messages!
{{< /alert >}}

## The Auto-Translation Code

This runs every time someone sends a message:

```python
@bot.event
async def on_message(message):
    # Don't translate bot messages
    if message.author.bot:
        return
    
    # Skip super short messages (less than 3 letters)
    if len(message.content.strip()) < 3:
        return
    
    # If nobody signed up, don't bother
    if not user_languages:
        return

    # Figure out what language this message is
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Check each person who signed up
    for uid, preferred_lang in user_languages.items():
        # Don't send people their own messages
        if uid == message.author.id:
            continue
        
        # Skip if they already speak this language
        if detected_lang == preferred_lang:
            continue

        # Translate it!
        translation = translate_text(message.content, detected_lang, preferred_lang)
        if translation:
            # Find the user
            user = bot.get_user(uid)
            if user is None:
                try:
                    user = await bot.fetch_user(uid)
                except:
                    continue
            if not user:
                continue
            
            # Send them a DM
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
                pass  # If DM fails, just skip it
```

### What It Does Step by Step

1. **Filter out junk**:
   - Skip bot messages (no infinite loops!)
   - Skip tiny messages (like "ok" or "hi")
   - Skip if nobody signed up

2. **Check the language**:
   - Use `detect_language()` to figure it out
   - Only continue if it's English or Spanish

3. **Loop through users**:
   - Check each person who signed up
   - Skip the person who sent the message
   - Skip people who already speak that language

4. **Send translations**:
   - Translate to their preferred language
   - Find them on Discord
   - Send them a nice DM with the translation

## The Manual `/translate` Command

Sometimes you just want to translate something quickly:

```python
@bot.tree.command(name="translate", description="Manually translate English ↔ Spanish")
@app_commands.describe(
    phrase="What do you want to translate?",
    translate_to="english or spanish (default: spanish)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    # Show "thinking..." while we work
    await interaction.response.defer(thinking=True)
    
    # Figure out which way to translate
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "Spanish"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "English"
    else:
        await interaction.followup.send("Please choose 'english' or 'spanish'")
        return
    
    # Do the translation
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("Translation failed. Is the server running?")
```

### Cool Features

- **Works both ways**: English -> Spanish or Spanish -> English
- **Smart default**: If you don't say, it assumes Spanish
- **Shows "thinking"**: So you know it's working
- **Helpful errors**: Tells you what went wrong

## What the DM Looks Like

When someone writes "¡Buenos días amigos!", English speakers get this DM:

```
**Translation** (Spanish -> English)
**Original:** ¡Buenos días amigos!
**Translation:** Good morning friends!
*From UserName in #general*
```

## Testing Everything

### Test Auto-Translation
1. Person A: `/register_language` -> picks Spanish
2. Person B: `/register_language` -> picks English
3. Person A types: "Hello everyone!"
   - Person B gets a Spanish translation in DMs
4. Person B types: "¡Gracias!"
   - Person A gets an English translation in DMs

### Test Manual Translation
```
/translate phrase:"Hello world"
-> Spanish: ¡Hola Mundo!

/translate phrase:"Buenos dias" translate_to:english
-> English: Good morning

/translate phrase:"How are you?"
-> Spanish: ¿Cómo estás?
```

## Speed Tips

| Thing | Why It's Fast |
|-------|---------------|
| Skip short messages | Less work for the bot |
| Only translate for signed-up users | Not wasting time |
| Ignore DM failures | Doesn't slow down for one person |
| Cache users | Remembers people instead of looking them up |

## Common Problems

| What's Wrong | Why | How to Fix |
|--------------|-----|------------|
| No auto-translation | Message Content intent is off | Turn it on in Developer Portal |
| No DMs arriving | User has DMs disabled | They need to allow server DMs |
| Slow translations | Server is busy | Be patient or restart LibreTranslate |
| Bot translates itself | Missing bot check | Make sure the bot check is there |

{{< alert theme="success" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70" style="float:right;margin:0 0 6px 10px;" />
<strong>You did it!</strong> Now Nuvi's friends can chat in different languages and everyone understands each other!
{{< /alert >}}
