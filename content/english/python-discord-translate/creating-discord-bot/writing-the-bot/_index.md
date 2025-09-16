---
title: "Writing a simple bot"
draft: false
weight: 2
---

## Overview
Now that your project folder, virtual environment, and starter file are set up, you’re ready to build a simple Discord bot. In this part, you will:
1. Add `discord.py` to `requirements.txt` and install it using the VS Code Python extension (UI only — no terminal typing required)
2. Add your bot token safely using a `.env` file
3. Write a basic bot that responds to a slash command `/hello`
4. Run and test the bot

---

## 1. Add and Install the discord.py Library (Using requirements.txt + VS Code UI)
We’ll declare the dependency first, then let VS Code install it into your virtual environment.

### 1.A Add it to requirements.txt
1. Open `requirements.txt` in your project.
2. Add this line (the file can just contain this for now):
```
discord.py
```
3. Save the file

### 1.B Install via the Environment Manager UI
1. Open the Python extension view (Python icon in the Activity Bar) and confirm the correct environment (e.g. `.venv`) is selected.
1. Select the "Packages" icon (it looks like a box) which will show a dropdown. Now select "Install project dependencies"
![Install project dependencies](../../media/dependencies.png)
1. Click the checkbox for "requirements.txt" and click "Ok"
![Select requirements.txt](../../media/requirements.png)
1. Wait until `discord.py` appears in the installed packages list.
![discord.py installed](../../media/discord-installed.png)




## 2. Create / Update the .env File (Add Token)
Your bot needs a secret Token from the Discord Developer Portal.

1. Go to https://discord.com/developers/applications
2. Open your application, go to the “Bot” tab, and copy the **Bot Token** (you may need to click *Reset Token* if none is visible). Treat it like a password.
3. In your project folder (where `bot.py` lives), create a file named `.env` if you don’t already have one.
4. Add this line (replace YOUR_TOKEN_HERE with the token you copied):
```
DISCORD_BOT_TOKEN=YOUR_TOKEN_HERE
```

The `.env` file should NOT be shared or uploaded publicly.


## 3. Write the Bot Code
Open `bot.py` and replace any placeholder code with the following:
```python
import discord
from discord.ext import commands

TOKEN = "<your token here>"

bot = commands.Bot(command_prefix="!", intents=discord.Intents.default())

@bot.event
async def on_ready():
	print(f"Logged in as {bot.user} (ID: {bot.user.id})")
	print("Slash commands syncing (this can take up to a minute the first time)...")
	try:
		synced = await bot.tree.sync()
		print(f"Synced {len(synced)} application command(s).")
	except Exception as e:
		print(f"Error syncing commands: {e}")

@bot.tree.command(name="hello", description="Says hello!")
async def hello_command(interaction: discord.Interaction):
	user_name = interaction.user.display_name
	await interaction.response.send_message(f"Hello {user_name}!")

if not TOKEN:
	raise RuntimeError("DISCORD_BOT_TOKEN is missing. Did you put it in the .env file?")

bot.run(TOKEN)
```

### What this does:
- Imports a *library* (`discord.py`). A library is pre-written code that gives you powerful features (like talking to Discord) without you writing everything from scratch.
- Creates and starts the bot connection to Discord’s servers.
- Defines (registers) a slash command `/hello` so Discord knows it exists in your server.
- Waits for a user to run `/hello` and then replies with a personal greeting.
- Includes a safety check so the bot won’t run if the token (bot password) is missing.

<details>
<summary><strong>-> Advanced details (click to expand if you'd like to learn about more of the advanced concepts used here. Totally optional!)</strong></summary>

**async / await**: These keywords let Python run other tasks while waiting (for example, for Discord to reply) so your bot doesn’t freeze.

**Event (@bot.event)**: Decorators like `@bot.event` tell the library “run this function when a specific event happens” (here: when the bot is ready).

**Slash commands (`@bot.tree.command`)**: These create modern commands that appear when users type `/` in Discord. They’re registered with Discord’s servers and may take a short time to sync.

**Interaction**: Represents a user using a slash command. `interaction.user` gives you the person, and `interaction.response.send_message(...)` sends a reply.

**Bot vs Client**: `commands.Bot` adds helpful command features (like command trees) on top of the lower-level Discord client.

**Intents**: Permissions telling Discord what data you want (messages, members, etc.). Using fewer keeps your bot simpler and safer.

**Exceptions (try / except)**: The `try:` block runs code that might fail; `except Exception as e:` catches errors so your bot can log them instead of crashing.

</details>

{{< alert theme="danger" >}}**Beware !** putting your BOT_TOKEN directly in the code is not advised in normal circumstances, this is just for workshop simplification. Normally should use environment variables or a config file.{{< /alert >}}

---

## 4. Run the Bot
1. Open `bot.py` in the editor.
2. Open the Run & Debug view (play icon with a bug).
3. If asked to select a configuration, choose `Python File`.
4. Click the green Run/Debug button.
5. Watch the Debug Console / Terminal for:
```
Logged in as <your bot name>
Synced X application command(s).

```
![Output in terminal](../../media/running.png)

---

## 5. Test the /hello Command in Discord
1. Invite your bot to a server where you have permissions (you can generate an OAuth2 URL from the Developer Portal under "OAuth2 → URL Generator" with the `bot` and `applications.commands` scopes, as well as the `Send Messages` text permission).
![Invite bot with correct scopes](../../media/urlgen.png)
![Bot invite link](../../media/bot-perms.png)
![Bot in member list](../../media/url.png).
1. Copy the url and paste it into your browser. That should open a Discord page asking you to select a server to invite the bot to. Select your test server.
![Invite bot to server](../../media/allow.png)
1. Make sure the bot is running, you should see it online in the member list.
![Bot online in member list](../../media/bot-online.png)
1. In any text channel where the bot is present, type `/hello`.
1. If slash commands don’t autocomplete yet, wait up to a minute (first sync can be slow) or try re-inviting the bot.
1. You should see: `Hello <your Discord username here>!`
![Bot response in Discord](../../media/bot-hello.png)


## 6. Troubleshooting
| Problem | Possible Fix |
|---------|--------------|
| `DISCORD_BOT_TOKEN is missing` error | Ensure the `TOKEN=...` line is present |
| Slash command not showing | Wait 1–2 minutes, ensure the bot is in the server, and that `applications.commands` scope was included in the invite. |
| `403` or permissions error | Recreate invite URL with needed scopes. |
| Wrong Python environment / import errors | Verify the `.venv` is selected in the Python extension view; reinstall `discord.py` there. |
| `ModuleNotFoundError: discord` | The package isn’t installed in the selected environment—reinstall via the Packages UI. |
| Bot shows online but no response | Confirm you used `/hello` (slash command), not `!hello`. |



