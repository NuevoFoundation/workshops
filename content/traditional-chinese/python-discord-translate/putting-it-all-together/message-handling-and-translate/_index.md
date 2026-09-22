---
title: "訊息處理與翻譯指令"
draft: false
weight: 4
---

這就是魔法開始的地方！機器人會監視每條訊息，並自動為需要的人翻譯。此外，還有一個備用的 `/translate` 指令。

## 讓機器人讀取訊息

首先，我們需要允許機器人讀取訊息：

```python
# 告訴 Discord 我們需要讀取訊息
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)
```

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>警告：</strong> 請在 Discord 開發者後台開啟「訊息內容意圖」，否則機器人無法讀取訊息。
{{< /alert >}}

## 自動翻譯程式碼

這段程式碼會在每次有人發送訊息時運行：

```python
@bot.event
async def on_message(message):
    # 不翻譯機器人的訊息
    if message.author.bot:
        return
    
    # 跳過超短訊息（少於 3 個字元）
    if len(message.content.strip()) < 3:
        return
    
    # 如果沒有人註冊，就不處理
    if not user_languages:
        return

    # 判斷這條訊息的語言
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # 檢查每個註冊的使用者
    for uid, preferred_lang in user_languages.items():
        # 不要把訊息發給自己
        if uid == message.author.id:
            continue
        
        # 如果使用者已經懂這語言，則跳過
        if detected_lang == preferred_lang:
            continue

        # 開始翻譯！
        translation = translate_text(message.content, detected_lang, preferred_lang)
        if translation:
            # 找到使用者
            user = bot.get_user(uid)
            if user is None:
                try:
                    user = await bot.fetch_user(uid)
                except:
                    continue
            if not user:
                continue
            
            # 發送私人訊息
            try:
                original_lang_name = "English" if detected_lang == "en" else "Spanish"
                target_lang_name = "English" if preferred_lang == "en" else "Spanish"
                dm_text = (
                    f"**翻譯** （{original_lang_name} -> {target_lang_name}）\n"
                    f"**原文：** {message.content}\n"
                    f"**翻譯：** {translation}\n"
                    f"*來自 {message.author.display_name} 在 #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # 如果 DM 發送失敗，則跳過
```

### 它的運作步驟

1. **過濾掉垃圾訊息**：
   - 跳過機器人訊息（避免無限循環！）
   - 跳過超短訊息（例如「ok」或「hi」）
   - 如果沒有人註冊，就不處理

2. **檢查語言**：
   - 使用 `detect_language()` 判斷訊息語言
   - 只處理英文或西班牙文

3. **遍歷使用者**：
   - 檢查每個註冊的使用者
   - 跳過發送訊息的人
   - 跳過已懂該語言的人

4. **發送翻譯**：
   - 翻譯成使用者偏好的語言
   - 找到該使用者在 Discord 的帳號
   - 發送一條包含翻譯的友善私人訊息

## 手動 `/translate` 指令

有時候你可能需要快速翻譯某些內容：

```python
@bot.tree.command(name="translate", description="手動翻譯 English ↔ Spanish")
@app_commands.describe(
    phrase="你想翻譯什麼？",
    translate_to="english 或 spanish（預設：spanish）"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    # 在翻譯時顯示「thinking...」
    await interaction.response.defer(thinking=True)
    
    # 判斷翻譯方向
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "Spanish"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "English"
    else:
        await interaction.followup.send("請選擇 'english' 或 'spanish'")
        return
    
    # 執行翻譯
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("翻譯失敗。伺服器是否正在運行？")
```

### 特別功能

- **雙向工作**：支持英文 -> 西班牙文或西班牙文 -> 英文
- **智能預設**：如果未指定，預設翻譯為西班牙文
- **顯示「thinking」**：讓使用者知道系統正在處理
- **詳細錯誤提示**：告訴你問題出在哪裡

## 私人訊息範例

當某人寫下「¡Buenos días amigos!」時，講英文的人會收到以下私人訊息：

```
**翻譯** （Spanish -> English）
**原文：** ¡Buenos días amigos!
**翻譯：** Good morning friends!
*來自 UserName 在 #general*
```

## 測試方法

### 測試自動翻譯
1. 使用者 A： `/register_language` -> 選擇西班牙語
2. 使用者 B： `/register_language` -> 選擇英語
3. 使用者 A 寫道：「Hello everyone!」
   - 使用者 B 會收到西班牙文翻譯的私人訊息
4. 使用者 B 寫道：「¡Gracias!」
   - 使用者 A 會收到英文翻譯的私人訊息

### 測試手動翻譯
```
/translate phrase:"Hello