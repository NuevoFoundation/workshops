---
title: "翻译文本功能"
draft: false
weight: 2
---

此功能完成实际的翻译——它将一种语言的文本转换为另一种语言！

## `translate_text()` 函数

以下是让魔法发生的代码：

```python
def translate_text(text, from_language, to_language):
    """使用 LibreTranslate 从一种语言翻译到另一种语言。"""
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

## 每部分的含义

| 部分 | 功能 | 示例 |
|------|--------------|---------|
| `text` | 你想翻译的文字 | `"Hello world"` |
| `from_language` | 当前的语言 | `"en"` (英语) |
| `to_language` | 目标语言 | `"es"` (西班牙语) |

## 工作原理

1. **打包信息**：将文本和语言代码放入一个包中  
2. **发送到 LibreTranslate**：请求翻译  
3. **获取翻译文本**：LibreTranslate 返回翻译好的文本  
4. **出错时**：返回 `None`（意味着“无法翻译”）

## 使用示例

### 自动翻译示例
```python
# 将消息翻译成用户想要的语言
translation = translate_text(message.content, detected_lang, preferred_lang)
if translation:
    # 发送翻译结果！
```

### 手动命令示例
```python
# 从英语翻译到西班牙语
result = translate_text("Hello", "en", "es")  
# 结果: "Hola"

# 从西班牙语翻译到英语  
result = translate_text("Gracias", "es", "en")
# 结果: "Thank you"
```

## LibreTranslate 返回的内容

当功能正常工作时，你会收到如下内容：
```json
{
    "translatedText": "Hola mundo"
}
```

## 出现问题时

当以下情况发生时，函数会返回 `None`：
- LibreTranslate 没有运行
- 网络连接问题
- 错误的语言代码
- 文本太长（超时 10 秒）

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>注意：</strong> 长消息可能需要超过 10 秒。如果这种情况经常发生，可以修改超时时间！
{{< /alert >}}

## 成功提示

1. **始终检查是否成功**：确保函数未返回 `None`  
2. **使用正确的语言代码**：例如 "en" 表示英语，"es" 表示西班牙语  
3. **保持消息长度合理**：超长文本需要更长时间  
4. **耐心等待**：翻译需要时间  

## 机器人使用场景

机器人在以下两种情况下调用此功能：
- **自动翻译**：当有人用不同语言发送消息时  
- **手动命令**：当用户输入 `/translate` 时  