---
title: "完整的機器人代碼"
draft: false
weight: 5
---

以下是完整的 `bot.py` 文件，包含所有內容！您可以直接複製這段代碼來啟動您的翻譯機器人。

## 完整的 bot.py 文件

```python
import discord
from discord.ext import commands
from discord import app_commands
import requests

# 重要：請替換為您的實際機器人 token（保密！）
TOKEN = "<your token here>"

# 記住用戶的語言偏好
user_languages = {}

# 讓機器人能夠讀取消息
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"機器人已上線，名稱為 {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"已同步 {len(synced)} 條指令。")
    except Exception as e:
        print(f"錯誤: {e}")

def detect_language(text):
    """判斷文本是英語還是西班牙語。"""
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
    """將文本從一種語言翻譯為另一種語言。"""
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

@bot.tree.command(name="hello", description="打招呼！")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"Hello {interaction.user.display_name}!")

@bot.tree.command(name="register_language", description="選擇您要使用的語言")
@app_commands.describe(language="您希望將消息翻譯為何種語言？")
@app_commands.choices(language=[
    app_commands.Choice(name="我說英語", value="en"),
    app_commands.Choice(name="我說西班牙語", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "英語" if language.value == "en" else "西班牙語"
    await interaction.response.send_message(
        f"收到！您說 {lang_name}，我將會將消息翻譯為 {lang_name}！",
        ephemeral=True
    )

@bot.tree.command(name="my_language", description="查看您選擇的語言")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "英語" if lang == "en" else "西班牙語"
        await interaction.response.send_message(f"您的語言：{lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("您尚未選擇語言！請使用 /register_language", ephemeral=True)

@bot.tree.command(name="stop_translation", description="停止接收自動翻譯")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("您將不會再接收翻譯消息。", ephemeral=True)
    else:
        await interaction.response.send_message("您本來就沒有接收翻譯消息！", ephemeral=True)

@bot.tree.command(name="translate", description="手動翻譯英語 ↔ 西班牙語")
@app_commands.describe(
    phrase="您希望翻譯的內容是？",
    translate_to="目標語言（英語或西班牙語，默認為西班牙語）"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    await interaction.response.defer(thinking=True)
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "西班牙語"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "英語"
    else:
        await interaction.followup.send("請選擇 'english' 或 'spanish'")
        return
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("翻譯失敗。伺服器是否正在運行？")

@bot.event
async def on_message(message):
    # 跳過機器人消息
    if message.author.bot:
        return
    # 跳過超短消息
    if len(message.content.strip()) < 3:
        return
    # 如果沒有人註冊，就跳過
    if not user_languages:
        return

    # 判斷語言
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # 檢查每個已註冊的用戶
    for uid, preferred_lang in user_languages.items():
        # 跳過消息作者
        if uid == message.author.id:
            continue
        # 如果他們已經會說此語言，則跳過
        if detected_lang == preferred_lang:
            continue

        # 翻譯並發送 DM
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
                original_lang_name = "英語" if detected_lang == "en" else "西班牙語"
                target_lang_name = "英語" if preferred_lang == "en" else "西班牙語"
                dm_text = (
                    f"**翻譯** ({original