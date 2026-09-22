---
title: "活动 5 - 声明并使用一个变量表示字体"
date: 2019-07-29T13:24:17-07:00
weight: 7
draft: false
---

到目前为止，表现得很棒！现在让我们使用一个变量来改变游戏中文本的字体。

在本次活动中，你需要运用在 Python 基础知识工作坊中学到的关于变量的知识。

在代码中找到 `# TODO (ACTIVITY 5)`。声明一个变量 `font_label` 并将其赋值为 `'arial'`。现在看看代码中的这条语句 `font_name = pygame.font.match_font('arial')`。你能否找出这个新变量应该在该语句的什么位置使用，以控制屏幕上的显示字体？

{{% notice tip %}}

你可以通过运行 `pygame.font.get_fonts()` 获取你的计算机支持的字体列表。试试使用 `'arial'` 以外的字体。你最喜欢哪种字体？按下 **运行 (Run)** 来查看结果。

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">启动 Replit</a>

## 收获

你刚刚使用变量修改了字体参数。如果你在程序的多个地方使用了同一字体，现在只需要修改变量的值，它将在所有使用该变量的地方生效！