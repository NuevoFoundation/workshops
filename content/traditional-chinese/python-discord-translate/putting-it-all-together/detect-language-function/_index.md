---
title: "語言偵測功能"
draft: false
weight: 1
---

此功能可以判斷一條訊息是用英文還是西班牙文寫的。有點像是一個能立即告訴你他們聽到的語言是什麼的人！

## `detect_language()` 函數

以下是用於詢問 LibreTranslate "這是什麼語言？" 的程式碼：

```python
def detect_language(text):
    """詢問 LibreTranslate 這段文字是什麼語言 (en/es)。"""
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
```

## 運作方式

1. **傳送文字**：我們將訊息傳送給 LibreTranslate。
2. **獲取答案**：LibreTranslate 告訴我們它認為這是什麼語言。
3. **檢查是否可用**：我們只處理英文（`en`）或西班牙文（`es`）。
4. **處理問題**：如果出現問題，函數會回傳 `None` （表示「我不知道」）。

## 機器人的處理方式

當有人發送一條訊息，機器人會：
- 使用此函數判斷訊息的語言。
- 跳過不是英文或西班牙文的訊息。
- 確定是否需要翻譯。

## 範例

當有人輸入 "Hello world" 時，LibreTranslate 回傳類似以下的內容：
```json
[
  {
    "language": "en",
    "confidence": 0.95
  }
]
```

函數會提取 `"en"`，並回傳它。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi 吉祥物" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示：</strong> 使用 `--load-only en,es` 啟動 LibreTranslate，以僅載入英文和西班牙文，從而加快啟動速度。
{{< /alert >}}

## 常見問題

| 問題            | 解決方法                 |
|------------------|--------------------------|
| 總是回傳 `None`  | 確認 LibreTranslate 已啟動 |
| 語言判斷錯誤     | 嘗試輸入較長的訊息       |
| 花費時間過長     | 5 秒的超時可能過短        |