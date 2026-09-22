---
title: "完整机器人代码"
draft: false
weight: 5
---

以下是完整的 `bot.py` 文件，其中包含所有内容！您可以复制整个代码以使您的翻译机器人正常运行。

## 完整 bot.py 文件

```python
import discord
from discord.ext import commands
from discord import app_commands
import requests

# 重要：请替换为您的实际机器人令牌（保持保密！）
TOKEN = "<your token here>"

# 记录用户希望的语言
user_languages = {}

# 让机器人能够读取消息
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"机器人已上线，用户名为 {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"已同步 {len(synced)} 条命令。")
    except Exception as e:
        print(f"错误：{e}")

def detect_language(text):
    """判断文本是英语还是西班牙语。"""
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
    """将文本从一种语言翻译为另一种语言。"""
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

@bot.tree.command(name="register_language", description="选择您讲什么语言")
@app_commands.describe(language="您希望消息被翻译成什么语言？")
@app_commands.choices(language=[
    app_commands.Choice(name="我讲英语", value="en"),
    app_commands.Choice(name="我讲西班牙语", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "英语" if language.value == "en" else "西班牙语"
    await interaction.response.send_message(
        f"明白了！您讲{lang_name}，所以我会将消息翻译成{lang_name}！",
        ephemeral=True
    )

@bot.tree.command(name="my_language", description="查看您选择的语言")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "英语" if lang == "en" else "西班牙语"
        await interaction.response.send_message(f"您的语言：{lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("您还没有选择语言！使用 /register_language", ephemeral=True)

@bot.tree.command(name="stop_translation", description="停止自动翻译")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("您将不再收到翻译。", ephemeral=True)
    else:
        await interaction.response.send_message("您本来就没有接收翻译！", ephemeral=True)

@bot.tree.command(name="translate", description="手动翻译英语 ↔ 西班牙语")
@app_commands.describe(
    phrase="您想要翻译什么？",
    translate_to="翻译成英语或西班牙语（默认：西班牙语）"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    await interaction.response.defer(thinking=True)
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "西班牙语"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "英语"
    else:
        await interaction.followup.send("请选择 'english' 或 'spanish'")
        return
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("翻译失败。服务器在运行吗？")

@bot.event
async def on_message(message):
    # 跳过机器人消息
    if message.author.bot:
        return
    # 跳过过短的消息
    if len(message.content.strip()) < 3:
        return
    # 如果没人注册就跳过
    if not user_languages:
        return

    # 判断语言
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # 检查每个注册用户
    for uid, preferred_lang in user_languages.items():
        # 跳过消息的发送者
        if uid == message.author.id:
            continue
        # 如果他们已经讲此语言，则跳过
        if detected_lang == preferred_lang:
            continue

        # 翻译并发送私信
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
                original_lang_name = "英语" if detected_lang == "en" else "西班牙语"
                target_lang_name = "英语" if preferred_lang == "en" else "西班牙语"
                dm_text = (
                    f"**翻译** （{original_lang_name} -> {target_lang_name}）\n"
                    f"**原文：** {message.content}\n"
                    f"**翻译：** {translation}\n"
                    f"*来自 {message.author.display_name} 在 #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # 忽略发送失败

if not TOKEN:
    raise RuntimeError("缺少机器人令牌")

bot.run(TOKEN