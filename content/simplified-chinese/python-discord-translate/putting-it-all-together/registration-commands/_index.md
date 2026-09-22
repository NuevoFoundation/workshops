---
title: "注册命令"
draft: false
weight: 3
---

这些命令允许用户注册自动翻译，查看他们的设置，或者停止接收翻译。

## 跟踪用户

机器人使用一个简单的字典来记住谁需要哪种语言：

```python
# 这是存储的内容: user_id -> 用户的首选语言 ("en" 或 "es")
user_languages = {}
```

可以把它想象成一个签到表，每个人在上面写下他们的名字和首选语言！

## `/register_language` 命令

这个命令允许用户选择他们使用的语言（即他们想接收翻译的语言）：

```python
@bot.tree.command(name="register_language", description="选择你使用的语言")
@app_commands.describe(language="你希望将消息翻译成什么语言？")
@app_commands.choices(language=[
    app_commands.Choice(name="我说英语", value="en"),
    app_commands.Choice(name="我说西班牙语", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "English" if language.value == "en" else "Spanish"
    await interaction.response.send_message(
        f"收到！你说{lang_name}，我会将消息翻译成{lang_name}给你！",
        ephemeral=True
    )
```

### 它的优点
- **清晰的选项**：例如“我说英语”或者“我说西班牙语”，没有混淆！
- **私人回复**：只有用户自己可以看到确认信息
- **记住用户设置**：保存用户理解的语言

## `/my_language` 命令

这个命令显示用户选择的语言：

```python
@bot.tree.command(name="my_language", description="查看你选择的语言")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "English" if lang == "en" else "Spanish"
        await interaction.response.send_message(f"你选择的语言：{lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("你还没有选择语言！请使用 /register_language", ephemeral=True)
```

### 它的功能
- **显示用户设置**：告诉用户选择了哪种语言
- **贴心提醒**：如果用户没有注册，会提示如何注册

## `/stop_translation` 命令

这个命令允许用户停止接收翻译：

```python
@bot.tree.command(name="stop_translation", description="停止接收自动翻译")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("你将不再接收翻译。", ephemeral=True)
    else:
        await interaction.response.send_message("你本来就没有接收翻译！", ephemeral=True)
```

### 执行效果
- **从列表中移除用户**：删除用户的设置
- **确认操作成功**：提示操作完成的消息
- **友好的响应**：即使用户没有注册，也会给予反馈

## 整体工作流程

1. **初始状态**：无人注册
2. **注册**：用户通过 `/register_language` 注册并加入列表
3. **接收翻译**：机器人查看列表，决定谁需要什么语言的翻译
4. **查看状态**：用户通过 `/my_language` 查看他们的选择
5. **退出**：用户通过 `/stop_translation` 从列表中删除

## 示例：两个朋友的注册过程

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi 吉祥物" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示：</strong> 以下是 Maria 和 John 的使用过程：
{{< /alert >}}

1. **Maria** （说西班牙语）输入：`/register_language` 并选择“我说西班牙语”
   - 之后她将看到英语消息自动翻译为西班牙语

2. **John** （说英语）输入：`/register_language` 并选择“我说英语”
   - 之后他将看到西班牙语消息自动翻译为英语

3. **Maria** 检查：`/my_language`
   - 机器人提示：“你选择的语言：西班牙语”

4. **John** 决定停止：`/stop_translation`
   - 机器人提示：“✅ 你将不再接收翻译。”

## 需要注意的事项

- **私人消息**：所有回复都是私密的（只有用户自己可以看到）
- **重启后重置**：列表保存在内存中，因此重启后需要重新注册
- **更改语言易操作**：通过 `/register_language` 选择新的语言即可
- **无需担心垃圾消息**：仅注册的用户会接收翻译

## 问题解决

| 问题 | 解决办法 |
|------|----------|
| 设置丢失 | 机器人可能重启了——重新注册即可 |
| 想更改语言 | 直接运行 `/register_language` 即可 |
| 未接收到翻译 | 通过 `/my_language` 检查自己是否已注册 |
| 无法收到私信 | 检查 Discord 的隐私设置 |

---