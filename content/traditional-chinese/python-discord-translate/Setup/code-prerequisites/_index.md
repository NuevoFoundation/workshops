---
title: "程式前置條件"
draft: false
weight: 2
---

Nuvi 還無法邀請翻譯機器人——因為還沒有設定程式環境！讓我們來準備您的電腦環境。您將會安裝 Python，設定一個虛擬環境（專案的套件專用「安全氣泡」），安裝 VS Code（您的程式編輯器），並建立一些基本檔案。這些基礎準備好後，您就能開始撰寫幫助大家互相理解的機器人了。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提醒：</strong> 請選擇 Python 3.10 版本，以便翻譯相關功能能順利安裝 —— 一旦運作正常，未來升級也會更容易！
{{< /alert >}}

## 1. 安裝 Python
從官方網站安裝 **Python 3.10**（3.10.x 版本，例如 3.10.14）。
- Windows 和 macOS 使用者請前往：https://www.python.org/downloads/
- （某些 Chromebook 可能需要啟用 Linux 模式；請找成人或老師協助。）

為什麼選 3.10？目前我們將使用的一些 Discord 和翻譯相關的函式庫在 Python 3.10 版本上最適合（甚至必須使用）。選擇較新的版本（如 3.11 或 3.12）可能會導致安裝錯誤。

您應該會看到類似 `Python 3.10.x` 的內容。

## 2. 安裝 VS Code（及 Python 工具）

VS Code 是一款免費且對學生友好的程式編輯器，您將在其中撰寫和執行機器人程式；它提供智能自動補全、錯誤提示，並且能輕鬆管理 Python。

{{<button href="https://code.visualstudio.com" theme="info">}}下載 VS Code{{< /button >}}

安裝完成後，請添加 Python 工具：
1. 開啟 VS Code 並進入擴展視圖（點選側邊活動欄中的擴展圖示，或按下 `Ctrl+Shift+X`）。
![擴展視圖圖示](../../media/extensions.png)
1. 搜尋 `Python`（發佈者：Microsoft）並點擊 "Install"。這會安裝一些我們在工作坊中將使用的有用工具。
![Python VSCode 擴展頁面](../../media/python-extension.png)
1. 如果有提示，請安裝 `Python Environment Manager`，此功能已捆綁在較新的 Python 擴展版本中。
1. 如果有要求，請重新加載 VS Code。

現在您應該可以在側邊欄看到 Python 擴展圖示。
![Python 擴展圖示](../../media/python-symbol.png)

## 3. 建立專案資料夾
選擇一個您容易找到的路徑，例如 "Documents" 或 "Desktop"。
範例資料夾名稱：`discord-translator-bot`。
用 VS Code 開啟該資料夾（檔案 → 開啟資料夾）。

## 4. 建立虛擬環境
虛擬環境將您的專案與其他專案隔離開，方便管理您電腦上的所有 Python 檔案。VS Code 的 Python 擴展可以幫您建立並選擇它。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示：</strong> 如果建立環境時似乎卡住了，請等待一分鐘再重試——Python 正在為您設置專用實驗室。
{{< /alert >}}

1. 要建立環境，請尋找側邊欄上的 Python 圖示並點擊它： ![Python VSCode 擴展圖示](../../media/sidebar.png)
1. 點擊「venv」下拉選單。它應該會顯示「No environment found, click to create」。點擊它。
1. 接著應該會在頂部出現「Select environment creation mode」下拉選單。選擇 "Quick Create"。
![建立環境下拉選單](../../media/create-env.png)
1. 您應該會看到一個小型的載入視窗，顯示正在建立虛擬環境。這可能需要幾分鐘。
![建立虛擬環境](../../media/loading-env.png)
1. 完成後，如果再次選擇側邊欄上的 Python 圖示並點擊 "venv" 下拉選單，您應該會看到虛擬環境已被建立並被選中。
![虛擬環境已建立並選中](../../media/venv-created.png)

## 5. 建立起始檔案
在專案資料夾內，建立以下檔案：
```
bot.py
requirements.txt
```

### bot.py
這個檔案將會存放您所有的機器人程式碼。目前，請添加以下起始程式碼：
```python
print("Bot project ready. We'll add Discord code soon!")
```

### requirements.txt 
這個檔案現在可以保持空白。稍後，您會將機器人需要的 Python 函式庫名稱添加到此檔案，以便輕鬆安裝。

## 6. 執行機器人腳本
1. 側邊欄應該也有一個「運行和除錯」圖示（帶 bug 的播放按鈕）。在主編輯器開啟 `bot.py` 後，點擊圖示，然後點擊側邊欄頂部的「Run and Debug」按鈕。
![運行和除錯圖示](../../media/run-and-debug.png)

1. 在出現的下拉選單中，選擇「Python debugger」。
![選擇 Python debugger](../../media/debugger.png)

1. 在除錯配置中，選擇「Python File」。
![選擇 Python File](../../media/select-python.png)

1. 再次點擊「Run and Debug」應該會�