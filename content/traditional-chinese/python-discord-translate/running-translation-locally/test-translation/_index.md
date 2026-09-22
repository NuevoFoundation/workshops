---
title: "測試翻譯"
draft: false
weight: 2
---

## 測試翻譯（快速腳本）
Nuvi 需要驗證翻譯引擎是否真的有效，然後再將其嵌入到機器人中。這個簡短的腳本就是用來提供這個驗證的。

讓我們使用一個簡單的 Python 檔案向伺服器發送一些文字。

創建一個名為 `test_translate.py` 的新檔案：
```python
import requests

# 測試 1：語言檢測
print("測試語言檢測...")
detect_payload = {"q": "Hello world!"}
detect_resp = requests.post("http://127.0.0.1:5000/detect", json=detect_payload)
print("檢測結果:", detect_resp.json())

# 測試 2：翻譯
print("\n測試翻譯...")
translate_payload = {
    "q": "Hello world!",
    "source": "en",
    "target": "es",
    "format": "text"
}
translate_resp = requests.post("http://127.0.0.1:5000/translate", json=translate_payload)
print("翻譯結果:", translate_resp.json())
```

運行它（確保 LibreTranslate 伺服器仍在運行）：
1. 在編輯器中打開 `test_translate.py`。
1. 點擊左側的運行與調試圖標（帶有蟲子的播放按鈕）。
1. 查看 Debug Console / Terminal 面板中的輸出結果。

你應該會看到類似這樣的內容：`{'translatedText': '¡Hola Mundo!'}`

![終端輸出](../../media/test_terminal.png)

---

### 這裡發生了什麼？
**requests 庫：** 一個流行的 Python 協助工具，讓你可以輕鬆與網站或本地伺服器通信，而不需要撰寫大量的底層程式碼。

**網路請求：** 一條由你的程式發送到伺服器的消息，請求它執行某些操作（比如：翻譯文字）並返回一個回應。

**Payload：** 你隨請求一起發送的數據。在這個腳本中，`payload` 表示所發送的數據，比如要翻譯的文字及來源/目標語言，格式為 JSON。

**JSON：** 一種簡單的數據格式，易於閱讀。伺服器以 JSON 的形式發送其回應，以便不同程式和語言能夠讀取。

**resp.json()：** 這會將伺服器發送的 JSON 回覆轉換為 Python 可以理解的格式。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi 吉祥物" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 小提示：</strong> 如果你遇到連線錯誤，請再次檢查伺服器終端是否仍在運行，並確認 URL 是 `http://127.0.0.1:5000`。
{{< /alert >}}

**Endpoint：** 伺服器上執行某個任務的特定 URL（如 `/translate`），在這裡是用於翻譯的。

### 自己試試看
1. 翻譯一句不同的短語  
1. 改變方向，從西班牙語翻譯為英語  
1. 嘗試添加另一種語言！

現在你已經了解了每個部分！接下來，你將把這個想法與你的 Discord 機器人結合起來，讓 Nuvi 的朋友們最終可以互相理解。