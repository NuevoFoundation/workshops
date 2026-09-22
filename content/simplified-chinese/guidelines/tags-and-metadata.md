```yaml
---
title: "标签和元数据"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 10
---
```

每个课程页面都使用 YAML 前言来控制其在网站上的显示方式。本指南解释了每个字段的用途以及何时使用它。

## 必需的前言

每个 Markdown 文件至少需要：

```yaml
---
title: "页面标题"
date: 2026-09-16T00:00:00-07:00
draft: false
---
```

| 字段 | 目的 | 示例 |
|------|------|------|
| `title` | 在导航和页面标题中显示 | `"Python: 基础"` |
| `date` | 最近更新日期（显示在网站上） | `2026-09-16T00:00:00-07:00` |
| `draft` | `false` 表示已发布，`true` 表示正在编写中 | `false` |

## 课程主页字段

课程的 `_index.md` 文件支持其他字段：

```yaml
---
title: "Python: 基础"
description: "学习 Python 基础，包括变量、循环和函数"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["编程基础"]
difficulties: ["初学者"]
prereq: "无"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

| 字段 | 目的 | 值 |
|------|------|------|
| `description` | 列表中显示的简要说明 | 自由文本 |
| `language` | 编程语言筛选器 | 来源于 `data/taxonomy.yaml` 的一个标记 |
| `topics` | 主题筛选器 | 来源于 `data/taxonomy.yaml` 的一个或多个标记 |
| `difficulties` | 难度筛选器 | 来源于 `data/taxonomy.yaml` 的一个或多个标记 |
| `prereq` | 前置条件 | `"无"` 或课程名称 |
| `hidden` | 隐藏于导航中 | `true` / `false` |
| `alwaysopen` | 目录树的展开行为 | `false`（推荐） |
| `icon` | 首页 Font Awesome 图标 | 见下方图标 |
| `weight` | 在导航中的排序 | 数字（越小越靠前） |

`language`、`topics` 和 `difficulties` 字段决定了课程在“课程”标签筛选器中的显示方式。仅使用 `data/taxonomy.yaml` 中的控制值。未知的值不会创建新的筛选选项。

示例：

```yaml
language: "javascript"
topics: ["游戏", "网页"]
difficulties: ["初学者"]
```

## 常用图标

首页为每个课程显示一个图标。在 `icon` 前言字段中使用 [Font Awesome](https://fontawesome.com/icons) 的类：

| 类别 | 适用范围 |
|------|----------|
| `fab fa-python` | Python 课程 |
| `fab fa-html5` | HTML/网页课程 |
| `fab fa-js` | JavaScript 课程 |
| `fas fa-laptop-code` | 通用代码课程 |
| `fas fa-microchip` | 硬件 / Arduino 课程 |
| `fas fa-shield-alt` | 安全课程 |
| `fas fa-database` | SQL / 数据课程 |
| `fas fa-code` | 通用（默认） |
| `fas fa-gamepad` | 游戏课程 |
| `fas fa-music` | 音乐 / 音频课程 |

## 活动页面字段

活动页面相对更简单：

```yaml
---
title: "活动 1: Hello World"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 3
---
```

## 答案密钥字段

答案密钥应隐藏在导航中：

```yaml
---
title: "Python: 基础 - 答案密钥"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 15
hidden: true
---
```

## 日期字段

`date` 字段显示在每个页面页脚中。每次对页面进行重大更改时，请更新此字段，以便访问者知道内容是否最新。

格式：`YYYY-MM-DDTHH:MM:SS-07:00`（带时区的 ISO 8601 格式）或简单的 `YYYY-MM-DD`（仅日期）。

## YAML 提示

- 如果字符串值包含冒号，请务必用双引号包裹：`title: "Python: 基础"`
- 布尔值无需引号：`draft: false`
- 不要使用制表符 — YAML 需要用空格进行缩进
- 前言必须位于文件顶部的 `---` 分隔符之间
```