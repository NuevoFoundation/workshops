---
title: "翻譯文字功能"
draft: false
weight: 2
---

此功能進行實際的翻譯——它會將一種語言的文字轉換成另一種語言！

## `translate_text()` 函式

以下是執行魔術的程式碼：

```python
def translate_text(text, from_language, to_language):
    """使用 LibreTranslate 將文字從一種語言翻譯成另一種語言。"""
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
```

## 每個部分代表什麼

| 部分 | 功能說明       | 範例         |
|------|--------------|-------------|
| `text` | 你想翻譯的文字 | `"Hello world"` |
| `from_language` | 目前文字的語言 | `"en"` (英文)    |
| `to_language` | 你希望翻譯的語言 | `"es"` (西班牙語) |

## 操作流程

1. **打包信息**：我們將文字和語言代碼放入一個封包中。
2. **發送至 LibreTranslate**：請求翻譯。
3. **獲取翻譯結果**：LibreTranslate 回傳翻譯後的文字。
4. **遇到問題**：返回 `None` （表示「無法翻譯」）。

## 使用範例

### 自動翻譯
```python
# 將訊息翻譯成使用者需求的語言
translation = translate_text(message.content, detected_lang, preferred_lang)
if translation:
    # 傳送翻譯結果給使用者！
```

### 手動執行指令
```python
# 英文轉西班牙語
result = translate_text("Hello", "en", "es")  
# 結果: "Hola"

# 西班牙語轉英文  
result = translate_text("Gracias", "es", "en")
# 結果: "Thank you"
```

## LibreTranslate 的回傳內容

成功時，你會得到類似以下的回傳：
```json
{
    "translatedText": "Hola mundo"
}
```

## 當錯誤發生時

函式會返回 `None`，可能原因包括：
- LibreTranslate 未運行
- 網路連線問題
- 語言代碼錯誤
- 文字太長（超時 10 秒）

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi 吉祥物" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>提醒：</strong> 訊息太長可能超過 10 秒的限制。如果經常遇到此問題，可以調整超時時間！
{{< /alert >}}

## 成功秘訣

1. **檢查結果**：確認函式結果不是 `None`。
2. **使用正確語言代碼**：例如英文用 "en"，西班牙語用 "es"。
3. **保持訊息簡短**：超長文字需要更多時間。
4. **保持耐心**：翻譯需要一些時間。

## 機器人使用此功能的場景

機器人會在以下兩個情境中使用此函式：
- **自動翻譯**：當有人輸入不同語言的訊息
- **手動指令**：當使用者執行 `/translate`