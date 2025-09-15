---
title: "Code Prerequisites"
draft: false
weight: 3
---

## Overview

Let’s get your computer ready to run a Discord bot. You’ll install Python, set up a virtual environment (a safe “bubble” for your project’s packages), install VS Code (your code editor), and create the starter files.

## 1. Install Python
Install **Python 3.10** (a 3.10.x version, like 3.10.14) from the official website.
- Windows & macOS: https://www.python.org/downloads/
- (Some Chromebooks may need Linux mode; ask an adult or teacher.)

Why 3.10? Some of the libraries we will use for Discord and translation work best (or only) with Python 3.10 right now. Using a newer version (like 3.11 or 3.12) may cause install errors.

On the Windows installer: check the box **“Add Python to PATH”** before clicking Install.

To test after install, open a terminal (Command Prompt, PowerShell, or VS Code terminal) and run:
```
python --version
```
You should see something like `Python 3.10.x`.

## 2. Install VS Code
Download from: https://code.visualstudio.com/
Open VS Code after installing.

## 3. Create a Project Folder
Choose a location you can find easily, like your Documents or Desktop.
Example folder name: `discord-translator-bot`.
Open the folder in VS Code (File → Open Folder).

## 4. Create a Virtual Environment
A virtual environment keeps your project’s packages separate from other projects.

In the VS Code terminal, run:
```
python -m venv .venv
```
Then activate it:
- Windows PowerShell:
```
.\.venv\Scripts\Activate.ps1
```
You should see `(.venv)` at the start of the terminal line.

- macOS / Linux (bash or zsh):
```
source .venv/bin/activate
```

If `python` points to Python 2 on macOS/Linux, try:
```
python3 -m venv .venv
source .venv/bin/activate
```

If activation is blocked, you may need to run PowerShell as Administrator and allow scripts:
```
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```
(Ask an adult if unsure.) Then try activation again.

## 5. Create Starter Files
Inside the project folder, create these files:
```
main.py
requirements.txt
.env           (will hold secrets - do NOT share)
```

### main.py (starter)
```python
print("Bot project ready. We'll add Discord code soon!")
```

### requirements.txt (initial)
We’ll add real libraries later. For now you can leave it empty or add a comment:
```
# Add packages here, e.g. discord.py or nextcord
```

### .env (keep private!)
This file will store your bot token later:
```
DISCORD_BOT_TOKEN=YOUR_TOKEN_WILL_GO_HERE
```
(Do not commit this file to GitHub.)

## 6. Install Discord Library (Preview)
We’ll do this for real later, but just so you know:
```
pip install discord.py
```
This will also create / update a `pip` cache.

To save the dependency to `requirements.txt`:
```
pip freeze > requirements.txt
```

## 7. Run Your Starter Script
```
python main.py
```
You should see the print message.

## Next Step
Now that your environment is ready, you can start writing real bot code and use your token securely.
