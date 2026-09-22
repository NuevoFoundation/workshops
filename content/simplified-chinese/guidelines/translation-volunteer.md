---
title: "翻译志愿者指南"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 6
---

感谢您帮助我们让更多的孩子能够参与到全球各地的工作坊中！本指南将向您解释如何将现有工作坊翻译成一种新的语言。

## 开始之前

1. 检查目标语言的工作坊是否已经存在。浏览 `content/` 目录中的语言文件夹：

| 文件夹 | 语言 |
|--------|----------|
| `content/english/` | 英语 |
| `content/espanol/` | 西班牙语 |
| `content/brazilian-portuguese/` | 巴西葡萄牙语 |
| `content/korean/` | 韩语 |
| `content/francais/` | 法语 |
| `content/german/` | 德语 |
| `content/simplified-chinese/` | 简体中文 |
| `content/traditional-chinese/` | 繁体中文 |
| `content/kyrgyz/` | 吉尔吉斯语 |

2. 在 GitHub 上打开一个 [翻译请求问题](https://github.com/NuevoFoundation/workshops/issues/new)，让其他人知道您正在进行此项工作。

## 翻译是如何工作的

每种语言都有自己的文件夹位于 `content/` 目录下。每种语言的文件夹结构与英文版本相同：

```
content/
  english/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
  espanol/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
```

## 分步指南

### 1. 复制英文工作坊

将整个英文工作坊文件夹复制到目标语言的目录下：

```bash
cp -r content/english/python-basics content/espanol/python-basics
```

### 2. 翻译内容

针对每个 `.md` 文件：

- **翻译** 所有可见文字（标题、段落、说明、提示）
- **保持** 所有 Hugo frontmatter 键使用英文（例如：`title`、`date`、`draft`、`weight` 等）
- **翻译** frontmatter 中的值（例如：`title: "Python: Conceptos basicos"`）
- **保持** 所有代码示例使用英文（代码是通用的）
- **翻译** 如果代码中有注释则翻译注释
- **保持** 所有文件路径、图片引用以及 Hugo shortcodes 不变
- **翻译** 图片替代文字（alt text）为目标语言

### 3. 处理图片

- **通用图片**（代码截图、示意图）：将英文的 `img/` 或 `media/` 文件夹复制到翻译版本。图片文件在各语言间通用。
- **包含文字的图片**（图片中含英文文字）：如果可能，请创建本地化版本。如果不可行，请保留英文版本并在 Pull Request 中注明。
- **替代文字**：始终将替代文字翻译为目标语言。屏幕阅读器会使用页面设置的语言。

### 4. 本地测试

```bash
hugo server -D
```

导航到您的翻译版本工作坊并验证：
- 所有页面均可正常加载，无报错
- 图片正确显示
- 导航正常工作（目录、上一页/下一页）
- 代码示例保持完整

### 5. 提交您的 Pull Request

- 标题：`Translation: [工作坊名称] to [语言]`
- 描述：列出所有已翻译的文件以及仍包含英文文字的图片
- 确保翻译了**整个工作坊**，而不仅仅是登录页面

## 提示

- 以学生视角完成工作坊操作。如果翻译过程中发现某些内容不太合理，请重新措辞。
- 保持句子简短清晰。这些工作坊面向 8 至 18 岁的青少年。
- 如果对技术术语存疑，请保留英文原词，并在首次出现时添加简短的目标语言解释。
- 不要翻译 URL 或文件夹名称中的工作坊名称——它们必须保持英文以支持 Hugo 路由。

## 特定语言注意事项

### 西班牙语

- 使用 **tú** 动词变位以适应广泛的拉丁美洲受众（不要使用 voseo）
- 翻译代码注释，但保持变量名和函数名使用英文
- 像 "string"、"loop"、"function" 这样的技术术语可以保留英文，并在首次出现时添加简短的西班牙语解释