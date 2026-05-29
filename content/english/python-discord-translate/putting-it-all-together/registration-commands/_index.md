---
title: "Registration Commands"
draft: false
weight: 3
---

These commands let users sign up for auto-translation, check their settings, and stop getting translations.

## Keeping Track of Users

The bot remembers who wants what language using a simple dictionary:

```python
# This stores: user_id -> their preferred language ("en" or "es")
user_languages = {}
```

Think of it like a sign-up sheet where each person writes their name and preferred language!

## `/register_language` Command

This command lets users pick the language they speak (what language they want to receive):

```python
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
```

### What's Cool About It
- **Clear choices**: "I speak English" or "I speak Spanish" - no confusion!
- **Private response**: Only they see the confirmation message
- **Remembers them**: Saves what language they understand

## `/my_language` Command

This shows users what language they picked:

```python
@bot.tree.command(name="my_language", description="See what language you chose")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "English" if lang == "en" else "Spanish"
        await interaction.response.send_message(f"Your language: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("You haven't picked a language yet! Use /register_language", ephemeral=True)
```

### What It Does
- **Shows their setting**: Tells them what language they chose
- **Helpful reminder**: If they haven't signed up, tells them how

## `/stop_translation` Command

This lets users quit getting translations:

```python
@bot.tree.command(name="stop_translation", description="Stop getting auto-translations")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("You won't get translations anymore.", ephemeral=True)
    else:
        await interaction.response.send_message("You weren't getting translations anyway!", ephemeral=True)
```

### What Happens
- **Removes them from the list**: Deletes their entry
- **Confirms it worked**: Shows a checkmark message
- **Friendly response**: Even if they weren't signed up

## How It All Works Together

1. **Start**: Nobody is signed up
2. **Sign up**: `/register_language` adds them to the list
3. **Get translations**: The bot checks the list to see who needs what
4. **Check status**: `/my_language` shows their choice
5. **Quit**: `/stop_translation` removes them

## Example: Two Friends Sign Up

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi tip:</strong> Here's how Maria and John would use the system:
{{< /alert >}}

1. **Maria** (speaks Spanish) types: `/register_language` and picks "I speak Spanish"
   - Now she'll get English messages translated to Spanish for her
   
2. **John** (speaks English) types: `/register_language` and picks "I speak English"
   - Now he'll get Spanish messages translated to English for him

3. **Maria** checks: `/my_language`
   - Bot says: "Your language: Spanish"
   
4. **John** decides to stop: `/stop_translation`
   - Bot says: "✅ You won't get translations anymore."

## Good to Know

- **Private messages**: All responses are private (only you see them)
- **Resets when bot restarts**: The list is only in memory, not saved to a file
- **Easy to change**: Just run `/register_language` again with a new choice
- **No spam**: Only people who sign up get translations

## Fixing Problems

| Problem | Solution |
|---------|----------|
| Settings disappeared | The bot probably restarted - sign up again |
| Want to change language | Just run `/register_language` again |
| Not getting translations | Check with `/my_language` to see if you're signed up |
| Can't get DMs | Check your Discord privacy settings |

---
