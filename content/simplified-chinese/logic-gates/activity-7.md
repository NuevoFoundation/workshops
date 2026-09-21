---
title: "活动7 - 青蛙的桥（不同值与 AND/OR/NOT）"
date: 2025-10-20T02:40:00-05:00
weight: 8
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/ranita.jpg" alt="Nuvi 装扮成青蛙" width="15%" />

## 介绍

**青蛙**守护着一座桥，并制定了一条严格的规则：

> “只有那些携带**正好一个**点燃火把的人才能通过。  
> 如果你携带的是零个或两个火把，桥会关闭。”

---

<img src="../media/pattern.webp" alt="逻辑工作坊的装饰图案" width="100%" />

## 逻辑目标

构建一个输出值为1的电路，当 A 和 B **不同**时。  
该电路只能使用 **AND**, **OR**, 和 **NOT** 来实现：

<details class="lg-details">
<summary class="lg-summary">
查看完整的真值表
</summary>

<div class="lg-div">

| A | B | A OR B | A AND B | NOT(A AND B)  | Output |
|---|---|--------|---------|---------------|--------|
| 0 | 0 |   0    |    0    |       1       |   0    |
| 0 | 1 |   1    |    0    |       1       |   1    |
| 1 | 0 |   1    |    0    |       1       |   1    |
| 1 | 1 |   1    |    1    |       0       |   0    |

</div>
</details>

---

<img src="../media/paisaje_lago.webp" alt="森林中的湖泊景观" width="100%" />

## 模拟器说明

### 1. 放置
- **输入**：A, B  
- **OR门**  
- **AND门** (x2)  
- **NOT门**  
- **输出**

<img src="../media/actividad_7.png" alt="显示使用 AND, OR 和 NOT 构建 XOR 电路的示例，与两个输入和一个输出" width="20%" class="lg-img"/>

### 2. 连接
1. A 和 B ➔ **OR**: `OR_AB`  
2. A 和 B ➔ **AND1**: `AND_AB`  
3. `AND_AB` ➔ **NOT**: `NOT_AND_AB`  
4. `OR_AB` 和 `NOT_AND_AB` ➔ **AND2**  
5. **AND2** ➔ **输出**

### 3. 测试
- 验证 00, 01, 10, 11。  
- 输出值应仅在 01 和 10 时为 1。

**胜利条件：** 当 A ≠ B 时输出 = 1。

---

## 小贴士

- 如果你在 11 的情况下得到输出1，可能是漏掉了对 `AND_AB` 的取反操作。  
- 请将 `OR_AB` 和 `NOT_AND_AB` 分支进行视觉上的分离，以避免电线交叉。

---

## 模拟器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="逻辑门模拟器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 你学到了什么？

- 如何使用 **AND/OR/NOT** 构建 "**它们不同**" 的逻辑条件。