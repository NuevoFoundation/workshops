```markdown
---
title: "Discord: 构建翻译机器人"
description: "通过 Discord 集成学习 Python 中级概念，如库和 API"
date: 2025-09-15T10:11:00-07:00
prereq: "Python 基础"
difficulties: ["中级"]
language: "python"
topics: ["编程基础"]
icon: "fab fa-python"
draft: false
---

## 概览
欢迎来到课程 **Python: 构建 Discord 翻译机器人**！

{{< alert theme="info" >}}
<img src="media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 说:</strong> 准备好编写一些很棒的代码了吗？我们将构建一个能够打破语言障碍的机器人——像一位超聪明的朋友，可以即时翻译消息。让我们通过一个个翻译让互联网变得更友好。
{{< /alert >}}

![Nuvi](media/NF_mascot.jpg)
Nuvi 刚刚创建了一个全新的 Discord 服务器，让他的世界各地朋友们可以聚在一起，分享想法，策划创意项目。但有一个问题：并不是每个人都说同一种语言。有些朋友用英语聊天，有些用西班牙语，有些用葡萄牙语，还有些用韩语或中文。对话被分割开了，有些人因此感到被孤立，而 Nuvi 希望每个人都能融入其中。

于是 Nuvi 想到了一个点子：创建一个**翻译机器人**，直接驻扎在 Discord 服务器内。你将从简单的斜杠命令开始，然后升级机器人，让用户可以注册他们的首选语言（英语或西班牙语），并在其他人用另一种语言聊天时，自动收到私信 (DM) 翻译。为了实现这一点，Nuvi（还有你！）需要学习如何：

{{< alert theme="warning" >}}
<img src="media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>注意:</strong> 如果这些术语听起来有些陌生，不要担心。我们会一步步地分解它们。到最后，你会看到这些部分是如何像拼图一样拼接在一起的。
{{< /alert >}}

- 使用机器人用户将 Python 代码与 Discord 连接
- 安全地监听消息（使用正确的 intents）
- 本地运行翻译服务（LibreTranslate）
- 检测消息是英语还是西班牙语
- 自动为注册用户翻译消息
- 私下发送翻译，保持频道干净整洁
- 仍然提供手动 `/translate` 命令作为备用

到课程结束时，你将拥有一个工作中的机器人，可以帮助说不同语言的人一起聊天。你不仅是在编写代码——你是在为朋友之间建造桥梁。

### 路线图
1. 设置：前提条件 & Discord 基础知识
2. 创建机器人：注册 + 简单的斜杠命令
3. 本地运行翻译：启动 LibreTranslate + 测试脚本
4. 合并所有部分：检测、翻译、注册语言偏好
5. 延伸目标：数据持久化（保存用户语言偏好）、更多命令

### 术语表
- **Endpoint:** 服务器上执行某项任务的特定 URL（例如，`/translate`）。
- **Intent:** 一个权限标志，用于告知 Discord 你的机器人可以接收哪些事件。
- **斜杠命令 (Slash Command):** 一种以 `/` 开头的结构化命令，Discord 会验证并自动补全。
- **翻译服务器:** 本地运行的 LibreTranslate 进程，能够检测和翻译文本。
- **持久化 (延伸):** 保存用户语言选择，使其在重启后依然有效。

准备好帮助 Nuvi 了吗？让我们一步步开始构建吧。
```