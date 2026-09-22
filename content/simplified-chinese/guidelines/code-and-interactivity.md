---
title: "代码与交互性"
date: 2026-09-14T00:00:00-07:00
draft: false
weight: 9
---

工作坊是互动性的。学生应该能够运行代码、查看结果并进行实验。本指南涵盖了如何嵌入代码编辑器和交互元素。

## 行内代码块

对于学生仅阅读但不直接运行的代码示例，请使用带有语言提示的标准Markdown围栏代码块：

````markdown
```python
print("Hello, World!")
```
````

支持的语言包括 `python`、`html`、`css`、`javascript`、`csharp`、`java`、`sql`、`bash` 等。

## 嵌入式代码编辑器

对于学生需要编写和运行代码的活动，可以嵌入交互式编辑器。以下是我们使用的平台：

### Replit

适用于 Python、JavaScript 和通用编程。请使用 `replit.com` 域名进行新的嵌入（旧工作坊可能使用 `repl.it`，但仍会重定向）。

```html
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/python-basics" target="_blank">启动 Replit</a>
```

或者直接嵌入：

```html
<iframe height="600" width="100%" src="https://replit.com/@nuevofoundation/python-basics" title="代码与交互性 - Replit编辑器" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
```

注意：旧工作坊会包含 `?lite=true` 在 Replit URL 中。该参数现已失效，新嵌入中可省略。

### Codebunga

请勿添加新的 Trinket 链接或嵌入。现有的 Trinket 集成为暂时保留在库中的组件，并被标记为 `TODO-IDE-Replace`，直到完成浏览器IDE迁移为止。

旧示例：

```html
<iframe src="https://codebunga.com/embed/7s5rkuud" title="代码与交互性 - Codebunga 编辑器" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```

### .NET Fiddle

最佳用于 C# 程序。

```html
<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/abc123" title="代码与交互性 - .NET Fiddle 编辑器" frameborder="0"></iframe>
```

### CodePen

最佳用于 HTML/CSS/JavaScript 的网页项目。在此代码库中，CodePen 通常用作链接按钮，而不是内嵌嵌入：

```html
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">自己尝试吧！</a>
```

## 交互式 HTML 元素

对于自定义交互（测验、拖放、按钮等），可以直接在Markdown中使用原生HTML（本站已启用Hugo支持的 `unsafe` 渲染）。或者使用 `rawhtml` 快捷代码：

```
{{</* rawhtml */>}}
<button onclick="alert('正确！')">点击我</button>
{{</* /rawhtml */>}}
```

这允许在工作坊页面中加入任意的HTML、CSS 和 JavaScript。

## 挑战结构

一个好的活动遵循以下模式：

1. **解释** 概念并进行简要描述
2. **展示** 一个带有代码块的示例
3. **挑战** 学生编写他们自己的代码
4. 使用一个提示通过通知快捷代码提供 **提示**：

```
{{% notice tip %}}
记得在调用函数时使用括号！
{{% /notice %}}
```

## 提示

- 始终提供一个 **可工作的起点**，以免学生面对空白编辑器
- 在提交前测试所有嵌入的链接
- 将嵌入编辑器的 `height="600"` 作为起始点，并根据需要调整
- 在 iframe 下方添加一个工作的备用链接，以防嵌入被阻止，例如："看不到编辑器？在新标签页中打开它。"
- 保持代码示例简短且聚焦。如果示例超过了20行，考虑将其分步拆分。

## 参见

- [格式化](../formatting) — 视觉快捷代码（警报、按钮、通知、展开）
- [标签和元数据](../tags-and-metadata) — 所有页面类型的前置字段