---
title: "消息处理和翻译命令"
draft: false
weight: 4
---

魔法的地方来了！机器人会监控每一条消息，并为需要的人自动翻译。此外，还有一个备用的 `/translate` 命令。

## 让机器人读取消息

首先，我们需要权限来读取消息：

```python
# 告诉 Discord 我们需要读取消息
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)
```

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>警告：</strong> 请在 Discord 开发者门户中打开“消息内容意图”，否则机器人无法读取消息。
{{< /alert >}}

## 自动翻译代码

每当有人发送消息时都会运行：

```python
@bot.event
async def on_message(message):
    # 不翻译机器人的消息
    if message.author.bot:
        return
    
    # 跳过超级短的消息（少于 3 个字母）
    if len(message.content.strip()) < 3:
        return
    
    # 如果没人注册，不必操作
    if not user_languages:
        return

    # 确定这条消息的语言
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # 检查每个注册的人
    for uid, preferred_lang in user_languages.items():
        # 不给自己发送消息
        if uid == message.author.id:
            continue
        
        # 如果他们已经会这门语言则跳过
        if detected_lang == preferred_lang:
            continue

        # 进行翻译！
        translation = translate_text(message.content, detected_lang, preferred_lang)
        if translation:
            # 找到用户
            user = bot.get_user(uid)
            if user is None:
                try:
                    user = await bot.fetch_user(uid)
                except:
                    continue
            if not user:
                continue
            
            # 给他们发送私信
            try:
                original_lang_name = "English" if detected_lang == "en" else "Spanish"
                target_lang_name = "English" if preferred_lang == "en" else "Spanish"
                dm_text = (
                    f"**翻译** ({original_lang_name} -> {target_lang_name})\n"
                    f"**原文:** {message.content}\n"
                    f"**翻译:** {translation}\n"
                    f"*来自 {message.author.display_name} 在 #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # 如果私信发送失败，直接跳过
```

### 代码逐步解释

1. **过滤无用消息**：
   - 跳过机器人的消息（避免无限循环！）
   - 跳过极短消息（如“ok”或“hi”）
   - 如果没人注册则跳过

2. **检测语言**：
   - 使用 `detect_language()` 检测语言
   - 仅在语言为英语或西班牙语时继续

3. **遍历用户**：
   - 检查每个注册的用户
   - 跳过发送消息的人
   - 跳过已经会该语言的人

4. **发送翻译**：
   - 翻译成他们的偏好语言
   - 在 Discord 上找到他们
   - 发送附带翻译的友好私信

## 手动 `/translate` 命令

有时你可能想要快速翻译某些内容：

```python
@bot.tree.command(name="translate", description="手动翻译 英语 ↔ 西班牙语")
@app_commands.describe(
    phrase="你想翻译什么？",
    translate_to="英语或西班牙语（默认：西班牙语）"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    # 显示“thinking...”表明正在工作
    await interaction.response.defer(thinking=True)
    
    # 确定翻译方向
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "西班牙语"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "英语"
    else:
        await interaction.followup.send("请选择 'english' 或 'spanish'")
        return
    
    # 执行翻译
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("翻译失败。服务器是否正在运行？")
```

### 特性亮点

- **双向工作**：英语 -> 西班牙语 或 西班牙语 -> 英语
- **智能默认**：如果不指定语言，默认为西班牙语
- **提示“正在思考...”**：让你知道它正在处理
- **友好的错误提示**：告诉你哪里出问题

## 私信的样子

当有人发送 "¡Buenos días amigos!" 时，英语使用者会收到这样的私信：

```
**翻译** (西班牙语 -> 英语)
**原文:** ¡Buenos días amigos!
**翻译:** Good morning friends!
*来自 UserName 在 #general*
```

## 测试一切

### 测试自动翻译
1. 用户 A：`/register_language` -> 选择西班牙语
2. 用户 B：`/register_language` -> 选择英语
3. 用户 A 输入："Hello everyone!"
   - 用户 B 收到西班牙语翻译的私信
4. 用户 B 输入："¡Gracias!"
   - 用户 A 收到英语翻译的私信

### 测试手动翻译
```
/translate phrase:"Hello world"
-> 西班牙语: ¡Hola Mundo!

/translate phrase:"Buenos dias" translate_to:english
-> 英语: Good morning

/translate phrase:"How are you?"
-> 西班牙语: ¿Cómo estás?
```

## 常见问题

| 出现的问题 | 原因 | 解决方法 |
|----------|-----|--------|
| 无法自动翻译 | 未开启消息内容意图 | 在开发者门户打开该功能 |
| 未收到私信 | 用户关闭了私信功能 | 用户需要允许服务器私信 |
| 翻译很慢 | 服务器繁忙 | 请耐心等待或重启 LibreTranslate |
| 机器人翻译自己 | 缺少机器人检查 | 确保包含机器人消息检查 |