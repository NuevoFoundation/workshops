```markdown
---
title: "测试翻译"
draft: false
weight: 2
---

## 测试翻译 (快速脚本)
Nuvi 需要证明翻译引擎确实有效，然后再将其集成到机器人中。这个小脚本就是用来证明它的。

我们将通过一个简单的 Python 文件向服务器发送一些文本。

创建一个名为 `test_translate.py` 的新文件：
```python
import requests

# 测试 1：语言检测
print("测试语言检测...")
detect_payload = {"q": "Hello world!"}
detect_resp = requests.post("http://127.0.0.1:5000/detect", json=detect_payload)
print("检测结果:", detect_resp.json())

# 测试 2：翻译
print("\n测试翻译...")
translate_payload = {
    "q": "Hello world!",
    "source": "en",
    "target": "es",
    "format": "text"
}
translate_resp = requests.post("http://127.0.0.1:5000/translate", json=translate_payload)
print("翻译结果:", translate_resp.json())
```

运行脚本（确保 LibreTranslate 服务器仍在运行）：
1. 在编辑器中打开 `test_translate.py`。
1. 点击左侧的运行与调试图标（带有 bug 的播放按钮）。
1. 查看调试控制台/终端面板中的输出。

你应该会看到类似这样的内容：`{'translatedText': '¡Hola Mundo!'}`

![终端中的输出](../../media/test_terminal.png)

---

### 这里发生了什么？
**requests 库：** 一个流行的 Python 辅助库，使与网站或本地服务器通信变得简单，无需编写大量低级代码。

**Web 请求：** 你的程序向服务器发送的一条消息，要求其执行某项任务（例如：翻译文本）并返回一个响应。

**负载(Payload)：** 你随请求发送的数据。在这个脚本中，`payload` 表示数据，比如要翻译的文本和源/目标语言，存储为 JSON 格式。

**JSON：** 一种简单的文本数据格式。服务器以 JSON 格式发送其回答，以便不同的程序和语言可以读取。

**resp.json()：** 将服务器的 JSON 回复转换为 Python 可以理解的内容。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi 吉祥物" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 小提示：</strong> 如果出现连接错误，请再次检查服务器终端是否仍在运行，以及 URL 是否为 `http://127.0.0.1:5000`。
{{< /alert >}}

**端点(Endpoint)：** 服务器上的特定 URL (`/translate`)，用于执行任务——在此示例中是翻译功能。

### 尝试一下
1. 翻译不同的短语
1. 反转方向，从西班牙语翻译到英语
1. 添加另一种语言！

现在你了解了每一个部分！接下来你将把这个想法连接到你的 Discord 机器人，这样 Nuvi 的朋友们就能相互理解了。
```