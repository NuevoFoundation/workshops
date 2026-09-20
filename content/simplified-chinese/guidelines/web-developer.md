---
title: "网页开发者指南"
date: 2019-07-22T14:08:32-07:00
draft: false
weight: 4
---

本文档是为**网站开发者**提供的，用于更改 [Nuevo Foundation 工作坊项目](https://github.com/nuevoFoundation/workshops) 的模板和样式。

## 在开始之前

在添加/更新网站之前，请确保您已与项目团队以及 [项目待办事项](https://github.com/NuevoFoundation/workshops/projects/1) 中的现有工作同步。

## 设置

请按照 [快速开始](../getting-started/) 页面上的说明，安装 Git 和 Hugo，以便在本地测试项目。

## 网站设计样式和结构

- **图片：** 网站图片应存储在 `themes/images` 路径下
- **CSS：** 忽略 SCSS 文件，仅使用 `/themes/docdock/static/css/` 中的 CSS 文件。请确保将您想要包含的 CSS 引用添加到 `/themes/docdock/layouts/partials/flex/head.html` 文件中的 `head.html`。

## 解剖一个工作坊页面

- **全页面模板：** 查看页面的所有组成部分，包括标题、菜单、正文和页脚，路径：`/themes/docdock/layouts/_default/baseof.html`
- **Head 区域：** Meta、CSS 和 JS 文件的路径：`/themes/docdock/layouts/partials/flex/head.html`
- **顶部/菜单导航：** 不要使用 docDock config.toml 中的值，而是通过编辑以下 HTML 添加/更改内容：`/themes/docdock/layouts/partials/flex/body-before-content.html`
- **左侧菜单：** `/themes/docdock/layouts/partials/flex/menu.html`
- **页脚导航：** `/themes/docdock/layouts/partials/flex/body-after-content.html`
- **元数据框：** `/themes/docdock/layouts/partials/flex/body-after-content.html`

## CSS 丢失时怎么办

Hugo 的一个挑战是其构建过程中的关键参数 `baseURL` 变量。如果内容可以加载，但 CSS 无法加载，很可能是 `baseURL` 设置有问题。

您可以在构建内容时更改 `baseURL`，而无需更改 config.toml 文件。以下示例将对 CSS 和 JS 进行最小化处理，将 `baseURL` 设置为生产环境的 .org URL，并将结果复制到 `public` 目录：

`hugo --minify --baseURL "https://workshops.nuevofoundation.org/"`

## 提示与技巧

- **忽略 Public 目录：** 默认情况下，运行 `hugo` 命令（不带参数）会将网站构建到 public 目录。请确保不要将 public 目录添加到源代码管理中（目前已添加到 gitignore）。
- **左侧导航：** 您可以通过在文件中设置元数据 `hidden: true` 将内容从左侧导航中隐藏（如本工作坊的 index.md Markdown 文件一样）。
- **Partial 部件：** 要为页面创建可重复使用的组件，可以在 `/themes/docdock/layouts/partials/flex/` 下创建一个新的部分模板（Partial）。