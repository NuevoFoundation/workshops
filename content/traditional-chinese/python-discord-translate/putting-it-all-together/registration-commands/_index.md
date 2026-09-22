---
title: "註冊指令"
draft: false
weight: 3
---

這些指令允許用戶註冊自動翻譯、檢查自己的設置以及停止接收翻譯。

## 用戶跟蹤

機器人通過一個簡單的字典來記住誰需要哪種語言：

```python
# 這裡存儲用戶數據: user_id -> 他們偏好的語言 ("en" 或 "es")
user_languages = {}
```

可以把它想像成一張註冊表，每個人都在上面寫下自己的名字和偏好的語言！

## `/register_language` 指令

這個指令允許用戶選擇自己講的語言（也就是他們想要接收的語言）：

```python
@bot.tree.command(name="register_language", description="選擇你講的語言")
@app_commands.describe(language="你想要翻譯成什麼語言？")
@app_commands.choices(language=[
    app_commands.Choice(name="我會說英語", value="en"),
    app_commands.Choice(name="我會說西班牙語", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "English" if language.value == "en" else "Spanish"
    await interaction.response.send_message(
        f"收到！你會說 {lang_name}，所以我會將消息翻譯成 {lang_name} 給你！",
        ephemeral=True
    )
```

### 它的亮點
- **清楚的選項**：選擇「我會說英語」或「我會說西班牙語」，不會讓人感到困惑！
- **私人響應**：只有用戶自己能看到確認消息
- **記住用戶**：記錄他們理解的語言

## `/my_language` 指令

這個指令會告訴用戶自己選擇了哪種語言：

```python
@bot.tree.command(name="my_language", description="查看你選擇了什麼語言")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "English" if lang == "en" else "Spanish"
        await interaction.response.send_message(f"你的語言: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("你還沒有選擇語言！使用 /register_language 來選擇吧", ephemeral=True)
```

### 它的功能
- **顯示設置**：告訴用戶他們選擇了什麼語言
- **貼心提醒**：如果還未登記，告訴他們如何操作

## `/stop_translation` 指令

這個指令讓用戶停止接收翻譯：

```python
@bot.tree.command(name="stop_translation", description="停止接收自動翻譯")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("你將不再接收翻譯。", ephemeral=True)
    else:
        await interaction.response.send_message("你本來就沒在接收翻譯！", ephemeral=True)
```

### 它的作用
- **將用戶移出列表**：刪除他們的條目
- **確認操作成功**：顯示一條帶有確認的信息
- **友好的反饋**：即使他們沒有註冊，也會給出解釋

## 整體運作方式

1. **開始**：還沒有人註冊
2. **註冊**：`/register_language` 把用戶加入列表
3. **接收翻譯**：機器人檢查列表，了解誰需要什麼語言
4. **查看狀態**：`/my_language` 顯示用戶的選擇
5. **退出**：`/stop_translation` 將用戶從列表中移除

## 範例：兩位朋友註冊

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示：</strong>以下是 Maria 和 John 如何使用這個系統的解釋：
{{< /alert >}}

1. **Maria** （講西班牙語）輸入：`/register_language` 並選擇「我會說西班牙語」
   - 現在，她將收到翻譯成西班牙語的英語消息
   
2. **John** （講英語）輸入：`/register_language` 並選擇「我會說英語」
   - 現在，他將收到翻譯成英語的西班牙語消息

3. **Maria** 查看自己的選擇：`/my_language`
   - 機器人回覆：「你的語言: 西班牙語」
   
4. **John** 決定停止翻譯：`/stop_translation`
   - 機器人回覆：「✅ 你將不再接收翻譯。」

## 注意事項

- **私人信息**：所有回覆均為私人訊息（只有用戶自己看得到）
- **機器人重啟時重置**：列表僅存於記憶體中，不會保存到檔案
- **輕鬆更改**：只需再次執行 `/register_language` 並選擇新語言
- **避免垃圾訊息**：只有註冊的人才會收到翻譯

## 問題處理

| 問題 | 解決方案 |
|------|----------|
| 設置丟失 | 機器人可能已重新啟動 - 請重新註冊 |
| 想更改語言 | 只需重新執行 `/register_language` |
| 沒有接收到翻譯 | 使用 `/my_language` 檢查是否已註冊 |
| 無法收到私訊 | 檢查你的 Discord 隱私設置 |

---