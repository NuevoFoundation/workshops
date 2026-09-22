```yaml
---
title: "撰寫簡單的機器人"
draft: false
weight: 2
---
```

Nuvi 現在已經註冊了一個機器人身分。接下來：讓它真正地回應訊息。使用你的專案資料夾、虛擬環境以及起始檔案，你將建立一個**最小化的機器人基礎**。這個初始版本只是為了證明連線可以正常運行。我們同時會啟用一項權限 (`message_content`)，以便後續能添加自動翻譯功能，而無需重新回到設定頁面。

在本部分，你將完成以下事項：

1. 將 `discord.py` 添加到 `requirements.txt` 並安裝它（使用 VS Code 的圖形介面，無需打開終端輸入指令）
2. 撰寫一個基本的機器人，回應指令 `/hello`
3. 啟用訊息內容權限（稍後將用於自動翻譯）
4. 執行並測試機器人

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示：</strong>你的第一個目標就是讓機器人成功上線 —— 翻譯功能稍後再實現。小小的成功能讓你保持動力！
{{< /alert >}}

---

## 1. 添加並安裝 discord.py 函式庫（使用 requirements.txt + VS Code 圖形介面）
我們會先宣告依賴項目，然後讓 VS Code 將它安裝到你的虛擬環境中。

### 1.a 將其添加到 requirements.txt
1. 開啟你的專案中的 `requirements.txt` 檔案。
2. 添加以下內容（目前檔案僅需包含這行）：
```text
discord.py
```
3. 儲存檔案。

### 1.b 使用環境管理器圖形介面進行安裝
1. 開啟 Python 擴展視圖（活動欄中的 Python 圖示），並確認已選擇正確的環境（例如 `.venv`）。
2. 選擇 "Packages" 圖示（看起來像一個盒子），將會顯示下拉選單。選擇 "Install project dependencies"。
![Install project dependencies](../../media/dependencies.png)
3. 勾選 "requirements.txt"，然後點擊 "Ok"。
![Select requirements.txt](../../media/requirements.png)
4. 等待安裝完成，直到 `discord.py` 出現在已安裝的套件列表中。
![discord.py installed](../../media/discord-installed.png)

## 2. 撰寫機器人程式碼
開啟 `bot.py`，並將任何占位程式碼替換為以下內容。（你會注意到代碼中已經有 `user_languages` 字典 —— 這是一個「暫存筆記本」，我們稍後將用它來實現註冊及自動翻譯功能。）

```python
import discord
from discord.ext import commands

TOKEN = "<your token here>"

# 這是我們記錄每個用戶偏好語言的地方
# 它就像一本筆記本：user_languages[user_id] = "en" 或 "es"
user_languages = {}

# 告訴 Discord，我們的機器人需要讀取訊息（不僅僅是指令）
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"機器人已上線，身分是 {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"成功同步 {len(synced)} 個指令。")
    except Exception as e:
        print(f"錯誤: {e}")

@bot.tree.command(name="hello", description="向你問好!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"你好 {interaction.user.display_name}！祝你編程順利！")

if not TOKEN:
    raise RuntimeError("遺失機器人令牌。請將它添加到檔案頂部的 TOKEN 變數中。")

bot.run(TOKEN)
```

### 這段程式碼的功能：
- 匯入 Discord 函式庫，節省重新實現網絡功能的時間。
- 設置「意圖」並提前啟用 `message_content`（未來的自動翻譯需要讀取訊息內容）。
- 建立並啟動一個機器人連線。
- 註冊一個驗證同步效果的斜線指令 `/hello`。
- 使用 `user_languages = {}` 作為未來簡單的記憶儲存空間。
- 當執行 `/hello` 時，回傳個性化的問候。
- 安全檢查：若令牌遺失，程式無法啟動。

<details>
<summary><strong>-> 進階細節 （點擊展開以了解此處用到的更多進階概念。完全可忽略！）</strong></summary>

**async / await**: 這些關鍵字允許 Python 在等待期間執行其他任務（例如等待 Discord 回覆），以防止機器人卡住。

**事件（@bot.event）**：像 `@bot.event` 這樣的裝飾器通知函式庫「當某個特定事件發生時執行這個函數」（此處為：當機器人準備就緒）。

**斜線指令（`@bot.tree.command`）**：這些是現代化的指令，當用戶在 Discord 打出 `/` 時出現。它們會註冊到 Discord 的伺服器，可能需要一些時間同步。

**互動 (Interaction)**：表示用戶使用了一個斜線指令。`interaction.user` 獲取用戶，而 `interaction.response.send_message(...)` 會發送回覆。

**Bot 與 Client 的區別**：`commands.Bot` 在較低層次的 Discord 客戶端上，添加了一些有用的指令功能（比如指令樹）。

**意圖 (Intents)**：對 Discord 的許可，告訴它你需要哪些資料（訊息、