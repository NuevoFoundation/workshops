---
title: "综合起来"
draft: false
weight: 4
---

你的机器人已经上线并且 LibreTranslate 正在运行。现在让我们把它们结合起来，这样 Nuvi 的朋友们就可以用不同的语言聊天了！

## 你将要构建什么

你的机器人将成为一个 **翻译助手**，它可以：
- 判断人们在使用什么语言
- 自动为需要的人翻译消息
- 私下发送翻译内容（避免聊天变得混乱）
- 提供备用的 `/translate` 命令以防万一

{{< alert theme="info" >}}
<img src="../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示：</strong>不用担心看起来太复杂！我们已经把它分解为易于操作的小部分。
{{< /alert >}}

## 开始前的准备

确保你已完成以下步骤：
- LibreTranslate 已启动（支持英语和西班牙语）
- 你的机器人已上线（确保 `/hello` 命令有效）
- 已安装 `requests` 包
- 在 Discord 中启用了消息内容读取（这样你的机器人可以读取消息）

## 完成后你会拥有的功能

你的机器人将具备以下命令：
- `/register_language` - 注册翻译服务
- `/my_language` - 查看设置
- `/stop_translation` - 停止收到翻译
- `/translate` - 手动翻译任何内容

## 测试你的机器人

完成后，按照以下步骤测试：

1. **注册翻译服务**：让朋友选择不同的语言
2. **发送消息**：观察翻译内容出现在私信中
3. **试试手动模式**：使用 `/translate` 测试任意短语
4. **取消注册**：确保 `/stop_translation` 可以正常工作

## 需要帮助？

| 问题 | 查找位置 |
|---------|---------------|
| 无法识别语言 | [识别语言函数](detect-language-function/) |
| 翻译不起作用 | [文本翻译函数](translate-text-function/) |
| 无法注册 | [注册命令](registration-commands/) |
| 没有自动翻译 | [消息处理](message-handling-and-translate/) |
| 想要完整代码 | [完整机器人代码](full-code/) |

---