---
title: "检测语言功能"
draft: false
weight: 1
---

这个功能可以判断一条消息是用英语还是西班牙语写的。它就像一个能立即告诉你所听语言的小助手！

## `detect_language()` 功能

下面是向 LibreTranslate 询问“这是什么语言？”的代码：

```python
def detect_language(text):
    """询问 LibreTranslate 此文本的语言类型（en/es）。"""
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

## 工作原理

1. **发送文本**：我们将消息发送给 LibreTranslate。
2. **获取答案**：LibreTranslate 告诉我们它认为这是什么语言。
3. **检查是否可用**：我们仅处理英语（`en`）或西班牙语（`es`）。
4. **处理问题**：如果出现问题，我们返回 `None`（表示“我不知道”）。

## 机器人如何处理这些

当有人发送消息时，机器人会：
- 使用此功能确定语言。
- 跳过非英语或西班牙语的消息。
- 决定谁需要翻译。

## 示例

当有人输入 "Hello world" 时，LibreTranslate 的返回可能是如下内容：
```json
[
  {
    "language": "en",
    "confidence": 0.95
  }
]
```

该功能会提取 `"en"` 并将其返回。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 小提示：</strong> 使用 `--load-only en,es` 启动 LibreTranslate，可以只加载英语和西班牙语来加快启动速度。
{{< /alert >}}

## 常见问题

| 问题 | 解决方法 |
|------|----------|
| 总是返回 `None` | 检查 LibreTranslate 是否正在运行 |
| 语言判断错误 | 尝试输入更长的消息 |
| 运行耗时过长 | 可能需要调整 5 秒的超时时间 |