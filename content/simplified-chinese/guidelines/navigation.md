```yaml
---
title: "导航"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 8
---
```

Hugo 在每个 Markdown 文件中使用 frontmatter 元数据来控制页面如何显示在站点导航中。本指南涵盖了关键设置。

## 使用 weight 字段控制页面排序

`weight` 字段控制页面在左侧边栏和目录中的排序。数字越小，页面越靠前。

```yaml
---
title: "活动 1: 开始入门"
weight: 3
---
```

**推荐的 weight 方案:**

| 页面类型          | Weight | 示例           |
|-------------------|--------|----------------|
| `_index.md` (主页面) | 1      | 研讨会简介       |
| 设置 / 前提条件    | 2      | 所需工具         |
| 活动              | 3, 4, 5... | 活动 1、2、3    |
| 答案提示          | 15+    | 隐藏于导航中     |

如果预期之后需要插入页面，请在活动的 weight 值之间预留间隔（例如，使用 3、5、7，而不是 3、4、5）。

## 控制目录 (TOC)

### 折叠的目录 (推荐)

研讨会应以故事简介开始可见，而活动列表是折叠的：

```yaml
---
title: "Python: 基础"
alwaysopen: false
---
```

当设置 `alwaysopen: false` 时，子页面会显示为边栏中的可折叠树状结构。学生可以在需要时展开部分内容。

### 展开的目录

对于非常短的研讨会（3 个或更少活动），你可能希望所有部分都可见：

```yaml
---
title: "简短研讨会"
alwaysopen: true
---
```

## 隐藏页面

### 隐藏的页面 (已生成但不在导航中)

对那些需要存在但不应出现在侧边栏导航中的页面，可以使用 `hidden: true`。学生仍然可以通过直接链接访问这些页面。

```yaml
---
title: "答案提示"
hidden: true
---
```

常见用途：答案提示、讲师笔记、额外内容。

### 草稿页面 (不会在正式环境中生成)

对于尚未完成的工作并且不应出现在线上网站中的内容，可以使用 `draft: true`：

```yaml
---
title: "未完成的研讨会"
draft: true
---
```

草稿页面仅在运行 `hugo server -D` 时出现（`-D` 标志会包含草稿内容）。

## children Shortcode

要在主页面显示子页面列表，可以在一个折叠的 details 元素中使用 `children` shortcode：

```html
<details>
<summary>目录</summary>
{{% children /%}}
</details>
```

这会生成一个干净的、可折叠的目录，当学生准备好时可以展开查看。一些现有研讨会在使用 `<details open>` 时默认展开。

## 研讨会主页面模板

以下是一个完整的 `_index.md` frontmatter 示例：

```yaml
---
title: "Python: 基础"
description: "学习 Python 基础知识"
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

## 小提示

- 用 `hugo server -D` 本地测试导航更改后再提交
- 确保答案提示的设置为 `hidden: true`，以便学生无法看到
- 在研讨会内保持 weight 数字一致性
- 如果重新排序页面，请更新所有 weight 以避免出现间隙或冲突