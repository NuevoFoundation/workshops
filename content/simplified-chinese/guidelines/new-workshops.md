---
title: "创建一个新的工作坊"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 2
---

本指南从想法到提交 Pull Request，带您逐步构建一个新的工作坊。在开始之前，请完成[入门指南](../getting-started/)（Git、Hugo、fork）的设置，并阅读[站点架构](../site-architecture/)概述。

## 我们的理念

Nuevo Foundation 的工作坊应该像**带领冒险**，而不是教科书。每个工作坊都讲述了一个学生可以按照自己步调进行的故事。最好的工作坊具有以下特点：

- **故事驱动**：学生跟随一个角色完成任务（如：狗狗 Benji 需要一个网站，蜜蜂 Alex 需要一个蜂巢，DJ Nuvi 需要一张热单混音带）
- **个性化**：学生可以轻松更改主题以符合他们的兴趣（例如用他们的宠物代替 Benji，用他们的国家代替哥斯达黎加）
- **循序渐进**：学生可以独立完成，即使老师不在身边
- **逐步提升**：活动一个接一个展开，每次学习一个概念
- **有趣**：采用鼓励的语气、吉祥物角色、视觉奖励和最后的庆祝活动

## 学习我们的最佳工作坊

在开发您自己的工作坊前，先研究这些金标工作坊：

### Web 基础知识（HTML/CSS） — [content/english/web-basics/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/web-basics)

- **主题**：帮助狗狗 Benji（因哈维飓风失去家园）通过建网站找到永久的家
- **为何有效**：情感引导、每页有 YouTube 视频、CodePen 嵌入支持即时编码、第 5 个活动让学生构建自己的网站，能部署到真实的 GitHub Pages
- **关键模式**：叙述 → 概念 → 视频 → 参考表 → 实践练习

### Python Turtle — [content/english/python-turtle/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-turtle)

- **主题**：帮助蜜蜂 Alex 用 Python 绘图创建一个蜂巢家园
- **为何有效**：11 个 YouTube 视频、嵌入式 Codebunga IDE、可视化代码（学生能看到代码画出的图形）、难度逐步提升（线条 → 正方形 → 六边形 → 蜂巢 → 曼陀罗花）
- **关键模式**：故事背景 → 视频 → 代码示例 → 交互式 Codebunga → 挑战

### EarSketch（Python 和 JS 块）— [content/english/python-earsketch/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-earsketch)

- **主题**：帮助 DJ Nuvi 使用代码制作一张热单混音带
- **为何有效**：学生能听到自己的代码（音乐！）、即时声音反馈、专业工具（由佐治亚理工学院开发）、在声音选择上具有创造自由
- **关键模式**：音乐概念 → 编码概念 → 构建 → 收听 → 迭代

## 使用 Copilot 创建工作坊

本存储库包含了适用于 GitHub Copilot CLI 的 `workshop-builder` 技能。    
技能遵循这些指南，研究相关的现有工作坊，使用脚手架脚本，编写内容并运行发布检查。

从存储库根目录启动 Copilot CLI：

```bash
copilot
```

如果在 Copilot 已运行时添加了技能，请重新加载项目技能：

```text
/skills reload
```

确认 Copilot 已发现该技能：

```text
/skills info workshop-builder
```

然后在提示中包括技能名称和工作坊简要说明：

```text
使用 /workshop-builder 技能创建一堂适合 10–13 岁的 45 分钟初学者 Python 
工作坊。它应在浏览器中运行，通过机器人救援故事教变量、输入和条件语句。
```

该技能将使用一份标准问卷，收集标题、年龄范围、时长、之前的编码经验、学习目标、编码语言、线下或虚拟交付形式、活动数量、故事及特殊需求。如果用户请求的活动数量可能超出可用时间，技能会对估计值进行警告，但仍保留用户的请求。

当请求明确要求创建、修改或审查 Nuevo Foundation 工作坊时，Copilot 可能会自动选择该技能。

## 第 1 步：生成工作坊框架

使用脚手架脚本生成正确的目录结构和模板文件。请勿手动创建工作坊文件——脚手架保证正确的 Hugo frontmatter、文件命名和目录布局。

**要求**：Python 3.7 或更高版本。使用 `python --version`（macOS/Linux 上为 `python3 --version`）验证版本。

在 `workshops` 存储库根目录运行以下命令：

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" \
  --coding-language python --topics programming-basics
```

使用 `--dry-run` 选项先预览将创建的内容，而不写入任何文件：

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" \
  --coding-language python --topics programming-basics --dry-run
```

这将生成标准起始结构：

```
content/english/my-workshop/
├── _index.md          ← 着陆页（介绍、前提需求、目录）
├── activity-1.md      ← 第一个活动
├── activity-2.md      ← 第二个活动
├── activity-3.md      ← 第三个活动
├── answer-key.md      ← 答案键（在导航中隐藏）
└── media/
    └── .gitkeep       ← 用于截图和图片的文件夹
```

### 脚手架选项

| 选项            | 默认值           | 描述                              |
|------------------|------------------|-----------------------------------|
| `--name`         | （必需）         | 使用 kebab-case 的目录名（如 `python-web-scraping`） |
| `--title`        | （必需）         | 显示标题（如 `"Python: Web Scraping"`） |
| `--activities` 或 `-n` | 3         | 生成的活动文件数（1 到 25）       |
| `--difficulty`   | `beginner`      | `