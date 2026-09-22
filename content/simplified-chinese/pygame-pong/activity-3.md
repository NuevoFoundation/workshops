---
title: "活动 3 - 修改左侧球拍的按键分配"
date: 2019-07-29T13:24:17-07:00
weight: 5
draft: false
---

干得好！你不仅修复了游戏边界问题，还成功让物体具有了颜色。现在，让我们来看看你是否能更改球拍移动的按键设定。

为此，我们需要修改创建左侧球拍对象时传递的其中一个参数。回想一下在“基础知识 - 类和对象”部分中，你定义了一个包含 UP 和 DOWN 按键分配的 `Paddle` 类作为其属性。

在代码中找到 `# TODO (ACTIVITY 3)`。修改对应的属性值，使按下 `'s'` 键可以让左侧球拍向下移动。请注意，目前左侧球拍的向下移动是由 `'T'` 键控制的。

{{% notice tip %}}

尝试将 UP 按键替换为其他按键。按下<b>运行</b>按钮测试你的更改。

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">启动 Replit</a>

## 收获总结

你刚刚修改了 `Paddle` 类中的 `down_key` 属性，从而改变了左侧球拍对象在屏幕上的移动方式。