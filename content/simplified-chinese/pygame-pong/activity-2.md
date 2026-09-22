---
title: "活动 2 - 改变游戏中对象的颜色"
date: 2019-07-29T13:24:17-07:00
weight: 4
draft: false
---

太棒了！你刚刚修复了游戏的边界。现在，注意到游戏中的一切看上去都是黑白的吗？让我们通过为它赋予一些颜色来让它变得生动起来。

为此，我们需要修改 `COLOR` 属性中的 RGB 值。  
RGB 代表红（Red）、绿（Green）和蓝（Blue）。在电脑屏幕上，你可以通过修改每个像素的 RGB 值来改变颜色。通过不同的 RGB 值组合，你可以创建约 1670 万种不同的颜色。这些值的顺序规定和 RGB 的写法一致。使用下面的颜色选择器找到你喜欢的颜色对应的 RGB 值：  
<input type="color" id="colorpicker" style="height:50px;width:50px">

在代码中找到 `# TODO (ACTIVITY 2)`。修改 `Pong` 类的 `COLOR` 属性。如果你正确修改了，游戏中的对象将会获得你想要的颜色。按下 <b>运行</b> 按钮并确认效果。

{{% notice tip %}}

尝试使用不同的 RGB 值，观察颜色变化对游戏对象的影响。

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">启动 Replit</a>

## 收获

你刚刚通过修改 `Pong` 类的 `COLOR` 属性来影响对象在屏幕上的外观。你学习了如何修改 RGB 值以实现你想要的颜色！