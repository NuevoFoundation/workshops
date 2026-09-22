---
title: "活动 1 - 巨嘴鸟的门（AND）"
date: 2025-10-20T01:15:00-05:00
weight: 2
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="穿着巨嘴鸟服装的Nuvi插图" width="15%" />

## 介绍

当你穿行在森林中时，你来到一道巨大的木门前。  
一只巨嘴鸟出现在它旁边并说道：

> "只有当两支火把同时点燃时，这扇门才会打开。  
> 如果只有一支点燃，门是不会动的。  
> 在这里，我们使用的是 AND 逻辑。"

你的任务是使用逻辑门模拟器测试这种行为。

---

<img src="../media/pattern.webp" alt="逻辑工作坊的装饰图案" width="100%" />

## 什么是 AND 门？

- 它有 **两个输入** 和 **一个输出**。  
- 输出只有在 **两个输入都为 `1`** 的情况下才会开启（`1`）。  
- 如果其中一个或两个输入为 `0`，输出保持关闭（`0`）。

<details class="lg-details">
<summary class="lg-summary">
查看完整的真值表
</summary>

<div class="lg-div">

| 输入 A | 输入 B | AND 输出 |
|---------|---------|---------|
| 0       | 0       | 0       |
| 0       | 1       | 0       |
| 1       | 0       | 0       |
| 1       | 1       | 1       |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="森林中木门的风景" width="100%" />

## 模拟器使用说明

### 1. 放置组件
1. 确保你已进入 **编辑模式**。
2. 在左侧边栏中，点击以下项目：
   - **Input（输入）** ➔ 放置 **两个** 输入（A 和 B）。
   - **AND Gate（AND 门）** ➔ 放置一个 AND 门。
   - **Output（输出）** ➔ 在门的右侧放置一个输出。

<img src="../media/actividad_1.png" alt="包含两个输入和一个输出的 AND 电路的视觉示例" width="20%" class="lg-img"/>

### 2. 连接组件
1. 单击 **输入 A** 的输出圆点，然后单击 AND 门的一个输入端。  
2. 对 **输入 B** 重复相同操作。  
3. 从 AND 门的输出端连接到 **输出** 圆点。

### 3. 测试电路
- 单击每个输入以在 `0` 和 `1` 间切换。  
- 尝试所有可能的组合。  
- 巨嘴鸟的门仅在输入 A 为 1 且输入 B 为 1（A=1 且 B=1）时才会“打开”（输出 = 1）。

---

## 模拟器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="逻辑门模拟器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 你学到了什么？

- AND 表示必须同时满足的条件：只有当 A = 1 且 B = 1 时，输出才会被激活。  
- 如果其中一个输入为 0，输出也将为 0，毫无例外。

---

## 接下来

在接下来的活动中，你将沿着小道前行，直到遇见树懒，并发现 OR 门的工作原理。