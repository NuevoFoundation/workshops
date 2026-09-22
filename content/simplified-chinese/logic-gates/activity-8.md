---
title: "活动 8 - 小猴子的镜子屋 (与/或/非 实现相等)"
date: 2025-10-20T02:55:00-05:00
weight: 9
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi 打扮成一只小猴子" width="20%" />

## 介绍

在反射大厅中，小猴子解释道：

> “要启动密室，信号必须**匹配**。  
> 如果 A 和 B 相等，门就会打开。”

---

<img src="../media/pattern.webp" alt="逻辑研讨会的装饰图案" width="100%" />

## 逻辑目标

使用 **与/或/非** 构建当 A = B 时输出等于 1 的电路：

<details class="lg-details">
<summary class="lg-summary">
查看完整的真值表
</summary>

<div class="lg-div">

| A | B | 非 A | 非 B | A 与 B | (非 A 且 非 B) | 输出 |
|---|---|-------|-------|---------|--------------------|--------|
| 0 | 0 |   1   |   1   |    0    |         1          |   1    |
| 0 | 1 |   1   |   0   |    0    |         0          |   0    |
| 1 | 0 |   0   |   1   |    0    |         0          |   0    |
| 1 | 1 |   0   |   0   |    1    |         0          |   1    |

</div>
</details>

---

<img src="../media/paisaje_bosque.webp" alt="神秘森林的风景" width="100%" />

## 模拟器指引

### 1. 放置
- **输入**: A, B  
- **非门** (x2)  
- **与门** (x2)  
- **或门**  
- **输出**

<img src="../media/actividad_8.png" alt="使用与、或、非门的 XNOR 电路的视觉示例，具有两个输入和一个输出" width="20%" class="lg-img"/>

### 2. 连接
1. A ➔ **非门**: `非_A`  
2. B ➔ **非门**: `非_B`  
3. A 和 B ➔ **与门 1** (分支 "均为 1")  
4. `非_A` 和 `非_B` ➔ **与门 2** (分支 "均为 0")  
5. **与门 1** 和 **与门 2** ➔ **或门**  
6. **或门** ➔ **输出**

### 3. 测试
- 尝试 00, 01, 10, 11。  
- 输出应在 00 和 11 时为 1。

**胜利条件：** 如果且仅当 A 和 B 匹配时，输出 = 1。

---

## 快速提示

- 如果在 01 或 10 时输出为 1，请检查从 `非_A`/`非_B` 到 **与门 2** 的电缆连接。  
- 保持两个分支对称，以使电路易于阅读。

---

## 模拟器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="逻辑门模拟器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 你学到了什么？

- 使用 **与/或/非** 构建“**它们相等**”条件的方法。  
- 学会使用**并行分支**来涵盖互补情况。