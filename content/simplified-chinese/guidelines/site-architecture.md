---
title: "站点是如何构建的"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 1
---

# 站点是如何构建的

工作坊子域内容通过 Hugo 的 [DocDock](https://docdock.netlify.com/) 主题构建。[Hugo](https://gohugo.io) 是一个静态站点生成器，具有多项优势：

1. **内容作者** 可以专注于使用 markdown 撰写内容，而不需要关注站点的技术实现或 CSS/页面样式。工作坊内容会 *自动* 添加到左侧目录和工作坊主页。Hugo 在本地运行非常流畅（例如：在飞机上），并且是最快的静态站点生成器，能够在 2 秒内构建整个工作坊站点。  
2. **学生** 受益于工作坊之间一致的用户体验、内置的可访问性、本地化支持、从移动设备到桌面的响应式设计、指向 GitHub 仓库的自动链接，以及通过 Azure CDN 实现的全球快速站点性能。
3. **Nuevo 开发团队** 可以灵活构建和定制工作坊页面，包括自定义页面模板、[内置页面控件用于警报、注释、按钮、警告等](https://workshops.nuevofoundation.org/guidelines/formatting/)，自定义控件（例如 Nuevo 标题）、iframe 交互功能、定制元数据、自动跨页面链接、页面主题设置、自动站点地图生成、内置图标，以及通过 GitHub Actions 和 Azure DevOps 进行构建/部署的自动化功能。