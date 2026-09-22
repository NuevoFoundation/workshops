---
title: "活动 7 - 定义退出游戏的按键组合"
date: 2019-07-29T13:24:17-07:00
weight: 9
draft: false
---

到了本次工作坊的最后一个活动；太棒了！你已经做得很出色，能完成到这里应该为自己感到骄傲！

在这个活动中，你需要更改游戏退出的方式，使其在按下指定的按键组合时退出游戏。

在代码中找到 `# TODO (ACTIVITY 7)` 。Pygame 库为你提供了一种方便的方法，可以通过使用 `event` 检测程序运行时按下的按键。
目前，游戏在按下 `'BACKSPACE'` 键或整个窗口被关闭时退出程序。将其更改为在键盘上按下 `'ESC'` 键时退出游戏。

{{% notice tip %}}

如果 Pygame 库中 `'BACKSPACE'` 键的值是 `K_BACKSPACE`，你能猜出 `'ESC'` 键的值是什么吗？多试几次再寻求帮助。你一定可以做到的！
按下 **Run** 来确认结果。

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">启动 Replit</a>

## 收获总结

你刚刚通过侦听特定按键按下的事件，更改了游戏的退出方式。